"use strict";
n.d(t, { A: () => _ });
var r = n(627968),
    i = n(64700),
    s = n(397927),
    a = n(307618),
    o = n(732139),
    l = n(985018),
    u = n(395913);
function c(e, t) {
    let n = t.trim().toLowerCase();
    return "" === n || e.keywords.some((e) => e.toLowerCase().startsWith(n) || n.startsWith(e.toLowerCase()))
        ? e.kaomojis
        : [];
}
function d(e) {
    let { onSelect: t } = e,
        [n, o] = i.useState(""),
        d = i.useMemo(() => {
            let e = n.trim();
            return a.W.map((e) => ({ ...e, kaomojis: c(e, n) }))
                .filter((e) => e.kaomojis.length > 0)
                .filter((t) => "" !== e || !0 !== t.hidden);
        }, [n]),
        _ = i.useCallback(
            (e) => {
                t(e);
            },
            [t],
        ),
        f = i.useCallback((e) => {
            o(e);
        }, []),
        p = i.useCallback(() => {
            o("");
        }, []);
    return (0, r.jsxs)("div", {
        className: u.Zp,
        children: [
            (0, r.jsx)("div", {
                className: u.wx,
                children: (0, r.jsx)(s.IWV, {
                    query: n,
                    onChange: f,
                    onClear: p,
                    placeholder: l.intl.string(l.t["5h0QOP"]),
                }),
            }),
            (0, r.jsx)(s.HOs, {
                fade: !0,
                className: u.IA,
                children:
                    d.length > 0
                        ? (0, r.jsx)("div", {
                              className: u.tt,
                              children: d.map((e) =>
                                  (0, r.jsxs)(
                                      "div",
                                      {
                                          className: u.hl,
                                          children: [
                                              (0, r.jsx)(s.Text, {
                                                  variant: "text-xs/semibold",
                                                  color: "text-muted",
                                                  className: u.Jm,
                                                  children: l.intl.string(e.categoryMessageKey),
                                              }),
                                              (0, r.jsx)("div", {
                                                  className: u.Hu,
                                                  children: e.kaomojis.map((t) =>
                                                      (0, r.jsx)(
                                                          "div",
                                                          {
                                                              className: u.Yx,
                                                              children: (0, r.jsx)(s.Button, {
                                                                  variant: "secondary",
                                                                  size: "sm",
                                                                  fullWidth: !0,
                                                                  onClick: () => _(t),
                                                                  text: t,
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
                        : (0, r.jsx)(s.Text, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              className: u.p$,
                              children: l.intl.string(l.t.V6nAfF),
                          }),
            }),
        ],
    });
}
function _(e) {
    return (0, r.jsx)("div", {
        className: u.iE,
        id: o.pE,
        role: "tabpanel",
        "aria-labelledby": o.W3,
        children: (0, r.jsx)(d, { ...e }),
    });
}
