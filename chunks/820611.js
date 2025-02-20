n.d(t, {
    FX: () => l,
    LX: () => a,
    Qg: () => c,
    jH: () => s,
    p7: () => u
});
var r = n(845389),
    i = n(979590),
    o = n.n(i),
    a = function (e) {
        var t = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
            n = 0,
            i = 0;
        return (
            (0, r.Z)(t, function (t) {
                e[t] && ((n += 1), isNaN(e[t]) || (i += 1), ('s' === t || 'l' === t) && /^\d+%$/.test(e[t]) && (i += 1));
            }),
            n === i && e
        );
    },
    s = function (e, t) {
        var n = e.hex ? o()(e.hex) : o()(e),
            r = n.toHsl(),
            i = n.toHsv(),
            a = n.toRgb(),
            s = n.toHex();
        return (
            0 === r.s && ((r.h = t || 0), (i.h = t || 0)),
            {
                hsl: r,
                hex: '000000' === s && 0 === a.a ? 'transparent' : '#' + s,
                rgb: a,
                hsv: i,
                oldHue: e.h || t || r.h,
                source: e.source
            }
        );
    },
    l = function (e) {
        if ('transparent' === e) return !0;
        var t = +('#' === String(e).charAt(0));
        return e.length !== 4 + t && e.length < 7 + t && o()(e).isValid();
    },
    c = function (e) {
        if (!e) return '#fff';
        var t = s(e);
        return 'transparent' === t.hex ? 'rgba(0,0,0,0.4)' : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    },
    u = function (e, t) {
        var n = e.replace('\xB0', '');
        return o()(t + ' (' + n + ')')._ok;
    };
