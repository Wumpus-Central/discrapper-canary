n.d(t, { s: () => o });
var r = n(200651),
    a = n(481060),
    l = n(388032),
    i = n(752740);
let o = (e) => {
    var t, n;
    return (0, r.jsx)(
        a.zxk,
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
                look: a.zxk.Looks.BLANK,
                size: a.zxk.Sizes.NONE,
                wrapperClassName: i.closeButton,
                innerClassName: i.closeButtonInner,
                children: (0, r.jsx)(a.Uz9, {
                    size: 'refresh_sm',
                    className: i.closeButtonIcon
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
