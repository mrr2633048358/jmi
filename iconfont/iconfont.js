(function(window){var svgSprite='<svg><symbol id="icon-xinxi" viewBox="0 0 1024 1024"><path d="M256 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z"  ></path><path d="M512 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z"  ></path><path d="M704.256 0 319.744 0C142.976 0 0 143.232 0 320.704l0 142.592c0 162.304 133.76 289.408 256 304.768L256 960l320-191.936 128.256 0c176.768 0 319.744-127.296 319.744-304.768L1024 320.704C1024 143.616 880.896 0 704.256 0zM960 448c0 142.144-114.304 256-255.744 256L576 704l-256.256 150.016L319.744 704 288 704C160.704 688.192 64 577.92 64 448L64 320.704C64 178.56 178.304 64 319.744 64l384.576 0C845.504 64 960 178.88 960 320.704L960 448z"  ></path><path d="M768 384m-64 0a1 1 0 1 0 128 0 1 1 0 1 0-128 0Z"  ></path></symbol><symbol id="icon-sousuo" viewBox="0 0 1024 1024"><path d="M837.304889 805.831111 655.943111 627.143111c46.691556-48.910222 75.477333-114.915556 75.477333-187.662222 0-150.200889-122.168889-272.369778-272.355556-272.369778-150.200889 0-272.369778 122.168889-272.369778 272.369778s122.183111 272.355556 272.369778 272.355556c51.498667 0 99.555556-14.606222 140.629333-39.552l187.278222 184.604444L837.304889 805.831111 837.304889 805.831111zM229.703111 439.466667c0-126.464 102.897778-229.361778 229.361778-229.361778S688.440889 313.016889 688.440889 439.466667c0 126.478222-102.912 229.361778-229.376 229.361778S229.703111 565.944889 229.703111 439.466667L229.703111 439.466667zM229.703111 439.466667"  ></path></symbol><symbol id="icon-play" viewBox="0 0 1437 1024"><path d="M1177.988991 67.617025 228.472905 67.617025c-126.164199 0-228.453058 124.199395-228.453058 277.37468l0 401.613769c0 153.175285 102.28886 277.37468 228.453058 277.37468l949.535933 0c126.164199 0 228.453058-124.199395 228.453058-277.37468L1406.461896 344.991705C1406.461896 191.81642 1304.15319 67.617025 1177.988991 67.617025zM703.221025 667.894255l-174.133189 122.07582L529.087836 545.818436 529.087836 301.646949l174.133189 122.07582 174.153035 122.095666L703.221025 667.894255z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)