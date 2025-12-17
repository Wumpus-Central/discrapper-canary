n.d(t, { Z: () => l });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(318087);
function l(e) {
    let { message: t, error: n, onClick: i, submitting: l, className: c, ctaMessage: u } = e;
    return (0, r.jsxs)("div", {
        className: a()(s.container, c),
        children: [
            (0, r.jsxs)("div", {
                className: s.textContainer,
                children: [
                    (0, r.jsx)(o.Mgn, {
                        size: "custom",
                        width: 20,
                        height: 20,
                        color: "currentColor",
                        className: s.warningIcon,
                    }),
                    (0, r.jsx)(o.LZC, {
                        size: 10,
                        horizontal: !0,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(o.LZC, { size: 1 }),
                            (0, r.jsx)(o.Text, {
                                className: s.info,
                                variant: "text-sm/normal",
                                children: t,
                            }),
                            null != n &&
                                (0, r.jsx)(o.Text, {
                                    className: a()(s.info, s.error),
                                    variant: "text-sm/normal",
                                    children: n,
                                }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(o.LZC, {
                size: 16,
                horizontal: !0,
            }),
            (0, r.jsx)(o.Button, {
                variant: "critical-secondary",
                size: "sm",
                onClick: i,
                text: u,
                loading: l,
            }),
        ],
    });
}
