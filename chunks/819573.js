n.d(t, { Z: () => m });
var r = n(951288);
n(647438);
var i = n(264418),
    l = n(481060),
    a = n(703656),
    o = n(526167),
    s = n(266198),
    c = n(648613),
    u = n(474936),
    d = n(981631),
    p = n(921944),
    f = n(388032),
    h = n(401039),
    g = n(571454);
let m = (e) => {
    let { targetElementRef: t, dismissCoachmark: n, children: m, cohort: b } = e,
        _ = (0, r.jsx)(c.Z, {
            subscriptionTier: u.Si.TIER_2,
            children: (e) => {
                let { onClick: c } = e;
                return (0, r.jsx)(i.Z, {
                    targetElementRef: t,
                    position: "right",
                    align: "top",
                    size: "video",
                    caretConfig: { align: "start" },
                    title: f.intl.string(f.t.qh6bEx),
                    body: f.intl.format(f.t["70LoNT"], { helpCenterLink: s.lB }),
                    graphic: {
                        type: "video",
                        src: (0, o.rO)() ? h.Z : g.Z,
                        loop: !0,
                    },
                    gradientColor: "nitro-pink",
                    actions: [
                        {
                            text: f.intl.string(f.t.J61px8),
                            variant: "expressive",
                            onClick: (e) => {
                                b === s.TO.COHORT_3 ? (0, a.uL)(d.Z5c.APPLICATION_STORE) : c(e), n(p.L.USER_DISMISS);
                            },
                            icon: l.SrA,
                        },
                    ],
                    onRequestClose: () => {
                        n(p.L.USER_DISMISS);
                    },
                });
            },
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", { children: m }), _],
    });
};
