n.d(t, { Z: () => p });
var i = n(200651);
n(192379);
var r = n(442837),
    a = n(648052),
    s = n(530),
    o = n(420654),
    l = n(116854),
    u = n(271383),
    c = n(246946),
    d = n(654904),
    f = n(228168),
    _ = n(112650);
function p(e) {
    var t;
    let { user: n, displayProfile: p, guild: h, pendingAvatar: m, pendingNickname: g, pendingGlobalName: E, pendingBio: v, pendingPronouns: y, isTryItOutFlow: I, hideBioSection: T } = e,
        b = (0, r.e7)([u.ZP], () => (null == h ? null : u.ZP.getMember(h.id, n.id))),
        S = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation),
        A = null == p ? void 0 : null === (t = p.getPreviewBio(v)) || void 0 === t ? void 0 : t.value,
        N = null != y ? y : null == p ? void 0 : p.pronouns,
        C = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: n,
            guildMember: b
        }),
        R = () => {
            if (null != b && null !== m && (null != b.avatar || null != m))
                return (0, i.jsx)(l.Z, {
                    user: n,
                    nickname: C
                });
        };
    return (0, i.jsxs)('div', {
        inert: '',
        className: _.body,
        children: [
            (0, i.jsx)(s.Z, {
                user: n,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: R(),
                nickname: C,
                pronouns: N,
                isTryItOut: I,
                tags: (0, i.jsx)(a.Z, {
                    displayProfile: p,
                    profileType: f.y0.BITE_SIZE
                })
            }),
            !T &&
                null != A &&
                '' !== A &&
                (0, i.jsx)(o.Z, {
                    user: n,
                    bio: A,
                    hidePersonalInformation: S,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
