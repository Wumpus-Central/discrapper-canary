n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(641324),
    d = n(97291);
function c(e) {
    let { title: t, subtitle: n, isHiddenVisually: s } = e;
    return null == t || "" === t
        ? null
        : s
          ? (0, i.jsx)(r.AC4, { tag: "legend", children: t })
          : (0, i.jsx)(r.Text, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: a()(d.DD, { [d.h0]: null != n && "" !== n }),
                children: t,
            });
}
let u = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: l, layout: a, variant: u = "default", isTitleHiddenVisually: _ } = t,
        m = n(),
        g = l?.(),
        A = s.useId(),
        x = null != m && "" !== m,
        h = null != g && "" !== g,
        p = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(u);
    return (0, i.jsxs)("fieldset", {
        "aria-describedby": h ? A : void 0,
        children: [
            (0, i.jsx)(c, { title: m, subtitle: g, isHiddenVisually: _ }),
            h
                ? (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: A,
                      className: d.VA,
                      children: g,
                  })
                : null,
            (0, i.jsx)(r.BJc, {
                gap: p,
                padding: { top: x && !_ ? 16 : 0 },
                children: a.map((e) => (0, i.jsx)(o.A, { node: e }, e.key)),
            }),
        ],
    });
});
