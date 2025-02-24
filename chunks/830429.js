var n,
    o =
        Object.assign ||
        function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
        },
    a = (n = r(192379)) && n.__esModule ? n : { default: n };
t.default = function (e) {
    var t = e.fill,
        r = e.width,
        n = e.height,
        i = e.style,
        l = (function (e, t) {
            var r = {};
            for (var n in e) !(t.indexOf(n) >= 0) && Object.prototype.hasOwnProperty.call(e, n) && (r[n] = e[n]);
            return r;
        })(e, ['fill', 'width', 'height', 'style']);
    return a.default.createElement(
        'svg',
        o(
            {
                viewBox: '0 0 24 24',
                style: o(
                    {
                        fill: void 0 === t ? 'currentColor' : t,
                        width: void 0 === r ? 24 : r,
                        height: void 0 === n ? 24 : n
                    },
                    void 0 === i ? {} : i
                )
            },
            l
        ),
        a.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
    );
};
