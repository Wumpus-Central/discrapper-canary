n.d(t, { Z: () => l });
var i = n(255367);
n(73800);
var r = n(325767);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
let l = (e) => {
    var t,
        n,
        { className: l, backgroundColor: a, backgroundCircleSize: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        s = Object.keys(e);
                    for (i = 0; i < s.length; i++) (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (i = 0; i < s.length; i++) (n = s[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ['className', 'backgroundColor', 'backgroundCircleSize']);
    return (0, i.jsxs)(
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
            (0, r.Z)(s({}, c))
        )),
        (n = n =
            {
                children: [
                    (0, i.jsx)('circle', {
                        r: null != o ? o : '40%',
                        cx: '50%',
                        cy: '50%',
                        className: a
                    }),
                    (0, i.jsxs)('g', {
                        transform: 'translate(50, 50) scale(0.6) translate(-51, -52)',
                        children: [
                            (0, i.jsx)('path', {
                                d: 'M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z',
                                fill: '#FF6BFA',
                                className: l
                            }),
                            (0, i.jsx)('path', {
                                d: 'M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z',
                                fill: '#FFDEF9'
                            }),
                            (0, i.jsx)('path', {
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
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
};
