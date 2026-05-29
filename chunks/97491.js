t.r(l), t.d(l, { default: () => s });
var d = t(627968);
t(64700);
var a = t(753390),
    n = t(143582),
    u = t(976860),
    o = t(967198),
    i = t(314671),
    p = t(975965),
    r = t(652215);
function s(e) {
    let { onClose: l, onComplete: t, forcesTransitionToGuild: s, ...c } = e,
        { subscriptionMetadataRequest: h } = (0, p.l)();
    return (0, d.jsx)(i.PaymentModal, {
        ...c,
        onComplete: t,
        onClose: (e) => {
            l(e);
            let d = h?.guild_id;
            e &&
                null != d &&
                (a.hP(),
                (0, n.f5)(d),
                t?.(),
                null != d && (s || o.A.getGuildId() !== d) && (0, u.pX)(r.BVt.CHANNEL(d)));
        },
        forceNewPaymentModal: !0,
    });
}
