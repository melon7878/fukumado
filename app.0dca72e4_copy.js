(function(t){
    function e(e){
        for(var i,o,r=e[0],l=e[1],c=e[2],d=0,p=[];d<r.length;d++)
            o=r[d],
            Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),
            a[o]=0;
        for(i in l)
            Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);
        u&&u(e);
        while(p.length)
            p.shift()();
        return n.push.apply(n,c||[]),s()
    }
    function s(){
        for(var t,e=0;e<n.length;e++){
            for(var s=n[e],i=!0,r=1;r<s.length;r++){
                var l=s[r];
                0!==a[l]&&(i=!1)
            }
            i&&(n.splice(e--,1),t=o(o.s=s[0]))
        }
        return t
    }
    var i={},a={app:0},n=[];
    function o(e){
        if(i[e])
        return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports
    }
    o.m=t,o.c=i,
    o.d=function(t,e,s){
        o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})
    },
    o.r=function(t){
        "undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})
    },
    o.t=function(t,e){
        if(1&e&&(t=o(t)),8&e)return t;
        if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;
        var s=Object.create(null);
        if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)
            for(var i in t)
                o.d(
                    s,i,
                    function(e){
                        return t[e]
                    }.bind(null,i)
                )
            ;
            return s
    },
    o.n=function(t){
        var e=t&&t.__esModule?function(){
            return t["default"]
        }:function(){return t};
        return o.d(e,"a",e),e
    },
    o.o=function(t,e){
        return Object.prototype.hasOwnProperty.call(t,e)
    },
    o.p="";
    var r=window["webpackJsonp"]=window["webpackJsonp"]||[],
        l=r.push.bind(r);
        r.push=e,r=r.slice();
    for(var c=0;c<r.length;c++)e(r[c]);
    var u=l;
    n.push([0,"chunk-vendors"]),
    s()
})


