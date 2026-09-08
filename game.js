// 背景直接用纯色，避免数组语法错误
const SNOWBALL_PIXELS = [[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,4,3,3,4,1,5,0,0],[0,1,4,3,2,4,2,3,4,1,5,0],[0,1,3,2,3,2,2,3,2,4,5,0],[1,3,4,2,2,2,3,2,4,3,1,5],[1,4,2,2,2,2,2,2,3,4,6,5],[1,4,3,2,3,2,3,4,3,6,4,5],[1,6,6,3,2,3,2,3,6,4,1,5],[0,1,4,6,6,3,4,6,6,6,5,0],[0,5,1,6,6,6,6,6,4,1,5,0],[0,0,5,5,1,4,6,1,5,5,0,0],[0,0,0,0,5,5,5,5,0,0,0,0]];
const SNOWBALL_COLORS = {"1":"#afcaca","2":"#ffffff","3":"#e8f8f8","4":"#d0f1f1","5":"#7ba6a6","6":"#c2dada"};
const FIRE_CHARGE_PIXELS = [[0,0,0,0,1,1,1,1,0,0,0,0],[0,0,1,1,2,3,4,2,1,1,0,0],[0,1,2,4,5,6,7,8,4,2,9,0],[0,1,4,7,10,8,5,10,6,4,9,0],[1,2,7,5,11,5,10,5,7,8,6,9],[1,3,6,8,5,11,7,7,5,3,4,9],[1,4,5,10,7,5,10,8,3,7,4,9],[9,2,7,5,10,8,6,5,6,4,2,9],[0,9,4,5,6,7,3,4,4,6,9,0],[0,9,2,3,4,4,3,4,4,2,9,0],[0,0,9,9,2,6,4,2,9,9,0,0],[0,0,0,0,9,9,9,9,0,0,0,0]];
const FIRE_CHARGE_COLORS = {"1":"#372a28","2":"#373529","3":"#562a00","4":"#514931","5":"#7a5c43","6":"#993500","7":"#6c6056","8":"#95896d","9":"#1f1615","10":"#c16d0b","11":"#eeac18"};
const EGG_PIXELS = [[0,0,0,1,1,1,1,1,0,0,0,0],[0,0,1,2,3,3,3,2,1,0,0,0],[0,1,2,4,3,3,3,3,5,1,0,0],[0,1,4,4,3,3,3,3,2,6,0,0],[1,2,4,3,3,3,3,3,2,5,6,0],[1,3,3,3,3,3,3,3,2,2,6,0],[1,3,3,3,3,3,3,3,2,2,6,0],[1,3,3,3,3,3,3,3,2,2,6,0],[1,3,3,3,3,3,3,2,2,2,6,0],[1,2,3,3,3,2,2,2,2,5,6,0],[0,6,5,2,2,2,2,2,5,6,0,0],[0,0,6,6,6,6,6,6,6,0,0,0]];
const EGG_COLORS = {"1":"#746b51","2":"#b3a57d","3":"#dfce9b","4":"#f0e6c6","5":"#8e825b","6":"#554e3b"};
// 发射器九宫格迷你图标（4x4，在合成器上显示）
const ARROW_MINI = [[0,0,0,1],[0,0,1,1],[1,2,0,0],[0,0,0,0]];
const FIRE_CHARGE_MINI = [[1,1,1,1],[1,5,5,9],[4,5,3,9],[9,9,4,9]];
const EGG_MINI = [[1,3,1,1],[1,3,3,6],[3,3,3,2],[6,2,2,6]];
const SNOWBALL_MINI = [[1,1,1,5],[1,2,2,5],[1,3,3,5],[5,6,6,5]];
// 发射器弹药定义（伤害/命中粒子色/迷你图标）
const DISPENSER_AMMO = {
  arrow:       { damage: 26, mini: ARROW_MINI, miniColors: null, color: '#F1C40F' },   // 各弹药伤害 -4（用户要求）
  fire_charge: { damage: 31, mini: FIRE_CHARGE_MINI, miniColors: FIRE_CHARGE_COLORS, color: '#E74C3C' },
  egg:         { damage: 21, mini: EGG_MINI, miniColors: EGG_COLORS, color: '#F5F5DC' },
  snowball:    { damage: 16, mini: SNOWBALL_MINI, miniColors: SNOWBALL_COLORS, color: '#ffffff' }
};
// 时钟召唤的小时钟贴图（手绘 16x16 迷你钟：棕边+米黄面+深色指针+红中心）
const SMALL_CLOCK_PIXELS = [[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0],[0,1,2,2,2,2,3,2,2,2,2,2,2,2,1,0],[0,1,2,2,2,2,3,2,2,2,2,2,2,2,1,0],[1,2,2,2,2,2,3,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,3,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,5,3,3,3,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1],[0,1,2,2,2,2,2,2,2,2,2,2,2,2,1,0],[0,0,1,2,2,2,2,2,2,2,2,2,2,1,0,0],[0,0,0,1,1,2,2,2,2,2,2,1,1,0,0,0],[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0]];
const SMALL_CLOCK_COLORS = {"1":"#8a5a2b","2":"#f5e6a8","3":"#5a3a18","5":"#c0392b"};
// ===== 音效（assets/audio/，2026-09 用户提供）=====
const SOUNDS = {
  // 攻击/召唤/场景
  swordSlash:    new Audio('assets/audio/铁剑斩击发出时候的音效.mp3'),
  tridentLaunch: new Audio('assets/audio/三叉戟发射自己时的音效.mp3'),
  tridentLand:   new Audio('assets/audio/三叉戟击中地面时的音效.mp3'),
  tridentBoom:   new Audio('assets/audio/三叉戟引爆雷击圈时的音效.mp3'),
  bowShoot:      new Audio('assets/audio/弓射出时的音效.mp3'),
  snowGolemThrow: new Audio('assets/audio/雪傀儡扔雪球的音效.mp3'),
  zombieSpawn:   new Audio('assets/audio/僵尸被召唤出来时的音效.mp3'),
  zombieDeath:   new Audio('assets/audio/僵尸死亡音效.mp3'),
  dispenserFire: new Audio('assets/audio/发射器发射物品时的音效.mp3'),
  bedPlace:      new Audio('assets/audio/稻草床被放置时候的音频.mp3'),
  bedDestroy:    new Audio('assets/audio/稻草床被敌人睡完后销毁的声音.mp3'),
  railCartPass:  new Audio('assets/audio/矿车经过时的音效.m4a'),
  clockTimeStop: new Audio('assets/audio/时钟暂停时的音效.mp3'),
  // 各物品死亡
  ironSwordDeath: new Audio('assets/audio/铁剑被击败时的死亡音效.mp3'),
  bowDeath:      new Audio('assets/audio/弓被击败时的死亡音效.mp3'),
  tridentDeath:  new Audio('assets/audio/三叉戟被击败时的死亡音效.mp3'),
  spawnerDeath:  new Audio('assets/audio/刷怪笼被击败时的死亡音效.mp3'),
  dispenserDeath: new Audio('assets/audio/发射器被击败时的音效.mp3'),
  railDeath:     new Audio('assets/audio/动力铁轨被击败时的音效.mp3'),
  snowGolemDeath: new Audio('assets/audio/雪傀儡被击杀时的死亡音效.mp3')
};
// 按物品类型取死亡音效（bed/clock/armor_stand 无专用死亡音效则不播）
function playDeathSound(type) {
  const map = {
    iron_sword: SOUNDS.ironSwordDeath,
    bow: SOUNDS.bowDeath,
    trident: SOUNDS.tridentDeath,
    spawner: SOUNDS.spawnerDeath,
    dispenser: SOUNDS.dispenserDeath,
    powered_rail: SOUNDS.railDeath,
    snow_golem: SOUNDS.snowGolemDeath
  };
  playSound(map[type]);
}
function playSound(snd) {
  if (!snd || soundMuted) return;   // 全局声音开关关闭时不播（2026-09 用户需求）
  try { snd.currentTime = 0; snd.play(); }
  catch (e) { /* 音频未就绪/浏览器限制时静默 */ }
}

// ===== 背景音乐 + 全局声音开关（2026-09 用户需求）=====
const BGM = new Audio('assets/audio/我的世界背景音乐_爱给网_aigei_com.mp3');
BGM.loop = true;
let soundMuted = false;   // true=声音全关（主界面暂停BGM / 战斗静音音效）
function startBGM() { if (!soundMuted && BGM.paused) BGM.play().catch(() => {}); }
function stopBGM() { BGM.pause(); }


class Physics {
  constructor(w, h) { 
    this.w = w; 
    this.h = h;
    this.border = 24;
    this.minX = this.border;
    this.minY = this.border;
    this.maxX = this.w - this.border;
    this.maxY = this.h - this.border;
  }
  checkBoundary(item) {
    // 三叉戟攻击中（蓄力/投掷/插地/返回）不检查边界
    if (item.type === 'trident' && (item.isCharging || item.isThrowing || (item.electricDelayStart !== undefined && !item.hasReturned))) {
      return;
    }
    const spd = Math.hypot(item.vx, item.vy) || 0;
    let bounced = false;
    if (item.x - item.radius <= this.minX) { 
      item.x = this.minX + item.radius; 
      item.vx = Math.abs(item.vx); 
      bounced = true;
    }
    if (item.x + item.radius >= this.maxX) { 
      item.x = this.maxX - item.radius; 
      item.vx = -Math.abs(item.vx); 
      bounced = true;
    }
    if (item.y - item.radius <= this.minY) { 
      item.y = this.minY + item.radius; 
      item.vy = Math.abs(item.vy); 
      bounced = true;
    }
    if (item.y + item.radius >= this.maxY) { 
      item.y = this.maxY - item.radius; 
      item.vy = -Math.abs(item.vy); 
      bounced = true;
    }
    // 垂直/接近垂直入射（几乎正对墙面）时，反弹几乎沿原路返回 → 直上直下/直来直去很难看。
    // 给平行于墙面的分量加随机反弹角度（保持速率不变），避免来回直弹
    if (bounced && spd > 0.001) {
      const ax = Math.abs(item.vx), ay = Math.abs(item.vy);
      const parallel = Math.min(ax, ay), normal = Math.max(ax, ay);
      if (normal > 0 && parallel / normal < 0.3) {
        // 重设平行分量为明显角度（约 25°~45°），方向随机
        const newParallel = (Math.random() * 0.5 + 0.45) * spd;
        const dir = Math.random() < 0.5 ? 1 : -1;
        if (ax >= ay) {
          item.vy = dir * newParallel;   // 撞左右墙 → 扰动竖直分量
        } else {
          item.vx = dir * newParallel;   // 撞上下墙 → 扰动水平分量
        }
        // 保持速率不变（重归一化）
        const ns = Math.hypot(item.vx, item.vy);
        if (ns > 0) { item.vx *= spd / ns; item.vy *= spd / ns; }
      }
    }
  }
  checkCollision(a, b) {
    // 其中一个是固定的三叉戟就不碰撞，不触发伤害
    if (a.type === 'trident' && (a.isCharging || a.isThrowing || (a.electricDelayStart !== undefined && !a.hasReturned))) return false;
    if (b.type === 'trident' && (b.isCharging || b.isThrowing || (b.electricDelayStart !== undefined && !b.hasReturned))) return false;
    // 睡觉中的物品不参与碰撞（吸附锁定在床上）
    if (a.sleeping || b.sleeping) return false;
    
    // a 和 b 两个圆形碰撞
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const minDist = a.radius + b.radius;
    
    // 没有碰撞
    if (dist >= minDist) return false;
    
    // 法线方向：从 a 指向 b
    const nx = dx / dist;
    const ny = dy / dist;
    const overlap = minDist - dist;
    
    // 分离位置：a 退回去，b 推出去，方向正确
    a.x -= nx * overlap / 2;
    a.y -= ny * overlap / 2;
    b.x += nx * overlap / 2;
    b.y += ny * overlap / 2;
    
    // 分解速度到法线和切线方向
    // a 的速度分量
    let avn = a.vx * nx + a.vy * ny; // 法线分量
    const avt = -a.vx * ny + a.vy * nx; // 切线分量
    // b 的速度分量
    let bvn = b.vx * nx + b.vy * ny;
    const bvt = -b.vx * ny + b.vy * nx;
    
    // 完全弹性碰撞，质量相等：交换法线速度，保证速率不变，方向正确反弹
    // 保存原始速度大小（速率）
    const originalASpeed = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
    const originalBSpeed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    
    // 交换法线方向速度
    [avn, bvn] = [bvn, avn];
    
    // 合成新速度
    a.vx = avn * nx - avt * ny;
    a.vy = avn * ny + avt * nx;
    b.vx = bvn * nx - bvt * ny;
    b.vy = bvn * ny + bvt * nx;
    
    // 强制保持原始速率不变，只改变方向
    const newASpeed = Math.sqrt(a.vx * a.vx + a.vy * a.vy);
    const newBSpeed = Math.sqrt(b.vx * b.vx + b.vy * b.vy);
    if (newASpeed > 0 && originalASpeed > 0) {
      const scale = originalASpeed / newASpeed;
      a.vx *= scale;
      a.vy *= scale;
    }
    if (newBSpeed > 0 && originalBSpeed > 0) {
      const scale = originalBSpeed / newBSpeed;
      b.vx *= scale;
      b.vy *= scale;
    }
    
    return true;
  }
  update(item) { 
    this.checkBoundary(item);
  }
}

