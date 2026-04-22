t.d(n, { A: () => j });
var l = t(627968),
    r = t(64700),
    i = t(503698),
    s = t.n(i),
    a = t(140735),
    o = t(834730),
    c = t(331322),
    d = t(641324),
    u = t(83614);
function x(e) {
    let { title: n, subtitle: t, isHiddenVisually: r } = e;
    return null == n || "" === n
        ? null
        : r
          ? (0, l.jsx)(a.A, { tag: "legend", children: n })
          : (0, l.jsx)(o.E, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: s()(u.DD, { [u.h0]: null != t && "" !== t }),
                children: n,
            });
}
let j = r.memo(function (e) {
    let { node: n } = e,
        { useTitle: t, useSubtitle: i, layout: s, variant: a = "default", isTitleHiddenVisually: j } = n,
        h = t(),
        m = i?.(),
        f = r.useId(),
        p = null != h && "" !== h,
        y = null != m && "" !== m,
        g = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(a);
    return (0, l.jsxs)("fieldset", {
        "aria-describedby": y ? f : void 0,
        children: [
            (0, l.jsx)(x, { title: h, subtitle: m, isHiddenVisually: j }),
            y
                ? (0, l.jsx)(o.E, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: f,
                      className: u.VA,
                      children: m,
                  })
                : null,
            (0, l.jsx)(c.B, {
                gap: g,
                padding: { top: p && !j ? 16 : 0 },
                children: s.map((e) => (0, l.jsx)(d.A, { node: e }, e.key)),
            }),
        ],
    });
});
