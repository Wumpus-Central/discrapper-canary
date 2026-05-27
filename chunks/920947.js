l.d(s, { A: () => b });
var i = l(627968),
    t = l(64700),
    n = l(17928),
    a = l(793574),
    r = l(70730);
let o = (0, l(945810).mj)({
    kind: "user",
    name: "2026-05-remove-friendship-anniversary-profile-popout",
    defaultConfig: { hidePopout: !1 },
    variations: { 1: { hidePopout: !0 } },
});
var d = l(275759),
    u = l(562708),
    c = l(408278),
    h = l(789645),
    p = l(834730),
    x = l(730134),
    m = l(139286),
    A = l(287809),
    v = l(45787),
    f = l(788868),
    g = l(778712),
    E = l(375708),
    j = l(212583);
function I(e) {
    let { profileUserId: s } = e,
        l = (0, n.bG)([A.default], () => A.default.getUser(s), [s]),
        a = (0, n.bG)([A.default], () => A.default.getCurrentUser()),
        r = (0, n.bG)([d.Ay], () => d.Ay.getFriendAnniversaryYears(s), [s]);
    return (
        t.useEffect(() => {
            (0, m.x)({
                name: u.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: u.ImpressionTypes.VIEW,
                properties: { gift_intent_type: f.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, i.jsxs)("div", {
            className: j.kL,
            children: [
                (0, i.jsx)("div", {
                    className: j.b,
                    children: (0, i.jsx)(c.K, {
                        icon: h.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": E.intl.string(E.t.cpT0Cq),
                        onClick: (e) => {
                            e.stopPropagation(), (0, v.CK)(s);
                        },
                    }),
                }),
                (0, i.jsx)(p.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: E.intl.string(E.t.icDVNb),
                }),
                (0, i.jsxs)("div", {
                    className: j.SC,
                    children: [
                        null != l && (0, i.jsx)(x.A, { size: g._3.SIZE_16, user: l }),
                        null != a && (0, i.jsx)(x.A, { className: j.GM, size: g._3.SIZE_16, user: a }),
                        (0, i.jsx)(p.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: E.intl.formatToPlainString(E.t.PpG27s, { numberOfYears: r }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var N = l(570287),
    _ = l(822775),
    R = l(904290),
    C = l(656884);
function P(e) {
    let { user: s, guildId: l, channelId: t, onClose: n, disableAutoFocus: a, upsellEligible: r } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            r && (0, i.jsx)(I, { profileUserId: s.id }),
            (0, i.jsx)(R.A, { user: s, guildId: l, channelId: t, onClose: n, disableAutoFocus: a, upsell: r }),
        ],
    });
}
function b(e) {
    let { user: s, guildId: l, channelId: t, onClose: u, appContext: c, disableAutoFocus: h = !1 } = e,
        p = (0, N.A)(s.id, l),
        x = (0, r.p)(a.A.USER_PROFILE_POPOUT),
        { hidePopout: m } = o.useConfig({ location: "UserProfilePopout" }),
        A = (0, n.bG)([d.Ay], () => d.Ay.canShowProfilePopoutGiftIntents(s.id), [s.id]);
    return (0, i.jsxs)("div", {
        className: C.qr,
        children: [
            p &&
                (0, i.jsx)(P, {
                    user: s,
                    guildId: l,
                    channelId: t,
                    onClose: u,
                    disableAutoFocus: h,
                    upsellEligible: x && A && !m,
                }),
            !p && (0, i.jsx)(_.A, { user: s, guildId: l, onClose: u, fullWidth: !0, appContext: c }),
        ],
    });
}
