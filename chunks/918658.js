n.d(t, {
    Z: () => v,
    d: () => L
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    c = n(692547),
    s = n(755721),
    u = n(481060),
    d = n(549817),
    _ = n(819553),
    E = n(17181),
    O = n(303737),
    I = n(434404),
    T = n(703656),
    p = n(944486),
    S = n(914010),
    N = n(671533),
    f = n(259580),
    A = n(358085),
    m = n(962086),
    R = n(160404),
    g = n(889695),
    P = n(981631),
    C = n(176505),
    y = n(302463),
    b = n(293810),
    D = n(388032),
    h = n(800515);
function U(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(s.zx, {
        buttonRef: l,
        className: o()(h.button, t),
        innerClassName: h.buttonInner,
        look: s.zx.Looks.OUTLINED,
        color: s.zx.Colors.WHITE,
        size: s.zx.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function M(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(U, {
        onClick: t,
        children: D.intl.string(D.t.R9GHyc)
    });
}
function v() {
    let e = i.useRef(null),
        t = (0, a.e7)([S.Z], () => S.Z.getGuildId()),
        n = (0, a.e7)([p.Z], () => p.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: o,
            isFullServerPreview: s,
            isServerShopPreview: A
        } = (0, a.cj)([R.Z], () => ({
            viewingRoles: null != t ? R.Z.getViewingRoles(t) : null,
            backNavigationSection: R.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && R.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && R.Z.isViewingServerShop(t)
        }));
    if (null == l || null == t) return null;
    let v = (function (e) {
            switch (e) {
                case P.pNK.INTEGRATIONS:
                    return D.intl.string(D.t.k7LGdn);
                case P.pNK.ROLE_SUBSCRIPTIONS:
                    return D.intl.string(D.t.bRqiqa);
                case P.pNK.ONBOARDING:
                    return D.intl.string(D.t.qZpU3d);
                default:
                    return D.intl.string(D.t.MTIXho);
            }
        })(o),
        L = o === P.pNK.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzc) : D.intl.string(D.t['/djIh4']),
        Z = n === C.oC.GUILD_ONBOARDING,
        j = (e) => {
            let { backToSettings: n } = e;
            null != t && (R.Z.isFullServerPreview(t) && (0, T.uL)(P.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, E.EI)(t)), (0, m.mL)(t), n && I.Z.open(t, o), o === P.pNK.ROLE_SUBSCRIPTIONS && (0, O.GN)(t));
        };
    return (0, r.jsxs)(u.qXd, {
        color: u.DM8.BRAND,
        className: h.notice,
        children: [
            (0, r.jsxs)(U, {
                onClick: () => j({ backToSettings: !0 }),
                className: h.backButton,
                children: [
                    (0, r.jsx)(N.Z, {
                        width: 16,
                        height: 16,
                        direction: N.Z.Directions.LEFT,
                        className: h.backArrow
                    }),
                    v
                ]
            }),
            Z && s
                ? (0, r.jsx)('div', {
                      className: h.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: h.noticeText,
                          children: D.intl.string(D.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: h.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: h.noticeText,
                              children: s ? D.intl.formatToPlainString(D.t['0PHahI'], { numRoles: Object.keys(l).length }) : D.intl.formatToPlainString(D.t.vMlK8v, { numRoles: Object.keys(l).length })
                          }),
                          (0, r.jsx)(u.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(g.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(U, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          L,
                                          (0, r.jsx)(f.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: f.Z.Directions.DOWN,
                                              className: h.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          s &&
                              (0, r.jsx)(u.DY3, {
                                  className: h.previewWarning,
                                  text: D.intl.string(D.t.mW4DUF),
                                  children: (0, r.jsx)(u.P4T, {
                                      size: 'xs',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          A &&
                              (0, r.jsx)(u.DY3, {
                                  className: h.previewWarning,
                                  text: D.intl.formatToPlainString(D.t.eummvb, {
                                      maxTiers: b.fF,
                                      maxProducts: y.dD
                                  }),
                                  children: (0, r.jsx)(u.P4T, {
                                      size: 'xs',
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            s || o === P.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(M, { onClick: () => j({ backToSettings: !1 }) })
        ]
    });
}
function L(e) {
    let { guildId: t } = e;
    return (0, a.e7)([R.Z], () => R.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(h.settingsWrapper, {
                  [h.windows]: (0, A.isWindows)(),
                  [h.osx]: (0, A.isMac)()
              }),
              children: (0, r.jsx)(v, {})
          })
        : null;
}