// 游戏主类
class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error('Canvas element not found:', canvasId);
      return;
    }
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      console.error('Failed to get 2d context');
      return;
    }
    this.canvas.width = 800; 
    this.canvas.height = 560;
    console.log('Game initialized, canvas size', this.canvas.width, this.canvas.height);
    this.physics = new Physics(this.canvas.width, this.canvas.height);
    this.items = []; 
    this.projectiles = []; 
    this.particles = [];
    this.gameRunning = false; 
    this.winner = null;
    this.pixelScale = 5;
    this.rails = [[], []];     // 动力铁轨：rails[ownerIdx]=该玩家连续长轨的段列表（开局清空，防上一局残留）
    this.railCarts = [[], []];   // 每条铁轨一辆矿车（rails[oi][ti] 对应 railCarts[oi][ti]）
    this.railStripCanvas = null;   // 铁轨贴图缓存（贴图变了要重建）
    this.railShadowCanvas = null;
    this.timeStop = null;          // 时钟时间暂停状态 {active,startTime,endTime,ownerIdx,...}
    this.stoneBgImg = null;
    // 战斗背景图（800x560 石头背景，与画布同尺寸）
    const bg = new Image();
    bg.onload = () => { this.stoneBgImg = bg; };
    bg.src = 'assets/stone_background.png';
  }
  
  // ===== 2v2 队伍辅助（2026-09 新增）=====
  // 队伍号：owner=0 玩家1（items[0]/[1]），owner=1 玩家2（items[2]/[3]）；1v1 演示时各1个
  getOwnerItem(ownerIdx) {
    const list = this.items.filter(i => i.owner === ownerIdx);
    return list.find(i => i.currentHp > 0) || list[0] || null;
  }
  getEnemiesByOwner(ownerIdx) {
    // 对面队伍中活着的物品本体（不含召唤物）
    return this.items.filter(i => i.owner !== ownerIdx && i.currentHp > 0);
  }
  nearestEnemyByOwner(ownerIdx, x, y) {
    // 对面队伍中距离最近的一个（用于瞄准/朝向）
    let best = null, bd = Infinity;
    for (const e of this.getEnemiesByOwner(ownerIdx)) {
      const d = Math.hypot(e.x - x, e.y - y);
      if (d < bd) { bd = d; best = e; }
    }
    return best;
  }
  tridentFixed(item) {
    // 三叉戟蓄力/投掷/插地固定阶段：不参与普通物理碰撞（避免被敌人推着跑 / 顶着敌人走）
    return item.type === 'trident' && (item.isCharging || item.isThrowing || (item.electricDelayStart !== undefined && !item.hasReturned));
  }

  initItem(key, x, y) {
    const d = items[key];
    return { 
      ...d, 
      key, 
      x, 
      y,
      owner: 0,          // 队伍号：0=玩家1，1=玩家2（2v2 每队2个物品，start 里覆盖）
      vx: (Math.random()-0.5)*d.speed*1.2, 
      vy: (Math.random()-0.5)*d.speed*1.2,
      currentHp: d.hp, 
      maxHp: d.hp, 
      mass: 1,
      lastAttackTime: 0,
      lastHitTime: 0,          // 铁剑碰撞伤害独立冷却（不碰 lastAttackTime，碰撞不打断蓄力）
      facing: x < 400 ? 1 : -1,
      chargeProgress: 0,
      chargeStartTime: 0,
      slashCenterAngle: 0,
      isAttacking: false, 
      attackProgress: 0, 
      attackDuration: 400,
      attackStartTime: 0,
      slashDamageDone: false,
      lastProjectileTime: 0,
      // 弓专用
      bowPhase: 'idle', // idle | charging | shooting | recovering
      bowChargeStart: 0,
      bowShotTime: 0,
      bowAimAngle: 0,
      bowRecoverStart: 0,
      // 三叉戟专用
      isCharging: false,
      chargeStartTime: 0,
      chargeDuration: 300,
      isThrowing: false,
      throwStartTime: 0,
      throwStartX: x,
      throwStartY: y,
      targetX: 0,
      targetY: 0,
      throwDuration: 800,
      returnDuration: 900,
      electricDelayStart: undefined,
      electricCircle: null,
      electricDone: false,
      returnStartTime: 0,
      hasReturned: false,
      angleToEnemy: 0,
      throwAngle: 0,
      // 虚影（分身）：发射时留下，按原本方向移动，电圈释放完回到虚影位置
      ghostActive: false,
      ghostX: 0,
      ghostY: 0,
      ghostVx: 0,
      ghostVy: 0,
      // 稻草床专用（只有床才覆盖 hp，其他物品用各自的 d.hp）
      ...(d.type === 'bed' ? {
        currentHp: (d.bedMax || 15) * 80,   // 每层生命 80 × 15 层
        maxHp: (d.bedMax || 15) * 80,
      } : {}),
      bedsLeft: d.bedMax || 15,        // 剩余可放置的床数
      placedBeds: [],                  // 已放置的床 [{x, y, facing}]
      bedPlaceCooldown: 0,             // 上次放床时间
      // 刷怪笼专用
      lastSpawnTime: 0,                // 上次刷僵尸时间
      isMinion: false,                 // 是否为召唤物（僵尸头颅）
      ownerIndex: -1,                  // 召唤物主人索引（items 里的位置）
      firstBitePending: false,         // 僵尸首咬：刚生成先追踪最近敌人咬第一口（伤害=attack+5），咬完转随机碰撞
      // 发射器专用
      dispenserSlots: [],              // 九宫格内容（最多9格）
      lastSlotTime: 0,                 // 上次填充时间
      dispenserFiring: false,          // 是否在逐个发射序列中
      dispenserFireNext: 0,            // 序列中下次发射时间
      dispenserAimAngle: 0,            // 序列锁定的瞄准方向（不再每发重新瞄准，敌人可躲）
      // 动力铁轨专用
      lastRailTime: 0,                 // 上次创造铁轨时间（=预告开始时间）
      railAngle: 0,                    // 当前铁轨朝向（=运动方向，碰墙反弹后更新）
      // 时钟专用
      lastSummonTime: 0,             // 上次普通召唤小时钟时间
      smallClocks: [],               // 小时钟列表 [{x,y,heading,speed,turnRate,radius,damage,expire,waiting}]
      timeStopTriggered: false,      // 是否已触发过时间暂停（致命伤害）
      timeStopSpawnCount: 0,         // 时间暂停期间已出现的小时钟数
      timeStopSpawnNext: 0,          // 圆上小闹钟逐个出现的下一颗时间
      timeStopCirclePos: [],         // 预计算：12 个小时钟围绕敌人围成圆的圆周位置
    };
  }
  
  start(i1, i2, i3, i4) {
    // 2v2：i1/i2=玩家1队伍，i3/i4=玩家2队伍；只有2个参数时走 1v1（图鉴实机演示用盔甲架）
    this.is2v2 = (i3 !== undefined && i4 !== undefined);
    const H = this.canvas.height;
    const W = this.canvas.width;
    const off = 60;   // 队伍内两个物品的上下间距
    if (this.is2v2) {
      this.items = [
        this.initItem(i1, 200 + 24, H/2 - off),
        this.initItem(i2, 200 + 24, H/2 + off),
        this.initItem(i3, W - 200 - 24, H/2 - off),
        this.initItem(i4, W - 200 - 24, H/2 + off)
      ];
      this.items.forEach((it, i) => { it.owner = i < 2 ? 0 : 1; });
    } else {
      this.items = [
        this.initItem(i1, 200 + 24, H/2),
        this.initItem(i2, W - 200 - 24, H/2)
      ];
      this.items[0].owner = 0;
      this.items[1].owner = 1;
    }
    this.minions = [[], []];  // 每个玩家的召唤物列表（僵尸头颅），按 owner 分组
    this.snowballs = [];      // 雪傀儡的雪球投射物 [{x,y,vx,vy,ownerIdx}]
    this.dispenserShots = [];   // 发射器的投射物 [{x,y,vx,vy,kind,ownerIdx}]
    this.rails = [[], []];    // 动力铁轨：rails[ownerIdx]=该玩家连续长轨的段列表（数组顺序=几何顺序）
    this.railCarts = [[], []];
    this.railStripCanvas = null;   // 重建缓存（开局清空残留）
    this.timeStop = null;          // 时钟时间暂停状态（开局清空）
    this.items.forEach((item) => {
      item.vx = (item.owner === 0 ? 1 : -1) * item.speed;
      item.vy = (Math.random()-0.5)*item.speed*0.5;
    });
    this.projectiles = []; 
    this.particles = [];
    this.gameRunning = true; 
    this.gamePaused = false;
    this.winner = null;

    this.gameLoop();
  }
  
  gameLoop() {
    if (!this.gameRunning) return;
    if (!this.gamePaused) {
      this.update(); 
    }
    this.draw();
    if (this.gamePaused) {
      // 暂停遮罩
      this.ctx.fillStyle = 'rgba(0,0,0,0.55)';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.fillStyle = '#F1C40F';
      this.ctx.font = 'bold 36px "Press Start 2P", monospace';
      this.ctx.textAlign = 'center';
      this.ctx.fillText('已暂停', this.canvas.width/2, this.canvas.height/2 - 10);
      this.ctx.fillStyle = '#fff';
      this.ctx.font = 'bold 14px monospace';
      this.ctx.fillText('点击"继续"恢复游戏', this.canvas.width/2, this.canvas.height/2 + 30);
    }
    requestAnimationFrame(() => this.gameLoop());
  }

  togglePause() {
    if (!this.gameRunning || this.winner) return;
    this.gamePaused = !this.gamePaused;
  }
  
  handleTrident(item, now) {
    const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
    if (!enemy) return;

    const dx = enemy.x - item.x;
    const dy = enemy.y - item.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const angle = Math.atan2(dy, dx);
    // 蓄力/插地（电圈阶段）保持锁定方向，空闲时朝向敌人，投掷/返回由各自阶段控制
    const isReturning = item.electricDone && !item.electricCircle && !item.hasReturned;
    if (item.isCharging || (item.electricDelayStart !== undefined && !item.hasReturned && !isReturning)) {
      item.angleToEnemy = item.throwAngle;
    } else if (!item.isThrowing && !isReturning) {
      item.angleToEnemy = angle;
    }

    // 虚影移动：从发射到三叉戟归位期间持续按原本方向漂移，返回阶段也在动（返程追踪虚影当前位置）
    if (item.ghostActive && !item.hasReturned) {
      item.ghostX += item.ghostVx * 0.6;
      item.ghostY += item.ghostVy * 0.6;
      const border = 24;
      const gMinX = border + item.radius;
      const gMaxX = this.canvas.width - border - item.radius;
      const gMinY = border + item.radius;
      const gMaxY = this.canvas.height - border - item.radius;
      if (item.ghostX < gMinX) { item.ghostX = gMinX; item.ghostVx = Math.abs(item.ghostVx); }
      if (item.ghostX > gMaxX) { item.ghostX = gMaxX; item.ghostVx = -Math.abs(item.ghostVx); }
      if (item.ghostY < gMinY) { item.ghostY = gMinY; item.ghostVy = Math.abs(item.ghostVy); }
      if (item.ghostY > gMaxY) { item.ghostY = gMaxY; item.ghostVy = -Math.abs(item.ghostVy); }
    }

    // 自动攻击触发：空闲（不在蓄力/投掷/电击/返回）且冷却完毕 → 自动蓄力发射
    if (!item.isCharging && !item.isThrowing && item.electricDelayStart === undefined && !item.hasReturned && !item.electricCircle && now - item.lastAttackTime >= item.attackCooldown) {
      item.lastAttackTime = now;
      let landDist = Math.min(dist - 40, item.attackRange * 2.0);
      if (landDist < 40) landDist = 40; // 敌人太近时至少飞一段距离
      let targetX = item.x + Math.cos(angle) * landDist;
      let targetY = item.y + Math.sin(angle) * landDist;
      // 落点限制在边框内，四个方向都 clamp
      const border = 24;
      const minX = border + item.radius;
      const maxX = this.canvas.width - border - item.radius;
      const minY = border + item.radius;
      const maxY = this.canvas.height - border - item.radius;
      if (targetX < minX) targetX = minX;
      if (targetX > maxX) targetX = maxX;
      if (targetY < minY) targetY = minY;
      if (targetY > maxY) targetY = maxY;
      item.angleToEnemy = angle; // 蓄力前先对准
      item.throwAngle = angle; // 锁定发射方向（蓄力+飞行都朝这个方向）
      item.throwStartX = item.x;
      item.throwStartY = item.y;
      item.targetX = targetX;
      item.targetY = targetY;
      // 记录虚影：发射前的位置和原本移动方向
      item.ghostX = item.x;
      item.ghostY = item.y;
      item.ghostVx = item.vx;
      item.ghostVy = item.vy;
      item.ghostActive = false; // 蓄力完成真正发射时才出现虚影
      item.isCharging = true; // 开始蓄力
      item.chargeStartTime = now;
      item.hasReturned = false;
    }

    // 蓄力阶段：在起点蓄力，对准敌人，蓄力完再发射
    if (item.isCharging) {
      item.x = item.throwStartX;
      item.y = item.throwStartY;
      item.vx = 0;
      item.vy = 0;
      const elapsed = now - item.chargeStartTime;
      if (elapsed >= item.chargeDuration) {
        item.isCharging = false;
        item.isThrowing = true;
        item.throwStartTime = now; // 蓄力完成瞬间开始计时飞行
        item.ghostActive = true; // 发射瞬间在起点留下虚影
        playSound(SOUNDS.tridentLaunch);   // 三叉戟发射音效
      }
      return;
    }

    if (!item.isThrowing && item.electricDelayStart === undefined) {
      const landDist = Math.min(dist - 40, item.attackRange * 2.0);
      item.targetX = item.x + Math.cos(angle) * landDist;
      item.targetY = item.y + Math.sin(angle) * landDist;
    }

    // 投掷阶段：沿锁定的 throwAngle 方向飞出，飞行中不转向，smoothstep 缓动更丝滑
    if (item.isThrowing) {
      item.angleToEnemy = item.throwAngle; // 锁定发射方向，飞行中不再转向敌人
      const elapsed = now - item.throwStartTime;
      const t = Math.min(1, elapsed / item.throwDuration);
      // smoothstep：起手加速、收尾减速，比线性平移自然
      const progress = t * t * (3 - 2 * t);
      item.x = item.throwStartX + (item.targetX - item.throwStartX) * progress;
      item.y = item.throwStartY + (item.targetY - item.throwStartY) * progress;
      if (progress >= 1) {
        item.isThrowing = false;
        // 落地后停在这里，直到电击完成才返回
        item.x = item.targetX;
        item.y = item.targetY;
        item.vx = 0;
        item.vy = 0;
        item.electricDelayStart = now;
        item.electricCircle = null;
        item.electricDone = false;
        playSound(SOUNDS.tridentLand);   // 三叉戟击中地面音效
      }
    }
    // 等待1秒后生成电击圈，只打一次伤害
    else if (!item.isThrowing && item.electricDelayStart !== undefined && !item.electricDone) {
      // 保持不动
      item.x = item.targetX;
      item.y = item.targetY;
      item.vx = 0;
      item.vy = 0;
      
      const elapsed = now - item.electricDelayStart;
      if (elapsed >= 600 && !item.electricDone) {   // 落地后等600ms出电圈（原1000，加快）
        // 只生成一次，只打一次伤害，打完标记electricDone = true，永远不再处理
        playSound(SOUNDS.tridentBoom);   // 三叉戟雷击圈引爆音效
        item.electricCircle = {
          x: item.x,
          y: item.y,
          radius: item.attackRange * 2.0,
          life: 500,
          maxLife: 500,
          damageDealt: false,
          startTime: now // 记录电圈生成时间，用 Date.now() 计时
        };
        // 只伤害一次，生成时立刻打一次（目标=本体+敌方召唤物，圈内全体受伤）
        const elecTargets = this.getEnemiesByOwner(item.owner).slice();
        if (this.minions) {
          this.minions[1 - item.owner].forEach(m => { if (m.currentHp > 0) elecTargets.push(m); });
        }
        if (!item.electricCircle.damageDealt) {
          let hitAny = false;
          elecTargets.forEach(target => {
            if (target === item) return;
            const distCalc = Math.sqrt((target.x - item.x) ** 2 + (target.y - item.y) ** 2);
            if (distCalc <= item.electricCircle.radius) {
              this.damageItem(target, item.attack, item);
              this.createParticles(target.x, target.y, "#589d8e", 8);
              hitAny = true;
            }
          });
          if (hitAny) item.electricCircle.damageDealt = true;   // 圈内无目标时不置标志，僵尸后进入圈内仍会被电
        }
        item.electricDone = true; // 标记完成，永远不再伤害
      }
    }
    // 电击圈已经生成，等待消失然后返回（hasReturned 后不再强制位置，避免跳回落点）
    else if (!item.isThrowing && item.electricDone && !item.hasReturned) {
      // 保持不动直到电击圈消失
      item.x = item.targetX;
      item.y = item.targetY;
      item.vx = 0;
      item.vy = 0;
      
      if (item.electricCircle && now - item.electricCircle.startTime >= item.electricCircle.maxLife) {
        // 电圈持续时间到，消失；此刻虚影定格，开始返回
        item.electricCircle = null;
        item.returnStartTime = now;
      }
      if (!item.hasReturned && !item.electricCircle) {
        // 电击完了开始返回：回到虚影最终位置（不是发射起点）
        const elapsed = now - item.returnStartTime;
        if (elapsed >= 0) {
          const progress = Math.min(1, elapsed / item.returnDuration);
          const homeX = item.ghostActive ? item.ghostX : item.throwStartX;
          const homeY = item.ghostActive ? item.ghostY : item.throwStartY;
          item.x = item.targetX + (homeX - item.targetX) * progress;
          item.y = item.targetY + (homeY - item.targetY) * progress;
          const dxT = homeX - item.targetX;
          const dyT = homeY - item.targetY;
          item.angleToEnemy = Math.atan2(dyT, dxT);

          if (progress >= 1) {
            item.hasReturned = true;
            item.x = homeX;
            item.y = homeY;
            // 归位：虚影消失，立即恢复漂浮移动（冷却期间也在动），冷却走 attackCooldown 计时
            item.ghostActive = false;
            item.hasReturned = false;
            item.electricCircle = null;
            item.electricDelayStart = undefined;
            item.electricDone = false;
            item.isCharging = false;
            item.isThrowing = false;
            item.lastAttackTime = now;
            const roamAngle = Math.random() * Math.PI * 2;
            item.vx = Math.cos(roamAngle) * item.speed;
            item.vy = Math.sin(roamAngle) * item.speed;
          }
        }
      }
    }
  }

  update() {
    const now = Date.now();
    // 时钟时间暂停：世界冻结，只更新持有者移动 + 沿途生成小时钟
    if (this.timeStop && this.timeStop.active) {
      this.updateTimeStop(now);
      return;
    }
    this.items.forEach(item => {
      // 2v2：死亡物品不再移动、不再执行任何攻击/召唤逻辑（否则死亡刷怪笼仍会召唤僵尸）
      if (item.currentHp <= 0) {
        // 例外：稻草床死亡后已放置的床仍生效——继续吸附敌人睡觉扣血帮队友（只跑吸附/睡醒，不移动不放床）
        if (item.type === 'bed') this.handleBed(item, now);
        return;
      }
      // 睡觉中的敌人：锁定在床中心，不移动不被推动
      if (item.sleeping && item.sleepBed) {
        item.x = item.sleepBed.x;
        item.y = item.sleepBed.y;
        item.vx = 0;
        item.vy = 0;
        // 弓：睡觉期间蓄力暂停（bowChargeStart 随 now 平移 → 已蓄进度冻结，醒来从冻结点继续）
        if (item.type === 'ranged' && item.bowChargePausedAt !== undefined) {
          item.bowChargeStart = now - item.bowChargePausedAt;
        }
        return;
      }
      // 三叉戟蓄力/落地后固定不动，不被物理推动
      if (item.type === 'trident' && (item.isCharging || (!item.isThrowing && item.electricDelayStart !== undefined && !item.hasReturned))) {
        if (item.isCharging) {
          item.vx = 0;
          item.vy = 0;
          item.x = item.throwStartX;
          item.y = item.throwStartY;
        } else {
          item.vx = 0;
          item.vy = 0;
          item.x = item.targetX;
          item.y = item.targetY;
        }
        this.physics.update(item);
        this.handleTrident(item, now);
        return;
      }
      // 其他情况正常移动
      // 击退中的实体（被雪球命中）：速度指数衰减，短促推挤不永久飞走
      if (item.knockUntil && now < item.knockUntil) {
        const kd = 0.90;
        item.vx *= kd;
        item.vy *= kd;
      } else if (item.knockUntil && now >= item.knockUntil) {
        // 击退结束：恢复随机漫游
        item.knockUntil = 0;
        const roamAngle = Math.random() * Math.PI * 2;
        item.vx = Math.cos(roamAngle) * item.speed;
        item.vy = Math.sin(roamAngle) * item.speed;
      }
      item.x += item.vx * 0.6;
      item.y += item.vy * 0.6;
      this.physics.update(item);
      const other = this.nearestEnemyByOwner(item.owner, item.x, item.y);
      if (other) {
        // 发射器贴图正面在左侧，镜像方向取反才能面向敌人（用户反馈一直背对）
        item.facing = (item.type === 'dispenser')
          ? (other.x > item.x ? -1 : 1)
          : (other.x > item.x ? 1 : -1);
      }
      // 铁剑蓄力：冷却结束后才开始蓄力，攻击/冷却期间进度清零（Date.now 计时不随帧率漂移）
      if (item.type === 'melee' && item.hasCharge) {
        const cooldownOver = item.lastAttackTime === 0 || now - item.lastAttackTime >= item.attackCooldown;
        if (!item.isAttacking && cooldownOver) {
          if (item.chargeStartTime === 0) item.chargeStartTime = now;
          item.chargeProgress = Math.min(1, (now - item.chargeStartTime) / item.chargeTime);
        } else if (!item.isAttacking) {
          item.chargeProgress = 0;
          item.chargeStartTime = 0;
        }
      } else if (!item.isAttacking) {
        item.chargeProgress = 0;
      }
      if (item.isAttacking) {
        if (item.key === 'iron_sword') {
          // 时间基准推进动画：帧累加在高刷屏上动画提前结束，setTimeout 结算前 isAttacking 已被关掉，伤害被吞
          item.attackProgress = now - item.attackStartTime;
          // 伤害在动画中点结算一次（不依赖 setTimeout，保证必中）
          if (!item.slashDamageDone && item.attackProgress >= item.attackDuration * 0.5) {
            item.slashDamageDone = true;
            this.applySlashDamage(item);
          }
        } else {
          item.attackProgress += 16;
        }
        if (item.attackProgress >= item.attackDuration) { 
          item.isAttacking = false; 
          item.attackProgress = 0;
          item.attackStartTime = 0;
          // 重置 lastAttackTime 以允许下次攻击
          item.lastAttackTime = Date.now();
        }
      }
      // 剑尖始终指向敌人（更新 facing）
      if (item.type === 'melee' && this.items.length >= 2) {
        const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
        if (enemy) {
          item.facing = enemy.x > item.x ? 1 : -1;
        }
      }
      if (item.type === 'trident') {
        this.handleTrident(item, now);
      } else if (item.type === 'spawner') {
        this.handleSpawner(item, now, item.owner);
      } else if (item.type === 'snow_golem') {
        this.handleSnowGolem(item, now, item.owner);
      } else if (item.type === 'dispenser') {
        this.handleDispenser(item, now, item.owner);
      } else if (item.type === 'powered_rail') {
        this.handlePoweredRail(item, now, item.owner);
      } else if (item.type === 'clock') {
        this.handleClock(item, now, item.owner);
      } else if (item.type === 'bed') {
        this.handleBed(item, now);
      } else if (item.key === 'bow') {
        this.handleBow(item, now);
      } else {
        this.handleAttack(item, now);
      }
    });
    
    // 召唤物（僵尸头颅）更新
    this.updateMinions(now);
    // 雪球更新
    this.updateSnowballs(now);
    // 发射器投射物更新
    this.updateDispenserShots(now);
    // 铁轨矿车更新
    this.updateRails(now);
    // 小时钟更新（弧形追踪）
    this.updateSmallClocks(now);
    
    // 本体 vs 敌方召唤物碰撞：本体撞到对面僵尸（碰撞+可被咬），僵尸可被本体攻击打死
    // （每个本体都遍历对面僵尸；弹开交给僵尸自己的 fleeing 逻辑，不在此改僵尸速度/位置）
    if (this.minions) {
      this.items.forEach(self => {
        if (self.currentHp <= 0) return;
        const emList = this.minions[1 - self.owner] || [];
        emList.forEach(m => {
          if (m.currentHp <= 0 || self.sleeping) return;
          const dx = m.x - self.x, dy = m.y - self.y;
          const dist = Math.hypot(dx, dy) || 1;
          const minD = m.radius + self.radius;
          if (dist < minD) {
            this.triggerAttack(self, m);
          }
        });
      });
    }
    // 本体 vs 本体：敌队全对碰撞 + 铁剑扇形触发；队友之间不互打不互撞（互相穿过）
    for (let i = 0; i < this.items.length; i++) {
      for (let j = i + 1; j < this.items.length; j++) {
        const itA = this.items[i], itB = this.items[j];
        if (itA.owner === itB.owner) continue;          // 队友对跳过
        if (itA.currentHp <= 0 || itB.currentHp <= 0) continue;
        if (this.tridentFixed(itA) || this.tridentFixed(itB) || itA.sleeping || itB.sleeping) continue;
        // 用 checkCollision 的返回值判断是否真正碰撞：它内部分离位置后 dist=minDist，
        // 若再重算 dist<半径和 恒不成立，碰撞伤害（铁剑10点）会永不触发
        if (this.physics.checkCollision(itA, itB)) {
          this.triggerAttack(itA, itB);
          this.triggerAttack(itB, itA);
        }
        if (itA.key === 'iron_sword') this.checkSlashAttack(itA);
        if (itB.key === 'iron_sword') this.checkSlashAttack(itB);
      }
    }
    
    this.projectiles = this.projectiles.filter(proj => {
      proj.x += proj.vx; 
      proj.y += proj.vy;
      if (proj.x < 0 || proj.x > this.canvas.width || proj.y < 0 || proj.y > this.canvas.height) return false;
      // 命中敌方僵尸（先检测：路径上的僵尸抵挡箭，不穿过打本体——2026-09 用户需求）
      const ownerIdx = proj.owner ? proj.owner.owner : -1;
      if (ownerIdx >= 0 && this.minions) {
        const eMinions = this.minions[1 - ownerIdx] || [];
        for (const em of eMinions) {
          if (em.currentHp <= 0) continue;
          if (Math.hypot(em.x - proj.x, em.y - proj.y) < em.radius + 6) {
            this.damageItem(em, proj.damage, proj.attacker);
            this.createParticles(proj.x, proj.y, proj.color, 8);
            return false;
          }
        }
      }
      // 命中敌方本体（只打对面队伍，队友穿过不误伤）
      for (let item of this.items) {
        if (item !== proj.owner && item.owner !== ownerIdx) {
          const dx = item.x - proj.x, dy = item.y - proj.y;
          if (Math.sqrt(dx*dx+dy*dy) < item.radius) {
            this.damageItem(item, proj.damage, proj.attacker);
            this.createParticles(proj.x, proj.y, proj.color, 8);
            return false;
          }
        }
      }
      return true;
    });
    
    this.particles = this.particles.filter(p => {
      p.x += p.vx; 
      p.y += p.vy; 
      p.vx *= 0.95; 
      p.vy *= 0.95; 
      p.life--;
      return p.life > 0;
    });
    
    this.checkWinCondition();
  }
  
  handleAttack(item, now) {
    if (item.type === 'explosive' && !item.isAttacking) {
      const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
      if (enemy) {
        const dx = enemy.x - item.x, dy = enemy.y - item.y;
        if (Math.sqrt(dx*dx+dy*dy) < item.attackRange && now - item.lastAttackTime >= item.attackCooldown) {
          this.explode(item, enemy, now);
        }
      }
    }
  }
  
  handleSnowGolem(item, now, index) {
    // 朝敌人发射雪球（有冷却，攻击范围内即可）；index=owner
    const enemy = this.nearestEnemyByOwner(index, item.x, item.y);
    if (!enemy || enemy.sleeping) return;
    // 狂暴（血量<阈值）：冷却大幅缩短 + 每波扇形多发 → 连续快速大量雪球（2026-09 用户要求）
    const d = items['snow_golem'];
    const rage = item.currentHp < (d.rageHpThreshold || 50);
    const cooldown = rage ? (d.rageInterval || 150) : item.attackCooldown;
    if (now - (item.lastAttackTime||0) < cooldown) return;
    const dx = enemy.x - item.x, dy = enemy.y - item.y;
    const dist = Math.hypot(dx, dy);
    if (dist > item.attackRange) return;
    item.lastAttackTime = now;
    const speed = item.projectileSpeed;
    const baseAng = Math.atan2(dy, dx);
    const count = rage ? (d.rageShotCount || 5) : 1;
    const spread = rage ? (d.rageSpread || 0.25) : 0;
    const dmg = rage ? (d.rageDamage || 15) : d.attack;   // 狂暴雪球伤害低（15），普通30
    for (let k = 0; k < count; k++) {
      const ang = baseAng + (count > 1 ? (k / (count - 1) - 0.5) * 2 * spread : 0);
      this.snowballs.push({ x: item.x + Math.cos(ang)*item.radius, y: item.y + Math.sin(ang)*item.radius, vx: Math.cos(ang)*speed, vy: Math.sin(ang)*speed, ownerIdx: index, damage: dmg });
    }
    playSound(SOUNDS.snowGolemThrow);   // 雪傀儡扔雪球音效
  }

  updateSnowballs(now) {
    if (!this.snowballs) return;
    this.snowballs = this.snowballs.filter(sb => {
      sb.x += sb.vx; sb.y += sb.vy;
      // 出界消失
      if (sb.x < 0 || sb.x > this.canvas.width || sb.y < 0 || sb.y > this.canvas.height) return false;
      // 命中敌方僵尸（先检测：路径上的僵尸抵挡雪球，不穿过打本体——2026-09 用户需求）
      const eMinions = this.minions[1 - sb.ownerIdx] || [];
      for (const em of eMinions) {
        if (em.currentHp <= 0) continue;
        const d = Math.hypot(em.x - sb.x, em.y - sb.y);
        if (d < em.radius + 6) {
          this.damageItem(em, sb.damage, this.items[sb.ownerIdx]);
          const kb = items['snow_golem'].knockback;
          const ang = Math.atan2(sb.vy, sb.vx);
          em.vx = Math.cos(ang) * kb;
          em.vy = Math.sin(ang) * kb;
          em.knockUntil = now + 300;
          this.createParticles(sb.x, sb.y, '#ffffff', 10);
          return false;
        }
      }
      // 命中敌方本体（对面队伍任意一个）
      for (const enemy of this.getEnemiesByOwner(sb.ownerIdx)) {
        if (enemy.sleeping) continue;
        const d = Math.hypot(enemy.x - sb.x, enemy.y - sb.y);
        if (d < enemy.radius + 6) {
          this.damageItem(enemy, sb.damage, this.getOwnerItem(sb.ownerIdx));
          // 击退：沿弹道方向短促一推，速度在 300ms 内指数衰减（不再永久飞走）
          const kb = items['snow_golem'].knockback;
          const ang = Math.atan2(sb.vy, sb.vx);
          enemy.vx = Math.cos(ang) * kb;
          enemy.vy = Math.sin(ang) * kb;
          enemy.knockUntil = now + 300;
          this.createParticles(sb.x, sb.y, '#ffffff', 10);
          return false;
        }
      }
      return true;
    });
  }

  handleDispenser(item, now, index) {
    const enemy = this.nearestEnemyByOwner(index, item.x, item.y);
    const enemyAlive = enemy && !enemy.sleeping && enemy.currentHp > 0;
    const ammoKeys = ['arrow', 'fire_charge', 'egg', 'snowball'];
    // 九宫格装填：仅在非发射序列中，每隔 slotInterval 随机塞一格
    if (!item.dispenserFiring && item.dispenserSlots.length < item.maxSlots) {
      if (now - (item.lastSlotTime || 0) >= item.slotInterval) {
        item.lastSlotTime = now;
        item.dispenserSlots.push(ammoKeys[Math.floor(Math.random() * ammoKeys.length)]);
      }
    }
    // 敌人不可攻击：取消发射序列（保留剩余弹药）
    if (!enemyAlive) {
      item.dispenserFiring = false;
      return;
    }
    if (item.dispenserFiring) {
      // 逐个发射：每隔 fireInterval 从九宫格取出一个朝敌人发射，格子逐格变空
      if (now >= (item.dispenserFireNext || 0)) {
        const kind = item.dispenserSlots.shift();
        this.fireOneDispenserShot(item, index, kind);
        item.dispenserFireNext = now + item.fireInterval;
        if (item.dispenserSlots.length === 0) {
          item.dispenserFiring = false;
          item.lastSlotTime = now;
        }
      }
      return;
    }
    // 九宫格满 + 敌人在射程内 → 开始逐个发射序列（锁定一次瞄准方向，敌人移动就能躲开）
    if (item.dispenserSlots.length >= item.maxSlots) {
      const dist = Math.hypot(enemy.x - item.x, enemy.y - item.y);
      if (dist <= item.attackRange) {
        item.dispenserAimAngle = Math.atan2(enemy.y - item.y, enemy.x - item.x);
        item.dispenserFiring = true;
        item.dispenserFireNext = now;
      }
    }
  }

  fireOneDispenserShot(item, index, kind) {
    // 每发都朝敌人当前方向重新瞄准发射（用户反馈锁定第一发方向只有首发准），带轻微随机散布（±0.08 rad）
    const enemy = this.nearestEnemyByOwner(index, item.x, item.y);
    const ang = (enemy ? Math.atan2(enemy.y - item.y, enemy.x - item.x) : item.dispenserAimAngle) + (Math.random() - 0.5) * 0.16;
    const speed = 8;
    this.dispenserShots.push({
      x: item.x + Math.cos(ang) * (item.radius + 8),
      y: item.y + Math.sin(ang) * (item.radius + 8),
      vx: Math.cos(ang) * speed,
      vy: Math.sin(ang) * speed,
      kind: kind,
      ownerIdx: index
    });
    playSound(SOUNDS.dispenserFire);   // 发射器发射音效
    this.createParticles(item.x, item.y, '#ffffff', 4);
  }

  updateDispenserShots(now) {
    if (!this.dispenserShots) return;
    this.dispenserShots = this.dispenserShots.filter(shot => {
      shot.x += shot.vx; shot.y += shot.vy;
      if (shot.x < 0 || shot.x > this.canvas.width || shot.y < 0 || shot.y > this.canvas.height) return false;
      const ammo = DISPENSER_AMMO[shot.kind] || {};
      // 命中敌方僵尸（先检测：路径上的僵尸抵挡弹药，不穿过打本体——2026-09 用户需求）
      const eMinions = this.minions[1 - shot.ownerIdx] || [];
      for (const em of eMinions) {
        if (em.currentHp <= 0) continue;
        const d = Math.hypot(em.x - shot.x, em.y - shot.y);
        if (d < em.radius + 6) {
          this.damageItem(em, ammo.damage || 0, this.items[shot.ownerIdx]);
          this.createParticles(shot.x, shot.y, ammo.color || '#ffffff', 8);
          return false;
        }
      }
      // 命中敌方本体（对面队伍任意一个）
      for (const enemy of this.getEnemiesByOwner(shot.ownerIdx)) {
        if (enemy.sleeping) continue;
        const d = Math.hypot(enemy.x - shot.x, enemy.y - shot.y);
        if (d < enemy.radius + 6) {
          this.damageItem(enemy, ammo.damage || 0, this.getOwnerItem(shot.ownerIdx));
          this.createParticles(shot.x, shot.y, ammo.color || '#ffffff', 8);
          return false;
        }
      }
      return true;
    });
  }

  drawDispenserShots() {
    if (!this.dispenserShots) return;
    this.dispenserShots.forEach(shot => {
      const ammo = DISPENSER_AMMO[shot.kind] || {};
      // 拖尾
      const spd = Math.hypot(shot.vx, shot.vy) || 1;
      const ux = shot.vx / spd, uy = shot.vy / spd;
      const trailLen = Math.min(40, spd * 3);
      const grad = this.ctx.createLinearGradient(shot.x - ux*trailLen, shot.y - uy*trailLen, shot.x, shot.y);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, 'rgba(255,255,255,0.7)');
      this.ctx.strokeStyle = grad; this.ctx.lineWidth = 3; this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(shot.x - ux*trailLen, shot.y - uy*trailLen);
      this.ctx.lineTo(shot.x, shot.y);
      this.ctx.stroke();
      // 箭：用弓的贴图旋转到飞行方向
      if (shot.kind === 'arrow') {
        const angle = Math.atan2(shot.vy, shot.vx);
        const ps = 4;
        const pix = items.bow.arrowPixels, cols = pix[0].length, rows = pix.length;
        this.ctx.save();
        this.ctx.translate(shot.x, shot.y);
        this.ctx.rotate(angle - items.bow.arrowBaseAngle);
        const cx = (cols-1)/2 - 0.5, cy = (rows-1)/2 + 0.3;
        for (let py=0; py<rows; py++) for (let px=0; px<cols; px++) {
          const ci = pix[py][px];
          if (ci && items.bow.arrowColors[ci]) {
            this.ctx.fillStyle = items.bow.arrowColors[ci];
            this.ctx.fillRect((px-cx)*ps - ps/2, (py-cy)*ps - ps/2, ps, ps);
          }
        }
        this.ctx.restore();
      } else {
        // 圆形投射物：火焰弹/鸡蛋/雪球
        const ps = 2;
        let pix, colors;
        if (shot.kind === 'fire_charge') { pix = FIRE_CHARGE_PIXELS; colors = FIRE_CHARGE_COLORS; }
        else if (shot.kind === 'egg') { pix = EGG_PIXELS; colors = EGG_COLORS; }
        else { pix = SNOWBALL_PIXELS; colors = SNOWBALL_COLORS; }
        const w = pix[0].length * ps, h = pix.length * ps;
        for (let py=0; py<pix.length; py++) for (let px=0; px<pix[0].length; px++) {
          const ci = pix[py][px];
          if (!ci || !colors[ci]) continue;
          this.ctx.fillStyle = colors[ci];
          this.ctx.fillRect(shot.x - w/2 + px*ps, shot.y - h/2 + py*ps, ps, ps);
        }
      }
    });
  }

  drawCraftingTable(item) {
    const d = items['dispenser'];
    if (!d.craftingPixels) return;
    const ps = this.pixelScale * 0.7;
    const pix = d.craftingPixels, cols = pix[0].length, rows = pix.length;
    const tw = cols * ps, th = rows * ps;
    // 合成器贴在发射器侧面（朝向方向），钳制在画布内
    const offX = item.facing * (item.radius + tw/2 + 10);
    let tx = item.x + offX;
    tx = Math.max(tw/2 + 2, Math.min(this.canvas.width - tw/2 - 2, tx));
    const ty = item.y;
    // 画合成器桌面
    for (let py=0; py<rows; py++) for (let px=0; px<cols; px++) {
      const ci = pix[py][px];
      if (ci && d.craftingColors[ci]) {
        this.ctx.fillStyle = d.craftingColors[ci];
        this.ctx.fillRect(tx - tw/2 + px*ps, ty - th/2 + py*ps, ps, ps);
      }
    }
    // 画九宫格里已存入的弹药（4x4 迷你图标，从左到右从上到下）
    const slots = item.dispenserSlots || [];
    slots.forEach((kind, i) => {
      const ammo = DISPENSER_AMMO[kind];
      if (!ammo) return;
      const row = Math.floor(i / 3), col = i % 3;
      const gx = 1 + 5*col, gy = 1 + 5*row;   // 网格单元左上角
      const pal = (kind === 'arrow') ? items.bow.arrowColors : ammo.miniColors;
      for (let my=0; my<4; my++) for (let mx=0; mx<4; mx++) {
        const ci = ammo.mini[my][mx];
        if (!ci || !pal[ci]) continue;
        this.ctx.fillStyle = pal[ci];
        this.ctx.fillRect(tx - tw/2 + (gx+mx)*ps, ty - th/2 + (gy+my)*ps, ps, ps);
      }
    });
  }

  handlePoweredRail(item, now, index) {
    // 机制（用户确认 2026-09）：铁轨朝向=碰撞反弹后的运动方向（碰墙 → 朝向变）；
    // 虚线沿朝向预告；前 maxRails 条（默认5）按 railInterval(4s) 快速生成一条沿当前朝向的完整长轨
    // （首尾相接、可超出画面），第5条放完后每 extraRailInterval(15s) 还能再放一条（无限续），每条配一辆矿车
    const d = items['powered_rail'];
    const maxRails = d.maxRails || 5;
    const railsCount = (this.rails[index] || []).length;
    item.railAngle = Math.atan2(item.vy, item.vx);   // 朝向=当前运动方向（碰墙反弹后自动变）
    if (!item.telegraphStarted) { item.telegraphStarted = true; item.lastRailTime = now; return; }
    // 超过 maxRails 条后放慢为每 15 秒一条（无限续，不再硬性封顶）
    const interval = railsCount >= maxRails ? (d.extraRailInterval || 15000) : item.railInterval;
    if (now - item.lastRailTime < interval) return;
    this.generateRail(item, index, item.railAngle, now);
    item.lastRailTime = now;
  }

  generateRail(item, index, angle, now) {
    // 沿朝向 angle 生成一条完整长轨：段沿轨道方向铺满整个画布，并两端各超出一段（超出战斗框架）
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const L = d.pixels.length * ps;                  // 段长（轨道沿贴图行方向延伸）
    const W = this.canvas.width, H = this.canvas.height;
    const dx = Math.cos(angle), dy = Math.sin(angle);
    const S = Math.ceil(Math.hypot(W, H) / L) * L + L;   // 覆盖整个画布 + 两端超出一段
    const segs = [];
    for (let s = -S; s <= S + 0.01; s += L) {
      segs.push({ x: item.x + dx * s, y: item.y + dy * s, angle: angle - Math.PI / 2, bornTime: now });
    }
    this.rails[index].push(segs);
    // 矿车：行驶范围=画布内可见部分（铁轨超出画面，矿车在可视区来回）
    const cart = { dist: 0, dir: 1, lastHitTime: 0, minDist: 0, maxDist: segs.length * L };
    const range = this.lineCanvasRange(item.x, item.y, dx, dy, W, H);
    if (range) {
      const distAt = (s) => s - (-S) + L / 2;
      cart.minDist = distAt(range[0]);
      cart.maxDist = distAt(range[1]);
    }
    cart.dist = (cart.minDist + cart.maxDist) / 2;
    this.railCarts[index].push(cart);
    playSound(SOUNDS.railCartPass);   // 矿车音效：铁轨生成后首次出现只响一次（用户要求）
    // 生成瞬间沿整条轨撒闪光粒子（只撒可视范围附近，省性能）
    for (let i = 0; i < segs.length; i++) {
      const sg = segs[i];
      if (sg.x > -100 && sg.x < W + 100 && sg.y > -100 && sg.y < H + 100) this.createParticles(sg.x, sg.y, '#ffffff', 3);
    }
  }

  lineCanvasRange(x, y, dx, dy, W, H) {
    // 参数化直线 (x+dx*s, y+dy*s) 落在画布内的 s 区间；不穿过画布返回 null
    let lo = -Infinity, hi = Infinity;
    if (Math.abs(dx) < 1e-9) {
      if (x < 0 || x > W) return null;
    } else {
      const a = (0 - x) / dx, b = (W - x) / dx;
      lo = Math.max(lo, Math.min(a, b)); hi = Math.min(hi, Math.max(a, b));
    }
    if (Math.abs(dy) < 1e-9) {
      if (y < 0 || y > H) return null;
    } else {
      const a = (0 - y) / dy, b = (H - y) / dy;
      lo = Math.max(lo, Math.min(a, b)); hi = Math.min(hi, Math.max(a, b));
    }
    if (hi < lo) return null;
    return [lo, hi];
  }

  drawRailTelegraph() {
    // 未生成满的铁轨本体：沿当前朝向（=运动方向）画一条长虚线预告，方向随碰墙反弹改变
    if (!this.items) return;
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const L = d.pixels.length * ps;
    const W = this.canvas.width, H = this.canvas.height;
    const S = Math.ceil(Math.hypot(W, H) / L) * L + L;
    const ctx = this.ctx;
    const now = Date.now();
    this.items.forEach((item, idx) => {
      if (item.type !== 'powered_rail' || item.currentHp <= 0) return;
      const a = Math.atan2(item.vy, item.vx);
      const dx = Math.cos(a), dy = Math.sin(a);
      ctx.save();
      ctx.setLineDash([14, 12]);
      ctx.lineDashOffset = -((now / 50) % 26);     // 虚线流动（前进感）
      ctx.strokeStyle = 'rgba(255,255,255,0.6)';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(item.x - dx * S, item.y - dy * S);
      ctx.lineTo(item.x + dx * S, item.y + dy * S);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    });
  }

  railCartPosByDist(segs, dist) {
    // 矿车位置：沿长轨的里程 dist → 所在段 + 段内沿轨偏移（跨段连续）；segs=该轨道的段数组
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const L = d.pixels.length * ps;
    const i = Math.max(0, Math.min(segs.length - 1, Math.floor(dist / L)));
    const rail = segs[i];
    const off = dist - i * L - L / 2;
    // 矿车沿"轨道方向"（=贴图行方向经 rotate(angle) 后）行驶，才能骑在铁轨上
    const tx = Math.cos(rail.angle + Math.PI / 2), ty = Math.sin(rail.angle + Math.PI / 2);
    return { rail: rail, x: rail.x + tx * off, y: rail.y + ty * off };
  }

  updateRails(now) {
    if (!this.rails || !this.rails[0] || !this.rails[1]) return;
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const L = d.pixels.length * ps;
    for (let oi = 0; oi < 2; oi++) {
      const tracks = this.rails[oi], carts = this.railCarts[oi] || [];
      for (let ti = 0; ti < tracks.length; ti++) {
        const segs = tracks[ti], cart = carts[ti];
        if (!segs || !segs.length || !cart) continue;
        const total = segs.length * L;
        const lo = cart.minDist !== undefined ? cart.minDist : 10;
        const hi = cart.maxDist !== undefined ? cart.maxDist : total - 10;
        cart.dist += cart.dir * d.cartSpeed;
        if (cart.dist >= hi) { cart.dist = hi; cart.dir = -1; }
        if (cart.dist <= lo) { cart.dist = lo; cart.dir = 1; }
        const at = this.railCartPosByDist(segs, cart.dist);
        // 撞到敌方本体（对面队伍任意一个）
        for (const enemy of this.getEnemiesByOwner(oi)) {
          if (enemy.sleeping) continue;
          if (Math.hypot(enemy.x - at.x, enemy.y - at.y) < enemy.radius + 12 &&
              now - cart.lastHitTime >= d.cartDamageCooldown) {
            cart.lastHitTime = now;
            this.damageItem(enemy, d.attack, this.getOwnerItem(oi));
            this.createParticles(at.x, at.y, '#ffffff', 8);
          }
        }
        // 撞到敌方僵尸
        const eMinions = this.minions[1 - oi] || [];
        for (const em of eMinions) {
          if (em.currentHp <= 0) continue;
          if (Math.hypot(em.x - at.x, em.y - at.y) < em.radius + 12 &&
              now - cart.lastHitTime >= d.cartDamageCooldown) {
            cart.lastHitTime = now;
            this.damageItem(em, d.attack, this.getOwnerItem(oi));
            this.createParticles(at.x, at.y, '#ffffff', 6);
            break;
          }
        }
      }
    }
  }

  // ===== 时钟（clock）=====
  handleClock(item, now, index) {
    // 普通行为：一次召唤一个小时钟，小时钟弧形追踪敌人
    // （不阻止 timeStopTriggered：暂停结束后时钟仍要恢复发出小时钟攻击，用户要求）
    if (now - (item.lastSummonTime || 0) < item.summonInterval) return;
    const active = item.smallClocks.filter(sc => !sc.waiting && now < sc.expire).length;
    if (active >= 1) return;
    item.lastSummonTime = now;
    item.smallClocks.push(this.makeSmallClock(item, false));
  }

  makeSmallClock(owner, waiting, rush) {
    const d = items['clock'];
    return {
      x: owner.x, y: owner.y,
      heading: Math.random() * Math.PI * 2,
      speed: rush ? d.smallClockRushSpeed : d.smallClockSpeed,
      turnRate: rush ? d.smallClockRushTurnRate : d.smallClockTurnRate,
      radius: 12,
      damage: d.smallClockDamage,
      expire: Date.now() + d.smallClockLife,
      waiting: waiting
    };
  }

  // 时间暂停期间：在敌人周围的圆周位置生成下一个小时钟（2026-09 用户改：一个一个出现）
  spawnTimeStopClock(clock) {
    const d = items['clock'];
    if (clock.timeStopSpawnCount >= d.timeStopSpawnCount || !clock.timeStopCirclePos) return;
    const pos = clock.timeStopCirclePos[clock.timeStopSpawnCount];
    if (!pos) return;
    const sc = this.makeSmallClock(clock, true, true);
    sc.x = pos.x;
    sc.y = pos.y;
    sc.heading = pos.heading;            // 朝向圆心（敌人）
    clock.smallClocks.push(sc);
    clock.timeStopSpawnCount++;
    playSound(SOUNDS.snowGolemThrow);    // 小闹钟生成音效=雪傀儡扔雪球音效（2026-09 用户要求）
  }

  updateSmallClocks(now) {
    if (!this.items) return;
    this.items.forEach((item) => {
      if (item.type !== 'clock' || !item.smallClocks || item.currentHp <= 0) return;
      const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
      if (!enemy) return;
      item.smallClocks = item.smallClocks.filter(sc => {
        if (sc.waiting) return true;                 // 时间暂停期间不动
        if (now > sc.expire) { playSound(SOUNDS.snowGolemThrow); return false; }   // 寿命到消失（音效=雪傀儡扔雪球，用户要求）
        // 弧形追踪：航向朝敌人限速旋转（不直直过去，有一定弧度）
        const ta = Math.atan2(enemy.y - sc.y, enemy.x - sc.x);
        let d = ta - sc.heading;
        while (d > Math.PI) d -= Math.PI * 2;
        while (d < -Math.PI) d += Math.PI * 2;
        sc.heading += Math.max(-sc.turnRate, Math.min(sc.turnRate, d));
        sc.vx = Math.cos(sc.heading) * sc.speed;
        sc.vy = Math.sin(sc.heading) * sc.speed;
        sc.x += sc.vx;
        sc.y += sc.vy;
        // 命中敌人
        if (!enemy.sleeping && Math.hypot(enemy.x - sc.x, enemy.y - sc.y) < enemy.radius + sc.radius) {
          this.damageItem(enemy, sc.damage, item);
          this.createParticles(sc.x, sc.y, '#f0c832', 8);
          playSound(SOUNDS.snowGolemThrow);   // 小闹钟命中消失音效=雪傀儡扔雪球音效（用户要求）
          return false;
        }
        return true;
      });
    });
  }

  startTimeStop(clock) {
    if (this.timeStop && this.timeStop.active) return;   // 已有时间暂停进行中则不覆盖
    const ownerIdx = clock.owner;
    const d = items['clock'];
    const now = Date.now();
    this.timeStop = {
      active: true,
      startTime: now,
      endTime: now + d.timeStopDuration,
      ownerIdx: ownerIdx,
      clock: clock,                       // 触发暂停的时钟本体（2v2 双时钟时小时钟挂它身上）
      spawnInterval: d.timeStopSpawnInterval,
      spawnCount: d.timeStopSpawnCount
    };
    if (clock) {
      clock.timeStopSpawnCount = 0;
      clock.timeStopSpawnNext = now - (d.timeStopSpawnInterval || 250);   // 让第一颗立刻出现，之后逐个冒
      // 预计算 12 个小时钟围绕敌人围成圆的圆周位置（2026-09 用户改：一个一个出现在圆周上）
      const enemy = this.nearestEnemyByOwner(ownerIdx, clock.x, clock.y);
      clock.timeStopCirclePos = [];
      if (enemy && enemy.currentHp > 0) {
        const R = d.timeStopCircleRadius || 90;
        for (let i = 0; i < d.timeStopSpawnCount; i++) {
          const a = (Math.PI * 2 * i) / d.timeStopSpawnCount;
          clock.timeStopCirclePos.push({
            x: enemy.x + Math.cos(a) * R,
            y: enemy.y + Math.sin(a) * R,
            heading: Math.atan2(-Math.sin(a), -Math.cos(a))   // 朝向圆心（敌人）
          });
        }
      }
    }
  }

  updateTimeStop(now) {
    const ts = this.timeStop;
    if (!ts) return;
    const clock = (ts.clock && ts.clock.currentHp > 0) ? ts.clock : this.getOwnerItem(ts.ownerIdx);
    if (!clock) { this.timeStop = null; return; }
    // 时间暂停结束：画面恢复，所有小时钟全部攻向敌人
    if (now >= ts.endTime) {
      this.timeStop = null;
      // 暂停期间没出完的圆上小闹钟一次性补齐，全部攻向敌人
      while (clock.timeStopSpawnCount < ts.spawnCount) this.spawnTimeStopClock(clock);
      clock.smallClocks.forEach(sc => {
        sc.waiting = false;
        sc.expire = now + items['clock'].smallClockLife;   // 暂停结束才开始计寿命，保证有充足时间追击
      });
      // 本体若无速度则给随机漫游方向（暂停期间它在动）
      if (Math.hypot(clock.vx, clock.vy) < 0.01) {
        const a = Math.random() * Math.PI * 2;
        clock.vx = Math.cos(a) * clock.speed;
        clock.vy = Math.sin(a) * clock.speed;
      }
      return;
    }
    // 时钟仍可移动（正常漂浮 + 物理反弹）
    clock.x += clock.vx * 0.6;
    clock.y += clock.vy * 0.6;
    this.physics.update(clock);
    // 一个一个生成：围绕敌人的圆上逐个冒出（2026-09 用户改）
    if (clock.timeStopSpawnCount < ts.spawnCount && now - (clock.timeStopSpawnNext || 0) >= ts.spawnInterval) {
      clock.timeStopSpawnNext = now;
      this.spawnTimeStopClock(clock);
    }
  }

  drawSmallClocks() {
    if (!this.items) return;
    const ps = 1.5;   // 16x16×1.5 → 24px（用户嫌大，再小一点）
    const pix = SMALL_CLOCK_PIXELS, colors = SMALL_CLOCK_COLORS;
    const rows = pix.length, cols = pix[0].length;
    const w = cols * ps, h = rows * ps;
    this.items.forEach(item => {
      if (item.type !== 'clock' || !item.smallClocks) return;
      item.smallClocks.forEach(sc => {
        this.ctx.save();
        this.ctx.translate(sc.x, sc.y);
        this.ctx.rotate(sc.heading);
        for (let py = 0; py < rows; py++) for (let px = 0; px < cols; px++) {
          const ci = pix[py][px];
          if (!ci || !colors[ci]) continue;
          this.ctx.fillStyle = colors[ci];
          this.ctx.fillRect(-w / 2 + px * ps, -h / 2 + py * ps, ps, ps);
        }
        this.ctx.restore();
      });
    });
  }

  ensureRailTile() {
    // 单段铁轨贴图（MC原版俯视图提取的 pixels 矩阵）缓存到离屏画布，所有段共用
    if (this.railStripCanvas) return;
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const pix = d.pixels, cols = pix[0].length, rows = pix.length;
    const c = document.createElement('canvas');
    c.width = Math.ceil(cols * ps); c.height = Math.ceil(rows * ps);
    const g = c.getContext('2d');
    for (let py = 0; py < rows; py++) {
      for (let px = 0; px < cols; px++) {
        const ci = pix[py][px];
        if (!ci || !d.colors[ci]) continue;
        g.fillStyle = d.colors[ci];
        g.fillRect(px * ps, py * ps, ps, ps);
      }
    }
    this.railStripCanvas = c;
    // 阴影版：贴图剪影填黑，画在每个段的右下偏移处（上层段压在下层段上时有投影层次）
    const s = document.createElement('canvas');
    s.width = c.width; s.height = c.height;
    const sg = s.getContext('2d');
    sg.drawImage(c, 0, 0);
    sg.globalCompositeOperation = 'source-in';
    sg.fillStyle = 'rgba(0,0,0,0.38)';
    sg.fillRect(0, 0, s.width, s.height);
    this.railShadowCanvas = s;
  }

  drawRails() {
    if (!this.rails || !this.rails[0] || !this.rails[1]) return;
    if (!this.rails[0].length && !this.rails[1].length) return;
    this.ensureRailTile();
    const tile = this.railStripCanvas;
    const shadow = this.railShadowCanvas;
    const d = items['powered_rail'];
    const ps = this.pixelScale * 0.5;
    const cpix = d.cartPixels, ccols = cpix[0].length, crows = cpix.length;
    const cw = ccols * ps, ch = crows * ps;
    const nowNow = Date.now();
    // 铁轨段：按生成顺序绘制（先生成的先画在下面，后生成的后画压在上面）
    for (let oi = 0; oi < 2; oi++) {
      const tracks = this.rails[oi];
      for (let ti = 0; ti < tracks.length; ti++) {
        tracks[ti].forEach(rail => {
          const grow = Math.min(1, (nowNow - rail.bornTime) / 200);   // 铺设压入动画
          const scale = 0.6 + 0.4 * grow;
          this.ctx.save();
          this.ctx.translate(rail.x, rail.y);
          this.ctx.rotate(rail.angle);
          this.ctx.scale(scale, scale);
          // 投影（沿段方向右下偏移）：交叠处上层铁轨在下层铁轨/地面留影 → 层次感
          if (shadow) {
            this.ctx.globalAlpha = 0.85;
            this.ctx.drawImage(shadow, -tile.width / 2 + 3, -tile.height / 2 + 4);
            this.ctx.globalAlpha = 1;
          }
          this.ctx.drawImage(tile, -tile.width / 2, -tile.height / 2);
          this.ctx.restore();
        });
      }
    }
    // 矿车最后统一画（压在所有铁轨上面）：每条铁轨一辆，顺着各自长轨来回行驶
    for (let oi = 0; oi < 2; oi++) {
      const tracks = this.rails[oi], carts = this.railCarts[oi] || [];
      for (let ti = 0; ti < tracks.length; ti++) {
        const segs = tracks[ti], cart = carts[ti];
        if (!segs || !segs.length || !cart) continue;
        const at = this.railCartPosByDist(segs, cart.dist);
        this.ctx.save();
        this.ctx.translate(at.x, at.y);
        this.ctx.rotate(at.rail.angle + (cart.dir < 0 ? Math.PI : 0));
        this.ctx.scale(0.9, 0.9);
        // 底部小阴影（层次感）
        this.ctx.fillStyle = 'rgba(0,0,0,0.25)';
        this.ctx.fillRect(-cw / 2 + 3, -ch / 2 + 4, cw, ch);
        for (let py = 0; py < crows; py++) for (let px = 0; px < ccols; px++) {
          const ci = cpix[py][px];
          if (!ci || !d.cartColors[ci]) continue;
          this.ctx.fillStyle = d.cartColors[ci];
          this.ctx.fillRect(-cw / 2 + px * ps, -ch / 2 + py * ps, ps, ps);
        }
        this.ctx.restore();
      }
    }
  }

  drawSnowballs() {
    if (!this.snowballs) return;
    this.snowballs.forEach(sb => {
      const ps = 2;
      const rows = SNOWBALL_PIXELS, colors = SNOWBALL_COLORS;
      const w = rows[0].length * ps, h = rows.length * ps;
      for (let r = 0; r < rows.length; r++) {
        for (let c = 0; c < rows[r].length; c++) {
          const v = rows[r][c];
          if (!v) continue;
          this.ctx.fillStyle = colors[v];
          this.ctx.fillRect(sb.x - w/2 + c*ps, sb.y - h/2 + r*ps, ps, ps);
        }
      }
    });
  }

  handleSpawner(item, now, index) {
    // 刷怪笼：每隔一段时间刷一只僵尸（有上限），本体正常漂浮；index=owner
    if (item.currentHp <= 0) return;   // 死亡不再召唤
    if (item.lastSpawnTime === 0) item.lastSpawnTime = now;
    const d = items['spawner'];
    const alive = this.minions[index].filter(m => m.currentHp > 0).length;
    // 未达上限按 spawnInterval(3s) 快速召唤；达上限后每 extraSpawnInterval(12s) 还能再招一个（无限续）
    const interval = alive >= item.maxMinions ? (d.extraSpawnInterval || 12000) : item.spawnInterval;
    if (now - item.lastSpawnTime >= interval) {
      item.lastSpawnTime = now;
      this.spawnMinion(item, index);
    }
  }

  spawnMinion(spawner, index) {
    const md = items['zombie_head'];
    const ang = Math.random() * Math.PI * 2;
    const m = this.initItem('zombie_head', spawner.x + Math.cos(ang) * (spawner.radius + 25), spawner.y + Math.sin(ang) * (spawner.radius + 25));
    m.isMinion = true;
    m.ownerIndex = index;
    m.firstBitePending = true;   // 首咬：先追踪最近敌人咬一口（伤害=attack+5），咬完才随机碰撞
    const roam = Math.random() * Math.PI * 2;
    m.vx = Math.cos(roam) * m.speed;
    m.vy = Math.sin(roam) * m.speed;
    this.minions[index].push(m);
    playSound(SOUNDS.zombieSpawn);   // 僵尸召唤音效
    this.createParticles(m.x, m.y, '#4e7b36', 8);
    console.log('[SPAWN] zombie_head for player ' + index + ', total: ' + this.minions[index].length);
  }

  updateMinions(now) {
    if (!this.minions) return;
    for (let pi = 0; pi < 2; pi++) {
      const enemyItems = this.getEnemiesByOwner(pi);
      const enemyMinions = this.minions[1 - pi] || [];
      // 僵尸移动 + 索敌
      const zombiesDied = this.minions[pi].some(m => m.currentHp <= 0);
      this.minions[pi] = this.minions[pi].filter(m => m.currentHp > 0);
      if (zombiesDied) playSound(SOUNDS.zombieDeath);   // 僵尸死亡音效
      this.minions[pi].forEach(m => {
        // 普通碰撞小球：保持当前速度一直飞，碰框反弹（checkBoundary），碰敌人交换速度+伤害
        if (m.vx === 0 && m.vy === 0) {
          const a = Math.random()*Math.PI*2;
          m.vx = Math.cos(a)*m.speed; m.vy = Math.sin(a)*m.speed;
        }
        m.facing = m.vx > 0 ? 1 : -1;
        // 咬后飞离阶段：全速脱离（不乘0.6），脱离接触圈后恢复常速
        const fleeing = m.fleeing === true;
        const moveFactor = fleeing ? 1.0 : 0.6;
        // ★首咬追踪：刚生成的僵尸先追踪最近敌人咬第一口（伤害=attack+5），咬完第一口才转入随机碰撞
        if (m.firstBitePending) {
          let best = null, bd = Infinity;
          const cands = [];
          enemyItems.forEach(e => { if (!e.sleeping && e.currentHp > 0) cands.push(e); });
          enemyMinions.forEach(em => { if (em.currentHp > 0) cands.push(em); });
          for (const c of cands) {
            const d = Math.hypot(c.x - m.x, c.y - m.y);
            if (d < bd) { bd = d; best = c; }
          }
          if (!best) {
            m.firstBitePending = false;   // 对面全灭/全睡：直接转随机碰撞
          } else {
            const ang = Math.atan2(best.y - m.y, best.x - m.x);
            m.vx = Math.cos(ang) * m.speed;
            m.vy = Math.sin(ang) * m.speed;
            m.facing = m.vx > 0 ? 1 : -1;
            m.x += m.vx * moveFactor;
            m.y += m.vy * moveFactor;
            this.physics.checkBoundary(m);
            if (bd < m.radius + best.radius) {
              // 咬第一口：基础伤害 +5
              this.damageItem(best, m.attack + 5, m);
              this.createParticles(best.x, best.y, '#4e7b36', 5);
              m.lastAttackTime = now;
              m.firstBitePending = false;
              const ra = Math.random() * Math.PI * 2;   // 咬完给随机方向，转入正常随机碰撞
              m.vx = Math.cos(ra) * m.speed;
              m.vy = Math.sin(ra) * m.speed;
            }
          }
          return;   // 首咬帧处理完，跳过下方正常碰撞逻辑
        }
        // 击退（被雪球命中）：速度指数衰减，结束后恢复常速
        if (m.knockUntil && now < m.knockUntil) {
          const kd = 0.90;
          m.vx *= kd;
          m.vy *= kd;
        } else if (m.knockUntil && now >= m.knockUntil) {
          m.knockUntil = 0;
          const s2 = Math.hypot(m.vx, m.vy) || m.speed;
          m.vx = m.vx / s2 * m.speed;
          m.vy = m.vy / s2 * m.speed;
        }
        m.x += m.vx * moveFactor;
        m.y += m.vy * moveFactor;
        this.physics.checkBoundary(m);
        // 碰撞敌人（敌队本体或敌僵尸）：交换速度 + 咬一口
        const hitTargets = [];
        enemyItems.forEach(e => { if (!e.sleeping) hitTargets.push({ t: e, isBody: true }); });
        enemyMinions.forEach(em => { if (em.currentHp > 0) hitTargets.push({ t: em, isBody: false }); });
        hitTargets.forEach(ht => {
          const t = ht.t;
          const dx = t.x - m.x, dy = t.y - m.y;
          const dist = Math.hypot(dx, dy) || 1;
          const minD = m.radius + t.radius;
          // 飞离中：只做位置分离，完全不判咬、不改速度方向（保持向外冲）
          if (fleeing) {
            if (now - (m.fleeStart||0) > 600) {
              // 超时保险：600ms 强制恢复正常（防角落卡死）
              m.fleeing = false;
              const s2 = Math.hypot(m.vx, m.vy) || m.speed;
              m.vx = m.vx / s2 * m.speed; m.vy = m.vy / s2 * m.speed;
            } else if (dist < minD) {
              m.x -= dx/dist * (minD - dist);
              m.y -= dy/dist * (minD - dist);
            } else {
              m.fleeing = false;                     // 已脱离接触圈
              const s2 = Math.hypot(m.vx, m.vy) || m.speed;
              m.vx = m.vx / s2 * m.speed;            // 恢复正常速度
              m.vy = m.vy / s2 * m.speed;
            }
            return;
          }
          if (dist < minD) {
            // 分离重叠
            const overlap = minD - dist;
            m.x -= dx/dist * overlap * 0.5;
            m.y -= dy/dist * overlap * 0.5;
            if (!ht.isBody) { t.x += dx/dist * overlap * 0.5; t.y += dy/dist * overlap * 0.5; }
            const nx = dx/dist, ny = dy/dist;
            const speed = Math.hypot(m.vx, m.vy) || m.speed;
            const canBite = now - (m.lastAttackTime||0) >= m.attackCooldown;
            if (canBite) {
              m.lastAttackTime = now;
              m.isAttacking = true;
              m.attackProgress = 0;
              m.attackStartTime = now;
              this.damageItem(t, m.attack, m);
              this.createParticles(t.x, t.y, '#4e7b36', 5);
              // 咬完进入飞离：3倍速度向外冲，直到脱离接触圈
              m.vx = -nx * speed * 3;
              m.vy = -ny * speed * 3;
              m.fleeing = true;
              m.fleeStart = now;
            } else {
              // 冷却中：仅反弹不伤害
              m.vx = -nx * speed; m.vy = -ny * speed;
            }
            if (!ht.isBody) {
              const ts = Math.hypot(t.vx||0, t.vy||0) || t.speed;
              t.vx = nx * ts; t.vy = ny * ts;
            }
          }
        });
        if (m.isAttacking) {
          m.attackProgress = now - (m.attackStartTime||now);
          if (m.attackProgress >= m.attackDuration) { m.isAttacking = false; m.attackProgress = 0; }
        }
      });
      // 僵尸互撞：简单推开
      const all = this.minions[0].concat(this.minions[1]);
      for (let i = 0; i < all.length; i++) {
        for (let j = i+1; j < all.length; j++) {
          const a = all[i], b = all[j];
          if (a.currentHp<=0 || b.currentHp<=0) continue;
          const dx = b.x-a.x, dy = b.y-a.y;
          const dist = Math.hypot(dx,dy)||1;
          const minD = a.radius + b.radius;
          if (dist < minD) {
            const push = (minD-dist)/2;
            a.x -= dx/dist*push; a.y -= dy/dist*push;
            b.x += dx/dist*push; b.y += dy/dist*push;
          }
        }
      }
    }
  }

  drawMinions() {
    if (!this.minions) return;
    this.minions.forEach(list => list.forEach(m => { if (m.currentHp > 0) this.drawItem(m); }));
  }

  handleBed(item, now) {
    // 床只影响对面队伍所有敌人（2v2 每队2个都要能吸/睡）
    const enemies = this.getEnemiesByOwner(item.owner);
    if (!enemies.length) return;

    enemies.forEach(enemy => {
      // === 敌人被吸附睡觉中：锁定其位置在床中心，比例缩小 ===
      if (enemy.sleeping && enemy.sleepBedOwner === item) {
        const bed = enemy.sleepBed;
        enemy.x = bed.x;
        enemy.y = bed.y;
        enemy.vx = 0;
        enemy.vy = 0;
        // 睡觉计时（Date.now 差值）
        if (now - enemy.sleepStartTime >= item.sleepDuration) {
          // 睡醒：站起并扣血（扣的是敌人自己的血）
          enemy.sleeping = false;
          enemy.sleepScaleTarget = 1;
          enemy.sleepBed = null;
          enemy.sleepBedOwner = null;
          enemy.bowChargePausedAt = undefined;   // 弓：蓄力冻结解除，从冻结进度继续
          enemy.wakeGraceUntil = now + 800; // 睡醒后800ms内不再被吸附
          // 睡醒恢复移动：睡觉时速度被清零，不给新速度会永远钉在原地
          const wakeAngle = Math.random() * Math.PI * 2;
          enemy.vx = Math.cos(wakeAngle) * enemy.speed;
          enemy.vy = Math.sin(wakeAngle) * enemy.speed;
          const dmg = item.attack || 80;
          this.damageItem(enemy, dmg, item);
          // 床是一次性的：敌人睡醒受到伤害后，这张床就地消失
          const bedIdx = item.placedBeds.indexOf(bed);
          if (bedIdx >= 0) item.placedBeds.splice(bedIdx, 1);
          playSound(SOUNDS.bedDestroy);   // 床被睡完销毁音效
          this.createParticles(bed.x, bed.y, '#F1C40F', 10);
          console.log('[BED WAKE] ' + enemy.name + ' woke up, took ' + dmg + ', bed consumed');
        }
      }

      // === 吸附判定：敌人靠近任意一张已放床 → 强制上床睡觉 ===
      if (!enemy.sleeping && now > (enemy.wakeGraceUntil || 0)) {
        for (const bed of item.placedBeds) {
          const d = Math.hypot(enemy.x - bed.x, enemy.y - bed.y);
          if (d <= item.attackRange) {
            enemy.sleeping = true;
            enemy.sleepBed = bed;
            enemy.sleepBedOwner = item;
            enemy.sleepStartTime = now;
            enemy.sleepScale = 1;
            enemy.sleepScaleTarget = 0.55;
            // 弓：睡觉期间蓄力暂停，记录已蓄时长作为冻结锚点（醒来从冻结点继续）
            if (enemy.type === 'ranged' && enemy.bowPhase === 'charging') {
              enemy.bowChargePausedAt = now - (enemy.bowChargeStart || 0);
            }
            enemy.vx = 0;
            enemy.vy = 0;
            console.log('[BED SNARE] ' + enemy.name + ' trapped in bed');
            break;
          }
        }
      }
    });

    // === 放床触发：冷却完毕就沿移动方向放一张床（距离限制避免重叠）===
    // 只剩最后一层时不再放床（放了自己就没了）；对面有人睡着时不放
    const canPlace = now - item.bedPlaceCooldown >= item.attackCooldown && item.bedsLeft > 1 && item.currentHp > 0;
    if (canPlace && !enemies.some(e => e.sleeping)) {
      // 与最近一张已放床保持最小间距，避免全叠在一起
      const minGap = item.radius * 1.6;
      const tooClose = item.placedBeds.some(b => Math.hypot(item.x - b.x, item.y - b.y) < minGap);
      if (!tooClose) {
        item.bedPlaceCooldown = now;
        // 每放置一张床，床数减少一张
        item.bedsLeft--;
        item.currentHp = item.bedsLeft > 1 ? item.bedsLeft * 80 : (items['bed'].bedLastHp || 200);   // 只剩最后一张床时血量=bedLastHp
        console.log('[BED STORE] left: ' + item.bedsLeft);
        // 床朝向：面向床主体的移动方向
        const ang = Math.atan2(item.vy, item.vx);
        const facing = Math.abs(Math.cos(ang)) > Math.abs(Math.sin(ang)) ? 1 : -1;
        item.placedBeds.push({ x: item.x, y: item.y, facing: facing, bornAt: now });
        playSound(SOUNDS.bedPlace);   // 床放置音效
        console.log('[BED PLACE] at', Math.round(item.x), Math.round(item.y), 'total:', item.placedBeds.length);
      }
    }

    // === 敌人被床抓走期间，床本体照常漂浮（不需要额外处理）===
  }

    handleBow(item, now) {
    const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
    if (!enemy) return;
    const angleToEnemy = Math.atan2(enemy.y - item.y, enemy.x - item.x);

    // === 自动触发：空闲 + 冷却完毕 → 开始拉弓 ===
    if (item.bowPhase === 'idle') {
      const cooldownOver = item.lastAttackTime === 0 || now - item.lastAttackTime >= item.attackCooldown;
      const inRange = Math.sqrt((enemy.x-item.x)**2 + (enemy.y-item.y)**2) <= item.attackRange;
      if (cooldownOver && inRange) {
        item.bowPhase = 'charging';
        item.bowChargeStart = now;
        item.bowAimAngle = angleToEnemy;
      }
      return;
    }

    // === 拉弓阶段：站定瞄准，三个程度切换贴图，轻微晃动 ===
    if (item.bowPhase === 'charging') {
      const elapsed = now - item.bowChargeStart;
      item.bowAimAngle = angleToEnemy + Math.sin(now / 130) * (item.aimWobble || 0.04) * Math.min(1, elapsed / 600);
      if (elapsed >= item.chargeTime) {
        // 拉满瞬间锁定方向发射
        item.bowPhase = 'shooting';
        item.bowShotTime = now;
        item.bowAimAngle = angleToEnemy; // 发射瞬间锁最终方向
        playSound(SOUNDS.bowShoot);   // 弓射出音效
        this.projectiles.push({
          x: item.x + Math.cos(item.bowAimAngle) * (item.radius + 6),
          y: item.y + Math.sin(item.bowAimAngle) * (item.radius + 6),
          vx: Math.cos(item.bowAimAngle) * (item.arrowSpeed || 11),
          vy: Math.sin(item.bowAimAngle) * (item.arrowSpeed || 11),
          damage: item.attack, owner: item, attacker: item,
          pixels: item.arrowPixels, colors: item.arrowColors,
          baseAngle: item.arrowBaseAngle || 0,
          size: 7, type: 'arrow', color: '#F1C40F'
        });
        item.lastProjectileTime = now;
      }
      return;
    }

    // === 发射后坐阶段：短暂回弹 (300ms)，期间站定 ===
    if (item.bowPhase === 'shooting') {
      if (now - item.bowShotTime >= 300) {
        item.bowPhase = 'recovering';
        item.bowRecoverStart = now;
      }
      return;
    }

    // === 恢复阶段 (200ms) → 回到 idle，保持原方向继续移动（不随机转向）===
    if (item.bowPhase === 'recovering') {
      if (now - item.bowRecoverStart >= 200) {
        item.bowPhase = 'idle';
        // 保持当前 vx/vy 不变，射完箭继续沿原方向飘
        const spd = Math.sqrt(item.vx * item.vx + item.vy * item.vy);
        if (spd < 0.01) {
          const roamAngle = Math.random() * Math.PI * 2;
          item.vx = Math.cos(roamAngle) * item.speed;
          item.vy = Math.sin(roamAngle) * item.speed;
        }
      }
    }
  }
  
  explode(item, target, now) {
    this.damageItem(target, item.attack, item);
    this.createParticles(item.x, item.y, '#E74C3C', 25);
    this.createParticles(item.x, item.y, '#F39C12', 15);
    item.lastAttackTime = now;
    item.isAttacking = true;
    item.attackProgress = 0;
  }
  
  triggerAttack(a, b) {
    // 铁剑：碰撞固定扣 attack(45) 直伤；扇形蓄力斩仍由 checkSlashAttack 负责（蓄满才触发）
    // 不设 isAttacking，避免干扰挥剑动画状态机；lastAttackTime 与蓄力斩共用冷却互斥
    if (a.key === 'iron_sword') {
      if (a.sleeping || b.sleeping) return;
      // 蓄满：碰撞直接放蓄力斩（交给 checkSlashAttack 结算，不造成10点小碰撞伤害、不打断蓄力）
      if (a.chargeProgress >= 1) return;
      // 未满：碰撞伤害走独立冷却 lastHitTime，绝不碰 lastAttackTime——碰撞不打断蓄力（蓄力条保留继续蓄）
      const now = Date.now();
      if (a.lastHitTime > 0 && now - a.lastHitTime < a.attackCooldown) return;
      a.lastHitTime = now;
      this.damageItem(b, a.attack, a);
      this.createParticles(b.x, b.y, '#E74C3C', 5);
      return;
    }
    if (a.sleeping || b.sleeping) return; // 睡觉中的物品不近战
    if ((a.type === 'melee' || a.type === 'tank') && !a.isAttacking) {
      const now = Date.now();
      if (now - a.lastAttackTime >= a.attackCooldown) {
        const dx = b.x - a.x, dy = b.y - a.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        const angleToEnemy = Math.atan2(dy, dx);
        const ownAngle = Math.atan2(a.vy, a.vx);
        const angleDiff = Math.abs(((angleToEnemy - ownAngle + Math.PI) % (2*Math.PI)) - Math.PI);
        // 剑尖始终指向敌人方向计算角度差
        const facingAngle = a.facing === 1 ? 0 : Math.PI;
        const angleFromFacing = Math.abs(((angleToEnemy - facingAngle + Math.PI) % (2*Math.PI)) - Math.PI);
        // 检测是否在扇形范围内
        const slashRange = a.slashRange || (a.attackRange * 4.0);
        const slashAngle = a.slashAngle || (Math.PI * 0.8);
        if (dist <= slashRange && angleFromFacing <= slashAngle / 2) {
          const damage = a.chargeDamage || a.attack;
          this.damageItem(b, damage, a);
          this.createParticles(b.x, b.y, '#E74C3C', 5);
        } else if (dist <= a.attackRange) {
          // 近距离直接打击
          this.damageItem(b, a.attack, a);
          this.createParticles(b.x, b.y, '#E74C3C', 5);
        }
        a.lastAttackTime = now;
        a.isAttacking = true;
        a.attackProgress = 0;
      }
    }
  }
  

  checkSlashAttack(attacker) {
    // 只对铁剑生效
    if (attacker.key !== 'iron_sword') return;

    const now = Date.now();
    // 如果正在攻击动画中，不重复触发
    if (attacker.isAttacking) return;
    // 检查 cooldown（但初始攻击允许）
    if (attacker.lastAttackTime > 0 && now - attacker.lastAttackTime < attacker.attackCooldown) return;
    // 蓄力条没满不能攻击
    if (attacker.chargeProgress < 1) return;

    // 敌人（敌队本体或敌队召唤物）在扇形攻击距离内就触发
    const attackerOwner = attacker.owner;
    const candidates = this.getEnemiesByOwner(attackerOwner).slice();
    if (this.minions) {
      this.minions[1 - attackerOwner].forEach(m => { if (m.currentHp > 0) candidates.push(m); });
    }
    let inRange = false, enemy = null, dx = 0, dy = 0;
    for (const c of candidates) {
      const ddx = c.x - attacker.x, ddy = c.y - attacker.y;
      if (Math.sqrt(ddx*ddx + ddy*ddy) <= attacker.slashRange) { inRange = true; enemy = c; dx = ddx; dy = ddy; break; }
    }
    if (!inRange) return;

    // 触发攻击：扇形中心锁定为触发瞬间的敌人方向，闪烁显示的就是实际伤害范围
    attacker.lastAttackTime = now;
    attacker.isAttacking = true;
    attacker.attackProgress = 0;
    attacker.attackStartTime = now;
    attacker.slashDamageDone = false;
    attacker.slashCenterAngle = Math.atan2(dy, dx);
    playSound(SOUNDS.swordSlash);   // 铁剑斩击音效
    // 蓄力消耗，冷却结束后重新蓄力
    attacker.chargeProgress = 0;
    attacker.chargeStartTime = 0;
  }

  // 扇形范围伤害：扇形内所有目标都受伤（由 update 在动画中点结算一次，不用 setTimeout）
  applySlashDamage(attacker) {
    const slashAngle = attacker.slashAngle || (Math.PI * 0.8);
    const dmg = attacker.chargeDamage || attacker.attack;
    // 目标 = 敌队本体 + 敌队召唤物（僵尸），扇形内全部受伤（不伤队友）
    const targets = this.getEnemiesByOwner(attacker.owner).slice();
    if (this.minions) {
      this.minions[1 - attacker.owner].forEach(m => { if (m.currentHp > 0) targets.push(m); });
    }
    targets.forEach(target => {
      if (target === attacker) return;
      const tdx = target.x - attacker.x, tdy = target.y - attacker.y;
      const tdist = Math.sqrt(tdx*tdx + tdy*tdy);
      if (tdist > attacker.slashRange) return;
      const angleToTarget = Math.atan2(tdy, tdx);
      const diff = Math.abs(((angleToTarget - attacker.slashCenterAngle + Math.PI) % (2*Math.PI)) - Math.PI);
      if (diff <= slashAngle / 2) {
        this.damageItem(target, dmg, attacker);
        this.createParticles(target.x, target.y, '#E74C3C', 8);
      }
    });
  }
    damageItem(item, damage, attacker) {
    // 稻草床：>1张床时受伤=消耗一张存床；只剩最后一张床时变成普通血量单位（bedLastHp=200 滴血正常扣）
    if (item.type === 'bed') {
      if (item.bedsLeft > 1) {
        item.bedsLeft--;
        item.currentHp = item.bedsLeft * 80;
        console.log('[BED HIT] ' + item.name + ' lost one bed, left: ' + item.bedsLeft);
        return;
      }
      // 剩最后一张床：正常扣血，扣完死
      item.currentHp = Math.max(0, item.currentHp - damage);
      console.log('[BED LAST] ' + item.name + ' -' + damage + ' HP, remaining: ' + item.currentHp);
      return;
    }
    // 正在睡觉的目标：伤害转移到床物品上（消耗一张存床；只剩最后一张时正常扣血）
    if (item.sleeping && item.sleepBedOwner) {
      const owner = item.sleepBedOwner;
      if (owner.bedsLeft > 1) {
        owner.bedsLeft--;
        owner.currentHp = owner.bedsLeft * 80;
        console.log('[BED SLEEP HIT] ' + owner.name + ' lost one bed, left: ' + owner.bedsLeft);
      } else {
        owner.currentHp = Math.max(0, owner.currentHp - damage);
        console.log('[BED SLEEP LAST] ' + owner.name + ' -' + damage + ' HP, remaining: ' + owner.currentHp);
      }
      return;
    }
    // 时钟：受到致命伤害时吸收致死一击，触发时间暂停（只触发一次），保留1血
    if (item.type === 'clock' && item.currentHp - damage <= 0 && !item.timeStopTriggered) {
      item.timeStopTriggered = true;
      item.currentHp = 1;
      this.startTimeStop(item);   // 传触发时钟本体（2v2 队伍里可能有两个时钟，必须挂到触发者身上）
      playSound(SOUNDS.clockTimeStop);   // 时钟暂停音效（2026-09 用户提供）
      console.log('[CLOCK TIME-STOP] ' + item.name + ' 时间暂停6秒');
      return;
    }
    item.currentHp = Math.max(0, item.currentHp - damage);
    console.log('[DAMAGE ONCE] ' + item.name + ' -' + damage + ' HP, remaining: ' + item.currentHp);
  }
  
  createParticles(x, y, color, count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({ 
        x, y, 
        vx: (Math.random()-0.5)*6, 
        vy: (Math.random()-0.5)*6, 
        color, 
        life: 25+Math.random()*15, 
        size: 2+Math.random()*3 
      });
    }
  }
  
  checkWinCondition() {
    // 稻草床：床数耗尽即失败（currentHp 已同步为 bedsLeft）
    this.items.forEach(it => { if (it.type === 'bed' && it.bedsLeft <= 0) it.currentHp = 0; });
    if (this.is2v2) {
      // 2v2：一方两个都阵亡才判负
      const p0Dead = this.items[0].currentHp <= 0 && this.items[1].currentHp <= 0;
      const p1Dead = this.items[2].currentHp <= 0 && this.items[3].currentHp <= 0;
      if (p0Dead) {
        this.gameRunning = false;
        this.winner = this.getOwnerItem(1);   // 胜利者是还活着的玩家2队伍代表
        this.draw();
        this.showWinner();
      } else if (p1Dead) {
        this.gameRunning = false;
        this.winner = this.getOwnerItem(0);
        this.draw();
        this.showWinner();
      }
    } else {
      if (this.items[0].currentHp <= 0) {
        playDeathSound(this.items[0].type);   // 败者死亡音效
        this.gameRunning = false;
        this.winner = this.items[1];
        this.draw();
        this.showWinner();
      }
      else if (this.items[1].currentHp <= 0) {
        playDeathSound(this.items[1].type);   // 败者死亡音效
        this.gameRunning = false;
        this.winner = this.items[0];
        this.draw();
        this.showWinner();
      }
    }
  }

  playerAttack(itemIndex) {
    const item = this.items[itemIndex];
    if (!item || item.currentHp <= 0) return;
    const now = Date.now();
    if (item.type === 'trident') {
      if (now - item.lastAttackTime >= item.attackCooldown && !item.isThrowing && !item.electricCircle && !item.isCharging) {
        item.lastAttackTime = now;
        const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
        if (enemy) {
          const dx = enemy.x - item.x;
          const dy = enemy.y - item.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const landDist = Math.min(dist - 40, item.attackRange * 2.0);
          const angle = Math.atan2(dy, dx);
          item.angleToEnemy = angle; // 蓄力前先对准
          item.throwStartX = item.x;
          item.throwStartY = item.y;
          item.targetX = item.x + Math.cos(angle) * landDist;
          item.targetY = item.y + Math.sin(angle) * landDist;
          item.isCharging = true; // 开始蓄力
          item.chargeStartTime = now;
          item.hasReturned = false;
        }
      }
      return;
    }
  }
  
  drawPlacedBed(bed) {
    const d = items['bed'];
    if (!d || !d.pixels) return;
    const ps = 2.8; // 放置的床略小于床本体
    const rows = d.pixels.length, cols = d.pixels[0].length;
    const sx = bed.x - cols*ps/2;
    const sy = bed.y - rows*ps/2;
    this.ctx.save();
    // 轻微的呼吸感：刚放下时弹跳一下
    const age = Date.now() - (bed.bornAt || 0);
    let scale = 1;
    if (age < 300) scale = 1 + 0.25 * Math.sin((age/300) * Math.PI);
    this.ctx.translate(bed.x, bed.y);
    this.ctx.scale(bed.facing * scale, scale);
    this.ctx.translate(-bed.x, -bed.y);
    for (let py = 0; py < rows; py++) {
      for (let px = 0; px < cols; px++) {
        const ci = d.pixels[py][px];
        if (ci !== 0 && d.colors[ci]) {
          this.ctx.fillStyle = d.colors[ci];
          this.ctx.fillRect(sx + px*ps, sy + py*ps, ps, ps);
        }
      }
    }
    this.ctx.restore();
  }

  drawTridentGhost(item) {
    // 小圆圈表示虚影，深蓝色
    this.ctx.save();
    this.ctx.fillStyle = '#1a237e';
    this.ctx.globalAlpha = 0.7;
    this.ctx.beginPath();
    this.ctx.arc(item.ghostX, item.ghostY, 18, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.restore();
  }

  drawSlashRange(item) {
    // 扇形只在攻击瞬间闪烁显示：高亮快闪后随动画衰减消失，平时不画
    if (!item.isAttacking) return;
    const nowDraw = Date.now();
    const t = Math.min(1, item.attackProgress / item.attackDuration);
    const alpha = 0.35 * (1 - t) + 0.07 * Math.abs(Math.sin(nowDraw / 45));
    this.ctx.save();
    this.ctx.globalAlpha = alpha;
    this.ctx.fillStyle = '#F1C40F';
    this.ctx.beginPath();
    this.ctx.moveTo(item.x, item.y);
    const slashAngle = item.slashAngle || (Math.PI * 0.8);
    const slashRange = item.slashRange;
    // 扇形中心 = 攻击触发时锁定的方向，和实际伤害范围完全一致
    let centerAngle = item.slashCenterAngle;
    if (typeof centerAngle !== 'number') {
      const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
      centerAngle = enemy ? Math.atan2(enemy.y - item.y, enemy.x - item.x) : 0;
    }
    this.ctx.arc(item.x, item.y, slashRange, centerAngle - slashAngle/2, centerAngle + slashAngle/2);
    this.ctx.closePath();
    this.ctx.fill();
    // 绘制扇形边框
    this.ctx.strokeStyle = '#E67E22';
    this.ctx.lineWidth = 2;
    this.ctx.globalAlpha = Math.min(1, alpha * 1.8);
    this.ctx.stroke();
    this.ctx.restore();
  }

    draw() {
    // 石头背景图；未加载完成时灰色兜底防黑屏
    if (this.stoneBgImg) {
      this.ctx.drawImage(this.stoneBgImg, 0, 0, this.canvas.width, this.canvas.height);
    } else {
      this.ctx.fillStyle = '#8B8B8B';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
    
    this.drawBrickBorder();
    // 先画三叉戟虚影（虚线描边），在物品下层
    this.items.forEach(item => {
      if (item.type === 'trident' && item.ghostActive) {
        this.drawTridentGhost(item);
      }
    });
    // 铁剑扇形攻击范围（画在物品下层）
    this.items.forEach(item => {
      if (item.key === 'iron_sword') this.drawSlashRange(item);
    });
    // 绘制稻草床已放置的床（画在物品下层；床本体死亡后放置床仍留在场上继续生效帮队友）
    this.items.forEach(item => {
      if (item.type === 'bed' && item.placedBeds) {
        item.placedBeds.forEach(bed => this.drawPlacedBed(bed));
      }
    });
    // 动力铁轨未生成前的竖直虚线预告 + 铁轨+矿车（画在物品下层）
    this.drawRailTelegraph();
    this.drawRails();
    this.drawMinions();
    this.items.forEach(item => {
      this.drawItem(item);
    });
    // 发射器的合成器随从（紧挨着画在物品层；本体死了不画）
    this.items.forEach(item => {
      if (item.type === 'dispenser' && item.currentHp > 0) this.drawCraftingTable(item);
    });
    this.drawSnowballs();
    this.drawDispenserShots();
    this.drawSmallClocks();
    // 绘制电击圈
    this.items.forEach(item => {
      if (item.type === 'trident' && item.electricCircle) {
        const circle = item.electricCircle;
        const nowDraw = Date.now();
        const remain = circle.maxLife - (nowDraw - circle.startTime);
        if (remain <= 0) return;
        const alpha = remain / circle.maxLife;
        this.ctx.save();
        this.ctx.globalAlpha = alpha * 0.4;
        this.ctx.strokeStyle = '#589d8e';
        this.ctx.lineWidth = 3;
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fillStyle = '#589d8e';
        this.ctx.fill();
        this.ctx.restore();
      }
    });
    this.projectiles.forEach(proj => this.drawProjectile(proj));
    this.particles.forEach(p => { 
      if (p.life > 0) {
        this.ctx.fillStyle = p.color; 
        this.ctx.globalAlpha = p.life/40; 
        this.ctx.fillRect(p.x, p.y, p.size, p.size); 
      }
    });
    this.ctx.globalAlpha = 1;
    this.drawHealthBars();
    // 时钟时间暂停：整个画面变灰（真灰度滤镜），结束即恢复
    if (this.timeStop && this.timeStop.active) {
      this.ctx.save();
      this.ctx.filter = 'grayscale(1)';
      this.ctx.drawImage(this.canvas, 0, 0);
      this.ctx.restore();
    }
  }
  
  drawBrickBorder() {
    const w = this.canvas.width, h = this.canvas.height;
    const border = 24;
    
    // 使用渐变的灰色边框
    const gradient = this.ctx.createLinearGradient(0, 0, w, h);
    gradient.addColorStop(0, '#666666');
    gradient.addColorStop(0.5, '#888888');
    gradient.addColorStop(1, '#666666');
    
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, w, border);
    this.ctx.fillRect(0, h-border, w, border);
    this.ctx.fillRect(0, 0, border, h);
    this.ctx.fillRect(w-border, 0, border, h);
    
    // 添加边框细节
    this.ctx.strokeStyle = '#555555';
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(border/2, border/2, w-border*1.5, h-border*1.5);
  }
  
  drawItem(item) {
    // 2v2：一个物品先死就消失（不绘制本体），队伍另一个继续战斗
    if (item.currentHp <= 0) return;
    let pixels = item.pixels;
    let colors = item.colors;
    if (!pixels || pixels.length === 0) return;
    // 弓：不切三档贴图（会卡顿），改为平滑拉动弓弦+上弦箭
    let bowPull = 0;
    if (item.key === 'bow') {
      if (item.bowPhase === 'charging') {
        bowPull = Math.min(1, (Date.now() - item.bowChargeStart) / item.chargeTime);
      } else if (item.bowPhase === 'shooting') {
        bowPull = Math.max(0, 1 - (Date.now() - item.bowShotTime) / 250);
      }
      // 缓动：开始快、拉满前放缓，手感更顺
      bowPull = bowPull < 1 ? (1 - Math.pow(1 - bowPull, 3)) : 1;
    }

    const rows = pixels.length;
    const cols = pixels[0].length;
    // 床贴图是 32x20（其他 16x16），等比缩小避免过大
    let pixelSize = this.pixelScale;
    if (item.type === 'bed') pixelSize = this.pixelScale * 0.7;   // 床 32x20 → 112x70
    if (item.type === 'spawner') pixelSize = this.pixelScale * 0.45; // 刷怪笼 32x32 → ~58px
    if (item.type === 'minion') pixelSize = this.pixelScale * 0.6;   // 僵尸头颅 → 48px
    if (item.type === 'snow_golem') pixelSize = this.pixelScale * 0.6;  // 雪傀儡 16x16 → 48px
    if (item.type === 'dispenser') pixelSize = this.pixelScale * 0.7;  // 发射器 16x16 → 56px
    if (item.type === 'powered_rail') pixelSize = this.pixelScale * 0.5;  // 铁轨段 32x16 → 80x40
    if (item.type === 'clock') pixelSize = this.pixelScale * 0.7;  // 时钟 16x16 圆形 → 56px（用户嫌 80 大）
    const totalWidth = cols * pixelSize;
    const totalHeight = rows * pixelSize;

    const startX = item.x - totalWidth/2;
    const startY = item.y - totalHeight/2;

    this.ctx.save();

    // 睡觉中的物品：平滑缩小躺到床上（比例0.55）；睡醒后平滑恢复
    if (item.sleepScale !== undefined && item.sleepScale !== 1) {
      const target = item.sleeping ? (item.sleepScaleTarget || 0.55) : 1;
      item.sleepScale += (target - item.sleepScale) * 0.18;
      if (Math.abs(target - item.sleepScale) < 0.01) item.sleepScale = target;
      this.ctx.translate(item.x, item.y);
      this.ctx.scale(item.sleepScale, item.sleepScale * 0.8); // y方向压扁更像躺着
      this.ctx.translate(-item.x, -item.y);
      // Zzz 睡眠气泡
      const nowZ = Date.now();
      const float = (nowZ / 400) % 1;
      this.ctx.globalAlpha = 0.8 * (1 - float);
      this.ctx.fillStyle = '#ffffff';
      this.ctx.font = 'bold 14px monospace';
      this.ctx.fillText('Z', item.x + 20, item.y - 25 - float * 18);
      this.ctx.globalAlpha = 1;
    }

    let offsetX = 0;
    let offsetY = 0;
    if (item.key === 'bow' && (item.bowPhase === 'charging' || item.bowPhase === 'shooting')) {
      // 拉弓：弓身沿瞄准反方向平滑后拉（缓动，不跳变）
      const pull = 10 * bowPull;
      offsetX = -Math.cos(item.bowAimAngle) * pull;
      offsetY = -Math.sin(item.bowAimAngle) * pull;
    }

    let rotateAngle = 0;
    if (item.type === 'trident') {
      // 蓄力阶段：面向发射方向，向后拉弓蓄力，带轻微晃动
      if (item.isCharging) {
        rotateAngle = item.throwAngle;
        const chargeProgress = Math.min(1, (Date.now() - item.chargeStartTime) / item.chargeDuration);
        const pull = 14 * chargeProgress * chargeProgress; // 越蓄越往后拉
        const wobble = Math.sin(Date.now() / 60) * 2 * chargeProgress; // 蓄力抖动
        offsetX = -Math.cos(item.throwAngle) * pull + Math.cos(item.throwAngle + Math.PI/2) * wobble;
        offsetY = -Math.sin(item.throwAngle) * pull + Math.sin(item.throwAngle + Math.PI/2) * wobble;
      } else {
        // 投掷/插地/返回：沿发射方向绘制
        rotateAngle = item.angleToEnemy;
      }
    } else if (item.isAttacking && item.key !== 'iron_sword') {
      const progress = item.attackProgress / item.attackDuration;
      rotateAngle = progress < 0.5 ? -Math.PI/4 * Math.sin(progress*Math.PI*2) : Math.PI/4 * Math.sin((progress-0.5)*Math.PI*2);
    }

    this.ctx.translate(item.x + offsetX, item.y + offsetY);
    // 铁剑用绝对角度绘制，始终指向敌人（剑尖贴图默认朝右上，加补偿让剑尖精确指向敌人）
    // 贴图尖端默认方向（质心→尖端）的负值：加该补偿后尖端精确指向目标角
    const SWORD_TIP_OFFSET = Math.PI / 4;      // 铁剑剑尖朝右上 -45°，补偿 +45° = PI/4
    const TRIDENT_TIP_OFFSET = 0.8054;         // 三叉戟叉头朝右上 -46.1°，补偿 +46.1°
    if (item.key === 'iron_sword') {
      let drawAngle = 0;
      const enemy = this.nearestEnemyByOwner(item.owner, item.x, item.y);
      if (enemy) drawAngle = Math.atan2(enemy.y - item.y, enemy.x - item.x);
      if (item.isAttacking && typeof item.slashCenterAngle === 'number') {
        // 挥剑动画：剑从扇形一边缘扫到另一边缘，与扇形闪烁/伤害同步——
        // t=0 剑在扇形边缘（扇形闪出），t=0.5 扫过扇形中心（伤害结算），t=1 到对侧边缘（扇形淡出）
        const progress = Math.min(1, item.attackProgress / item.attackDuration);
        const slashAngle = item.slashAngle || (Math.PI * 0.8);
        drawAngle = item.slashCenterAngle - slashAngle/2 + progress * slashAngle;
      }
      this.ctx.rotate(drawAngle + SWORD_TIP_OFFSET);
    } else if (item.type === 'trident') {
      // 三叉戟：蓄力时面向投掷方向，投掷后指向敌人（叉头补偿同样适用）
      if (item.isCharging) {
        this.ctx.rotate(item.throwAngle + TRIDENT_TIP_OFFSET);
      } else {
        this.ctx.rotate(item.angleToEnemy + TRIDENT_TIP_OFFSET);
      }
    } else if (item.key === 'bow') {
      // 弓：贴图默认朝左上(-135°)，+135° 旋转后朝向敌人，绝对角度不镜像
      this.ctx.rotate(item.bowAimAngle + Math.PI * 3 / 4);
    } else if (item.type === 'powered_rail') {
      // 动力铁轨本体：轨道朝向=移动方向（碰墙反弹后变），本体跟着转（不再死板竖直）
      this.ctx.rotate(Math.atan2(item.vy, item.vx) - Math.PI / 2);
    } else {
      this.ctx.scale(item.facing, 1);
      this.ctx.rotate(rotateAngle);
    }
    this.ctx.translate(-(item.x + offsetX), -(item.y + offsetY));

    for (let py = 0; py < rows; py++) {
      for (let px = 0; px < cols; px++) {
        const colorIdx = pixels[py][px];
        if (colorIdx !== 0 && colors[colorIdx]) {
          this.ctx.fillStyle = colors[colorIdx];
          this.ctx.fillRect(startX + px * pixelSize, startY + py * pixelSize, pixelSize, pixelSize);
        }
      }
    }
    // 弓：绘制弓弦和上弦箭（连续平滑拉动，弦随拉弓后撤，箭清晰可见）
    if (item.key === 'bow' && (item.bowPhase === 'charging' || item.bowPhase === 'shooting')) {
      const ps = pixelSize;
      // 弦两端（贴图坐标）与箭口，后拉方向 = 贴图内朝右下（远离敌人）
      const ax1 = startX + 13 * ps, ay1 = startY + 3 * ps;
      const ax2 = startX + 3 * ps, ay2 = startY + 13 * ps;
      const pullPx = 6 * bowPull;
      const nockX = startX + (8.5 + 0.707 * pullPx) * ps;
      const nockY = startY + (8.5 + 0.707 * pullPx) * ps;
      // 弓弦（两段：弦头→箭口→弦尾）
      this.ctx.strokeStyle = '#4a3a2a';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.moveTo(ax1, ay1);
      this.ctx.lineTo(nockX, nockY);
      this.ctx.lineTo(ax2, ay2);
      this.ctx.stroke();
      // 上弦箭：手绘白色箭头（箭杆 + 白三角头 + 灰箭羽），仅蓄力阶段显示
      if (item.bowPhase === 'charging') {
        const aimX = -0.707, aimY = -0.707;
        const arrowLen = 12 * ps;
        const tipX = nockX + aimX * arrowLen;
        const tipY = nockY + aimY * arrowLen;
        // 箭杆
        this.ctx.strokeStyle = '#e0e0e0';
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';
        this.ctx.beginPath();
        this.ctx.moveTo(nockX, nockY);
        this.ctx.lineTo(tipX, tipY);
        this.ctx.stroke();
        // 箭头
        this.ctx.fillStyle = '#ffffff';
        const hx = tipX + aimX * 3 * ps, hy = tipY + aimY * 3 * ps;
        this.ctx.beginPath();
        this.ctx.moveTo(hx, hy);
        this.ctx.lineTo(tipX - aimY * 2 * ps, tipY + aimX * 2 * ps);
        this.ctx.lineTo(tipX + aimY * 2 * ps, tipY - aimX * 2 * ps);
        this.ctx.closePath();
        this.ctx.fill();
        // 箭羽
        this.ctx.fillStyle = '#c0c0c0';
        this.ctx.fillRect(nockX - 2 * ps, nockY - 2 * ps, 2 * ps, 1 * ps);
        this.ctx.fillRect(nockX - 2 * ps, nockY + 1 * ps, 2 * ps, 1 * ps);
      }
    }
    this.ctx.restore();
  }
  
  drawProjectile(proj) {
    if (proj.pixels && proj.colors) {
      // 飞行方向（用于拖尾）
      const spd = Math.hypot(proj.vx, proj.vy) || 1;
      const ux = proj.vx / spd, uy = proj.vy / spd;
      // 拖尾：渐隐亮线，让高速箭清晰可见
      const trailLen = Math.min(55, spd * 3.2);
      const grad = this.ctx.createLinearGradient(proj.x - ux * trailLen, proj.y - uy * trailLen, proj.x, proj.y);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(1, 'rgba(255,255,220,0.85)');
      this.ctx.strokeStyle = grad;
      this.ctx.lineWidth = 4;
      this.ctx.lineCap = 'round';
      this.ctx.beginPath();
      this.ctx.moveTo(proj.x - ux * trailLen, proj.y - uy * trailLen);
      this.ctx.lineTo(proj.x, proj.y);
      this.ctx.stroke();

      // 像素箭（箭.png 提取贴图）：旋转到飞行方向，贴图基准朝右上(-45°)
      const angle = Math.atan2(proj.vy, proj.vx);
      const ps = proj.size || 7;
      const rows = proj.pixels.length, cols = proj.pixels[0].length;
      this.ctx.save();
      this.ctx.translate(proj.x, proj.y);
      this.ctx.rotate(angle - (proj.baseAngle || 0));
      // 白色辉光：让箭醒目
      this.ctx.shadowColor = '#FFF8D0';
      this.ctx.shadowBlur = 8;
      // 质心对齐：贴图几何中心偏向左下（箭身占对角），按不透明质心手工校正
      const cx = (cols - 1) / 2 - 0.5, cy = (rows - 1) / 2 + 0.3;
      for (let py = 0; py < rows; py++) {
        for (let px = 0; px < cols; px++) {
          const ci = proj.pixels[py][px];
          if (ci !== 0 && proj.colors[ci]) {
            this.ctx.fillStyle = proj.colors[ci];
            this.ctx.fillRect((px - cx) * ps - ps / 2, (py - cy) * ps - ps / 2, ps, ps);
          }
        }
      }
      this.ctx.restore();
      return;
    }
    // 兼容旧矢量投射物
    this.ctx.fillStyle = proj.color;
    const angle = Math.atan2(proj.vy, proj.vx);
    this.ctx.save();
    this.ctx.translate(proj.x, proj.y);
    this.ctx.rotate(angle);
    this.ctx.fillRect(-12, -1, 24, 2);
    this.ctx.beginPath();
    this.ctx.moveTo(12, 0);
    this.ctx.lineTo(18, -5);
    this.ctx.lineTo(18, 5);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.fillStyle = '#fff';
    this.ctx.fillRect(-14, -5, 6, 10);
    this.ctx.restore();
  }
  
  drawHealthBars() {
    const barWidth = 180, barHeight = 20;
    this.items.forEach((item, index) => {
      if (item.currentHp <= 0) return;   // 2v2：先死的物品血条消失
      // 玩家1（owner 0）血条在左边，玩家2（owner 1）在右边；同队两个上下排列（2v2）
      const x = item.owner === 0 ? 40 : this.canvas.width - 40 - barWidth;
      const row = this.items.slice(0, index).filter(i => i.owner === item.owner).length;
      const y = (this.is2v2 ? 35 : 45) + row * 30;
      this.ctx.fillStyle = '#2a2a4a'; 
      this.ctx.fillRect(x, y, barWidth, barHeight);
if (item.type === 'bed') {
        // 稻草床特殊血条：15层，每层80生命；受击/放床都掉一层
        const layers = item.maxHp / 80;
        const gap = 3;
        const layerW = (barWidth - gap * (layers - 1)) / layers;
        for (let li = 0; li < layers; li++) {
          if (li < item.bedsLeft) {
            this.ctx.fillStyle = '#F1C40F';
            this.ctx.fillRect(x + li * (layerW + gap), y + 2, layerW, barHeight - 4);
          }
        }
      } else {
        const hpPercent = item.currentHp / item.maxHp;
        const hpColor = hpPercent > 0.5 ? '#2ECC71' : hpPercent > 0.25 ? '#F39C12' : '#E74C3C';
        this.ctx.fillStyle = hpColor;
        this.ctx.fillRect(x, y, barWidth*hpPercent, barHeight);
      }
      this.ctx.strokeStyle = '#fff'; 
      this.ctx.lineWidth = 2; 
      this.ctx.strokeRect(x, y, barWidth, barHeight);
      this.ctx.fillStyle = '#fff'; 
      this.ctx.font = 'bold 12px monospace';
      this.ctx.textAlign = 'center';
      // bed shows bed count
      const hpText = item.type === 'bed'
        ? (item.bedsLeft > 1
            ? item.name + ' x' + item.bedsLeft
            : item.name + ' ' + Math.ceil(item.currentHp) + '/' + (items['bed'].bedLastHp || 200))   // 只剩最后一张床：显示真实血量
        : item.name + ' ' + Math.ceil(item.currentHp) + '/' + item.maxHp;
      this.ctx.fillText(hpText, x+barWidth/2, y+14);
    });
    // 弓拉弓进度条（跟随弓移动，拉满变黄）
    this.items.forEach(item => {
      if (item.key === 'bow' && item.bowPhase === 'charging') {
        const barW = 60, barH = 8;
        const bx = item.x - barW/2;
        const by = item.y + item.radius + 12;
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(bx, by, barW, barH);
        const pct = Math.min(1, (Date.now() - item.bowChargeStart) / item.chargeTime);
        this.ctx.fillStyle = pct >= 1 ? '#F1C40F' : '#3498DB';
        this.ctx.fillRect(bx, by, barW * pct, barH);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bx, by, barW, barH);
      }
    });
    // 铁剑蓄力进度条（跟随铁剑移动）
    this.items.forEach(item => {
      if (item.type === 'melee' && item.hasCharge) {
        const barW = 60, barH = 8;
        const bx = item.x - barW/2;
        const by = item.y + item.radius + 12;
        this.ctx.fillStyle = '#333';
        this.ctx.fillRect(bx, by, barW, barH);
        const chargePct = item.chargeProgress || 0;
        const chargeColor = chargePct >= 1 ? '#F1C40F' : '#3498DB';
        this.ctx.fillStyle = chargeColor;
        this.ctx.fillRect(bx, by, barW * chargePct, barH);
        this.ctx.strokeStyle = '#fff';
        this.ctx.lineWidth = 1;
        this.ctx.strokeRect(bx, by, barW, barH);
      }
    });
  }
  
  showWinner() {
    setTimeout(() => {
      const overlay = document.createElement('div');
      overlay.id = 'winnerOverlay';
      overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.85);display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:100;';
      const winTitle = this.is2v2
        ? ('玩家' + (this.winner.owner + 1) + ' 队伍 胜利！')
        : (this.winner.name + ' 胜利！');
      overlay.innerHTML = '<h1 style="color:#F1C40F;font-size:36px;margin-bottom:30px;text-shadow:4px 4px 0 #E67E22;font-family:\"Press Start 2P\",monospace;">' + winTitle + '</h1><button onclick="location.reload()" style="background:#7d7d7d;border:4px solid #000;border-top-color:#a8a8a8;border-left-color:#a8a8a8;color:#fff;font-family:\"Press Start 2P\",monospace;font-size:16px;padding:15px 50px;cursor:pointer;text-shadow:2px 2px 0 #000;box-shadow:inset -4px -4px 0 #555, 4px 4px 0 #000;">再来一局</button>';
      document.body.appendChild(overlay);
    }, 600);
  }
}

window.game = null;
