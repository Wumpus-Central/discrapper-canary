n.d(t, {
    A: () => d,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(641324),
    c = n(702421);
let d = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: l, layout: d } = t,
        u = null == n ? void 0 : n(),
        _ = null == l ? void 0 : l(),
        p = i.useId(),
        m = null != u && "" !== u,
        g = null != _ && "" !== _;
    return (0, r.jsxs)("fieldset", {
        "aria-describedby": g ? p : void 0,
        children: [
            m
                ? (0, r.jsx)(a.Text, {
                      tag: "legend",
                      variant: "text-md/semibold",
                      color: "text-strong",
                      className: s()(c.DD, {
                          [c.h0]: g,
                      }),
                      children: u,
                  })
                : null,
            g
                ? (0, r.jsx)(a.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: p,
                      className: c.VA,
                      children: _,
                  })
                : null,
            (0, r.jsx)(a.BJc, {
                direction: "vertical",
                gap: 8,
                padding: {
                    top: 16,
                },
                children: d.map((e) =>
                    (0, r.jsx)(
                        o.A,
                        {
                            node: e,
                        },
                        e.key,
                    ),
                ),
            }),
        ],
    });
});
