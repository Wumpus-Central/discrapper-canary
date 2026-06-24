let r;
i.d(t, { i: () => t$, r: () => tz });
var n,
    o = i(209688),
    s = i(588233),
    a = i(171251),
    l = i(799201),
    c = i(401959),
    d = "user-agent",
    u = "function",
    h = "object",
    p = "string",
    f = "undefined",
    m = "browser",
    g = "device",
    C = "engine",
    v = "result",
    y = "name",
    w = "type",
    _ = "vendor",
    b = "version",
    L = "architecture",
    E = "major",
    S = "model",
    I = "console",
    T = "mobile",
    k = "tablet",
    x = "smarttv",
    P = "wearable",
    M = "embedded",
    O = "inapp",
    A = "brands",
    R = "formFactors",
    D = "fullVersionList",
    F = "platform",
    U = "platformVersion",
    H = "bitness",
    N = "sec-ch-ua",
    V = N + "-full-version-list",
    B = N + "-arch",
    z = N + "-" + H,
    $ = N + "-form-factors",
    Z = N + "-" + T,
    W = N + "-" + S,
    j = N + "-" + F,
    K = j + "-version",
    G = [A, D, T, S, F, U, L, R, H],
    q = "Amazon",
    Y = "Apple",
    Q = "ASUS",
    X = "BlackBerry",
    J = "Google",
    ee = "Huawei",
    et = "Lenovo",
    ei = "Honor",
    er = "Microsoft",
    en = "Motorola",
    eo = "Nvidia",
    es = "OnePlus",
    ea = "OPPO",
    el = "Samsung",
    ec = "Sharp",
    ed = "Sony",
    eu = "Xiaomi",
    eh = "Zebra",
    ep = "Chrome",
    ef = "Chromium",
    em = "Chromecast",
    eg = "Edge",
    eC = "Firefox",
    ev = "Opera",
    ey = "Facebook",
    ew = "Sogou",
    e_ = "Mobile ",
    eb = " Browser",
    eL = "Windows",
    eE = typeof window !== f && window.navigator ? window.navigator : void 0,
    eS = eE && eE.userAgentData ? eE.userAgentData : void 0,
    eI = function (e, t) {
        var i = {},
            r = t;
        if (!ex(t)) for (var n in ((r = {}), t)) for (var o in t[n]) r[o] = t[n][o].concat(r[o] ? r[o] : []);
        for (var s in e) i[s] = r[s] && r[s].length % 2 == 0 ? r[s].concat(e[s]) : e[s];
        return i;
    },
    eT = function (e) {
        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
        return t;
    },
    ek = function (e, t) {
        if (typeof e === h && e.length > 0) {
            for (var i in e) if (eO(t) == eO(e[i])) return !0;
            return !1;
        }
        return !!eP(e) && eO(t) == eO(e);
    },
    ex = function (e, t) {
        for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (!!t && ex(e[i]));
    },
    eP = function (e) {
        return typeof e === p;
    },
    eM = function (e) {
        if (e) {
            for (var t = [], i = eD(/\\?\"/g, e).split(","), r = 0; r < i.length; r++)
                if (i[r].indexOf(";") > -1) {
                    var n = eU(i[r]).split(";v=");
                    t[r] = { brand: n[0], version: n[1] };
                } else t[r] = eU(i[r]);
            return t;
        }
    },
    eO = function (e) {
        return eP(e) ? e.toLowerCase() : e;
    },
    eA = function (e) {
        return eP(e) ? eD(/[^\d\.]/g, e).split(".")[0] : void 0;
    },
    eR = function (e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var i = e[t];
                typeof i == h && 2 == i.length ? (this[i[0]] = i[1]) : (this[i] = void 0);
            }
        return this;
    },
    eD = function (e, t) {
        return eP(t) ? t.replace(e, "") : t;
    },
    eF = function (e) {
        return eD(/\\?\"/g, e);
    },
    eU = function (e, t) {
        return (e = eD(/^\s\s*/, String(e))), typeof t === f ? e : e.substring(0, t);
    },
    eH = function (e, t) {
        if (e && t)
            for (var i, r, n, o, s, a, l = 0; l < t.length && !s; ) {
                var c = t[l],
                    d = t[l + 1];
                for (i = r = 0; i < c.length && !s && c[i]; )
                    if ((s = c[i++].exec(e)))
                        for (n = 0; n < d.length; n++)
                            (a = s[++r]),
                                typeof (o = d[n]) === h && o.length > 0
                                    ? 2 === o.length
                                        ? typeof o[1] == u
                                            ? (this[o[0]] = o[1].call(this, a))
                                            : (this[o[0]] = o[1])
                                        : o.length >= 3 &&
                                          (typeof o[1] !== u || (o[1].exec && o[1].test)
                                              ? 3 == o.length
                                                  ? (this[o[0]] = a ? a.replace(o[1], o[2]) : void 0)
                                                  : 4 == o.length
                                                    ? (this[o[0]] = a ? o[3].call(this, a.replace(o[1], o[2])) : void 0)
                                                    : o.length > 4 &&
                                                      (this[o[0]] = a
                                                          ? o[3].apply(this, [a.replace(o[1], o[2])].concat(o.slice(4)))
                                                          : void 0)
                                              : o.length > 3
                                                ? (this[o[0]] = a ? o[1].apply(this, o.slice(2)) : void 0)
                                                : (this[o[0]] = a ? o[1].call(this, a, o[2]) : void 0))
                                    : (this[o] = a || void 0);
                l += 2;
            }
    },
    eN = function (e, t) {
        for (var i in t)
            if (typeof t[i] === h && t[i].length > 0) {
                for (var r = 0; r < t[i].length; r++) if (ek(t[i][r], e)) return "?" === i ? void 0 : i;
            } else if (ek(t[i], e)) return "?" === i ? void 0 : i;
        return t.hasOwnProperty("*") ? t["*"] : e;
    },
    eV = {
        ME: "4.90",
        "NT 3.51": "3.51",
        "NT 4.0": "4.0",
        2e3: ["5.0", "5.01"],
        XP: ["5.1", "5.2"],
        Vista: "6.0",
        7: "6.1",
        8: "6.2",
        8.1: "6.3",
        10: ["6.4", "10.0"],
        NT: "",
    },
    eB = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
    },
    ez = {
        Chrome: "Google Chrome",
        Edge: "Microsoft Edge",
        "Edge WebView2": "Microsoft Edge WebView2",
        "Chrome WebView": "Android WebView",
        "Chrome Headless": "HeadlessChrome",
        "Huawei Browser": "HuaweiBrowser",
        "MIUI Browser": "Miui Browser",
        "Opera Mobi": "OperaMobile",
        Yandex: "YaBrowser",
    },
    e$ = {
        browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [b, [y, e_ + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [b, [y, eg + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [b, [y, "Edge"]],
            [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [y, b],
            [/opios[\/ ]+([\w\.]+)/i],
            [b, [y, ev + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [b, [y, ev + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [b, [y, ev]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [b, [y, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [b, [y, "Maxthon"]],
            [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(atlas|flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon|otter|dooble|(?:hi|lg |ovi|qute)browser|palemoon)\/v?([-\w\.]+)/i,
                /(brave)(?: chrome)?\/([\d\.]+)/i,
                /(aloha|heytap|ovi|115|surf|qwant)browser\/([\d\.]+)/i,
                /(qwant)(?:ios|mobile)\/([\d\.]+)/i,
                /(ecosia|weibo)(?:__| \w+@)([\d\.]+)/i,
            ],
            [y, b],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [b, [y, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [b, [y, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [b, [y, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [b, [y, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [b, [y, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [b, [y, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [b, [y, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [b, [y, "Smart " + et + eb]],
            [/(av(?:ast|g|ira))\/([\w\.]+)/i],
            [[y, /(.+)/, "$1 Secure" + eb], b],
            [/norton\/([\w\.]+)/i],
            [b, [y, "Norton Private" + eb]],
            [/\bfocus\/([\w\.]+)/i],
            [b, [y, eC + " Focus"]],
            [/ mms\/([\w\.]+)$/i],
            [b, [y, ev + " Neon"]],
            [/ opt\/([\w\.]+)$/i],
            [b, [y, ev + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [b, [y, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [b, [y, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [b, [y, ev + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [b, [y, "MIUI" + eb]],
            [/fxios\/([\w\.-]+)/i],
            [b, [y, e_ + eC]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [b, [y, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[y, /(.+)/, "$1Browser"], b],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[y, /(.+)/, "$1" + eb], b],
            [/samsungbrowser\/([\w\.]+)/i],
            [b, [y, el + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [b, [y, ew + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[y, ew + " Mobile"], b],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [y, b],
            [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [y],
            [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
            [b, y],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[y, ey], b, [w, O]],
            [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /(daum)apps[\/ ]([\w\.]+)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(bing)(?:web|sapphire)\/([\w\.]+)/i,
                /(instagram|snapchat|klarna)[\/ ]([-\w\.]+)/i,
            ],
            [y, b, [w, O]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [b, [y, "GSA"], [w, O]],
            [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
            [b, [y, "TikTok"], [w, O]],
            [/\[(linkedin)app\]/i],
            [y, [w, O]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [[y, /(.+)/, "Zalo"], b, [w, O]],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [y, b],
            [/ome-(lighthouse)$/i],
            [y, [w, "fetcher"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [b, [y, ep + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [b, [y, eg + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[y, ep + " WebView"], b],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [b, [y, "Android" + eb]],
            [/chrome\/([\w\.]+) mobile/i],
            [b, [y, e_ + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [y, b],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [b, [y, e_ + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [[y, e_ + "Safari"]],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [b, y],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [y, [b, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [y, b],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [[y, e_ + eC], b],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[y, "Netscape"], b],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [y, b],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [b, [y, eC + " Reality"]],
            [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+(?= .+rv\:.+gecko\/\d+)|[0-4][\w\.]+(?!.+compatible))/i,
                /(amaya|dillo|doris|icab|ladybird|lynx|mosaic|netsurf|obigo|polaris|w3m|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /\b(links) \(([\w\.]+)/i,
            ],
            [y, [b, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [y, [b, /[^\d\.]+./, ""]],
        ],
        cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[L, "amd64"]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[L, "ia32"]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[L, "arm64"]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[L, "armhf"]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[L, "arm"]],
            [/ sun4\w[;\)]/i],
            [[L, "sparc"]],
            [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                /((ppc|powerpc)(64)?)( mac|;|\))/i,
                /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
            ],
            [[L, /ower/, "", eO]],
            [/mc680.0/i],
            [[L, "68k"]],
            [/winnt.+\[axp/i],
            [[L, "alpha"]],
        ],
        device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [S, [_, el], [w, k]],
            [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
                /sec-(sgh\w+)/i,
            ],
            [S, [_, el], [w, T]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [S, [_, Y], [w, T]],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [S, [_, Y], [w, k]],
            [/(macintosh);/i],
            [S, [_, Y]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [S, [_, ec], [w, T]],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [S, [_, ei], [w, k]],
            [/honor([-\w ]+)[;\)]/i],
            [S, [_, ei], [w, T]],
            [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [S, [_, ee], [w, k]],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [S, [_, ee], [w, T]],
            [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
                [S, /_/g, " "],
                [_, eu],
                [w, k],
            ],
            [
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
            ],
            [
                [S, /_/g, " "],
                [_, eu],
                [w, T],
            ],
            [
                /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [S, [_, es], [w, T]],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [S, [_, ea], [w, T]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [S, [_, eN, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": ea }], [w, k]],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [S, [_, "BLU"], [w, T]],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [S, [_, "Vivo"], [w, T]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [S, [_, "Realme"], [w, T]],
            [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [S, [_, et], [w, k]],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [S, [_, et], [w, T]],
            [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
                /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
            ],
            [S, [_, en], [w, T]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [S, [_, en], [w, k]],
            [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [S, [_, "LG"], [w, k]],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
                /\blg-?([\d\w]+) bui/i,
            ],
            [S, [_, "LG"], [w, T]],
            [/(nokia) (t[12][01])/i],
            [_, S, [w, k]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
                [S, /_/g, " "],
                [w, T],
                [_, "Nokia"],
            ],
            [/(pixel (c|tablet))\b/i],
            [S, [_, J], [w, k]],
            [
                /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
            ],
            [S, [_, J], [w, T]],
            [/(google) (pixelbook( go)?)/i],
            [_, S],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [S, [_, ed], [w, T]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
                [S, "Xperia Tablet"],
                [_, ed],
                [w, k],
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [S, [_, q], [w, k]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
                [S, /(.+)/g, "Fire Phone $1"],
                [_, q],
                [w, T],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [S, _, [w, k]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [S, [_, X], [w, T]],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [S, [_, Q], [w, k]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [S, [_, Q], [w, T]],
            [/(nexus 9)/i],
            [S, [_, "HTC"], [w, k]],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [_, [S, /_/g, " "], [w, T]],
            [
                /tcl (xess p17aa)/i,
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [S, [_, "TCL"], [w, k]],
            [
                /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [S, [_, "TCL"], [w, T]],
            [/(itel) ((\w+))/i],
            [[_, eO], S, [w, eN, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [S, [_, "Acer"], [w, k]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [S, [_, "Meizu"], [w, T]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [S, [_, "Ulefone"], [w, T]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [S, [_, "Energizer"], [w, T]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [S, [_, "Cat"], [w, T]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [S, [_, "Smartfren"], [w, T]],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [S, [_, "Nothing"], [w, T]],
            [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [S, [_, "Archos"], [w, k]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [S, [_, "Archos"], [w, T]],
            [/; (n159v)/i],
            [S, [_, "HMD"], [w, T]],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [_, S, [w, k]],
            [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(oppo) ?([\w ]+) bui/i,
                /(hisense) ([ehv][\w ]+)\)/i,
                /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
            ],
            [_, S, [w, T]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [_, S, [w, k]],
            [/(surface duo)/i],
            [S, [_, er], [w, k]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [S, [_, "Fairphone"], [w, T]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [S, [_, eo], [w, k]],
            [/(sprint) (\w+)/i],
            [_, S, [w, T]],
            [/(kin\.[onetw]{3})/i],
            [
                [S, /\./g, " "],
                [_, er],
                [w, T],
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [S, [_, eh], [w, k]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [S, [_, eh], [w, T]],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [_, [w, x]],
            [/hbbtv.+maple;(\d+)/i],
            [
                [S, /^/, "SmartTV"],
                [_, el],
                [w, x],
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [_, S, [w, x]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
                [_, "LG"],
                [w, x],
            ],
            [/(apple) ?tv/i],
            [_, [S, Y + " TV"], [w, x]],
            [/crkey.*devicetype\/chromecast/i],
            [
                [S, em + " Third Generation"],
                [_, J],
                [w, x],
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
                [S, /^/, "Chromecast "],
                [_, J],
                [w, x],
            ],
            [/fuchsia.*crkey/i],
            [
                [S, em + " Nest Hub"],
                [_, J],
                [w, x],
            ],
            [/crkey/i],
            [
                [S, em],
                [_, J],
                [w, x],
            ],
            [/(portaltv)/i],
            [S, [_, ey], [w, x]],
            [/droid.+aft(\w+)( bui|\))/i],
            [S, [_, q], [w, x]],
            [/(shield \w+ tv)/i],
            [S, [_, eo], [w, x]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [S, [_, ec], [w, x]],
            [/(bravia[\w ]+)( bui|\))/i],
            [S, [_, ed], [w, x]],
            [/(mi(tv|box)-?\w+) bui/i],
            [S, [_, eu], [w, x]],
            [/Hbbtv.*(technisat) (.*);/i],
            [_, S, [w, x]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
                [_, /.+\/(\w+)/, "$1", eN, { LG: "lge" }],
                [S, eU],
                [w, x],
            ],
            [/(playstation \w+)/i],
            [S, [_, ed], [w, I]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [S, [_, er], [w, I]],
            [
                /(ouya)/i,
                /(nintendo) (\w+)/i,
                /(retroid) (pocket ([^\)]+))/i,
                /(valve).+(steam deck)/i,
                /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
            ],
            [[_, eN, { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" }], S, [w, I]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [S, [_, el], [w, P]],
            [/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [_, S, [w, P]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [S, [_, ea], [w, P]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [S, [_, Y], [w, P]],
            [/(opwwe\d{3})/i],
            [S, [_, es], [w, P]],
            [/(moto 360)/i],
            [S, [_, en], [w, P]],
            [/(smartwatch 3)/i],
            [S, [_, ed], [w, P]],
            [/(g watch r)/i],
            [S, [_, "LG"], [w, P]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [S, [_, eh], [w, P]],
            [/droid.+; (glass) \d/i],
            [S, [_, J], [w, "xr"]],
            [/(pico) ([\w ]+) os\d/i],
            [_, S, [w, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [S, [_, ey], [w, "xr"]],
            [/mobile vr; rv.+firefox/i],
            [[w, "xr"]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [_, [w, M]],
            [/(aeobc)\b/i],
            [S, [_, q], [w, M]],
            [/(homepod).+mac os/i],
            [S, [_, Y], [w, M]],
            [/windows iot/i],
            [[w, M]],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [S, [w, x]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [[w, x]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [S, [w, eN, { mobile: "Mobile", xr: "VR", "*": k }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[w, k]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[w, T]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [S, [_, "Generic"]],
        ],
        engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [b, [y, eg + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [y, b],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [b, [y, "Blink"]],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
            ],
            [y, b],
            [/ladybird\//i],
            [[y, "LibWeb"]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [b, y],
        ],
        os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
                [y, /N/, "R"],
                [b, eN, eV],
            ],
            [
                /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
                /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
            ],
            [y, b],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
                [b, /(;|\))/g, "", eN, eV],
                [y, eL],
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [y, b],
            [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
                /\btvos ?([\w\.]+)/i,
                /cfnetwork\/.+darwin/i,
            ],
            [
                [b, /_/g, "."],
                [y, "iOS"],
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
                [y, "macOS"],
                [b, /_/g, "."],
            ],
            [/android ([\d\.]+).*crkey/i],
            [b, [y, em + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [b, [y, em + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [b, [y, em + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [b, [y, em + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [b, [y, em]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [b, y],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[y, /(.+)/, "$1 Touch"], b],
            [
                /(harmonyos)[\/ ]?([\d\.]*)/i,
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
            ],
            [y, b],
            [/\(bb(10);/i],
            [b, [y, X]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [b, [y, "Symbian"]],
            [
                /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
            ],
            [b, [y, eC + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [b, [y, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
                [
                    b,
                    eN,
                    {
                        25: "120",
                        24: "108",
                        23: "94",
                        22: "87",
                        6: "79",
                        5: "68",
                        4: "53",
                        3: "38",
                        2: "538",
                        1: "537",
                        "*": "TV",
                    },
                ],
                [y, "webOS"],
            ],
            [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
            [b, [y, "watchOS"]],
            [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
            [b, [y, "Chrome OS"]],
            [/kepler ([\w\.]+); (aft|aeo)/i],
            [b, [y, "Vega OS"]],
            [
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) (\w+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /(pico) .+os([\w\.]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /linux.+(mint)[\/\(\) ]?([\w\.]*)/i,
                /(mageia|vectorlinux|fuchsia|arcaos|arch(?= ?linux))[;l ]([\d\.]*)/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire|knoppix)(?: gnu[\/ ]linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /\b(aix)[; ]([1-9\.]{0,4})/i,
                /(hurd|linux|morphos)(?: (?:arm|x86|ppc)\w*| ?)([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) ?(r\d)?/i,
            ],
            [y, b],
            [/(sunos) ?([\d\.]*)/i],
            [[y, "Solaris"], b],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [y, b],
        ],
    },
    eZ =
        ((n = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }),
        eR.call(n.init, [
            [m, [y, b, E, w]],
            ["cpu", [L]],
            [g, [w, S, _]],
            [C, [y, b]],
            ["os", [y, b]],
        ]),
        eR.call(n.isIgnore, [
            [m, [b, E]],
            [C, [b]],
            ["os", [b]],
        ]),
        eR.call(n.isIgnoreRgx, [
            [m, / ?browser$/i],
            ["os", / ?os$/i],
        ]),
        eR.call(n.toString, [
            [m, [y, b]],
            ["cpu", [L]],
            [g, [_, S]],
            [C, [y, b]],
            ["os", [y, b]],
        ]),
        n),
    eW = function (e, t) {
        var i = eZ.init[t],
            r = eZ.isIgnore[t] || 0,
            n = eZ.isIgnoreRgx[t] || 0,
            o = eZ.toString[t] || 0;
        function s() {
            eR.call(this, i);
        }
        return (
            (s.prototype.getItem = function () {
                return e;
            }),
            (s.prototype.withClientHints = function () {
                return eS
                    ? eS.getHighEntropyValues(G).then(function (t) {
                          return e.setCH(new ej(t, !1)).parseCH().get();
                      })
                    : e.parseCH().get();
            }),
            (s.prototype.withFeatureCheck = function () {
                return e.detectFeature().get();
            }),
            t != v &&
                ((s.prototype.is = function (e) {
                    var t = !1;
                    for (var i in this)
                        if (
                            this.hasOwnProperty(i) &&
                            !ek(r, i) &&
                            eO(n ? eD(n, this[i]) : this[i]) == eO(n ? eD(n, e) : e)
                        ) {
                            if (((t = !0), e != f)) break;
                        } else if (e == f && t) {
                            t = !t;
                            break;
                        }
                    return t;
                }),
                (s.prototype.toString = function () {
                    var e = "";
                    for (var t in o) typeof this[o[t]] !== f && (e += (e ? " " : "") + this[o[t]]);
                    return e || f;
                })),
            (s.prototype.then = function (e) {
                var t = this,
                    i = function () {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    };
                i.prototype = {
                    is: s.prototype.is,
                    toString: s.prototype.toString,
                    withClientHints: s.prototype.withClientHints,
                    withFeatureCheck: s.prototype.withFeatureCheck,
                };
                var r = new i();
                return e(r), r;
            }),
            new s()
        );
    };
function ej(e, t) {
    if (((e = e || {}), eR.call(this, G), t))
        eR.call(this, [
            [A, eM(e[N])],
            [D, eM(e[V])],
            [T, /\?1/.test(e[Z])],
            [S, eF(e[W])],
            [F, eF(e[j])],
            [U, eF(e[K])],
            [L, eF(e[B])],
            [R, eM(e[$])],
            [H, eF(e[z])],
        ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== f && (this[i] = e[i]);
}
function eK(e, t, i, r) {
    return (
        eR.call(this, [
            ["itemType", e],
            ["ua", t],
            ["uaCH", r],
            ["rgxMap", i],
            ["data", eW(this, e)],
        ]),
        this
    );
}
function eG(e, t, i) {
    if (
        (typeof e === h
            ? (ex(e, !0) ? (typeof t === h && (i = t), (t = e)) : ((i = e), (t = void 0)), (e = void 0))
            : typeof e !== p || ex(t, !0) || ((i = t), (t = void 0)),
        i)
    )
        if (typeof i.append === u) {
            var r = {};
            i.forEach(function (e, t) {
                r[String(t).toLowerCase()] = e;
            }),
                (i = r);
        } else {
            var n = {};
            for (var o in i) i.hasOwnProperty(o) && (n[String(o).toLowerCase()] = i[o]);
            i = n;
        }
    if (!(this instanceof eG)) return new eG(e, t, i).getResult();
    var s = typeof e === p ? e : i && i[d] ? i[d] : eE && eE.userAgent ? eE.userAgent : "",
        a = new ej(i, !0),
        l = t ? eI(e$, t) : e$,
        c = function (e) {
            return e == v
                ? function () {
                      return new eK(e, s, l, a)
                          .set("ua", s)
                          .set(m, this.getBrowser())
                          .set("cpu", this.getCPU())
                          .set(g, this.getDevice())
                          .set(C, this.getEngine())
                          .set("os", this.getOS())
                          .get();
                  }
                : function () {
                      return new eK(e, s, l[e], a).parseUA().get();
                  };
        };
    return (
        eR
            .call(this, [
                ["getBrowser", c(m)],
                ["getCPU", c("cpu")],
                ["getDevice", c(g)],
                ["getEngine", c(C)],
                ["getOS", c("os")],
                ["getResult", c(v)],
                [
                    "getUA",
                    function () {
                        return s;
                    },
                ],
                [
                    "setUA",
                    function (e) {
                        return eP(e) && (s = eU(e, 500)), this;
                    },
                ],
            ])
            .setUA(s),
        this
    );
}
(eK.prototype.get = function (e) {
    return e ? (this.data.hasOwnProperty(e) ? this.data[e] : void 0) : this.data;
}),
    (eK.prototype.set = function (e, t) {
        return (this.data[e] = t), this;
    }),
    (eK.prototype.setCH = function (e) {
        return (this.uaCH = e), this;
    }),
    (eK.prototype.detectFeature = function () {
        if (eE && eE.userAgent == this.ua)
            switch (this.itemType) {
                case m:
                    eE.brave && typeof eE.brave.isBrave == u && this.set(y, "Brave");
                    break;
                case g:
                    !this.get(w) && eS && eS[T] && this.set(w, T),
                        "Macintosh" == this.get(S) &&
                            eE &&
                            typeof eE.standalone !== f &&
                            eE.maxTouchPoints &&
                            eE.maxTouchPoints > 2 &&
                            this.set(S, "iPad").set(w, k);
                    break;
                case "os":
                    !this.get(y) && eS && eS[F] && this.set(y, eS[F]);
                    break;
                case v:
                    var e = this.data,
                        t = function (t) {
                            return e[t].getItem().detectFeature().get();
                        };
                    this.set(m, t(m)).set("cpu", t("cpu")).set(g, t(g)).set(C, t(C)).set("os", t("os"));
            }
        return this;
    }),
    (eK.prototype.parseUA = function () {
        switch ((this.itemType != v && eH.call(this.data, this.ua, this.rgxMap), this.itemType)) {
            case m:
                this.set(E, eA(this.get(b)));
                break;
            case "os":
                if ("iOS" == this.get(y) && "18.6" == this.get(b)) {
                    var e = /\) Version\/([\d\.]+)/.exec(this.ua);
                    e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(b, e[1]);
                }
        }
        return this;
    }),
    (eK.prototype.parseCH = function () {
        var e = this.uaCH,
            t = this.rgxMap;
        switch (this.itemType) {
            case m:
            case C:
                var i,
                    r = e[D] || e[A];
                if (r)
                    for (var n = 0; n < r.length; n++) {
                        var o = r[n].brand || r[n],
                            s = r[n].version;
                        this.itemType == m &&
                            !/not.a.brand/i.test(o) &&
                            (!i || (/Chrom/.test(i) && o != ef) || (i == eg && /WebView2/.test(o))) &&
                            ((o = eN(o, ez)),
                            ((i = this.get(y)) && !/Chrom/.test(i) && /Chrom/.test(o)) ||
                                this.set(y, o).set(b, s).set(E, eA(s)),
                            (i = o)),
                            this.itemType == C && o == ef && this.set(b, s);
                    }
                break;
            case "cpu":
                var a = e[L];
                a && (a && "64" == e[H] && (a += "64"), eH.call(this.data, a + ";", t));
                break;
            case g:
                if ((e[T] && this.set(w, T), e[S] && (this.set(S, e[S]), !this.get(w) || !this.get(_)))) {
                    var l,
                        c = {};
                    eH.call(c, "droid 9; " + e[S] + ")", t),
                        !this.get(w) && c.type && this.set(w, c.type),
                        !this.get(_) && c.vendor && this.set(_, c.vendor);
                }
                if (e[R]) {
                    if ("string" != typeof e[R]) for (var d = 0; !l && d < e[R].length; ) l = eN(e[R][d++], eB);
                    else l = eN(e[R], eB);
                    this.set(w, l);
                }
                break;
            case "os":
                var u = e[F];
                if (u) {
                    var h = e[U];
                    u == eL && (h = parseInt(eA(h), 10) >= 13 ? "11" : "10"), this.set(y, u).set(b, h);
                }
                this.get(y) == eL && "Xbox" == e[S] && this.set(y, "Xbox").set(b, void 0);
                break;
            case v:
                var p = this.data,
                    f = function (t) {
                        return p[t].getItem().setCH(e).parseCH().get();
                    };
                this.set(m, f(m)).set("cpu", f("cpu")).set(g, f(g)).set(C, f(C)).set("os", f("os"));
        }
        return this;
    }),
    (eG.VERSION = "2.0.9"),
    (eG.BROWSER = eT([y, b, E, w])),
    (eG.CPU = eT([L])),
    (eG.DEVICE = eT([S, _, w, I, T, x, k, P, M])),
    (eG.ENGINE = eG.OS = eT([y, b]));
var eq = class {
    checkWebRtcSupport() {
        if ("u" < typeof window) return !1;
        let e =
                "RTCPeerConnection" in window ||
                "webkitRTCPeerConnection" in window ||
                "mozRTCPeerConnection" in window,
            t = "u" > typeof navigator && navigator.mediaDevices?.getUserMedia !== void 0;
        return e && t;
    }
    getBrowserInfo() {
        let e = "u" > typeof navigator ? navigator.userAgent : "",
            t = new eG(e).getResult();
        return {
            userAgent: e,
            isWebRtcSupported: this.checkWebRtcSupport(),
            browser: { name: t.browser.name, version: t.browser.version },
            os: { name: t.os.name, version: t.os.version },
            device: { model: t.device.model, type: t.device.type, vendor: t.device.vendor },
            engine: { name: t.engine.name, version: t.engine.version },
            cpu: { architecture: t.cpu.architecture },
        };
    }
};
let eY = new Set(["model", "platformVersion", "fullVersionList", "brands", "platform"]);
function eQ() {
    let e = new eG().getResult();
    return {
        device: { model: e.device.model },
        os: { name: e.os.name, version: e.os.version },
        browser: { name: e.browser.name, version: e.browser.version },
    };
}
function eX(e) {
    return e?.trim() || void 0;
}
async function eJ(e) {
    var t, i;
    let r,
        n = await e.getHighEntropyValues(Array.from(eY)),
        { name: o, version: s } =
            ((t = n.fullVersionList),
            (i = e.brands),
            (r = t?.[0] || i?.[0]),
            { name: eX(r?.brand), version: eX(r?.version) });
    return {
        device: { model: eX(n.model) },
        os: { name: eX(n.platform), version: eX(n.platformVersion) },
        browser: { name: o, version: s },
    };
}
async function e1() {
    var e;
    if ("u" < typeof navigator) return { device: {}, os: {}, browser: {} };
    let t = navigator,
        i = eQ();
    if (!t.userAgentData?.getHighEntropyValues || "function" != typeof t.userAgentData.getHighEntropyValues) return i;
    try {
        return (
            (e = await eJ(t.userAgentData)),
            {
                device: { model: e.device?.model || i.device.model },
                os: { name: e.os?.name || i.os.name, version: e.os?.version || i.os.version },
                browser: ((e) => {
                    let t = "u" > typeof navigator ? navigator.userAgent : "",
                        i = eQ();
                    if (!t) return e;
                    try {
                        return { ...e, name: i.browser.name, version: i.browser.version };
                    } catch {
                        return { ...e, name: "Unknown", version: "Unknown" };
                    }
                })({ name: e.browser?.name || i.browser.name, version: e.browser?.version || i.browser.version }),
            }
        );
    } catch {
        return i;
    }
}
let e2 = "thumbmark",
    e3 = "https://api.thumbmarkjs.com",
    e0 = {
        exclude: [],
        include: [],
        stabilize: ["private", "iframe"],
        logging: !0,
        timeout: 5e3,
        cache_api_call: !0,
        cache_lifetime_in_ms: 0,
        performance: !1,
        experimental: !1,
        property_name_factory: (e) => `${e2}_${e}`,
    };
({ ...e0 });
let e6 = {
        private: [
            { exclude: ["canvas"], browsers: ["firefox", "safari>=17", "brave"] },
            { exclude: ["audio"], browsers: ["samsungbrowser", "safari"] },
            { exclude: ["fonts"], browsers: ["firefox"] },
            {
                exclude: [
                    "audio.sampleHash",
                    "hardware.deviceMemory",
                    "header.acceptLanguage.q",
                    "system.hardwareConcurrency",
                    "plugins",
                ],
                browsers: ["brave"],
            },
            { exclude: ["tls.extensions"], browsers: ["firefox", "chrome", "safari"] },
            { exclude: ["header.acceptLanguage"], browsers: ["edge", "chrome"] },
        ],
        iframe: [
            { exclude: ["system.applePayVersion", "system.cookieEnabled"], browsers: ["safari"] },
            { exclude: ["permissions"] },
        ],
        vpn: [{ exclude: ["ip"] }],
    },
    e5 = "u" > typeof window ? window.OfflineAudioContext || window.webkitOfflineAudioContext : null;
function e4(e, t, i) {
    let r = [];
    for (let t = 0; t < e[0].data.length; t++) {
        let i = [];
        for (let r = 0; r < e.length; r++) i.push(e[r].data[t]);
        r.push(
            (function (e) {
                if (0 === e.length) return 0;
                let t = {};
                for (let i of e) t[i] = (t[i] || 0) + 1;
                let i = e[0];
                for (let e in t) t[e] > t[i] && (i = parseInt(e, 10));
                return i;
            })(i),
        );
    }
    return new ImageData(new Uint8ClampedArray(r), t, i);
}
function e9(e) {
    return (
        (e ^= e >>> 16),
        (e = Math.imul(e, 0x85ebca6b)),
        (e ^= e >>> 13),
        (e = Math.imul(e, 0xc2b2ae35)),
        (e ^= e >>> 16) >>> 0
    );
}
let e8 = new Uint32Array([0x239b961b, 0xab0e9789, 0x38b34ae5, 0xa1e38b93]);
function e7(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function te(e, t = 0) {
    var i;
    if (
        ((t = t ? 0 | t : 0),
        "string" == typeof e &&
            (e = (function (e) {
                if ("u" > typeof TextEncoder) return new TextEncoder().encode(e).buffer;
                let t = [];
                for (let i = 0; i < e.length; i++) {
                    let r = e.charCodeAt(i);
                    r < 128
                        ? t.push(r)
                        : r < 2048
                          ? t.push(192 | (r >> 6), 128 | (63 & r))
                          : r < 55296 || r >= 57344
                            ? t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
                            : (i++,
                              (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(i)))),
                              t.push(240 | (r >> 18), 128 | ((r >> 12) & 63), 128 | ((r >> 6) & 63), 128 | (63 & r)));
                }
                return new Uint8Array(t).buffer;
            })(e)),
        !(e instanceof ArrayBuffer))
    )
        throw TypeError("Expected key to be ArrayBuffer or string");
    let r = new Uint32Array([t, t, t, t]);
    return (
        (function (e, t) {
            let i = (e.byteLength / 16) | 0,
                r = new Uint32Array(e, 0, 4 * i);
            for (let e = 0; e < i; e++) {
                let i = r.subarray(4 * e, 4 * (e + 1));
                (i[0] = Math.imul(i[0], e8[0])),
                    (i[0] = e7(i[0], 15)),
                    (i[0] = Math.imul(i[0], e8[1])),
                    (t[0] = t[0] ^ i[0]),
                    (t[0] = e7(t[0], 19)),
                    (t[0] = t[0] + t[1]),
                    (t[0] = Math.imul(t[0], 5) + 0x561ccd1b),
                    (i[1] = Math.imul(i[1], e8[1])),
                    (i[1] = e7(i[1], 16)),
                    (i[1] = Math.imul(i[1], e8[2])),
                    (t[1] = t[1] ^ i[1]),
                    (t[1] = e7(t[1], 17)),
                    (t[1] = t[1] + t[2]),
                    (t[1] = Math.imul(t[1], 5) + 0xbcaa747),
                    (i[2] = Math.imul(i[2], e8[2])),
                    (i[2] = e7(i[2], 17)),
                    (i[2] = Math.imul(i[2], e8[3])),
                    (t[2] = t[2] ^ i[2]),
                    (t[2] = e7(t[2], 15)),
                    (t[2] = t[2] + t[3]),
                    (t[2] = Math.imul(t[2], 5) + 0x96cd1c35),
                    (i[3] = Math.imul(i[3], e8[3])),
                    (i[3] = e7(i[3], 18)),
                    (i[3] = Math.imul(i[3], e8[0])),
                    (t[3] = t[3] ^ i[3]),
                    (t[3] = e7(t[3], 13)),
                    (t[3] = t[3] + t[0]),
                    (t[3] = Math.imul(t[3], 5) + 0x32ac3b17);
            }
        })(e, r),
        (function (e, t) {
            let i = (e.byteLength / 16) | 0,
                r = e.byteLength % 16,
                n = new Uint32Array(4),
                o = new Uint8Array(e, 16 * i, r);
            switch (r) {
                case 15:
                    n[3] = n[3] ^ (o[14] << 16);
                case 14:
                    n[3] = n[3] ^ (o[13] << 8);
                case 13:
                    (n[3] = n[3] ^ o[12]),
                        (n[3] = Math.imul(n[3], e8[3])),
                        (n[3] = e7(n[3], 18)),
                        (n[3] = Math.imul(n[3], e8[0])),
                        (t[3] = t[3] ^ n[3]);
                case 12:
                    n[2] = n[2] ^ (o[11] << 24);
                case 11:
                    n[2] = n[2] ^ (o[10] << 16);
                case 10:
                    n[2] = n[2] ^ (o[9] << 8);
                case 9:
                    (n[2] = n[2] ^ o[8]),
                        (n[2] = Math.imul(n[2], e8[2])),
                        (n[2] = e7(n[2], 17)),
                        (n[2] = Math.imul(n[2], e8[3])),
                        (t[2] = t[2] ^ n[2]);
                case 8:
                    n[1] = n[1] ^ (o[7] << 24);
                case 7:
                    n[1] = n[1] ^ (o[6] << 16);
                case 6:
                    n[1] = n[1] ^ (o[5] << 8);
                case 5:
                    (n[1] = n[1] ^ o[4]),
                        (n[1] = Math.imul(n[1], e8[1])),
                        (n[1] = e7(n[1], 16)),
                        (n[1] = Math.imul(n[1], e8[2])),
                        (t[1] = t[1] ^ n[1]);
                case 4:
                    n[0] = n[0] ^ (o[3] << 24);
                case 3:
                    n[0] = n[0] ^ (o[2] << 16);
                case 2:
                    n[0] = n[0] ^ (o[1] << 8);
                case 1:
                    (n[0] = n[0] ^ o[0]),
                        (n[0] = Math.imul(n[0], e8[0])),
                        (n[0] = e7(n[0], 15)),
                        (n[0] = Math.imul(n[0], e8[1])),
                        (t[0] = t[0] ^ n[0]);
            }
        })(e, r),
        (i = e),
        (r[0] = r[0] ^ i.byteLength),
        (r[1] = r[1] ^ i.byteLength),
        (r[2] = r[2] ^ i.byteLength),
        (r[3] = r[3] ^ i.byteLength),
        (r[0] = (r[0] + r[1]) | 0),
        (r[0] = (r[0] + r[2]) | 0),
        (r[0] = (r[0] + r[3]) | 0),
        (r[1] = (r[1] + r[0]) | 0),
        (r[2] = (r[2] + r[0]) | 0),
        (r[3] = (r[3] + r[0]) | 0),
        (r[0] = e9(r[0])),
        (r[1] = e9(r[1])),
        (r[2] = e9(r[2])),
        (r[3] = e9(r[3])),
        (r[0] = (r[0] + r[1]) | 0),
        (r[0] = (r[0] + r[2]) | 0),
        (r[0] = (r[0] + r[3]) | 0),
        (r[1] = (r[1] + r[0]) | 0),
        (r[2] = (r[2] + r[0]) | 0),
        (r[3] = (r[3] + r[0]) | 0),
        Array.from(new Uint8Array(r.buffer))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("")
    );
}
async function tt(e) {
    for (var t; !document.body; ) await new Promise((e) => setTimeout(e, 50, void 0));
    let i = document.createElement("iframe");
    i.setAttribute("frameBorder", "0");
    let r = i.style;
    r.setProperty("position", "fixed"),
        r.setProperty("display", "block", "important"),
        r.setProperty("visibility", "visible"),
        r.setProperty("border", "0"),
        r.setProperty("opacity", "0"),
        (i.src = "about:blank"),
        document.body.appendChild(i);
    let n = i.contentDocument || (null == (t = i.contentWindow) ? void 0 : t.document);
    if (!n) throw Error("Iframe document is not accessible");
    e({ iframe: n }),
        setTimeout(() => {
            document.body.removeChild(i);
        }, 0);
}
let ti = [
        "Arial",
        "Arial Black",
        "Arial Narrow",
        "Arial Rounded MT",
        "Arimo",
        "Archivo",
        "Barlow",
        "Bebas Neue",
        "Bitter",
        "Bookman",
        "Calibri",
        "Cabin",
        "Candara",
        "Century",
        "Century Gothic",
        "Comic Sans MS",
        "Constantia",
        "Courier",
        "Courier New",
        "Crimson Text",
        "DM Mono",
        "DM Sans",
        "DM Serif Display",
        "DM Serif Text",
        "Dosis",
        "Droid Sans",
        "Exo",
        "Fira Code",
        "Fira Sans",
        "Franklin Gothic Medium",
        "Garamond",
        "Geneva",
        "Georgia",
        "Gill Sans",
        "Helvetica",
        "Impact",
        "Inconsolata",
        "Indie Flower",
        "Inter",
        "Josefin Sans",
        "Karla",
        "Lato",
        "Lexend",
        "Lucida Bright",
        "Lucida Console",
        "Lucida Sans Unicode",
        "Manrope",
        "Merriweather",
        "Merriweather Sans",
        "Montserrat",
        "Myriad",
        "Noto Sans",
        "Nunito",
        "Nunito Sans",
        "Open Sans",
        "Optima",
        "Orbitron",
        "Oswald",
        "Pacifico",
        "Palatino",
        "Perpetua",
        "PT Sans",
        "PT Serif",
        "Poppins",
        "Prompt",
        "Public Sans",
        "Quicksand",
        "Rajdhani",
        "Recursive",
        "Roboto",
        "Roboto Condensed",
        "Rockwell",
        "Rubik",
        "Segoe Print",
        "Segoe Script",
        "Segoe UI",
        "Sora",
        "Source Sans Pro",
        "Space Mono",
        "Tahoma",
        "Taviraj",
        "Times",
        "Times New Roman",
        "Titillium Web",
        "Trebuchet MS",
        "Ubuntu",
        "Varela Round",
        "Verdana",
        "Work Sans",
    ],
    tr = ["monospace", "sans-serif", "serif"];
function tn(e, t) {
    return (e.font = `72px ${t}`), e.measureText("WwMmLli0Oo").width;
}
let to = (e, t, i, r) => {
        let n = (i - t) / r,
            o = 0;
        for (let i = 0; i < r; i++) o += e(t + (i + 0.5) * n);
        return o * n;
    },
    ts = [
        "accelerometer",
        "accessibility",
        "accessibility-events",
        "ambient-light-sensor",
        "background-fetch",
        "background-sync",
        "bluetooth",
        "camera",
        "clipboard-read",
        "clipboard-write",
        "device-info",
        "display-capture",
        "gyroscope",
        "geolocation",
        "local-fonts",
        "magnetometer",
        "microphone",
        "midi",
        "nfc",
        "notifications",
        "payment-handler",
        "persistent-storage",
        "push",
        "speaker",
        "storage-access",
        "top-level-storage-access",
        "window-management",
        "query",
    ];
function ta() {
    var e, t, i, r, n, o;
    if ("u" < typeof navigator) return { name: "unknown", version: "unknown" };
    let s = navigator.userAgent,
        a = {
            edg: "Edge",
            edga: "Edge",
            edgios: "Edge",
            opr: "Opera",
            opx: "Opera",
            crios: "Chrome",
            fxios: "Firefox",
            samsung: "SamsungBrowser",
            vivaldi: "Vivaldi",
            brave: "Brave",
        };
    for (let l of [
        /(?<name>SamsungBrowser)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>EdgA|EdgiOS|Edg)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>OPR|OPX)\/(?<version>\d+(?:\.\d+)+)/,
        /Opera[\s\/](?<version>\d+(?:\.\d+)+)/,
        /Opera Mini\/(?<version>\d+(?:\.\d+)+)/,
        /Opera Mobi\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Vivaldi)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Brave)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>CriOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>FxiOS)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Chrome|Chromium)\/(?<version>\d+(?:\.\d+)+)/,
        /(?<name>Firefox|Waterfox|Iceweasel|IceCat)\/(?<version>\d+(?:\.\d+)+)/,
        /Version\/(?<version1>[\d.]+).*Safari\/[\d.]+|(?<name>Safari)\/(?<version2>[\d.]+)/,
        /(?<name>MSIE|Trident|IEMobile).+?(?<version>\d+(?:\.\d+)+)/,
        /(?<name>[A-Za-z]+)\/(?<version>\d+(?:\.\d+)+)/,
    ]) {
        let c = s.match(l);
        if (c) {
            let s = null == (e = c.groups) ? void 0 : e.name,
                d =
                    (null == (t = c.groups) ? void 0 : t.version) ||
                    (null == (i = c.groups) ? void 0 : i.version1) ||
                    (null == (r = c.groups) ? void 0 : r.version2);
            if (
                (!s &&
                    ((null == (n = c.groups) ? void 0 : n.version1) ||
                        (null == (o = c.groups) ? void 0 : o.version2)) &&
                    (s = "Safari"),
                !s && l.source.includes("Opera Mini") && (s = "Opera Mini"),
                !s && l.source.includes("Opera Mobi") && (s = "Opera Mobi"),
                !s && l.source.includes("Opera") && (s = "Opera"),
                !s && c[1] && (s = c[1]),
                !d && c[2] && (d = c[2]),
                s)
            )
                return { name: a[s.toLowerCase()] || s, version: d || "unknown" };
        }
    }
    return { name: "unknown", version: "unknown" };
}
function tl() {
    if ("u" < typeof navigator || !navigator.userAgent) return !1;
    let e = navigator.userAgent;
    return (
        /Mobi|Android|iPhone|iPod|IEMobile|Opera Mini|Opera Mobi|webOS|BlackBerry|Windows Phone/i.test(e) &&
        !/iPad/i.test(e)
    );
}
let tc = "SamsungBrowser" !== ta().name ? 1 : 3,
    td,
    tu = null;
function th(e) {
    let t = [];
    return (
        (function e(i) {
            let r, n;
            if ((i && i.toJSON && "function" == typeof i.toJSON && (i = i.toJSON()), void 0 === i)) return;
            if ("number" == typeof i) return isFinite(i) ? "" + i : "null";
            if ("object" != typeof i) return JSON.stringify(i);
            if (Array.isArray(i)) {
                for (n = "[", r = 0; r < i.length; r++) r && (n += ","), (n += e(i[r]) || "null");
                return n + "]";
            }
            if (null === i) return "null";
            if (-1 !== t.indexOf(i)) throw TypeError("Converting circular structure to JSON");
            let o = t.push(i) - 1,
                s = Object.keys(i).sort();
            for (n = "", r = 0; r < s.length; r++) {
                let t = s[r],
                    o = e(i[t]);
                o && (n && (n += ","), (n += JSON.stringify(t) + ":" + o));
            }
            return t.splice(o, 1), "{" + n + "}";
        })(e) || ""
    );
}
let tp = [
        "\uD835\uDD04",
        "\uD835\uDD05",
        "\u212D",
        "\uD835\uDD07",
        "\uD835\uDD08",
        "\uD835\uDD09",
        "\uD835\uDD38",
        "\uD835\uDD39",
        "\u2102",
        "\uD835\uDD3B",
        "\uD835\uDD3C",
        "\uD835\uDD3D",
    ],
    tf = [
        "\u03B2",
        "\u03C8",
        "\u03BB",
        "\u03B5",
        "\u03B6",
        "\u03B1",
        "\u03BE",
        "\u03BC",
        "\u03C1",
        "\u03C6",
        "\u03BA",
        "\u03C4",
        "\u03B7",
        "\u03C3",
        "\u03B9",
        "\u03C9",
        "\u03B3",
        "\u03BD",
        "\u03C7",
        "\u03B4",
        "\u03B8",
        "\u03C0",
        "\u03C5",
        "\u03BF",
    ];
function tm(e, t) {
    return `<math><mrow>${t}</mrow></math>`;
}
let tg = {
        audio: async function () {
            return e5
                ? (async function () {
                      return new Promise((e, t) => {
                          try {
                              let t,
                                  i = new e5(1, 5e3, 44100),
                                  r = i.createBufferSource(),
                                  n = i.createOscillator();
                              n.frequency.value = 1e3;
                              let o = i.createDynamicsCompressor();
                              (o.threshold.value = -50),
                                  (o.knee.value = 40),
                                  (o.ratio.value = 12),
                                  (o.attack.value = 0),
                                  (o.release.value = 0.2),
                                  n.connect(o),
                                  o.connect(i.destination),
                                  n.start(),
                                  (i.oncomplete = (n) => {
                                      (t = n.renderedBuffer.getChannelData(0)),
                                          e({
                                              sampleHash: (function (e) {
                                                  let t = 0;
                                                  for (let i = 0; i < e.length; ++i) t += Math.abs(e[i]);
                                                  return t;
                                              })(t),
                                              maxChannels: i.destination.maxChannelCount,
                                              channelCountMode: r.channelCountMode,
                                          });
                                  }),
                                  i.startRendering();
                          } catch (e) {
                              console.error("Error creating audio fingerprint:", e), t(e);
                          }
                      });
                  })()
                : null;
        },
        canvas: async function () {
            return new Promise((e) => {
                let t = Array.from({ length: 3 }, () =>
                    (function () {
                        let e = document.createElement("canvas"),
                            t = e.getContext("2d");
                        if (!t) return null;
                        (e.width = 280), (e.height = 20);
                        let i = t.createLinearGradient(0, 0, e.width, e.height);
                        i.addColorStop(0, "red"),
                            i.addColorStop(1 / 6, "orange"),
                            i.addColorStop(2 / 6, "yellow"),
                            i.addColorStop(0.5, "green"),
                            i.addColorStop(4 / 6, "blue"),
                            i.addColorStop(5 / 6, "indigo"),
                            i.addColorStop(1, "violet"),
                            (t.fillStyle = i),
                            t.fillRect(0, 0, e.width, e.height);
                        let r = "Random Text WMwmil10Oo";
                        return (
                            (t.font = "23.123px Arial"),
                            (t.fillStyle = "black"),
                            t.fillText(r, -5, 15),
                            (t.fillStyle = "rgba(0, 0, 255, 0.5)"),
                            t.fillText(r, -3.3, 17.7),
                            t.beginPath(),
                            t.moveTo(0, 0),
                            t.lineTo((2 * e.width) / 7, e.height),
                            (t.strokeStyle = "white"),
                            (t.lineWidth = 2),
                            t.stroke(),
                            t.getImageData(0, 0, e.width, e.height)
                        );
                    })(),
                ).filter((e) => null !== e);
                e(0 !== t.length ? { commonPixelsHash: te(e4(t, 280, 20).data.toString()).toString() } : null);
            });
        },
        fonts: async function (e) {
            return new Promise((e) => {
                try {
                    tt(async ({ iframe: t }) => {
                        let i = t.createElement("canvas").getContext("2d");
                        if (!i) return void e(null);
                        let r = tr.map((e) => tn(i, e)),
                            n = {};
                        ti.forEach((e) => {
                            let t = tn(i, e);
                            r.includes(t) || (n[e] = t);
                        }),
                            e(n);
                    });
                } catch (t) {
                    e(null);
                }
            });
        },
        hardware: function () {
            return new Promise((e, t) => {
                let i,
                    r,
                    n = void 0 !== navigator.deviceMemory ? navigator.deviceMemory : 0,
                    o = window.performance && window.performance.memory ? window.performance.memory : 0;
                e({
                    videocard: (function () {
                        var e;
                        let t = document.createElement("canvas"),
                            i = null != (e = t.getContext("webgl")) ? e : t.getContext("experimental-webgl");
                        if (i && "getParameter" in i)
                            try {
                                let e = (i.getParameter(i.VENDOR) || "").toString(),
                                    t = (i.getParameter(i.RENDERER) || "").toString(),
                                    r = {
                                        vendor: e,
                                        renderer: t,
                                        version: (i.getParameter(i.VERSION) || "").toString(),
                                        shadingLanguageVersion: (
                                            i.getParameter(i.SHADING_LANGUAGE_VERSION) || ""
                                        ).toString(),
                                    };
                                if (!t.length || !e.length) {
                                    let e = i.getExtension("WEBGL_debug_renderer_info");
                                    if (e) {
                                        let t = (i.getParameter(e.UNMASKED_VENDOR_WEBGL) || "").toString(),
                                            n = (i.getParameter(e.UNMASKED_RENDERER_WEBGL) || "").toString();
                                        t && (r.vendorUnmasked = t), n && (r.rendererUnmasked = n);
                                    }
                                }
                                return r;
                            } catch (e) {}
                        return "undefined";
                    })(),
                    architecture:
                        ((r = new Uint8Array((i = new Float32Array(1)).buffer)),
                        (i[0] = 1 / 0),
                        (i[0] = i[0] - i[0]),
                        r[3]),
                    deviceMemory: n.toString() || "undefined",
                    jsHeapSizeLimit: o.jsHeapSizeLimit || 0,
                });
            });
        },
        locales: function () {
            return new Promise((e) => {
                e({ languages: navigator.language, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
            });
        },
        math: function () {
            return new Promise((e) => {
                e({
                    acos: Math.acos(0.5),
                    asin: to(Math.asin, -1, 1, 97),
                    cos: to(Math.cos, 0, Math.PI, 97),
                    largeCos: 0.7639704044417283,
                    largeSin: -0.6452512852657808,
                    largeTan: Math.tan(1e20),
                    sin: to(Math.sin, -Math.PI, Math.PI, 97),
                    tan: to(Math.tan, 0, 2 * Math.PI, 97),
                });
            });
        },
        permissions: async function (e) {
            var t;
            let i,
                r = (null == e ? void 0 : e.permissions_to_check) || ts;
            return (
                (t = await Promise.all(
                    Array.from({ length: 3 }, () =>
                        (async function (e) {
                            let t = {};
                            for (let i of e)
                                try {
                                    t[i] = (await navigator.permissions.query({ name: i })).state.toString();
                                } catch (e) {}
                            return t;
                        })(r),
                    ),
                )),
                (i = {}),
                r.forEach((e) => {
                    let r = (function (e) {
                        if (0 === e.length) return null;
                        let t = {};
                        e.forEach((e) => {
                            let i = String(e);
                            t[i] = (t[i] || 0) + 1;
                        });
                        let i = e[0],
                            r = 1;
                        return (
                            Object.keys(t).forEach((e) => {
                                t[e] > r && ((i = e), (r = t[e]));
                            }),
                            i
                        );
                    })(t.map((t) => (e in t ? t[e] : void 0)).filter((e) => void 0 !== e));
                    r && (i[e] = r);
                }),
                i
            );
        },
        plugins: async function () {
            let e = [];
            if (navigator.plugins)
                for (let t = 0; t < navigator.plugins.length; t++) {
                    let i = navigator.plugins[t];
                    e.push([i.name, i.filename, i.description].join("|"));
                }
            return new Promise((t) => {
                t({ plugins: e });
            });
        },
        screen: function () {
            return new Promise((e) => {
                let t, i, r, n;
                if ("u" < typeof matchMedia || "u" < typeof screen) return void e(null);
                let o = {
                    is_touchscreen: navigator.maxTouchPoints > 0,
                    maxTouchPoints: navigator.maxTouchPoints,
                    colorDepth: screen.colorDepth,
                    mediaMatches:
                        ((t = []),
                        Object.keys(
                            (i = {
                                "prefers-contrast": ["high", "more", "low", "less", "forced", "no-preference"],
                                "any-hover": ["hover", "none"],
                                "any-pointer": ["none", "coarse", "fine"],
                                pointer: ["none", "coarse", "fine"],
                                hover: ["hover", "none"],
                                update: ["fast", "slow"],
                                "inverted-colors": ["inverted", "none"],
                                "prefers-reduced-motion": ["reduce", "no-preference"],
                                "prefers-reduced-transparency": ["reduce", "no-preference"],
                                scripting: ["none", "initial-only", "enabled"],
                                "forced-colors": ["active", "none"],
                            }),
                        ).forEach((e) => {
                            i[e].forEach((i) => {
                                matchMedia(`(${e}: ${i})`).matches && t.push(`${e}: ${i}`);
                            });
                        }),
                        t),
                };
                tl() &&
                    navigator.maxTouchPoints > 0 &&
                    ((r = window.screen.width),
                    (n = window.screen.height),
                    (o.resolution = `${Math.max(r, n).toString()}x${Math.min(r, n).toString()}`)),
                    e(o);
            });
        },
        system: function () {
            return new Promise((e) => {
                let t = ta();
                e({
                    platform: window.navigator.platform,
                    productSub: navigator.productSub,
                    product: navigator.product,
                    useragent: navigator.userAgent,
                    hardwareConcurrency: navigator.hardwareConcurrency,
                    browser: { name: t.name, version: t.version },
                    mobile: tl(),
                    applePayVersion: (function () {
                        if ("https:" === window.location.protocol && "function" == typeof window.ApplePaySession)
                            try {
                                let e = window.ApplePaySession.supportsVersion;
                                for (let t = 15; t > 0; t--) if (e(t)) return t;
                            } catch (e) {}
                        return 0;
                    })(),
                    cookieEnabled: window.navigator.cookieEnabled,
                });
            });
        },
        webgl: async function () {
            "u" > typeof document &&
                (((td = document.createElement("canvas")).width = 200),
                (td.height = 100),
                (tu = td.getContext("webgl")));
            try {
                if (!tu) throw Error("WebGL not supported");
                return {
                    commonPixelsHash: te(
                        e4(
                            Array.from({ length: tc }, () =>
                                (function () {
                                    try {
                                        if (!tu) throw Error("WebGL not supported");
                                        let e = tu.createShader(tu.VERTEX_SHADER),
                                            t = tu.createShader(tu.FRAGMENT_SHADER);
                                        if (!e || !t) throw Error("Failed to create shaders");
                                        if (
                                            (tu.shaderSource(
                                                e,
                                                "\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",
                                            ),
                                            tu.shaderSource(
                                                t,
                                                "\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",
                                            ),
                                            tu.compileShader(e),
                                            !tu.getShaderParameter(e, tu.COMPILE_STATUS))
                                        )
                                            throw Error("Vertex shader compilation failed: " + tu.getShaderInfoLog(e));
                                        if ((tu.compileShader(t), !tu.getShaderParameter(t, tu.COMPILE_STATUS)))
                                            throw Error(
                                                "Fragment shader compilation failed: " + tu.getShaderInfoLog(t),
                                            );
                                        let i = tu.createProgram();
                                        if (!i) throw Error("Failed to create shader program");
                                        if (
                                            (tu.attachShader(i, e),
                                            tu.attachShader(i, t),
                                            tu.linkProgram(i),
                                            !tu.getProgramParameter(i, tu.LINK_STATUS))
                                        )
                                            throw Error("Shader program linking failed: " + tu.getProgramInfoLog(i));
                                        tu.useProgram(i);
                                        let r = new Float32Array(548),
                                            n = (2 * Math.PI) / 137;
                                        for (let e = 0; e < 137; e++) {
                                            let t = e * n;
                                            (r[4 * e] = 0),
                                                (r[4 * e + 1] = 0),
                                                (r[4 * e + 2] = Math.cos(t) * (td.width / 2)),
                                                (r[4 * e + 3] = Math.sin(t) * (td.height / 2));
                                        }
                                        let o = tu.createBuffer();
                                        tu.bindBuffer(tu.ARRAY_BUFFER, o),
                                            tu.bufferData(tu.ARRAY_BUFFER, r, tu.STATIC_DRAW);
                                        let s = tu.getAttribLocation(i, "position");
                                        tu.enableVertexAttribArray(s),
                                            tu.vertexAttribPointer(s, 2, tu.FLOAT, !1, 0, 0),
                                            tu.viewport(0, 0, td.width, td.height),
                                            tu.clearColor(0, 0, 0, 1),
                                            tu.clear(tu.COLOR_BUFFER_BIT),
                                            tu.drawArrays(tu.LINES, 0, 274);
                                        let a = new Uint8ClampedArray(td.width * td.height * 4);
                                        return (
                                            tu.readPixels(0, 0, td.width, td.height, tu.RGBA, tu.UNSIGNED_BYTE, a),
                                            new ImageData(a, td.width, td.height)
                                        );
                                    } catch (e) {
                                        return new ImageData(1, 1);
                                    } finally {
                                        tu &&
                                            (tu.bindBuffer(tu.ARRAY_BUFFER, null),
                                            tu.useProgram(null),
                                            tu.viewport(0, 0, tu.drawingBufferWidth, tu.drawingBufferHeight),
                                            tu.clearColor(0, 0, 0, 0));
                                    }
                                })(),
                            ),
                            td.width,
                            td.height,
                        ).data.toString(),
                    ).toString(),
                };
            } catch (e) {
                return { webgl: "unsupported" };
            }
        },
    },
    tC = {
        webrtc: async function () {
            return new Promise((e) => {
                try {
                    let t = window.RTCPeerConnection || window.webkitRTCPeerConnection || window.mozRTCPeerConnection;
                    if (!t) return void e({ supported: !1, error: "WebRTC not supported" });
                    let i = new t({ iceCandidatePoolSize: 1, iceServers: [] });
                    i.createDataChannel(""),
                        (async () => {
                            try {
                                let t = await i.createOffer({ offerToReceiveAudio: !0, offerToReceiveVideo: !0 });
                                await i.setLocalDescription(t);
                                let r = t.sdp || "",
                                    n = [
                                        ...new Set(
                                            (r.match(/extmap:\d+ [^\n\r]+/g) || []).map((e) =>
                                                e.replace(/extmap:\d+ /, ""),
                                            ),
                                        ),
                                    ].sort(),
                                    o = (e) => {
                                        let t = r.match(RegExp(`m=${e} [^\\s]+ [^\\s]+ ([^\\n\\r]+)`));
                                        return t ? t[1].split(" ") : [];
                                    },
                                    s = (e, t) =>
                                        t
                                            .map((t) => {
                                                let i = RegExp(`(rtpmap|fmtp|rtcp-fb):${t} (.+)`, "g"),
                                                    n = [...r.matchAll(i)];
                                                if (!n.length) return null;
                                                let o = {};
                                                return (
                                                    n.forEach((t) => {
                                                        let [i, r, n] = t,
                                                            s = n.split("/");
                                                        "rtpmap" === r
                                                            ? ((o.mimeType = `${e}/${s[0]}`),
                                                              (o.clockRate = +s[1]),
                                                              "audio" === e && (o.channels = +s[2] || 1))
                                                            : "rtcp-fb" === r
                                                              ? ((o.feedbackSupport = o.feedbackSupport || []),
                                                                o.feedbackSupport.push(n))
                                                              : "fmtp" === r && (o.sdpFmtpLine = n);
                                                    }),
                                                    o
                                                );
                                            })
                                            .filter(Boolean),
                                    a = s("audio", o("audio")),
                                    l = s("video", o("video")),
                                    c = {
                                        audio: { count: a.length, hash: te(th(a)) },
                                        video: { count: l.length, hash: te(th(l)) },
                                        extensionsHash: te(th(n)),
                                    },
                                    d = await new Promise((e) => {
                                        let t = setTimeout(() => {
                                                i.removeEventListener("icecandidate", r),
                                                    i.close(),
                                                    e({ supported: !0, ...c, timeout: !0 });
                                            }, 3e3),
                                            r = (n) => {
                                                let o = n.candidate;
                                                o &&
                                                    o.candidate &&
                                                    (clearTimeout(t),
                                                    i.removeEventListener("icecandidate", r),
                                                    i.close(),
                                                    e({ supported: !0, ...c, candidateType: o.type || "" }));
                                            };
                                        i.addEventListener("icecandidate", r);
                                    });
                                e({ details: d, hash: te(th(d)) });
                            } catch (t) {
                                i.close(), e({ supported: !0, error: `WebRTC offer failed: ${t.message}` });
                            }
                        })();
                } catch (t) {
                    e({ supported: !1, error: `WebRTC error: ${t.message}` });
                }
            });
        },
        mathml: async function () {
            return new Promise((e) => {
                try {
                    tt(async ({ iframe: t }) => {
                        try {
                            let i, r;
                            if (
                                !(function (e) {
                                    try {
                                        let t = e.createElement("math");
                                        (t.innerHTML = "<mrow><mi>x</mi></mrow>"),
                                            (t.style.position = "absolute"),
                                            (t.style.visibility = "hidden"),
                                            e.body.appendChild(t);
                                        let i = t.getBoundingClientRect();
                                        return e.body.removeChild(t), i.width > 0 && i.height > 0;
                                    } catch (e) {
                                        return !1;
                                    }
                                })(t)
                            )
                                return void e({ supported: !1, error: "MathML not supported" });
                            let n = [
                                    tm(
                                        "integral",
                                        "<msubsup><mo>\u222B</mo><mi>a</mi><mi>b</mi></msubsup><mfrac><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mrow><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mfrac><mi>dx</mi>",
                                    ),
                                    tm(
                                        "fraction",
                                        "<mfrac><mrow><mi>\u03C0</mi><mo>\xd7</mo><msup><mi>r</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>\u03C3</mi></mrow></mfrac>",
                                    ),
                                    tm(
                                        "matrix",
                                        "<mo>[</mo><mtable><mtr><mtd><mi>\u03B1</mi></mtd><mtd><mi>\u03B2</mi></mtd></mtr><mtr><mtd><mi>\u03B3</mi></mtd><mtd><mi>\u03B4</mi></mtd></mtr></mtable><mo>]</mo>",
                                    ),
                                    ((i = "<mo>\u220F</mo>"),
                                    tp.forEach((e, t) => {
                                        let r = 2 * t,
                                            n = tf.slice(r, r + 2);
                                        2 === n.length &&
                                            (i += `<mmultiscripts><mi>${e}</mi><none/><mi>${n[1]}</mi><mprescripts></mprescripts><mi>${n[0]}</mi><none/></mmultiscripts>`);
                                    }),
                                    tm(0, `<munderover><mmultiscripts>${i}</mmultiscripts></munderover>`)),
                                    ...((r = []),
                                    tp.forEach((e, t) => {
                                        let i = 2 * t,
                                            n = tf.slice(i, i + 2);
                                        2 === n.length &&
                                            r.push(
                                                tm(
                                                    0,
                                                    `<mmultiscripts><mi>${e}</mi><none/><mi>${n[1]}</mi><mprescripts></mprescripts><mi>${n[0]}</mi><none/></mmultiscripts>`,
                                                ),
                                            );
                                    }),
                                    r),
                                ],
                                o = [],
                                s = "";
                            n.forEach((e, i) => {
                                let r = (function (e, t) {
                                    try {
                                        let i = t.createElement("math");
                                        (i.innerHTML = e.replace(/<\/?math>/g, "")),
                                            (i.style.whiteSpace = "nowrap"),
                                            (i.style.position = "absolute"),
                                            (i.style.visibility = "hidden"),
                                            (i.style.top = "-9999px"),
                                            t.body.appendChild(i);
                                        let r = i.getBoundingClientRect(),
                                            n = (t.defaultView || window).getComputedStyle(i),
                                            o = {
                                                dimensions: { width: r.width, height: r.height },
                                                fontInfo: {
                                                    fontFamily: n.fontFamily,
                                                    fontSize: n.fontSize,
                                                    fontWeight: n.fontWeight,
                                                    fontStyle: n.fontStyle,
                                                    lineHeight: n.lineHeight,
                                                    fontVariant: n.fontVariant || "normal",
                                                    fontStretch: n.fontStretch || "normal",
                                                    fontSizeAdjust: n.fontSizeAdjust || "none",
                                                    textRendering: n.textRendering || "auto",
                                                    fontFeatureSettings: n.fontFeatureSettings || "normal",
                                                    fontVariantNumeric: n.fontVariantNumeric || "normal",
                                                    fontKerning: n.fontKerning || "auto",
                                                },
                                            };
                                        return t.body.removeChild(i), o;
                                    } catch (e) {
                                        return { error: e.message };
                                    }
                                })(e, t);
                                o.push({ width: r.dimensions.width, height: r.dimensions.height }),
                                    0 === i && r.fontInfo && (s = te(th(r.fontInfo)));
                            });
                            let a = { fontStyleHash: s, dimensions: o };
                            e({ details: a, hash: te(th(a)) });
                        } catch (t) {
                            e({ supported: !1, error: `MathML error: ${t.message}` });
                        }
                    });
                } catch (t) {
                    e({ supported: !1, error: `MathML error: ${t.message}` });
                }
            });
        },
        speech: async function () {
            return new Promise((e) => {
                try {
                    if (
                        "u" < typeof window ||
                        !window.speechSynthesis ||
                        "function" != typeof window.speechSynthesis.getVoices
                    )
                        return void e({ supported: !1, error: "Speech Synthesis API not supported" });
                    let t = !1,
                        i = null,
                        r = (r) => {
                            if (!t) {
                                (t = !0), i && clearTimeout(i);
                                try {
                                    let t = r.map((e) => {
                                        let t = (e) => e.replace(/\\/g, "\\\\").replace(/,/g, "\\,");
                                        return [
                                            t(e.voiceURI || ""),
                                            t(e.name || ""),
                                            t(e.lang || ""),
                                            e.localService ? "1" : "0",
                                            e.default ? "1" : "0",
                                        ].join(",");
                                    });
                                    t.sort();
                                    let i = { voiceCount: r.length, voicesHash: te(th(t)) };
                                    e({ details: i, hash: te(th(i)) });
                                } catch (t) {
                                    e({ supported: !0, error: `Voice processing failed: ${t.message}` });
                                }
                            }
                        },
                        n = window.speechSynthesis.getVoices();
                    if (n.length > 0) return void r(n);
                    i = setTimeout(() => {
                        r(window.speechSynthesis.getVoices());
                    }, 800);
                    let o = () => {
                        window.speechSynthesis.removeEventListener("voiceschanged", o),
                            r(window.speechSynthesis.getVoices());
                    };
                    window.speechSynthesis.addEventListener("voiceschanged", o);
                } catch (t) {
                    e({ supported: !1, error: `Speech Synthesis error: ${t.message}` });
                }
            });
        },
    },
    tv = {},
    ty = { timeout: "true" };
function tw(e, t) {
    var i;
    let r = ta();
    if ("unknown" === r.name && e.system && "object" == typeof e.system && !Array.isArray(e.system)) {
        let t = e.system.browser;
        t &&
            "object" == typeof t &&
            !Array.isArray(t) &&
            (r = { name: t.name || "unknown", version: t.version || "unknown" });
    }
    let n = r.name.toLowerCase(),
        o = parseInt(r.version.split(".")[0] || "0", 10),
        s = [...((null == t ? void 0 : t.exclude) || [])],
        a = (null == t ? void 0 : t.stabilize) || [],
        l = (null == t ? void 0 : t.include) || [];
    for (let e of a) {
        let t = e6[e];
        if (t)
            for (let e of t) {
                let t = !("browsers" in e),
                    r =
                        !t &&
                        (null == (i = e.browsers)
                            ? void 0
                            : i.some((e) => {
                                  let t = e.match(/(.+?)(>=)(\d+)/);
                                  if (t) {
                                      let [, e, , i] = t;
                                      return n === e && o >= parseInt(i, 10);
                                  }
                                  return n === e;
                              }));
                (t || r) && s.push(...e.exclude);
            }
    }
    return (function e(t, i = "") {
        let r = {};
        for (let [n, o] of Object.entries(t)) {
            let t = i ? `${i}.${n}` : n;
            if ("object" != typeof o || Array.isArray(o) || null === o) {
                let e = s.some((e) => t.startsWith(e)),
                    i = l.some((e) => t.startsWith(e));
                (e && !i) || (r[n] = o);
            } else {
                let i = e(o, t);
                Object.keys(i).length > 0 && (r[n] = i);
            }
        }
        return r;
    })(e);
}
let t_ = "visitor_id";
function tb(e) {
    return e.storage_property_name ? e.storage_property_name : e.property_name_factory(t_);
}
let tL = `${e2}_${t_}`;
function tE(e, t) {
    try {
        localStorage.setItem(tb(t), e);
    } catch (e) {}
}
let tS = "cache";
function tI(e) {
    try {
        let t = localStorage.getItem(e.property_name_factory(tS));
        return JSON.parse(t) || {};
    } catch (e) {}
    return {};
}
let tT = null,
    tk = null;
async function tx(e) {
    var t;
    if ("u" < typeof document || "u" < typeof window)
        return { thumbmark: "", components: {}, info: {}, version: "1.6.3", error: "Browser environment required" };
    let i = { ...e0, ...e },
        r = i.logging && !sessionStorage.getItem("_tmjs_l") && 1e-4 > Math.random(),
        { elapsed: n, resolvedComponents: o } = await tP({ ...tg, ...tv }, i),
        s = {},
        a = {};
    if (r || i.experimental) {
        let { elapsed: e, resolvedComponents: t } = await tP(tC, i);
        (s = t), (a = e);
    }
    let l = i.api_key
            ? ((e, t) => {
                  if (e.cache_api_call) {
                      if (tk) return Promise.resolve(tk);
                      let t = (function (e) {
                          let t = tI(e);
                          if (t && t.apiResponse && t.apiResponseExpiry && Date.now() <= t.apiResponseExpiry)
                              return t.apiResponse;
                      })(e);
                      if (t) return Promise.resolve(t);
                      if (tT) return tT;
                  }
                  let i = `${e.api_endpoint || e3}/thumbmark`,
                      r = (function (e) {
                          try {
                              let t = tb(e),
                                  i = localStorage.getItem(t);
                              return i || t === tL || ((i = localStorage.getItem(tL)) && tE(i, e)), i;
                          } catch (e) {
                              return null;
                          }
                      })(e),
                      n = { components: t, options: e, clientHash: te(th(t)), version: "1.6.3" };
                  r && (n.visitorId = r);
                  let o = fetch(i, {
                          method: "POST",
                          headers: {
                              "x-api-key": e.api_key,
                              Authorization: "custom-authorized",
                              "Content-Type": "application/json",
                          },
                          body: JSON.stringify(n),
                      })
                          .then((e) => {
                              if (!e.ok) {
                                  if (403 === e.status) throw Error("INVALID_API_KEY");
                                  throw Error(`HTTP error! status: ${e.status}`);
                              }
                              return e.json();
                          })
                          .then(
                              (t) => (
                                  t.visitorId && t.visitorId !== r && tE(t.visitorId, e),
                                  (tk = t),
                                  (function (e, t) {
                                      if (e.cache_api_call && e.cache_lifetime_in_ms) {
                                          var i = {
                                              apiResponseExpiry:
                                                  e.cache_lifetime_in_ms > 2592e5
                                                      ? Date.now() + 2592e5
                                                      : Date.now() + e.cache_lifetime_in_ms,
                                              apiResponse: t,
                                          };
                                          let r = { ...tI(e), ...i };
                                          try {
                                              localStorage.setItem(e.property_name_factory(tS), JSON.stringify(r));
                                          } catch (e) {}
                                      }
                                  })(e, t),
                                  (tT = null),
                                  t
                              ),
                          )
                          .catch((e) => {
                              if (
                                  (console.error("Error fetching pro data", e),
                                  (tT = null),
                                  "INVALID_API_KEY" === e.message)
                              )
                                  throw e;
                              return null;
                          }),
                      s = e.timeout || 5e3;
                  return (tT = Promise.race([
                      o,
                      new Promise((t) => {
                          setTimeout(() => {
                              let i = tI(e);
                              i && i.apiResponse
                                  ? t(i.apiResponse)
                                  : t({ info: { timed_out: !0 }, ...(r && { visitorId: r }) });
                          }, s);
                      }),
                  ]));
              })(i, o)
            : null,
        c = null;
    if (l)
        try {
            c = await l;
        } catch (e) {
            if (e instanceof Error && "INVALID_API_KEY" === e.message)
                return {
                    error: "Invalid API key or quota exceeded",
                    components: {},
                    info: {},
                    version: "1.6.3",
                    thumbmark: "",
                };
            throw e;
        }
    let d = { ...n, ...a },
        u = i.performance ? { elapsed: d } : {},
        h = tw((null == c ? void 0 : c.components) || {}, i),
        p = { ...o, ...h },
        f = (null == c ? void 0 : c.info) || { uniqueness: { score: "api only" } },
        m = null != (t = null == c ? void 0 : c.thumbmark) ? t : te(th(p));
    return (
        r &&
            (async function (e, t, i, r = {}) {
                var n;
                let o = `${e3}/log`,
                    s = {
                        thumbmark: e,
                        components: t,
                        experimental: r,
                        version: "1.6.3",
                        options: i,
                        path: null == (n = null == window ? void 0 : window.location) ? void 0 : n.pathname,
                    };
                sessionStorage.setItem("_tmjs_l", "1");
                try {
                    await fetch(o, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(s),
                    });
                } catch (e) {}
            })(m, p, i, s).catch(() => {}),
        {
            ...((null == c ? void 0 : c.visitorId) && { visitorId: c.visitorId }),
            thumbmark: m,
            components: p,
            info: f,
            version: "1.6.3",
            ...u,
            ...(Object.keys(s).length > 0 && i.experimental && { experimental: s }),
            ...((null == c ? void 0 : c.requestId) && { requestId: c.requestId }),
        }
    );
}
async function tP(e, t) {
    var i, r;
    let n = { ...e0, ...t },
        o = Object.entries(e)
            .filter(([e]) => {
                var t;
                return !(null == (t = null == n ? void 0 : n.exclude) ? void 0 : t.includes(e));
            })
            .filter(([e]) => {
                var t, i, r, o;
                return (null == (t = null == n ? void 0 : n.include) ? void 0 : t.some((e) => e.includes(".")))
                    ? null == (i = null == n ? void 0 : n.include)
                        ? void 0
                        : i.some((t) => t.startsWith(e))
                    : 0 === (null == (r = null == n ? void 0 : n.include) ? void 0 : r.length) ||
                          (null == (o = null == n ? void 0 : n.include) ? void 0 : o.includes(e));
            }),
        s = o.map(([e]) => e),
        a = await ((i = o.map(([e, i]) => i(t))),
        (r = (null == n ? void 0 : n.timeout) || 5e3),
        Promise.all(
            i.map((e) => {
                let t = performance.now();
                return Promise.race([
                    e.then((e) => ({ value: e, elapsed: performance.now() - t })),
                    new Promise((e) => {
                        setTimeout(() => e(ty), r);
                    }).then((e) => ({ value: e, elapsed: performance.now() - t })),
                ]);
            }),
        )),
        l = {},
        c = {};
    return (
        a.forEach((e, t) => {
            var i;
            null != e.value && ((c[s[t]] = e.value), (l[s[t]] = null != (i = e.elapsed) ? i : 0));
        }),
        { elapsed: l, resolvedComponents: tw(c, n) }
    );
}
var tM = class {
    constructor(e) {
        this.options = { ...e0, ...e };
    }
    async get(e) {
        return tx({ ...this.options, ...e });
    }
    getVersion() {
        return "1.6.3";
    }
    includeComponent(e, t) {
        tv[e] = t;
    }
};
async function tO() {
    return (await new tM().get()).thumbmark;
}
var tA = class {
    constructor(e) {
        this.ipLookup = e;
    }
    async getFingerprint(e = !1) {
        let t = await tO(),
            [i, r] = await Promise.all([e1(), e ? Promise.resolve("") : this.ipLookup.getIp()]);
        return { visitorId: t, ip: r, deviceInfo: i };
    }
};
let tR = null;
async function tD(e) {
    if (tR) return tR;
    let t = await o.t.get(a.t.featureConfig, { signal: e });
    if (!t.ok) throw Error(`Failed to fetch feature config: ${t.status} ${t.statusText}`);
    return (tR = t.data);
}
async function tF(e = {}, t) {
    var i, r;
    let { disableIpify: n = !1, hostingApp: s, signal: l } = e,
        d = await t.fingerprintProvider.getFingerprint(n),
        u = (0, c.t)(t.browserEnv),
        h = {
            hash: d.visitorId || "",
            ip: d.ip || "",
            deviceType: "WEBAPP",
            data: JSON.stringify(d),
            osVersion: ((i = d.deviceInfo.os), `${i.name || "Unknown"} ${i.version || ""}`.trim()),
            deviceModel: d.deviceInfo.device.model || "",
            browser: (r = d.deviceInfo.browser).name && r.version ? `${r.name} ${r.version}` : "Unknown",
            hasLiedBrowser: u,
            sdkVersion: "2.0.1",
            hostingApp: s ?? "Web SDK",
        },
        p = await o.t.post(a.t.deviceFingerprint, h, { signal: l });
    if (!p.ok) throw Error(`Failed to submit fingerprint: ${p.status} ${p.statusText}`);
    return p.data;
}
let tU = !1,
    tH = null,
    tN = !1,
    tV = !1,
    tB = null;
async function tz(e = {}) {
    let { token: t, hostingApp: i, signal: n } = e;
    return (void 0 !== t && t !== (0, o.r)() && ((0, o.s)(t), t$()), tU && tH)
        ? { features: tH, disableIpify: tN, fingerprintSuccess: tV, fingerprintResult: r }
        : tB ||
              (tB = (async () => {
                  let e,
                      t,
                      o = !1;
                  try {
                      var a;
                      (a = (e = await tD(n)).features),
                          (o = a?.find((e) => "DISABLE_IPIFY" === e.feature)?.enabled ?? !1);
                  } catch {
                      e = { sessionIdentifier: "" };
                  }
                  let c = !1;
                  try {
                      let e = new tA(new l.t()),
                          r = new l.r();
                      (t = await tF(
                          { disableIpify: o, hostingApp: i, signal: n },
                          { fingerprintProvider: e, browserEnv: r },
                      )),
                          (c = !0);
                  } catch (e) {
                      console.warn("Failed to submit device fingerprint:", e);
                  }
                  try {
                      let e = new eq().getBrowserInfo();
                      (0, s.h)({
                          code: "browser",
                          payload: {
                              userAgent: e.userAgent,
                              isWebRtcSupported: e.isWebRtcSupported,
                              browser: e.browser,
                              os: e.os,
                              device: e.device,
                              engine: e.engine,
                              cpu: e.cpu,
                          },
                      });
                  } catch (e) {
                      console.warn("Failed to send browser info event:", e);
                  }
                  return (
                      (tU = !0),
                      (tH = e),
                      (tN = o),
                      (tV = c),
                      (r = t),
                      { features: e, disableIpify: o, fingerprintSuccess: c, fingerprintResult: t }
                  );
              })().finally(() => {
                  (tB = null), (0, s.g)()?.start();
              }));
}
function t$() {
    (tU = !1), (tH = null), (tN = !1), (tV = !1), (r = void 0), (tB = null), (tR = null), (0, l.n)();
}
