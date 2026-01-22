n.d(t, { A: () => c }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(397927),
    s = n(398450),
    a = n(985018);
function o(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function d(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e) {
    let { setSlide: t } = e,
        [n, c] = l.useState(10);
    return (
        l.useEffect(() => {
            if (n > 0) {
                let e = setTimeout(() => {
                    c((e) => e - 1);
                }, 1000);
                return () => clearTimeout(e);
            }
        }, [n]),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(s.A.SlideHeader, d(o({}, e), { subtitle: a.intl.string(a.t.c5J7O0) })),
                (0, r.jsxs)(s.A.SlideContent, {
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children: a.intl.format(a.t.Nixbli, {}),
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-md/normal",
                            children:
                                n > 0 ? a.intl.format(a.t.tsWkAE, { countdown: n }) : a.intl.string(a.t["GK/Qfd"]),
                        }),
                    ],
                }),
                (0, r.jsx)(
                    s.A.SlideFooter,
                    d(o({}, e), {
                        trailingButton: (0, r.jsx)(i.Button, {
                            variant: "primary",
                            text: a.intl.string(a.t.oyjspn),
                            onClick: () => t("backup_ack"),
                            disabled: n > 0,
                            loading: n > 0,
                            fullWidth: !0,
                        }),
                    }),
                ),
            ],
        })
    );
}
