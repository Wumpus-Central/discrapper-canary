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
    O = n(944486),
    N = n(914010),
    T = n(671533),
    S = n(259580),
    p = n(358085),
    A = n(962086),
    R = n(160404),
    P = n(889695),
    f = n(981631),
    C = n(176505),
    D = n(302463),
    g = n(293810),
    y = n(388032),
    m = n(789868);
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
        children: y.NW.string(y.t.R9GHyc)
    });
}
function U() {
    let e = (0, o.e7)([N.Z], () => N.Z.getGuildId()),
        t = (0, o.e7)([O.Z], () => O.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: p
        } = (0, o.cj)([R.Z], () => ({
            viewingRoles: null != e ? R.Z.getViewingRoles(e) : null,
            backNavigationSection: R.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && R.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && R.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let U = (function (e) {
            switch (e) {
                case f.pNK.INTEGRATIONS:
                    return y.NW.string(y.t.k7LGdn);
                case f.pNK.ROLE_SUBSCRIPTIONS:
                    return y.NW.string(y.t.bRqiqa);
                case f.pNK.ONBOARDING:
                    return y.NW.string(y.t.qZpU3d);
                default:
                    return y.NW.string(y.t.MTIXho);
            }
        })(i),
        M = i === f.pNK.ROLE_SUBSCRIPTIONS ? y.NW.string(y.t.hZUCzc) : y.NW.string(y.t['/djIh4']),
        L = t === C.oC.GUILD_ONBOARDING,
        Z = (t) => {
            let { backToSettings: n } = t;
            null != e && (R.Z.isFullServerPreview(e) && (0, I.uL)(f.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, d.EI)(e)), (0, A.mL)(e), n && _.Z.open(e, i), i === f.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(e));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: m.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => Z({ backToSettings: !0 }),
                className: m.backButton,
                children: [
                    (0, r.jsx)(T.Z, {
                        width: 16,
                        height: 16,
                        direction: T.Z.Directions.LEFT,
                        className: m.backArrow
                    }),
                    U
                ]
            }),
            L && l
                ? (0, r.jsx)('div', {
                      className: m.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: m.noticeText,
                          children: y.NW.string(y.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: m.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: m.noticeText,
                              children: l ? y.NW.formatToPlainString(y.t['0PHahI'], { numRoles: Object.keys(n).length }) : y.NW.formatToPlainString(y.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(P.Z, { guildId: e }),
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
                                  text: y.NW.string(y.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          p &&
                              (0, r.jsx)(s.DY3, {
                                  className: m.previewWarning,
                                  text: y.NW.formatToPlainString(y.t.eummvb, {
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
            l || i === f.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, o.e7)([R.Z], () => R.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: l()(m.settingsWrapper, {
                  [m.windows]: (0, p.isWindows)(),
                  [m.osx]: (0, p.isMac)()
              }),
              children: (0, r.jsx)(U, {})
          })
        : null;
}
