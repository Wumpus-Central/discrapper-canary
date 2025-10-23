n.d(t, { Z: () => d });
var i = n(951288),
    l = n(647438),
    r = n(120356),
    a = n.n(r),
    o = n(442837),
    s = n(481060),
    c = n(607070),
    u = n(75243);
function d() {
    let e = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = l.useMemo(
            () => ({
                styleLarge: { width: "".concat(10 + 50 * Math.random(), "%") },
                styleSmall: { width: "".concat(30 + 60 * Math.random(), "%") },
            }),
            [],
        );
    return (0, i.jsxs)("div", {
        className: a()(u.container, { [u.noAnimation]: e }),
        children: [
            (0, i.jsx)("div", { className: u.iconPlaceholder }),
            (0, i.jsxs)("div", {
                className: u.textContainer,
                children: [
                    (0, i.jsx)("div", {
                        className: u.textPlaceholder,
                        style: t,
                        children: (0, i.jsx)(s.Heading, {
                            className: u.hidden,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, i.jsx)("div", {
                        className: u.textPlaceholder,
                        style: n,
                        children: (0, i.jsx)(s.Text, {
                            className: u.hidden,
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, i.jsx)("div", { className: u.underline }),
        ],
    });
}
