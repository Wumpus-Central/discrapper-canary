"use strict";
i.d(t, { A: () => f });
var n = i(627968);
i(64700);
var r = i(311907),
    a = i(793574),
    l = i(70730),
    s = i(275759),
    o = i(423998),
    c = i(880528),
    d = i(570287),
    u = i(822775),
    _ = i(784886),
    p = i(656884);
function h(e) {
    let { user: t, guildId: i, channelId: r, onClose: a, disableAutoFocus: l, upsellEligible: s } = e,
        d = (0, c.x)().hideDMInput;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            s && (0, n.jsx)(o.O, { profileUserId: t.id }),
            !d && (0, n.jsx)(_.A, { user: t, guildId: i, channelId: r, onClose: a, disableAutoFocus: l, upsell: s }),
        ],
    });
}
function f(e) {
    let { user: t, guildId: i, channelId: o, onClose: c, appContext: _, disableAutoFocus: f = !1 } = e,
        A = (0, d.A)(t.id, i),
        g = (0, l.p)(a.A.USER_PROFILE_POPOUT),
        m = (0, r.bG)([s.Ay], () => s.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]);
    return (0, n.jsxs)("div", {
        className: p.qr,
        children: [
            A &&
                (0, n.jsx)(h, {
                    user: t,
                    guildId: i,
                    channelId: o,
                    onClose: c,
                    disableAutoFocus: f,
                    upsellEligible: g && m,
                }),
            !A && (0, n.jsx)(u.A, { user: t, guildId: i, onClose: c, fullWidth: !0, appContext: _ }),
        ],
    });
}
