n.d(t, { Z: () => Z });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(320582),
    o = n(246016),
    a = n(189156),
    s = n(699516),
    c = n(246946),
    u = n(5192),
    d = n(621853),
    p = n(172351),
    h = n(648052),
    f = n(280885),
    m = n(483424),
    g = n(681837),
    b = n(78806),
    _ = n(91433),
    y = n(900927),
    x = n(944043),
    C = n(678738),
    v = n(502762),
    j = n(530),
    O = n(827313),
    E = n(228168),
    I = n(981631),
    P = n(388032),
    S = n(420890);
function Z(e) {
    let { user: t, currentUser: n, displayProfile: Z, channel: N, isHovering: T, onOpenProfile: A } = e,
        { relationshipType: w, originApplicationId: R } = (0, i.cj)([s.Z], () => ({
            relationshipType: s.Z.getRelationshipType(t.id),
            originApplicationId: s.Z.getOriginApplicationId(t.id)
        })),
        k = (0, l.vh)(t.id),
        M = (0, o.Y)({ userId: t.id }),
        L = (0, i.e7)([c.Z], () => c.Z.hidePersonalInformation),
        D = (0, i.e7)([d.Z], () => {
            var e;
            return null == (e = d.Z.getUserProfile(t.id)) ? void 0 : e.application;
        });
    return (0, r.jsxs)('div', {
        className: S.body,
        children: [
            (0, r.jsx)(j.Z, {
                user: t,
                nickname: u.ZP.getName(null, N.id, t),
                pronouns: null == Z ? void 0 : Z.pronouns,
                onOpenProfile: A,
                tags: (0, r.jsx)(h.Z, {
                    displayProfile: Z,
                    themeType: E.lY.SIDEBAR
                }),
                nicknameIcons: (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(g.Z, { userId: t.id }),
                        !L &&
                            (0, r.jsx)(O.Z, {
                                userId: t.id,
                                isHovering: T,
                                onOpenProfile: A
                            })
                    ]
                })
            }),
            w === I.OGo.PENDING_INCOMING &&
                (0, r.jsx)(v.Z.Overlay, {
                    children: (0, r.jsx)(_.Z, {
                        user: t,
                        channelId: N.id,
                        applicationId: R
                    })
                }),
            k.map((e) =>
                (0, r.jsx)(
                    v.Z.Overlay,
                    {
                        children: (0, r.jsx)(_.Z, {
                            user: t,
                            isGameRelationship: !0,
                            applicationId: e.applicationId,
                            channelId: N.id
                        })
                    },
                    e.applicationId
                )
            ),
            (0, r.jsx)(x.Z, {
                user: t,
                className: S.card
            }),
            t.isProvisional &&
                (0, r.jsx)(a.wQ, {
                    userId: t.id,
                    headingColor: 'header-primary'
                }),
            (0, r.jsx)(m.Z, {
                user: t,
                currentUser: n,
                displayProfile: Z,
                className: S.card
            }),
            (0, r.jsxs)(v.Z.Overlay, {
                className: S.overlay,
                children: [
                    !L &&
                        (null == Z ? void 0 : Z.bio) != null &&
                        (null == Z ? void 0 : Z.bio) !== '' &&
                        (0, r.jsx)(C.Z, {
                            heading: P.intl.string(P.t['61W33d']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(f.Z, {
                                userBio: Z.bio,
                                animateOnHover: !0,
                                isHovering: T,
                                userId: t.id
                            })
                        }),
                    (null == D ? void 0 : D.popularApplicationCommandIds) != null &&
                        (0, r.jsx)(p.Z, {
                            applicationId: D.id,
                            commandIds: D.popularApplicationCommandIds,
                            channel: N
                        }),
                    M.length > 0 &&
                        (0, r.jsx)(C.Z, {
                            heading: P.intl.string(P.t['Uv/eT0']),
                            headingColor: 'header-primary',
                            children: (0, r.jsx)(b.Z, { applicationIds: M })
                        }),
                    (0, r.jsx)(C.Z, {
                        heading: t.bot ? P.intl.string(P.t['A//N4u']) : P.intl.string(P.t.a6XYDw),
                        headingColor: 'header-primary',
                        children: (0, r.jsx)(y.Z, { userId: t.id })
                    })
                ]
            })
        ]
    });
}
