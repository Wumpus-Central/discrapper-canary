i = { value: !0 };
var i,
    r =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            }
            return e;
        },
    a = s(n(192379));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function o(e, t) {
    var n = {};
    for (var i in e) !(t.indexOf(i) >= 0) && Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
    return n;
}
var l = 24;
t.default = function (e) {
    var t = e.fill,
        n = void 0 === t ? 'currentColor' : t,
        i = e.width,
        s = void 0 === i ? l : i,
        u = e.height,
        c = void 0 === u ? l : u,
        d = e.style,
        f = void 0 === d ? {} : d,
        _ = o(e, ['fill', 'width', 'height', 'style']);
    return a.default.createElement(
        'svg',
        r(
            {
                viewBox: '0 0 ' + l + ' ' + l,
                style: r(
                    {
                        fill: n,
                        width: s,
                        height: c
                    },
                    f
                )
            },
            _
        ),
        a.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
    );
};
