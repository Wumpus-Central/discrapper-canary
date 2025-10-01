i.d(e, { default: () => u });
var n = i(951288),
    s = i(979554),
    a = i(257465),
    r = i(667202),
    o = i(481060),
    c = i(892001),
    l = i(594174),
    p = i(228168),
    d = i(388032);
function u(t) {
    let { onClose: e, product: i } = t,
        u = l.default.getCurrentUser(),
        E = "6/4";
    switch (i.type) {
        case s.Z.NAMEPLATE:
        case s.Z.AVATAR_DECORATION:
            E = "16/9";
            break;
        case s.Z.BUNDLE:
        case s.Z.PROFILE_EFFECT:
        default:
            E = "6/4";
    }
    return (0, n.jsx)(r.ExpressiveModal, {
        transitionState: a.Dv.ENTERED,
        title: d.intl.string(d.t.L4Wg3N),
        subtitle: d.intl.string(d.t.SXb73N),
        graphic: {
            type: "dynamic",
            component: o.AX$.COLLECTIBLES_PREVIEW,
            aspectRatio: E,
            props: {
                product: i,
                forCollectedModal: !0,
            },
        },
        onClose: e,
        actions: [
            {
                text: d.intl.string(d.t.TxBQzM),
                onClick: () => {
                    null != u &&
                        (0, c.openUserProfileModal)({
                            userId: u.id,
                            section: p.oh.WISHLIST,
                        }),
                        e();
                },
                variant: "secondary",
            },
            {
                variant: "primary",
                text: d.intl.string(d.t.tM4PUl),
                onClick: e,
            },
        ],
    });
}
