n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var l = n(325767);
function a(e) {
    var t,
        n,
        { width: a = 24, height: i = 24, color: o = 'currentColor', foreground: s } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        l = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (r = 0; r < a.length; r++) (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
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
        })({}, (0, l.Z)(c))),
        (n = n =
            {
                width: a,
                height: i,
                viewBox: '0 0 18 20',
                children: (0, r.jsx)('path', {
                    fill: o,
                    className: s,
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M8.17187 0H9.83854V0.833333H8.17187V0ZM8.17324 0.833419V1.75009H9.83991V0.833419H8.17324ZM8.17324 4.16662V5.41675H9.83991V4.16662H11.5066V5.83325H15.6719V14.1666H11.5066V15.8333H16.5052C16.9654 15.8333 17.3385 15.4602 17.3385 14.9999V4.99992C17.3385 4.53968 16.9654 4.16659 16.5052 4.16659H9.83991V3.58342H8.17324V4.16659H1.50521C1.04497 4.16659 0.671875 4.53968 0.671875 4.99992V14.9999C0.671875 15.4602 1.04497 15.8333 1.50521 15.8333H6.50658V14.1666H2.33854V5.83325H6.50658V4.16662H8.17324ZM8.17324 7.25008V9.08342H9.83991V7.25008H8.17324ZM8.17324 10.9167V12.7501H9.83991V10.9167H8.17324ZM8.17324 14.5834V16.4167H9.83991V14.5834H8.17324ZM9.83854 19.1668V20H8.17187V19.1667H8.17324V18.2501H9.83991V19.1668H9.83854Z'
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
}
