n.d(t, {
    A: () => u,
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(397927),
    o = n(641324),
    c = n(112715),
    d = n(702421);
let u = i.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: l, layout: u, initialize: _ } = t,
        p = null == n ? void 0 : n(),
        m = null == l ? void 0 : l(),
        g = i.useId(),
        A = null != p && "" !== p,
        f = null != m && "" !== m;
    return (
        (0, c.Z)(_),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": f ? g : void 0,
            children: [
                A
                    ? (0, r.jsx)(a.Text, {
                          tag: "legend",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          className: s()(d.DD, {
                              [d.h0]: f,
                          }),
                          children: p,
                      })
                    : null,
                f
                    ? (0, r.jsx)(a.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          id: g,
                          className: d.VA,
                          children: m,
                      })
                    : null,
                (0, r.jsx)(a.BJc, {
                    direction: "vertical",
                    gap: 8,
                    padding: {
                        top: 16,
                    },
                    children: u.map((e) =>
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
        })
    );
});
