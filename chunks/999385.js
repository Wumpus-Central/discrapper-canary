Object.defineProperty(t, '__esModule', { value: !0 }), (t.isvalidColorString = t.red = t.getContrastingColor = t.isValidHex = t.toState = t.simpleCheckForValidColor = void 0);
var n = a(r(876344)),
    o = a(r(979590));
function a(e) {
    return e && e.__esModule ? e : { default: e };
}
t.simpleCheckForValidColor = function (e) {
    var t = 0,
        r = 0;
    return (
        (0, n.default)(['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'], function (n) {
            e[n] && ((t += 1), isNaN(e[n]) || (r += 1), ('s' === n || 'l' === n) && /^\d+%$/.test(e[n]) && (r += 1));
        }),
        t === r && e
    );
};
var i = (t.toState = function (e, t) {
    var r = e.hex ? (0, o.default)(e.hex) : (0, o.default)(e),
        n = r.toHsl(),
        a = r.toHsv(),
        i = r.toRgb(),
        l = r.toHex();
    return (
        0 === n.s && ((n.h = t || 0), (a.h = t || 0)),
        {
            hsl: n,
            hex: '000000' === l && 0 === i.a ? 'transparent' : '#' + l,
            rgb: i,
            hsv: a,
            oldHue: e.h || t || n.h,
            source: e.source
        }
    );
});
(t.isValidHex = function (e) {
    if ('transparent' === e) return !0;
    var t = +('#' === String(e).charAt(0));
    return e.length !== 4 + t && e.length < 7 + t && (0, o.default)(e).isValid();
}),
    (t.getContrastingColor = function (e) {
        if (!e) return '#fff';
        var t = i(e);
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
        var r = e.replace('\xB0', '');
        return (0, o.default)(t + ' (' + r + ')')._ok;
    });
