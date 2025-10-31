n.d(t, {
    Z: () => j,
    d: () => k,
});
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    f = n(549817),
    _ = n(819553),
    p = n(17181),
    h = n(303737),
    m = n(434404),
    g = n(703656),
    E = n(944486),
    b = n(914010),
    y = n(671533),
    O = n(259580),
    v = n(358085),
    I = n(962086),
    T = n(160404),
    S = n(889695),
    A = n(981631),
    C = n(176505),
    N = n(302463),
    R = n(293810),
    P = n(388032),
    w = n(829675);
function D(e) {
    let { className: t, onClick: n, children: i, buttonRef: a } = e;
    return (0, r.jsx)(u.zx, {
        buttonRef: a,
        className: o()(w.button, t),
        innerClassName: w.buttonInner,
        look: u.zx.Looks.OUTLINED,
        color: u.zx.Colors.WHITE,
        size: u.zx.Sizes.NONE,
        onClick: n,
        children: i,
    });
}
function x(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(D, {
        onClick: t,
        children: P.intl.string(P.t.R9GHya),
    });
}
function L(e) {
    switch (e) {
        case A.pNK.INTEGRATIONS:
            return P.intl.string(P.t.k7LGdh);
        case A.pNK.ROLE_SUBSCRIPTIONS:
            return P.intl.string(P.t.bRqiqa);
        case A.pNK.ONBOARDING:
            return P.intl.string(P.t.qZpU3S);
        default:
            return P.intl.string(P.t.MTIXhi);
    }
}
function M(e) {
    return e === A.pNK.ROLE_SUBSCRIPTIONS ? P.intl.string(P.t.hZUCzd) : P.intl.string(P.t["/djIh7"]);
}
function j() {
    let e = i.useRef(null),
        t = (0, s.e7)([b.Z], () => b.Z.getGuildId()),
        n = (0, s.e7)([E.Z], () => E.Z.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: o,
            isFullServerPreview: u,
            isServerShopPreview: v,
        } = (0, s.cj)([T.Z], () => ({
            viewingRoles: null != t ? T.Z.getViewingRoles(t) : null,
            backNavigationSection: T.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && T.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && T.Z.isViewingServerShop(t),
        }));
    if (null == a || null == t) return null;
    let j = L(o),
        k = M(o),
        U = n === C.oC.GUILD_ONBOARDING,
        G = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (T.Z.isFullServerPreview(t) && (0, g.uL)(A.Z5c.CHANNEL(t)),
                _.ZP.shouldShowOnboarding(t) && (f.Z.finishOnboarding(t), (0, p.EI)(t)),
                (0, I.mL)(t),
                n && m.Z.open(t, o),
                o === A.pNK.ROLE_SUBSCRIPTIONS && (0, h.GN)(t));
        };
    return (0, r.jsxs)(d.qXd, {
        color: d.DM8.BRAND,
        className: w.notice,
        children: [
            (0, r.jsxs)(D, {
                onClick: () => G({ backToSettings: !0 }),
                className: w.backButton,
                children: [
                    (0, r.jsx)(y.Z, {
                        width: 16,
                        height: 16,
                        direction: y.Z.Directions.LEFT,
                        className: w.backArrow,
                    }),
                    j,
                ],
            }),
            U && u
                ? (0, r.jsx)("div", {
                      className: w.noticeContents,
                      children: (0, r.jsx)("div", {
                          className: w.noticeText,
                          children: P.intl.string(P.t.PxbiAf),
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: w.noticeContents,
                      children: [
                          (0, r.jsx)("div", {
                              className: w.noticeText,
                              children: u
                                  ? P.intl.formatToPlainString(P.t["0PHahI"], { numRoles: Object.keys(a).length })
                                  : P.intl.formatToPlainString(P.t.vMlK8t, { numRoles: Object.keys(a).length }),
                          }),
                          (0, r.jsx)(d.yRy, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, r.jsx)(S.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(D, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(O.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: O.Z.Directions.DOWN,
                                              className: w.selectCaret,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          u &&
                              (0, r.jsx)(c.u, {
                                  asContainer: !0,
                                  text: P.intl.string(P.t.mW4DUE),
                                  children: (0, r.jsx)(d.Mgn, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          v &&
                              (0, r.jsx)(c.u, {
                                  asContainer: !0,
                                  text: P.intl.formatToPlainString(P.t.eummvd, {
                                      maxTiers: R.fF,
                                      maxProducts: N.dD,
                                  }),
                                  children: (0, r.jsx)(d.Mgn, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            u || o === A.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(x, { onClick: () => G({ backToSettings: !1 }) }),
        ],
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, s.e7)([T.Z], () => T.Z.isViewingRoles(t))
        ? (0, r.jsx)("div", {
              className: o()(w.settingsWrapper, {
                  [w.windows]: (0, v.isWindows)(),
                  [w.osx]: (0, v.isMac)(),
              }),
              children: (0, r.jsx)(j, {}),
          })
        : null;
}
