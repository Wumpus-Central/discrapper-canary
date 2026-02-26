n.d(t, { A: () => L });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(158954),
    o = n(827734),
    u = n(475815),
    c = n(341915),
    d = n(245853),
    m = n(579473),
    p = n(590202),
    f = n(971649),
    E = n(651892),
    h = n(73473),
    v = n(717415),
    x = n(98197),
    g = n(583235),
    S = n(654487),
    A = n(985018),
    C = n(221190);
function b(e) {
    let { quest: t, sourceQuestContent: n } = e,
        i = l.useMemo(() => (0, m.tW)(t, m.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
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
                      className: C.xc,
                  }),
          });
}
function _(e) {
    let { title: t, subtitle: n, icon: i, onClick: o, className: u } = e,
        [c, d] = l.useState(!1),
        m = () => {
            d(!0);
        },
        p = () => {
            d(!1);
        };
    return (0, r.jsx)(s.DUT, {
        className: a()(C.Mr, C.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: o,
        children: (0, r.jsxs)("div", {
            className: C.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: C.XU,
                    children: [
                        (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: C.Zr, children: t }),
                        (0, r.jsx)(s.DZT, { variant: "heading-sm/normal", className: C.Hk, children: n }),
                    ],
                }),
                (0, r.jsx)(x.A, { color: "#747783" }),
                (0, r.jsx)(i, { size: "md", color: c ? "#FFFFFF" : "#B5BAC1", className: C.J5 }),
            ],
        }),
    });
}
function y(e) {
    let { asset: t } = e;
    return null == t ? null : (0, r.jsx)("img", { src: t.url, alt: "", className: C.bU });
}
function T(e) {
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
                      className: a()(C.C, { [C.TW]: "portrait" === i }),
                  }),
          });
}
function N(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: i, orientation: o } = e;
    return (0, r.jsxs)("div", {
        className: a()(C.pP, { [C.iC]: "portrait" === o }),
        children: [(0, r.jsx)(D, { title: n, subtitle: l }), (0, r.jsx)(I, { label: t, icon: s.KS6, onClick: i })],
    });
}
function D(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: C.PH,
        children: [
            (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: C.m5, children: t }),
            (0, r.jsx)(s.DZT, { variant: "heading-sm/normal", className: C.s$, children: n }),
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
    return (0, r.jsxs)(s.DUT, {
        className: a()(C.uU, C.iM, u),
        onMouseEnter: m,
        onMouseLeave: p,
        onFocus: m,
        onBlur: p,
        onClick: i,
        children: [
            (0, r.jsx)(s.DZT, { variant: "heading-md/semibold", className: C.ce, children: t }),
            (0, r.jsx)(n, { size: "md", color: c ? o.A.colors.WHITE : "#B5BAC1", className: C.J5 }),
        ],
    });
}
function L(e) {
    let { videoRef: t, onTrackQuestContentClick: n, orientation: i } = e,
        {
            onClose: o,
            sourceQuestContent: h,
            quest: x,
            isFullscreenEnabled: D,
        } = l.useContext(v.VideoQuestModalContext),
        I = (0, f.go)(),
        L = (0, g.H)({ quest: x, onClose: o, sourceQuestContent: h, impressionId: I }),
        j = l.useCallback(
            (e) => {
                if (D) {
                    let e = (0, u.qf)(t.current?.parentNode, t.current);
                    null != e && (0, u.sP)(e);
                }
                n(e, p.Cy.LEARN_MORE), L(e, p.Cy.OPEN_GAME_LINK);
            },
            [D, t, L, n],
        ),
        { title: M, subtitle: w } = {
            title: (0, E.wr)(x),
            subtitle: x.config.ctaConfig.subtitle ?? A.intl.string(A.t.mxaHfx),
        },
        { enabled: k } = d.uK.useConfig({ location: S.rE.VIDEO_MODAL }),
        R = l.useMemo(() => (0, m.tW)(x, m.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [x]);
    return k
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(y, { asset: R }),
                  (0, r.jsx)("div", { className: C.MM, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsxs)("div", {
                      className: a()(C.Pb, { [C.II]: "portrait" === i }),
                      children: [
                          (0, r.jsx)(T, { quest: x, asset: R, sourceQuestContent: h, orientation: i }),
                          (0, r.jsx)(N, {
                              title: M,
                              subtitle: w,
                              ctaBtnLabel: x.config.ctaConfig.buttonLabel,
                              onCTAClick: () => j(c.uF.VIDEO_MODAL),
                              orientation: i,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(b, { quest: x, sourceQuestContent: h }),
                  (0, r.jsx)("div", { className: C.MT, "data-testid": "discord-web-video-player-end-screen" }),
                  (0, r.jsx)(_, {
                      title: M,
                      subtitle: w,
                      icon: s.KS6,
                      className: C.mT,
                      onClick: () => j(c.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
