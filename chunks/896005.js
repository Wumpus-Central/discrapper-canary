n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    a = n(503698),
    l = n.n(a),
    r = n(397927),
    o = n(641324),
    c = n(97291);
function d(e) {
    let { title: t, subtitle: n, isHiddenVisually: s } = e;
    return null == t || "" === t
        ? null
        : s
          ? (0, i.jsx)(r.AC4, { tag: "legend", children: t })
          : (0, i.jsx)(r.Text, {
                tag: "legend",
                variant: "text-md/semibold",
                color: "text-strong",
                className: l()(c.DD, { [c.h0]: null != n && "" !== n }),
                children: t,
            });
}
let u = s.memo(function (e) {
    let { node: t } = e,
        { useTitle: n, useSubtitle: a, layout: l, variant: u = "default", isTitleHiddenVisually: _ } = t,
        m = n(),
        A = a?.(),
        g = s.useId(),
        h = null != m && "" !== m,
        x = null != A && "" !== A,
        p = (function (e) {
            switch (e) {
                case "default":
                    return "md";
                case "compact":
                    return "xs";
            }
        })(u);
    return (0, i.jsxs)("fieldset", {
        "aria-describedby": x ? g : void 0,
        children: [
            (0, i.jsx)(d, { title: m, subtitle: A, isHiddenVisually: _ }),
            x
                ? (0, i.jsx)(r.Text, {
                      variant: "text-sm/normal",
                      color: "text-default",
                      id: g,
                      className: c.VA,
                      children: A,
                  })
                : null,
            (0, i.jsx)(r.BJc, {
                gap: p,
                padding: { top: h && !_ ? 16 : 0 },
                children: l.map((e) => (0, i.jsx)(o.A, { node: e }, e.key)),
            }),
        ],
    });
});
