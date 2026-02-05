"use strict";
n.d(t, { $: () => a });
var r = n(640831),
    i = n(476575);
function a(e) {
    var t;
    return "number" == typeof e
        ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
            ? e
            : null
        : (t = r.E1.exec(e))
          ? parseInt(t[1] + "ff", 16) >>> 0
          : i.colorNames && void 0 !== i.colorNames[e]
            ? i.colorNames[e]
            : (t = r.Qh.exec(e))
              ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | 255) >>> 0
              : (t = r.B3.exec(e))
                ? ((l(t[1]) << 24) | (l(t[2]) << 16) | (l(t[3]) << 8) | c(t[4])) >>> 0
                : (t = r.NV.exec(e))
                  ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                  : (t = r.UM.exec(e))
                    ? parseInt(t[1], 16) >>> 0
                    : (t = r.Ui.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                      : (t = r.KI.exec(e))
                        ? (255 | o(u(t[1]), d(t[2]), d(t[3]))) >>> 0
                        : (t = r.V$.exec(e))
                          ? (o(u(t[1]), d(t[2]), d(t[3])) | c(t[4])) >>> 0
                          : null;
}
function s(e, t, n) {
    return e < 60
        ? [t, n, 0]
        : e < 120
          ? [n, t, 0]
          : e < 180
            ? [0, t, n]
            : e < 240
              ? [0, n, t]
              : e < 300
                ? [n, 0, t]
                : [t, 0, n];
}
function o(e, t, n) {
    var r = (1 - Math.abs(2 * n - 1)) * t,
        i = r * (1 - Math.abs(((e / 60) % 2) - 1)),
        a = n - r / 2,
        o = s(e, r, i);
    return (
        (Math.round((o[0] + a) * 255) << 24) |
        (Math.round((o[1] + a) * 255) << 16) |
        (Math.round((o[2] + a) * 255) << 8)
    );
}
function l(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function u(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function c(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function d(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