({
    0:function(t,e,s){t.exports=s("56d7")},
    "012f":function(t,e,s){t.exports=s.p+"img/icon_layout.af0c7801.svg"},
    "0f84":function(t,e,s){t.exports=s.p+"img/icon_help.63bc87b6.svg"},
    4555:function(t,e,s){t.exports=s.p+"img/icon_speaker.b1532326.svg"},
    "56d7":function(t,e,s){
        "use strict";
        s.r(e);
        var i=s("2b0e"),
            a=function(){
                var t=this,
                    e=t.$createElement,
                    i=t._self._c||e;
                return i(
                    "main",
                    {attrs:{id:"app"}},
                    [i(
                        "div",
                        {staticClass:"scroll-body"},
                        [t.isVisibleInfo?i(
                            "div",
                            {staticClass:"info-bar"},
                            [t._m(0),i("button",{staticClass:"dismiss",on:{click:t.dismissInfo}})]
                        ):t._e(),
                        i(
                            "div",
                            {staticClass:"grid-wrapper",class:{"move-active":t.isMoveActive}},
                            [t.current?
                                [i(
                                    "div",
                                    {
                                        staticClass:"grid-body",class:t.layoutData.className,on:{dragstart:t.dragStart,dragend:t.dragEnd,
                                        dragover:function(t){t.preventDefault(),t.dataTransfer.dropEffect="move"},
                                        dragenter:t.dragHover,
                                        dragleave:t.dragHover,
                                        drop:function(e){return e.preventDefault(),t.dropColumn(e)}}
                                    },
                                    t._l(t.layoutData.n,(function(e){
                                        return i(
                                            "div",
                                            {key:e.id,staticClass:"grid-column"},
                                            [i(
                                                "div",
                                                {staticClass:"column-inner",attrs:{"data-index":e}},
                                                [t.videoIds[e]?
                                                    i(
                                                        "div",
                                                        {staticClass:"frame-wrapper"},
                                                        [i(
                                                            "youtube",
                                                            {ref:"youtube-"+e,refInFor:!0,attrs:{"video-id":t.videoIds[e],"player-vars":{fs:0}}}
                                                        )],
                                                        1
                                                    ):i(
                                                        "div",
                                                        {staticClass:"empty"}
                                                    ),
                                                    i(
                                                        "div",
                                                        {ref:"url-"+e,refInFor:!0,staticClass:"url-block"},
                                                        [i("p",[t._v("動画・配信のURLを入力")]),
                                                            i(
                                                                "input",
                                                                {
                                                                    ref:"input-"+e,
                                                                    refInFor:!0,
                                                                    attrs:{
                                                                        type:"url",
                                                                        placeholder:"https://www.youtube.com/watch?v=...",
                                                                        pattern:"^https://(www\\.youtube\\.com/watch\\?v=|youtu\\.be/).+",
                                                                        required:""
                                                                    }
                                                                }
                                                            ),
                                                            i(
                                                                "div",
                                                                {staticClass:"button-wrapper"},
                                                                [
                                                                    i(
                                                                        "button",
                                                                        {staticClass:"btn-ok",on:{click:function(s){return t.setVideoId(e)}}},[t._v("OK")]
                                                                    ),
                                                                    t.videoIds[e]?i(
                                                                        "button",
                                                                        {staticClass:"btn-reset",on:{click:function(s){return t.deleteVideoId(e)}}},
                                                                        [t._v("リセット")]
                                                                    ):t._e()
                                                                ]
                                                            )
                                                        ]
                                                    ),
                                                    i(
                                                        "div",
                                                        {
                                                            staticClass:"move-block",
                                                            attrs:{draggable:"true"}
                                                        }
                                                    )
                                                ]
                                            )]
                                        )
                                    })),
                                    0
                                )]:i(
                                    "div",
                                    {staticClass:"start-block"},
                                    [
                                        i("h1",[t._v("YouTubeを複数窓でみるやつ")]),
                                        i("p",[t._v("YouTubeの動画や配信をひとつのウィンドウに複数表示させるだけのツールです。")]),
                                        t._m(1),t._m(2),
                                        /*
                                        i("div",{staticClass:"twitter"},[i("tweet-button",{attrs:{url:"https://amamamaou.github.io/multi/",title:"Twitterでツイートする"}},[i("img",{attrs:{src:s("bcb6"),alt:"Twitter"}}),i("span",[t._v("Tweet")])])],1),
                                        */
                                        t._m(3),
                                        i("div",{staticClass:"button-wrapper"},
                                        [
                                            i("button",{staticClass:"layout",on:{click:t.showLayout}},[i("img",{attrs:{src:s("012f"),alt:"Layout"}}),
                                            t._v(" レイアウトを選ぶ ")]),
                                            i("button",{staticClass:"help",attrs:{title:"ヘルプ"},on:{click:function(e){t.isVisibleHelp=!0}}},
                                            [i("img",{attrs:{src:s("0f84"),alt:"Help"}})])
                                        ]
                                        )
                                    ]
                                    )
                            ],
                            2
                        ),
                        i(
                            "div",
                            {staticClass:"select-wrapper",class:{show:t.isSelectLayout}},
                            [
                                i("div",{staticClass:"select-body"},
                                [
                                    i("p",[t._v("レイアウトを選んでください")]),
                                    i(
                                        "ul",
                                        {staticClass:"select-layout"},
                                        t._l(
                                            t.layouts,
                                            (function(e){
                                                var s=e[0],a=e[1];
                                                return i(
                                                    "li",{key:a.id},
                                                    [
                                                        i(
                                                            "input",
                                                            {
                                                                directives:[{name:"model",rawName:"v-model",value:t.current,expression:"current"}],
                                                                attrs:{type:"radio",id:s},domProps:{value:s,checked:t._q(t.current,s)},
                                                                on:{change:function(e){t.current=s}}
                                                            }
                                                        ),
                                                        i(
                                                            "label",
                                                            {attrs:{for:s}},
                                                            [i("div",{class:s},t._l(a.n,(function(t){return i("span",{key:t.id})})),0)]
                                                        )
                                                    ]
                                                )
                                            })
                                        ),
                                        0
                                    ),
                                    i(
                                        "div",{staticClass:"button-wrapper"},
                                        [i("button",{staticClass:"btn-ok",attrs:{disabled:!t.current},on:{click:t.setLayout}},[t._v("OK")])]
                                    )
                                ]
                                )
                            ]
                        ),

                        i("div",{staticClass:"help-wrapper",class:{show:t.isVisibleHelp}},
                        [i("div",{staticClass:"help-body"},
                        [i("button",{staticClass:"dismiss",on:{click:function(e){t.isVisibleHelp=!1}}}),t._m(4)])]),
                        t.current?i("nav",{staticClass:"controller-wapper"},[i("ul",{staticClass:"controller"},
                        [i("li",{class:{"is-ignore":t.isMoveActive}},[i("button",{on:{click:function(e){return t.control("playVideo")}}},[i("img",{attrs:{src:s("6763"),alt:"Play"}})]),i("span",{staticClass:"tooltip"},[t._v("まとめて再生")])]),
                        i("li",{class:{"is-ignore":t.isMoveActive}},[i("button",{on:{click:function(e){return t.control("pauseVideo")}}},[i("img",{attrs:{src:s("ca25"),alt:"Pause"}})]),i("span",{staticClass:"tooltip"},[t._v("まとめて一時停止")])]),
                        i("li",{class:{"is-ignore":t.isMoveActive}},[i("button",{on:{click:function(e){return t.control("unMute")}}},[i("img",{attrs:{src:s("4555"),alt:"Unmute"}})]),i("span",{staticClass:"tooltip"},[t._v("まとめてミュート解除")])]),
                        i("li",{class:{"is-ignore":t.isMoveActive}},[i("button",{on:{click:function(e){return t.control("mute")}}},[i("img",{attrs:{src:s("d33d"),alt:"Mute"}})]),i("span",{staticClass:"tooltip"},[t._v("まとめてミュート")])]),
                        t.enabled?i("li",{staticClass:"sp-none"},[t.isFullScreen?[i("button",{on:{click:function(e){return t.fullscreen(!1)}}},[i("img",{attrs:{src:s("e618"),alt:"Exit full screen"}})]),i("span",{staticClass:"tooltip"},[t._v("フルスクリーン解除")])]:[i("button",{on:{click:function(e){return t.fullscreen(!0)}}},[i("img",{attrs:{src:s("599b"),alt:"Full screen"}})]),i("span",{staticClass:"tooltip"},[t._v("フルスクリーン表示")])]],2):t._e(),
                        i("li",[i("button",{on:{click:t.showURL}},[i("img",{attrs:{src:s("7847"),alt:"Change URL"}})]),i("span",{staticClass:"tooltip"},[t._v("動画・配信の変更")])]),i("li",{staticClass:"sp-none"},[i("button",{on:{click:t.toggleMove}},[i("img",{attrs:{src:s("6fa9"),alt:"Change layout"}})]),i("span",{staticClass:"tooltip"},[t._v("配置の変更")])]),i("li",[i("button",{on:{click:t.showLayout}},[i("img",{attrs:{src:s("012f"),alt:"Change layout"}})]),i("span",{staticClass:"tooltip"},[t._v("レイアウト変更")])]),
                        /*
                        i("li",[i("tweet-button",[i("img",{attrs:{src:s("bcb6"),alt:"Twitter"}})]),t._m(5)],1),
                        */
                        i("li",[i("button",{on:{click:t.allReset}},[i("img",{attrs:{src:s("740e"),alt:"Reset"}})]),i("span",{staticClass:"tooltip"},[t._v("リセット")])]),
                        i("li",[i("button",{on:{click:function(e){t.isVisibleHelp=!0}}},[i("img",{attrs:{src:s("0f84"),alt:"Help"}})]),i("span",{staticClass:"tooltip"},
                        [t._v("ヘルプ")])])])]):t._e(),
                        t.current&&t.isFirstView?i("aside",{ref:"firstView",staticClass:"first-view"},[t._m(6)]):t._e(),t.isMoveActive?i("aside",{staticClass:"move-float"},
                        [i("button",{on:{click:t.toggleMove}},[t._v("配置の変更を終了")])]):t._e()
                        ]
                    )]
                )
            },

    n=[
        function(){/*お知らせ*/
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("p",[s("b",[t._v("")]),
                t._v(""),
                s("strong",[t._v("")]),
                t._v("")])
        },
        
        function(){
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("p",[t._v("まずはじめに下のボタンをクリックしてレイアウトを選択します。"),s("br"),
            t._v(" レイアウト設定後、ツールバーは下にスクロールすることで表示されます。")])
        },
        function(){
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("p",[s("small",[t._v("※レイアウト、動画・配信のURL、配置の変更の際には再生中の動画が一時停止します")])])
        },

        function(){/*作った人*/
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("p",{staticClass:"author"},
                [t._v(""),
                s("a",{attrs:{href:"",target:"_blank"}},
                [t._v("")]),])},


        function(){
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("div",{staticClass:"help-scroll"},
                [s("h2",[t._v("このツールについて")]),
                s("p",[t._v("『YouTubeを複数窓でみるやつ』は、YouTubeの動画や配信を複数表示させて、いわゆる「複窓」ができるツールです。"),s("br"),
                t._v(" YouTubeのiframe埋め込み機能を利用して表示している関係上、"),s("strong",[t._v("複数の動画や配信を視聴する事だけに特化")]),
                t._v("していますので、通常のYouTubeよりもできることは限られています。")]),
                s("p",[t._v("16:9のモニターでの利用を想定しているので、それ意外では使用しづらいかもしれません。")]),
                s("p",[t._v("このツールはPCのブラウザで利用することを想定して作られています。"),s("br"),
                t._v(" 一応スマホでも崩れないようになっていますが、かなり操作に難があるだけでなく端末のへの負担もあるかと思います。"),
                s("br"),s("strong",[t._v("スマホでの利用はおすすめしません！")])]),

                s("h2",[t._v("使い方")]),
                s("p",[t._v("レイアウトを選択し、視聴したいYouTubeの動画または配信のURLを入力して「OK」をクリックするだけです。"),
                s("br"),t._v(" URLやレイアウト、配置は後から変更が可能です。"),s("br"),
                t._v(" 変更した後に前の設定に戻したい場合はブラウザバック（戻る）で元に戻せます。逆もまた然りです。")]),
                s("p",[t._v("動画や配信はまとめて再生、一時停止、ミュート、ミュート解除ができます。"),s("br"),
                t._v(" 端末やブラウザが対応していればフルスクリーン表示が可能です。")]),

                s("h2",[t._v("共有機能")]),
                s("p",[t._v("配置・設定した画面はURLをコピーすることで他の人にも共有することが可能です。")]),

                s("h2",[t._v("チャット（コメント）について")]),
                s("p",[t._v("前述の通り、このツールでは"),s("strong",[t._v("視聴する事だけに特化")]),t._v("したものになっています。"),s("br"),
                t._v(" 技術的にはチャットを表示することも可能ですが本来の意図から外れるだけでなく、外部サイトからチャットをポップアップ表示させることについてYouTubeの規約的にもグレーな部分があるので、"),
                s("strong",[t._v("今後もチャット表示機能を追加することはありません")]),t._v("。")]),
                /*
                s("h2",[t._v("バグを発見したなど、連絡したいことがある場合")]),
                s("p",[t._v("Twitterアカウント "),s("a",{attrs:{href:"https://twitter.com/amamamaou",target:"_blank"}},[t._v("@amamamaou")]),t._v(" まで、リプライでご連絡ください。"),s("br"),t._v(" 内容によっては返事ができない場合もあります。")])
                */
                ])
        },

        function(){/*現在の設定をTwitterでシェア*/
            var t=this,e=t.$createElement,s=t._self._c||e;
            return s("span",{staticClass:"tooltip"},
                [t._v(""),s(""),
                t._v("")])},

        function(){var t=this,e=t.$createElement,i=t._self._c||e;
            return i("div",{staticClass:"first-view-body"},
                [i("p",[t._v("")]),
                i("img",{attrs:{src:s(""),alt:""}})])
        }
    ],


    o=(s("5319"),s("ddb0"),s("e0ec")),r=s.n(o),
    l=function(){
        var t=this,e=t.$createElement,s=t._self._c||e;
        return s("button",{staticClass:"twitter-tweet",attrs:{title:t.title},on:{click:t.tweet}},[t._t("default")],2)
    },
    c=[];const u="https://twitter.com/intent/tweet",
    d="scrollbars=yes,resizable=yes,toolbar=no,location=yes",
    p=550,v=420;
    var f={
        name:"TweetButton",props:{text:{type:String,default:document.title},title:{type:String,default:""},
        url:{type:String,default:""}},methods:{tweet(){const t=encodeURIComponent(this.text),
        e=encodeURIComponent(this.url||location.href),s=Math.round((screen.width-p)/2),i=screen.height>v?Math.round((screen.height-v)/2):0;window.open(`${u}?text=${t}&url=${e}`,null,`${d},width=${p},height=${v},left=${s},top=${i}`)}}
    },
    g=f,h=s("2877"),m=Object(h["a"])(g,l,c,!1,null,null,null),b=m.exports,_=s("a6f9");s("8195");i["a"].use(r.a);const y=/^[-\w]{11,12}$/,w=new Map;let C,
    x=!1,k=!0;const $=t=>[...t].map(t=>t.join(":")).join();

    var L={
        name:"App",
        components:{"tweet-button":b},
        data(){
            return{
                current:null,
                layouts:new Map([["l-1",{n:1,className:["grid-layout-1x1"]}],
                    ["l-2",{n:2,className:["grid-layout-1x2"]}],["l-3",{n:2,className:["grid-layout-2x1"]}],
                    ["l-4",{n:3,className:["grid-layout-4x4","grid-column-2-t"]}],["l-5",
                    {n:3,className:["grid-layout-4x4","grid-column-2-b"]}],["l-6",
                    {n:4,className:["grid-layout-4x4","grid-column-2x2"]}],
                    ["l-7",{n:6,className:["grid-layout-2x3"]}],["l-8",
                    {n:6,className:["grid-layout-3x2"]}],
                    ["l-9",{n:9,className:["grid-layout-6x6","grid-column-3x3"]}],["l-10",{n:3,className:["grid-layout-2x3","grid-column-large"]}],["l-11",{n:3,className:["grid-layout-3x2","grid-column-large"]}],
                    ["l-12",{n:6,className:["grid-layout-6x6","grid-column-large"]}]]),
                videoIds:{},
                isVisibleInfo:!1,
                isSelectLayout:!1,
                isVisibleHelp:!1,
                isFullScreen:!1,
                isFirstView:!1,
                isMoveActive:!1,
                enabled:!!document.fullscreenEnabled,
                dragged:null
            }
        },
        computed:{layoutData(){return this.layouts.get(this.current)}},
        methods:{getRefs(t){
            return this.$refs[t][0]},showLayout(){this.isMoveActive=!1,this.isSelectLayout=!0,C.scrollTop=0,this.control("pauseVideo")},setLayout(){const t=location.hash.slice(2);location.hash=t?"/"+t.replace(/^l-\d+/,this.current):`/${this.current}/`,this.isSelectLayout=!1},setVideoId(t){const e=this.getRefs("input-"+t).value,s=this.$youtube.getIdFromUrl(e);y.test(s)&&(k=!1,w.set(t,s),this.getRefs("url-"+t).classList.add("hidden"),location.hash=`/${this.current}/`+$(w))},
            deleteVideoId(t){k=!1,w.delete(t),this.getRefs("input-"+t).value="",location.hash=`/${this.current}/`+$(w)},control(t){for(const[e]of w)this.getRefs("youtube-"+e).player[t](),"playVideo"===t&&this.getRefs("url-"+e).classList.add("hidden")},async fullscreen(t){t?(await this.$el.requestFullscreen(),C.scrollTop=0):document.exitFullscreen()},toggleMove(){this.isMoveActive=!this.isMoveActive,this.isMoveActive&&this.control("pauseVideo")},showURL(){this.isMoveActive=!1,this.control("pauseVideo");const{n:t}=this.layoutData;for(let e=1;e<=t;e++)this.getRefs("url-"+e).classList.remove("hidden")},allReset(){this.current=null,this.videoIds={},
            this.isMoveActive=!1,w.clear(),history.pushState(null,null,"./")},dragStart(t){t.dataTransfer.dropEffect="move",this.dragged=t.target.closest(".column-inner"),this.dragged.classList.add("dragged")},dragEnd(){var t;null===(t=this.dragged)||void 0===t||t.classList.remove("dragged")},dragHover(t){const e=t.target.closest(".column-inner");null===e||void 0===e||e.classList.toggle("drag-enter","dragenter"===t.type)},dropColumn(t){const e=t.target.closest(".column-inner");if(this.dragged.classList.remove("drag-enter","dragged"),e&&e!==this.dragged){e.classList.remove("drag-enter");const t=Number(this.dragged.dataset.index),s=w.get(t),i=Number(e.dataset.index),a=w.get(i);s?w.set(i,s):(w.delete(i),this.getRefs("input-"+i).value=""),a?w.set(t,a):(w.delete(t),this.getRefs("input-"+t).value=""),location.hash=`/${this.current}/`+$(w)}this.dragged=null},dismissInfo(){this.isVisibleInfo=!1,localStorage.setItem("info",Date.now())}
        },
        mounted(){
            const t=()=>{
                const[t,e=""]=location.hash.slice(2).split("/");
                if(w.clear(),!t||!this.layouts.has(t))
                    return this.current=null,
                        this.videoIds={},
                        void history.replaceState(null,null,"./");
                this.isSelectLayout=!1,
                this.current=t;
                const{n:s}=this.layouts.get(t),
                i=e?e.split(",").map(t=>t.split(":")):[],
                a=new Map(i.filter(([t,e])=>t<=s&&y.test(e)));
                i.length>a.size&&history.replaceState(null,null,`#/${t}/`+$(a));
                const n=Object.assign({},this.videoIds);
                for(const r of Object.keys(n)){
                    var o;
                    if(!a.has(r))n[r]="",null===(o=this.getRefs("url-"+r))||void 0===o||o.classList.remove("hidden")
                }
                for(const[r,l]of a){
                    const t=Math.floor(r);
                    n[t]=l,w.set(t,l)
                }
                this.videoIds=n,k&&this.$nextTick(()=>{
                    for(const[t,e]of a)this.getRefs("url-"+t).classList.add("hidden"),
                        this.getRefs("input-"+t).value="https://www.youtube.com/watch?v="+e}
                ),
                x||(this.isFirstView=x=!0,
                    this.$nextTick(()=>{this.$refs.firstView.addEventListener("animationend",()=>{this.isFirstView=!1})})),
                k=!0
            };

            window.addEventListener("hashchange",t),
            t(),
            C=this.$el.offsetWidth===this.$el.clientWidth?this.$el:new _["a"](this.$el).getScrollElement(),
            this.$el.classList.add("init"),
            this.enabled&&this.$el.addEventListener("fullscreenchange",()=>{this.isFullScreen=!!document.fullscreenElement});
            const e=localStorage.getItem("info");
            this.isVisibleInfo=!e||Date.now()-Number(e)>864e5
        }
    },

    M=L,
    I=(s("5c0b"),Object(h["a"])(M,a,n,!1,null,null,null)),
    T=I.exports;
    i["a"].config.productionTip=!1,
    new i["a"]({render:t=>t(T)}).$mount("#app")
    },
    "599b":function(t,e,s){t.exports=s.p+"img/icon_full.f747ea56.svg"},
    "5c0b":function(t,e,s){"use strict";var i=s("9c0c"),a=s.n(i);a.a},
    6763:function(t,e,s){t.exports=s.p+"img/icon_play.42866152.svg"},
    "6fa9":function(t,e,s){t.exports=s.p+"img/icon_move.09789b3a.svg"},
    "740e":function(t,e,s){t.exports=s.p+"img/icon_delete.e1357d2e.svg"},
    7847:function(t,e,s){t.exports=s.p+"img/icon_gear.362d562e.svg"},
    "9c0c":function(t,e,s){},
    bcb6:function(t,e,s){t.exports=s.p+"img/icon_twitter.08e40007.svg"},
    ca25:function(t,e,s){t.exports=s.p+"img/icon_pause.092da659.svg"},
    d33d:function(t,e,s){t.exports=s.p+"img/icon_mute.44e75516.svg"},
    d717:function(t,e,s){t.exports=s.p+"img/icon_arrow.c9969f67.svg"},
    e618:function(t,e,s){t.exports=s.p+"img/icon_full_exit.f1bccdfb.svg"}
});