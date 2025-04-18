n.d(t, { s: () => s });
var r = n(200651),
    i = n(481060),
    l = n(388032),
    o = n(823076);
let s = (e) => {
    var t, n;
    return (0, r.jsx)(
        i.zxk,
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
        })({}, e)),
        (n = n =
            {
                'aria-label': l.NW.string(l.t.cpT0Cg),
                look: i.zxk.Looks.BLANK,
                size: i.zxk.Sizes.NONE,
                wrapperClassName: o.closeButton,
                innerClassName: o.closeButtonInner,
                children: (0, r.jsx)(i.Uz9, {
                    size: 'refresh_sm',
                    className: o.closeButtonIcon
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
};
