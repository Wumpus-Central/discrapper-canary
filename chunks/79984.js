n.d(t, { Z: () => d });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(607070),
    u = n(619834);
function d() {
    let e = (0, s.e7)([c.Z], () => c.Z.useReducedMotion),
        { styleLarge: t, styleSmall: n } = i.useMemo(
            () => ({
                styleLarge: { width: "".concat(10 + 50 * Math.random(), "%") },
                styleSmall: { width: "".concat(30 + 60 * Math.random(), "%") },
            }),
            [],
        );
    return (0, r.jsxs)("div", {
        className: o()(u.container, { [u.noAnimation]: e }),
        children: [
            (0, r.jsx)("div", { className: u.iconPlaceholder }),
            (0, r.jsxs)("div", {
                className: u.textContainer,
                children: [
                    (0, r.jsx)("div", {
                        className: u.textPlaceholder,
                        style: t,
                        children: (0, r.jsx)(l.Heading, {
                            className: u.hidden,
                            variant: "heading-md/semibold",
                            color: "header-primary",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: u.textPlaceholder,
                        style: n,
                        children: (0, r.jsx)(l.Text, {
                            className: u.hidden,
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            lineClamp: 1,
                            children: "_",
                        }),
                    }),
                ],
            }),
            (0, r.jsx)("div", { className: u.underline }),
        ],
    });
}
