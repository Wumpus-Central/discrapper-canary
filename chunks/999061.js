"use strict";
n.d(t, { A: () => g });
var i = n(627968),
    l = n(64700),
    s = n(892547),
    r = n(573613),
    a = n(834730),
    o = n(821609),
    c = n(58149),
    u = n(307618),
    d = n(652215),
    h = n(732139),
    m = n(985018),
    p = n(235916);
function f(e) {
    let { onSelect: t } = e,
        [n, h] = l.useState(""),
        f = l.useMemo(() => {
            let e = n.trim();
            return u.W.map((e) => {
                let t;
                return {
                    ...e,
                    kaomojis:
                        "" === (t = n.trim().toLowerCase()) ||
                        e.keywords.some((e) => e.toLowerCase().startsWith(t) || t.startsWith(e.toLowerCase()))
                            ? e.kaomojis
                            : [],
                };
            })
                .filter((e) => e.kaomojis.length > 0)
                .filter((t) => "" !== e || !0 !== t.hidden);
        }, [n]),
        g = l.useCallback(
            (e, n, i) => {
                c.Ay.trackWithMetadata(d.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: i,
                }),
                    t(e);
            },
            [t],
        ),
        _ = l.useCallback((e) => {
            h(e);
        }, []),
        x = l.useCallback(() => {
            h("");
        }, []);
    return (0, i.jsxs)("div", {
        className: p.Zp,
        role: "region",
        "aria-label": m.intl.string(m.t["2pR2JI"]),
        children: [
            (0, i.jsx)("div", {
                className: p.wx,
                children: (0, i.jsx)(s.I, {
                    query: n,
                    onChange: _,
                    onClear: x,
                    placeholder: m.intl.string(m.t["5h0QOP"]),
                    "aria-label": m.intl.string(m.t["5h0QOP"]),
                }),
            }),
            (0, i.jsx)(r.Ip, {
                fade: !0,
                className: p.IA,
                children:
                    f.length > 0
                        ? (0, i.jsx)("div", {
                              className: p.tt,
                              children: f.map((e) =>
                                  (0, i.jsxs)(
                                      "div",
                                      {
                                          className: p.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, i.jsx)(a.E, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: p.Jm,
                                                  children: m.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, i.jsx)("div", {
                                                  className: p.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, l) =>
                                                      (0, i.jsx)(
                                                          "div",
                                                          {
                                                              className: p.Yx,
                                                              role: "listitem",
                                                              children: (0, i.jsx)(o.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => g(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": m.intl.formatToPlainString(
                                                                      m.t["hi+F96"],
                                                                      {
                                                                          category: m.intl.string(e.categoryMessageKey),
                                                                          number: l + 1,
                                                                      },
                                                                  ),
                                                              }),
                                                          },
                                                          `${e.category}-${t}`,
                                                      ),
                                                  ),
                                              }),
                                          ],
                                      },
                                      e.category,
                                  ),
                              ),
                          })
                        : (0, i.jsx)("div", {
                              "aria-live": "polite",
                              "aria-atomic": !0,
                              children: (0, i.jsx)(a.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: p.p$,
                                  children: m.intl.string(m.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function g(e) {
    return (0, i.jsx)("div", {
        className: p.iE,
        id: h.pE,
        role: "tabpanel",
        "aria-labelledby": h.W3,
        children: (0, i.jsx)(f, { ...e }),
    });
}
