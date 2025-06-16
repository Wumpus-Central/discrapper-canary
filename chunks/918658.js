n.d(t, {
    Z: () => M,
    d: () => k
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(549817),
    E = n(819553),
    d = n(17181),
    _ = n(303737),
    I = n(434404),
    O = n(703656),
    T = n(944486),
    N = n(914010),
    S = n(671533),
    R = n(259580),
    A = n(358085),
    p = n(962086),
    P = n(160404),
    C = n(889695),
    D = n(981631),
    f = n(176505),
    m = n(302463),
    g = n(293810),
    y = n(388032),
    U = n(800515);
function h(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(c.zxk, {
        buttonRef: l,
        className: o()(U.button, t),
        innerClassName: U.buttonInner,
        look: c.zxk.Looks.OUTLINED,
        color: c.zxk.Colors.WHITE,
        size: c.zxk.Sizes.NONE,
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
function M() {
    let e = i.useRef(null),
        t = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
        n = (0, a.e7)([T.Z], () => T.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: A,
            isServerShopPreview: M
        } = (0, a.cj)([P.Z], () => ({
            viewingRoles: null != t ? P.Z.getViewingRoles(t) : null,
            backNavigationSection: P.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && P.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && P.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let k = (function (e) {
            switch (e) {
                case D.pNK.INTEGRATIONS:
                    return y.intl.string(y.t.k7LGdn);
                case D.pNK.ROLE_SUBSCRIPTIONS:
                    return y.intl.string(y.t.bRqiqa);
                case D.pNK.ONBOARDING:
                    return y.intl.string(y.t.qZpU3d);
                default:
                    return y.intl.string(y.t.MTIXho);
            }
        })(o),
        Z = o === D.pNK.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzc) : y.intl.string(y.t['/djIh4']),
        j = n === f.oC.GUILD_ONBOARDING,
        L = (e) => {
            let { backToSettings: n } = e;
            null != t && (P.Z.isFullServerPreview(t) && (0, O.uL)(D.Z5c.CHANNEL(t)), E.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, d.EI)(t)), (0, p.mL)(t), n && I.Z.open(t, o), o === D.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(t));
        };
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: U.notice,
        children: [
            (0, r.jsxs)(h, {
                onClick: () => L({ backToSettings: !0 }),
                className: U.backButton,
                children: [
                    (0, r.jsx)(S.Z, {
                        width: 16,
                        height: 16,
                        direction: S.Z.Directions.LEFT,
                        className: U.backArrow
                    }),
                    k
                ]
            }),
            j && A
                ? (0, r.jsx)('div', {
                      className: U.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: U.noticeText,
                          children: y.intl.string(y.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: U.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: U.noticeText,
                              children: A ? y.intl.formatToPlainString(y.t['0PHahI'], { numRoles: Object.keys(l).length }) : y.intl.formatToPlainString(y.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(c.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(C.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(h, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          Z,
                                          (0, r.jsx)(R.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: R.Z.Directions.DOWN,
                                              className: U.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          A &&
                              (0, r.jsx)(c.DY3, {
                                  className: U.previewWarning,
                                  text: y.intl.string(y.t.mW4DUF),
                                  children: (0, r.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          M &&
                              (0, r.jsx)(c.DY3, {
                                  className: U.previewWarning,
                                  text: y.intl.formatToPlainString(y.t.eummvb, {
                                      maxTiers: g.fF,
                                      maxProducts: m.dD
                                  }),
                                  children: (0, r.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            A || o === D.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => L({ backToSettings: !1 }) })
        ]
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, a.e7)([P.Z], () => P.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(U.settingsWrapper, {
                  [U.windows]: (0, A.isWindows)(),
                  [U.osx]: (0, A.isMac)()
              }),
              children: (0, r.jsx)(M, {})
          })
        : null;
}
