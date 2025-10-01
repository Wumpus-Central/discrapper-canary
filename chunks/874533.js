i.d(e, { default: () => d });
var n = i(951288),
    s = i(979554),
    a = i(793030),
    r = i(481060),
    o = i(892001),
    c = i(594174),
    l = i(228168),
    p = i(388032);
function d(t) {
    let { onClose: e, product: i } = t,
        d = c.default.getCurrentUser(),
        u = "6/4";
    switch (i.type) {
        case s.Z.NAMEPLATE:
        case s.Z.AVATAR_DECORATION:
            u = "16/9";
            break;
        case s.Z.BUNDLE:
        case s.Z.PROFILE_EFFECT:
        default:
            u = "6/4";
    }
    return (0, n.jsx)(a.ExpressiveModal, {
        transitionState: a.Dvm.ENTERED,
        title: p.intl.string(p.t.L4Wg3N),
        subtitle: p.intl.string(p.t.SXb73N),
        graphic: {
            type: "dynamic",
            component: r.AX$.COLLECTIBLES_PREVIEW,
            aspectRatio: u,
            props: {
                product: i,
                forCollectedModal: !0,
            },
        },
        onClose: e,
        actions: [
            {
                text: p.intl.string(p.t.TxBQzM),
                onClick: () => {
                    null != d &&
                        (0, o.openUserProfileModal)({
                            userId: d.id,
                            section: l.oh.WISHLIST,
                        }),
                        e();
                },
                variant: "secondary",
            },
            {
                variant: "primary",
                text: p.intl.string(p.t.tM4PUl),
                onClick: e,
            },
        ],
    });
}
