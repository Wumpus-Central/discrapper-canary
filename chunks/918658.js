n.d(t, {
    Z: () => v,
    d: () => Z
});
var r = n(255367),
    i = n(73800),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    c = n(692547),
    s = n(755721),
    u = n(481060),
    d = n(549817),
    _ = n(819553),
    E = n(17181),
    I = n(303737),
    O = n(434404),
    p = n(703656),
    T = n(944486),
    S = n(914010),
    N = n(671533),
    f = n(259580),
    m = n(358085),
    A = n(962086),
    g = n(160404),
    R = n(889695),
    C = n(981631),
    P = n(176505),
    y = n(302463),
    b = n(293810),
    D = n(388032),
    h = n(800515);
function U(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(s.zx, {
        buttonRef: l,
        className: a()(h.button, t),
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
        t = (0, o.e7)([S.Z], () => S.Z.getGuildId()),
        n = (0, o.e7)([T.Z], () => T.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: a,
            isFullServerPreview: s,
            isServerShopPreview: m
        } = (0, o.cj)([g.Z], () => ({
            viewingRoles: null != t ? g.Z.getViewingRoles(t) : null,
            backNavigationSection: g.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && g.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && g.Z.isViewingServerShop(t)
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
        })(a),
        Z = a === C.pNK.ROLE_SUBSCRIPTIONS ? D.intl.string(D.t.hZUCzc) : D.intl.string(D.t['/djIh4']),
        L = n === P.oC.GUILD_ONBOARDING,
        j = (e) => {
            let { backToSettings: n } = e;
            null != t && (g.Z.isFullServerPreview(t) && (0, p.uL)(C.Z5c.CHANNEL(t)), _.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, E.EI)(t)), (0, A.mL)(t), n && O.Z.open(t, a), a === C.pNK.ROLE_SUBSCRIPTIONS && (0, I.GN)(t));
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
            L && s
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
                              renderPopout: () => (0, r.jsx)(R.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(U, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          Z,
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
                          m &&
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
            s || a === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(M, { onClick: () => j({ backToSettings: !1 }) })
        ]
    });
}
function Z(e) {
    let { guildId: t } = e;
    return (0, o.e7)([g.Z], () => g.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: a()(h.settingsWrapper, {
                  [h.windows]: (0, m.isWindows)(),
                  [h.osx]: (0, m.isMac)()
              }),
              children: (0, r.jsx)(v, {})
          })
        : null;
}
