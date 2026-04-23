n.d(t, { A: () => T });
var i = n(627968),
    s = n(64700),
    l = n(189213),
    a = n(452027),
    r = n(862482),
    o = n(534514),
    d = n(834730),
    u = n(289873),
    c = n(404778),
    g = n(416052),
    m = n(793574),
    _ = n(688810),
    A = n(915089),
    h = n(264779),
    p = n(985018),
    x = n(961302);
function E(e) {
    let { onClose: t, transitionState: n } = e;
    return (0, i.jsx)(l.Modal, {
        title: "",
        size: "md",
        input: (0, i.jsx)("div", { className: x.aR }),
        onClose: async () => await t(),
        actions: [{ text: p.intl.string(p.t.cpT0Cq), variant: "primary", onClick: t }],
        transitionState: n,
        children: (0, i.jsxs)("div", {
            className: x.t4,
            children: [
                (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: p.intl.string(p.t.iufib1) }),
                (0, i.jsx)(d.E, { variant: "text-md/normal", className: x.G3, children: p.intl.string(p.t.eAn6z2) }),
            ],
        }),
    });
}
let T = function (e) {
    let { onClose: t, onClaim: n, code: T, outboundPromotion: S, transitionState: f } = e,
        [b, C] = s.useState(null),
        v = (0, A.GV)(),
        { analyticsLocations: N } = (0, _.Ay)(m.A.USER_SETTINGS_GIFT_INVENTORY);
    return (s.useEffect(() => {
        null == T &&
            (0, h.kd)({ promotionId: S.id, analyticsLocations: N })
                .then((e) => n(e))
                .catch((e) => C(e?.body?.code));
    }, [T, S.id, n, N]),
    null != b)
        ? (0, i.jsx)(E, { onClose: t, transitionState: f })
        : null == T
          ? (0, i.jsx)(u.y, { className: x.Lq })
          : (0, i.jsx)(l.Modal, {
                title: "",
                size: "md",
                onClose: async () => await t(),
                input: (0, i.jsxs)("div", {
                    className: x.N1,
                    children: [
                        (0, i.jsx)("div", { className: x.Qw }),
                        (0, i.jsx)(o.D, { variant: "heading-xl/semibold", children: p.intl.string(p.t["23BfZh"]) }),
                        (0, i.jsx)(d.E, {
                            variant: "text-md/normal",
                            className: x.G3,
                            children: S.outboundRedemptionModalBody,
                        }),
                    ],
                }),
                actions: [
                    { text: p.intl.string(p.t.TulDPl), variant: "secondary", onClick: async () => await t() },
                    {
                        text: p.intl.string(p.t["+zx47d"]),
                        variant: "primary",
                        onClick: () => {
                            let e = (0, h.kc)(T, S);
                            window.open(e, "_blank");
                        },
                    },
                ],
                transitionState: f,
                "aria-label": v,
                children: (0, i.jsxs)("div", {
                    children: [
                        (0, i.jsx)(c.c, { className: x.M5 }),
                        (0, i.jsx)(a.D, {
                            label: p.intl.string(p.t.s9LFQh),
                            helperText: p.intl.string(p.t["F+nFTZ"]),
                            children: (0, i.jsx)(g.A, {
                                value: T,
                                buttonColor: r.$n.Colors.BRAND,
                                buttonLook: r.$n.Looks.FILLED,
                                delay: 1e3,
                            }),
                        }),
                    ],
                }),
            });
};
