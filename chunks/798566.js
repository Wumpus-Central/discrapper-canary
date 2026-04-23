let i, r, a, s, _, l;
n.d(t, { BV: () => h, Fy: () => D, Pf: () => C, Pg: () => m, R0: () => R, sv: () => g });
var o = n(214958),
    E = n.n(o);
n(689953);
var d = n(70298),
    c = n(175259),
    u = n(506774),
    I = n(362474),
    A = n(71931),
    T = n(368849);
let S = "deviceProperties",
    N = "referralProperties",
    O = window.DiscordNative;
if (null != O) {
    let e,
        t = O.app.getVersion(),
        n = O.process.platform,
        r = O.os.release,
        a = O.os.arch,
        s = O.os.appArch,
        _ = O.app.getReleaseChannel(),
        l = (0, c.c)();
    switch (n) {
        case "win32":
            e = "Windows";
            break;
        case "darwin":
            e = "Mac OS X";
            break;
        case "linux":
            e = "Linux";
            break;
        default:
            e = n;
    }
    if (
        ((i = {
            os: e,
            browser: "Discord Client",
            release_channel: _ || "unknown",
            client_version: t,
            os_version: r,
            os_arch: a,
            app_arch: s,
            system_locale: l,
            has_client_mods: (0, d.b)(),
            client_launch_id: A.C,
        }),
        E().name?.toLocaleLowerCase() === "electron" &&
            ((i.browser_user_agent = E().ua || ""), (i.browser_version = E().version || "")),
        "linux" === n)
    ) {
        let e = O.crashReporter.getMetadata();
        (i.window_manager = e.wm),
            (i.distro = e.distro),
            (i.runtime_environment = e.runtime_environment),
            (i.display_server = e.display_server);
    } else
        "darwin" === n ? (i.os_sdk_version = r?.split(".")[0]) : "win32" === n && (i.os_sdk_version = r?.split(".")[2]);
}
function R() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "Windows Mobile" : "Windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "iOS";
    if (/Android/.test(e)) return "Android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "iOS" : "Mac OS X";
    else if (/Linux/i.test(e)) return "Linux";
    else return "";
}
function f(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function C() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
let p = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function m(e) {
    let t = {};
    return (
        p.forEach((n) => {
            let i = f(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function L() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...m(window.location.href),
            ...(function () {
                let e,
                    t = {},
                    n = document.referrer,
                    i =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != i) {
                    t.search_engine = i;
                    let e = f(n, "yahoo" !== i ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        })
    );
}
if (null == i)
    try {
        i = (function () {
            let e = u.w.get(S);
            if (null == e) {
                let t;
                ((t = {}).os = R()),
                    (t.browser = (function () {
                        let { userAgent: e, vendor: t = "" } = window.navigator,
                            { opera: n } = window;
                        if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
                        if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
                        if (/FBIOS/.test(e)) return "Facebook Mobile";
                        if (/CriOS/.test(e)) return "Chrome iOS";
                        if (/Apple/.test(t))
                            return /Mobile/.test(e) ||
                                (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
                                ? "Mobile Safari"
                                : "Safari";
                        else if (/Android/.test(e)) return /Chrome/.test(e) ? "Android Chrome" : "Android Mobile";
                        else if (/Edge/.test(e)) return "Edge";
                        else if (/Chrome/.test(e)) return "Chrome";
                        else if (/Konqueror/.test(e)) return "Konqueror";
                        else if (/Firefox/.test(e)) return "Firefox";
                        else if (/MSIE|Trident\//.test(e)) return "Internet Explorer";
                        else if (/Gecko/.test(e)) return "Mozilla";
                        else return "";
                    })()),
                    (t.device = C()),
                    (t.system_locale = (0, c.c)()),
                    (t.has_client_mods = (0, d.b)()),
                    (e = t),
                    u.w.set(S, e);
            }
            let t = u.w.get(N);
            null == t && ((t = L()), u.w.set(N, t));
            let n = I.u.get(N);
            if (null == n) {
                var i;
                let e;
                (i = L()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), I.u.set(N, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: E().version || "" },
                    os_version: E()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        i = {};
    }
function D(e) {
    (i = { ...i, ...e }), (r = (0, T.q)(i));
}
function h() {
    return i;
}
function g() {
    return r;
}
D(
    ((a = {}),
    (s = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == a.release_channel || "" === a.release_channel) &&
        (a.release_channel = s.split("-")[0]),
    isNaN((_ = parseInt("534155", 10))) || (a.client_build_number = _),
    null == (l = O?.app.getBuildNumber()) || isNaN(l) || (a.native_build_number = l),
    (a.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (a.has_client_mods = (0, d.b)()),
    (a.client_launch_id = A.C),
    a),
);
