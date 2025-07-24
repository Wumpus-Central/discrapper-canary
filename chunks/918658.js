n.d(t, {
    Z: () => M,
    d: () => L
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
    _ = n(819553),
    h = n(17181),
    E = n(303737),
    I = n(434404),
    p = n(703656),
    C = n(944486),
    g = n(914010),
    O = n(671533),
    S = n(259580),
    T = n(358085),
    f = n(962086),
    N = n(160404),
    m = n(889695),
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
function U(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(v, {
        onClick: t,
        children: P.intl.string(P.t.R9GHyc)
    });
}
function M() {
    let e = r.useRef(null),
        t = (0, s.e7)([g.Z], () => g.Z.getGuildId()),
        n = (0, s.e7)([C.Z], () => C.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: c,
            isServerShopPreview: T
        } = (0, s.cj)([N.Z], () => ({
            viewingRoles: null != t ? N.Z.getViewingRoles(t) : null,
            backNavigationSection: N.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && N.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && N.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let M = (function (e) {
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
        L = o === R.pNK.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzc) : P.intl.string(P.t['/djIh4']),
        Z = n === A.oC.GUILD_ONBOARDING,
        k = (e) => {
            let { backToSettings: n } = e;
            null != t && (N.Z.isFullServerPreview(t) && (0, p.uL)(R.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, h.EI)(t)), (0, f.mL)(t), n && I.Z.open(t, o), o === R.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(t));
        };
    return (0, i.jsxs)(d.qXd, {
        color: d.DM8.BRAND,
        className: D.notice,
        children: [
            (0, i.jsxs)(v, {
                onClick: () => k({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, i.jsx)(O.Z, {
                        width: 16,
                        height: 16,
                        direction: O.Z.Directions.LEFT,
                        className: D.backArrow
                    }),
                    M
                ]
            }),
            Z && c
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
                              renderPopout: () => (0, i.jsx)(m.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(v, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          L,
                                          (0, i.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
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
                                  children: (0, i.jsx)(d.P4T, {
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
                                  children: (0, i.jsx)(d.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            c || o === R.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(U, { onClick: () => k({ backToSettings: !1 }) })
        ]
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, s.e7)([N.Z], () => N.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: o()(D.settingsWrapper, {
                  [D.windows]: (0, T.isWindows)(),
                  [D.osx]: (0, T.isMac)()
              }),
              children: (0, i.jsx)(M, {})
          })
        : null;
}
