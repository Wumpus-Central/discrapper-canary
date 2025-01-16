r.d(n, {
    Z: function () {
        return R;
    }
});
var i = r(200651);
r(192379);
var a = r(442837),
    s = r(481060),
    o = r(592125),
    l = r(944486),
    u = r(246946),
    c = r(5192),
    d = r(621853),
    f = r(172351),
    _ = r(648052),
    h = r(483424),
    p = r(681837),
    m = r(678738),
    g = r(530),
    E = r(871604),
    v = r(53558),
    I = r(827313),
    T = r(420654),
    b = r(166584),
    y = r(915014),
    S = r(228168),
    A = r(388032),
    N = r(410344),
    C = r(591156);
function R(e) {
    let { user: n, currentUser: r, displayProfile: R, guild: O, isHovering: D, onOpenProfile: L, channelId: x, onClose: w } = e,
        P = c.ZP.getName(null == O ? void 0 : O.id, x, n),
        M = (0, a.e7)([d.Z], () => {
            var e;
            return null === (e = d.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application;
        }),
        k = (0, a.e7)([o.Z, l.Z], () => o.Z.getChannel(l.Z.getChannelId())),
        U = (0, a.e7)([u.Z], () => u.Z.hidePersonalInformation);
    return (0, i.jsxs)(s.Scroller, {
        fade: !0,
        className: C.body,
        children: [
            (0, i.jsx)(g.Z, {
                user: n,
                profileType: S.y0.BITE_SIZE,
                onOpenProfile: L,
                nickname: P,
                pronouns: null == R ? void 0 : R.pronouns,
                tags: (0, i.jsx)(_.Z, {
                    displayProfile: R,
                    profileType: S.y0.BITE_SIZE,
                    onClose: w
                }),
                nicknameIcons: (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(p.Z, { userId: n.id }),
                        !U &&
                            (0, i.jsx)(I.Z, {
                                userId: n.id,
                                isHovering: D,
                                onOpenProfile: L
                            })
                    ]
                })
            }),
            (0, i.jsx)(y.Z, {
                user: n,
                onOpenProfile: (e) => (null == L ? void 0 : L({ section: e }))
            }),
            (0, i.jsxs)('div', {
                className: N.buttons,
                children: [
                    (0, i.jsx)(E.Z, {
                        user: n,
                        className: N.button,
                        closePopout: w
                    }),
                    (0, i.jsx)(v.Z, {
                        user: n,
                        guildId: null == O ? void 0 : O.id,
                        className: N.button
                    })
                ]
            }),
            (0, i.jsx)(T.Z, {
                user: n,
                bio: null == R ? void 0 : R.bio,
                hidePersonalInformation: U,
                onClose: w
            }),
            (0, i.jsx)(h.Z, {
                user: n,
                currentUser: r,
                onClose: w,
                className: C.activity
            }),
            (null == M ? void 0 : M.popularApplicationCommandIds) != null &&
                null != k &&
                (0, i.jsx)(f.Z, {
                    applicationId: M.id,
                    commandIds: M.popularApplicationCommandIds,
                    channel: k,
                    guildId: null == O ? void 0 : O.id,
                    onClick: w
                }),
            null != O &&
                (0, i.jsx)(m.Z, {
                    heading: A.intl.string(A.t.LPJmLy),
                    children: (0, i.jsx)(b.Z, {
                        user: n,
                        currentUser: r,
                        guild: O
                    })
                })
        ]
    });
}
