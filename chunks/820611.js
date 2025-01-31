n.d(t, {
    FX: () => l,
    LX: () => s,
    Qg: () => u,
    jH: () => o,
    p7: () => c
});
var i = n(845389),
    r = n(979590),
    a = n.n(r),
    s = function (e) {
        var t = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
            n = 0,
            r = 0;
        return (
            (0, i.Z)(t, function (t) {
                e[t] && ((n += 1), isNaN(e[t]) || (r += 1), ('s' === t || 'l' === t) && /^\d+%$/.test(e[t]) && (r += 1));
            }),
            n === r && e
        );
    },
    o = function (e, t) {
        var n = e.hex ? a()(e.hex) : a()(e),
            i = n.toHsl(),
            r = n.toHsv(),
            s = n.toRgb(),
            o = n.toHex();
        return (
            0 === i.s && ((i.h = t || 0), (r.h = t || 0)),
            {
                hsl: i,
                hex: '000000' === o && 0 === s.a ? 'transparent' : '#' + o,
                rgb: s,
                hsv: r,
                oldHue: e.h || t || i.h,
                source: e.source
            }
        );
    },
    l = function (e) {
        if ('transparent' === e) return !0;
        var t = '#' === String(e).charAt(0) ? 1 : 0;
        return e.length !== 4 + t && e.length < 7 + t && a()(e).isValid();
    },
    u = function (e) {
        if (!e) return '#fff';
        var t = o(e);
        return 'transparent' === t.hex ? 'rgba(0,0,0,0.4)' : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    },
    c = function (e, t) {
        var n = e.replace('\xB0', '');
        return a()(t + ' (' + n + ')')._ok;
    };
