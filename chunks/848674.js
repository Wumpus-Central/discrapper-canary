n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(311907),
    s = n(793574),
    a = n(70730),
    r = n(275759),
    o = n(423998),
    d = n(880528),
    c = n(570287),
    u = n(822775),
    h = n(784886),
    A = n(656884);
function x(e) {
    let { user: t, guildId: n, channelId: l, onClose: s, disableAutoFocus: a, upsellEligible: r } = e,
        c = (0, d.x)().hideDMInput;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && (0, i.jsx)(o.O, { profileUserId: t.id }),
            !c && (0, i.jsx)(h.A, { user: t, guildId: n, channelId: l, onClose: s, disableAutoFocus: a, upsell: r }),
        ],
    });
}
function v(e) {
    let { user: t, guildId: n, channelId: o, onClose: d, appContext: h, disableAutoFocus: v = !1 } = e,
        m = (0, c.A)(t.id, n),
        g = (0, a.p)(s.A.USER_PROFILE_POPOUT),
        p = (0, l.bG)([r.Ay], () => r.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]);
    return (0, i.jsxs)("div", {
        className: A.qr,
        children: [
            m &&
                (0, i.jsx)(x, {
                    user: t,
                    guildId: n,
                    channelId: o,
                    onClose: d,
                    disableAutoFocus: v,
                    upsellEligible: g && p,
                }),
            !m && (0, i.jsx)(u.A, { user: t, guildId: n, onClose: d, fullWidth: !0, appContext: h }),
        ],
    });
}
