n.d(t, {
    Z: () => Z,
    d: () => f
});
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(442837),
    s = n(692547),
    o = n(481060),
    c = n(549817),
    u = n(819553),
    E = n(17181),
    d = n(303737),
    _ = n(434404),
    I = n(703656),
    T = n(944486),
    N = n(914010),
    A = n(671533),
    S = n(259580),
    R = n(358085),
    C = n(962086),
    O = n(160404),
    P = n(889695),
    D = n(981631),
    m = n(176505),
    p = n(302463),
    h = n(293810),
    U = n(388032),
    M = n(513519);
function g(e) {
    let { className: t, onClick: n, children: l } = e;
    return (0, i.jsx)(o.zxk, {
        className: r()(M.button, t),
        innerClassName: M.buttonInner,
        look: o.zxk.Looks.OUTLINED,
        color: o.zxk.Colors.WHITE,
        size: o.zxk.Sizes.NONE,
        onClick: n,
        children: l
    });
}
function k(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(g, {
        onClick: t,
        children: U.intl.string(U.t.R9GHyc)
    });
}
function Z() {
    let e = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
        t = (0, a.e7)([T.Z], () => T.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: l,
            isFullServerPreview: r,
            isServerShopPreview: R
        } = (0, a.cj)([O.Z], () => ({
            viewingRoles: null != e ? O.Z.getViewingRoles(e) : null,
            backNavigationSection: O.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && O.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && O.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let Z = (function (e) {
            switch (e) {
                case D.pNK.INTEGRATIONS:
                    return U.intl.string(U.t.k7LGdn);
                case D.pNK.ROLE_SUBSCRIPTIONS:
                    return U.intl.string(U.t.bRqiqa);
                case D.pNK.ONBOARDING:
                    return U.intl.string(U.t.qZpU3d);
                default:
                    return U.intl.string(U.t.MTIXho);
            }
        })(l),
        f = l === D.pNK.ROLE_SUBSCRIPTIONS ? U.intl.string(U.t.hZUCzc) : U.intl.string(U.t['/djIh4']),
        L = t === m.oC.GUILD_ONBOARDING,
        V = (t) => {
            let { backToSettings: n } = t;
            null != e && (O.Z.isFullServerPreview(e) && (0, I.uL)(D.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, E.EI)(e)), (0, C.mL)(e), n && _.Z.open(e, l), l === D.pNK.ROLE_SUBSCRIPTIONS && (0, d.GN)(e));
        };
    return (0, i.jsxs)(o.qXd, {
        color: o.DM8.BRAND,
        className: M.notice,
        children: [
            (0, i.jsxs)(g, {
                onClick: () => V({ backToSettings: !0 }),
                className: M.backButton,
                children: [
                    (0, i.jsx)(A.Z, {
                        width: 16,
                        height: 16,
                        direction: A.Z.Directions.LEFT,
                        className: M.backArrow
                    }),
                    Z
                ]
            }),
            L && r
                ? (0, i.jsx)('div', {
                      className: M.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: M.noticeText,
                          children: U.intl.string(U.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: M.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: M.noticeText,
                              children: r ? U.intl.formatToPlainString(U.t['0PHahI'], { numRoles: Object.keys(n).length }) : U.intl.formatToPlainString(U.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, i.jsx)(o.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(P.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, i.jsxs)(g, {
                                      onClick: t,
                                      children: [
                                          f,
                                          (0, i.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: M.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          r &&
                              (0, i.jsx)(o.DY3, {
                                  className: M.previewWarning,
                                  text: U.intl.string(U.t.mW4DUF),
                                  children: (0, i.jsx)(o.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          R &&
                              (0, i.jsx)(o.DY3, {
                                  className: M.previewWarning,
                                  text: U.intl.formatToPlainString(U.t.eummvb, {
                                      maxTiers: h.fF,
                                      maxProducts: p.dD
                                  }),
                                  children: (0, i.jsx)(o.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            r || l === D.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(k, { onClick: () => V({ backToSettings: !1 }) })
        ]
    });
}
function f(e) {
    let { guildId: t } = e;
    return (0, a.e7)([O.Z], () => O.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: r()(M.settingsWrapper, {
                  [M.windows]: (0, R.isWindows)(),
                  [M.osx]: (0, R.isMac)()
              }),
              children: (0, i.jsx)(Z, {})
          })
        : null;
}
