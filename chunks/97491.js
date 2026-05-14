l.r(t), l.d(t, { default: () => s });
var d = l(627968);
l(64700);
var a = l(753390),
    n = l(143582),
    u = l(976860),
    o = l(967198),
    i = l(834252),
    p = l(546042),
    r = l(652215);
function s(e) {
    let { onClose: t, onComplete: l, forcesTransitionToGuild: s, ...c } = e,
        { subscriptionMetadataRequest: h } = (0, i.P5)();
    return (0, d.jsx)(p.PaymentModal, {
        ...c,
        onComplete: l,
        onClose: (e) => {
            t(e);
            let d = h?.guild_id;
            e &&
                null != d &&
                (a.hP(),
                (0, n.f5)(d),
                l?.(),
                null != d && (s || o.A.getGuildId() !== d) && (0, u.pX)(r.BVt.CHANNEL(d)));
        },
        forceNewPaymentModal: !0,
    });
}
