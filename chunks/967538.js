s.d(t, { Z: () => o });
var r = s(200651);
s(192379);
var n = s(325767);
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var s = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(s);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(s).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(s, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = s[t]),
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
let o = (e) => {
    var t,
        s,
        { className: o, backgroundColor: l, backgroundCircleSize: a } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var s,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var s,
                        r,
                        n = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (s = i[r]), t.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (s = i[r]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
            }
            return n;
        })(e, ['className', 'backgroundColor', 'backgroundCircleSize']);
    return (0, r.jsxs)(
        'svg',
        ((t = i(
            {
                width: '100%',
                height: '100%',
                viewBox: '0 0 100 100',
                fill: 'none',
                style: { overflow: 'visible' },
                xmlns: 'http://www.w3.org/2000/svg'
            },
            (0, n.Z)(i({}, c))
        )),
        (s = s =
            {
                children: [
                    (0, r.jsx)('circle', {
                        r: null != a ? a : '40%',
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
                                className: o
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
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(s)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
              }),
        t)
    );
};
