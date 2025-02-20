n.d(t, { Z: () => _ });
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
    p = n(913340);
function _(e) {
    var t;
    let { user: n, displayProfile: _, guild: h, pendingAvatar: m, pendingNickname: g, pendingGlobalName: E, pendingBio: v, pendingPronouns: b, isTryItOutFlow: y, hideBioSection: O } = e,
        S = (0, i.e7)([c.ZP], () => (null == h ? null : c.ZP.getMember(h.id, n.id))),
        I = (0, i.e7)([u.Z], () => u.Z.hidePersonalInformation),
        T = null == _ ? void 0 : null === (t = _.getPreviewBio(v)) || void 0 === t ? void 0 : t.value,
        N = null != b ? b : null == _ ? void 0 : _.pronouns,
        A = (0, d.Ly)({
            pendingNickname: g,
            pendingGlobalName: E,
            user: n,
            guildMember: S
        }),
        C = () => {
            if (null != S && null !== m && (null != S.avatar || null != m))
                return (0, r.jsx)(l.Z, {
                    user: n,
                    nickname: A
                });
        };
    return (0, r.jsxs)('div', {
        inert: '',
        className: p.body,
        children: [
            (0, r.jsx)(a.Z, {
                user: n,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: C(),
                nickname: A,
                pronouns: N,
                isTryItOut: y,
                tags: (0, r.jsx)(o.Z, {
                    displayProfile: _,
                    profileType: f.y0.BITE_SIZE
                })
            }),
            !O &&
                null != T &&
                '' !== T &&
                (0, r.jsx)(s.Z, {
                    user: n,
                    bio: T,
                    hidePersonalInformation: I,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
