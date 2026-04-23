"use strict";
let r, i, s, a, o, l;
n.d(t, { BV: () => O, Fy: () => C, Pf: () => S, Pg: () => N, R0: () => I, sv: () => R });
var u = n(214958),
    c = n.n(u);
n(689953);
var d = n(70298),
    _ = n(175259),
    f = n(506774),
    p = n(362474),
    h = n(71931),
    E = n(368849);
let m = "deviceProperties",
    g = "referralProperties",
    A = window.DiscordNative;
if (null != A) {
    let e,
        t = A.app.getVersion(),
        n = A.process.platform,
        i = A.os.release,
        s = A.os.arch,
        a = A.os.appArch,
        o = A.app.getReleaseChannel(),
        l = (0, _.c)();
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
        ((r = {
            os: e,
            browser: "Discord Client",
            release_channel: o || "unknown",
            client_version: t,
            os_version: i,
            os_arch: s,
            app_arch: a,
            system_locale: l,
            has_client_mods: (0, d.b)(),
            client_launch_id: h.C,
        }),
        c().name?.toLocaleLowerCase() === "electron" &&
            ((r.browser_user_agent = c().ua || ""), (r.browser_version = c().version || "")),
        "linux" === n)
    ) {
        let e = A.crashReporter.getMetadata();
        (r.window_manager = e.wm),
            (r.distro = e.distro),
            (r.runtime_environment = e.runtime_environment),
            (r.display_server = e.display_server);
    } else
        "darwin" === n ? (r.os_sdk_version = i?.split(".")[0]) : "win32" === n && (r.os_sdk_version = i?.split(".")[2]);
}
function I() {
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
function T(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function S() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
let y = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function N(e) {
    let t = {};
    return (
        y.forEach((n) => {
            let r = T(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function v() {
    let e,
        t = {};
    return (
        (t.referrer = document.referrer),
        (t.referring_domain = (e = document.referrer.split("/")).length >= 3 ? e[2] : ""),
        (t = {
            ...t,
            ...N(window.location.href),
            ...(function () {
                let e,
                    t = {},
                    n = document.referrer,
                    r =
                        0 === (e = document.referrer).search("https?://(.*)google.([^/?]*)")
                            ? "google"
                            : 0 === e.search("https?://(.*)bing.com")
                              ? "bing"
                              : 0 === e.search("https?://(.*)yahoo.com")
                                ? "yahoo"
                                : 0 === e.search("https?://(.*)duckduckgo.com")
                                  ? "duckduckgo"
                                  : null;
                if (null != r) {
                    t.search_engine = r;
                    let e = T(n, "yahoo" !== r ? "q" : "p");
                    e.length > 0 && (t.mp_keyword = e);
                }
                return t;
            })(),
        })
    );
}
if (null == r)
    try {
        r = (function () {
            let e = f.w.get(m);
            if (null == e) {
                let t;
                ((t = {}).os = I()),
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
                    (t.device = S()),
                    (t.system_locale = (0, _.c)()),
                    (t.has_client_mods = (0, d.b)()),
                    (e = t),
                    f.w.set(m, e);
            }
            let t = f.w.get(g);
            null == t && ((t = v()), f.w.set(g, t));
            let n = p.u.get(g);
            if (null == n) {
                var r;
                let e;
                (r = v()), (e = {}), Object.keys(r).map((t) => (e[`${t}_current`] = r[t])), (n = e), p.u.set(g, n);
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
        r = {};
    }
function C(e) {
    (r = { ...r, ...e }), (i = (0, E.q)(r));
}
function O() {
    return r;
}
function R() {
    return i;
}
C(
    ((s = {}),
    (a = window.GLOBAL_ENV.RELEASE_CHANNEL) &&
        (null == s.release_channel || "" === s.release_channel) &&
        (s.release_channel = a.split("-")[0]),
    isNaN((o = parseInt("534149", 10))) || (s.client_build_number = o),
    null == (l = A?.app.getBuildNumber()) || isNaN(l) || (s.native_build_number = l),
    (s.client_event_source = (function () {
        try {
            if (__OVERLAY__) return "OVERLAY";
        } catch (e) {}
        return null;
    })()),
    (s.has_client_mods = (0, d.b)()),
    (s.client_launch_id = h.C),
    s),
);
