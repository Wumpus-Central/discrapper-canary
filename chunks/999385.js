Object.defineProperty(t, '__esModule', { value: !0 }), (t.isvalidColorString = t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0);
var i = a(n(876344)),
    r = a(n(979590));
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
t.simpleCheckForValidColor = function (e) {
    var t = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
        n = 0,
        r = 0;
    return (
        (0, i.default)(t, function (t) {
            e[t] && ((n += 1), isNaN(e[t]) || (r += 1), ('s' === t || 'l' === t) && /^\d+%$/.test(e[t]) && (r += 1));
        }),
        n === r && e
    );
};
var s = (t.toState = function (e, t) {
    var n = e.hex ? (0, r.default)(e.hex) : (0, r.default)(e),
        i = n.toHsl(),
        a = n.toHsv(),
        s = n.toRgb(),
        o = n.toHex();
    return (
        0 === i.s && ((i.h = t || 0), (a.h = t || 0)),
        {
            hsl: i,
            hex: '000000' === o && 0 === s.a ? 'transparent' : '#' + o,
            rgb: s,
            hsv: a,
            oldHue: e.h || t || i.h,
            source: e.source
        }
    );
});
(t.isValidHex = function (e) {
    if ('transparent' === e) return !0;
    var t = '#' === String(e).charAt(0) ? 1 : 0;
    return e.length !== 4 + t && e.length < 7 + t && (0, r.default)(e).isValid();
}),
    (t.getContrastingColor = function (e) {
        if (!e) return '#fff';
        var t = s(e);
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
        return (0, r.default)(t + ' (' + n + ')')._ok;
    });
