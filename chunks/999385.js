Object.defineProperty(t, '__esModule', { value: !0 }), (t.isvalidColorString = t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0);
var r = o(n(876344)),
    i = o(n(979590));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
t.simpleCheckForValidColor = function (e) {
    var t = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
        n = 0,
        i = 0;
    return (
        (0, r.default)(t, function (t) {
            e[t] && ((n += 1), isNaN(e[t]) || (i += 1), ('s' === t || 'l' === t) && /^\d+%$/.test(e[t]) && (i += 1));
        }),
        n === i && e
    );
};
var a = (t.toState = function (e, t) {
    var n = e.hex ? (0, i.default)(e.hex) : (0, i.default)(e),
        r = n.toHsl(),
        o = n.toHsv(),
        a = n.toRgb(),
        s = n.toHex();
    return (
        0 === r.s && ((r.h = t || 0), (o.h = t || 0)),
        {
            hsl: r,
            hex: '000000' === s && 0 === a.a ? 'transparent' : '#' + s,
            rgb: a,
            hsv: o,
            oldHue: e.h || t || r.h,
            source: e.source
        }
    );
});
(t.isValidHex = function (e) {
    if ('transparent' === e) return !0;
    var t = +('#' === String(e).charAt(0));
    return e.length !== 4 + t && e.length < 7 + t && (0, i.default)(e).isValid();
}),
    (t.getContrastingColor = function (e) {
        if (!e) return '#fff';
        var t = a(e);
        return 'transparent' === t.hex ? 'rgba(0,0,0,0.4)' : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    }),
    (t.red = {
        hsl: {
            a: 1,
            h: 0,
            l: 0.5,
            s: 1
        },
        hex: '#ff0000',
        rgb: {
            r: 255,
            g: 0,
            b: 0,
            a: 1
        },
        hsv: {
            h: 0,
            s: 1,
            v: 1,
            a: 1
        }
    }),
    (t.isvalidColorString = function (e, t) {
        var n = e.replace('\xB0', '');
        return (0, i.default)(t + ' (' + n + ')')._ok;
    });
