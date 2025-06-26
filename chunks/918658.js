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
    O = n(434404),
    I = n(703656),
    T = n(944486),
    N = n(914010),
    S = n(671533),
    p = n(259580),
    R = n(358085),
    A = n(962086),
    P = n(160404),
    C = n(889695),
    D = n(981631),
    f = n(176505),
    m = n(302463),
    y = n(293810),
    g = n(388032),
    h = n(800515);
function U(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(c.zxk, {
        buttonRef: l,
        className: o()(h.button, t),
        innerClassName: h.buttonInner,
        look: c.zxk.Looks.OUTLINED,
        color: c.zxk.Colors.WHITE,
        size: c.zxk.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function b(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(U, {
        onClick: t,
        children: g.intl.string(g.t.R9GHyc)
    });
}
function M() {
    let e = i.useRef(null),
        t = (0, a.e7)([N.Z], () => N.Z.getGuildId()),
        n = (0, a.e7)([T.Z], () => T.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: R,
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
                    return g.intl.string(g.t.k7LGdn);
                case D.pNK.ROLE_SUBSCRIPTIONS:
                    return g.intl.string(g.t.bRqiqa);
                case D.pNK.ONBOARDING:
                    return g.intl.string(g.t.qZpU3d);
                default:
                    return g.intl.string(g.t.MTIXho);
            }
        })(o),
        Z = o === D.pNK.ROLE_SUBSCRIPTIONS ? g.intl.string(g.t.hZUCzc) : g.intl.string(g.t['/djIh4']),
        j = n === f.oC.GUILD_ONBOARDING,
        v = (e) => {
            let { backToSettings: n } = e;
            null != t && (P.Z.isFullServerPreview(t) && (0, I.uL)(D.Z5c.CHANNEL(t)), E.ZP.shouldShowOnboarding(t) && (u.Z.finishOnboarding(t), (0, d.EI)(t)), (0, A.mL)(t), n && O.Z.open(t, o), o === D.pNK.ROLE_SUBSCRIPTIONS && (0, _.GN)(t));
        };
    return (0, r.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: h.notice,
        children: [
            (0, r.jsxs)(U, {
                onClick: () => v({ backToSettings: !0 }),
                className: h.backButton,
                children: [
                    (0, r.jsx)(S.Z, {
                        width: 16,
                        height: 16,
                        direction: S.Z.Directions.LEFT,
                        className: h.backArrow
                    }),
                    k
                ]
            }),
            j && R
                ? (0, r.jsx)('div', {
                      className: h.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: h.noticeText,
                          children: g.intl.string(g.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: h.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.noticeText,
                              children: R ? g.intl.formatToPlainString(g.t['0PHahI'], { numRoles: Object.keys(l).length }) : g.intl.formatToPlainString(g.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(c.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(C.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(U, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          Z,
                                          (0, r.jsx)(p.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: p.Z.Directions.DOWN,
                                              className: h.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          R &&
                              (0, r.jsx)(c.DY3, {
                                  className: h.previewWarning,
                                  text: g.intl.string(g.t.mW4DUF),
                                  children: (0, r.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          M &&
                              (0, r.jsx)(c.DY3, {
                                  className: h.previewWarning,
                                  text: g.intl.formatToPlainString(g.t.eummvb, {
                                      maxTiers: y.fF,
                                      maxProducts: m.dD
                                  }),
                                  children: (0, r.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            R || o === D.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(b, { onClick: () => v({ backToSettings: !1 }) })
        ]
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, a.e7)([P.Z], () => P.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(h.settingsWrapper, {
                  [h.windows]: (0, R.isWindows)(),
                  [h.osx]: (0, R.isMac)()
              }),
              children: (0, r.jsx)(M, {})
          })
        : null;
}
