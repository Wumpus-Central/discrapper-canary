t.d(i, {
    Z: function () {
        return _;
    }
});
var n = t(200651);
t(192379);
var a = t(442837),
    r = t(648052),
    o = t(530),
    s = t(420654),
    l = t(116854),
    c = t(271383),
    d = t(246946),
    u = t(654904),
    f = t(228168),
    p = t(591156);
function _(e) {
    var i;
    let { user: t, displayProfile: _, guild: b, pendingAvatar: m, pendingNickname: g, pendingGlobalName: x, pendingBio: h, pendingPronouns: v, isTryItOutFlow: C, hideBioSection: I } = e,
        S = (0, a.e7)([c.ZP], () => (null == b ? null : c.ZP.getMember(b.id, t.id))),
        y = (0, a.e7)([d.Z], () => d.Z.hidePersonalInformation),
        k = null == _ ? void 0 : null === (i = _.getPreviewBio(h)) || void 0 === i ? void 0 : i.value,
        T = null != v ? v : null == _ ? void 0 : _.pronouns,
        B = (0, u.Ly)({
            pendingNickname: g,
            pendingGlobalName: x,
            user: t,
            guildMember: S
        });
    return (0, n.jsxs)('div', {
        inert: '',
        className: p.body,
        children: [
            (0, n.jsx)(o.Z, {
                user: t,
                profileType: f.y0.BITE_SIZE,
                usernameIcon: (() => {
                    if (!(null != S)) return;
                    if (null !== m && !!(null != S.avatar || null != m))
                        return (0, n.jsx)(l.Z, {
                            user: t,
                            nickname: B
                        });
                })(),
                nickname: B,
                pronouns: T,
                isTryItOut: C,
                tags: (0, n.jsx)(r.Z, {
                    displayProfile: _,
                    profileType: f.y0.BITE_SIZE
                })
            }),
            !I &&
                null != k &&
                '' !== k &&
                (0, n.jsx)(s.Z, {
                    user: t,
                    bio: k,
                    hidePersonalInformation: y,
                    viewFullBioDisabled: !0
                })
        ]
    });
}
