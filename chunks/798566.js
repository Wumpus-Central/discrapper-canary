let i, a, r, s, l, o;
n.d(t, { BV: () => L, Fy: () => g, Pf: () => m, Pg: () => C, R0: () => f, sv: () => D });
var d = n(214958),
    c = n.n(d);
n(689953);
var _ = n(70298),
    E = n(175259),
    u = n(506774),
    A = n(362474),
    I = n(71931),
    T = n(368849);
let h = "deviceProperties",
    S = "referralProperties",
    N = window.DiscordNative;
if (null != N) {
    let e,
        t = N.app.getVersion(),
        n = N.process.platform,
        a = N.os.release,
        r = N.os.arch,
        s = N.os.appArch,
        l = N.app.getReleaseChannel(),
        o = (0, E.c)();
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
            release_channel: l || "unknown",
            client_version: t,
            os_version: a,
            os_arch: r,
            app_arch: s,
            system_locale: o,
            has_client_mods: (0, _.b)(),
            client_launch_id: I.C,
        }),
        c().name?.toLocaleLowerCase() === "electron" &&
            ((i.browser_user_agent = c().ua || ""), (i.browser_version = c().version || "")),
        "linux" === n)
    ) {
        let e = N.crashReporter.getMetadata();
        (i.window_manager = e.wm),
            (i.distro = e.distro),
            (i.runtime_environment = e.runtime_environment),
            (i.display_server = e.display_server);
    } else
        "darwin" === n ? (i.os_sdk_version = a?.split(".")[0]) : "win32" === n && (i.os_sdk_version = a?.split(".")[2]);
}
function f() {
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
function p(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function m() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
let O = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function C(e) {
    let t = {};
    return (
        O.forEach((n) => {
            let i = p(e, n);
            i.length > 0 && (t[n] = i);
        }),
        t
    );
}
function R() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...C(window.location.href),
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
                    let e = p(n, "yahoo" !== i ? "q" : "p");
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
            let e = u.w.get(h);
            if (null == e) {
                let t;
                ((t = {}).os = f()),
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
                    (t.device = m()),
                    (t.system_locale = (0, E.c)()),
                    (t.has_client_mods = (0, _.b)()),
                    (e = t),
                    u.w.set(h, e);
            }
            let t = u.w.get(S);
            null == t && ((t = R()), u.w.set(S, t));
            let n = A.u.get(S);
            if (null == n) {
                var i;
                let e;
                (i = R()), (e = {}), Object.keys(i).map((t) => (e[`${t}_current`] = i[t])), (n = e), A.u.set(S, n);
            }
            return {
                ...e,
                ...{
                    ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: c().version || "" },
                    os_version: c()?.os?.version ?? "",
                },
                ...t,
                ...n,
            };
        })();
    } catch (e) {
        i = {};
    }
function g(e) {
    (i = { ...i, ...e }), (a = (0, T.q)(i));
}
function L() {
    return i;
}
function D() {
    return a;
}
g(
    ((r = {}),
    (s = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == r.release_channel || "" === r.release_channel) &&
        (r.release_channel = s.split("-")[0]),
    isNaN((l = parseInt("537800", 10))) || (r.client_build_number = l),
    null == (o = N?.app.getBuildNumber()) || isNaN(o) || (r.native_build_number = o),
    (r.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (r.has_client_mods = (0, _.b)()),
    (r.client_launch_id = I.C),
    r),
);
