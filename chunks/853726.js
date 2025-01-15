t.d(n, {
    Z: function () {
        return A;
    }
});
var a = t(200651);
t(192379);
var i = t(442837),
    c = t(648052),
    o = t(530),
    s = t(420654),
    r = t(116854),
    d = t(271383),
    l = t(246946),
    u = t(654904),
    f = t(228168),
    p = t(977011);
function A(e) {
    var n;
    let { user: t, displayProfile: A, guild: b, pendingAvatar: m, pendingNickname: v, pendingGlobalName: Z, pendingBio: h, pendingPronouns: g, isTryItOutFlow: C, hideBioSection: E } = e,
        P = (0, i.e7)([d.ZP], () => (null == b ? null : d.ZP.getMember(b.id, t.id))),
        N = (0, i.e7)([l.Z], () => l.Z.hidePersonalInformation),
        T = null == A ? void 0 : null === (n = A.getPreviewBio(h)) || void 0 === n ? void 0 : n.value,
        R = null != g ? g : null == A ? void 0 : A.pronouns,
        I = (0, u.Ly)({
            pendingNickname: v,
            pendingGlobalName: Z,
            user: t,
            guildMember: P
        });
    return (0, a.jsxs)('div', {
        inert: '',
        className: p.body,
        children: [
            (0, a.jsx)(o.Z, {
                user: t,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != P)) return;
                    if (null !== m && !!(null != P.avatar || null != m))
                        return (0, a.jsx)(r.Z, {
                            user: t,
                            nickname: I
                        });
                })(),
                nickname: I,
                pronouns: R,
                isTryItOut: C,
                tags: (0, a.jsx)(c.Z, {
                    displayProfile: A,
                    profileType: f.y0.BITE_SIZE
                })
            }),
            !E &&
                null != T &&
                '' !== T &&
                (0, a.jsx)(s.Z, {
                    user: t,
                    bio: T,
                    hidePersonalInformation: N,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
