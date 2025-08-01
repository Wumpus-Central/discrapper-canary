n.d(t, {
    Z: () => k,
    d: () => U
});
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(692547),
    c = n(755721),
    d = n(481060),
    u = n(549817),
    h = n(819553),
    _ = n(17181),
    E = n(303737),
    p = n(434404),
    I = n(703656),
    g = n(944486),
    f = n(914010),
    C = n(671533),
    O = n(259580),
    T = n(358085),
    S = n(962086),
    m = n(160404),
    N = n(889695),
    R = n(981631),
    A = n(176505),
    y = n(302463),
    b = n(293810),
    P = n(388032),
    D = n(800515);
function v(e) {
    let { className: t, onClick: n, children: r, buttonRef: l } = e;
    return (0, i.jsx)(c.zx, {
        buttonRef: l,
        className: o()(D.button, t),
        innerClassName: D.buttonInner,
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        size: c.zx.Sizes.NONE,
        onClick: n,
        children: r
    });
}
function M(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(v, {
        onClick: t,
        children: P.intl.string(P.t.R9GHyc)
    });
}
function k() {
    let e = r.useRef(null),
        t = (0, s.e7)([f.Z], () => f.Z.getGuildId()),
        n = (0, s.e7)([g.Z], () => g.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: c,
            isServerShopPreview: T
        } = (0, s.cj)([m.Z], () => ({
            viewingRoles: null != t ? m.Z.getViewingRoles(t) : null,
            backNavigationSection: m.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && m.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && m.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let k = (function (e) {
            switch (e) {
                case R.pNK.INTEGRATIONS:
                    return P.intl.string(P.t.k7LGdn);
                case R.pNK.ROLE_SUBSCRIPTIONS:
                    return P.intl.string(P.t.bRqiqa);
                case R.pNK.ONBOARDING:
                    return P.intl.string(P.t.qZpU3d);
                default:
                    return P.intl.string(P.t.MTIXho);
            }
        })(o),
        U = o === R.pNK.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzc) : P.intl.string(P.t['/djIh4']),
        L = n === A.oC.GUILD_ONBOARDING,
        j = (e) => {
            let { backToSettings: n } = e;
            null != t && (m.Z.isFullServerPreview(t) && (0, I.uL)(R.Z5c.CHANNEL(t)), h.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, _.EI)(t)), (0, S.mL)(t), n && p.Z.open(t, o), o === R.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(t));
        };
    return (0, i.jsxs)(d.qXd, {
        color: d.DM8.BRAND,
        className: D.notice,
        children: [
            (0, i.jsxs)(v, {
                onClick: () => j({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, i.jsx)(C.Z, {
                        width: 16,
                        height: 16,
                        direction: C.Z.Directions.LEFT,
                        className: D.backArrow
                    }),
                    k
                ]
            }),
            L && c
                ? (0, i.jsx)('div', {
                      className: D.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: D.noticeText,
                          children: P.intl.string(P.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: D.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: D.noticeText,
                              children: c ? P.intl.formatToPlainString(P.t['0PHahI'], { numRoles: Object.keys(l).length }) : P.intl.formatToPlainString(P.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, i.jsx)(d.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(N.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(v, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          U,
                                          (0, i.jsx)(O.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: O.Z.Directions.DOWN,
                                              className: D.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          c &&
                              (0, i.jsx)(d.DY3, {
                                  className: D.previewWarning,
                                  text: P.intl.string(P.t.mW4DUF),
                                  children: (0, i.jsx)(d.Mgn, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          T &&
                              (0, i.jsx)(d.DY3, {
                                  className: D.previewWarning,
                                  text: P.intl.formatToPlainString(P.t.eummvb, {
                                      maxTiers: b.fF,
                                      maxProducts: y.dD
                                  }),
                                  children: (0, i.jsx)(d.Mgn, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            c || o === R.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(M, { onClick: () => j({ backToSettings: !1 }) })
        ]
    });
}
function U(e) {
    let { guildId: t } = e;
    return (0, s.e7)([m.Z], () => m.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: o()(D.settingsWrapper, {
                  [D.windows]: (0, T.isWindows)(),
                  [D.osx]: (0, T.isMac)()
              }),
              children: (0, i.jsx)(k, {})
          })
        : null;
}
