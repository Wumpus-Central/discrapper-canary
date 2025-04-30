n.d(t, {
    Z: () => U,
    d: () => M
});
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(442837),
    a = n(692547),
    s = n(481060),
    c = n(549817),
    u = n(819553),
    d = n(17181),
    E = n(303737),
    _ = n(434404),
    O = n(703656),
    I = n(944486),
    T = n(914010),
    N = n(671533),
    S = n(259580),
    p = n(358085),
    R = n(962086),
    A = n(160404),
    f = n(889695),
    P = n(981631),
    C = n(176505),
    D = n(302463),
    g = n(293810),
    y = n(388032),
    m = n(800515);
function h(e) {
    let { className: t, onClick: n, children: i } = e;
    return (0, r.jsx)(s.zxk, {
        className: l()(m.button, t),
        innerClassName: m.buttonInner,
        look: s.zxk.Looks.OUTLINED,
        color: s.zxk.Colors.WHITE,
        size: s.zxk.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function b(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(h, {
        onClick: t,
        children: y.intl.string(y.t.R9GHyc)
    });
}
function U() {
    let e = (0, o.e7)([T.Z], () => T.Z.getGuildId()),
        t = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: p
        } = (0, o.cj)([A.Z], () => ({
            viewingRoles: null != e ? A.Z.getViewingRoles(e) : null,
            backNavigationSection: A.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && A.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && A.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let U = (function (e) {
            switch (e) {
                case P.pNK.INTEGRATIONS:
                    return y.intl.string(y.t.k7LGdn);
                case P.pNK.ROLE_SUBSCRIPTIONS:
                    return y.intl.string(y.t.bRqiqa);
                case P.pNK.ONBOARDING:
                    return y.intl.string(y.t.qZpU3d);
                default:
                    return y.intl.string(y.t.MTIXho);
            }
        })(i),
        M = i === P.pNK.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzc) : y.intl.string(y.t['/djIh4']),
        Z = t === C.oC.GUILD_ONBOARDING,
        L = (t) => {
            let { backToSettings: n } = t;
            null != e && (A.Z.isFullServerPreview(e) && (0, O.uL)(P.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.EI)(e)), (0, R.mL)(e), n && _.Z.open(e, i), i === P.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(e));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: m.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => L({ backToSettings: !0 }),
                className: m.backButton,
                children: [
                    (0, r.jsx)(N.Z, {
                        width: 16,
                        height: 16,
                        direction: N.Z.Directions.LEFT,
                        className: m.backArrow
                    }),
                    U
                ]
            }),
            Z && l
                ? (0, r.jsx)('div', {
                      className: m.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: m.noticeText,
                          children: y.intl.string(y.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: m.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: m.noticeText,
                              children: l ? y.intl.formatToPlainString(y.t['0PHahI'], { numRoles: Object.keys(n).length }) : y.intl.formatToPlainString(y.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(f.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, r.jsxs)(h, {
                                      onClick: t,
                                      children: [
                                          M,
                                          (0, r.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: m.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, r.jsx)(s.DY3, {
                                  className: m.previewWarning,
                                  text: y.intl.string(y.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, r.jsx)(s.DY3, {
                                  className: m.previewWarning,
                                  text: y.intl.formatToPlainString(y.t.eummvb, {
                                      maxTiers: g.fF,
                                      maxProducts: D.dD
                                  }),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || i === P.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => L({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: l()(m.settingsWrapper, {
                  [m.windows]: (0, p.isWindows)(),
                  [m.osx]: (0, p.isMac)()
              }),
              children: (0, r.jsx)(U, {})
          })
        : null;
}
