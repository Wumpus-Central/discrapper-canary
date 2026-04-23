"use strict";
r.r(t), r.d(t, { createStringInterpolator: () => A });
var n,
    a = function () {
        return (a =
            Object.assign ||
            function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var a in (t = arguments[r])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e;
            }).apply(this, arguments);
    },
    s = r(85402),
    i = r(273406),
    o = "[-+]?\\d*\\.?\\d+",
    l = o + "%";
function u() {
    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
    return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
}
var c = RegExp("rgb" + u(o, o, o)),
    d = RegExp("rgba" + u(o, o, o, o)),
    f = RegExp("hsl" + u(o, l, l)),
    p = RegExp("hsla" + u(o, l, l, o)),
    h = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    m = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    _ = /^#([0-9a-fA-F]{6})$/,
    g = /^#([0-9a-fA-F]{8})$/,
    v = r(476575);
function b(e, t, r) {
    var n = (1 - Math.abs(2 * r - 1)) * t,
        a = n * (1 - Math.abs(((e / 60) % 2) - 1)),
        s = r - n / 2,
        i =
            e < 60
                ? [n, a, 0]
                : e < 120
                  ? [a, n, 0]
                  : e < 180
                    ? [0, n, a]
                    : e < 240
                      ? [0, a, n]
                      : e < 300
                        ? [a, 0, n]
                        : [n, 0, a];
    return (
        (Math.round((i[0] + s) * 255) << 24) |
        (Math.round((i[1] + s) * 255) << 16) |
        (Math.round((i[2] + s) * 255) << 8)
    );
}
function y(e) {
    var t = parseInt(e, 10);
    return t < 0 ? 0 : t > 255 ? 255 : t;
}
function E(e) {
    return (((parseFloat(e) % 360) + 360) % 360) / 360;
}
function S(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
}
function T(e) {
    var t = parseFloat(e);
    return t < 0 ? 0 : t > 100 ? 1 : t / 100;
}
function x(e) {
    var t,
        r =
            "number" == typeof e
                ? e >>> 0 === e && e >= 0 && e <= 0xffffffff
                    ? e
                    : null
                : (t = _.exec(e))
                  ? parseInt(t[1] + "ff", 16) >>> 0
                  : v.colorNames && void 0 !== v.colorNames[e]
                    ? v.colorNames[e]
                    : (t = c.exec(e))
                      ? ((y(t[1]) << 24) | (y(t[2]) << 16) | (y(t[3]) << 8) | 255) >>> 0
                      : (t = d.exec(e))
                        ? ((y(t[1]) << 24) | (y(t[2]) << 16) | (y(t[3]) << 8) | S(t[4])) >>> 0
                        : (t = h.exec(e))
                          ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
                          : (t = g.exec(e))
                            ? parseInt(t[1], 16) >>> 0
                            : (t = m.exec(e))
                              ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0
                              : (t = f.exec(e))
                                ? (255 | b(E(t[1]), T(t[2]), T(t[3]))) >>> 0
                                : (t = p.exec(e))
                                  ? (b(E(t[1]), T(t[2]), T(t[3])) | S(t[4])) >>> 0
                                  : null;
    return null === r
        ? e
        : "rgba(" +
              ((0xff000000 & (r = r || 0)) >>> 24) +
              ", " +
              ((0xff0000 & r) >>> 16) +
              ", " +
              ((65280 & r) >>> 8) +
              ", " +
              (255 & r) / 255 +
              ")";
}
var w = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
    C = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
    D = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
    O = function (e, t, r, n, a) {
        return "rgba(" + Math.round(t) + ", " + Math.round(r) + ", " + Math.round(n) + ", " + a + ")";
    },
    A = function (e) {
        n || (n = v.colorNames ? RegExp("(" + Object.keys(v.colorNames).join("|") + ")", "g") : /^\b$/);
        var t = e.output.map(function (e) {
                return (0, s.oq)(e).replace(C, x).replace(n, x);
            }),
            r = t.map(function (e) {
                return e.match(w).map(Number);
            }),
            o = r[0]
                .map(function (e, t) {
                    return r.map(function (e) {
                        if (!(t in e)) throw Error('The arity of each "output" value must be equal');
                        return e[t];
                    });
                })
                .map(function (t) {
                    return (0, i.k)(a(a({}, e), { output: t }));
                });
        return function (e) {
            var r = 0;
            return t[0]
                .replace(w, function () {
                    return String(o[r++](e));
                })
                .replace(D, O);
        };
    };
