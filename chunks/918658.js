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
    I = n(703656),
    N = n(944486),
    O = n(914010),
    T = n(671533),
    S = n(259580),
    p = n(358085),
    f = n(962086),
    A = n(160404),
    R = n(889695),
    P = n(981631),
    C = n(176505),
    g = n(302463),
    m = n(293810),
    D = n(388032),
    y = n(800515);
function h(e) {
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
function b(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(h, {
        onClick: t,
        children: D.NW.string(D.t.R9GHyc)
    });
}
function U() {
    let e = (0, o.e7)([O.Z], () => O.Z.getGuildId()),
        t = (0, o.e7)([N.Z], () => N.Z.getChannelId(e)),
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
                    return D.NW.string(D.t.k7LGdn);
                case P.pNK.ROLE_SUBSCRIPTIONS:
                    return D.NW.string(D.t.bRqiqa);
                case P.pNK.ONBOARDING:
                    return D.NW.string(D.t.qZpU3d);
                default:
                    return D.NW.string(D.t.MTIXho);
            }
        })(i),
        M = i === P.pNK.ROLE_SUBSCRIPTIONS ? D.NW.string(D.t.hZUCzc) : D.NW.string(D.t['/djIh4']),
        L = t === C.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (A.Z.isFullServerPreview(e) && (0, I.uL)(P.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.EI)(e)), (0, f.mL)(e), n && _.Z.open(e, i), i === P.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(e));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: y.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => Z({ backToSettings: !0 }),
                className: y.backButton,
                children: [
                    (0, r.jsx)(T.Z, {
                        width: 16,
                        height: 16,
                        direction: T.Z.Directions.LEFT,
                        className: y.backArrow
                    }),
                    U
                ]
            }),
            L && l
                ? (0, r.jsx)('div', {
                      className: y.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: y.noticeText,
                          children: D.NW.string(D.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: y.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: y.noticeText,
                              children: l ? D.NW.formatToPlainString(D.t['0PHahI'], { numRoles: Object.keys(n).length }) : D.NW.formatToPlainString(D.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(R.Z, { guildId: e }),
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
                                              className: y.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, r.jsx)(s.DY3, {
                                  className: y.previewWarning,
                                  text: D.NW.string(D.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, r.jsx)(s.DY3, {
                                  className: y.previewWarning,
                                  text: D.NW.formatToPlainString(D.t.eummvb, {
                                      maxTiers: m.fF,
                                      maxProducts: g.dD
                                  }),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || i === P.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: l()(y.settingsWrapper, {
                  [y.windows]: (0, p.isWindows)(),
                  [y.osx]: (0, p.isMac)()
              }),
              children: (0, r.jsx)(U, {})
          })
        : null;
}
