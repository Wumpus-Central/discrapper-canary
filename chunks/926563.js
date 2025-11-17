n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(680295),
    a = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    p = n(671955),
    O = n(580792);
function b(e) {
    let { user: t, previewText: n, previewEmoji: b, previewStatus: g, placeHolderText: h, transitionState: S } = e,
        T = (0, a.ZP)(t.id);
    return (0, r.jsxs)(c.Z, {
        user: t,
        displayProfile: T,
        themeType: p.l.POPOUT,
        className: O.profilePreviewContainer,
        children: [
            (0, r.jsxs)("header", {
                children: [
                    (0, r.jsx)(u.Z, {
                        user: t,
                        displayProfile: T,
                        themeType: p.l.POPOUT,
                    }),
                    (0, r.jsx)("div", {
                        inert: !0,
                        children: (0, r.jsx)(o.Z, {
                            user: t,
                            displayProfile: T,
                            themeType: p.l.POPOUT,
                            previewStatus: g,
                            className: O.avatar,
                        }),
                    }),
                    (0, r.jsx)(m.Z, {
                        user: t,
                        themeType: p.l.POPOUT,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: h,
                        hasEntered: S === i.Dvm.ENTERED,
                    }),
                ],
            }),
            (null == T ? void 0 : T.profileEffect) != null && (0, r.jsx)(l.Z, { skuId: T.profileEffect.skuId }),
            (0, r.jsx)("div", {
                className: O.usernameContainer,
                inert: !0,
                children: (0, r.jsx)(d.Z, {
                    user: t,
                    nickname: f.ZP.getName(null, null, t),
                    pronouns: null == T ? void 0 : T.pronouns,
                    tags: (0, r.jsx)(s.Z, {
                        displayProfile: T,
                        themeType: p.l.POPOUT,
                    }),
                }),
            }),
        ],
    });
}
