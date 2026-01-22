n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(442433),
    s = n(828208),
    a = n(513461),
    c = n(557420),
    o = n(322388),
    d = n(985018),
    u = n(369529);

function f(e) {
    let { addFormField: t, onSelect: n, guild: c, allowTerms: f } = e;
    return (0, r.jsx)(i.W1t, {
        navId: "add-questions",
        className: u.M,
        onClose: l.Z_,
        "aria-label": d.intl.string(d.t.liqwPJ),
        onSelect: n,
        children: (0, r.jsxs)(i.rXV, {
            children: [
                (0, r.jsx)(i.Drp, {
                    id: "text-input",
                    icon: (0, i.kHD)(s.A),
                    label: d.intl.string(d.t.w6Q9wz),
                    action: () => (0, o.PV)(a.rX.TEXT_INPUT, t, c),
                }),
                (0, r.jsx)(i.Drp, {
                    id: "paragraph",
                    icon: i.$tc,
                    label: d.intl.string(d.t.gG0JBN),
                    action: () => (0, o.PV)(a.rX.PARAGRAPH, t, c),
                }),
                (0, r.jsx)(i.Drp, {
                    id: "multiple-choice",
                    icon: i.jsc,
                    label: d.intl.string(d.t.ooKh3m),
                    action: () => (0, o.PV)(a.rX.MULTIPLE_CHOICE, t, c),
                }),
                f &&
                    (0, r.jsx)(i.Drp, {
                        id: "terms",
                        icon: i.B8Q,
                        label: d.intl.string(d.t["3pz9t3"]),
                        action: () => (0, o.PV)(a.rX.TERMS, t, c),
                    }),
            ],
        }),
    });
}
let g = function (e) {
    let { addFormField: t, guild: n, allowTerms: i } = e;
    return (0, r.jsx)(c.d, {
        text: d.intl.string(d.t.CoHdoG),
        tooltipText: d.intl.string(d.t.nsI4dU),
        onClick: (e) => {
            (0, l.jA)(
                e,
                (e) => {
                    var l, s;
                    return (0, r.jsx)(
                        f,
                        ((l = (function (e) {
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
                        })({}, e)),
                        (s = s =
                            {
                                addFormField: t,
                                guild: n,
                                allowTerms: i,
                            }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(s)).forEach(function (e) {
                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e));
                              }),
                        l),
                    );
                },
                {
                    position: "top",
                    align: "center",
                },
            );
        },
    });
};
