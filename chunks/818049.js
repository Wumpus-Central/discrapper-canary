"use strict";
n.d(t, { A: () => x });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(158954),
    l = n(827734),
    u = n(475815),
    c = n(341915),
    d = n(405670),
    _ = n(245853),
    f = n(579473),
    h = n(590202),
    p = n(971649),
    g = n(651892),
    E = n(73473),
    A = n(717415),
    I = n(98197),
    T = n(583235),
    y = n(654487),
    S = n(985018),
    v = n(438655);
function C(e) {
    return { title: (0, g.wr)(e), subtitle: e.config.ctaConfig.subtitle ?? S.intl.string(S.t.mxaHfx) };
}
function b(e) {
    let { quest: t, sourceQuestContent: n } = e,
        a = i.useMemo(() => (0, f.tW)(t, f.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == a
        ? null
        : (0, r.jsx)(E.R, {
              questOrQuests: t,
              questContent: c.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: a.url,
                      alt: "Video thumbnail",
                      className: v.xc,
                  }),
          });
}
function N(e) {
    let { title: t, subtitle: n, icon: a, onClick: l, className: u } = e,
        [c, d] = i.useState(!1),
        _ = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsx)(o.DUT, {
        className: s()(v.Mr, v.iM, u),
        onMouseEnter: _,
        onMouseLeave: f,
        onFocus: _,
        onBlur: f,
        onClick: l,
        children: (0, r.jsxs)("div", {
            className: v.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: v.XU,
                    children: [
                        (0, r.jsx)(o.DZT, { variant: "heading-md/semibold", className: v.Zr, children: t }),
                        (0, r.jsx)(o.DZT, { variant: "heading-sm/normal", className: v.Hk, children: n }),
                    ],
                }),
                (0, r.jsx)(I.A, { color: "#747783" }),
                (0, r.jsx)(a, { size: "md", color: c ? "#FFFFFF" : "#B5BAC1", className: v.J5 }),
            ],
        }),
    });
}
function R(e) {
    let { asset: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t.url, alt: "", className: v.bU });
}
function O(e) {
    let { quest: t, asset: n, sourceQuestContent: i, orientation: a } = e;
    return null == n
        ? null
        : (0, r.jsx)(E.R, {
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
                      className: s()(v.C, { [v.TW]: "portrait" === a }),
                  }),
          });
}
function D(e) {
    let { ctaBtnLabel: t, title: n, subtitle: i, onCTAClick: a, orientation: l } = e;
    return (0, r.jsxs)("div", {
        className: s()(v.pP, { [v.iC]: "portrait" === l }),
        children: [(0, r.jsx)(L, { title: n, subtitle: i }), (0, r.jsx)(w, { label: t, icon: o.KS6, onClick: a })],
    });
}
function L(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: v.PH,
        children: [
            (0, r.jsx)(o.DZT, { variant: "heading-md/semibold", className: v.m5, children: t }),
            (0, r.jsx)(o.DZT, { variant: "heading-sm/normal", className: v.s$, children: n }),
        ],
    });
}
function w(e) {
    let { label: t, icon: n, onClick: a, className: u } = e,
        [c, d] = i.useState(!1),
        _ = () => {
            d(!0);
        },
        f = () => {
            d(!1);
        };
    return (0, r.jsxs)(o.DUT, {
        className: s()(v.uU, v.iM, u),
        onMouseEnter: _,
        onMouseLeave: f,
        onFocus: _,
        onBlur: f,
        onClick: a,
        children: [
            (0, r.jsx)(o.DZT, { variant: "heading-md/semibold", className: v.ce, children: t }),
            (0, r.jsx)(n, { size: "md", color: c ? l.A.colors.WHITE : "#B5BAC1", className: v.J5 }),
        ],
    });
}
function x(e) {
    let {
            videoRef: t,
            onExitFullScreen: n,
            onTrackQuestVideoFullscreenChanged: a,
            onTrackQuestContentClick: l,
            orientation: g,
        } = e,
        { onClose: E, sourceQuestContent: I, quest: S } = i.useContext(A.VideoQuestModalContext),
        L = (0, d.Ay)((e) => e.fullScreenEnabled),
        w = (0, d.Ay)((e) => e.setFullScreenEnabled),
        x = (0, p.go)(),
        P = (0, T.H)({ quest: S, onClose: E, sourceQuestContent: I, impressionId: x }),
        M = i.useCallback(
            (e) => {
                if (L) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (e.removeEventListener(u.Wb, n), (0, u.sP)(e), w(!1), a(!1));
                }
                l(e, h.Cy.LEARN_MORE), P(e, h.Cy.OPEN_GAME_LINK);
            },
            [L, t, n, w, a, P, l],
        ),
        { title: k, subtitle: U } = C(S),
        { enabled: G } = _.uK.useConfig({ location: y.rE.VIDEO_MODAL }),
        F = i.useMemo(() => (0, f.tW)(S, f.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [S]);
    return G
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(R, { asset: F }),
                  (0, r.jsx)("div", { className: v.MM, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsxs)("div", {
                      className: s()(v.Pb, { [v.II]: "portrait" === g }),
                      children: [
                          (0, r.jsx)(O, { quest: S, asset: F, sourceQuestContent: I, orientation: g }),
                          (0, r.jsx)(D, {
                              title: k,
                              subtitle: U,
                              ctaBtnLabel: S.config.ctaConfig.buttonLabel,
                              onCTAClick: () => M(c.uF.VIDEO_MODAL),
                              orientation: g,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(b, { quest: S, sourceQuestContent: I }),
                  (0, r.jsx)("div", { className: v.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(N, {
                      title: k,
                      subtitle: U,
                      icon: o.KS6,
                      className: v.mT,
                      onClick: () => M(c.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
