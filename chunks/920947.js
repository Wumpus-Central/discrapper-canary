i.d(s, { A: () => b });
var t = i(627968),
    n = i(64700),
    l = i(17928),
    a = i(793574),
    o = i(70730);
let r = (0, i(945810).mj)({
    kind: "user",
    name: "2026-05-remove-friendship-anniversary-profile-popout",
    defaultConfig: { hidePopout: !1 },
    variations: { 1: { hidePopout: !0 } },
});
var d = i(44862),
    c = i(562708),
    u = i(408278),
    p = i(789645),
    h = i(834730),
    A = i(730134),
    v = i(139286),
    f = i(287809),
    g = i(45787),
    x = i(788868),
    m = i(778712),
    E = i(375708),
    I = i(212583);
function _(e) {
    let { profileUserId: s } = e,
        i = (0, l.bG)([f.default], () => f.default.getUser(s), [s]),
        a = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        o = (0, l.bG)([d.Ay], () => d.Ay.getFriendAnniversaryYears(s), [s]);
    return (
        n.useEffect(() => {
            (0, v.x)({
                name: c.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
                type: c.ImpressionTypes.VIEW,
                properties: { gift_intent_type: x.np.FRIEND_ANNIVERSARY },
            });
        }, []),
        (0, t.jsxs)("div", {
            className: I.kL,
            children: [
                (0, t.jsx)("div", {
                    className: I.b,
                    children: (0, t.jsx)(u.K, {
                        icon: p.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": E.intl.string(E.t.cpT0Cq),
                        onClick: (e) => {
                            e.stopPropagation(), (0, g.CK)(s);
                        },
                    }),
                }),
                (0, t.jsx)(h.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: E.intl.string(E.t.icDVNb),
                }),
                (0, t.jsxs)("div", {
                    className: I.SC,
                    children: [
                        null != i && (0, t.jsx)(A.A, { size: m._3.SIZE_16, user: i }),
                        null != a && (0, t.jsx)(A.A, { className: I.GM, size: m._3.SIZE_16, user: a }),
                        (0, t.jsx)(h.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: E.intl.formatToPlainString(E.t.PpG27s, { numberOfYears: o }),
                        }),
                    ],
                }),
            ],
        })
    );
}
var j = i(570287),
    P = i(822775),
    R = i(904290),
    y = i(656884);
function N(e) {
    let { user: s, guildId: i, channelId: n, onClose: l, disableAutoFocus: a, upsellEligible: o } = e;
    return (0, t.jsxs)(t.Fragment, {
        children: [
            o && (0, t.jsx)(_, { profileUserId: s.id }),
            (0, t.jsx)(R.A, { user: s, guildId: i, channelId: n, onClose: l, disableAutoFocus: a, upsell: o }),
        ],
    });
}
function b(e) {
    let { user: s, guildId: i, channelId: n, onClose: c, appContext: u, disableAutoFocus: p = !1 } = e,
        h = (0, j.A)(s.id, i),
        A = (0, o.p)(a.A.USER_PROFILE_POPOUT),
        { hidePopout: v } = r.useConfig({ location: "UserProfilePopout" }),
        f = (0, l.bG)([d.Ay], () => d.Ay.canShowProfilePopoutGiftIntents(s.id), [s.id]);
    return (0, t.jsxs)("div", {
        className: y.qr,
        children: [
            h &&
                (0, t.jsx)(N, {
                    user: s,
                    guildId: i,
                    channelId: n,
                    onClose: c,
                    disableAutoFocus: p,
                    upsellEligible: A && f && !v,
                }),
            !h && (0, t.jsx)(P.A, { user: s, guildId: i, onClose: c, fullWidth: !0, appContext: u }),
        ],
    });
}
