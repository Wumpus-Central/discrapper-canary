s.d(i, { A: () => O });
var l = s(627968),
    n = s(64700),
    t = s(17928),
    a = s(793574),
    o = s(70730);
let r = (0, s(945810).mj)({
    kind: "user",
    name: "2026-05-remove-friendship-anniversary-profile-popout",
    defaultConfig: { hidePopout: !1 },
    variations: { 1: { hidePopout: !0 } },
});
var d = s(275759),
    c = s(503698),
    u = s.n(c),
    h = s(562708),
    p = s(408278),
    A = s(789645),
    x = s(834730),
    m = s(939249),
    v = s(308528),
    f = s(982168),
    g = s(730134),
    C = s(139286),
    E = s(287809),
    j = s(45787),
    I = s(788868),
    N = s(778712),
    _ = s(375708),
    b = s(212583);
function P(e) {
    let { profileUserId: i, shouldBannerBeClickable: s = !1, onClose: a } = e,
        o = (0, t.bG)([E.default], () => E.default.getUser(i), [i]),
        r = (0, t.bG)([E.default], () => E.default.getCurrentUser()),
        c = (0, t.bG)([d.Ay], () => d.Ay.getFriendAnniversaryYears(i), [i]);
    n.useEffect(() => {
        (0, C.x)({
            name: h.ImpressionNames.GIFT_INTENT_USER_PROFILE_POPOUT,
            type: h.ImpressionTypes.VIEW,
            properties: { gift_intent_type: I.np.FRIEND_ANNIVERSARY },
        });
    }, []);
    let P = n.useCallback(() => {
            v.A.openPrivateChannel({ recipientIds: i }), a?.(), f.A.popAll();
        }, [a, i]),
        R = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)("div", {
                    className: b.b,
                    children: (0, l.jsx)(p.K, {
                        icon: A.P,
                        size: "sm",
                        variant: "icon-only",
                        "aria-label": _.intl.string(_.t.cpT0Cq),
                        onClick: (e) => {
                            e.stopPropagation(), (0, j.CK)(i);
                        },
                    }),
                }),
                (0, l.jsx)(x.E, {
                    variant: "text-sm/semibold",
                    color: "text-strong",
                    children: _.intl.string(_.t.icDVNb),
                }),
                (0, l.jsxs)("div", {
                    className: b.SC,
                    children: [
                        null != o && (0, l.jsx)(g.A, { size: N._3.SIZE_16, user: o }),
                        null != r && (0, l.jsx)(g.A, { className: b.GM, size: N._3.SIZE_16, user: r }),
                        (0, l.jsx)(x.E, {
                            variant: "text-xs/normal",
                            color: "text-strong",
                            children: _.intl.formatToPlainString(_.t.PpG27s, { numberOfYears: c }),
                        }),
                    ],
                }),
            ],
        });
    return s
        ? (0, l.jsx)(m.D, { className: u()(b.kL, b.Wk), onClick: P, children: R })
        : (0, l.jsx)("div", { className: b.kL, children: R });
}
var R = s(880528),
    y = s(570287),
    k = s(822775),
    S = s(904290),
    T = s(656884);
function D(e) {
    let { user: i, guildId: s, channelId: n, onClose: t, disableAutoFocus: a, upsellEligible: o } = e,
        r = (0, R.x)().hideDMInput;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            o && (0, l.jsx)(P, { profileUserId: i.id, shouldBannerBeClickable: r, onClose: t }),
            !r && (0, l.jsx)(S.A, { user: i, guildId: s, channelId: n, onClose: t, disableAutoFocus: a, upsell: o }),
        ],
    });
}
function O(e) {
    let { user: i, guildId: s, channelId: n, onClose: c, appContext: u, disableAutoFocus: h = !1 } = e,
        p = (0, y.A)(i.id, s),
        A = (0, o.p)(a.A.USER_PROFILE_POPOUT),
        { hidePopout: x } = r.useConfig({ location: "UserProfilePopout" }),
        m = (0, t.bG)([d.Ay], () => d.Ay.canShowProfilePopoutGiftIntents(i.id), [i.id]);
    return (0, l.jsxs)("div", {
        className: T.qr,
        children: [
            p &&
                (0, l.jsx)(D, {
                    user: i,
                    guildId: s,
                    channelId: n,
                    onClose: c,
                    disableAutoFocus: h,
                    upsellEligible: A && m && !x,
                }),
            !p && (0, l.jsx)(k.A, { user: i, guildId: s, onClose: c, fullWidth: !0, appContext: u }),
        ],
    });
}
