n.d(t, {
    Z: () => M,
    d: () => k
});
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
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
    R = n(388032),
    P = n(800515);
function w(e) {
    let { className: t, onClick: n, children: i, buttonRef: o } = e;
    return (0, r.jsx)(c.zx, {
        buttonRef: o,
        className: a()(P.button, t),
        innerClassName: P.buttonInner,
        look: c.zx.Looks.OUTLINED,
        color: c.zx.Colors.WHITE,
        size: c.zx.Sizes.NONE,
        onClick: n,
        children: i
    });
}
function D(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(w, {
        onClick: t,
        children: R.intl.string(R.t.R9GHyc)
    });
}
function L(e) {
    switch (e) {
        case S.pNK.INTEGRATIONS:
            return R.intl.string(R.t.k7LGdn);
        case S.pNK.ROLE_SUBSCRIPTIONS:
            return R.intl.string(R.t.bRqiqa);
        case S.pNK.ONBOARDING:
            return R.intl.string(R.t.qZpU3d);
        default:
            return R.intl.string(R.t.MTIXho);
    }
}
function x(e) {
    return e === S.pNK.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzc) : R.intl.string(R.t['/djIh4']);
}
function M() {
    let e = i.useRef(null),
        t = (0, s.e7)([E.Z], () => E.Z.getGuildId()),
        n = (0, s.e7)([g.Z], () => g.Z.getChannelId(t)),
        {
            viewingRoles: o,
            backNavigationSection: a,
            isFullServerPreview: c,
            isServerShopPreview: O
        } = (0, s.cj)([I.Z], () => ({
            viewingRoles: null != t ? I.Z.getViewingRoles(t) : null,
            backNavigationSection: I.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && I.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && I.Z.isViewingServerShop(t)
        }));
    if (null == o || null == t) return null;
    let M = L(a),
        k = x(a),
        j = n === A.oC.GUILD_ONBOARDING,
        U = (e) => {
            let { backToSettings: n } = e;
            null != t && (I.Z.isFullServerPreview(t) && (0, m.uL)(S.Z5c.CHANNEL(t)), f.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, _.EI)(t)), (0, v.mL)(t), n && h.Z.open(t, a), a === S.pNK.ROLE_SUBSCRIPTIONS && (0, p.GN)(t));
        };
    return (0, r.jsxs)(u.qXd, {
        color: u.DM8.BRAND,
        className: P.notice,
        children: [
            (0, r.jsxs)(w, {
                onClick: () => U({ backToSettings: !0 }),
                className: P.backButton,
                children: [
                    (0, r.jsx)(b.Z, {
                        width: 16,
                        height: 16,
                        direction: b.Z.Directions.LEFT,
                        className: P.backArrow
                    }),
                    M
                ]
            }),
            j && c
                ? (0, r.jsx)('div', {
                      className: P.noticeContents,
                      children: (0, r.jsx)('div', {
                          className: P.noticeText,
                          children: R.intl.string(R.t.PxbiAQ)
                      })
                  })
                : (0, r.jsxs)('div', {
                      className: P.noticeContents,
                      children: [
                          (0, r.jsx)('div', {
                              className: P.noticeText,
                              children: c ? R.intl.formatToPlainString(R.t['0PHahI'], { numRoles: Object.keys(o).length }) : R.intl.formatToPlainString(R.t.vMlK8v, { numRoles: Object.keys(o).length })
                          }),
                          (0, r.jsx)(u.yRy, {
                              targetElementRef: e,
                              position: 'bottom',
                              renderPopout: () => (0, r.jsx)(T.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(w, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(y.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: y.Z.Directions.DOWN,
                                              className: P.selectCaret
                                          })
                                      ]
                                  });
                              }
                          }),
                          c &&
                              (0, r.jsx)(u.DY3, {
                                  className: P.previewWarning,
                                  text: R.intl.string(R.t.mW4DUF),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: 'xs',
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css
                                  })
                              }),
                          O &&
                              (0, r.jsx)(u.DY3, {
                                  className: P.previewWarning,
                                  text: R.intl.formatToPlainString(R.t.eummvb, {
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
            c || a === S.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(D, { onClick: () => U({ backToSettings: !1 }) })
        ]
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, s.e7)([I.Z], () => I.Z.isViewingRoles(t))
        ? (0, r.jsx)('div', {
              className: a()(P.settingsWrapper, {
                  [P.windows]: (0, O.isWindows)(),
                  [P.osx]: (0, O.isMac)()
              }),
              children: (0, r.jsx)(M, {})
          })
        : null;
}
