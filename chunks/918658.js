n.d(t, {
    Z: () => v,
    d: () => Z,
});
var r = n(951288),
    i = n(647438),
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
    T = n(434404),
    O = n(703656),
    p = n(944486),
    N = n(914010),
    f = n(671533),
    S = n(259580),
    m = n(358085),
    R = n(962086),
    A = n(160404),
    g = n(889695),
    P = n(981631),
    C = n(176505),
    D = n(302463),
    y = n(293810),
    h = n(388032),
    b = n(829675);
function U(e) {
    let { className: t, onClick: n, children: i, buttonRef: l } = e;
    return (0, r.jsx)(s.zx, {
        buttonRef: l,
        className: a()(b.button, t),
        innerClassName: b.buttonInner,
        look: s.zx.Looks.OUTLINED,
        color: s.zx.Colors.WHITE,
        size: s.zx.Sizes.NONE,
        onClick: n,
        children: i,
    });
}
function M(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(U, {
        onClick: t,
        children: h.intl.string(h.t.R9GHyc),
    });
}
function v() {
    let e = i.useRef(null),
        t = (0, o.e7)([N.Z], () => N.Z.getGuildId()),
        n = (0, o.e7)([p.Z], () => p.Z.getChannelId(t)),
        {
            viewingRoles: l,
            backNavigationSection: a,
            isFullServerPreview: s,
            isServerShopPreview: m,
        } = (0, o.cj)([A.Z], () => ({
            viewingRoles: null != t ? A.Z.getViewingRoles(t) : null,
            backNavigationSection: A.Z.getBackNavigationSection(t),
            isFullServerPreview: null != t && A.Z.isFullServerPreview(t),
            isServerShopPreview: null != t && A.Z.isViewingServerShop(t),
        }));
    if (null == l || null == t) return null;
    let v = (function (e) {
            switch (e) {
                case P.pNK.INTEGRATIONS:
                    return h.intl.string(h.t.k7LGdn);
                case P.pNK.ROLE_SUBSCRIPTIONS:
                    return h.intl.string(h.t.bRqiqa);
                case P.pNK.ONBOARDING:
                    return h.intl.string(h.t.qZpU3d);
                default:
                    return h.intl.string(h.t.MTIXho);
            }
        })(a),
        Z = a === P.pNK.ROLE_SUBSCRIPTIONS ? h.intl.string(h.t.hZUCzc) : h.intl.string(h.t["/djIh4"]),
        L = n === C.oC.GUILD_ONBOARDING,
        k = (e) => {
            let { backToSettings: n } = e;
            null != t &&
                (A.Z.isFullServerPreview(t) && (0, O.uL)(P.Z5c.CHANNEL(t)),
                _.ZP.shouldShowOnboarding(t) && (d.Z.finishOnboarding(t), (0, E.EI)(t)),
                (0, R.mL)(t),
                n && T.Z.open(t, a),
                a === P.pNK.ROLE_SUBSCRIPTIONS && (0, I.GN)(t));
        };
    return (0, r.jsxs)(u.qXd, {
        color: u.DM8.BRAND,
        className: b.notice,
        children: [
            (0, r.jsxs)(U, {
                onClick: () => k({ backToSettings: !0 }),
                className: b.backButton,
                children: [
                    (0, r.jsx)(f.Z, {
                        width: 16,
                        height: 16,
                        direction: f.Z.Directions.LEFT,
                        className: b.backArrow,
                    }),
                    v,
                ],
            }),
            L && s
                ? (0, r.jsx)("div", {
                      className: b.noticeContents,
                      children: (0, r.jsx)("div", {
                          className: b.noticeText,
                          children: h.intl.string(h.t.PxbiAQ),
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: b.noticeContents,
                      children: [
                          (0, r.jsx)("div", {
                              className: b.noticeText,
                              children: s
                                  ? h.intl.formatToPlainString(h.t["0PHahI"], { numRoles: Object.keys(l).length })
                                  : h.intl.formatToPlainString(h.t.vMlK8v, { numRoles: Object.keys(l).length }),
                          }),
                          (0, r.jsx)(u.yRy, {
                              targetElementRef: e,
                              position: "bottom",
                              renderPopout: () => (0, r.jsx)(g.Z, { guildId: t }),
                              children: (t) => {
                                  let { onClick: n } = t;
                                  return (0, r.jsxs)(U, {
                                      onClick: n,
                                      buttonRef: e,
                                      children: [
                                          Z,
                                          (0, r.jsx)(S.Z, {
                                              width: 16,
                                              height: 16,
                                              direction: S.Z.Directions.DOWN,
                                              className: b.selectCaret,
                                          }),
                                      ],
                                  });
                              },
                          }),
                          s &&
                              (0, r.jsx)(u.DY3, {
                                  className: b.previewWarning,
                                  text: h.intl.string(h.t.mW4DUF),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: "xs",
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                          m &&
                              (0, r.jsx)(u.DY3, {
                                  className: b.previewWarning,
                                  text: h.intl.formatToPlainString(h.t.eummvb, {
                                      maxTiers: y.fF,
                                      maxProducts: D.dD,
                                  }),
                                  children: (0, r.jsx)(u.Mgn, {
                                      size: "xs",
                                      color: c.Z.unsafe_rawColors.YELLOW_300.css,
                                  }),
                              }),
                      ],
                  }),
            s || a === P.pNK.ROLE_SUBSCRIPTIONS ? null : (0, r.jsx)(M, { onClick: () => k({ backToSettings: !1 }) }),
        ],
    });
}
function Z(e) {
    let { guildId: t } = e;
    return (0, o.e7)([A.Z], () => A.Z.isViewingRoles(t))
        ? (0, r.jsx)("div", {
              className: a()(b.settingsWrapper, {
                  [b.windows]: (0, m.isWindows)(),
                  [b.osx]: (0, m.isMac)(),
              }),
              children: (0, r.jsx)(v, {}),
          })
        : null;
}
