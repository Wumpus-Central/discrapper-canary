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
    I = n(434404),
    O = n(703656),
    T = n(944486),
    p = n(914010),
    N = n(671533),
    S = n(259580),
    f = n(358085),
    A = n(962086),
    R = n(160404),
    m = n(889695),
    C = n(981631),
    g = n(176505),
    P = n(302463),
    y = n(293810),
    D = n(388032),
    b = n(800515);
function h(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(s.zxk, {
        buttonRef: l,
        className: o()(b.button, t),
        innerClassName: b.buttonInner,
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
        children: D.intl.string(D.t.R9GHyc)
    });
}
function M() {
    let e = i.useRef(null),
        t = (0, a.e7)([p.Z], () => p.Z.getGuildId()),
        n = (0, a.e7)([T.Z], () => T.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: f,
            isServerShopPreview: M
        } = (0, a.cj)([R.Z], () => ({
            viewingRoles: null != t ? R.Z.getViewingRoles(t) : null,
            backNavigationSection: R.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && R.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && R.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let v = (function (e) {
            switch (e) {
                case C.pNK.INTEGRATIONS:
                    return D.intl.string(D.t.k7LGdn);
                case C.pNK.ROLE_SUBSCRIPTIONS:
                    return D.intl.string(D.t.bRqiqa);
                case C.pNK.ONBOARDING:
                    return D.intl.string(D.t.qZpU3d);
                default:
                    return D.intl.string(D.t.MTIXho);
            }
        })(o),
        k = o === C.pNK.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzc) : D.intl.string(D.t['/djIh4']),
        L = n === g.oC.GUILD_ONBOARDING,
        Z = (e) => {
            let { backToSettings: n } = e;
            null != t && (R.Z.isFullServerPreview(t) && (0, O.uL)(C.Z5c.CHANNEL(t)), d.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, _.EI)(t)), (0, A.mL)(t), n && I.Z.open(t, o), o === C.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(t));
        };
    return (0, r.jsxs)(s.qXd, {
        color: s.DM8.BRAND,
        className: b.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => Z({ backToSettings: !0 }),
                className: b.backButton,
                children: [
                    (0, r.jsx)(N.Z, {
                        width: 16,
                        height: 16,
                        direction: N.Z.Directions.LEFT,
                        className: b.backArrow
                    }),
                    v
                ]
            }),
            L && f
                ? (0, r.jsx)('div', {
                      className: b.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: b.noticeText,
                          children: D.intl.string(D.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: b.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: b.noticeText,
                              children: f ? D.intl.formatToPlainString(D.t['0PHahI'], { numRoles: Object.keys(l).length }) : D.intl.formatToPlainString(D.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(s.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(m.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(h, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: b.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          f &&
                              (0, r.jsx)(s.DY3, {
                                  className: b.previewWarning,
                                  text: D.intl.string(D.t.mW4DUF),
                                  children: (0, r.jsx)(s.P4T, {
                                      size: 'xs',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          M &&
                              (0, r.jsx)(s.DY3, {
                                  className: b.previewWarning,
                                  text: D.intl.formatToPlainString(D.t.eummvb, {
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
            f || o === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(U, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, a.e7)([R.Z], () => R.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(b.settingsWrapper, {
                  [b.windows]: (0, f.isWindows)(),
                  [b.osx]: (0, f.isMac)()
              }),
              children: (0, r.jsx)(M, {})
          })
        : null;
}
