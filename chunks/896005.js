n.d(t, {
    A: () => f,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(641324),
    c = n(112715),
    u = n(702421);

function d(e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: a, layout: d, initialize: f } = t,
        p = null == n ? void 0 : n(),
        _ = null == a ? void 0 : a(),
        h = i.useId(),
        m = null != p && "" !== p,
        g = null != _ && "" !== _;
    return (
        (0, c.Z)(f),
        (0, r.jsxs)("fieldset", {
            "aria-describedby": g ? h : void 0,
            children: [
                m
                    ? (0, r.jsx)(o.Text, {
                          tag: "legend",
                          variant: "text-md/semibold",
                          color: "text-strong",
                          className: s()(u.DD, {
                              [u.h0]: g,
                          }),
                          children: p,
                      })
                    : null,
                g
                    ? (0, r.jsx)(o.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          id: h,
                          className: u.VA,
                          children: _,
                      })
                    : null,
                (0, r.jsx)(o.BJc, {
                    direction: "vertical",
                    gap: 8,
                    padding: {
                        top: 16,
                    },
                    children: d.map((e) =>
                        (0, r.jsx)(
                            l.A,
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
}
let f = i.memo(d);
