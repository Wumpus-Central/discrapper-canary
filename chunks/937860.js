n.d(t, { s: () => a });
var i = n(255367),
    r = n(481060),
    s = n(388032),
    l = n(752740);
let a = (e) => {
    var t, n;
    return (0, i.jsx)(
        r.zxk,
        ((t = (function (e) {
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
        })({}, e)),
        (n = n =
            {
                'aria-label': s.intl.string(s.t.cpT0Cg),
                look: r.zxk.Looks.BLANK,
                size: r.zxk.Sizes.NONE,
                wrapperClassName: l.closeButton,
                innerClassName: l.closeButtonInner,
                children: (0, i.jsx)(r.Uz9, {
                    size: 'refresh_sm',
                    className: l.closeButtonIcon
                })
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
