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
    E = n(17181),
    h = n(303737),
    I = n(434404),
    p = n(703656),
    C = n(944486),
    T = n(914010),
    g = n(671533),
    O = n(259580),
    S = n(358085),
    N = n(962086),
    f = n(160404),
    A = n(889695),
    R = n(981631),
    m = n(176505),
    P = n(302463),
    y = n(293810),
    b = n(388032),
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
        children: b.intl.string(b.t.R9GHyc)
    });
}
function M() {
    let e = r.useRef(null),
        t = (0, s.e7)([T.Z], () => T.Z.getGuildId()),
        n = (0, s.e7)([C.Z], () => C.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: c,
            isServerShopPreview: S
        } = (0, s.cj)([f.Z], () => ({
            viewingRoles: null != t ? f.Z.getViewingRoles(t) : null,
            backNavigationSection: f.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && f.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && f.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let M = (function (e) {
            switch (e) {
                case R.pNK.INTEGRATIONS:
                    return b.intl.string(b.t.k7LGdn);
                case R.pNK.ROLE_SUBSCRIPTIONS:
                    return b.intl.string(b.t.bRqiqa);
                case R.pNK.ONBOARDING:
                    return b.intl.string(b.t.qZpU3d);
                default:
                    return b.intl.string(b.t.MTIXho);
            }
        })(o),
        L = o === R.pNK.ROLE_SUBSCRIPTIONS ? b.intl.string(b.t.hZUCzc) : b.intl.string(b.t['/djIh4']),
        Z = n === m.oC.GUILD_ONBOARDING,
        k = (e) => {
            let { backToSettings: n } = e;
            null != t && (f.Z.isFullServerPreview(t) && (0, p.uL)(R.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, E.EI)(t)), (0, N.mL)(t), n && I.Z.open(t, o), o === R.pNK.ROLE_SUBSCRIPTIONS && (0, h.GN)(t));
        };
    return (0, i.jsxs)(d.qXd, {
        color: d.DM8.BRAND,
        className: D.notice,
        children: [
            (0, i.jsxs)(v, {
                onClick: () => k({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, i.jsx)(g.Z, {
                        width: 16,
                        height: 16,
                        direction: g.Z.Directions.LEFT,
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
                          children: b.intl.string(b.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: D.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: D.noticeText,
                              children: c ? b.intl.formatToPlainString(b.t['0PHahI'], { numRoles: Object.keys(l).length }) : b.intl.formatToPlainString(b.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, i.jsx)(d.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(A.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(v, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          L,
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
                                  text: b.intl.string(b.t.mW4DUF),
                                  children: (0, i.jsx)(d.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          S &&
                              (0, i.jsx)(d.DY3, {
                                  className: D.previewWarning,
                                  text: b.intl.formatToPlainString(b.t.eummvb, {
                                      maxTiers: y.fF,
                                      maxProducts: P.dD
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
    return (0, s.e7)([f.Z], () => f.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: o()(D.settingsWrapper, {
                  [D.windows]: (0, S.isWindows)(),
                  [D.osx]: (0, S.isMac)()
              }),
              children: (0, i.jsx)(M, {})
          })
        : null;
}
