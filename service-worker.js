/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6f9ab1a58f97aa9a01726b9cde8caa98"
  },
  {
    "url": "about/index.html",
    "revision": "351414fa5c2a28d9a2dc83b1d06f050e"
  },
  {
    "url": "assets/css/0.styles.c55ec633.css",
    "revision": "bc16d295c5c36d76e54e45530483c22e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.d2920358.js",
    "revision": "0d0ff936bb16d973375c640f9bb28268"
  },
  {
    "url": "assets/js/10.a2ab4732.js",
    "revision": "27ab97eaebf296b84fdd85e4bb4db9cc"
  },
  {
    "url": "assets/js/11.cb2a446e.js",
    "revision": "dd35cec6ffb1d439918422f3677f1e0b"
  },
  {
    "url": "assets/js/12.44af248e.js",
    "revision": "adc189d547b5cbf63f19930f696d8ec5"
  },
  {
    "url": "assets/js/13.fe5d2510.js",
    "revision": "a40230322f133e1dde215fe11df4690f"
  },
  {
    "url": "assets/js/14.a86b66a0.js",
    "revision": "c8e61d860296c4307d3e005a26bf3f59"
  },
  {
    "url": "assets/js/15.db93f4b6.js",
    "revision": "67b7b975689a2a540ad49743e8bb47db"
  },
  {
    "url": "assets/js/16.315be0a7.js",
    "revision": "c00491d45420db27309b42cbc57d7b25"
  },
  {
    "url": "assets/js/17.bb33c2d3.js",
    "revision": "367e517b89a870ab96fd56af0ad9c609"
  },
  {
    "url": "assets/js/18.aa3bc2d5.js",
    "revision": "544171c015a0687fe3924b966a9febc5"
  },
  {
    "url": "assets/js/19.eb6674e0.js",
    "revision": "d82e13ceabfe82003db8b27a7bf85b31"
  },
  {
    "url": "assets/js/2.245be42e.js",
    "revision": "66363f146a80606fcee7f3d171b026d8"
  },
  {
    "url": "assets/js/20.26398a86.js",
    "revision": "3f97c53c071cd0883f6953c3051485ac"
  },
  {
    "url": "assets/js/21.8573d310.js",
    "revision": "c3c998ce6e37654e954692ccb9b15aea"
  },
  {
    "url": "assets/js/22.f39eb1c6.js",
    "revision": "7279118395f89b6b563c4df885289d50"
  },
  {
    "url": "assets/js/23.70b63e87.js",
    "revision": "b6ccd1b9f6939b1f2869c2840bb12dba"
  },
  {
    "url": "assets/js/24.780f4265.js",
    "revision": "048ff5df877cf3931d2ae8b95c57cc39"
  },
  {
    "url": "assets/js/25.087b890e.js",
    "revision": "72e1f447afcd46e7186c9b61902d4700"
  },
  {
    "url": "assets/js/26.a3432377.js",
    "revision": "fb17d0d564b8d8eb65b95d9374bf3798"
  },
  {
    "url": "assets/js/27.c82078d0.js",
    "revision": "0613deb0d29afba4cba620fed299ad46"
  },
  {
    "url": "assets/js/28.3f62dff1.js",
    "revision": "06f22bf49c070fbf3707db948663bb03"
  },
  {
    "url": "assets/js/29.c935e9bc.js",
    "revision": "5142640878fc9a9215dfaf8059ec3169"
  },
  {
    "url": "assets/js/30.4acfb7de.js",
    "revision": "f9650802bda3394edee2e30a3c44bcb3"
  },
  {
    "url": "assets/js/31.3bd52897.js",
    "revision": "a259f2f3e0f0844673b3e21da63ea113"
  },
  {
    "url": "assets/js/32.cd6a4df7.js",
    "revision": "c1d4888d5cebad0429a6028e5d007c5d"
  },
  {
    "url": "assets/js/33.4f206021.js",
    "revision": "b777ada251c5298856bb000d3fe4add8"
  },
  {
    "url": "assets/js/34.ad299da7.js",
    "revision": "111ecf180277b8ac3f5a0670ef35131f"
  },
  {
    "url": "assets/js/35.a74cd3c6.js",
    "revision": "05341975aceb524dd597bf3d3e68101f"
  },
  {
    "url": "assets/js/36.a6d81e30.js",
    "revision": "5aa60619921f1b3c13c504b0ef4bafe3"
  },
  {
    "url": "assets/js/37.e3323ce2.js",
    "revision": "15da58df3daa6685689ab5d6b0ffde50"
  },
  {
    "url": "assets/js/38.18d7dd67.js",
    "revision": "7ac8b6b30cfa62c28c3843d3adaf3615"
  },
  {
    "url": "assets/js/39.833f42ab.js",
    "revision": "9da7171518ba824a9840c2f3dc7ce05c"
  },
  {
    "url": "assets/js/4.ec8df83f.js",
    "revision": "215234a80b58a35889cf0bdff339b91c"
  },
  {
    "url": "assets/js/40.ed6400f3.js",
    "revision": "7ec82fa15cdbe8a5dd7b038d9134be83"
  },
  {
    "url": "assets/js/41.81e6fc53.js",
    "revision": "a616419a4f2722aa5cf27145008c045d"
  },
  {
    "url": "assets/js/42.d0e39d51.js",
    "revision": "05ab5ca102cc6a96ee632be5d873423f"
  },
  {
    "url": "assets/js/43.047ac597.js",
    "revision": "b1def9027a8138cc86a9305d6578709d"
  },
  {
    "url": "assets/js/44.6e407d3e.js",
    "revision": "7fa1b5411fc5e6ab23d956d5a7c7b692"
  },
  {
    "url": "assets/js/45.234ad067.js",
    "revision": "25d9046bebcdbb82afdd381c4f716b70"
  },
  {
    "url": "assets/js/46.3eaaa14c.js",
    "revision": "4c5f7739d58ef28345a7eba454090e43"
  },
  {
    "url": "assets/js/47.cd7ab522.js",
    "revision": "b4a8db47bdf894a878c684d552ac65d4"
  },
  {
    "url": "assets/js/48.d146214c.js",
    "revision": "99f2053c0e429b336937f7bf8b4edee9"
  },
  {
    "url": "assets/js/49.5412d8fd.js",
    "revision": "7e9968d1c353f1e8a17cc9542c555e12"
  },
  {
    "url": "assets/js/5.83420c85.js",
    "revision": "ccc8f6a8c2b6e4b3b4da95be75760573"
  },
  {
    "url": "assets/js/50.361271e2.js",
    "revision": "ba54ffcf9a1fc08e5c547418b005bc90"
  },
  {
    "url": "assets/js/51.2488c147.js",
    "revision": "a95f91359d3b4c278bbd19cda8ebcd51"
  },
  {
    "url": "assets/js/52.a5eb5e9f.js",
    "revision": "13bfb44137f189891d0c67ea13ca4832"
  },
  {
    "url": "assets/js/53.c3859002.js",
    "revision": "a0f64d19e60d1b3673250d25e5afa7b8"
  },
  {
    "url": "assets/js/54.c572a44d.js",
    "revision": "b5a29b83802df07e6fe8f6027e7a64f9"
  },
  {
    "url": "assets/js/55.30248800.js",
    "revision": "45700a3fd4b77e7f0543f79922c84deb"
  },
  {
    "url": "assets/js/56.248288b0.js",
    "revision": "f7227e243cbf056d33d7a0d43592b51d"
  },
  {
    "url": "assets/js/57.3a11d1c7.js",
    "revision": "d1e9fae277ccc976f37de05242bc254d"
  },
  {
    "url": "assets/js/58.95fa43c5.js",
    "revision": "5c2b77cec2555f4ee00ee66e1be4dadf"
  },
  {
    "url": "assets/js/59.d002a857.js",
    "revision": "a5c1ea9d16df8c2374a9431b3e3bbbd0"
  },
  {
    "url": "assets/js/6.5faf5a50.js",
    "revision": "b0ed41ed7e44e4509f759da5ffe6881a"
  },
  {
    "url": "assets/js/60.26b4ef39.js",
    "revision": "2eee5338dbd2336a882f3214d8529700"
  },
  {
    "url": "assets/js/61.7c152e5e.js",
    "revision": "a05a531b0e48f9d4fe34c8402a0cb08e"
  },
  {
    "url": "assets/js/62.baeb52bb.js",
    "revision": "690f30749df88e0b5c926f933fdddb46"
  },
  {
    "url": "assets/js/63.8978958b.js",
    "revision": "bce2ab487cfa976f915ae27accb8cca5"
  },
  {
    "url": "assets/js/64.b14585b3.js",
    "revision": "37c9dfe9fb6e9284f93364c04ee61a86"
  },
  {
    "url": "assets/js/7.13c62f03.js",
    "revision": "7fc46d206a424d7a1bd42c1737f09118"
  },
  {
    "url": "assets/js/8.b2b362e0.js",
    "revision": "df9fda9a8353897c526b81ec0a5c7c6f"
  },
  {
    "url": "assets/js/9.0fd0389d.js",
    "revision": "daae0b09520fb4f79d26e115f30a35f9"
  },
  {
    "url": "assets/js/app.7036e47e.js",
    "revision": "4987083fb079fb7454c5a48af091b07e"
  },
  {
    "url": "categories/index.html",
    "revision": "058c446d6c2a80b36581dfeb82e9c151"
  },
  {
    "url": "categories/java/index.html",
    "revision": "21185a93e9ff27abeb44c10e158da378"
  },
  {
    "url": "categories/其他/index.html",
    "revision": "def64c2162058b05706e32eec04b9716"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "05105b2b6822fbf0054ac98d00a6e521"
  },
  {
    "url": "categories/安装/index.html",
    "revision": "4e86ca0970ff94b36ff2b25421effa93"
  },
  {
    "url": "categories/收藏/index.html",
    "revision": "4303169f9c47ff6fb06dad1435c1dd25"
  },
  {
    "url": "categories/笔记/index.html",
    "revision": "2ffaf582fb9458ccaf445757e9c84d8b"
  },
  {
    "url": "categories/笔记/page/2/index.html",
    "revision": "55b23c0b8d464feaef60f77ac0c2d2e3"
  },
  {
    "url": "categories/踩坑/index.html",
    "revision": "9ae0414d3ad795a35e3c3a3f2e64d9e9"
  },
  {
    "url": "img/author.png",
    "revision": "5d92e30a634759aa2be010f86e466dbe"
  },
  {
    "url": "img/bj1.jpg",
    "revision": "32db8b760c8a6326fe0e54f3f0088e0c"
  },
  {
    "url": "img/bj3.jpg",
    "revision": "a55cad35227a776da18fc45102e63fb1"
  },
  {
    "url": "img/bj6.jpg",
    "revision": "6cc318755dc7f129a3b8f78dc81e0872"
  },
  {
    "url": "img/bj7.jpg",
    "revision": "19e6e8a2f4372816b2edaae3e2eac27e"
  },
  {
    "url": "img/bj8.jpg",
    "revision": "81c7de427f1bdc77c17fd10f8deb5a89"
  },
  {
    "url": "img/bjt1.jpg",
    "revision": "0a3689319347d224821240d2fac56c78"
  },
  {
    "url": "img/bjt2.jpg",
    "revision": "dff461ddae0fb3285a9ee8e4d048388b"
  },
  {
    "url": "img/bjt3.jpg",
    "revision": "5093361914e09323d23630f4b2b8a6b1"
  },
  {
    "url": "img/bjt5.jpg",
    "revision": "f63cf34fc92cae42be4c16717f9eec93"
  },
  {
    "url": "img/bjt6.jpg",
    "revision": "48a0bba2dcecbb5bedb13e3305ff7c7f"
  },
  {
    "url": "img/zs.jpg",
    "revision": "157adc525823095cc21a46d3b34ac7d4"
  },
  {
    "url": "img/地球.jpg",
    "revision": "fe69ee08d332232bdab15f5872645f41"
  },
  {
    "url": "img/地球2.jpg",
    "revision": "2b18ad55163b928b4f1a80c0775f7e46"
  },
  {
    "url": "img/地球之上.jpg",
    "revision": "afa93c72868be572493b19d5ef4f8396"
  },
  {
    "url": "img/小镇.jpg",
    "revision": "283700b0a17ff3f9000c1b64dc6d8549"
  },
  {
    "url": "img/星空.jpg",
    "revision": "be6fba9638201c7ad728d5f897a6392e"
  },
  {
    "url": "img/棒球.jpg",
    "revision": "2f3672d38f49b0ac21971d5d76db99c8"
  },
  {
    "url": "index.html",
    "revision": "8911a3a6397ac7b06c4d3f18863b58b1"
  },
  {
    "url": "js/MouseClickEffect.js",
    "revision": "c8209619f9a8260aee66ce7691c9f2ad"
  },
  {
    "url": "js/plugins.js",
    "revision": "12a0a01d64ad807541e6be91edfb19f3"
  },
  {
    "url": "REMADME.html",
    "revision": "a1377537c1cd7d244c855de7d016dde6"
  },
  {
    "url": "tag/azkaban/index.html",
    "revision": "be492af5ea027019e48f65e0ad9c557e"
  },
  {
    "url": "tag/Echarts/index.html",
    "revision": "cedd82870b906b79fdb7546bfde34994"
  },
  {
    "url": "tag/es/index.html",
    "revision": "cf40dddb50d6965b35b82f667dbb66fd"
  },
  {
    "url": "tag/Es6/index.html",
    "revision": "f4c74621b1850b22a08ddaa31938c656"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "e87c2aa77cb5ad9c688812be560c016c"
  },
  {
    "url": "tag/hbase/index.html",
    "revision": "ec3ff6a070bb5a7fc6bdcda4422fc44c"
  },
  {
    "url": "tag/hive/index.html",
    "revision": "cde6cf380ba32ca162510f981bc0d007"
  },
  {
    "url": "tag/Hue/index.html",
    "revision": "e425e594ffb5f7f3a25a77e85e811eb6"
  },
  {
    "url": "tag/index.html",
    "revision": "62c1ce7c3815225036bd61fce7921d0a"
  },
  {
    "url": "tag/kafka/index.html",
    "revision": "7160cbaf18a90771feaaf5b60c16d748"
  },
  {
    "url": "tag/Kerberos/index.html",
    "revision": "6d62d35fd5a702852f7053f1e1efce4c"
  },
  {
    "url": "tag/Kylin/index.html",
    "revision": "c3e2f38255210ef7735451f3c782b424"
  },
  {
    "url": "tag/log4/index.html",
    "revision": "44f2badb5ee8650450f831a902af4240"
  },
  {
    "url": "tag/MyBatis-Plus/index.html",
    "revision": "f970e2091bde87c7270f7122692b3ecf"
  },
  {
    "url": "tag/MyBatis/index.html",
    "revision": "e76c2ae8b5854222d8660ed858e8fe63"
  },
  {
    "url": "tag/Oozie/index.html",
    "revision": "5b5ae3a9697d5a003455915a09bbecf6"
  },
  {
    "url": "tag/Presto/index.html",
    "revision": "ec4ead5d268251c3ba9a83214688378a"
  },
  {
    "url": "tag/Redis/index.html",
    "revision": "dcbdf4f0c57435d223cda79d22f1c14f"
  },
  {
    "url": "tag/scala/index.html",
    "revision": "efabaca1b372666d1378cad88fcc7916"
  },
  {
    "url": "tag/spark/index.html",
    "revision": "f268a9b2c22b2df2064a1498175d8811"
  },
  {
    "url": "tag/spring/index.html",
    "revision": "d5480abbc13b4504ae2c7165f3a075e8"
  },
  {
    "url": "tag/springboot/index.html",
    "revision": "859e707be4a041ccc805ed9d3fe627b8"
  },
  {
    "url": "tag/sqoop/index.html",
    "revision": "b120bbde029e29b571298beec3060ac4"
  },
  {
    "url": "tag/superset/index.html",
    "revision": "4ee81ab181ffecaffd48018c1bca9a02"
  },
  {
    "url": "tag/vue/index.html",
    "revision": "2a088b3d0ea94aed5a0075333b0c8722"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "24b8e3b3727b318b9969c100ef2d445f"
  },
  {
    "url": "tag/vuex/index.html",
    "revision": "fe5e2f99fadeac6d72d6c9b0f2b252fd"
  },
  {
    "url": "tag/websorcket/index.html",
    "revision": "a8ba1e2c4dec98c335e57261e798a261"
  },
  {
    "url": "tag/zabbix/index.html",
    "revision": "3f1ab39a2a153a2ad31602347f5977b4"
  },
  {
    "url": "tag/安装/index.html",
    "revision": "e0b009eb29442f01344f9518f7ec7a6b"
  },
  {
    "url": "tag/工具/index.html",
    "revision": "48ff166003a5405840b5baad8871194d"
  },
  {
    "url": "tag/离线数仓/index.html",
    "revision": "0abad4b6338115de0b712fae379b19c5"
  },
  {
    "url": "tag/置顶/index.html",
    "revision": "627571e995ef37ebae1ccdf52786af94"
  },
  {
    "url": "timeline/index.html",
    "revision": "ebd7732124a1ac8186f3b597694d4c17"
  },
  {
    "url": "view/docs/java/0816.html",
    "revision": "d9294e1e4ae52866c9c9ecbccbc3576b"
  },
  {
    "url": "view/docs/java/3.mybaits+mp.html",
    "revision": "4dbf775d2f4129ba0978f7881ed9328b"
  },
  {
    "url": "view/docs/java/index.html",
    "revision": "6d1facd493ecc0ccefdbcdc3f577b62c"
  },
  {
    "url": "view/docs/java/mybatisplus.html",
    "revision": "2e1b75e82c8aad0fa31271a6189b016b"
  },
  {
    "url": "view/docs/java/spring.html",
    "revision": "b69058841856a21cf28774f9fee83059"
  },
  {
    "url": "view/docs/java/springboot.html",
    "revision": "f212d6946acc88b35bf182094c4c4a7b"
  },
  {
    "url": "view/docs/other/2021/0812.html",
    "revision": "a4095775920f9e94a02f93d60a889f30"
  },
  {
    "url": "view/docs/other/2021/0813.html",
    "revision": "94f0578216151f6c93ed0cbf8782e52a"
  },
  {
    "url": "view/docs/other/2021/0815.html",
    "revision": "71031147f3bcdaf65435d478ccd73280"
  },
  {
    "url": "view/docs/other/2021/8017.html",
    "revision": "c55b41661c1403e10c10305d391b84ec"
  },
  {
    "url": "view/docs/other/2021/log4使用.html",
    "revision": "7479867ea0ecc19ffc9b5e05c046e962"
  },
  {
    "url": "view/docs/other/技巧/top.html",
    "revision": "2ac55fbd770172922818442591dce01d"
  },
  {
    "url": "view/docs/other/技巧/收藏网站.html",
    "revision": "f54fd1b6c00be08d704fb2b3037e9d26"
  },
  {
    "url": "view/docs/web/2021/0822.html",
    "revision": "1e0cd7a881bda19eda1eb9348ee06dce"
  },
  {
    "url": "view/docs/web/2021/082221.html",
    "revision": "a18697ab1b010d5de25716b0fcd08887"
  },
  {
    "url": "view/docs/web/2021/0825.html",
    "revision": "2af5113ed17176be65572514c895b664"
  },
  {
    "url": "view/docs/web/2021/Echarts.html",
    "revision": "e93aea8f8ef4d2c8b187f3385482bf86"
  },
  {
    "url": "view/docs/web/2021/vuex.html",
    "revision": "0ad461894a29c9860d5f6afc6e73b11e"
  },
  {
    "url": "view/docs/web/2021/websorcket.html",
    "revision": "9a9855ee5cbece83a27c0649ad02383c"
  },
  {
    "url": "view/docs/web/index.html",
    "revision": "d4edde1bea2774e04404fac1a753cfab"
  },
  {
    "url": "view/docs/安装/hadoop分布式运行环境.html",
    "revision": "0ade7f306c860ef405691864503eb831"
  },
  {
    "url": "view/docs/安装/spark环境搭建.html",
    "revision": "76e451806d5c9d86c1b8ea7be6d7a9a0"
  },
  {
    "url": "view/docs/安装/win大数据搭建.html",
    "revision": "d136e560546f28e0fd0675495cd6f12f"
  },
  {
    "url": "view/docs/安装/搭建hadoop HA.html",
    "revision": "cedda5a8eb9fc4913b0790d44a4c0130"
  },
  {
    "url": "view/docs/安装/搭建HIVE.html",
    "revision": "8cf8cd0a9df5667cfad64e29b6e56f97"
  },
  {
    "url": "view/docs/安装/搭建kafka.html",
    "revision": "408266cbb9cb9aa15802a6f6f1de24fd"
  },
  {
    "url": "view/docs/安装/搭建sqoop和Flume.html",
    "revision": "ebd7d84866b3a4e4383f1430d49e3e89"
  },
  {
    "url": "view/docs/安装/搭建分布式集群.html",
    "revision": "ab1a30fbaa857ff7e76fe93ec021c1a3"
  },
  {
    "url": "view/docs/笔记/10.kafka.html",
    "revision": "12fa02e0a2eb56b8a5811418f1931a51"
  },
  {
    "url": "view/docs/笔记/11.hbase.html",
    "revision": "ad3b59e834110d2a6c5465b0f4dcb7db"
  },
  {
    "url": "view/docs/笔记/12.sqoop.html",
    "revision": "7aa686b2a121f4c48f653d3fed5ae323"
  },
  {
    "url": "view/docs/笔记/13.azkaban.html",
    "revision": "2d03ab3d2ab63ba47b195d801aefb69f"
  },
  {
    "url": "view/docs/笔记/14.Oozie.html",
    "revision": "5a61270f0d8abbb7358d590c8f8331d8"
  },
  {
    "url": "view/docs/笔记/15.Hue.html",
    "revision": "98f7022438954c534555e0e3f6524504"
  },
  {
    "url": "view/docs/笔记/16.scala.html",
    "revision": "d20ce400e5e2b8551206a0f91283773a"
  },
  {
    "url": "view/docs/笔记/20.Kylin即席查询.html",
    "revision": "3d03155816df379e7bde07e0125edd07"
  },
  {
    "url": "view/docs/笔记/22.Presto即席查询.html",
    "revision": "a2d942ca9666d6aef44b386ba29de367"
  },
  {
    "url": "view/docs/笔记/23.superset可视化.html",
    "revision": "1a9842f9082bca5dc60972c3803663d1"
  },
  {
    "url": "view/docs/笔记/26.zabbix.html",
    "revision": "3d5326ddf8cad9d759ef6ea164e7ef92"
  },
  {
    "url": "view/docs/笔记/28.Kerberos.html",
    "revision": "35a47b89bb84c24d10c10441a2040777"
  },
  {
    "url": "view/docs/笔记/30.数仓4.x.html",
    "revision": "a1cc898ae88c399de40ba88949d832cc"
  },
  {
    "url": "view/docs/笔记/32.Redis6.html",
    "revision": "b177f2f61f35d4a69bb594c2e96a9b9a"
  },
  {
    "url": "view/docs/笔记/34.es.html",
    "revision": "d3c1e81f4a21982603ae623402125873"
  },
  {
    "url": "view/docs/笔记/Pandas.html",
    "revision": "64fc660dd5a3be220da9f5579ee43bae"
  },
  {
    "url": "view/docs/笔记/python爬虫.html",
    "revision": "9da33c5cfcdc8509f13969298a4e5e34"
  },
  {
    "url": "view/docs/踩坑/hive.html",
    "revision": "69485531193c0a6142ea71d3eb6edf33"
  },
  {
    "url": "view/docs/踩坑/idea编码.html",
    "revision": "be177f63d7e9921ed59f37e5f4025bd6"
  },
  {
    "url": "view/docs/踩坑/spark程序打包.html",
    "revision": "5eea80df643d19d1548d5f566f501979"
  },
  {
    "url": "view/reward.html",
    "revision": "9dddd5904164edf649d678620ba517e9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
