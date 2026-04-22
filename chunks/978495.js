"use strict";
n.d(t, { $P: () => l, Kh: () => u, Oy: () => d, RJ: () => s, al: () => o, cZ: () => a, wu: () => i }), n(64700);
let r = ["gif", "webp", "png", "apng"];
function i(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src;
}
function s(e) {
    let t = e.toLowerCase().split(".").pop();
    return null != t && r.includes(t);
}
function a(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src;
}
function o(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie;
}
function l(e) {
    return "type" in e && "rive" === e.type && "function" == typeof e.rive;
}
function u(e) {
    return "type" in e && "dynamic" === e.type && "component" in e;
}
function d(e) {
    return null != e && ((!!i(e) && null != e.src && s(e.src)) || a(e) || o(e) || l(e));
}
