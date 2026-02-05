n.d(t, { A: () => d });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(397927),
    o = n(641324),
    c = n(702421);
let d = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: r, layout: d } = t,
        u = n?.(),
        _ = r?.(),
        m = s.useId(),
        A = null != u && "" !== u,
        g = null != _ && "" !== _;
    return (0, i.jsxs)("fieldset", {
        "aria-describedby": g ? m : void 0,
        children: [
            A
                ? (0, i.jsx)(l.Text, {
                      tag: "legend",
                      variant: "text-md/semibold",
                      color: "text-strong",
                      className: a()(c.DD, { [c.h0]: g }),
                      children: u,
                  })
                : null,
            g
                ? (0, i.jsx)(l.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: m,
                      className: c.VA,
                      children: _,
                  })
                : null,
            (0, i.jsx)(l.BJc, {
                direction: "vertical",
                gap: 8,
                padding: { top: 16 },
                children: d.map((e) => (0, i.jsx)(o.A, { node: e }, e.key)),
            }),
        ],
    });
});
