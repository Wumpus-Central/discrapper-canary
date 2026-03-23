"use strict";
n.d(t, { A: () => p });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(58149),
    o = n(307618),
    l = n(652215),
    u = n(732139),
    c = n(985018),
    d = n(395913);
function _(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n || e.keywords.some((e) => e.toLowerCase().startsWith(n) || n.startsWith(e.toLowerCase()))
        ? e.kaomojis
        : [];
}
function f(e) {
    let { onSelect: t } = e,
        [n, u] = i.useState(""),
        f = i.useMemo(() => {
            let e = n.trim();
            return o.W.map((e) => ({ ...e, kaomojis: _(e, n) }))
                .filter((e) => e.kaomojis.length > 0)
                .filter((t) => "" !== e || !0 !== t.hidden);
        }, [n]),
        p = i.useCallback(
            (e, n, r) => {
                a.Ay.trackWithMetadata(l.HAw.EXPRESSION_PICKER_KAOMOJI_SELECTED, {
                    kaomoji: e,
                    category: n,
                    keyword: r,
                }),
                    t(e);
            },
            [t],
        ),
        h = i.useCallback((e) => {
            u(e);
        }, []),
        m = i.useCallback(() => {
            u("");
        }, []);
    return (0, r.jsxs)("div", {
        className: d.Zp,
        role: "region",
        "aria-label": c.intl.string(c.t["2pR2JI"]),
        children: [
            (0, r.jsx)("div", {
                className: d.wx,
                children: (0, r.jsx)(s.IWV, {
                    query: n,
                    onChange: h,
                    onClear: m,
                    placeholder: c.intl.string(c.t["5h0QOP"]),
                    "aria-label": c.intl.string(c.t["5h0QOP"]),
                }),
            }),
            (0, r.jsx)(s.HOs, {
                fade: !0,
                className: d.IA,
                children:
                    f.length > 0
                        ? (0, r.jsx)("div", {
                              className: d.tt,
                              children: f.map((e) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: d.hl,
                                          role: "group",
                                          "aria-labelledby": `kaomoji-category-${e.category}`,
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  id: `kaomoji-category-${e.category}`,
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: d.Jm,
                                                  children: c.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: d.Hu,
                                                  role: "list",
                                                  children: e.kaomojis.map((t, i) =>
                                                      (0, r.jsx)(
                                                          "div",
                                                          {
                                                              className: d.Yx,
                                                              role: "listitem",
                                                              children: (0, r.jsx)(s.Button, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => p(t, e.category, n.trim()),
                                                                  text: t,
                                                                  "aria-label": c.intl.formatToPlainString(
                                                                      c.t["hi+F96"],
                                                                      {
                                                                          category: c.intl.string(e.categoryMessageKey),
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
                              children: (0, r.jsx)(s.Text, {
                                  variant: "text-sm/normal",
                                  color: "text-muted",
                                  className: d.p$,
                                  children: c.intl.string(c.t.V6nAfF),
                              }),
                          }),
            }),
        ],
    });
}
function p(e) {
    return (0, r.jsx)("div", {
        className: d.iE,
        id: u.pE,
        role: "tabpanel",
        "aria-labelledby": u.W3,
        children: (0, r.jsx)(f, { ...e }),
    });
}
