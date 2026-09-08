// 用户界面控制 - MC风格下拉框选择

const itemPreviewImages = {
  'iron_sword': 'assets/preview_iron_sword.png',
  'bow': 'assets/preview_bow.png',
  'armor_stand': 'assets/icons/盔甲架.png',
  'trident': 'assets/icons/三叉戟.png',
  'bed': 'assets/icons/稻草床.png',
  'spawner': 'assets/icons/刷怪笼.png',
  'snow_golem': 'assets/icons/南瓜头.png',
  'dispenser': 'assets/icons/发射器.png',
  'powered_rail': 'assets/icons/动力铁轨.png',
  'clock': 'assets/icons/时钟.png'
};

// 进入战斗的公共逻辑：隐藏主界面按钮、显示战斗界面、绑定暂停/返回、启动游戏
// （开始按钮和图鉴的“实机演示”按钮共用，避免两处逻辑不一致）
function startBattle(item1, item2, item3, item4) {
  stopBGM();   // 游戏开始：背景音乐暂停（2026-09 用户需求）
  document.getElementById('mainContainer').style.display = 'none';
  document.getElementById('gameContainer').style.display = 'block';
  // 进入战斗后隐藏顶部的开始/图鉴/模式切换按钮（战斗中没用）
  document.getElementById('startBtn').style.display = 'none';
  document.getElementById('randomBtn').style.display = 'none';
  document.getElementById('guideBtn').style.display = 'none';
  document.getElementById('modeToggle').style.display = 'none';

  // 暂停按钮：切换 game.gamePaused，文字在 暂停/继续 间切换
  const pauseBtn = document.getElementById('pauseBtn');
  const backBtn = document.getElementById('backBtn');
  pauseBtn.style.display = 'inline-block';
  backBtn.style.display = 'inline-block';
  pauseBtn.textContent = '暂停';
  if (window.game) window.game.gamePaused = false;
  pauseBtn.onclick = () => {
    if (window.game) {
      window.game.togglePause();
      pauseBtn.textContent = window.game.gamePaused ? '继续' : '暂停';
    }
  };
  // 返回按钮：回到主选择界面，重置状态
  backBtn.onclick = () => {
    if (window.game) {
      window.game.gameRunning = false;   // 停掉游戏循环
      window.game.gamePaused = false;
    }
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('mainContainer').style.display = 'flex';
    document.getElementById('startBtn').style.display = '';
    document.getElementById('randomBtn').style.display = '';
    document.getElementById('guideBtn').style.display = '';
    document.getElementById('modeToggle').style.display = '';
    startBGM();   // 回到主界面：背景音乐继续播放（2026-09 用户需求）
  };

  if (typeof window.game === 'undefined' || !window.game) {
    window.game = new Game('gameCanvas');
  }
  window.game.start(item1, item2, item3, item4);   // 只传2个=1v1（图鉴实机演示），传4个=2v2组队
}

