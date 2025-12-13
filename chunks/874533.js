n.d(i, { default: () => c });
var e = n(54381),
    r = n(793030),
    s = n(892001),
    a = n(594174),
    l = n(228168),
    o = n(388032);
function c(t) {
    let { onClose: i, graphic: n } = t,
        c = a.default.getCurrentUser();
    return (0, e.jsx)(r.ExpressiveModal, {
        transitionState: r.Dvm.ENTERED,
        title: o.intl.string(o.t.L4Wg3B),
        subtitle: o.intl.string(o.t.SXb73A),
        graphic: n,
        onClose: i,
        actions: [
            {
                text: o.intl.string(o.t.TxBQzD),
                onClick: () => {
                    null != c &&
                        (0, s.openUserProfileModal)({
                            userId: c.id,
                            tabSection: l.oh.WISHLIST,
                        }),
                        i();
                },
                variant: "secondary",
            },
            {
                variant: "primary",
                text: o.intl.string(o.t.tM4PUv),
                onClick: i,
            },
        ],
    });
}
