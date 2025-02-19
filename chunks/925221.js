n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var i = n(325767);
function s(e) {
    var t,
        n,
        { width: s = 16, height: a = 16, color: l = 'currentColor' } = e,
        o = (function (e, t) {
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
        })(e, ['width', 'height', 'color']);
    return (0, r.jsxs)(
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
        })({}, (0, i.Z)(o))),
        (n = n =
            {
                width: s,
                height: a,
                viewBox: '0 0 20 20',
                fill: 'none',
                xmlns: 'http://www.w3.org/2000/svg',
                children: [
                    (0, r.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M0 10C0 4.47716 4.47716 0 10 0C15.5229 0 20 4.47716 20 10C20 15.5229 15.5229 20 10 20C4.47716 20 0 15.5229 0 10ZM10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2Z',
                        fill: l
                    }),
                    (0, r.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M7 11.25C7.30378 11.25 7.5911 11.3881 7.78087 11.6253L8.5 12.5242L9.21913 11.6253C9.4089 11.3881 9.69622 11.25 10 11.25C10.3038 11.25 10.5911 11.3881 10.7809 11.6253L11.5 12.5242L12.2191 11.6253C12.4089 11.3881 12.6962 11.25 13 11.25C13.3038 11.25 13.5911 11.3881 13.7809 11.6253L15.2809 13.5003C15.6259 13.9316 15.556 14.5609 15.1247 14.9059C14.6934 15.2509 14.0641 15.181 13.7191 14.7497L13 13.8508L12.2809 14.7497C12.0911 14.9869 11.8038 15.125 11.5 15.125C11.1962 15.125 10.9089 14.9869 10.7191 14.7497L10 13.8508L9.28087 14.7497C9.0911 14.9869 8.80378 15.125 8.5 15.125C8.19622 15.125 7.9089 14.9869 7.71913 14.7497L7 13.8508L6.28087 14.7497C5.93586 15.181 5.30657 15.2509 4.87531 14.9059C4.44404 14.5609 4.37412 13.9316 4.71913 13.5003L6.21913 11.6253C6.4089 11.3881 6.69622 11.25 7 11.25Z',
                        fill: l
                    }),
                    (0, r.jsx)('path', {
                        d: 'M6.625 9.25C7.24632 9.25 7.75 8.7463 7.75 8.125C7.75 7.50368 7.24632 7 6.625 7C6.00368 7 5.5 7.50368 5.5 8.125C5.5 8.7463 6.00368 9.25 6.625 9.25Z',
                        fill: l
                    }),
                    (0, r.jsx)('path', {
                        d: 'M13.375 9.25C13.9963 9.25 14.5 8.7463 14.5 8.125C14.5 7.50368 13.9963 7 13.375 7C12.7537 7 12.25 7.50368 12.25 8.125C12.25 8.7463 12.7537 9.25 13.375 9.25Z',
                        fill: l
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
}
