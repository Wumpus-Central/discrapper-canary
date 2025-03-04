n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(648052),
    a = n(530),
    s = n(420654),
    l = n(116854),
    c = n(271383),
    u = n(246946),
    d = n(654904),
    f = n(228168),
    _ = n(231930);
function p(e) {
    var t;
    let { user: n, displayProfile: p, guild: h, pendingAvatar: g, pendingNickname: m, pendingGlobalName: E, pendingBio: v, pendingPronouns: b, isTryItOutFlow: y, hideBioSection: O, pendingBadges: S, shouldOpenBadgeTooltip: I } = e,
        T = (0, i.e7)([c.ZP], () => (null == h ? null : c.ZP.getMember(h.id, n.id))),
        N = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        A = null == p ? void 0 : null === (t = p.getPreviewBio(v)) || void 0 === t ? void 0 : t.value,
        C = null != b ? b : null == p ? void 0 : p.pronouns,
        R = (0, d.Ly)({
            pendingNickname: m,
            pendingGlobalName: E,
            user: n,
            guildMember: T
        }),
        P = () => {
            if (null != T && null !== g && (null != T.avatar || null != g))
                return (0, r.jsx)(l.Z, {
                    user: n,
                    nickname: R
                });
        };
    return (0, r.jsxs)('div', {
        inert: '',
        className: _.body,
        children: [
            (0, r.jsx)(a.Z, {
                user: n,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: P(),
                nickname: R,
                pronouns: C,
                isTryItOut: y,
                tags: (0, r.jsx)(o.Z, {
                    displayProfile: p,
                    profileType: f.y0.BITE_SIZE,
                    pendingBadges: S,
                    shouldOpenBadgeTooltip: I
                })
            }),
            !O &&
                null != A &&
                '' !== A &&
                (0, r.jsx)(s.Z, {
                    user: n,
                    bio: A,
                    hidePersonalInformation: N,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
