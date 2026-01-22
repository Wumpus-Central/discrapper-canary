n.d(t, {
    A: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(421380),
    o = n(397927),
    l = n(416052),
    c = n(793574),
    u = n(688810),
    d = n(915089),
    f = n(264779),
    p = n(985018),
    _ = n(424019);

function h(e) {
    let { onClose: t, transitionState: n } = e,
        i = () =>
            (0, r.jsxs)("div", {
                className: _.t4,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "heading-xl/semibold",
                        children: p.intl.string(p.t.iufib1),
                    }),
                    (0, r.jsx)(o.Text, {
                        variant: "text-md/normal",
                        className: _.G3,
                        children: p.intl.string(p.t.eAn6z2),
                    }),
                ],
            });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        input: (0, r.jsx)("div", {
            className: _.aR,
        }),
        onClose: async () => await t(),
        actions: [
            {
                text: p.intl.string(p.t.cpT0Cq),
                variant: "primary",
                onClick: t,
            },
        ],
        transitionState: n,
        children: i(),
    });
}
let m = function (e) {
    let { onClose: t, onClaim: n, code: m, outboundPromotion: g, transitionState: E } = e,
        [b, y] = i.useState(null),
        O = (0, d.GV)(),
        { analyticsLocations: A } = (0, u.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
    if (
        (i.useEffect(() => {
            null == m &&
                (0, f.kd)({
                    promotionId: g.id,
                    analyticsLocations: A,
                })
                    .then((e) => n(e))
                    .catch((e) => {
                        var t;
                        return y(null == e || null == (t = e.body) ? void 0 : t.code);
                    });
        }, [m, g.id, n, A]),
        null != b)
    )
        return (0, r.jsx)(h, {
            onClose: t,
            transitionState: E,
        });
    if (null == m)
        return (0, r.jsx)(o.y$y, {
            className: _.Lq,
        });
    let v = () =>
        (0, r.jsxs)("div", {
            className: _.N1,
            children: [
                (0, r.jsx)("div", {
                    className: _.Qw,
                }),
                (0, r.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    children: p.intl.string(p.t["23BfZh"]),
                }),
                (0, r.jsx)(o.Text, {
                    variant: "text-md/normal",
                    className: _.G3,
                    children: g.outboundRedemptionModalBody,
                }),
            ],
        });
    return (0, r.jsx)(a.Modal, {
        title: "",
        size: "md",
        onClose: async () => await t(),
        input: v(),
        actions: [
            {
                text: p.intl.string(p.t.TulDPl),
                variant: "secondary",
                onClick: async () => await t(),
            },
            {
                text: p.intl.string(p.t["+zx47d"]),
                variant: "primary",
                onClick: () => {
                    let e = (0, f.kc)(m, g);
                    window.open(e, "_blank");
                },
            },
        ],
        transitionState: E,
        "aria-label": O,
        children: (0, r.jsxs)("div", {
            children: [
                (0, r.jsx)(o.cGx, {
                    className: _.M5,
                }),
                (0, r.jsx)(a.D0$, {
                    label: p.intl.string(p.t.s9LFQh),
                    helperText: p.intl.string(p.t["F+nFTZ"]),
                    children: (0, r.jsx)(l.A, {
                        value: m,
                        buttonColor: s.$n.Colors.BRAND,
                        buttonLook: s.$n.Looks.FILLED,
                        delay: 1e3,
                    }),
                }),
            ],
        }),
    });
};
