"use strict";
let r, i;
n.d(t, { BV: () => w, Fy: () => L, Pf: () => T, Pg: () => R, R0: () => m, sv: () => M });
var s = n(214958),
    a = n.n(s);
n(689953);
var o = n(70298),
    l = n(175259),
    u = n(506774),
    c = n(362474),
    d = n(71931),
    _ = n(368849);
let f = "deviceProperties",
    p = "referralProperties",
    h = window.DiscordNative;
if (null != h) {
    let e,
        t = h.app.getVersion(),
        n = h.process.platform,
        i = h.os.release,
        s = h.os.arch,
        u = h.os.appArch,
        c = h.app.getReleaseChannel(),
        _ = (0, l.c)();
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
            release_channel: c || "unknown",
            client_version: t,
            os_version: i,
            os_arch: s,
            app_arch: u,
            system_locale: _,
            has_client_mods: (0, o.b)(),
            client_launch_id: d.C,
        }),
        a().name?.toLocaleLowerCase() === "electron" &&
            ((r.browser_user_agent = a().ua || ""), (r.browser_version = a().version || "")),
        "linux" === n)
    ) {
        let e = h.crashReporter.getMetadata();
        (r.window_manager = e.wm),
            (r.distro = e.distro),
            (r.runtime_environment = e.runtime_environment),
            (r.display_server = e.display_server);
    } else
        "darwin" === n ? (r.os_sdk_version = i?.split(".")[0]) : "win32" === n && (r.os_sdk_version = i?.split(".")[2]);
}
function m() {
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
function E(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = RegExp(`[\\?&]${t}=([^&#]*)`).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function g() {
    let e = document.referrer;
    return 0 === e.search("https?://(.*)google.([^/?]*)")
        ? "google"
        : 0 === e.search("https?://(.*)bing.com")
          ? "bing"
          : 0 === e.search("https?://(.*)yahoo.com")
            ? "yahoo"
            : 0 === e.search("https?://(.*)duckduckgo.com")
              ? "duckduckgo"
              : null;
}
function A() {
    let e = {},
        t = document.referrer,
        n = g(),
        r = "yahoo" !== n ? "q" : "p";
    if (null != n) {
        e.search_engine = n;
        let i = E(t, r);
        i.length > 0 && (e.mp_keyword = i);
    }
    return e;
}
function I() {
    let { userAgent: e, vendor: t = "" } = window.navigator,
        { opera: n } = window;
    if (n) return /Mini/.test(e) ? "Opera Mini" : "Opera";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/FBIOS/.test(e)) return "Facebook Mobile";
    if (/CriOS/.test(e)) return "Chrome iOS";
    if (/Apple/.test(t))
        return /Mobile/.test(e) || (null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2)
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
}
function T() {
    let { userAgent: e } = window.navigator;
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "BlackBerry";
    if (/Windows Phone/i.test(e)) return "Windows Phone";
    if (/Android/.test(e)) return "Android";
    if (/iPhone/.test(e)) return "iPhone";
    if (/iPad/.test(e)) return "iPad";
    else return "";
}
function S() {
    let e = document.referrer.split("/");
    return e.length >= 3 ? e[2] : "";
}
function y() {
    try {
        if (__OVERLAY__) return "OVERLAY";
    } catch (e) {}
    return null;
}
function v() {
    let e = {};
    return (
        (e.os = m()),
        (e.browser = I()),
        (e.device = T()),
        (e.system_locale = (0, l.c)()),
        (e.has_client_mods = (0, o.b)()),
        e
    );
}
function N() {
    return {
        ...{ browser_user_agent: window.navigator.userAgent || "", browser_version: a().version || "" },
        os_version: a()?.os?.version ?? "",
    };
}
let C = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function R(e) {
    let t = {};
    return (
        C.forEach((n) => {
            let r = E(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function O() {
    let e = {};
    return (
        (e.referrer = document.referrer), (e.referring_domain = S()), (e = { ...e, ...R(window.location.href), ...A() })
    );
}
function b(e, t) {
    let n = {};
    return Object.keys(e).map((r) => (n[`${r}${t}`] = e[r])), n;
}
function D() {
    let e = u.w.get(f);
    null == e && ((e = v()), u.w.set(f, e));
    let t = u.w.get(p);
    null == t && ((t = O()), u.w.set(p, t));
    let n = c.u.get(p);
    return null == n && ((n = b(O(), "_current")), c.u.set(p, n)), { ...e, ...N(), ...t, ...n };
}
if (null == r)
    try {
        r = D();
    } catch (e) {
        r = {};
    }
function L(e) {
    (r = { ...r, ...e }), (i = (0, _.q)(r));
}
function w() {
    return r;
}
function M() {
    return i;
}
L(
    (function () {
        let e = {},
            t = window.GLOBAL_ENV.RELEASE_CHANNEL;
        t && (null == e.release_channel || "" === e.release_channel) && (e.release_channel = t.split("-")[0]);
        let n = parseInt("507321", 10);
        isNaN(n) || (e.client_build_number = n);
        let r = h?.app.getBuildNumber();
        return (
            null == r || isNaN(r) || (e.native_build_number = r),
            (e.client_event_source = y()),
            (e.has_client_mods = (0, o.b)()),
            (e.client_launch_id = d.C),
            e
        );
    })(),
);
