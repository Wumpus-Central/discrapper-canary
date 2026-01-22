n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(641324),
    o = n(46373),
    l = n(112715),
    c = n(702421);
function u(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: u, variant: d = "default", layout: f, initialize: p } = t,
        _ = null == n ? void 0 : n(),
        h = null == u ? void 0 : u(),
        m = i.useId(),
        g = null != _ && "" !== _,
        E = null != h && "" !== h;
    return (
        (0, l.Z)(p),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": E ? m : void 0,
            children: [
                g || E
                    ? (0, r.jsxs)("div", {
                          className: c.wx,
                          children: [
                              g
                                  ? (0, r.jsx)(a.Text, {
                                        tag: "legend",
                                        variant: "text-md/semibold",
                                        color: "text-strong",
                                        className: c.DD,
                                        children: _,
                                    })
                                  : null,
                              E
                                  ? (0, r.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-default",
                                        id: m,
                                        className: c.VA,
                                        children: h,
                                    })
                                  : null,
                          ],
                      })
                    : null,
                (0, r.jsx)(a.BJc, {
                    direction: "vertical",
                    gap: 8,
                    children: f.map((e, t) =>
                        (0, r.jsxs)(
                            i.Fragment,
                            {
                                children: [
                                    (0, r.jsx)(s.A, { node: e }),
                                    "separators" === d && t !== f.length - 1 && (0, r.jsx)(o.A, {}),
                                ],
                            },
                            e.key,
                        ),
                    ),
                }),
            ],
        })
    );
}
let d = i.memo(u);
