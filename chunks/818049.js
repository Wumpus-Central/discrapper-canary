n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    l = n.n(s),
    a = n(158954),
    o = n(827734),
    u = n(475815),
    c = n(341915),
    d = n(245853),
    m = n(579473),
    p = n(590202),
    E = n(971649),
    f = n(651892),
    v = n(73473),
    h = n(717415),
    x = n(98197),
    g = n(583235),
    S = n(654487),
    C = n(985018),
    A = n(681636);
function _(e) {
    let { quest: t, sourceQuestContent: n } = e,
        s = i.useMemo(() => (0, m.tW)(t, m.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == s
        ? null
        : (0, r.jsx)(v.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: s.url,
                      alt: "Video thumbnail",
                      className: A.xc,
                  }),
          });
}
function b(e) {
    let { title: t, subtitle: n, icon: s, onClick: o, className: u } = e,
        [c, d] = i.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsx)(a.DUT, {
        className: l()(A.Mr, A.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: A.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: A.XU,
                    children: [
                        (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: A.Zr, children: t }),
                        (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: A.Hk, children: n }),
                    ],
                }),
                (0, r.jsx)(x.A, { color: "#747783" }),
                (0, r.jsx)(s, { size: "md", color: c ? "#FFFFFF" : "#B5BAC1", className: A.J5 }),
            ],
        }),
    });
}
function T(e) {
    let { asset: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t.url, alt: "", className: A.bU });
}
function y(e) {
    let { quest: t, asset: n, sourceQuestContent: i, orientation: s } = e;
    return null == n
        ? null
        : (0, r.jsx)(v.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: i,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: l()(A.C, { [A.TW]: "portrait" === s }),
                  }),
          });
}
function N(e) {
    let { ctaBtnLabel: t, title: n, subtitle: i, onCTAClick: s, orientation: o } = e;
    return (0, r.jsxs)("div", {
        className: l()(A.pP, { [A.iC]: "portrait" === o }),
        children: [(0, r.jsx)(D, { title: n, subtitle: i }), (0, r.jsx)(L, { label: t, icon: a.KS6, onClick: s })],
    });
}
function D(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: A.PH,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: A.m5, children: t }),
            (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: A.s$, children: n }),
        ],
    });
}
function L(e) {
    let { label: t, icon: n, onClick: s, className: u } = e,
        [c, d] = i.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsxs)(a.DUT, {
        className: l()(A.uU, A.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: s,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: A.ce, children: t }),
            (0, r.jsx)(n, { size: "md", color: c ? o.A.colors.WHITE : "#B5BAC1", className: A.J5 }),
        ],
    });
}
function j(e) {
    let {
            videoRef: t,
            onExitFullScreen: n,
            onTrackQuestVideoFullscreenChanged: s,
            onTrackQuestContentClick: o,
            orientation: v,
        } = e,
        {
            onClose: x,
            sourceQuestContent: D,
            quest: L,
            setIsFullscreenEnabled: j,
            isFullscreenEnabled: I,
        } = i.useContext(h.VideoQuestModalContext),
        M = (0, E.go)(),
        k = (0, g.H)({ quest: L, onClose: x, sourceQuestContent: D, impressionId: M }),
        R = i.useCallback(
            (e) => {
                if (I) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (e.removeEventListener(u.Wb, n), (0, u.sP)(e), j(!1), s(!1));
                }
                o(e, p.Cy.LEARN_MORE), k(e, p.Cy.OPEN_GAME_LINK);
            },
            [I, t, n, j, s, k, o],
        ),
        { title: w, subtitle: O } = {
            title: (0, f.wr)(L),
            subtitle: L.config.ctaConfig.subtitle ?? C.intl.string(C.t.mxaHfx),
        },
        { enabled: P } = d.uK.useConfig({ location: S.rE.VIDEO_MODAL }),
        V = i.useMemo(() => (0, m.tW)(L, m.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [L]);
    return P
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(T, { asset: V }),
                  (0, r.jsx)("div", { className: A.MM, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsxs)("div", {
                      className: l()(A.Pb, { [A.II]: "portrait" === v }),
                      children: [
                          (0, r.jsx)(y, { quest: L, asset: V, sourceQuestContent: D, orientation: v }),
                          (0, r.jsx)(N, {
                              title: w,
                              subtitle: O,
                              ctaBtnLabel: L.config.ctaConfig.buttonLabel,
                              onCTAClick: () => R(c.uF.VIDEO_MODAL),
                              orientation: v,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(_, { quest: L, sourceQuestContent: D }),
                  (0, r.jsx)("div", { className: A.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(b, {
                      title: w,
                      subtitle: O,
                      icon: a.KS6,
                      className: A.mT,
                      onClick: () => R(c.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
