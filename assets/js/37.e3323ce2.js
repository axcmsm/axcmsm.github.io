(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{648:function(s,a,e){"use strict";e.r(a);var t=e(4),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"虚拟机搭建教程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚拟机搭建教程"}},[s._v("#")]),s._v(" 虚拟机搭建教程")]),s._v(" "),e("p",[s._v("针对大数据学习的虚拟机安装教程")]),s._v(" "),e("blockquote",[e("p",[s._v("准备一台内存最少8G（建议16G）、cpu i7 4核的电脑")])]),s._v(" "),e("h2",{attrs:{id:"linux版本简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux版本简介"}},[s._v("#")]),s._v(" linux版本简介")]),s._v(" "),e("blockquote",[e("ul",[e("li",[s._v("linux统一使用centos7.6  64位版本")]),s._v(" "),e("li",[s._v("种子文件下载地址："),e("a",{attrs:{href:"http://mirrors.aliyun.com/centos/7.6.1810/isos/x86_64/CentOS-7-x86_64-DVD-1810.torrent",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://mirrors.aliyun.com/centos/7.6.1810/isos/x86_64/CentOS-7-x86_64-DVD-1810.torrent"),e("OutboundLink")],1)])]),s._v(" "),e("p",[s._v("目前我用的7 未来应该是8的主流")])]),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("关于内存分配")]),s._v(" "),e("p",[s._v("我的电脑是16g,基于后面要搭建hadoop集群,所以我分配了2核2G,50G内存、三台都一样")]),s._v(" "),e("p",[s._v("因为50G内存不是立刻开分、也基于后面增加内存比较麻烦")]),s._v(" "),e("p",[s._v("另外,最好是同一放在一个空盘符方便管理、"),e("strong",[s._v("千万不要放在C盘")])])]),s._v(" "),e("h2",{attrs:{id:"三台linux服务器的安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#三台linux服务器的安装"}},[s._v("#")]),s._v(" 三台linux服务器的安装")]),s._v(" "),e("h3",{attrs:{id:"_1-安装vmware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装vmware"}},[s._v("#")]),s._v(" 1. 安装VMware")]),s._v(" "),e("ul",[e("li",[s._v("VMware虚拟机软件是一个“虚拟"),e("a",{attrs:{href:"https://baike.baidu.com/item/PC/107",target:"_blank",rel:"noopener noreferrer"}},[s._v("PC"),e("OutboundLink")],1),s._v("”软件，它使你可以在一台机器上同时运行二个或更多"),e("a",{attrs:{href:"https://baike.baidu.com/item/Windows",target:"_blank",rel:"noopener noreferrer"}},[s._v("Windows"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://baike.baidu.com/item/DOS/32025",target:"_blank",rel:"noopener noreferrer"}},[s._v("DOS"),e("OutboundLink")],1),s._v("、"),e("a",{attrs:{href:"https://baike.baidu.com/item/LINUX",target:"_blank",rel:"noopener noreferrer"}},[s._v("LINUX"),e("OutboundLink")],1),s._v("系统。与“多启动”系统相比，"),e("a",{attrs:{href:"https://baike.baidu.com/item/VMWare",target:"_blank",rel:"noopener noreferrer"}},[s._v("VMWare"),e("OutboundLink")],1),s._v("采用了完全不同的概念。")]),s._v(" "),e("li",[s._v("我们可以通过VMware来安装我们的linux虚拟机，然后通过linux虚拟机来进行集群的安装，VMware的安装双击之后，一路下一步即可，尽量不要装在操作系统盘里面了，VMware的安装步骤省略")])]),s._v(" "),e("p",[s._v("🐄")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_2-通过vmware安装第一台linux机器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-通过vmware安装第一台linux机器"}},[s._v("#")]),s._v(" 2. 通过Vmware安装第一台linux机器")]),s._v(" "),e("p",[s._v("先安装薄板机然后进行克隆操作。")]),s._v(" "),e("p",[s._v("1：双击Vmware打开之后，点击创建新的虚拟机")]),s._v(" "),e("p",[s._v("2：选择自定义安装配置")]),s._v(" "),e("p",[s._v("3：选择稍后安装操作系统")]),s._v(" "),e("p",[s._v("4：选择稍后安装操作系统")]),s._v(" "),e("p",[s._v("5：选择安装路径，==尽量不要放在C盘，并且所在盘符的剩余空间尽量大些==")]),s._v(" "),e("p",[s._v("6：CPU核数，默认即可  2")]),s._v(" "),e("p",[s._v("7：虚拟机内存根据自身windows电脑进行调整 2g")]),s._v(" "),e("p",[s._v("8：网络配置一定要选择==NAT==")]),s._v(" "),e("p",[s._v("9：磁盘大小尽量给50GB")]),s._v(" "),e("blockquote",[e("p",[s._v("注意：千万==不要==勾选“立即分配所有磁盘空间”")])]),s._v(" "),e("p",[s._v("10：完成")]),s._v(" "),e("p",[s._v("🐄🐄")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_3-为我们创建的linux虚拟机挂载操作系统"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-为我们创建的linux虚拟机挂载操作系统"}},[s._v("#")]),s._v(" 3. 为我们创建的linux虚拟机挂载操作系统")]),s._v(" "),e("p",[s._v("1：通过设置来挂载操作系统 (在设置里面选择挂载我们种子文件)")]),s._v(" "),e("p",[s._v("2：直接回车开始安装 (然后开启虚拟机)")]),s._v(" "),e("blockquote",[e("p",[s._v("用键盘的方向键，选中“Install CentOS 7”,然后按回车，开始安装\n再按回车键")])]),s._v(" "),e("p",[s._v("3：设置键盘为英文键盘")]),s._v(" "),e("p",[s._v("4：接下来配置这三项 (我选择的默认最小安装)")]),s._v(" "),e("p",[s._v("（1）设置①时区为Asia/Shanghai")]),s._v(" "),e("p",[s._v("（2）设置②INSTALATION DESTINATION")]),s._v(" "),e("p",[s._v("（3）设置③NETWORK & HOST NAME")]),s._v(" "),e("p",[s._v("5：设置root用户密码")]),s._v(" "),e("p",[s._v("6：安装完成之后重启reboot即可")]),s._v(" "),e("p",[s._v("此过程稍长，耐心等待")]),s._v(" "),e("p",[s._v("🐄🐄🐄")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_4-为我们的linux虚拟机设置网络配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-为我们的linux虚拟机设置网络配置"}},[s._v("#")]),s._v(" 4. 为我们的linux虚拟机设置网络配置")]),s._v(" "),e("p",[s._v("1：设置虚拟机的网段  右键虚拟机左上角编辑旋转虚拟网络编译器")]),s._v(" "),e("p",[s._v("2：查看==NAT模式==的网关，子网IP以及子网掩码")]),s._v(" "),e("p",[s._v("3：设置window当中的VMNet8网络地址 控制面板->网络和internet->网络连接 ipv4 设置")]),s._v(" "),e("ul",[e("li",[s._v("ip地址  和虚拟机同一网段。")]),s._v(" "),e("li",[s._v("子网掩码")]),s._v(" "),e("li",[s._v("默认网关  和虚拟机网关一样")]),s._v(" "),e("li",[s._v("DNS 0.0.0.0")])]),s._v(" "),e("p",[s._v("4：设置linux当中的网络")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("我们已经配置好了Vmware当中的网络、windows当中的网络；")])]),s._v(" "),e("li",[e("p",[s._v("剩下就是配置linux虚拟机当中的网络，配置好了linux当中的网络，我们的linux就可以联网使用了")])]),s._v(" "),e("li",[e("p",[s._v("登录linux")])])]),s._v(" "),e("p",[s._v("编辑配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加联网四要素")]),s._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("IPADDR")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.51.100 #你linux主机的ip")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("NETMASK")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("255.255.255.0 # 子网掩码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("GATEWAY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("192.168.51.1 # 网关")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token attr-name"}},[s._v("DNS1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[s._v("8.8.8.8 ")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("设置为静态ip: static")]),s._v(" "),e("p",[s._v("更改完成配置，重启网络服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl restart network\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装一些常用的软件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v("\nyum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" net-tools\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("关机")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("init 0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("🐄🐄🐄🐄")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_5-克隆第一台机器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-克隆第一台机器"}},[s._v("#")]),s._v(" 5. 克隆第一台机器")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("现在我们已经有了种子机器了，我们可以通过种子机器进行复制或者克隆出三台机器")])]),s._v(" "),e("li",[e("p",[s._v("关闭linux种子机器，然后准备进行克隆")])])]),s._v(" "),e("p",[s._v("选择创建完整克隆")]),s._v(" "),e("p",[s._v("🐄🐄🐄🐄🐄")]),s._v(" "),e("hr"),s._v(" "),e("h3",{attrs:{id:"_6-更改克隆机器的ip地址"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_6-更改克隆机器的ip地址"}},[s._v("#")]),s._v(" 6. 更改克隆机器的IP地址")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("三台机器的ip地址分别是"),e("code",[s._v("192.168.51.100、192.168.51.110、192.168.51.120")])])]),s._v(" "),e("li",[e("p",[s._v("克隆出来的机器IP地址与种子的ip地址一样，我们将第二台机器的IP地址更改为192.168.51.110即可")])]),s._v(" "),e("li",[e("p",[s._v("启动虚拟机，并通过root用户，密码123456来进行登录，然后来更改linux机器的IP地址")])])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/network-scripts/ifcfg-ens33\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更改ip地址IPADDR")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPADDR")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.110\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NETMASK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GATEWAY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.1\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DNS1")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.8")]),s._v(".8.8\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[e("p",[s._v("依照上面步骤，接着克隆第三台机器，并将第三台机器的IP地址设置为")]),s._v(" "),e("p",[s._v("192.168.51.120")]),s._v(" "),e("p",[s._v("==注意：根据自己的实际情况，修改ip地址==")])])]),s._v(" "),e("p",[s._v("🐄🐄🐄🐄🐄🐄 "),e("strong",[s._v("完🐄成")]),s._v("！")]),s._v(" "),e("hr"),s._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),e("p",[s._v("此时你以及安装配置好linux环境了 如果想搭建hadoop环境请查看我另外一篇文章")]),s._v(" "),e("p",[e("RouterLink",{attrs:{to:"/view/docs/安装/搭建分布式集群.html"}},[s._v("搭建hadoop环境")])],1),s._v(" "),e("p",[s._v("下面是了解内容")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/qq_41455420/article/details/78863552",target:"_blank",rel:"noopener noreferrer"}},[s._v("上传rz sz"),e("OutboundLink")],1)])]),s._v(" "),e("h2",{attrs:{id:"了解内容"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#了解内容"}},[s._v("#")]),s._v(" "),e("strong",[s._v("了解内容")])]),s._v(" "),e("p",[e("strong",[s._v("三台机器时钟同步")]),s._v("（如果设置了开机自动联网，下面的就不用配置，在我另一篇文章有写）")]),s._v(" "),e("p",[e("strong",[s._v("第一种同步方式")]),s._v("：通过网络进行时钟同步")]),s._v(" "),e("p",[s._v("通过网络连接外网进行时钟同步,必须保证虚拟机连上外网")]),s._v(" "),e("p",[s._v("三台机器都安装ntpdate")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntpdate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("阿里云时钟同步服务器")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("ntpdate ntp4.aliyun.com\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("三台机器定时任务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("添加如下内容")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("*/1 * * * * /usr/sbin/ntpdate ntp4.aliyun.com"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("第二种同步方式")]),s._v("：内网某机器作为时钟同步服务器")]),s._v(" "),e("p",[e("font",{attrs:{color:"red"}},[s._v("以下操作都在root用户下面执行，通过su root切换到root用户")])],1),s._v(" "),e("p",[s._v("以192.168.51.100这台服务器的时间为准进行时钟同步")]),s._v(" "),e("p",[e("strong",[s._v("第一步")]),s._v(":三台机器确定是否安装了ntpd的服务")]),s._v(" "),e("p",[s._v("三台机器确认是否安装ntpdate时钟同步工具")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -qa "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" ntpdate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("如果没有安装,三台机器执行以下命令可以进行在线安装")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntpdate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("node01安装ntp")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("yum -y "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntp\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("三台机器，执行以下命令，设置时区为中国上海时区")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("timedatectl set-timezone Asia/Shanghai\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("第二步")]),s._v("：node01启动ntpd服务")]),s._v(" "),e("p",[s._v("我们需要启动node01的ntpd服务，作为服务端，对外提供同步时间的服务")]),s._v(" "),e("p",[s._v("启动ntpd的服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动ntpd服务")]),s._v("\nsystemctl start ntpd\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置ntpd服务开机启动")]),s._v("\nsystemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" ntpd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[e("strong",[s._v("第三步")]),s._v("：修改node01服务器配置")]),s._v(" "),e("p",[s._v("修改node01这台服务器的时钟同步配置，允许对外提供服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ntp.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("font",{attrs:{color:"red"}},[s._v("添加以下两行内容")])],1),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同意192.168.51.0网段（修改成自己的网段）的所有机器与node01同步时间")]),s._v("\nrestrict "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".51.0 mask "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("255.255")]),s._v(".255.0 nomodify notrap\nserver "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.127")]),s._v(".1.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("font",{attrs:{color:"red"}},[s._v("注释掉以下这四行内容")])],1),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 0.centos.pool.ntp.org iburst")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 1.centos.pool.ntp.org iburst")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 2.centos.pool.ntp.org iburst")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server 3.centos.pool.ntp.org iburst")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("修改完成之后，重启node01的ntpd服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("systemctl restart ntpd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("至此，ntpd的服务端已经安装配置完成，接下来配置客户端与服务端进行同步")]),s._v(" "),e("p",[e("strong",[s._v("第四步")]),s._v("：配置node02与node03同步node01的时间")]),s._v(" "),e("p",[s._v("客户端node02与node03设置时区与node01保持一致Asia/Shanghai")]),s._v(" "),e("p",[s._v("node02与node03修改配置文件，保证每次时间写入硬件时钟")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/ntpdate\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SYNC_HWCLOCK")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("yes\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("node02与node03修改定时任务，定时与node01同步时间")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@node03 hadoop"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# crontab -e")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("增加如下内容")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("*/1 * * * * /usr/sbin/ntpdate node01\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("hr")])}),[],!1,null,null,null);a.default=n.exports}}]);