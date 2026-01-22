n.d(t, { A: () => c });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(175728);
function c(e) {
    let { children: t, icon: n, title: l } = e;
    return (0, i.jsxs)("header", {
        className: o.wx,
        children: [
            (0, i.jsxs)("div", {
                className: o.UU,
                children: [
                    r.cloneElement(n, {
                        className: a()(n.props.className, o.Kk),
                        height: 24,
                        width: 24,
                    }),
                    (0, i.jsx)(s.Heading, {
                        variant: "heading-md/semibold",
                        className: o.DD,
                        children: l,
                    }),
                ],
            }),
            t,
        ],
    });
}
