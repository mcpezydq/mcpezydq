// 基础配置
window.EnableMusicPlayer = true;                     // 是否启用音乐播放器
window.MusicPlayerBallSize = 50;                     // 悬浮球尺寸（像素）
window.MusicPlayerAutoCollapse = 2600;               // 自动收起延迟（毫秒）
window.MusicPlayerTitle = "NeZha Music Player";      // 播放器标题/默认艺术家名称
window.MusicPlayerAPIUrl = "https://tv2.307652.xyz/api/music/list";                // 音乐列表API地址
window.MusicPlayerDefaultVolume = 0.2;               // 默认音量（0-1）

// GitHub 链接配置
window.MusicPlayerGitHubUrl = "false";          // GitHub仓库链接（留空或false则不显示）
window.MusicPlayerGitHubIconSize = 28;               // GitHub图标容器大小（像素）

// 封面配置
window.MusicPlayerCoverList = ["封面URL1", "..."];   // 封面图片列表（随机分配）

// 视觉效果配置
window.MusicPlayerRotationSpeed = 5;                 // 唱片旋转速度（秒/圈，数值越大越慢）
window.MusicPlayerStrokeWidth = 4.5;                 // 悬浮球描边宽度（像素，0表示无描边）
window.MusicPlayerStrokeColor = "";                  // 悬浮球描边颜色（留空自动适配主题）
window.MusicPlayerOpacity = 0.5;                     // 面板不透明度（0-1）

// 音波效果配置
window.MusicPlayerWaveStrokeWidth = "2.8px";         // PC端音波圆环宽度
window.MusicPlayerWaveMobileStrokeWidth = "1.8px";   // 移动端音波圆环宽度
window.MusicPlayerWaveSpeed = 2.0;                   // 音波扩散速度（秒，完整扩散一轮所需时间）
window.MusicPlayerWaveScale = 1.8;                   // 音波扩散倍数（最大扩散倍数）

// UI 图标配置
window.MusicPlayerBallIconSize = 18;                 // 悬浮球播放/暂停图标尺寸（像素）
window.MusicPlayerExpandedAlbumSize = 70;            // 展开面板唱片尺寸（像素）