r.d(n, {
    Z: function () {
        return _;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    o = r(648052),
    s = r(530),
    l = r(420654),
    u = r(116854),
    c = r(271383),
    d = r(246946),
    f = r(654904),
    p = r(228168),
    h = r(591156);
function _(e) {
    var n;
    let { user: r, displayProfile: _, guild: m, pendingAvatar: g, pendingNickname: E, pendingGlobalName: v, pendingBio: y, pendingPronouns: b, isTryItOutFlow: I, hideBioSection: T } = e,
        S = (0, a.e7)([c.ZP], () => (null == m ? null : c.ZP.getMember(m.id, r.id))),
        A = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        C = null == _ ? void 0 : null === (n = _.getPreviewBio(y)) || void 0 === n ? void 0 : n.value,
        N = null != b ? b : null == _ ? void 0 : _.pronouns,
        R = (0, f.Ly)({
            pendingNickname: E,
            pendingGlobalName: v,
            user: r,
            guildMember: S
        }),
        O = () => {
            if (!!(null != S) && null !== g && !!(null != S.avatar || null != g))
                return (0, i.jsx)(u.Z, {
                    user: r,
                    nickname: R
                });
        };
    return (0, i.jsxs)('div', {
        inert: '',
        className: h.body,
        children: [
            (0, i.jsx)(s.Z, {
                user: r,
                profileType: p.y0.BITE_SIZE,
                usernameIcon: O(),
                nickname: R,
                pronouns: N,
                isTryItOut: I,
                tags: (0, i.jsx)(o.Z, {
                    displayProfile: _,
                    profileType: p.y0.BITE_SIZE
                })
            }),
            !T &&
                null != C &&
                '' !== C &&
                (0, i.jsx)(l.Z, {
                    user: r,
                    bio: C,
                    hidePersonalInformation: A,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
