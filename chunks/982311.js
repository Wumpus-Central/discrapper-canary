n.d(t, {
    A: () => A,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    s = n(421380),
    a = n(397927),
    o = n(416052),
    c = n(793574),
    d = n(688810),
    u = n(915089),
    _ = n(264779),
    p = n(985018),
    m = n(424019);

function g(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, r.jsx)(l.Modal, {
        title: "",
        size: "md",
        input: (0, r.jsx)("div", {
            className: m.aR,
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
        children: (0, r.jsxs)("div", {
            className: m.t4,
            children: [
                (0, r.jsx)(a.Heading, {
                    variant: "heading-xl/semibold",
                    children: p.intl.string(p.t.iufib1),
                }),
                (0, r.jsx)(a.Text, {
                    variant: "text-md/normal",
                    className: m.G3,
                    children: p.intl.string(p.t.eAn6z2),
                }),
            ],
        }),
    });
}
let A = function (e) {
    let { onClose: t, onClaim: n, code: A, outboundPromotion: f, transitionState: h } = e,
        [b, E] = i.useState(null),
        x = (0, u.GV)(),
        { analyticsLocations: O } = (0, d.Ay)(c.A.USER_SETTINGS_GIFT_INVENTORY);
    return (i.useEffect(() => {
        null == A &&
            (0, _.kd)({
                promotionId: f.id,
                analyticsLocations: O,
            })
                .then((e) => n(e))
                .catch((e) => {
                    var t;
                    return E(null == e || null == (t = e.body) ? void 0 : t.code);
                });
    }, [A, f.id, n, O]),
    null != b)
        ? (0, r.jsx)(g, {
              onClose: t,
              transitionState: h,
          })
        : null == A
          ? (0, r.jsx)(a.y$y, {
                className: m.Lq,
            })
          : (0, r.jsx)(l.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, r.jsxs)("div", {
                    className: m.N1,
                    children: [
                        (0, r.jsx)("div", {
                            className: m.Qw,
                        }),
                        (0, r.jsx)(a.Heading, {
                            variant: "heading-xl/semibold",
                            children: p.intl.string(p.t["23BfZh"]),
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-md/normal",
                            className: m.G3,
                            children: f.outboundRedemptionModalBody,
                        }),
                    ],
                }),
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
                            let e = (0, _.kc)(A, f);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: h,
                "aria-label": x,
                children: (0, r.jsxs)("div", {
                    children: [
                        (0, r.jsx)(a.cGx, {
                            className: m.M5,
                        }),
                        (0, r.jsx)(l.D0$, {
                            label: p.intl.string(p.t.s9LFQh),
                            helperText: p.intl.string(p.t["F+nFTZ"]),
                            children: (0, r.jsx)(o.A, {
                                value: A,
                                buttonColor: s.$n.Colors.BRAND,
                                buttonLook: s.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
