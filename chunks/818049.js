n.d(t, { A: () => j });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(158954),
    o = n(827734),
    u = n(475815),
    c = n(341915),
    d = n(405670),
    m = n(245853),
    p = n(579473),
    E = n(590202),
    f = n(971649),
    v = n(651892),
    h = n(73473),
    g = n(717415),
    S = n(98197),
    C = n(583235),
    A = n(654487),
    x = n(985018),
    _ = n(681636);
function b(e) {
    let { quest: t, sourceQuestContent: n } = e,
        i = l.useMemo(() => (0, p.tW)(t, p.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
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
                      className: _.xc,
                  }),
          });
}
function T(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: u } = e,
        [c, d] = l.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsx)(a.DUT, {
        className: s()(_.Mr, _.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: _.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: _.XU,
                    children: [
                        (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: _.Zr, children: t }),
                        (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: _.Hk, children: n }),
                    ],
                }),
                (0, r.jsx)(S.A, { color: "#747783" }),
                (0, r.jsx)(i, { size: "md", color: c ? "#FFFFFF" : "#B5BAC1", className: _.J5 }),
            ],
        }),
    });
}
function y(e) {
    let { asset: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t.url, alt: "", className: _.bU });
}
function N(e) {
    let { quest: t, asset: n, sourceQuestContent: l, orientation: i } = e;
    return null == n
        ? null
        : (0, r.jsx)(h.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: l,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: s()(_.C, { [_.TW]: "portrait" === i }),
                  }),
          });
}
function D(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: i, orientation: o } = e;
    return (0, r.jsxs)("div", {
        className: s()(_.pP, { [_.iC]: "portrait" === o }),
        children: [(0, r.jsx)(L, { title: n, subtitle: l }), (0, r.jsx)(I, { label: t, icon: a.KS6, onClick: i })],
    });
}
function L(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: _.PH,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: _.m5, children: t }),
            (0, r.jsx)(a.DZT, { variant: "heading-sm/normal", className: _.s$, children: n }),
        ],
    });
}
function I(e) {
    let { label: t, icon: n, onClick: i, className: u } = e,
        [c, d] = l.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsxs)(a.DUT, {
        className: s()(_.uU, _.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: i,
        children: [
            (0, r.jsx)(a.DZT, { variant: "heading-md/semibold", className: _.ce, children: t }),
            (0, r.jsx)(n, { size: "md", color: c ? o.A.colors.WHITE : "#B5BAC1", className: _.J5 }),
        ],
    });
}
function j(e) {
    let {
            videoRef: t,
            onExitFullScreen: n,
            onTrackQuestVideoFullscreenChanged: i,
            onTrackQuestContentClick: o,
            orientation: h,
        } = e,
        { onClose: S, sourceQuestContent: L, quest: I } = l.useContext(g.VideoQuestModalContext),
        j = (0, d.Ay)((e) => e.fullScreenEnabled),
        R = (0, d.Ay)((e) => e.setFullScreenEnabled),
        k = (0, f.go)(),
        w = (0, C.H)({ quest: I, onClose: S, sourceQuestContent: L, impressionId: k }),
        M = l.useCallback(
            (e) => {
                if (j) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (e.removeEventListener(u.Wb, n), (0, u.sP)(e), R(!1), i(!1));
                }
                o(e, E.Cy.LEARN_MORE), w(e, E.Cy.OPEN_GAME_LINK);
            },
            [j, t, n, R, i, w, o],
        ),
        { title: O, subtitle: P } = {
            title: (0, v.wr)(I),
            subtitle: I.config.ctaConfig.subtitle ?? x.intl.string(x.t.mxaHfx),
        },
        { enabled: V } = m.uK.useConfig({ location: A.rE.VIDEO_MODAL }),
        Q = l.useMemo(() => (0, p.tW)(I, p.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [I]);
    return V
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y, { asset: Q }),
                  (0, r.jsx)("div", { className: _.MM, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsxs)("div", {
                      className: s()(_.Pb, { [_.II]: "portrait" === h }),
                      children: [
                          (0, r.jsx)(N, { quest: I, asset: Q, sourceQuestContent: L, orientation: h }),
                          (0, r.jsx)(D, {
                              title: O,
                              subtitle: P,
                              ctaBtnLabel: I.config.ctaConfig.buttonLabel,
                              onCTAClick: () => M(c.uF.VIDEO_MODAL),
                              orientation: h,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(b, { quest: I, sourceQuestContent: L }),
                  (0, r.jsx)("div", { className: _.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(T, {
                      title: O,
                      subtitle: P,
                      icon: a.KS6,
                      className: _.mT,
                      onClick: () => M(c.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
