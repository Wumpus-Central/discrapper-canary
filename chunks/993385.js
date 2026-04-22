"use strict";
n.d(t, { $: () => s });
var r = n(640831),
    i = n(476575);
function s(e) {
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
              ? ((o(t[1]) << 24) | (o(t[2]) << 16) | (o(t[3]) << 8) | 255) >>> 0
              : (t = r.B3.exec(e))
                ? ((o(t[1]) << 24) | (o(t[2]) << 16) | (o(t[3]) << 8) | u(t[4])) >>> 0
                : (t = r.NV.exec(e))
                  ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                  : (t = r.UM.exec(e))
                    ? parseInt(t[1], 16) >>> 0
                    : (t = r.Ui.exec(e))
                      ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                      : (t = r.KI.exec(e))
                        ? (255 | a(l(t[1]), d(t[2]), d(t[3]))) >>> 0
                        : (t = r.V$.exec(e))
                          ? (a(l(t[1]), d(t[2]), d(t[3])) | u(t[4])) >>> 0
                          : null;
}
function a(e, t, n) {
    var r = (1 - Math.abs(2 * n - 1)) * t,
        i = r * (1 - Math.abs(((e / 60) % 2) - 1)),
        s = n - r / 2,
        a =
            e < 60
                ? [r, i, 0]
                : e < 120
                  ? [i, r, 0]
                  : e < 180
                    ? [0, r, i]
                    : e < 240
                      ? [0, i, r]
                      : e < 300
                        ? [i, 0, r]
                        : [r, 0, i];
    return (
        (Math.round((a[0] + s) * 255) << 24) |
        (Math.round((a[1] + s) * 255) << 16) |
        (Math.round((a[2] + s) * 255) << 8)
    );
}
function o(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function l(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function u(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function d(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
