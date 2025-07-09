n.d(t, {
    Z: () => U,
    d: () => M
});
var i = n(255367),
    r = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(442837),
    a = n(692547),
    c = n(481060),
    d = n(549817),
    u = n(819553),
    _ = n(17181),
    E = n(303737),
    h = n(434404),
    I = n(703656),
    p = n(944486),
    C = n(914010),
    T = n(671533),
    g = n(259580),
    O = n(358085),
    S = n(962086),
    N = n(160404),
    f = n(889695),
    A = n(981631),
    R = n(176505),
    m = n(302463),
    P = n(293810),
    y = n(388032),
    b = n(800515);
function D(e) {
    let { className: t, onClick: n, children: r, buttonRef: l } = e;
    return (0, i.jsx)(c.zxk, {
        buttonRef: l,
        className: o()(b.button, t),
        innerClassName: b.buttonInner,
        look: c.zxk.Looks.OUTLINED,
        color: c.zxk.Colors.WHITE,
        size: c.zxk.Sizes.NONE,
        onClick: n,
        children: r
    });
}
function v(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(D, {
        onClick: t,
        children: y.intl.string(y.t.R9GHyc)
    });
}
function U() {
    let e = r.useRef(null),
        t = (0, s.e7)([C.Z], () => C.Z.getGuildId()),
        n = (0, s.e7)([p.Z], () => p.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: O,
            isServerShopPreview: U
        } = (0, s.cj)([N.Z], () => ({
            viewingRoles: null != t ? N.Z.getViewingRoles(t) : null,
            backNavigationSection: N.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && N.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && N.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let M = (function (e) {
            switch (e) {
                case A.pNK.INTEGRATIONS:
                    return y.intl.string(y.t.k7LGdn);
                case A.pNK.ROLE_SUBSCRIPTIONS:
                    return y.intl.string(y.t.bRqiqa);
                case A.pNK.ONBOARDING:
                    return y.intl.string(y.t.qZpU3d);
                default:
                    return y.intl.string(y.t.MTIXho);
            }
        })(o),
        L = o === A.pNK.ROLE_SUBSCRIPTIONS ? y.intl.string(y.t.hZUCzc) : y.intl.string(y.t['/djIh4']),
        k = n === R.oC.GUILD_ONBOARDING,
        Z = (e) => {
            let { backToSettings: n } = e;
            null != t && (N.Z.isFullServerPreview(t) && (0, I.uL)(A.Z5c.CHANNEL(t)), u.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, _.EI)(t)), (0, S.mL)(t), n && h.Z.open(t, o), o === A.pNK.ROLE_SUBSCRIPTIONS && (0, E.GN)(t));
        };
    return (0, i.jsxs)(c.qXd, {
        color: c.DM8.BRAND,
        className: b.notice,
        children: [
            (0, i.jsxs)(D, {
                onClick: () => Z({ backToSettings: !0 }),
                className: b.backButton,
                children: [
                    (0, i.jsx)(T.Z, {
                        width: 16,
                        height: 16,
                        direction: T.Z.Directions.LEFT,
                        className: b.backArrow
                    }),
                    M
                ]
            }),
            k && O
                ? (0, i.jsx)('div', {
                      className: b.noticeContents,
                      children: (0, i.jsx)('div', {
                          className: b.noticeText,
                          children: y.intl.string(y.t.PxbiAQ)
                      })
                  })
                : (0, i.jsxs)('div', {
                      className: b.noticeContents,
                      children: [
                          (0, i.jsx)('div', {
                              className: b.noticeText,
                              children: O ? y.intl.formatToPlainString(y.t['0PHahI'], { numRoles: Object.keys(l).length }) : y.intl.formatToPlainString(y.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, i.jsx)(c.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, i.jsx)(f.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, i.jsxs)(D, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          L,
                                          (0, i.jsx)(g.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: g.Z.Directions.DOWN,
                                              className: b.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          O &&
                              (0, i.jsx)(c.DY3, {
                                  className: b.previewWarning,
                                  text: y.intl.string(y.t.mW4DUF),
                                  children: (0, i.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          U &&
                              (0, i.jsx)(c.DY3, {
                                  className: b.previewWarning,
                                  text: y.intl.formatToPlainString(y.t.eummvb, {
                                      maxTiers: P.fF,
                                      maxProducts: m.dD
                                  }),
                                  children: (0, i.jsx)(c.P4T, {
                                      size: 'xs',
                                      color: a.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            O || o === A.pNK.ROLE_SUBSCRIPTIONS ? null : (0, i.jsx)(v, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function M(e) {
    let { guildId: t } = e;
    return (0, s.e7)([N.Z], () => N.Z.isViewingRoles(t))
        ? (0, i.jsx)('div', {
              className: o()(b.settingsWrapper, {
                  [b.windows]: (0, O.isWindows)(),
                  [b.osx]: (0, O.isMac)()
              }),
              children: (0, i.jsx)(U, {})
          })
        : null;
}
