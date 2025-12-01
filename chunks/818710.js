n.d(t, {
    $L: () => d,
    AB: () => r,
    Dt: () => m,
    ED: () => s,
    FB: () => a,
    IJ: () => c,
    Ij: () => S,
    Qd: () => b,
    V5: () => l,
    Xf: () => y,
    eL: () => p,
    gn: () => h,
    jI: () => f,
    l5: () => g,
    nI: () => u,
    ox: () => _,
    qU: () => E,
    qq: () => v,
    y8: () => O,
}),
    n(35282);
var r = (function (e) {
    return (e.WINDOWS = "WINDOWS"), (e.OSX = "OSX"), (e.LINUX = "LINUX"), (e.WEB = "WEB"), e;
})({});
let i = window.DiscordNative,
    a = null != i,
    o = null != i ? i.process.platform : "";
function s() {
    return /^win/.test(o);
}
function l() {
    return "darwin" === o;
}
function c() {
    return "linux" === o;
}
function u() {
    return s() || l() || c();
}
function d() {
    return "WEB" === y();
}
function f() {
    return (
        null != navigator.userAgent &&
        null != navigator.userAgent.toLowerCase().match("(android ).+chrome/[.0-9]* mobile")
    );
}
function p() {
    var e;
    return (null == (e = navigator.userAgent) ? void 0 : e.match(/android/i)) != null;
}
function _() {
    var e;
    return (null == (e = navigator.userAgent) ? void 0 : e.match(/Macintosh/i)) != null;
}
function m() {
    return "android" === o;
}
function h() {
    return "ios" === o;
}
function g() {
    var e;
    return (null == (e = navigator.userAgent) ? void 0 : e.match(/OculusBrowser/i)) != null;
}
function E() {
    return g();
}
function b() {
    return u() || g() || a;
}
function y() {
    return s() ? "WINDOWS" : l() ? "OSX" : c() ? "LINUX" : "WEB";
}
function O() {
    return o;
}
function v() {
    switch (o) {
        case "ios":
        case "android":
            return o;
        default:
            return "web";
    }
}
function S() {
    let { userAgent: e } = window.navigator;
    if (/Windows/i.test(e)) return /Phone/.test(e) ? "windows mobile" : "windows";
    if (/(iPhone|iPad|iPod)/.test(e)) return "ios";
    if (/Android/.test(e)) return "android";
    if (/(BlackBerry|PlayBook|BB10)/i.test(e)) return "blackberry";
    if (/Mac/i.test(e))
        return null != window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2 ? "ios" : "macos";
    else if (/Linux/i.test(e)) return "linux";
}
