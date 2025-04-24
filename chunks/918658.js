n.d(t, {
    Z: () => b,
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
    E = n(17181),
    d = n(303737),
    _ = n(434404),
    I = n(703656),
    O = n(944486),
    T = n(914010),
    N = n(671533),
    S = n(259580),
    R = n(358085),
    A = n(962086),
    p = n(160404),
    P = n(889695),
    C = n(981631),
    D = n(176505),
    f = n(302463),
    m = n(293810),
    g = n(388032),
    y = n(800515);
function U(e) {
    let { className: t, onClick: n, children: i } = e;
    return (0, r.jsx)(s.zxk, {
        className: l()(y.button, t),
        innerClassName: y.buttonInner,
        look: s.zxk.Looks.OUTLINED,
        color: s.zxk.Colors.WHITE,
        size: s.zxk.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function h(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(U, {
        onClick: t,
        children: g.intl.string(g.t.R9GHyc)
    });
}
function b() {
    let e = (0, o.e7)([T.Z], () => T.Z.getGuildId()),
        t = (0, o.e7)([O.Z], () => O.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: R
        } = (0, o.cj)([p.Z], () => ({
            viewingRoles: null != e ? p.Z.getViewingRoles(e) : null,
            backNavigationSection: p.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && p.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && p.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let b = (function (e) {
            switch (e) {
                case C.pNK.INTEGRATIONS:
                    return g.intl.string(g.t.k7LGdn);
                case C.pNK.ROLE_SUBSCRIPTIONS:
                    return g.intl.string(g.t.bRqiqa);
                case C.pNK.ONBOARDING:
                    return g.intl.string(g.t.qZpU3d);
                default:
                    return g.intl.string(g.t.MTIXho);
            }
        })(i),
        M = i === C.pNK.ROLE_SUBSCRIPTIONS ? g.intl.string(g.t.hZUCzc) : g.intl.string(g.t['/djIh4']),
        k = t === D.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (p.Z.isFullServerPreview(e) && (0, I.uL)(C.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, E.EI)(e)), (0, A.mL)(e), n && _.Z.open(e, i), i === C.pNK.ROLE_SUBSCRIPTIONS && (0, d.GN)(e));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: y.notice,
        children: [
            (0, r.jsxs)(U, {
                onClick: () => Z({ backToSettings: !0 }),
                className: y.backButton,
                children: [
                    (0, r.jsx)(N.Z, {
                        width: 16,
                        height: 16,
                        direction: N.Z.Directions.LEFT,
                        className: y.backArrow
                    }),
                    b
                ]
            }),
            k && l
                ? (0, r.jsx)('div', {
                      className: y.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: y.noticeText,
                          children: g.intl.string(g.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: y.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: y.noticeText,
                              children: l ? g.intl.formatToPlainString(g.t['0PHahI'], { numRoles: Object.keys(n).length }) : g.intl.formatToPlainString(g.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(P.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, r.jsxs)(U, {
                                      onClick: t,
                                      children: [
                                          M,
                                          (0, r.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: y.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, r.jsx)(s.DY3, {
                                  className: y.previewWarning,
                                  text: g.intl.string(g.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          R &&
                              (0, r.jsx)(s.DY3, {
                                  className: y.previewWarning,
                                  text: g.intl.formatToPlainString(g.t.eummvb, {
                                      maxTiers: m.fF,
                                      maxProducts: f.dD
                                  }),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || i === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(h, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, o.e7)([p.Z], () => p.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: l()(y.settingsWrapper, {
                  [y.windows]: (0, R.isWindows)(),
                  [y.osx]: (0, R.isMac)()
              }),
              children: (0, r.jsx)(b, {})
          })
        : null;
}
