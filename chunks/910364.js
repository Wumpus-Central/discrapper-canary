t.d(n, { Z: () => B }), t(388685);
var o = t(255367),
    i = t(73800),
    c = t(366594),
    r = t(442837),
    a = t(481060),
    l = t(727637),
    d = t(616780),
    s = t(100527),
    u = t(906732),
    f = t(368326),
    p = t(429467),
    _ = t(680295),
    m = t(699516),
    b = t(5192),
    I = t(785717),
    h = t(221292),
    y = t(977378),
    x = t(687158),
    g = t(510659),
    j = t(892001),
    v = t(113557),
    O = t(867176),
    Z = t(451834),
    P = t(502762),
    A = t(544989),
    N = t(481932),
    w = t(195387),
    C = t(664794),
    E = t(4517),
    T = t(62154),
    S = t(277094),
    M = t(228168),
    D = t(388032),
    L = t(405666);
function R(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            o = Object.keys(t);
        'function' == typeof Object.getOwnPropertySymbols &&
            (o = o.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
            )),
            o.forEach(function (n) {
                var o;
                (o = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: o,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[n] = o);
            });
    }
    return e;
}
function G(e, n) {
    return (
        (n = null != n ? n : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : (function (e, n) {
                  var t = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var o = Object.getOwnPropertySymbols(e);
                      t.push.apply(t, o);
                  }
                  return t;
              })(Object(n)).forEach(function (t) {
                  Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
              }),
        e
    );
}
function B(e) {
    let { user: n, currentUser: t, guildId: B, channelId: k, messageId: V, roleId: F, sessionId: U, initialSection: W, initialSubsection: Y, transitionState: q, customStatusPrompt: H, openedAt: K, onClose: Q, showGuildProfile: z = !0, sourceAnalyticsLocations: J = [] } = e,
        { analyticsLocations: X } = (0, u.ZP)([...J, s.Z.USER_PROFILE_MODAL]),
        $ = (0, I.ZB)({
            layout: 'MODAL',
            userId: n.id,
            sourceSessionId: U,
            guildId: B,
            channelId: k,
            messageId: V,
            roleId: F,
            showGuildProfile: z
        }),
        ee = (0, g.$m)(),
        en = (0, a.q_F)({
            opacity: +(null != ee.interactionType),
            config: { duration: 150 }
        }),
        et = (0, x.ZP)(n.id, z ? B : void 0),
        eo = (0, x.ZP)(n.id, B),
        ei = (0, r.e7)([m.Z], () => m.Z.getRelationshipType(n.id)),
        ec = n.id === t.id,
        er = (0, f.p)({ location: 'UserProfileModal' }),
        { viewMainProfileEnabled: ea } = (0, y.E)({ location: 'UserProfileModal' }),
        el = i.useMemo(() => (null != H ? H : (0, p.Z)()), [H]),
        ed = i.useMemo(() => (null != B ? { [B]: [n.id] } : {}), [B, n.id]);
    (0, d.$)(ed);
    let es = i.useRef(null),
        eu = (0, l.Z)(es);
    return (0, o.jsx)(u.Gt, {
        value: X,
        children: (0, o.jsx)(I.Mt, {
            value: $,
            openedAt: K,
            fetchStartedAt: null == et ? void 0 : et.fetchStartedAt,
            fetchEndedAt: null == et ? void 0 : et.fetchEndedAt,
            isLoaded: null == et ? void 0 : et.isLoaded,
            children: (0, o.jsx)(g.NJ, {
                value: ee,
                children: (0, o.jsxs)(a.Y0X, {
                    transitionState: q,
                    className: L.root,
                    hideShadow: !0,
                    'aria-label': D.intl.string(D.t['3N/J2t']),
                    children: [
                        (0, o.jsxs)(P.Z, {
                            user: n,
                            displayProfile: et,
                            themeType: M.lY.MODAL,
                            ref: es,
                            children: [
                                (0, o.jsxs)(A.Z, {
                                    children: [
                                        (0, o.jsx)(w.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            user: n,
                                            guildId: B,
                                            channelId: k,
                                            onClose: Q
                                        }),
                                        (0, o.jsx)(N.Z, {
                                            shouldShowTooltip: null === ee.interactionType,
                                            themeType: M.lY.MODAL,
                                            user: n
                                        }),
                                        (0, o.jsx)(C.Z, {
                                            type: 'banner',
                                            user: n,
                                            guildId: B,
                                            viewProfileItem:
                                                ea && (null == eo ? void 0 : eo.guildId) != null
                                                    ? (null == et ? void 0 : et.guildId) != null
                                                        ? (0, o.jsx)(a.sNh, {
                                                              id: 'view-main-profile',
                                                              label: D.intl.string(D.t.GISTtb),
                                                              subtext: D.intl.formatToPlainString(D.t['mn/nW1'], { displayName: b.ZP.getName(void 0, void 0, n) }),
                                                              action: () => {
                                                                  Q(),
                                                                      (0, j.openUserProfileModal)(
                                                                          G(R({}, $), {
                                                                              showGuildProfile: !1,
                                                                              sourceAnalyticsLocations: J
                                                                          })
                                                                      ),
                                                                      (0, h.pQ)(
                                                                          R(
                                                                              {
                                                                                  action: 'PRESS_VIEW_MAIN_PROFILE',
                                                                                  analyticsLocations: X
                                                                              },
                                                                              $
                                                                          )
                                                                      );
                                                              }
                                                          })
                                                        : (0, o.jsx)(a.sNh, {
                                                              id: 'view-server-profile',
                                                              label: D.intl.string(D.t.DisZzM),
                                                              subtext: D.intl.formatToPlainString(D.t['mn/nW1'], { displayName: b.ZP.getName(B, k, n) }),
                                                              action: () => {
                                                                  Q(),
                                                                      (0, j.openUserProfileModal)(
                                                                          G(R({}, $), {
                                                                              showGuildProfile: !0,
                                                                              sourceAnalyticsLocations: J
                                                                          })
                                                                      ),
                                                                      (0, h.pQ)(
                                                                          R(
                                                                              {
                                                                                  action: 'PRESS_VIEW_SERVER_PROFILE',
                                                                                  analyticsLocations: X
                                                                              },
                                                                              $
                                                                          )
                                                                      );
                                                              }
                                                          })
                                                    : null
                                        })
                                    ]
                                }),
                                (0, o.jsxs)('header', {
                                    children: [
                                        (0, o.jsx)(O.Z, {
                                            user: n,
                                            displayProfile: et,
                                            themeType: M.lY.MODAL
                                        }),
                                        (0, o.jsx)(Z.Z, {
                                            userId: n.id,
                                            onClose: Q,
                                            className: L.toast
                                        }),
                                        null != ee.interactionType &&
                                            (0, o.jsx)(c.animated.div, {
                                                style: en,
                                                className: L.backdrop
                                            }),
                                        (0, o.jsxs)('div', {
                                            className: L.headerInner,
                                            children: [
                                                (0, o.jsx)(v.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    displayProfile: et,
                                                    guildId: B,
                                                    channelId: k,
                                                    themeType: M.lY.MODAL
                                                }),
                                                (0, o.jsx)(E.Z, {
                                                    location: 'UserProfileModal',
                                                    user: n,
                                                    guildId: B,
                                                    channelId: k,
                                                    themeType: M.lY.MODAL,
                                                    hasEntered: q === a.Dvm.ENTERED,
                                                    prompt: er && ec ? el : null
                                                }),
                                                (0, o.jsx)('div', {
                                                    className: L.headerButtons,
                                                    children: (0, o.jsx)(S.Z, {
                                                        user: n,
                                                        currentUser: t,
                                                        guildId: B,
                                                        relationshipType: ei,
                                                        onClose: Q
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                (0, o.jsx)(T.Z, {
                                    user: n,
                                    currentUser: t,
                                    guildId: B,
                                    channelId: k,
                                    displayProfile: et,
                                    initialSection: W,
                                    initialSubsection: Y,
                                    onClose: Q
                                })
                            ]
                        }),
                        (null == et ? void 0 : et.profileEffectId) != null &&
                            (0, o.jsx)(_.Z, {
                                profileEffectId: null == et ? void 0 : et.profileEffectId,
                                isHovering: eu
                            })
                    ]
                })
            })
        })
    });
}
