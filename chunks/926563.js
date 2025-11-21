n.d(t, { Z: () => b });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(680295),
    a = n(687158),
    o = n(899007),
    u = n(648052),
    s = n(867176),
    c = n(502762),
    d = n(530),
    m = n(4517),
    f = n(5192),
    p = n(671955),
    O = n(388032),
    g = n(580792);
function b(e) {
    var t;
    let { user: n, previewText: b, previewEmoji: h, previewStatus: T, placeHolderText: v, transitionState: S } = e,
        j = (0, a.ZP)(n.id),
        P =
            (null != b && "" !== b) || null != h
                ? O.intl.formatToPlainString(O.t.UpF5Qa, {
                      emoji: null != (t = null == h ? void 0 : h.name) ? t : "",
                      status: b,
                  })
                : "".concat(O.intl.string(O.t.EVV6uZ), ": ").concat(v);
    return (0, r.jsx)("div", {
        role: "img",
        "aria-label": P,
        children: (0, r.jsxs)(c.Z, {
            user: n,
            displayProfile: j,
            themeType: p.l.POPOUT,
            className: g.profilePreviewContainer,
            "aria-hidden": "true",
            children: [
                (0, r.jsxs)("header", {
                    children: [
                        (0, r.jsx)(s.Z, {
                            user: n,
                            displayProfile: j,
                            themeType: p.l.POPOUT,
                        }),
                        (0, r.jsx)("div", {
                            inert: !0,
                            children: (0, r.jsx)(o.Z, {
                                user: n,
                                displayProfile: j,
                                themeType: p.l.POPOUT,
                                previewStatus: T,
                                className: g.avatar,
                            }),
                        }),
                        (0, r.jsx)(m.Z, {
                            user: n,
                            themeType: p.l.POPOUT,
                            previewText: b,
                            previewEmoji: h,
                            placeholderText: v,
                            hasEntered: S === l.Dvm.ENTERED,
                        }),
                    ],
                }),
                (null == j ? void 0 : j.profileEffect) != null && (0, r.jsx)(i.Z, { skuId: j.profileEffect.skuId }),
                (0, r.jsx)("div", {
                    className: g.usernameContainer,
                    inert: !0,
                    children: (0, r.jsx)(d.Z, {
                        user: n,
                        nickname: f.ZP.getName(null, null, n),
                        pronouns: null == j ? void 0 : j.pronouns,
                        tags: (0, r.jsx)(u.Z, {
                            displayProfile: j,
                            themeType: p.l.POPOUT,
                        }),
                    }),
                }),
            ],
        }),
    });
}
