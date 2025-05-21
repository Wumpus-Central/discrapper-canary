n.d(t, {
    Z: () => M,
    d: () => v
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(692547),
    s = n(481060),
    u = n(549817),
    d = n(819553),
    _ = n(17181),
    E = n(303737),
    O = n(434404),
    I = n(703656),
    p = n(944486),
    T = n(914010),
    S = n(671533),
    N = n(259580),
    f = n(358085),
    m = n(962086),
    A = n(160404),
    R = n(889695),
    g = n(981631),
    C = n(176505),
    P = n(302463),
    y = n(293810),
    b = n(388032),
    D = n(800515);
function h(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(s.zxk, {
        buttonRef: l,
        className: o()(D.button, t),
        innerClassName: D.buttonInner,
        look: s.zxk.Looks.OUTLINED,
        color: s.zxk.Colors.WHITE,
        size: s.zxk.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function U(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(h, {
        onClick: t,
        children: b.intl.string(b.t.R9GHyc)
    });
}
function M() {
    let e = i.useRef(null),
        t = (0, a.e7)([T.Z], () => T.Z.getGuildId()),
        n = (0, a.e7)([p.Z], () => p.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: f,
            isServerShopPreview: M
        } = (0, a.cj)([A.Z], () => ({
            viewingRoles: null != t ? A.Z.getViewingRoles(t) : null,
            backNavigationSection: A.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && A.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && A.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let v = (function (e) {
            switch (e) {
                case g.pNK.INTEGRATIONS:
                    return b.intl.string(b.t.k7LGdn);
                case g.pNK.ROLE_SUBSCRIPTIONS:
                    return b.intl.string(b.t.bRqiqa);
                case g.pNK.ONBOARDING:
                    return b.intl.string(b.t.qZpU3d);
                default:
                    return b.intl.string(b.t.MTIXho);
            }
        })(o),
        k = o === g.pNK.ROLE_SUBSCRIPTIONS ? b.intl.string(b.t.hZUCzc) : b.intl.string(b.t['/djIh4']),
        L = n === C.oC.GUILD_ONBOARDING,
        Z = (e) => {
            let { backToSettings: n } = e;
            null != t && (A.Z.isFullServerPreview(t) && (0, I.uL)(g.Z5c.CHANNEL(t)), d.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, _.EI)(t)), (0, m.mL)(t), n && O.Z.open(t, o), o === g.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(t));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: D.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => Z({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, r.jsx)(S.Z, {
                        width: 16,
                        height: 16,
                        direction: S.Z.Directions.LEFT,
                        className: D.backArrow
                    }),
                    v
                ]
            }),
            L && f
                ? (0, r.jsx)('div', {
                      className: D.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: D.noticeText,
                          children: b.intl.string(b.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: D.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: D.noticeText,
                              children: f ? b.intl.formatToPlainString(b.t['0PHahI'], { numRoles: Object.keys(l).length }) : b.intl.formatToPlainString(b.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(R.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(h, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(N.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: N.Z.Directions.DOWN,
                                              className: D.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          f &&
                              (0, r.jsx)(s.DY3, {
                                  className: D.previewWarning,
                                  text: b.intl.string(b.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          M &&
                              (0, r.jsx)(s.DY3, {
                                  className: D.previewWarning,
                                  text: b.intl.formatToPlainString(b.t.eummvb, {
                                      maxTiers: y.fF,
                                      maxProducts: P.dD
                                  }),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            f || o === g.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(U, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, a.e7)([A.Z], () => A.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(D.settingsWrapper, {
                  [D.windows]: (0, f.isWindows)(),
                  [D.osx]: (0, f.isMac)()
              }),
              children: (0, r.jsx)(M, {})
          })
        : null;
}
