"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(892547),
    a = n(573613),
    o = n(834730),
    l = n(821609),
    u = n(58149),
    c = n(307618),
    d = n(652215),
    _ = n(732139),
    f = n(985018),
    p = n(235916);
function h(e) {
    let { onSelect: t } = e,
        [n, _] = i.useState(""),
        h = i.useMemo(() => {
            let e = n.trim();
            return c.W.map((e) => {
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
        E = i.useCallback(
            (e, n, r) => {
                u.Ay.trackWithMetadata(d.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: r,
                }),
                    t(e);
            },
            [t],
        ),
        m = i.useCallback((e) => {
            _(e);
        }, []),
        g = i.useCallback(() => {
            _("");
        }, []);
    return (0, r.jsxs)("div", {
        className: p.Zp,
        role: "region",
        "aria-label": f.intl.string(f.t["2pR2JI"]),
        children: [
            (0, r.jsx)("div", {
                className: p.wx,
                children: (0, r.jsx)(s.I, {
                    query: n,
                    onChange: m,
                    onClear: g,
                    placeholder: f.intl.string(f.t["5h0QOP"]),
                    "aria-label": f.intl.string(f.t["5h0QOP"]),
                }),
            }),
            (0, r.jsx)(a.Ip, {
                fade: !0,
                className: p.IA,
                children:
                    h.length > 0
                        ? (0, r.jsx)("div", {
                              className: p.tt,
                              children: h.map((e) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: p.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, r.jsx)(o.E, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: p.Jm,
                                                  children: f.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: p.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, i) =>
                                                      (0, r.jsx)(
                                                          "div",
                                                          {
                                                              className: p.Yx,
                                                              role: "listitem",
                                                              children: (0, r.jsx)(l.$, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => E(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": f.intl.formatToPlainString(
                                                                      f.t["hi+F96"],
                                                                      {
                                                                          category: f.intl.string(e.categoryMessageKey),
                                                                          number: i + 1,
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
                        : (0, r.jsx)("div", {
                              "aria-live": "polite",
                              "aria-atomic": !0,
                              children: (0, r.jsx)(o.E, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: p.p$,
                                  children: f.intl.string(f.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function E(e) {
    return (0, r.jsx)("div", {
        className: p.iE,
        id: _.pE,
        role: "tabpanel",
        "aria-labelledby": _.W3,
        children: (0, r.jsx)(h, { ...e }),
    });
}
