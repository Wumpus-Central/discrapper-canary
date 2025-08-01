n.d(t, {
    Z: () => x,
    d: () => v
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(549817),
    _ = n(819553),
    E = n(17181),
    p = n(303737),
    O = n(434404),
    S = n(703656),
    I = n(944486),
    f = n(914010),
    h = n(671533),
    T = n(259580),
    m = n(358085),
    g = n(962086),
    N = n(160404),
    y = n(889695),
    R = n(981631),
    A = n(176505),
    b = n(302463),
    C = n(293810),
    P = n(388032),
    D = n(800515);
function M(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(c.zx, {
        buttonRef: l,
        className: a()(D.button, t),
        innerClassName: D.buttonInner,
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        size: c.zx.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function j(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(M, {
        onClick: t,
        children: P.intl.string(P.t.R9GHyc)
    });
}
function x() {
    let e = i.useRef(null),
        t = (0, o.e7)([f.Z], () => f.Z.getGuildId()),
        n = (0, o.e7)([I.Z], () => I.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: a,
            isFullServerPreview: c,
            isServerShopPreview: m
        } = (0, o.cj)([N.Z], () => ({
            viewingRoles: null != t ? N.Z.getViewingRoles(t) : null,
            backNavigationSection: N.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && N.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && N.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let x = (function (e) {
            switch (e) {
                case R.pNK.INTEGRATIONS:
                    return P.intl.string(P.t.k7LGdn);
                case R.pNK.ROLE_SUBSCRIPTIONS:
                    return P.intl.string(P.t.bRqiqa);
                case R.pNK.ONBOARDING:
                    return P.intl.string(P.t.qZpU3d);
                default:
                    return P.intl.string(P.t.MTIXho);
            }
        })(a),
        v = a === R.pNK.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzc) : P.intl.string(P.t['/djIh4']),
        k = n === A.oC.GUILD_ONBOARDING,
        Z = (e) => {
            let { backToSettings: n } = e;
            null != t && (N.Z.isFullServerPreview(t) && (0, S.uL)(R.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, E.EI)(t)), (0, g.mL)(t), n && O.Z.open(t, a), a === R.pNK.ROLE_SUBSCRIPTIONS && (0, p.GN)(t));
        };
    return (0, r.jsxs)(u.qXd, {
        color: u.DM8.BRAND,
        className: D.notice,
        children: [
            (0, r.jsxs)(M, {
                onClick: () => Z({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, r.jsx)(h.Z, {
                        width: 16,
                        height: 16,
                        direction: h.Z.Directions.LEFT,
                        className: D.backArrow
                    }),
                    x
                ]
            }),
            k && c
                ? (0, r.jsx)('div', {
                      className: D.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: D.noticeText,
                          children: P.intl.string(P.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: D.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: D.noticeText,
                              children: c ? P.intl.formatToPlainString(P.t['0PHahI'], { numRoles: Object.keys(l).length }) : P.intl.formatToPlainString(P.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(u.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(y.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(M, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          v,
                                          (0, r.jsx)(T.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: T.Z.Directions.DOWN,
                                              className: D.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          c &&
                              (0, r.jsx)(u.DY3, {
                                  className: D.previewWarning,
                                  text: P.intl.string(P.t.mW4DUF),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          m &&
                              (0, r.jsx)(u.DY3, {
                                  className: D.previewWarning,
                                  text: P.intl.formatToPlainString(P.t.eummvb, {
                                      maxTiers: C.fF,
                                      maxProducts: b.dD
                                  }),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: 'xs',
                                      color: s.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            c || a === R.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(j, { onClick: () => Z({ backToSettings: !1 }) })
        ]
    });
}
function v(e) {
    let { guildId: t } = e;
    return (0, o.e7)([N.Z], () => N.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: a()(D.settingsWrapper, {
                  [D.windows]: (0, m.isWindows)(),
                  [D.osx]: (0, m.isMac)()
              }),
              children: (0, r.jsx)(x, {})
          })
        : null;
}
