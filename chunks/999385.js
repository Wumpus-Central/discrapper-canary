Object.defineProperty(n, '__esModule', { value: !0 }), (n.isvalidColorString = n.red = n.getContrastingColor = n.isValidHex = n.toState = n.simpleCheckForValidColor = void 0);
var i = o(r(876344)),
    a = o(r(979590));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
n.simpleCheckForValidColor = function (e) {
    var n = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'],
        r = 0,
        a = 0;
    return (
        (0, i.default)(n, function (n) {
            e[n] && ((r += 1), isNaN(e[n]) || (a += 1), ('s' === n || 'l' === n) && /^\d+%$/.test(e[n]) && (a += 1));
        }),
        r === a && e
    );
};
var s = (n.toState = function (e, n) {
    var r = e.hex ? (0, a.default)(e.hex) : (0, a.default)(e),
        i = r.toHsl(),
        o = r.toHsv(),
        s = r.toRgb(),
        l = r.toHex();
    return (
        0 === i.s && ((i.h = n || 0), (o.h = n || 0)),
        {
            hsl: i,
            hex: '000000' === l && 0 === s.a ? 'transparent' : '#' + l,
            rgb: s,
            hsv: o,
            oldHue: e.h || n || i.h,
            source: e.source
        }
    );
});
(n.isValidHex = function (e) {
    if ('transparent' === e) return !0;
    var n = '#' === String(e).charAt(0) ? 1 : 0;
    return e.length !== 4 + n && e.length < 7 + n && (0, a.default)(e).isValid();
}),
    (n.getContrastingColor = function (e) {
        if (!e) return '#fff';
        var n = s(e);
        return 'transparent' === n.hex ? 'rgba(0,0,0,0.4)' : (299 * n.rgb.r + 587 * n.rgb.g + 114 * n.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    }),
    (n.red = {
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
    (n.isvalidColorString = function (e, n) {
        var r = e.replace('\xB0', '');
        return (0, a.default)(n + ' (' + r + ')')._ok;
    });
