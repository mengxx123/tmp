let html = `
    <!DOCTYPE><html lang="zh-cn"><head><meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible"content="IE=edge">
    <meta name="viewport"content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="shortcut icon"href="/favicon.ico">
    <link rel="stylesheet" href="//cdn.bootcss.com/mdui/0.4.3/css/mdui.min.css">
    <script>
    var _hmt = _hmt || [];(function() {  var hm = document.createElement("script");  hm.src = "https://hm.baidu.com/hm.js?fe56d7c388bcc7351ed902d26d60f24a";  var s = document.getElementsByTagName("script")[0];   s.parentNode.insertBefore(hm, s);})();
    </script>
    <title>九格切图-云极客工具</title>
    <meta name="keywords"content="在线九格切图,图片,生活,社交"/>
    <meta name="description"content="在线将图片切成九宫格，便于在社交媒体上发布"/>
    <meta itemprop="name" content="九格切图-云极客工具"/>
    <meta itemprop="image" content="../favicon.png" />
    <meta itemprop="description" name="description" content="在线将图片切成九宫格，便于在社交媒体上发布" />
    <div class="main-load"><div class="mdui-spinner"></div></div>
    </head>
    <body class="mdui-bottom-nav-fixed mdui-appbar-with-toolbar mdui-theme-accent-blue mdui-drawer-body-left mdui-drawer-body-left">
       <div class="bg"></div>
       <div id="all_main">
       <div id="tool_main">
    <header class="header mdui-appbar mdui-appbar-fixed">
         <div  class="mdui-appbar">
           <div class="mdui-toolbar mdui-color-theme">        
             <a href="javascript:;" class="mdui-btn mdui-btn-icon mdui-text-color-white "mdui-drawer="{target: '#left-drawer'}"><i class="mdui-icon material-icons">menu</i></a>
          <a href="/" class="mdui-typo-title  mdui-text-color-white">九格切图<span class="mdui-hidden-xs">-云极客工具</span></a>
         <div class="mdui-toolbar-spacer mdui-hidden-md-up"></div>
        
          <button onclick="load_pro()"class="mdui-text-color-white mdui-btn product mdui-btn-icon"><i class="mdui-icon material-icons">more_horiz</i></button>
    </header>
     <div class="mdui-drawer mdui-drawer-closed" id="left-drawer"><!--侧滑栏-->
    
      <link rel="stylesheet" href="/Public/css/drawer.css" /> 
      <!-- <div class="draw-title"><span class="mdui-text-color-theme">YGK</span>TOOL</div>
      <div class="draw-subtitle">极简、强大、高效</div>--> 
      <div class="mdui-card"> 
       <div class="mdui-card-media"> 
        <img src="/Public/img/drawer.png" /> 
        <div class="mdui-card-menu"> 
         <button id="dan" class="mdui-btn mdui-btn-icon mdui-text-color-white"><i id="night" class="mdui-icon material-icons">brightness_2</i></button> 
        </div> 
       </div> 
      </div> 
      <ul class="mdui-list"> 
       <a href="/User/index"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-blue">account_box</i> 
         <div class="mdui-list-item-content">
          个人中心
         </div> </li></a> 
         <div class="mdui-divider"></div>
       <a href="/"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-red">home</i> 
         <div class="mdui-list-item-content">
          首页
         </div> </li></a> 
       <a href="/index.php?page=2"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-purple">apps</i> 
         <div class="mdui-list-item-content">
          发现工具
         </div> </li></a>
         <a href="/Other/setting#theme"> 
       <li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons mdui-text-color-theme">lens</i> 
        <div class="mdui-list-item-content">
         主题管理
        </div> </li></a> 
       <div class="mdui-divider"></div> 
       <!--<a href="javascript:;"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons">book</i> 
         <div class="mdui-list-item-content" mdui-tooltip="{content: '即将到来'}">
          <s>
           API文档
          </s>
         </div> </li></a> -->
       <a href="http://club.yungeeker.com"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons">camera</i> 
         <div class="mdui-list-item-content" mdui-tooltip="{content: '站长的另一个良心作品'}">
          云社
         </div> </li></a> 
       <a href="/Other/about"><li class="mdui-list-item mdui-ripple"> <i class="mdui-list-item-icon mdui-icon material-icons">bubble_chart</i> 
         <div class="mdui-list-item-content">
          关于
         </div> </li></a> 
      </ul> 
      <div class="mdui-typo copyright">
        &copy;2019 江村暮 
      </div></div><link href="//cdn.bootcss.com/cropper/4.0.0-beta/cropper.min.css" rel="stylesheet">
    <div style="margin-top:10px;"class="mdui-container">
    
    <style>
    #preview img{
        width: 100%;
        margin:0px auto;
        display:block;
        max-height: 80%;
    }
    .select{
      margin: 5px
    }
    </style>
      
    <div id="preview">
      <img alt="选择图片" id="myImg" src="" style="max-height: 90%;">
    </div>
    
    <button style="z-index: 66" id="new" class="mdui-color-theme mdui-fab mdui-fab-fixed"><i class="mdui-icon material-icons">&#xe14e;</i></button>
    
    <div id="album" class="mdui-row-xs-3 mdui-row-sm-4 mdui-row-md-5 mdui-row-lg-6 mdui-row-xl-7 mdui-grid-list">
    </div>
    <br>
    <button class="mdui-btn-raised mdui-text-color-white mdui-center mdui-btn select mdui-color-theme"><i class="mdui-icon material-icons">cloud_upload</i>选择图片</button>
    
    
    </div>
    <!--核心代码完全原创，盗代码可耻，别当*微改一下成自己的了。转载请注明作者QQ：1985386335。所采用的第三库、开源包等，著作权归属原作者或是团队，我支持您联系我获取工具源代码用于学习交流，但不欢迎大规模的全站复制，并且保留所有权利。-->
    <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
    <script src="//cdn.bootcss.com/clipboard.js/2.0.4/clipboard.min.js"></script> 
    <script src="//cdn.bootcss.com/mdui/0.4.3/js/mdui.min.js"></script>
    <script src="/Public/js/theme.js"></script>
    <script src="run.js"></script>
    <script src="//cdn.bootcss.com/cropper/4.0.0-beta/cropper.min.js"></script>
    <script src="//cdn.bootcss.com/jszip/3.2.2/jszip.min.js"></script>
    <script src="//cdn.bootcss.com/FileSaver.js/2014-11-29/FileSaver.min.js"></script>
    </body>`