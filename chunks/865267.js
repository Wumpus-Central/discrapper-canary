n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var i = n(960259),
    s = n(827334),
    a = n(325767);
let l = (0, i.hN)(
    function (e) {
        var t,
            n,
            { width: i = 24, height: s = 24, color: l = 'currentColor', foreground: o } = e,
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
            })(e, ['width', 'height', 'color', 'foreground']);
        return (0, r.jsx)(
            'svg',
            ((t = (function (e) {
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
            })({}, (0, a.Z)(c))),
            (n = n =
                {
                    width: i,
                    height: s,
                    viewBox: '0 0 32 32',
                    children: (0, r.jsx)('path', {
                        fill: l,
                        className: o,
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M16.5 1.46002L24.62 9.58002L20.62 11.23L16.5 7.12002V1.46002ZM11 12.16L7 10.5V21.42L11 19.76V12.16ZM16.5 24.8001V30.4601L24.62 22.3401L20.62 20.6801L16.5 24.8001ZM15.5 7.12004V1.46004L7.38 9.58004L11.38 11.23L15.5 7.12004ZM15.5 30.46L7.38 22.34L11.38 20.68L15.5 24.8V30.46ZM21 19.76L25 21.42V10.5L21 12.16V19.76ZM16 8.03003L20 12.03V19.89L16 23.89L12 19.89V12.03L16 8.03003Z'
                    })
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
    },
    s.$,
    void 0,
    { size: 24 }
);
