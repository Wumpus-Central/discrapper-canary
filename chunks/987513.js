r.d(t, { Z: () => o });
var n = r(200651);
r(192379);
var i = r(325767);
function o(e) {
    var t,
        r,
        { width: o = 24, height: s = 24, color: c = 'currentColor' } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['width', 'height', 'color']);
    return (0, n.jsx)(
        'svg',
        ((t = (function (e) {
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
        })({}, (0, i.Z)(l))),
        (r = r =
            {
                xmlns: 'http://www.w3.org/2000/svg',
                width: o,
                height: s,
                viewBox: '0 0 18 18',
                fill: 'none',
                children: (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M2.04764 2.51881C2.2836 1.06674 3.53768 0 5.0088 0H15.0082C16.2408 0 17.18 1.10416 16.9823 2.32079L14.961 14.7594C14.725 16.2115 13.471 17.2782 11.9998 17.2782H2.00047C0.767877 17.2782 -0.171336 16.1741 0.0263678 14.9574L2.04764 2.51881ZM5.91366 2.59178C5.91366 2.11465 6.30045 1.72787 6.77757 1.72787H11.961C12.4382 1.72787 12.8249 2.11465 12.8249 2.59178C12.8249 3.0689 12.4382 3.45569 11.961 3.45569H6.77757C6.30045 3.45569 5.91366 3.0689 5.91366 2.59178ZM9.29281 7.45934C9.0225 6.72884 7.98929 6.72884 7.71898 7.45934L7.4653 8.14489C7.26273 8.69232 6.83111 9.12395 6.28367 9.32652L5.59813 9.58019C4.86762 9.8505 4.86762 10.8837 5.59813 11.154L6.28367 11.4077C6.83111 11.6103 7.26273 12.0419 7.4653 12.5893L7.71898 13.2749C7.98929 14.0054 9.0225 14.0054 9.29281 13.2749L9.54648 12.5893C9.74905 12.0419 10.1807 11.6103 10.7281 11.4077L11.4137 11.154C12.1442 10.8837 12.1442 9.8505 11.4137 9.58019L10.7281 9.32652C10.1807 9.12395 9.74905 8.69232 9.54648 8.14489L9.29281 7.45934Z',
                    fill: c
                })
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
}
