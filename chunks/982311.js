n.d(t, { A: () => E });
var i = n(627968),
    s = n(64700),
    r = n(158954),
    a = n(421380),
    l = n(397927),
    o = n(416052),
    c = n(793574),
    d = n(688810),
    u = n(915089),
    _ = n(264779),
    m = n(985018),
    A = n(424019);
function g(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, i.jsx)(r.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", { className: A.aR }),
        onClose: async () => await t(),
        actions: [{ text: m.intl.string(m.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: A.t4,
            children: [
                (0, i.jsx)(l.Heading, { variant: "heading-xl/semibold", children: m.intl.string(m.t.iufib1) }),
                (0, i.jsx)(l.Text, { variant: "text-md/normal", className: A.G3, children: m.intl.string(m.t.eAn6z2) }),
            ],
        }),
    });
}
let E = function (e) {
    let { onClose: t, onClaim: n, code: E, outboundPromotion: h, transitionState: p } = e,
        [C, x] = s.useState(null),
        T = (0, u.GV)(),
        { analyticsLocations: I } = (0, d.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == E &&
            (0, _.kd)({ promotionId: h.id, analyticsLocations: I })
                .then((e) => n(e))
                .catch((e) => x(e?.body?.code));
    }, [E, h.id, n, I]),
    null != C)
        ? (0, i.jsx)(g, { onClose: t, transitionState: p })
        : null == E
          ? (0, i.jsx)(l.y$y, { className: A.Lq })
          : (0, i.jsx)(r.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, i.jsxs)("div", {
                    className: A.N1,
                    children: [
                        (0, i.jsx)("div", { className: A.Qw }),
                        (0, i.jsx)(l.Heading, {
                            variant: "heading-xl/semibold",
                            children: m.intl.string(m.t["23BfZh"]),
                        }),
                        (0, i.jsx)(l.Text, {
                            variant: "text-md/normal",
                            className: A.G3,
                            children: h.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: m.intl.string(m.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: m.intl.string(m.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, _.kc)(E, h);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: p,
                "aria-label": T,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(l.cGx, { className: A.M5 }),
                        (0, i.jsx)(r.D0$, {
                            label: m.intl.string(m.t.s9LFQh),
                            helperText: m.intl.string(m.t["F+nFTZ"]),
                            children: (0, i.jsx)(o.A, {
                                value: E,
                                buttonColor: a.$n.Colors.BRAND,
                                buttonLook: a.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
