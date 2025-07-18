t.d(e, { Z: () => l });
var n = t(255367);
t(73800);
var r = t(325767);
function l(A) {
    var e,
        t,
        { width: l = 24, height: i = 24, color: s = 'currentColor', foreground: a } = A,
        o = (function (A, e) {
            if (null == A) return {};
            var t,
                n,
                r = (function (A, e) {
                    if (null == A) return {};
                    var t,
                        n,
                        r = {},
                        l = Object.keys(A);
                    for (n = 0; n < l.length; n++) ((t = l[n]), e.indexOf(t) >= 0 || (r[t] = A[t]));
                    return r;
                })(A, e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(A);
                for (n = 0; n < l.length; n++) ((t = l[n]), !(e.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(A, t) && (r[t] = A[t]));
            }
            return r;
        })(A, ['width', 'height', 'color', 'foreground']);
    return (0, n.jsxs)(
        'svg',
        ((e = (function (A) {
            for (var e = 1; e < arguments.length; e++) {
                var t = null != arguments[e] ? arguments[e] : {},
                    n = Object.keys(t);
                ('function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(t).filter(function (A) {
                            return Object.getOwnPropertyDescriptor(t, A).enumerable;
                        })
                    )),
                    n.forEach(function (e) {
                        var n;
                        ((n = t[e]),
                            e in A
                                ? Object.defineProperty(A, e, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (A[e] = n));
                    }));
            }
            return A;
        })({}, (0, r.Z)(o))),
        (t = t =
            {
                width: l,
                height: i,
                viewBox: '0 0 24 24',
                children: [
                    (0, n.jsx)('path', {
                        d: 'M20.414 2.58599C21.195 3.36699 21.195 4.63299 20.414 5.41399L14.051 11.779L11.222 8.94999L17.586 2.58599C18.367 1.80499 19.633 1.80499 20.414 2.58599Z',
                        className: a,
                        fill: s
                    }),
                    (0, n.jsx)('path', {
                        d: 'M13.622 15.035L6.552 16.449L7.966 9.378L13.344 4H4C2.897 4 2 4.898 2 6V20C2 21.103 2.897 22 4 22H18C19.103 22 20 21.103 20 20V8.656L13.622 15.035Z',
                        className: a,
                        fill: s
                    }),
                    (0, n.jsx)('path', {
                        d: 'M9.80801 10.365L12.636 13.192L9.10101 13.899L9.80801 10.365Z',
                        className: a,
                        fill: s
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (A, e) {
                  var t = Object.keys(A);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(A);
                      t.push.apply(t, n);
                  }
                  return t;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e)
    );
}
