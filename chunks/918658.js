n.d(t, {
    Z: () => M,
    d: () => k,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(692547),
    c = n(28664),
    u = n(755721),
    d = n(481060),
    f = n(549817),
    p = n(819553),
    _ = n(17181),
    m = n(303737),
    h = n(434404),
    g = n(703656),
    E = n(944486),
    b = n(914010),
    y = n(671533),
    O = n(259580),
    v = n(358085),
    S = n(962086),
    I = n(160404),
    T = n(889695),
    C = n(981631),
    A = n(176505),
    N = n(302463),
    P = n(293810),
    R = n(388032),
    D = n(829675);
function w(e) {
    let { className: t, onClick: n, children: i, buttonRef: a } = e;
    return (0, r.jsx)(u.zx, {
        buttonRef: a,
        className: o()(D.button, t),
        innerClassName: D.buttonInner,
        look: u.zx.Looks.OUTLINED,
        color: u.zx.Colors.WHITE,
        size: u.zx.Sizes.NONE,
        onClick: n,
        children: i,
    });
}
function x(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(w, {
        onClick: t,
        children: R.intl.string(R.t.R9GHya),
    });
}
function L(e) {
    switch (e) {
        case C.pNK.INTEGRATIONS:
            return R.intl.string(R.t.k7LGdh);
        case C.pNK.ROLE_SUBSCRIPTIONS:
            return R.intl.string(R.t.bRqiqa);
        case C.pNK.ONBOARDING:
            return R.intl.string(R.t.qZpU3S);
        default:
            return R.intl.string(R.t.MTIXhi);
    }
}
function j(e) {
    return e === C.pNK.ROLE_SUBSCRIPTIONS ? R.intl.string(R.t.hZUCzd) : R.intl.string(R.t["/djIh7"]);
}
function M() {
    let e = i.useRef(null),
        t = (0, s.e7)([b.Z], () => b.Z.getGuildId()),
        n = (0, s.e7)([E.Z], () => E.Z.getChannelId(t)),
        {
            viewingRoles: a,
            backNavigationSection: o,
            isFullServerPreview: u,
            isServerShopPreview: v,
        } = (0, s.cj)([I.Z], () => ({
            viewingRoles: null != t ? I.Z.getViewingRoles(t) : null,
            backNavigationSection: I.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && I.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && I.Z.isViewingServerShop(t),
        }));
    if (null == a || null == t) return null;
    let M = L(o),
        k = j(o),
        U = n === A.oC.GUILD_ONBOARDING,
        G = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (I.Z.isFullServerPreview(t) && (0, g.uL)(C.Z5c.CHANNEL(t)),
                p.ZP.shouldShowOnboarding(t) && (f.Z.finishOnboarding(t), (0, _.EI)(t)),
                (0, S.mL)(t),
                n && h.Z.open(t, o),
                o === C.pNK.ROLE_SUBSCRIPTIONS && (0, m.GN)(t));
        };
    return (0, r.jsxs)(d.qXd, {
        color: d.DM8.BRAND,
        className: D.notice,
        children: [
            (0, r.jsxs)(w, {
                onClick: () => G({ backToSettings: !0 }),
                className: D.backButton,
                children: [
                    (0, r.jsx)(y.Z, {
                        width: 16,
                        height: 16,
                        direction: y.Z.Directions.LEFT,
                        className: D.backArrow,
                    }),
                    M,
                ],
            }),
            U && u
                ? (0, r.jsx)("div", {
                      className: D.noticeContents,
                      children: (0, r.jsx)("div", {
                          className: D.noticeText,
                          children: R.intl.string(R.t.PxbiAf),
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: D.noticeContents,
                      children: [
                          (0, r.jsx)("div", {
                              className: D.noticeText,
                              children: u
                                  ? R.intl.formatToPlainString(R.t["0PHahI"], { numRoles: Object.keys(a).length })
                                  : R.intl.formatToPlainString(R.t.vMlK8t, { numRoles: Object.keys(a).length }),
                          }),
                          (0, r.jsx)(d.yRy, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, r.jsx)(T.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(w, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          k,
                                          (0, r.jsx)(O.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: O.Z.Directions.DOWN,
                                              className: D.selectCaret,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          u &&
                              (0, r.jsx)(c.u, {
                                  asContainer: !0,
                                  text: R.intl.string(R.t.mW4DUE),
                                  children: (0, r.jsx)(d.Mgn, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          v &&
                              (0, r.jsx)(c.u, {
                                  asContainer: !0,
                                  text: R.intl.formatToPlainString(R.t.eummvd, {
                                      maxTiers: P.fF,
                                      maxProducts: N.dD,
                                  }),
                                  children: (0, r.jsx)(d.Mgn, {
                                      size: "xs",
                                      color: l.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            u || o === C.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(x, { onClick: () => G({ backToSettings: !1 }) }),
        ],
    });
}
function k(e) {
    let { guildId: t } = e;
    return (0, s.e7)([I.Z], () => I.Z.isViewingRoles(t))
        ? (0, r.jsx)("div", {
              className: o()(D.settingsWrapper, {
                  [D.windows]: (0, v.isWindows)(),
                  [D.osx]: (0, v.isMac)(),
              }),
              children: (0, r.jsx)(M, {}),
          })
        : null;
}
