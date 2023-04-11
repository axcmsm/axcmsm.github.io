module.exports = [
    // 流程图插件
    ['flowchart'],
    // 动态标题
    ["dynamic-title",
      {
        showIcon: "vuepress/smile.ico",
        showText: "(/≧▽≦/)欢迎帅哥美女！",
        hideIcon: "vuepress/cry.ico",
        hideText: "(●—●)呜呜，不要走嘛！！",
        recoverTime: 2000
      }],
      // 更新刷新插件
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
    }],
    // 代码复制弹窗插件
    ["vuepress-plugin-nuggets-style-copy", {
      copyText: "复制代码",
      tip: {
          content: "复制成功!"
      }
    }],
    // 音乐插件
    // ['meting', {
    //     //metingApi: "https://meting.sigure.xyz/api/music",
    //     metingApi:"https://music.163.com/#/",
    //     meting: {
    //       // 网易
    //       server: "netease",
    //       // 读取歌单
    //       type: "playlist",
    //       mid: "3231649721",
    //     },          
    //     // 不配置该项的话不会出现全局播放器
    //     // aplayer: {
    //     //     lrcType: 3,
    //     // },
    //     // mobile :{
    //     //   // 手机端去掉cover图
    //     //   cover: false,
    //     // }
    //   }],
      //名言
      ["vuepress-plugin-boxx"],
      //不支持中文搜索
    //   ['flexsearch'],
    ['fulltext-search'],
      //集成搜索
      [
        "thirdparty-search",
        {
          thirdparty: [
            // 可选，默认 []
            {
                title: "在百度中搜索", // 在搜索结果显示的文字
                frontUrl: "https://www.baidu.com/s?wd=", // 搜索链接的前面部分
                behindUrl: "" // 搜索链接的后面部分，可选，默认 ''
            },
            {
              title: "在谷歌中搜索",
              frontUrl: "https://www.google.com.hk/search?q="
            },
            {
              title: "在360中搜索",
              frontUrl: "https://www.so.com/s?q="
            }
          ]
        }
      ],
    /* 弹窗公告插件
    [
      "@vuepress-yard/vuepress-plugin-window"
    ], */
    //音乐插件   
    // ["@vuepress-reco/vuepress-plugin-bgm-player",
    //       {
    //         audios: [
    //           // 网络文件示例
    //           {
    //             name: '年轮',
    //             artist: '张碧晨',
    //             url: 'https://cdn.jsdelivr.net/gh/fudalijunyi/cdn/MP3/年轮.mp3',
    //             cover: 'https://cdn.jsdelivr.net/gh/fudalijunyi/picture-bed/img/20200715154924.png'
    //           }
    //         ] ,
    //         // 自动缩小
    //         autoShrink:true ,
    //         // 悬浮窗模式，吸边
    //         shrinkMode: 'float' ,
    //         // 悬浮窗位置
    //         floatStyle:{ bottom: '10px', 'z-index': '999999' },

    //       }],
]