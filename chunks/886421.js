let r;
i.d(t, { c: () => d, d: () => p, i: () => tY, l: () => f, n: () => tq, r: () => tK, t: () => tG });
var n,
    o = i(209688),
    a = i(588233),
    s = i(171251),
    l = i(799201),
    c = i(401959),
    d = class extends Error {
        constructor(e, t) {
            super(`POST ${s.t.qrValidateUuid} failed: ${e} ${t}`),
                (this.name = "QrValidationError"),
                (this.status = e),
                (this.statusText = t);
        }
    };
async function u(e, t, i) {
    let r = await (0, o.n)().post(
        s.t.createSession,
        {
            configurationId: t.configurationId,
            externalId: t.externalId,
            externalCustomerId: t.externalCustomerId,
            language: t.language ?? "en-US",
            customFields: t.customFields,
            uuid: t.uuid ?? null,
            urlUuid: t.urlUuid ?? null,
            interviewId: t.interviewId ?? null,
            ...(null != t.loginHint && "" !== t.loginHint ? { loginHint: t.loginHint } : {}),
        },
        { headers: { "x-api-key": e, "api-version": "1.0" }, signal: i },
    );
    if (!r.ok) throw Error(`POST ${s.t.createSession} failed: ${r.status} ${r.statusText}`);
    return r.data;
}
async function h(e, t) {
    try {
        return (
            await (0, o.n)().post(
                s.t.qrValidateUuid,
                { onboardingId: e.onboardingId, urlUuid: e.urlUuid },
                { headers: { "api-version": "1.0" }, signal: t },
            )
        ).data;
    } catch (e) {
        throw new d(e.data?.status ?? e.status, e.statusText);
    }
}
async function p(e, t) {
    if ("string" != typeof e.urlUuid || 0 === e.urlUuid.length) return;
    let i = await h({ onboardingId: e.onboardingId ?? null, urlUuid: e.urlUuid }, t);
    return e.onRefreshed?.(i.urlUuid), i.urlUuid;
}
async function f(e, t, i) {
    let { onUrlUuidRefreshed: r, ...n } = t,
        o = await p({ urlUuid: t.urlUuid, onboardingId: t.uuid ?? null, onRefreshed: r }, i);
    return u(e, { ...n, urlUuid: o }, i);
}
var m = "user-agent",
    g = "function",
    v = "object",
    C = "string",
    y = "undefined",
    w = "browser",
    _ = "device",
    b = "engine",
    L = "result",
    S = "name",
    E = "type",
    I = "vendor",
    T = "version",
    M = "architecture",
    x = "major",
    k = "model",
    O = "console",
    P = "mobile",
    A = "tablet",
    R = "smarttv",
    F = "wearable",
    D = "embedded",
    U = "inapp",
    N = "brands",
    H = "formFactors",
    V = "fullVersionList",
    B = "platform",
    $ = "platformVersion",
    z = "bitness",
    j = "sec-ch-ua",
    Z = j + "-full-version-list",
    W = j + "-arch",
    K = j + "-" + z,
    G = j + "-form-factors",
    q = j + "-" + P,
    Y = j + "-" + k,
    Q = j + "-" + B,
    X = Q + "-version",
    J = [N, V, P, k, B, $, M, H, z],
    ee = "Amazon",
    et = "Apple",
    ei = "ASUS",
    er = "BlackBerry",
    en = "Google",
    eo = "Huawei",
    ea = "Lenovo",
    es = "Honor",
    el = "Microsoft",
    ec = "Motorola",
    ed = "Nvidia",
    eu = "OnePlus",
    eh = "OPPO",
    ep = "Samsung",
    ef = "Sharp",
    em = "Sony",
    eg = "Xiaomi",
    ev = "Zebra",
    eC = "Chrome",
    ey = "Chromium",
    ew = "Chromecast",
    e_ = "Edge",
    eb = "Firefox",
    eL = "Opera",
    eS = "Facebook",
    eE = "Sogou",
    eI = "Mobile ",
    eT = " Browser",
    eM = "Windows",
    ex = typeof window !== y && window.navigator ? window.navigator : void 0,
    ek = ex && ex.userAgentData ? ex.userAgentData : void 0,
    eO = function (e, t) {
        var i = {},
            r = t;
        if (!eR(t)) for (var n in ((r = {}), t)) for (var o in t[n]) r[o] = t[n][o].concat(r[o] ? r[o] : []);
        for (var a in e) i[a] = r[a] && r[a].length % 2 == 0 ? r[a].concat(e[a]) : e[a];
        return i;
    },
    eP = function (e) {
        for (var t = {}, i = 0; i < e.length; i++) t[e[i].toUpperCase()] = e[i];
        return t;
    },
    eA = function (e, t) {
        if (typeof e === v && e.length > 0) {
            for (var i in e) if (eU(t) == eU(e[i])) return !0;
            return !1;
        }
        return !!eF(e) && eU(t) == eU(e);
    },
    eR = function (e, t) {
        for (var i in e) return /^(browser|cpu|device|engine|os)$/.test(i) || (!!t && eR(e[i]));
    },
    eF = function (e) {
        return typeof e === C;
    },
    eD = function (e) {
        if (e) {
            for (var t = [], i = eV(/\\?\"/g, e).split(","), r = 0; r < i.length; r++)
                if (i[r].indexOf(";") > -1) {
                    var n = e$(i[r]).split(";v=");
                    t[r] = { brand: n[0], version: n[1] };
                } else t[r] = e$(i[r]);
            return t;
        }
    },
    eU = function (e) {
        return eF(e) ? e.toLowerCase() : e;
    },
    eN = function (e) {
        return eF(e) ? eV(/[^\d\.]/g, e).split(".")[0] : void 0;
    },
    eH = function (e) {
        for (var t in e)
            if (e.hasOwnProperty(t)) {
                var i = e[t];
                typeof i == v && 2 == i.length ? (this[i[0]] = i[1]) : (this[i] = void 0);
            }
        return this;
    },
    eV = function (e, t) {
        return eF(t) ? t.replace(e, "") : t;
    },
    eB = function (e) {
        return eV(/\\?\"/g, e);
    },
    e$ = function (e, t) {
        return (e = eV(/^\s\s*/, String(e))), typeof t === y ? e : e.substring(0, t);
    },
    ez = function (e, t) {
        if (e && t)
            for (var i, r, n, o, a, s, l = 0; l < t.length && !a; ) {
                var c = t[l],
                    d = t[l + 1];
                for (i = r = 0; i < c.length && !a && c[i]; )
                    if ((a = c[i++].exec(e)))
                        for (n = 0; n < d.length; n++)
                            (s = a[++r]),
                                typeof (o = d[n]) === v && o.length > 0
                                    ? 2 === o.length
                                        ? typeof o[1] == g
                                            ? (this[o[0]] = o[1].call(this, s))
                                            : (this[o[0]] = o[1])
                                        : o.length >= 3 &&
                                          (typeof o[1] !== g || (o[1].exec && o[1].test)
                                              ? 3 == o.length
                                                  ? (this[o[0]] = s ? s.replace(o[1], o[2]) : void 0)
                                                  : 4 == o.length
                                                    ? (this[o[0]] = s ? o[3].call(this, s.replace(o[1], o[2])) : void 0)
                                                    : o.length > 4 &&
                                                      (this[o[0]] = s
                                                          ? o[3].apply(this, [s.replace(o[1], o[2])].concat(o.slice(4)))
                                                          : void 0)
                                              : o.length > 3
                                                ? (this[o[0]] = s ? o[1].apply(this, o.slice(2)) : void 0)
                                                : (this[o[0]] = s ? o[1].call(this, s, o[2]) : void 0))
                                    : (this[o] = s || void 0);
                l += 2;
            }
    },
    ej = function (e, t) {
        for (var i in t)
            if (typeof t[i] === v && t[i].length > 0) {
                for (var r = 0; r < t[i].length; r++) if (eA(t[i][r], e)) return "?" === i ? void 0 : i;
            } else if (eA(t[i], e)) return "?" === i ? void 0 : i;
        return t.hasOwnProperty("*") ? t["*"] : e;
    },
    eZ = {
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
    eW = {
        embedded: "Automotive",
        mobile: "Mobile",
        tablet: ["Tablet", "EInk"],
        smarttv: "TV",
        wearable: "Watch",
        xr: ["VR", "XR"],
        "?": ["Desktop", "Unknown"],
        "*": void 0,
    },
    eK = {
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
    eG = {
        browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [T, [S, eI + "Chrome"]],
            [/webview.+edge\/([\w\.]+)/i],
            [T, [S, e_ + " WebView"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [T, [S, "Edge"]],
            [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [S, T],
            [/opios[\/ ]+([\w\.]+)/i],
            [T, [S, eL + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [T, [S, eL + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [T, [S, eL]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [T, [S, "Baidu"]],
            [/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],
            [T, [S, "Maxthon"]],
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
            [S, T],
            [/quark(?:pc)?\/([-\w\.]+)/i],
            [T, [S, "Quark"]],
            [/\bddg\/([\w\.]+)/i],
            [T, [S, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [T, [S, "UCBrowser"]],
            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i, /micromessenger\/([\w\.]+)/i],
            [T, [S, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [T, [S, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [T, [S, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [T, [S, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [T, [S, "Smart " + ea + eT]],
            [/(av(?:ast|g|ira))\/([\w\.]+)/i],
            [[S, /(.+)/, "$1 Secure" + eT], T],
            [/norton\/([\w\.]+)/i],
            [T, [S, "Norton Private" + eT]],
            [/\bfocus\/([\w\.]+)/i],
            [T, [S, eb + " Focus"]],
            [/ mms\/([\w\.]+)$/i],
            [T, [S, eL + " Neon"]],
            [/ opt\/([\w\.]+)$/i],
            [T, [S, eL + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [T, [S, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [T, [S, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [T, [S, eL + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [T, [S, "MIUI" + eT]],
            [/fxios\/([\w\.-]+)/i],
            [T, [S, eI + eb]],
            [/\bqihoobrowser\/?([\w\.]*)/i],
            [T, [S, "360"]],
            [/\b(qq)\/([\w\.]+)/i],
            [[S, /(.+)/, "$1Browser"], T],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[S, /(.+)/, "$1" + eT], T],
            [/samsungbrowser\/([\w\.]+)/i],
            [T, [S, ep + " Internet"]],
            [/metasr[\/ ]?([\d\.]+)/i],
            [T, [S, eE + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[S, eE + " Mobile"], T],
            [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i,
            ],
            [S, T],
            [/(lbbrowser|luakit|rekonq|steam(?= (clie|tenf|gameo)))/i],
            [S],
            [/ome\/([\w\.]+).+(iron(?= saf)|360(?=[es]e$))/i],
            [T, S],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[S, eS], T, [E, U]],
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
            [S, T, [E, U]],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [T, [S, "GSA"], [E, U]],
            [/(?:musical_ly|trill)(?:.+app_?version\/|_)([\w\.]+)/i],
            [T, [S, "TikTok"], [E, U]],
            [/\[(linkedin)app\]/i],
            [S, [E, U]],
            [/(zalo(?:app)?)[\/\sa-z]*([\w\.-]+)/i],
            [[S, /(.+)/, "Zalo"], T, [E, U]],
            [/(chromium)[\/ ]([-\w\.]+)/i],
            [S, T],
            [/ome-(lighthouse)$/i],
            [S, [E, "fetcher"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [T, [S, eC + " Headless"]],
            [/wv\).+chrome\/([\w\.]+).+edgw\//i],
            [T, [S, e_ + " WebView2"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[S, eC + " WebView"], T],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [T, [S, "Android" + eT]],
            [/chrome\/([\w\.]+) mobile/i],
            [T, [S, eI + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [S, T],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [T, [S, eI + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [[S, eI + "Safari"]],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [T, S],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [S, [T, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [S, T],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [[S, eI + eb], T],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[S, "Netscape"], T],
            [/(wolvic|librewolf)\/([\w\.]+)/i],
            [S, T],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [T, [S, eb + " Reality"]],
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
            [S, [T, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [S, [T, /[^\d\.]+./, ""]],
        ],
        cpu: [
            [/\b((amd|x|x86[-_]?|wow|win)64)\b/i],
            [[M, "amd64"]],
            [/(ia32(?=;))/i, /\b((i[346]|x)86)(pc)?\b/i],
            [[M, "ia32"]],
            [/\b(aarch64|arm(v?[89]e?l?|_?64))\b/i],
            [[M, "arm64"]],
            [/\b(arm(v[67])?ht?n?[fl]p?)\b/i],
            [[M, "armhf"]],
            [/( (ce|mobile); ppc;|\/[\w\.]+arm\b)/i],
            [[M, "arm"]],
            [/ sun4\w[;\)]/i],
            [[M, "sparc"]],
            [
                /\b(avr32|ia64(?=;)|68k(?=\))|\barm(?=v([1-7]|[5-7]1)l?|;|eabi)|(irix|mips|sparc)(64)?\b|pa-risc)/i,
                /((ppc|powerpc)(64)?)( mac|;|\))/i,
                /(?:osf1|[freopnt]{3,4}bsd) (alpha)/i,
            ],
            [[M, /ower/, "", eU]],
            [/mc680.0/i],
            [[M, "68k"]],
            [/winnt.+\[axp/i],
            [[M, "alpha"]],
        ],
        device: [
            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
            [k, [I, ep], [E, A]],
            [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr]|browser)[-\w]+)/i,
                /sec-(sgh\w+)/i,
            ],
            [k, [I, ep], [E, P]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)[\/\);]/i],
            [k, [I, et], [E, P]],
            [/\b(?:ios|apple\w+)\/.+[\(\/](ipad)/i, /\b(ipad)[\d,]*[;\] ].+(mac |i(pad)?)os/i],
            [k, [I, et], [E, A]],
            [/(macintosh);/i],
            [k, [I, et]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [k, [I, ef], [E, P]],
            [/\b((?:brt|eln|hey2?|gdi|jdn)-a?[lnw]09|(?:ag[rm]3?|jdn2|kob2)-a?[lw]0[09]hn)(?: bui|\)|;)/i],
            [k, [I, es], [E, A]],
            [/honor([-\w ]+)[;\)]/i],
            [k, [I, es], [E, P]],
            [
                /\b((?:ag[rs][2356]?k?|bah[234]?|bg[2o]|bt[kv]|cmr|cpn|db[ry]2?|jdn2|got|kob2?k?|mon|pce|scm|sht?|[tw]gr|vrd)-[ad]?[lw][0125][09]b?|605hw|bg2-u03|(?:gem|fdr|m2|ple|t1)-[7a]0[1-4][lu]|t1-a2[13][lw]|mediapad[\w\. ]*(?= bui|\)))\b(?!.+d\/s)/i,
            ],
            [k, [I, eo], [E, A]],
            [/(?:huawei) ?([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][\dc][adnt]?)\b(?!.+d\/s)/i],
            [k, [I, eo], [E, P]],
            [
                /oid[^\)]+; (2[\dbc]{4}(182|283|rp\w{2})[cgl]|m2105k81a?c)(?: bui|\))/i,
                /\b(?:xiao)?((?:red)?mi[-_ ]?pad[\w- ]*)(?: bui|\))/i,
            ],
            [
                [k, /_/g, " "],
                [I, eg],
                [E, A],
            ],
            [
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /oid[^\)]+; (redmi[\-_ ]?(?:note|k)?[\w_ ]+|m?[12]\d[01]\d\w{3,6}|poco[\w ]+|(shark )?\w{3}-[ah]0|qin ?[1-3](s\+|ultra| pro)?)( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note|max|cc)?[_ ]?(?:\d{0,2}\w?)[_ ]?(?:plus|se|lite|pro)?( 5g|lte)?)(?: bui|\))/i,
                / ([\w ]+) miui\/v?\d/i,
            ],
            [
                [k, /_/g, " "],
                [I, eg],
                [E, P],
            ],
            [
                /droid.+; (cph2[3-6]\d[13579]|((gm|hd)19|(ac|be|in|kb)20|(d[en]|eb|le|mt)21|ne22)[0-2]\d|p[g-l]\w[1m]10)\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [k, [I, eu], [E, P]],
            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
            [k, [I, eh], [E, P]],
            [/\b(opd2(\d{3}a?))(?: bui|\))/i],
            [k, [I, ej, { OnePlus: ["203", "304", "403", "404", "413", "415"], "*": eh }], [E, A]],
            [/(vivo (5r?|6|8l?|go|one|s|x[il]?[2-4]?)[\w\+ ]*)(?: bui|\))/i],
            [k, [I, "BLU"], [E, P]],
            [/; vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [k, [I, "Vivo"], [E, P]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [k, [I, "Realme"], [E, P]],
            [
                /(ideatab[-\w ]+|602lv|d-42a|a101lv|a2109a|a3500-hv|s[56]000|pb-6505[my]|tb-?x?\d{3,4}(?:f[cu]|xu|[av])|yt\d?-[jx]?\d+[lfmx])( bui|;|\)|\/)/i,
                /lenovo ?(b[68]0[08]0-?[hf]?|tab(?:[\w- ]+?)|tb[\w-]{6,7})( bui|;|\)|\/)/i,
            ],
            [k, [I, ea], [E, A]],
            [/lenovo[-_ ]?([-\w ]+?)(?: bui|\)|\/)/i],
            [k, [I, ea], [E, P]],
            [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ]([\w\s]+)(\)| bui)/i,
                /((?:moto(?! 360)[-\w\(\) ]+|xt\d{3,4}[cgkosw\+]?[-\d]*|nexus 6)(?= bui|\)))/i,
            ],
            [k, [I, ec], [E, P]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [k, [I, ec], [E, A]],
            [/\b(?:lg)?([vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [k, [I, "LG"], [E, A]],
            [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+(?!.*(?:browser|netcast|android tv|watch|webos))(\w+)/i,
                /\blg-?([\d\w]+) bui/i,
            ],
            [k, [I, "LG"], [E, P]],
            [/(nokia) (t[12][01])/i],
            [I, k, [E, A]],
            [/(?:maemo|nokia).*(n900|lumia \d+|rm-\d+)/i, /nokia[-_ ]?(([-\w\. ]*?))( bui|\)|;|\/)/i],
            [
                [k, /_/g, " "],
                [E, P],
                [I, "Nokia"],
            ],
            [/(pixel (c|tablet))\b/i],
            [k, [I, en], [E, A]],
            [
                /droid.+;(?: google)? (g(01[13]a|020[aem]|025[jn]|1b60|1f8f|2ybb|4s1m|576d|5nz6|8hhn|8vou|a02099|c15s|d1yq|e2ae|ec77|gh2x|kv4x|p4bc|pj41|r83y|tt9q|ur25|wvk6)|pixel[\d ]*a?( pro)?( xl)?( fold)?( \(5g\))?)( bui|\))/i,
            ],
            [k, [I, en], [E, P]],
            [/(google) (pixelbook( go)?)/i],
            [I, k],
            [/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-\w\w\d\d)(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
            [k, [I, em], [E, P]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
                [k, "Xperia Tablet"],
                [I, em],
                [E, A],
            ],
            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
            [k, [I, ee], [E, A]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
                [k, /(.+)/g, "Fire Phone $1"],
                [I, ee],
                [E, P],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [k, I, [E, A]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /(?:blackberry|\(bb10;) (\w+)/i],
            [k, [I, er], [E, P]],
            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
            [k, [I, ei], [E, A]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [k, [I, ei], [E, P]],
            [/(nexus 9)/i],
            [k, [I, "HTC"], [E, A]],
            [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [I, [k, /_/g, " "], [E, P]],
            [
                /tcl (xess p17aa)/i,
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [k, [I, "TCL"], [E, A]],
            [
                /droid [\w\.]+; (418(?:7d|8v)|5087z|5102l|61(?:02[dh]|25[adfh]|27[ai]|56[dh]|59k|65[ah])|a509dl|t(?:43(?:0w|1[adepqu])|50(?:6d|7[adju])|6(?:09dl|10k|12b|71[efho]|76[hjk])|7(?:66[ahju]|67[hw]|7[045][bh]|71[hk]|73o|76[ho]|79w|81[hks]?|82h|90[bhsy]|99b)|810[hs]))(_\w(\w|\w\w))?(\)| bui)/i,
            ],
            [k, [I, "TCL"], [E, P]],
            [/(itel) ((\w+))/i],
            [[I, eU], k, [E, ej, { tablet: ["p10001l", "w7001"], "*": "mobile" }]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [k, [I, "Acer"], [E, A]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [k, [I, "Meizu"], [E, P]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [k, [I, "Ulefone"], [E, P]],
            [/; (energy ?\w+)(?: bui|\))/i, /; energizer ([\w ]+)(?: bui|\))/i],
            [k, [I, "Energizer"], [E, P]],
            [/; cat (b35);/i, /; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],
            [k, [I, "Cat"], [E, P]],
            [/((?:new )?andromax[\w- ]+)(?: bui|\))/i],
            [k, [I, "Smartfren"], [E, P]],
            [/droid.+; (a(in)?(0(15|59|6[35])|142)p?)/i],
            [k, [I, "Nothing"], [E, P]],
            [
                /; (x67 5g|tikeasy \w+|ac[1789]\d\w+)( b|\))/i,
                /archos ?(5|gamepad2?|([\w ]*[t1789]|hello) ?\d+[\w ]*)( b|\))/i,
            ],
            [k, [I, "Archos"], [E, A]],
            [/archos ([\w ]+)( b|\))/i, /; (ac[3-6]\d\w{2,8})( b|\))/i],
            [k, [I, "Archos"], [E, P]],
            [/; (n159v)/i],
            [k, [I, "HMD"], [E, P]],
            [/(imo) (tab \w+)/i, /(infinix|tecno) (x1101b?|p904|dp(7c|8d|10a)( pro)?|p70[1-3]a?|p904|t1101)/i],
            [I, k, [E, A]],
            [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus(?! zenw)|dell|jolla|meizu|motorola|polytron|tecno|micromax|advan)[-_ ]?([-\w]*)/i,
                /; (blu|hmd|imo|infinix|lava|oneplus|tcl|wiko)[_ ]([\w\+ ]+?)(?: bui|\)|; r)/i,
                /(hp) ([\w ]+\w)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(oppo) ?([\w ]+) bui/i,
                /(hisense) ([ehv][\w ]+)\)/i,
                /droid[^;]+; (philips)[_ ]([sv-x][\d]{3,4}[xz]?)/i,
            ],
            [I, k, [E, P]],
            [/(kobo)\s(ereader|touch)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i],
            [I, k, [E, A]],
            [/(surface duo)/i],
            [k, [I, el], [E, A]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [k, [I, "Fairphone"], [E, P]],
            [/((?:tegranote|shield t(?!.+d tv))[\w- ]*?)(?: b|\))/i],
            [k, [I, ed], [E, A]],
            [/(sprint) (\w+)/i],
            [I, k, [E, P]],
            [/(kin\.[onetw]{3})/i],
            [
                [k, /\./g, " "],
                [I, el],
                [E, P],
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [k, [I, ev], [E, A]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [k, [I, ev], [E, P]],
            [/(philips)[\w ]+tv/i, /smart-tv.+(samsung)/i],
            [I, [E, R]],
            [/hbbtv.+maple;(\d+)/i],
            [
                [k, /^/, "SmartTV"],
                [I, ep],
                [E, R],
            ],
            [/(vizio)(?: |.+model\/)(\w+-\w+)/i, /tcast.+(lg)e?. ([-\w]+)/i],
            [I, k, [E, R]],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
                [I, "LG"],
                [E, R],
            ],
            [/(apple) ?tv/i],
            [I, [k, et + " TV"], [E, R]],
            [/crkey.*devicetype\/chromecast/i],
            [
                [k, ew + " Third Generation"],
                [I, en],
                [E, R],
            ],
            [/crkey.*devicetype\/([^/]*)/i],
            [
                [k, /^/, "Chromecast "],
                [I, en],
                [E, R],
            ],
            [/fuchsia.*crkey/i],
            [
                [k, ew + " Nest Hub"],
                [I, en],
                [E, R],
            ],
            [/crkey/i],
            [
                [k, ew],
                [I, en],
                [E, R],
            ],
            [/(portaltv)/i],
            [k, [I, eS], [E, R]],
            [/droid.+aft(\w+)( bui|\))/i],
            [k, [I, ee], [E, R]],
            [/(shield \w+ tv)/i],
            [k, [I, ed], [E, R]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [k, [I, ef], [E, R]],
            [/(bravia[\w ]+)( bui|\))/i],
            [k, [I, em], [E, R]],
            [/(mi(tv|box)-?\w+) bui/i],
            [k, [I, eg], [E, R]],
            [/Hbbtv.*(technisat) (.*);/i],
            [I, k, [E, R]],
            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
            [
                [I, /.+\/(\w+)/, "$1", ej, { LG: "lge" }],
                [k, e$],
                [E, R],
            ],
            [/(playstation \w+)/i],
            [k, [I, em], [E, O]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [k, [I, el], [E, O]],
            [
                /(ouya)/i,
                /(nintendo) (\w+)/i,
                /(retroid) (pocket ([^\)]+))/i,
                /(valve).+(steam deck)/i,
                /droid.+; ((shield|rgcube|gr0006))( bui|\))/i,
            ],
            [[I, ej, { Nvidia: "Shield", Anbernic: "RGCUBE", Logitech: "GR0006" }], k, [E, O]],
            [/\b(sm-[lr]\d\d[0156][fnuw]?s?|gear live)\b/i],
            [k, [I, ep], [E, F]],
            [/((pebble))app/i, /(asus|google|lg|oppo|xiaomi) ((pixel |zen)?watch[\w ]*)( bui|\))/i],
            [I, k, [E, F]],
            [/(ow(?:19|20)?we?[1-3]{1,3})/i],
            [k, [I, eh], [E, F]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [k, [I, et], [E, F]],
            [/(opwwe\d{3})/i],
            [k, [I, eu], [E, F]],
            [/(moto 360)/i],
            [k, [I, ec], [E, F]],
            [/(smartwatch 3)/i],
            [k, [I, em], [E, F]],
            [/(g watch r)/i],
            [k, [I, "LG"], [E, F]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [k, [I, ev], [E, F]],
            [/droid.+; (glass) \d/i],
            [k, [I, en], [E, "xr"]],
            [/(pico) ([\w ]+) os\d/i],
            [I, k, [E, "xr"]],
            [/(quest( \d| pro)?s?).+vr/i],
            [k, [I, eS], [E, "xr"]],
            [/mobile vr; rv.+firefox/i],
            [[E, "xr"]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [I, [E, D]],
            [/(aeobc)\b/i],
            [k, [I, ee], [E, D]],
            [/(homepod).+mac os/i],
            [k, [I, et], [E, D]],
            [/windows iot/i],
            [[E, D]],
            [/droid.+; ([\w- ]+) (4k|android|smart|google)[- ]?tv/i],
            [k, [E, R]],
            [/\b((4k|android|smart|opera)[- ]?tv|tv; rv:|large screen[\w ]+safari)\b/i],
            [[E, R]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew|; hmsc).+?(mobile|vr|\d) safari/i],
            [k, [E, ej, { mobile: "Mobile", xr: "VR", "*": A }]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[E, A]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[E, P]],
            [/droid .+?; ([\w\. -]+)( bui|\))/i],
            [k, [I, "Generic"]],
        ],
        engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [T, [S, e_ + "HTML"]],
            [/(arkweb)\/([\w\.]+)/i],
            [S, T],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [T, [S, "Blink"]],
            [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links|dillo)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
            ],
            [S, T],
            [/ladybird\//i],
            [[S, "LibWeb"]],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [T, S],
        ],
        os: [
            [/(windows nt) (6\.[23]); arm/i],
            [
                [S, /N/, "R"],
                [T, ej, eZ],
            ],
            [
                /(windows (?:phone|mobile|iot))(?: os)?[\/ ]?([\d\.]*( se)?)/i,
                /(windows)[\/ ](1[01]|2000|3\.1|7|8(\.1)?|9[58]|me|server 20\d\d( r2)?|vista|xp)/i,
            ],
            [S, T],
            [/windows nt ?([\d\.\)]*)(?!.+xbox)/i, /\bwin(?=3| ?9|n)(?:nt| 9x )?([\d\.;]*)/i],
            [
                [T, /(;|\))/g, "", ej, eZ],
                [S, eM],
            ],
            [/(windows ce)\/?([\d\.]*)/i],
            [S, T],
            [
                /[adehimnop]{4,7}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv|ios(?=.+ip(?:ad|hone)|.+apple ?tv)|ip(?:ad|hone)(?: |.+i(?:pad)?)os|apple ?tv.+ios)[\/ ]([\w\.]+)/i,
                /\btvos ?([\w\.]+)/i,
                /cfnetwork\/.+darwin/i,
            ],
            [
                [T, /_/g, "."],
                [S, "iOS"],
            ],
            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+(haiku|morphos))/i],
            [
                [S, "macOS"],
                [T, /_/g, "."],
            ],
            [/android ([\d\.]+).*crkey/i],
            [T, [S, ew + " Android"]],
            [/fuchsia.*crkey\/([\d\.]+)/i],
            [T, [S, ew + " Fuchsia"]],
            [/crkey\/([\d\.]+).*devicetype\/smartspeaker/i],
            [T, [S, ew + " SmartSpeaker"]],
            [/linux.*crkey\/([\d\.]+)/i],
            [T, [S, ew + " Linux"]],
            [/crkey\/([\d\.]+)/i],
            [T, [S, ew]],
            [/droid ([\w\.]+)\b.+(android[- ]x86)/i],
            [T, S],
            [/(ubuntu) ([\w\.]+) like android/i],
            [[S, /(.+)/, "$1 Touch"], T],
            [
                /(harmonyos)[\/ ]?([\d\.]*)/i,
                /(android|bada|blackberry|kaios|maemo|meego|openharmony|qnx|rim tablet os|sailfish|series40|symbian|tizen)\w*[-\/\.; ]?([\d\.]*)/i,
            ],
            [S, T],
            [/\(bb(10);/i],
            [T, [S, er]],
            [/(?:symbian ?os|symbos|s60(?=;)|series ?60)[-\/ ]?([\w\.]*)/i],
            [T, [S, "Symbian"]],
            [
                /mozilla\/[\d\.]+ \((?:mobile[;\w ]*|tablet|tv|[^\)]*(?:viera|lg(?:l25|-d300)|alcatel ?o.+|y300-f1)); rv:([\w\.]+)\).+gecko\//i,
            ],
            [T, [S, eb + " OS"]],
            [/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, /webos(?:[ \/]?|\.tv-20(?=2[2-9]))(\d[\d\.]*)/i],
            [T, [S, "webOS"]],
            [/web0s;.+?(?:chr[o0]me|safari)\/(\d+)/i],
            [
                [
                    T,
                    ej,
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
                [S, "webOS"],
            ],
            [/watch(?: ?os[,\/ ]|\d,\d\/)([\d\.]+)/i],
            [T, [S, "watchOS"]],
            [/cros [\w]+(?:\)| ([\w\.]+)\b)/i],
            [T, [S, "Chrome OS"]],
            [/kepler ([\w\.]+); (aft|aeo)/i],
            [T, [S, "Vega OS"]],
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
            [S, T],
            [/(sunos) ?([\d\.]*)/i],
            [[S, "Solaris"], T],
            [/\b(beos|os\/2|amigaos|openvms|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
            [S, T],
        ],
    },
    eq =
        ((n = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }),
        eH.call(n.init, [
            [w, [S, T, x, E]],
            ["cpu", [M]],
            [_, [E, k, I]],
            [b, [S, T]],
            ["os", [S, T]],
        ]),
        eH.call(n.isIgnore, [
            [w, [T, x]],
            [b, [T]],
            ["os", [T]],
        ]),
        eH.call(n.isIgnoreRgx, [
            [w, / ?browser$/i],
            ["os", / ?os$/i],
        ]),
        eH.call(n.toString, [
            [w, [S, T]],
            ["cpu", [M]],
            [_, [I, k]],
            [b, [S, T]],
            ["os", [S, T]],
        ]),
        n),
    eY = function (e, t) {
        var i = eq.init[t],
            r = eq.isIgnore[t] || 0,
            n = eq.isIgnoreRgx[t] || 0,
            o = eq.toString[t] || 0;
        function a() {
            eH.call(this, i);
        }
        return (
            (a.prototype.getItem = function () {
                return e;
            }),
            (a.prototype.withClientHints = function () {
                return ek
                    ? ek.getHighEntropyValues(J).then(function (t) {
                          return e.setCH(new eQ(t, !1)).parseCH().get();
                      })
                    : e.parseCH().get();
            }),
            (a.prototype.withFeatureCheck = function () {
                return e.detectFeature().get();
            }),
            t != L &&
                ((a.prototype.is = function (e) {
                    var t = !1;
                    for (var i in this)
                        if (
                            this.hasOwnProperty(i) &&
                            !eA(r, i) &&
                            eU(n ? eV(n, this[i]) : this[i]) == eU(n ? eV(n, e) : e)
                        ) {
                            if (((t = !0), e != y)) break;
                        } else if (e == y && t) {
                            t = !t;
                            break;
                        }
                    return t;
                }),
                (a.prototype.toString = function () {
                    var e = "";
                    for (var t in o) typeof this[o[t]] !== y && (e += (e ? " " : "") + this[o[t]]);
                    return e || y;
                })),
            (a.prototype.then = function (e) {
                var t = this,
                    i = function () {
                        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
                    };
                i.prototype = {
                    is: a.prototype.is,
                    toString: a.prototype.toString,
                    withClientHints: a.prototype.withClientHints,
                    withFeatureCheck: a.prototype.withFeatureCheck,
                };
                var r = new i();
                return e(r), r;
            }),
            new a()
        );
    };
function eQ(e, t) {
    if (((e = e || {}), eH.call(this, J), t))
        eH.call(this, [
            [N, eD(e[j])],
            [V, eD(e[Z])],
            [P, /\?1/.test(e[q])],
            [k, eB(e[Y])],
            [B, eB(e[Q])],
            [$, eB(e[X])],
            [M, eB(e[W])],
            [H, eD(e[G])],
            [z, eB(e[K])],
        ]);
    else for (var i in e) this.hasOwnProperty(i) && typeof e[i] !== y && (this[i] = e[i]);
}
function eX(e, t, i, r) {
    return (
        eH.call(this, [
            ["itemType", e],
            ["ua", t],
            ["uaCH", r],
            ["rgxMap", i],
            ["data", eY(this, e)],
        ]),
        this
    );
}
function eJ(e, t, i) {
    if (
        (typeof e === v
            ? (eR(e, !0) ? (typeof t === v && (i = t), (t = e)) : ((i = e), (t = void 0)), (e = void 0))
            : typeof e !== C || eR(t, !0) || ((i = t), (t = void 0)),
        i)
    )
        if (typeof i.append === g) {
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
    if (!(this instanceof eJ)) return new eJ(e, t, i).getResult();
    var a = typeof e === C ? e : i && i[m] ? i[m] : ex && ex.userAgent ? ex.userAgent : "",
        s = new eQ(i, !0),
        l = t ? eO(eG, t) : eG,
        c = function (e) {
            return e == L
                ? function () {
                      return new eX(e, a, l, s)
                          .set("ua", a)
                          .set(w, this.getBrowser())
                          .set("cpu", this.getCPU())
                          .set(_, this.getDevice())
                          .set(b, this.getEngine())
                          .set("os", this.getOS())
                          .get();
                  }
                : function () {
                      return new eX(e, a, l[e], s).parseUA().get();
                  };
        };
    return (
        eH
            .call(this, [
                ["getBrowser", c(w)],
                ["getCPU", c("cpu")],
                ["getDevice", c(_)],
                ["getEngine", c(b)],
                ["getOS", c("os")],
                ["getResult", c(L)],
                [
                    "getUA",
                    function () {
                        return a;
                    },
                ],
                [
                    "setUA",
                    function (e) {
                        return eF(e) && (a = e$(e, 500)), this;
                    },
                ],
            ])
            .setUA(a),
        this
    );
}
(eX.prototype.get = function (e) {
    return e ? (this.data.hasOwnProperty(e) ? this.data[e] : void 0) : this.data;
}),
    (eX.prototype.set = function (e, t) {
        return (this.data[e] = t), this;
    }),
    (eX.prototype.setCH = function (e) {
        return (this.uaCH = e), this;
    }),
    (eX.prototype.detectFeature = function () {
        if (ex && ex.userAgent == this.ua)
            switch (this.itemType) {
                case w:
                    ex.brave && typeof ex.brave.isBrave == g && this.set(S, "Brave");
                    break;
                case _:
                    !this.get(E) && ek && ek[P] && this.set(E, P),
                        "Macintosh" == this.get(k) &&
                            ex &&
                            typeof ex.standalone !== y &&
                            ex.maxTouchPoints &&
                            ex.maxTouchPoints > 2 &&
                            this.set(k, "iPad").set(E, A);
                    break;
                case "os":
                    !this.get(S) && ek && ek[B] && this.set(S, ek[B]);
                    break;
                case L:
                    var e = this.data,
                        t = function (t) {
                            return e[t].getItem().detectFeature().get();
                        };
                    this.set(w, t(w)).set("cpu", t("cpu")).set(_, t(_)).set(b, t(b)).set("os", t("os"));
            }
        return this;
    }),
    (eX.prototype.parseUA = function () {
        switch ((this.itemType != L && ez.call(this.data, this.ua, this.rgxMap), this.itemType)) {
            case w:
                this.set(x, eN(this.get(T)));
                break;
            case "os":
                if ("iOS" == this.get(S) && "18.6" == this.get(T)) {
                    var e = /\) Version\/([\d\.]+)/.exec(this.ua);
                    e && parseInt(e[1].substring(0, 2), 10) >= 26 && this.set(T, e[1]);
                }
        }
        return this;
    }),
    (eX.prototype.parseCH = function () {
        var e = this.uaCH,
            t = this.rgxMap;
        switch (this.itemType) {
            case w:
            case b:
                var i,
                    r = e[V] || e[N];
                if (r)
                    for (var n = 0; n < r.length; n++) {
                        var o = r[n].brand || r[n],
                            a = r[n].version;
                        this.itemType == w &&
                            !/not.a.brand/i.test(o) &&
                            (!i || (/Chrom/.test(i) && o != ey) || (i == e_ && /WebView2/.test(o))) &&
                            ((o = ej(o, eK)),
                            ((i = this.get(S)) && !/Chrom/.test(i) && /Chrom/.test(o)) ||
                                this.set(S, o).set(T, a).set(x, eN(a)),
                            (i = o)),
                            this.itemType == b && o == ey && this.set(T, a);
                    }
                break;
            case "cpu":
                var s = e[M];
                s && (s && "64" == e[z] && (s += "64"), ez.call(this.data, s + ";", t));
                break;
            case _:
                if ((e[P] && this.set(E, P), e[k] && (this.set(k, e[k]), !this.get(E) || !this.get(I)))) {
                    var l,
                        c = {};
                    ez.call(c, "droid 9; " + e[k] + ")", t),
                        !this.get(E) && c.type && this.set(E, c.type),
                        !this.get(I) && c.vendor && this.set(I, c.vendor);
                }
                if (e[H]) {
                    if ("string" != typeof e[H]) for (var d = 0; !l && d < e[H].length; ) l = ej(e[H][d++], eW);
                    else l = ej(e[H], eW);
                    this.set(E, l);
                }
                break;
            case "os":
                var u = e[B];
                if (u) {
                    var h = e[$];
                    u == eM && (h = parseInt(eN(h), 10) >= 13 ? "11" : "10"), this.set(S, u).set(T, h);
                }
                this.get(S) == eM && "Xbox" == e[k] && this.set(S, "Xbox").set(T, void 0);
                break;
            case L:
                var p = this.data,
                    f = function (t) {
                        return p[t].getItem().setCH(e).parseCH().get();
                    };
                this.set(w, f(w)).set("cpu", f("cpu")).set(_, f(_)).set(b, f(b)).set("os", f("os"));
        }
        return this;
    }),
    (eJ.VERSION = "2.0.9"),
    (eJ.BROWSER = eP([S, T, x, E])),
    (eJ.CPU = eP([M])),
    (eJ.DEVICE = eP([k, I, E, O, P, R, A, F, D])),
    (eJ.ENGINE = eJ.OS = eP([S, T]));
var e1 = class {
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
            t = new eJ(e).getResult();
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
let e2 = new Set(["model", "platformVersion", "fullVersionList", "brands", "platform"]);
function e0() {
    let e = new eJ().getResult();
    return {
        device: { model: e.device.model },
        os: { name: e.os.name, version: e.os.version },
        browser: { name: e.browser.name, version: e.browser.version },
    };
}
function e3(e) {
    return e?.trim() || void 0;
}
async function e6(e) {
    var t, i;
    let r,
        n = await e.getHighEntropyValues(Array.from(e2)),
        { name: o, version: a } =
            ((t = n.fullVersionList),
            (i = e.brands),
            (r = t?.[0] || i?.[0]),
            { name: e3(r?.brand), version: e3(r?.version) });
    return {
        device: { model: e3(n.model) },
        os: { name: e3(n.platform), version: e3(n.platformVersion) },
        browser: { name: o, version: a },
    };
}
async function e5() {
    var e;
    if ("u" < typeof navigator) return { device: {}, os: {}, browser: {} };
    let t = navigator,
        i = e0();
    if (!t.userAgentData?.getHighEntropyValues || "function" != typeof t.userAgentData.getHighEntropyValues) return i;
    try {
        return (
            (e = await e6(t.userAgentData)),
            {
                device: { model: e.device?.model || i.device.model },
                os: { name: e.os?.name || i.os.name, version: e.os?.version || i.os.version },
                browser: ((e) => {
                    let t = "u" > typeof navigator ? navigator.userAgent : "",
                        i = e0();
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
let e4 = "thumbmark",
    e8 = "https://api.thumbmarkjs.com",
    e9 = {
        exclude: [],
        include: [],
        stabilize: ["private", "iframe"],
        logging: !0,
        timeout: 5e3,
        cache_api_call: !0,
        cache_lifetime_in_ms: 0,
        performance: !1,
        experimental: !1,
        property_name_factory: (e) => `${e4}_${e}`,
    };
({ ...e9 });
let e7 = {
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
    te = "u" > typeof window ? window.OfflineAudioContext || window.webkitOfflineAudioContext : null;
function tt(e, t, i) {
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
function ti(e) {
    return (
        (e ^= e >>> 16),
        (e = Math.imul(e, 0x85ebca6b)),
        (e ^= e >>> 13),
        (e = Math.imul(e, 0xc2b2ae35)),
        (e ^= e >>> 16) >>> 0
    );
}
let tr = new Uint32Array([0x239b961b, 0xab0e9789, 0x38b34ae5, 0xa1e38b93]);
function tn(e, t) {
    return (e << t) | (e >>> (32 - t));
}
function to(e, t = 0) {
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
                (i[0] = Math.imul(i[0], tr[0])),
                    (i[0] = tn(i[0], 15)),
                    (i[0] = Math.imul(i[0], tr[1])),
                    (t[0] = t[0] ^ i[0]),
                    (t[0] = tn(t[0], 19)),
                    (t[0] = t[0] + t[1]),
                    (t[0] = Math.imul(t[0], 5) + 0x561ccd1b),
                    (i[1] = Math.imul(i[1], tr[1])),
                    (i[1] = tn(i[1], 16)),
                    (i[1] = Math.imul(i[1], tr[2])),
                    (t[1] = t[1] ^ i[1]),
                    (t[1] = tn(t[1], 17)),
                    (t[1] = t[1] + t[2]),
                    (t[1] = Math.imul(t[1], 5) + 0xbcaa747),
                    (i[2] = Math.imul(i[2], tr[2])),
                    (i[2] = tn(i[2], 17)),
                    (i[2] = Math.imul(i[2], tr[3])),
                    (t[2] = t[2] ^ i[2]),
                    (t[2] = tn(t[2], 15)),
                    (t[2] = t[2] + t[3]),
                    (t[2] = Math.imul(t[2], 5) + 0x96cd1c35),
                    (i[3] = Math.imul(i[3], tr[3])),
                    (i[3] = tn(i[3], 18)),
                    (i[3] = Math.imul(i[3], tr[0])),
                    (t[3] = t[3] ^ i[3]),
                    (t[3] = tn(t[3], 13)),
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
                        (n[3] = Math.imul(n[3], tr[3])),
                        (n[3] = tn(n[3], 18)),
                        (n[3] = Math.imul(n[3], tr[0])),
                        (t[3] = t[3] ^ n[3]);
                case 12:
                    n[2] = n[2] ^ (o[11] << 24);
                case 11:
                    n[2] = n[2] ^ (o[10] << 16);
                case 10:
                    n[2] = n[2] ^ (o[9] << 8);
                case 9:
                    (n[2] = n[2] ^ o[8]),
                        (n[2] = Math.imul(n[2], tr[2])),
                        (n[2] = tn(n[2], 17)),
                        (n[2] = Math.imul(n[2], tr[3])),
                        (t[2] = t[2] ^ n[2]);
                case 8:
                    n[1] = n[1] ^ (o[7] << 24);
                case 7:
                    n[1] = n[1] ^ (o[6] << 16);
                case 6:
                    n[1] = n[1] ^ (o[5] << 8);
                case 5:
                    (n[1] = n[1] ^ o[4]),
                        (n[1] = Math.imul(n[1], tr[1])),
                        (n[1] = tn(n[1], 16)),
                        (n[1] = Math.imul(n[1], tr[2])),
                        (t[1] = t[1] ^ n[1]);
                case 4:
                    n[0] = n[0] ^ (o[3] << 24);
                case 3:
                    n[0] = n[0] ^ (o[2] << 16);
                case 2:
                    n[0] = n[0] ^ (o[1] << 8);
                case 1:
                    (n[0] = n[0] ^ o[0]),
                        (n[0] = Math.imul(n[0], tr[0])),
                        (n[0] = tn(n[0], 15)),
                        (n[0] = Math.imul(n[0], tr[1])),
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
        (r[0] = ti(r[0])),
        (r[1] = ti(r[1])),
        (r[2] = ti(r[2])),
        (r[3] = ti(r[3])),
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
async function ta(e) {
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
let ts = [
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
    tl = ["monospace", "sans-serif", "serif"];
function tc(e, t) {
    return (e.font = `72px ${t}`), e.measureText("WwMmLli0Oo").width;
}
let td = (e, t, i, r) => {
        let n = (i - t) / r,
            o = 0;
        for (let i = 0; i < r; i++) o += e(t + (i + 0.5) * n);
        return o * n;
    },
    tu = [
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
function th() {
    var e, t, i, r, n, o;
    if ("u" < typeof navigator) return { name: "unknown", version: "unknown" };
    let a = navigator.userAgent,
        s = {
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
        let c = a.match(l);
        if (c) {
            let a = null == (e = c.groups) ? void 0 : e.name,
                d =
                    (null == (t = c.groups) ? void 0 : t.version) ||
                    (null == (i = c.groups) ? void 0 : i.version1) ||
                    (null == (r = c.groups) ? void 0 : r.version2);
            if (
                (!a &&
                    ((null == (n = c.groups) ? void 0 : n.version1) ||
                        (null == (o = c.groups) ? void 0 : o.version2)) &&
                    (a = "Safari"),
                !a && l.source.includes("Opera Mini") && (a = "Opera Mini"),
                !a && l.source.includes("Opera Mobi") && (a = "Opera Mobi"),
                !a && l.source.includes("Opera") && (a = "Opera"),
                !a && c[1] && (a = c[1]),
                !d && c[2] && (d = c[2]),
                a)
            )
                return { name: s[a.toLowerCase()] || a, version: d || "unknown" };
        }
    }
    return { name: "unknown", version: "unknown" };
}
function tp() {
    if ("u" < typeof navigator || !navigator.userAgent) return !1;
    let e = navigator.userAgent;
    return (
        /Mobi|Android|iPhone|iPod|IEMobile|Opera Mini|Opera Mobi|webOS|BlackBerry|Windows Phone/i.test(e) &&
        !/iPad/i.test(e)
    );
}
let tf = "SamsungBrowser" !== th().name ? 1 : 3,
    tm,
    tg = null;
function tv(e) {
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
                a = Object.keys(i).sort();
            for (n = "", r = 0; r < a.length; r++) {
                let t = a[r],
                    o = e(i[t]);
                o && (n && (n += ","), (n += JSON.stringify(t) + ":" + o));
            }
            return t.splice(o, 1), "{" + n + "}";
        })(e) || ""
    );
}
let tC = [
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
    ty = [
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
function tw(e, t) {
    return `<math><mrow>${t}</mrow></math>`;
}
let t_ = {
        audio: async function () {
            return te
                ? (async function () {
                      return new Promise((e, t) => {
                          try {
                              let t,
                                  i = new te(1, 5e3, 44100),
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
                e(0 !== t.length ? { commonPixelsHash: to(tt(t, 280, 20).data.toString()).toString() } : null);
            });
        },
        fonts: async function (e) {
            return new Promise((e) => {
                try {
                    ta(async ({ iframe: t }) => {
                        let i = t.createElement("canvas").getContext("2d");
                        if (!i) return void e(null);
                        let r = tl.map((e) => tc(i, e)),
                            n = {};
                        ts.forEach((e) => {
                            let t = tc(i, e);
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
                    asin: td(Math.asin, -1, 1, 97),
                    cos: td(Math.cos, 0, Math.PI, 97),
                    largeCos: 0.7639704044417283,
                    largeSin: -0.6452512852657808,
                    largeTan: Math.tan(1e20),
                    sin: td(Math.sin, -Math.PI, Math.PI, 97),
                    tan: td(Math.tan, 0, 2 * Math.PI, 97),
                });
            });
        },
        permissions: async function (e) {
            var t;
            let i,
                r = (null == e ? void 0 : e.permissions_to_check) || tu;
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
                tp() &&
                    navigator.maxTouchPoints > 0 &&
                    ((r = window.screen.width),
                    (n = window.screen.height),
                    (o.resolution = `${Math.max(r, n).toString()}x${Math.min(r, n).toString()}`)),
                    e(o);
            });
        },
        system: function () {
            return new Promise((e) => {
                let t = th();
                e({
                    platform: window.navigator.platform,
                    productSub: navigator.productSub,
                    product: navigator.product,
                    useragent: navigator.userAgent,
                    hardwareConcurrency: navigator.hardwareConcurrency,
                    browser: { name: t.name, version: t.version },
                    mobile: tp(),
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
                (((tm = document.createElement("canvas")).width = 200),
                (tm.height = 100),
                (tg = tm.getContext("webgl")));
            try {
                if (!tg) throw Error("WebGL not supported");
                return {
                    commonPixelsHash: to(
                        tt(
                            Array.from({ length: tf }, () =>
                                (function () {
                                    try {
                                        if (!tg) throw Error("WebGL not supported");
                                        let e = tg.createShader(tg.VERTEX_SHADER),
                                            t = tg.createShader(tg.FRAGMENT_SHADER);
                                        if (!e || !t) throw Error("Failed to create shaders");
                                        if (
                                            (tg.shaderSource(
                                                e,
                                                "\n          attribute vec2 position;\n          void main() {\n              gl_Position = vec4(position, 0.0, 1.0);\n          }\n      ",
                                            ),
                                            tg.shaderSource(
                                                t,
                                                "\n          precision mediump float;\n          void main() {\n              gl_FragColor = vec4(0.812, 0.195, 0.553, 0.921); // Set line color\n          }\n      ",
                                            ),
                                            tg.compileShader(e),
                                            !tg.getShaderParameter(e, tg.COMPILE_STATUS))
                                        )
                                            throw Error("Vertex shader compilation failed: " + tg.getShaderInfoLog(e));
                                        if ((tg.compileShader(t), !tg.getShaderParameter(t, tg.COMPILE_STATUS)))
                                            throw Error(
                                                "Fragment shader compilation failed: " + tg.getShaderInfoLog(t),
                                            );
                                        let i = tg.createProgram();
                                        if (!i) throw Error("Failed to create shader program");
                                        if (
                                            (tg.attachShader(i, e),
                                            tg.attachShader(i, t),
                                            tg.linkProgram(i),
                                            !tg.getProgramParameter(i, tg.LINK_STATUS))
                                        )
                                            throw Error("Shader program linking failed: " + tg.getProgramInfoLog(i));
                                        tg.useProgram(i);
                                        let r = new Float32Array(548),
                                            n = (2 * Math.PI) / 137;
                                        for (let e = 0; e < 137; e++) {
                                            let t = e * n;
                                            (r[4 * e] = 0),
                                                (r[4 * e + 1] = 0),
                                                (r[4 * e + 2] = Math.cos(t) * (tm.width / 2)),
                                                (r[4 * e + 3] = Math.sin(t) * (tm.height / 2));
                                        }
                                        let o = tg.createBuffer();
                                        tg.bindBuffer(tg.ARRAY_BUFFER, o),
                                            tg.bufferData(tg.ARRAY_BUFFER, r, tg.STATIC_DRAW);
                                        let a = tg.getAttribLocation(i, "position");
                                        tg.enableVertexAttribArray(a),
                                            tg.vertexAttribPointer(a, 2, tg.FLOAT, !1, 0, 0),
                                            tg.viewport(0, 0, tm.width, tm.height),
                                            tg.clearColor(0, 0, 0, 1),
                                            tg.clear(tg.COLOR_BUFFER_BIT),
                                            tg.drawArrays(tg.LINES, 0, 274);
                                        let s = new Uint8ClampedArray(tm.width * tm.height * 4);
                                        return (
                                            tg.readPixels(0, 0, tm.width, tm.height, tg.RGBA, tg.UNSIGNED_BYTE, s),
                                            new ImageData(s, tm.width, tm.height)
                                        );
                                    } catch (e) {
                                        return new ImageData(1, 1);
                                    } finally {
                                        tg &&
                                            (tg.bindBuffer(tg.ARRAY_BUFFER, null),
                                            tg.useProgram(null),
                                            tg.viewport(0, 0, tg.drawingBufferWidth, tg.drawingBufferHeight),
                                            tg.clearColor(0, 0, 0, 0));
                                    }
                                })(),
                            ),
                            tm.width,
                            tm.height,
                        ).data.toString(),
                    ).toString(),
                };
            } catch (e) {
                return { webgl: "unsupported" };
            }
        },
    },
    tb = {
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
                                    a = (e, t) =>
                                        t
                                            .map((t) => {
                                                let i = RegExp(`(rtpmap|fmtp|rtcp-fb):${t} (.+)`, "g"),
                                                    n = [...r.matchAll(i)];
                                                if (!n.length) return null;
                                                let o = {};
                                                return (
                                                    n.forEach((t) => {
                                                        let [i, r, n] = t,
                                                            a = n.split("/");
                                                        "rtpmap" === r
                                                            ? ((o.mimeType = `${e}/${a[0]}`),
                                                              (o.clockRate = +a[1]),
                                                              "audio" === e && (o.channels = +a[2] || 1))
                                                            : "rtcp-fb" === r
                                                              ? ((o.feedbackSupport = o.feedbackSupport || []),
                                                                o.feedbackSupport.push(n))
                                                              : "fmtp" === r && (o.sdpFmtpLine = n);
                                                    }),
                                                    o
                                                );
                                            })
                                            .filter(Boolean),
                                    s = a("audio", o("audio")),
                                    l = a("video", o("video")),
                                    c = {
                                        audio: { count: s.length, hash: to(tv(s)) },
                                        video: { count: l.length, hash: to(tv(l)) },
                                        extensionsHash: to(tv(n)),
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
                                e({ details: d, hash: to(tv(d)) });
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
                    ta(async ({ iframe: t }) => {
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
                                    tw(
                                        "integral",
                                        "<msubsup><mo>\u222B</mo><mi>a</mi><mi>b</mi></msubsup><mfrac><mrow><mi>f</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow><mrow><mi>g</mi><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mfrac><mi>dx</mi>",
                                    ),
                                    tw(
                                        "fraction",
                                        "<mfrac><mrow><mi>\u03C0</mi><mo>\xd7</mo><msup><mi>r</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>\u03C3</mi></mrow></mfrac>",
                                    ),
                                    tw(
                                        "matrix",
                                        "<mo>[</mo><mtable><mtr><mtd><mi>\u03B1</mi></mtd><mtd><mi>\u03B2</mi></mtd></mtr><mtr><mtd><mi>\u03B3</mi></mtd><mtd><mi>\u03B4</mi></mtd></mtr></mtable><mo>]</mo>",
                                    ),
                                    ((i = "<mo>\u220F</mo>"),
                                    tC.forEach((e, t) => {
                                        let r = 2 * t,
                                            n = ty.slice(r, r + 2);
                                        2 === n.length &&
                                            (i += `<mmultiscripts><mi>${e}</mi><none/><mi>${n[1]}</mi><mprescripts></mprescripts><mi>${n[0]}</mi><none/></mmultiscripts>`);
                                    }),
                                    tw(0, `<munderover><mmultiscripts>${i}</mmultiscripts></munderover>`)),
                                    ...((r = []),
                                    tC.forEach((e, t) => {
                                        let i = 2 * t,
                                            n = ty.slice(i, i + 2);
                                        2 === n.length &&
                                            r.push(
                                                tw(
                                                    0,
                                                    `<mmultiscripts><mi>${e}</mi><none/><mi>${n[1]}</mi><mprescripts></mprescripts><mi>${n[0]}</mi><none/></mmultiscripts>`,
                                                ),
                                            );
                                    }),
                                    r),
                                ],
                                o = [],
                                a = "";
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
                                    0 === i && r.fontInfo && (a = to(tv(r.fontInfo)));
                            });
                            let s = { fontStyleHash: a, dimensions: o };
                            e({ details: s, hash: to(tv(s)) });
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
                                    let i = { voiceCount: r.length, voicesHash: to(tv(t)) };
                                    e({ details: i, hash: to(tv(i)) });
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
    tL = {},
    tS = { timeout: "true" };
function tE(e, t) {
    var i;
    let r = th();
    if ("unknown" === r.name && e.system && "object" == typeof e.system && !Array.isArray(e.system)) {
        let t = e.system.browser;
        t &&
            "object" == typeof t &&
            !Array.isArray(t) &&
            (r = { name: t.name || "unknown", version: t.version || "unknown" });
    }
    let n = r.name.toLowerCase(),
        o = parseInt(r.version.split(".")[0] || "0", 10),
        a = [...((null == t ? void 0 : t.exclude) || [])],
        s = (null == t ? void 0 : t.stabilize) || [],
        l = (null == t ? void 0 : t.include) || [];
    for (let e of s) {
        let t = e7[e];
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
                (t || r) && a.push(...e.exclude);
            }
    }
    return (function e(t, i = "") {
        let r = {};
        for (let [n, o] of Object.entries(t)) {
            let t = i ? `${i}.${n}` : n;
            if ("object" != typeof o || Array.isArray(o) || null === o) {
                let e = a.some((e) => t.startsWith(e)),
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
let tI = "visitor_id";
function tT(e) {
    return e.storage_property_name ? e.storage_property_name : e.property_name_factory(tI);
}
let tM = `${e4}_${tI}`;
function tx(e, t) {
    try {
        localStorage.setItem(tT(t), e);
    } catch (e) {}
}
let tk = "cache";
function tO(e) {
    try {
        let t = localStorage.getItem(e.property_name_factory(tk));
        return JSON.parse(t) || {};
    } catch (e) {}
    return {};
}
let tP = null,
    tA = null;
async function tR(e) {
    var t;
    if ("u" < typeof document || "u" < typeof window)
        return { thumbmark: "", components: {}, info: {}, version: "1.6.3", error: "Browser environment required" };
    let i = { ...e9, ...e },
        r = i.logging && !sessionStorage.getItem("_tmjs_l") && 1e-4 > Math.random(),
        { elapsed: n, resolvedComponents: o } = await tF({ ...t_, ...tL }, i),
        a = {},
        s = {};
    if (r || i.experimental) {
        let { elapsed: e, resolvedComponents: t } = await tF(tb, i);
        (a = t), (s = e);
    }
    let l = i.api_key
            ? ((e, t) => {
                  if (e.cache_api_call) {
                      if (tA) return Promise.resolve(tA);
                      let t = (function (e) {
                          let t = tO(e);
                          if (t && t.apiResponse && t.apiResponseExpiry && Date.now() <= t.apiResponseExpiry)
                              return t.apiResponse;
                      })(e);
                      if (t) return Promise.resolve(t);
                      if (tP) return tP;
                  }
                  let i = `${e.api_endpoint || e8}/thumbmark`,
                      r = (function (e) {
                          try {
                              let t = tT(e),
                                  i = localStorage.getItem(t);
                              return i || t === tM || ((i = localStorage.getItem(tM)) && tx(i, e)), i;
                          } catch (e) {
                              return null;
                          }
                      })(e),
                      n = { components: t, options: e, clientHash: to(tv(t)), version: "1.6.3" };
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
                                  t.visitorId && t.visitorId !== r && tx(t.visitorId, e),
                                  (tA = t),
                                  (function (e, t) {
                                      if (e.cache_api_call && e.cache_lifetime_in_ms) {
                                          var i = {
                                              apiResponseExpiry:
                                                  e.cache_lifetime_in_ms > 2592e5
                                                      ? Date.now() + 2592e5
                                                      : Date.now() + e.cache_lifetime_in_ms,
                                              apiResponse: t,
                                          };
                                          let r = { ...tO(e), ...i };
                                          try {
                                              localStorage.setItem(e.property_name_factory(tk), JSON.stringify(r));
                                          } catch (e) {}
                                      }
                                  })(e, t),
                                  (tP = null),
                                  t
                              ),
                          )
                          .catch((e) => {
                              if (
                                  (console.error("Error fetching pro data", e),
                                  (tP = null),
                                  "INVALID_API_KEY" === e.message)
                              )
                                  throw e;
                              return null;
                          }),
                      a = e.timeout || 5e3;
                  return (tP = Promise.race([
                      o,
                      new Promise((t) => {
                          setTimeout(() => {
                              let i = tO(e);
                              i && i.apiResponse
                                  ? t(i.apiResponse)
                                  : t({ info: { timed_out: !0 }, ...(r && { visitorId: r }) });
                          }, a);
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
    let d = { ...n, ...s },
        u = i.performance ? { elapsed: d } : {},
        h = tE((null == c ? void 0 : c.components) || {}, i),
        p = { ...o, ...h },
        f = (null == c ? void 0 : c.info) || { uniqueness: { score: "api only" } },
        m = null != (t = null == c ? void 0 : c.thumbmark) ? t : to(tv(p));
    return (
        r &&
            (async function (e, t, i, r = {}) {
                var n;
                let o = `${e8}/log`,
                    a = {
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
                        body: JSON.stringify(a),
                    });
                } catch (e) {}
            })(m, p, i, a).catch(() => {}),
        {
            ...((null == c ? void 0 : c.visitorId) && { visitorId: c.visitorId }),
            thumbmark: m,
            components: p,
            info: f,
            version: "1.6.3",
            ...u,
            ...(Object.keys(a).length > 0 && i.experimental && { experimental: a }),
            ...((null == c ? void 0 : c.requestId) && { requestId: c.requestId }),
        }
    );
}
async function tF(e, t) {
    var i, r;
    let n = { ...e9, ...t },
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
        a = o.map(([e]) => e),
        s = await ((i = o.map(([e, i]) => i(t))),
        (r = (null == n ? void 0 : n.timeout) || 5e3),
        Promise.all(
            i.map((e) => {
                let t = performance.now();
                return Promise.race([
                    e.then((e) => ({ value: e, elapsed: performance.now() - t })),
                    new Promise((e) => {
                        setTimeout(() => e(tS), r);
                    }).then((e) => ({ value: e, elapsed: performance.now() - t })),
                ]);
            }),
        )),
        l = {},
        c = {};
    return (
        s.forEach((e, t) => {
            var i;
            null != e.value && ((c[a[t]] = e.value), (l[a[t]] = null != (i = e.elapsed) ? i : 0));
        }),
        { elapsed: l, resolvedComponents: tE(c, n) }
    );
}
var tD = class {
    constructor(e) {
        this.options = { ...e9, ...e };
    }
    async get(e) {
        return tR({ ...this.options, ...e });
    }
    getVersion() {
        return "1.6.3";
    }
    includeComponent(e, t) {
        tL[e] = t;
    }
};
async function tU() {
    return (await new tD().get()).thumbmark;
}
var tN = class {
    constructor(e) {
        this.ipLookup = e;
    }
    async getFingerprint(e = !1) {
        let t = await tU(),
            [i, r] = await Promise.all([e5(), e ? Promise.resolve("") : this.ipLookup.getIp()]);
        return { visitorId: t, ip: r, deviceInfo: i };
    }
};
let tH = null;
async function tV(e) {
    if (tH) return tH;
    let t = await o.t.get(s.t.featureConfig, { signal: e });
    if (!t.ok) throw Error(`Failed to fetch feature config: ${t.status} ${t.statusText}`);
    return (tH = t.data);
}
async function tB(e = {}, t) {
    var i, r;
    let { disableIpify: n = !1, hostingApp: a, signal: l } = e,
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
            hostingApp: a ?? "Web SDK",
        },
        p = await o.t.post(s.t.deviceFingerprint, h, { signal: l });
    if (!p.ok) throw Error(`Failed to submit fingerprint: ${p.status} ${p.statusText}`);
    return p.data;
}
let t$ = !1,
    tz = null,
    tj = !1,
    tZ = !1,
    tW = null;
async function tK(e = {}) {
    let { token: t, hostingApp: i, signal: n } = e;
    return (void 0 !== t && t !== (0, o.r)() && ((0, o.s)(t), tY()), t$ && tz)
        ? { features: tz, disableIpify: tj, fingerprintSuccess: tZ, fingerprintResult: r }
        : tW ||
              (tW = (async () => {
                  let e,
                      t,
                      o = !1;
                  try {
                      var s;
                      (s = (e = await tV(n)).features),
                          (o = s?.find((e) => "DISABLE_IPIFY" === e.feature)?.enabled ?? !1);
                  } catch {
                      e = { sessionIdentifier: "" };
                  }
                  let c = !1;
                  try {
                      let e = new tN(new l.t()),
                          r = new l.r();
                      (t = await tB(
                          { disableIpify: o, hostingApp: i, signal: n },
                          { fingerprintProvider: e, browserEnv: r },
                      )),
                          (c = !0);
                  } catch (e) {
                      console.warn("Failed to submit device fingerprint:", e);
                  }
                  try {
                      let e = new e1().getBrowserInfo();
                      (0, a.h)({
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
                      (t$ = !0),
                      (tz = e),
                      (tj = o),
                      (tZ = c),
                      (r = t),
                      { features: e, disableIpify: o, fingerprintSuccess: c, fingerprintResult: t }
                  );
              })().finally(() => {
                  (tW = null), (0, a.g)()?.start();
              }));
}
function tG() {
    return tj;
}
function tq() {
    return r;
}
function tY() {
    (t$ = !1), (tz = null), (tj = !1), (tZ = !1), (r = void 0), (tW = null), (tH = null), (0, l.n)();
}
