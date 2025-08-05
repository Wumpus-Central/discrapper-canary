n.d(t, {
    Z: () => k,
    d: () => j
});
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(755721),
    u = n(481060),
    d = n(549817),
    f = n(819553),
    _ = n(17181),
    p = n(303737),
    h = n(434404),
    m = n(703656),
    g = n(944486),
    E = n(914010),
    b = n(671533),
    y = n(259580),
    O = n(358085),
    v = n(962086),
    I = n(160404),
    T = n(889695),
    S = n(981631),
    A = n(176505),
    N = n(302463),
    C = n(293810),
    w = n(388032),
    R = n(800515);
function P(e) {
    let { className: t, onClick: n, children: i, buttonRef: a } = e;
    return (0, r.jsx)(c.zx, {
        buttonRef: a,
        className: o()(R.button, t),
        innerClassName: R.buttonInner,
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        size: c.zx.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function D(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(P, {
        onClick: t,
        children: w.intl.string(w.t.R9GHyc)
    });
}
function L(e) {
    switch (e) {
        case S.pNK.INTEGRATIONS:
            return w.intl.string(w.t.k7LGdn);
        case S.pNK.ROLE_SUBSCRIPTIONS:
            return w.intl.string(w.t.bRqiqa);
        case S.pNK.ONBOARDING:
            return w.intl.string(w.t.qZpU3d);
        default:
            return w.intl.string(w.t.MTIXho);
    }
}
function x(e) {
    return e === S.pNK.ROLE_SUBSCRIPTIONS ? w.intl.string(w.t.hZUCzc) : w.intl.string(w.t['/djIh4']);
}
function k() {
    let e = i.useRef(null),
        t = (0, s.e7)([E.Z], () => E.Z.getGuildId()),
        n = (0, s.e7)([g.Z], () => g.Z.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: o,
            isFullServerPreview: c,
            isServerShopPreview: O
        } = (0, s.cj)([I.Z], () => ({
            viewingRoles: null != t ? I.Z.getViewingRoles(t) : null,
            backNavigationSection: I.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && I.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && I.Z.isViewingServerShop(t)
        }));
    if (null == a || null == t) return null;
    let k = L(o),
        j = x(o),
        M = n === A.oC.GUILD_ONBOARDING,
        U = (e) => {
            let { backToSettings: n } = e;
            null != t && (I.Z.isFullServerPreview(t) && (0, m.uL)(S.Z5c.CHANNEL(t)), f.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, _.EI)(t)), (0, v.mL)(t), n && h.Z.open(t, o), o === S.pNK.ROLE_SUBSCRIPTIONS && (0, p.GN)(t));
        };
    return (0, r.jsxs)(u.qXd, {
        color: u.DM8.BRAND,
        className: R.notice,
        children: [
            (0, r.jsxs)(P, {
                onClick: () => U({ backToSettings: !0 }),
                className: R.backButton,
                children: [
                    (0, r.jsx)(b.Z, {
                        width: 16,
                        height: 16,
                        direction: b.Z.Directions.LEFT,
                        className: R.backArrow
                    }),
                    k
                ]
            }),
            M && c
                ? (0, r.jsx)('div', {
                      className: R.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: R.noticeText,
                          children: w.intl.string(w.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: R.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: R.noticeText,
                              children: c ? w.intl.formatToPlainString(w.t['0PHahI'], { numRoles: Object.keys(a).length }) : w.intl.formatToPlainString(w.t.vMlK8v, { numRoles: Object.keys(a).length })
                          }),
                          (0, r.jsx)(u.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(T.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(P, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          j,
                                          (0, r.jsx)(y.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: y.Z.Directions.DOWN,
                                              className: R.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          c &&
                              (0, r.jsx)(u.DY3, {
                                  className: R.previewWarning,
                                  text: w.intl.string(w.t.mW4DUF),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          O &&
                              (0, r.jsx)(u.DY3, {
                                  className: R.previewWarning,
                                  text: w.intl.formatToPlainString(w.t.eummvb, {
                                      maxTiers: C.fF,
                                      maxProducts: N.dD
                                  }),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              })
                      ]
                  }),
            c || o === S.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, { onClick: () => U({ backToSettings: !1 }) })
        ]
    });
}
function j(e) {
    let { guildId: t } = e;
    return (0, s.e7)([I.Z], () => I.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: o()(R.settingsWrapper, {
                  [R.windows]: (0, O.isWindows)(),
                  [R.osx]: (0, O.isMac)()
              }),
              children: (0, r.jsx)(k, {})
          })
        : null;
}
