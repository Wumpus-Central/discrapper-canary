r.d(t, { Z: () => o });
var n = r(200651);
r(192379);
var i = r(325767);
function s(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let o = (e) => {
    var t,
        r,
        { className: o, backgroundColor: l, backgroundCircleSize: a } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        s = Object.keys(e);
                    for (n = 0; n < s.length; n++) (r = s[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var s = Object.getOwnPropertySymbols(e);
                for (n = 0; n < s.length; n++) (r = s[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['className', 'backgroundColor', 'backgroundCircleSize']);
    return (0, n.jsxs)(
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
        (r = r =
            {
                children: [
                    (0, n.jsx)('circle', {
                        r: null != a ? a : '40%',
                        cx: '50%',
                        cy: '50%',
                        className: l
                    }),
                    (0, n.jsxs)('g', {
                        transform: 'translate(50, 50) scale(0.6) translate(-51, -52)',
                        children: [
                            (0, n.jsx)('path', {
                                d: 'M52.0002 11.7556L28.3402 35.4156V68.6956L52.0002 92.3556L75.6602 68.6956V35.4156L52.0002 11.7556ZM63.8302 63.7556L52.0002 75.6289L40.1702 63.7989V40.3122L52.0002 28.4822L63.8302 40.3122V63.7556Z',
                                fill: '#FF6BFA',
                                className: o
                            }),
                            (0, n.jsx)('path', {
                                d: 'M40.1702 40.3122V63.7989L52.0002 75.6289L63.8302 63.7989V40.3122L52.0002 28.4822L40.1702 40.3122Z',
                                fill: '#FFDEF9'
                            }),
                            (0, n.jsx)('path', {
                                d: 'M52.0002 11.7556V28.4822L63.8302 40.3122L75.6602 35.4156L52.0002 11.7556Z',
                                fill: '#FFB0FF'
                            })
                        ]
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
};
