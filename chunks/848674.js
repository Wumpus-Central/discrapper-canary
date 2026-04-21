"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(793574),
    a = n(70730),
    o = n(275759),
    l = n(423998),
    u = n(880528),
    c = n(570287),
    d = n(822775),
    _ = n(784886),
    f = n(656884);
function p(e) {
    let { user: t, guildId: n, channelId: i, onClose: s, disableAutoFocus: a, upsellEligible: o } = e,
        c = (0, u.x)().hideDMInput;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            o && (0, r.jsx)(l.O, { profileUserId: t.id }),
            !c && (0, r.jsx)(_.A, { user: t, guildId: n, channelId: i, onClose: s, disableAutoFocus: a, upsell: o }),
        ],
    });
}
function h(e) {
    let { user: t, guildId: n, channelId: l, onClose: u, appContext: _, disableAutoFocus: h = !1 } = e,
        m = (0, c.A)(t.id, n),
        E = (0, a.p)(s.A.USER_PROFILE_POPOUT),
        g = (0, i.bG)([o.Ay], () => o.Ay.canShowProfilePopoutGiftIntents(t.id), [t.id]),
        A = E && g;
    return (0, r.jsxs)("div", {
        className: f.qr,
        children: [
            m &&
                (0, r.jsx)(p, {
                    user: t,
                    guildId: n,
                    channelId: l,
                    onClose: u,
                    disableAutoFocus: h,
                    upsellEligible: A,
                }),
            !m && (0, r.jsx)(d.A, { user: t, guildId: n, onClose: u, fullWidth: !0, appContext: _ }),
        ],
    });
}
