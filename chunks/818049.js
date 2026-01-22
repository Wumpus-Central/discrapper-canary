n.d(t, { A: () => N }), n(896048);
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(158954),
    a = n(827734),
    c = n(475815),
    u = n(216456),
    d = n(906822),
    f = n(341915),
    m = n(405670),
    p = n(245853),
    v = n(579473),
    E = n(651892),
    g = n(73473),
    h = n(717415),
    b = n(98197),
    y = n(583235),
    O = n(654487),
    S = n(985018),
    _ = n(438655);
function C(e) {
    let { quest: t, sourceQuestContent: n } = e,
        o = l.useMemo(() => (0, v.tW)(t, v.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [t]);
    return null == o
        ? null
        : (0, r.jsx)(g.R, {
              questOrQuests: t,
              questContent: f.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: n,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: o.url,
                      alt: "Video thumbnail",
                      className: _.xc,
                  }),
          });
}
function x(e) {
    let { title: t, subtitle: n, icon: o, onClick: a, className: c } = e,
        [u, d] = l.useState(!1),
        f = () => {
            d(!0);
        },
        m = () => {
            d(!1);
        };
    return (0, r.jsx)(s.DUT, {
        className: i()(_.Mr, _.iM, c),
        onMouseEnter: f,
        onMouseLeave: m,
        onFocus: f,
        onBlur: m,
        onClick: a,
        children: (0, r.jsxs)("div", {
            className: _.ee,
            children: [
                (0, r.jsxs)("div", {
                    className: _.XU,
                    children: [
                        (0, r.jsx)(s.DZT, {
                            variant: "heading-md/semibold",
                            className: _.Zr,
                            children: t,
                        }),
                        (0, r.jsx)(s.DZT, {
                            variant: "heading-sm/normal",
                            className: _.Hk,
                            children: n,
                        }),
                    ],
                }),
                (0, r.jsx)(b.A, { color: "#747783" }),
                (0, r.jsx)(o, {
                    size: "md",
                    color: u ? "#FFFFFF" : "#B5BAC1",
                    className: _.J5,
                }),
            ],
        }),
    });
}
function A(e) {
    let { asset: t } = e;
    return null == t
        ? null
        : (0, r.jsx)("img", {
              src: t.url,
              alt: "",
              className: _.bU,
          });
}
function j(e) {
    let { quest: t, asset: n, sourceQuestContent: l, orientation: o } = e;
    return null == n
        ? null
        : (0, r.jsx)(g.R, {
              questOrQuests: t,
              questContent: f.uF.VIDEO_MODAL_END_CARD,
              sourceQuestContent: l,
              children: (e) =>
                  (0, r.jsx)("img", {
                      ref: (t) => {
                          e.current = t;
                      },
                      src: n.url,
                      alt: "Video thumbnail",
                      className: i()(_.C, { [_.TW]: "portrait" === o }),
                  }),
          });
}
function T(e) {
    let { ctaBtnLabel: t, title: n, subtitle: l, onCTAClick: o, orientation: a } = e;
    return (0, r.jsxs)("div", {
        className: i()(_.pP, { [_.iC]: "portrait" === a }),
        children: [
            (0, r.jsx)(D, {
                title: n,
                subtitle: l,
            }),
            (0, r.jsx)(w, {
                label: t,
                icon: s.KS6,
                onClick: o,
            }),
        ],
    });
}
function D(e) {
    let { title: t, subtitle: n } = e;
    return (0, r.jsxs)("div", {
        className: _.PH,
        children: [
            (0, r.jsx)(s.DZT, {
                variant: "heading-md/semibold",
                className: _.m5,
                children: t,
            }),
            (0, r.jsx)(s.DZT, {
                variant: "heading-sm/normal",
                className: _.s$,
                children: n,
            }),
        ],
    });
}
function w(e) {
    let { label: t, icon: n, onClick: o, className: c } = e,
        [u, d] = l.useState(!1),
        f = () => {
            d(!0);
        },
        m = () => {
            d(!1);
        };
    return (0, r.jsxs)(s.DUT, {
        className: i()(_.uU, _.iM, c),
        onMouseEnter: f,
        onMouseLeave: m,
        onFocus: f,
        onBlur: m,
        onClick: o,
        children: [
            (0, r.jsx)(s.DZT, {
                variant: "heading-md/semibold",
                className: _.ce,
                children: t,
            }),
            (0, r.jsx)(n, {
                size: "md",
                color: u ? a.A.colors.WHITE : "#B5BAC1",
                className: _.J5,
            }),
        ],
    });
}
function N(e) {
    var t;
    let {
            videoRef: n,
            onExitFullScreen: o,
            onTrackQuestVideoFullscreenChanged: a,
            onTrackQuestContentClick: g,
            orientation: b,
        } = e,
        { onClose: D, sourceQuestContent: w, quest: N } = l.useContext(h.VideoQuestModalContext),
        P = (0, m.Ay)((e) => e.fullScreenEnabled),
        I = (0, m.Ay)((e) => e.setFullScreenEnabled),
        L = (0, d.go)(),
        R = (0, y.H)({
            quest: N,
            onClose: D,
            sourceQuestContent: w,
            impressionId: L,
        }),
        k = l.useCallback(
            (e) => {
                if (P) {
                    var t;
                    let e = (0, c.qf)(null == (t = n.current) ? void 0 : t.parentNode, n.current);
                    null != e && (e.removeEventListener(c.Wb, o), (0, c.sP)(e), I(!1), a(!1));
                }
                g(e, u.Cy.LEARN_MORE), R(e, u.Cy.OPEN_GAME_LINK);
            },
            [P, n, o, I, a, R, g],
        ),
        { title: M, subtitle: V } = {
            title: (0, E.wr)(N),
            subtitle: null != (t = N.config.ctaConfig.subtitle) ? t : S.intl.string(S.t.mxaHfx),
        },
        { enabled: Q } = p.uK.useConfig({ location: O.rE.VIDEO_MODAL }),
        U = l.useMemo(() => (0, v.tW)(N, v.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1), [N]);
    return Q
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(A, { asset: U }),
                  (0, r.jsx)("div", { className: _.MM }),
                  (0, r.jsxs)("div", {
                      className: i()(_.Pb, { [_.II]: "portrait" === b }),
                      children: [
                          (0, r.jsx)(j, {
                              quest: N,
                              asset: U,
                              sourceQuestContent: w,
                              orientation: b,
                          }),
                          (0, r.jsx)(T, {
                              title: M,
                              subtitle: V,
                              ctaBtnLabel: N.config.ctaConfig.buttonLabel,
                              onCTAClick: () => k(f.uF.VIDEO_MODAL),
                              orientation: b,
                          }),
                      ],
                  }),
              ],
          })
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(C, {
                      quest: N,
                      sourceQuestContent: w,
                  }),
                  (0, r.jsx)("div", { className: _.MT }),
                  (0, r.jsx)(x, {
                      title: M,
                      subtitle: V,
                      icon: s.KS6,
                      className: _.mT,
                      onClick: () => k(f.uF.VIDEO_MODAL),
                  }),
              ],
          });
}
