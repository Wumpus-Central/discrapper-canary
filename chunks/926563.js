n.d(e, { Z: () => b });
var r = n(951288);
n(647438);
var a = n(481060),
    i = n(680295),
    l = n(687158),
    o = n(899007),
    s = n(648052),
    u = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    p = n(671955),
    h = n(580792);
function b(t) {
    let { user: e, previewText: n, previewEmoji: b, previewStatus: S, placeHolderText: g, transitionState: O } = t,
        j = (0, l.ZP)(e.id);
    return (0, r.jsxs)(c.Z, {
        user: e,
        displayProfile: j,
        themeType: p.l.POPOUT,
        className: h.profilePreviewContainer,
        children: [
            (0, r.jsxs)("header", {
                children: [
                    (0, r.jsx)(u.Z, {
                        user: e,
                        displayProfile: j,
                        themeType: p.l.POPOUT,
                    }),
                    (0, r.jsx)("div", {
                        inert: !0,
                        children: (0, r.jsx)(o.Z, {
                            user: e,
                            displayProfile: j,
                            themeType: p.l.POPOUT,
                            previewStatus: S,
                            className: h.avatar,
                        }),
                    }),
                    (0, r.jsx)(m.Z, {
                        user: e,
                        themeType: p.l.POPOUT,
                        previewText: n,
                        previewEmoji: b,
                        placeholderText: g,
                        hasEntered: O === a.Dvm.ENTERED,
                    }),
                ],
            }),
            (null == j ? void 0 : j.profileEffect) != null && (0, r.jsx)(i.Z, { profileEffectId: j.profileEffect.id }),
            (0, r.jsx)("div", {
                className: h.usernameContainer,
                inert: !0,
                children: (0, r.jsx)(d.Z, {
                    user: e,
                    nickname: f.ZP.getName(null, null, e),
                    pronouns: null == j ? void 0 : j.pronouns,
                    tags: (0, r.jsx)(s.Z, {
                        displayProfile: j,
                        themeType: p.l.POPOUT,
                    }),
                }),
            }),
        ],
    });
}
