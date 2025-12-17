a.d(t, { Z: () => h }), a(388685);
var n = a(54381),
    r = a(473749),
    i = a(120356),
    l = a.n(i),
    s = a(692547),
    c = a(481060),
    o = a(937615),
    d = a(981631),
    m = a(388032),
    f = a(367812);
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(t)).forEach(function (a) {
                  Object.defineProperty(e, a, Object.getOwnPropertyDescriptor(t, a));
              }),
        e
    );
}
function p(e) {
    let { price: t, selected: a, onClick: r } = e;
    return (0, n.jsxs)(c.P3F, {
        className: l()(f.priceRow, { [f.selected]: a }),
        onClick: r,
        children: [
            a
                ? (0, n.jsx)(c.owK, {
                      size: "custom",
                      width: 20,
                      height: 20,
                      secondaryColor: s.Z.unsafe_rawColors.WHITE_500.css,
                      color: s.Z.unsafe_rawColors.BRAND_500.css,
                  })
                : (0, n.jsx)("svg", {
                      width: "20",
                      height: "20",
                      children: (0, n.jsx)("circle", {
                          cx: 10,
                          cy: 10,
                          r: 10,
                          className: f.circle,
                      }),
                  }),
            (0, n.jsxs)("div", {
                className: f.priceRowText,
                children: [
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        tag: "span",
                        children: (0, o.T4)(t, d.pKx.USD),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-xxs/medium",
                        tag: "span",
                        children: "/mo.",
                    }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { selectedTemplate: t, handleSelectTemplate: a, newPricesToPick: i } = e,
        [l, s] = r.useState(0);
    return (0, n.jsxs)("div", {
        className: f.container,
        children: [
            (0, n.jsxs)("div", {
                className: f.content,
                children: [
                    (0, n.jsx)(c.Heading, {
                        variant: "heading-md/semibold",
                        children: m.intl.format(m.t["5WZ9Ct"], { tierName: t.listings[0].name }),
                    }),
                    (0, n.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        className: f.bodyText,
                        children: m.intl.format(m.t["5i7Uhb"], {
                            price: (0, o.T4)(t.listings[0].price_tier, d.pKx.USD),
                        }),
                    }),
                    i.map((e, t) =>
                        (0, n.jsx)(
                            p,
                            {
                                price: e,
                                selected: t === l,
                                onClick: () => s(t),
                            },
                            e,
                        ),
                    ),
                ],
            }),
            (0, n.jsx)(c.Button, {
                variant: "primary",
                text: m.intl.string(m.t["1W7mCt"]),
                onClick: () => {
                    a(u(x({}, t), { listings: [u(x({}, t.listings[0]), { price_tier: i[l] })] }));
                },
            }),
        ],
    });
}
