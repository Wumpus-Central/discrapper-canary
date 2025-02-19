n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let a = (e) => {
    var t,
        n,
        { className: a, backgroundColor: l, backgroundCircleSize: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        s = Object.keys(e);
                    for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['className', 'backgroundColor', 'backgroundCircleSize']);
    return (0, r.jsxs)(
        'svg',
        ((t = s(
            {
                width: '100%',
                height: '100%',
                viewBox: '0 0 100 100',
                fill: 'none',
                style: { overflow: 'visible' },
                xmlns: 'http://www.w3.org/2000/svg'
            },
            (0, i.Z)(s({}, c))
        )),
        (n = n =
            {
                children: [
                    (0, r.jsx)('circle', {
                        r: null != o ? o : '40%',
                        cx: '50%',
                        cy: '50%',
                        className: l
                    }),
                    (0, r.jsxs)('g', {
                        transform: 'translate(50, 50) scale(0.6) translate(-51, -52)',
                        children: [
                            (0, r.jsx)('path', {
                                d: 'M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z',
                                fill: '#FF6BFA',
                                className: a
                            }),
                            (0, r.jsx)('path', {
                                d: 'M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z',
                                fill: '#FFDEF9'
                            }),
                            (0, r.jsx)('path', {
                                d: 'M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z',
                                fill: '#FFB0FF'
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