function initUI() {
  const selects = ['item1', 'item2', 'item3', 'item4'].map(id => document.getElementById(id));
  const previews = ['preview1', 'preview2', 'preview3', 'preview4'].map(id => document.getElementById(id));
  const placeholders = ['placeholder1', 'placeholder2', 'placeholder3', 'placeholder4'].map(id => document.getElementById(id));
  const startBtn = document.getElementById('startBtn');

  // 对战模式：单按钮点击在 1v1（每玩家1个）/ 2v2（每玩家2个）间切换，1v1 隐藏每玩家第二个槽
  let gameMode = '1v1';   // 刷新默认 1v1 模式（2026-09 用户要求）
  const modeToggleBtn = document.getElementById('modeToggleBtn');
  const slot1b = document.getElementById('slot1b');   // 玩家1 第二个槽（item2）
  const slot2b = document.getElementById('slot2b');   // 玩家2 第二个槽（item4）
  function applyMode() {
    modeToggleBtn.textContent = gameMode;                 // 按钮显示当前模式
    modeToggleBtn.classList.toggle('mode-active', true);  // 始终高亮（当前模式）
    slot1b.style.display = (gameMode === '1v1') ? 'none' : '';
    slot2b.style.display = (gameMode === '1v1') ? 'none' : '';
  }
  modeToggleBtn.addEventListener('click', () => {
    gameMode = (gameMode === '1v1') ? '2v2' : '1v1';
    applyMode();
  });
  applyMode();   // 刷新时按默认模式应用布局（1v1 隐藏第二个槽）

  // 可玩物品（盔甲架是测试专用、僵尸头颅是召唤物，不进选择栏）
  const playableKeys = itemKeys.filter(k => k !== 'armor_stand' && k !== 'zombie_head');

  // 填充下拉框：玩家1 两个（item1/item2）、玩家2 两个（item3/item4）
  selects.forEach(sel => {
    playableKeys.forEach(key => {
      const opt = document.createElement('option');
      opt.value = key;
      opt.textContent = items[key].name;
      sel.appendChild(opt);
    });
  });

  // 默认选择：玩家1 = 铁剑 + 弓，玩家2 = 三叉戟 + 时钟
  selects[0].value = 'iron_sword';
  selects[1].value = 'bow';
  selects[2].value = 'trident';
  selects[3].value = 'clock';

  // 更新预览图
  function updatePreview(selectEl, previewImg, placeholder) {
    const key = selectEl.value;
    if (itemPreviewImages[key]) {
      previewImg.src = itemPreviewImages[key];
      previewImg.style.display = 'block';
      placeholder.style.display = 'none';
    }
  }

  // 监听选择变化
  selects.forEach((sel, i) => {
    sel.addEventListener('change', () => {
      updatePreview(sel, previews[i], placeholders[i]);
      checkReady();
    });
  });

  // 随机抽选按钮：4个展示栏老虎机式滚动（玩家1两个先落、玩家2两个晚落）
  const randomBtn = document.getElementById('randomBtn');
  let rollToken = 0;   // 滚动令牌：再次点击会作废旧滚动
  randomBtn.addEventListener('click', () => {
    const token = ++rollToken;
    startBtn.disabled = true;   // 滚动期间禁用开始，落地后再放开
    // 洗牌取前 N：随机 N 个物品且两两不同（1v1 取2，2v2 取4）
    const shuffled = playableKeys.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const pickCount = gameMode === '1v1' ? 2 : 4;
    const picks = shuffled.slice(0, pickCount);
    // 老虎机滚动：预览图快速轮换随机物品、逐渐减速，最后落地到 finalKey
    function rollPreview(selectEl, previewImg, placeholder, finalKey, dur, onLand) {
      const t0 = Date.now();
      (function tick() {
        if (token !== rollToken) return;   // 已被新的滚动取代
        const elapsed = Date.now() - t0;
        if (elapsed >= dur) {
          selectEl.value = finalKey;
          updatePreview(selectEl, previewImg, placeholder);
          onLand && onLand();
          return;
        }
        const rk = playableKeys[Math.floor(Math.random() * playableKeys.length)];
        previewImg.src = itemPreviewImages[rk];
        previewImg.style.display = 'block';
        if (placeholder) placeholder.style.display = 'none';
        const progress = elapsed / dur;
        const delay = 70 + progress * progress * 180;   // 减速：间隔逐渐变大（老虎机感）
        setTimeout(tick, delay);
      })();
    }
    let landed = 0;
    const allLanded = () => { landed++; if (landed === pickCount) startBtn.disabled = false; };
    // 玩家1先落，玩家2晚落，更有抽选感；1v1 只用每玩家的第一个槽（item1/item3）
    rollPreview(selects[0], previews[0], placeholders[0], picks[0], 900, allLanded);
    rollPreview(selects[2], previews[2], placeholders[2], picks[1], 1050, allLanded);
    if (gameMode === '2v2') {
      rollPreview(selects[1], previews[1], placeholders[1], picks[2], 1200, allLanded);
      rollPreview(selects[3], previews[3], placeholders[3], picks[3], 1350, allLanded);
    }
  });

  // 检查是否可以开始
  function checkReady() {
    startBtn.disabled = false;
  }

  // 开始按钮：1v1 传2个参数（走 1v1 逻辑），2v2 传4个参数（组队）
  startBtn.addEventListener('click', () => {
    if (gameMode === '1v1') {
      startBattle(selects[0].value, selects[2].value);
    } else {
      startBattle(selects[0].value, selects[1].value, selects[2].value, selects[3].value);
    }
  });

  // 初始化预览图
  selects.forEach((sel, i) => updatePreview(sel, previews[i], placeholders[i]));

  // 右上角音乐/声音开关按钮：主界面暂停/恢复背景音乐，战斗时关闭全部游戏声音
  const musicBtn = document.getElementById('musicBtn');
  musicBtn.addEventListener('click', () => {
    soundMuted = !soundMuted;
    musicBtn.textContent = soundMuted ? '🔇' : '🎵';
    if (soundMuted) stopBGM(); else startBGM();
  });
  // 浏览器自动播放限制：主界面任意点击时兜底启动背景音乐（reload 后也能响）
  document.addEventListener('click', () => {
    const inBattle = document.getElementById('gameContainer').style.display === 'block';
    if (!inBattle && !soundMuted) startBGM();
  });

  // 图鉴按钮
  const guideBtn = document.getElementById('guideBtn');
  const guideOverlay = document.getElementById('guideOverlay');
  const closeGuideBtn = document.getElementById('closeGuideBtn');
  const itemGuideList = document.getElementById('itemGuideList');
  
  // 生成图鉴内容
  function buildGuide(filter) {
    itemGuideList.innerHTML = '';
    const kw = (filter||'').trim().toLowerCase();
    itemKeys.forEach(key => {
      if (key === 'armor_stand' || key === 'zombie_head') return; // 测试靶和召唤物不进图鉴
      const item = items[key];
      if (kw && item.name.toLowerCase().indexOf(kw) === -1) return; // 搜索过滤
      const typeDesc = {
        'melee': '近战',
        'ranged': '远程',
        'explosive': '爆炸',
        'tank': '坦克',
        'teleport': '特殊',
        'trident': '远程',
        'bed': '特殊',
        'spawner': '召唤',
        'minion': '召唤物',
        'snow_golem': '远程',
        'dispenser': '远程',
        'powered_rail': '特殊',
        'clock': '召唤'
      };
      
      const abilityDesc = {
        'iron_sword': '快速近战攻击，近距离连续伤害',
        'bow': '拉弓蓄力（三段拉弓动画），拉满后朝敌人射出像素箭，箭命中才造成伤害',
        'armor_stand': '测试靶子，缓慢移动不会攻击，专门用来测试',
        'trident': '投掷到敌人身旁，1秒后生成电击圈造成伤害，然后飞回原位',
        'bed': '沿途放置稻草床，敌人靠近会被强制吸附上床睡觉1.2秒，睡醒扣150血；每次受伤消耗一张床（共15张），只剩最后一张床时变为250血量的普通单位；放床冷却2秒',
        'spawner': '每隔3秒在身边刷出一只僵尸头颅替它战斗（最多10只，满10只后每8秒还能再招一只），僵尸追踪敌人啃咬造成小伤害，本体血量1000',
        'snow_golem': '朝敌人发射雪球，命中造成伤害并将敌人短促击退',
        'zombie_head': '刷怪笼召唤的僵尸，追踪最近的敌人啃咬，血量低伤害不高',
        'dispenser': '自动往九宫格里装填箭/火焰弹/鸡蛋/雪球（每0.7秒一格），装满9格后朝敌人一次性发射全部；边上的合成器实时显示已装填的弹药',
        'powered_rail': '每4秒沿当前朝向生成一条完整长铁轨（朝向随碰撞反弹改变），铁轨可超出战斗框架，矿车沿铁轨来回行驶撞敌扣血，最多5条',
        'clock': '召唤小时钟弧形追踪敌人，命中造成伤害；受到致命伤害时时间暂停6秒（画面变灰），12个小时钟在敌人周围围成一圈逐个出现，暂停结束后全部攻向敌人'
      };
      
      const card = document.createElement('div');
      card.style.cssText = 'background:#c6c6c6;border:4px solid #000;border-top-color:#fff;border-left-color:#fff;box-shadow:inset -4px -4px 0 #8b8b8b, 4px 4px 0 #000;padding:20px;color:#000;display:flex;gap:20px;align-items:center;';
      // 所有容器都是120x120正方形，图片保持原比例居中不变形
      card.innerHTML = `
        <div style="width:120px;height:120px;background:#8b8b8b;border:3px solid #000;display:flex;align-items:center;justify-content:center;image-rendering:pixelated;">
          <img src="${itemPreviewImages[key]}" style="width:100px;height:100px;image-rendering:pixelated;object-fit:contain;" />
        </div>
        <div style="flex:1;">
          <h3 style="margin:0 0 15px 0;font-size:16px;color:#000;text-shadow:1px 1px 0 #fff;">${item.name}</h3>
          <div style="font-size:10px;line-height:2.5;margin-bottom:12px;">
            <div><span style="color:#1E8449;">▸ 类型:</span> ${typeDesc[item.type]}</div>
            <div><span style="color:#1E8449;">▸ 血量:</span> ${item.hp}</div>
            <div><span style="color:#1E8449;">▸ 伤害:</span> ${item.attack}</div>
            <div><span style="color:#1E8449;">▸ 攻击间隔:</span> ${item.attackCooldown}ms</div>
            <div><span style="color:#1E8449;">▸ 能力说明:</span> ${abilityDesc[key]}</div>
          </div>
          <button onclick="startLiveDemo('${key}')" style="background:#7d7d7d;border:3px solid #000;border-top-color:#a8a8a8;border-left-color:#a8a8a8;color:#fff;font-family:'Press Start 2P',monospace;font-size:10px;padding:8px 20px;cursor:pointer;text-shadow:2px 2px 0 #000;box-shadow:inset -2px -2px 0 #555, 2px 2px 0 #000;">实机演示</button>
        </div>
      `;
      itemGuideList.appendChild(card);
    });
  }
  
  const guideSearch = document.getElementById('guideSearch');
  guideSearch.addEventListener('input', () => {
    buildGuide(guideSearch.value);
  });
  
  guideBtn.addEventListener('click', () => {
    guideSearch.value = '';
    buildGuide();
    guideOverlay.style.display = 'block';
  });
  
  closeGuideBtn.addEventListener('click', () => {
    guideOverlay.style.display = 'none';
  });
  
  guideOverlay.addEventListener('click', (e) => {
    if (e.target === guideOverlay) {
      guideOverlay.style.display = 'none';
    }
  });
}

// 实机演示按钮：从图鉴直接开打，对手是缓慢移动的盔甲架
function startLiveDemo(itemKey) {
  document.getElementById('guideOverlay').style.display = 'none';
  startBattle(itemKey, 'armor_stand'); // 固定对手是盔甲架
}

window.addEventListener('DOMContentLoaded', initUI);
