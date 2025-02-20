n.d(t, {
    Z: () => b,
    d: () => k
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
    N = n(703656),
    I = n(944486),
    T = n(914010),
    O = n(671533),
    S = n(259580),
    P = n(358085),
    p = n(962086),
    A = n(160404),
    R = n(889695),
    C = n(981631),
    f = n(176505),
    D = n(302463),
    m = n(293810),
    g = n(388032),
    h = n(441489);
function y(e) {
    let { className: t, onClick: n, children: i } = e;
    return (0, r.jsx)(s.zxk, {
        className: l()(h.button, t),
        innerClassName: h.buttonInner,
        look: s.zxk.Looks.OUTLINED,
        color: s.zxk.Colors.WHITE,
        size: s.zxk.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function U(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(y, {
        onClick: t,
        children: g.NW.string(g.t.R9GHyc)
    });
}
function b() {
    let e = (0, o.e7)([T.Z], () => T.Z.getGuildId()),
        t = (0, o.e7)([I.Z], () => I.Z.getChannelId(e)),
        {
            viewingRoles: n,
            backNavigationSection: i,
            isFullServerPreview: l,
            isServerShopPreview: P
        } = (0, o.cj)([A.Z], () => ({
            viewingRoles: null != e ? A.Z.getViewingRoles(e) : null,
            backNavigationSection: A.Z.getBackNavigationSection(e),
            isFullServerPreview: null != e && A.Z.isFullServerPreview(e),
            isServerShopPreview: null != e && A.Z.isViewingServerShop(e)
        }));
    if (null == n || null == e) return null;
    let b = (function (e) {
            switch (e) {
                case C.pNK.INTEGRATIONS:
                    return g.NW.string(g.t.k7LGdn);
                case C.pNK.ROLE_SUBSCRIPTIONS:
                    return g.NW.string(g.t.bRqiqa);
                case C.pNK.ONBOARDING:
                    return g.NW.string(g.t.qZpU3d);
                default:
                    return g.NW.string(g.t.MTIXho);
            }
        })(i),
        k = i === C.pNK.ROLE_SUBSCRIPTIONS ? g.NW.string(g.t.hZUCzc) : g.NW.string(g.t['/djIh4']),
        M = t === f.oC.GUILD_ONBOARDING,
        v = (t) => {
            let { backToSettings: n } = t;
            null != e && (A.Z.isFullServerPreview(e) && (0, N.uL)(C.Z5c.CHANNEL(e)), u.ZP.shouldShowOnboarding(e) && (c.Z.finishOnboarding(e), (0, E.EI)(e)), (0, p.mL)(e), n && _.Z.open(e, i), i === C.pNK.ROLE_SUBSCRIPTIONS && (0, d.GN)(e));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: h.notice,
        children: [
            (0, r.jsxs)(y, {
                onClick: () => v({ backToSettings: !0 }),
                className: h.backButton,
                children: [
                    (0, r.jsx)(O.Z, {
                        width: 16,
                        height: 16,
                        direction: O.Z.Directions.LEFT,
                        className: h.backArrow
                    }),
                    b
                ]
            }),
            M && l
                ? (0, r.jsx)('div', {
                      className: h.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: h.noticeText,
                          children: g.NW.string(g.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: h.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.noticeText,
                              children: l ? g.NW.formatToPlainString(g.t['0PHahI'], { numRoles: Object.keys(n).length }) : g.NW.formatToPlainString(g.t.vMlK8v, { numRoles: Object.keys(n).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(R.Z, { guildId: e }),
                              children: (e) => {
                                  let { onClick: t } = e;
                                  return (0, r.jsxs)(y, {
                                      onClick: t,
                                      children: [
                                          k,
                                          (0, r.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: h.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          l &&
                              (0, r.jsx)(s.DY3, {
                                  className: h.previewWarning,
                                  text: g.NW.string(g.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          P &&
                              (0, r.jsx)(s.DY3, {
                                  className: h.previewWarning,
                                  text: g.NW.formatToPlainString(g.t.eummvb, {
                                      maxTiers: m.fF,
                                      maxProducts: D.dD
                                  }),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            l || i === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(U, { onClick: () => v({ backToSettings: !1 }) })
        ]
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: l()(h.settingsWrapper, {
                  [h.windows]: (0, P.isWindows)(),
                  [h.osx]: (0, P.isMac)()
              }),
              children: (0, r.jsx)(b, {})
          })
        : null;
}
