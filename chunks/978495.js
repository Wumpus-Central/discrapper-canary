n(582128);
let i = ["gif", "webp", "png", "apng"],
    r = ["png", "jpg", "jpeg", "webp", "svg"];
function a(e) {
    return "type" in e && "image" === e.type && "string" == typeof e.src;
}
function s(e) {
    let t = e.toLowerCase().split(".").pop();
    return null != t && i.includes(t);
}
function l(e) {
    return "type" in e && "video" === e.type && "string" == typeof e.src;
}
function o(e) {
    return "type" in e && "lottie" === e.type && "function" == typeof e.lottie;
}
function d(e) {
    return "type" in e && "rive" === e.type && "function" == typeof e.rive;
}
n.d(
    t,
    {},
    {
        $P: d,
        Kh: function (e) {
            return "type" in e && "dynamic" === e.type && "component" in e;
        },
        Oy: function (e) {
            return null != e && ((!!a(e) && null != e.src && s(e.src)) || l(e) || o(e) || d(e));
        },
        RJ: s,
        al: o,
        cZ: l,
        gA: function (e) {
            let t = e.toLowerCase().split(".").pop();
            return null != t && r.includes(t);
        },
        wu: a,
    },
);
