i.d(t, { A: () => n });
var s = i(477900),
    r = i(725807),
    p = i(465794),
    u = i(519707),
    c = i(202541);
function n(e) {
    let { text: t, showGradient: i } = e;
    return (0, u.J)("collectibles_premium_subscribe_button")
        ? (0, s.jsx)(p.A, { subscriptionTier: c.pe.TIER_2, buttonTextOverride: t })
        : (0, s.jsx)(r.A, { subscriptionTier: c.pe.TIER_2, showGradient: i, textOptions: { textOverride: t } });
}
