i = { value: !0 };
var i,
    a =
        Object.assign ||
        function (e) {
            for (var n = 1; n < arguments.length; n++) {
                var r = arguments[n];
                for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i]);
            }
            return e;
        },
    o = s(r(192379));
function s(e) {
    return e && e.__esModule ? e : { default: e };
}
function l(e, n) {
    var r = {};
    for (var i in e) {
        if (!(n.indexOf(i) >= 0)) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
    }
    return r;
}
var u = 24;
n.default = function (e) {
    var n = e.fill,
        r = void 0 === n ? 'currentColor' : n,
        i = e.width,
        s = void 0 === i ? u : i,
        c = e.height,
        d = void 0 === c ? u : c,
        f = e.style,
        p = void 0 === f ? {} : f,
        h = l(e, ['fill', 'width', 'height', 'style']);
    return o.default.createElement(
        'svg',
        a(
            {
                viewBox: '0 0 ' + u + ' ' + u,
                style: a(
                    {
                        fill: r,
                        width: s,
                        height: d
                    },
                    p
                )
            },
            h
        ),
        o.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
    );
};
