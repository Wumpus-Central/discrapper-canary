n.d(t, { A: () => R });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(158954),
    o = n(827734),
    u = n(475815),
    c = n(341915),
    d = n(405670),
    m = n(245853),
    E = n(579473),
    f = n(590202),
    p = n(971649),
    v = n(651892),
    h = n(73473),
    _ = n(717415),
    C = n(98197),
    g = n(583235),
    S = n(654487),
    A = n(985018),
    x = n(438655);
function T(e) {
    let { quest: t, sourceQuestContent: n } = e,
        i = s.useMemo(() => (0, E.tW)(t, E.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == i
        ? null
        : (0, r.jsx)(h.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: i.url,
                      alt: "Video thumbnail",
                      className: x.xc,
                  }),
          });
}
function b(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: u } = e,
        [c, d] = s.useState(!1),
        m = () => {
            d(!0);
        },
        E = () => {
            d(!1);
        };
    return (0, r.jsx)(a.DUT, {
        className: l()(x.Mr, x.iM, u),
        onMouseEnter: m,
        onMouseLeave: E,
        onFocus: m,
        onBlur: E,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: x.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: x.XU,
                    children: [
                        (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: x.Zr, children: t }),
                        (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: x.Hk, children: n }),
                    ],
                }),
                (0, r.jsx)(C.A, { color: "#747783" }),
                (0, r.jsx)(i, { size: "md", color: c ? "#FFFFFF" : "#B5BAC1", className: x.J5 }),
            ],
        }),
    });
}
function D(e) {
    let { asset: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t.url, alt: "", className: x.bU });
}
function N(e) {
    let { quest: t, asset: n, sourceQuestContent: s, orientation: i } = e;
    return null == n
        ? null
        : (0, r.jsx)(h.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: s,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: l()(x.C, { [x.TW]: "portrait" === i }),
                  }),
          });
}
function y(e) {
    let { ctaBtnLabel: t, title: n, subtitle: s, onCTAClick: i, orientation: o } = e;
    return (0, r.jsxs)("div", {
        className: l()(x.pP, { [x.iC]: "portrait" === o }),
        children: [(0, r.jsx)(I, { title: n, subtitle: s }), (0, r.jsx)(L, { label: t, icon: a.KS6, onClick: i })],
    });
}
function I(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: x.PH,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: x.m5, children: t }),
            (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: x.s$, children: n }),
        ],
    });
}
function L(e) {
    let { label: t, icon: n, onClick: i, className: u } = e,
        [c, d] = s.useState(!1),
        m = () => {
            d(!0);
        },
        E = () => {
            d(!1);
        };
    return (0, r.jsxs)(a.DUT, {
        className: l()(x.uU, x.iM, u),
        onMouseEnter: m,
        onMouseLeave: E,
        onFocus: m,
        onBlur: E,
        onClick: i,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: x.ce, children: t }),
            (0, r.jsx)(n, { size: "md", color: c ? o.A.colors.WHITE : "#B5BAC1", className: x.J5 }),
        ],
    });
}
function R(e) {
    let {
            videoRef: t,
            onExitFullScreen: n,
            onTrackQuestVideoFullscreenChanged: i,
            onTrackQuestContentClick: o,
            orientation: h,
        } = e,
        { onClose: C, sourceQuestContent: I, quest: L } = s.useContext(_.VideoQuestModalContext),
        R = (0, d.Ay)((e) => e.fullScreenEnabled),
        M = (0, d.Ay)((e) => e.setFullScreenEnabled),
        j = (0, p.go)(),
        O = (0, g.H)({ quest: L, onClose: C, sourceQuestContent: I, impressionId: j }),
        k = s.useCallback(
            (e) => {
                if (R) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (e.removeEventListener(u.Wb, n), (0, u.sP)(e), M(!1), i(!1));
                }
                o(e, f.Cy.LEARN_MORE), O(e, f.Cy.OPEN_GAME_LINK);
            },
            [R, t, n, M, i, O, o],
        ),
        { title: w, subtitle: V } = {
            title: (0, v.wr)(L),
            subtitle: L.config.ctaConfig.subtitle ?? A.intl.string(A.t.mxaHfx),
        },
        { enabled: P } = m.uK.useConfig({ location: S.rE.VIDEO_MODAL }),
        Q = s.useMemo(() => (0, E.tW)(L, E.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [L]);
    return P
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(D, { asset: Q }),
                  (0, r.jsx)("div", { className: x.MM, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsxs)("div", {
                      className: l()(x.Pb, { [x.II]: "portrait" === h }),
                      children: [
                          (0, r.jsx)(N, { quest: L, asset: Q, sourceQuestContent: I, orientation: h }),
                          (0, r.jsx)(y, {
                              title: w,
                              subtitle: V,
                              ctaBtnLabel: L.config.ctaConfig.buttonLabel,
                              onCTAClick: () => k(c.uF.VIDEO_MODAL),
                              orientation: h,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T, { quest: L, sourceQuestContent: I }),
                  (0, r.jsx)("div", { className: x.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(b, {
                      title: w,
                      subtitle: V,
                      icon: a.KS6,
                      className: x.mT,
                      onClick: () => k(c.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
