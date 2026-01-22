let r, i;
n.d(t, {
    BV: () => k,
    Fy: () => M,
    Pf: () => T,
    Pg: () => D,
    R0: () => O,
    sv: () => U,
}),
    n(747238),
    n(812715),
    n(591487),
    n(727858);
var a,
    s = n(214958),
    o = n.n(s);
n(689953);
var l = n(70298),
    c = n(175259),
    u = n(506774),
    d = n(362474),
    f = n(71931),
    p = n(368849);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = "deviceProperties",
    b = "referralProperties",
    y = window.DiscordNative;
if (null != y) {
    let e,
        t = y.remoteApp.getVersion(),
        n = y.process.platform,
        i = y.os.release,
        s = y.os.arch,
        u = y.os.appArch,
        d = y.remoteApp.getReleaseChannel(),
        p = (0, c.c)();
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
            release_channel: d || "unknown",
            client_version: t,
            os_version: i,
            os_arch: s,
            app_arch: u,
            system_locale: p,
            has_client_mods: (0, l.b)(),
            client_launch_id: f.C,
        }),
        (null == (a = o().name) ? void 0 : a.toLocaleLowerCase()) === "electron" &&
            ((r.browser_user_agent = o().ua || ""), (r.browser_version = o().version || "")),
        "linux" === n)
    ) {
        let e = y.crashReporter.getMetadata();
        (r.window_manager = e.wm),
            (r.distro = e.distro),
            (r.runtime_environment = e.runtime_environment),
            (r.display_server = e.display_server);
    } else
        "darwin" === n
            ? (r.os_sdk_version = null == i ? void 0 : i.split(".")[0])
            : "win32" === n && (r.os_sdk_version = null == i ? void 0 : i.split(".")[2]);
}
function O() {
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
function A(e, t) {
    if (null == e) return "";
    t = t.replace(/[[]/, "\\[").replace(/[\]]/, "\\]");
    let n = new RegExp("[\\?&]".concat(t, "=([^&#]*)")).exec(e);
    return null === n || ("string" != typeof n[1] && n[1].length) ? "" : decodeURIComponent(n[1]).replace(/\+/g, " ");
}
function v() {
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
function S() {
    let e = {},
        t = document.referrer,
        n = v(),
        r = "yahoo" !== n ? "q" : "p";
    if (null != n) {
        e.search_engine = n;
        let i = A(t, r);
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
function C() {
    let e = document.referrer.split("/");
    return e.length >= 3 ? e[2] : "";
}
function N() {
    try {
        if (__OVERLAY__) return "OVERLAY";
    } catch (e) {}
    return null;
}
function R() {
    let e = {};
    return (
        (e.os = O()),
        (e.browser = I()),
        (e.device = T()),
        (e.system_locale = (0, c.c)()),
        (e.has_client_mods = (0, l.b)()),
        e
    );
}
function w() {
    var e, t;
    return g(
        h(
            {},
            {
                browser_user_agent: window.navigator.userAgent || "",
                browser_version: o().version || "",
            },
        ),
        {
            os_version:
                null != (e = null === o() || void 0 === o() || null == (t = o().os) ? void 0 : t.version) ? e : "",
        },
    );
}
let P = "utm_source utm_medium utm_campaign utm_content utm_term".split(" ");
function D(e) {
    let t = {};
    return (
        P.forEach((n) => {
            let r = A(e, n);
            r.length > 0 && (t[n] = r);
        }),
        t
    );
}
function x() {
    let e = {};
    return (e.referrer = document.referrer), (e.referring_domain = C()), (e = h({}, e, D(window.location.href), S()));
}
function L(e, t) {
    let n = {};
    return Object.keys(e).map((r) => (n["".concat(r).concat(t)] = e[r])), n;
}
function j() {
    let e = u.w.get(E);
    null == e && ((e = R()), u.w.set(E, e));
    let t = u.w.get(b);
    null == t && ((t = x()), u.w.set(b, t));
    let n = d.u.get(b);
    return null == n && ((n = L(x(), "_current")), d.u.set(b, n)), h({}, e, w(), t, n);
}
if (null == r)
    try {
        r = j();
    } catch (e) {
        r = {};
    }
function M(e) {
    (r = h({}, r, e)), (i = (0, p.q)(r));
}
function k() {
    return r;
}
function U() {
    return i;
}
M(
    (function () {
        var e, t;
        let n = {},
            r = window.GLOBAL_ENV.RELEASE_CHANNEL;
        r && (null == n.release_channel || "" === n.release_channel) && (n.release_channel = r.split("-")[0]);
        let i = parseInt("488133", 10);
        isNaN(i) || (n.client_build_number = i);
        let a = null == y || null == (e = (t = y.remoteApp).getBuildNumber) ? void 0 : e.call(t);
        return (
            isNaN(a) || (n.native_build_number = a),
            (n.client_event_source = N()),
            (n.has_client_mods = (0, l.b)()),
            (n.client_launch_id = f.C),
            n
        );
    })(),
);
