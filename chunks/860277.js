n.d(t, { Z: () => G }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(481743),
    c = n(793030),
    u = n(442837),
    d = n(379649),
    f = n(481060),
    p = n(607070),
    _ = n(837411),
    m = n(699516),
    h = n(594174),
    g = n(768581),
    E = n(51144),
    b = n(515970),
    y = n(324060),
    O = n(5888),
    v = n(26118),
    S = n(989392),
    I = n(909397),
    T = n(198358),
    A = n(225055),
    C = n(391876),
    N = n(612776),
    P = n(860076),
    R = n(388032),
    D = n(417788),
    w = n(300494);
let x = 1000,
    L = 50,
    j = 250;
function M(e) {
    let { primaryColor: t } = e;
    return (0, r.jsxs)("div", {
        className: w.content,
        children: [
            (0, r.jsxs)("div", {
                className: D.title,
                children: [
                    (0, r.jsx)(c.iFz, {
                        size: "refresh_sm",
                        color: t,
                        colorClass: D.iconColor,
                        className: D.titleIcon,
                    }),
                    (0, r.jsx)(C.Z, {
                        variant: "eyebrow",
                        className: D.eyebrow,
                        children: R.intl.string(P.default.ZQakPR),
                    }),
                ],
            }),
            (0, r.jsx)(C.Z, {
                variant: "display-lg",
                className: w.display,
                children: R.intl.string(P.default.OzY5Ns),
            }),
            (0, r.jsx)(C.Z, {
                variant: "heading-xxl/medium",
                className: w.subtitle,
                children: R.intl.string(P.default.sEPtGY),
            }),
            (0, r.jsx)(I.o, { slide: N.yD.FRIENDS }),
        ],
    });
}
function k() {
    return (0, r.jsx)("div", {
        className: w.content,
        children: (0, r.jsx)(C.Z, {
            variant: "heading-xxl/medium",
            children: R.intl.string(P.default.d5HUsD),
        }),
    });
}
function U(e) {
    var t;
    let { primaryColor: n, sidekick: i } = e,
        { unit: a, duration: s } = (0, v.Bi)(null != (t = null == i ? void 0 : i.numVoiceMinutes) ? t : 0);
    return (0, r.jsxs)("div", {
        className: w.content,
        children: [
            (0, r.jsxs)("div", {
                className: D.title,
                children: [
                    (0, r.jsx)(c.iFz, {
                        size: "refresh_sm",
                        color: n,
                        colorClass: D.iconColor,
                        className: D.titleIcon,
                    }),
                    (0, r.jsx)(C.Z, {
                        variant: "eyebrow",
                        className: D.eyebrow,
                        children: R.intl.string(P.default.ZQakPR),
                    }),
                ],
            }),
            (0, r.jsx)(C.Z, {
                variant: "display-lg",
                className: o()(w.display, w.subtitle),
                children: R.intl.string(P.default["+uwOHt"]),
            }),
            (0, r.jsxs)("div", {
                className: w.stats,
                children: [
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(C.Z, {
                                variant: "eyebrow",
                                children: R.intl.string(P.default.wWKySP),
                            }),
                            (0, r.jsx)(C.Z, {
                                variant: "heading-xxl/normal",
                                className: D.numeric,
                                children: null == i ? void 0 : i.numMessagesSent,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)(C.Z, {
                                variant: "eyebrow",
                                children:
                                    a === d.J6.HOURS
                                        ? R.intl.format(P.default.Xu0QsX, { numHours: s })
                                        : R.intl.string(P.default.RmVTph),
                            }),
                            (0, r.jsx)(C.Z, {
                                variant: "heading-xxl/normal",
                                className: D.numeric,
                                children: s,
                            }),
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(Z, {}),
        ],
    });
}
function G(e) {
    var t, n, a;
    let { step: o, onNextStep: s, onPreviousStep: l } = e,
        { users: d = [], sidekick: _ } = (0, u.e7)([O.Z], () => O.Z.getCheckpointData()),
        m = (0, i.useContext)(y.Q),
        b = (0, f.dQu)(m.primaryColor).hex(),
        v = d[1],
        S = d[0],
        I = (0, u.e7)([h.default], () => h.default.getCurrentUser()),
        C = (0, i.useRef)(0),
        P = (0, i.useRef)(!0),
        R = (0, i.useRef)(null),
        D = null != (t = (0, E._T)(null == _ ? void 0 : _.user)) ? t : "",
        j = null != (n = (0, E._T)(v)) ? n : "",
        G = null != (a = (0, E._T)(S)) ? a : "",
        Z = 1 === d.length,
        B = (0, u.e7)([p.Z], () => p.Z.useReducedMotion);
    (0, i.useEffect)(
        () => (
            o === N.ij.FRIENDS_LEAVE &&
                (P.current
                    ? l()
                    : B
                      ? (s(), (P.current = !0))
                      : (C.current = setTimeout(() => {
                            s(), (P.current = !0);
                        }, x))),
            () => clearTimeout(C.current)
        ),
        [s, l, B, o],
    );
    let F = (0, i.useMemo)(() => {
            switch (o) {
                case N.ij.FRIENDS_INTRO:
                    return 1;
                case N.ij.FRIENDS_TRANSITION:
                    return 2;
                case N.ij.FRIENDS_BEST:
                    return 3;
                case N.ij.FRIENDS_LEAVE:
                    return B ? 3 : 4;
                default:
                    return 0;
            }
        }, [o, B]),
        V = (0, i.useCallback)((e) => (null != e ? g.ZP.getUserAvatarURL(e, !1, 64, "png") : void 0), []);
    (0, i.useEffect)(() => () => clearTimeout(C.current), []),
        (0, i.useEffect)(() => {
            o !== N.ij.FRIENDS_LEAVE && (P.current = !1);
        }, [o]);
    let H = (0, i.useCallback)(() => {
            let e = setInterval(() => {
                var t, n;
                let r = null == (t = R.current) ? void 0 : t.getProperties();
                null != R.current &&
                    (null == r ? void 0 : r.twoFriends.value) === Z &&
                    (null == r ? void 0 : r.reducedMotion.value) === B &&
                    (null == (n = R.current) || n.play(), clearInterval(e));
            }, L);
            return () => clearInterval(e);
        }, [B, Z]),
        Y = (0, i.useMemo)(
            () => (o < N.ij.FRIENDS_INTRO ? N.ij.FRIENDS_INTRO : o >= N.ij.FRIENDS_BEST ? N.ij.FRIENDS_BEST : o),
            [o],
        );
    return (0, r.jsxs)(T.Z, {
        children: [
            (0, r.jsx)(c.jxI, {
                ref: R,
                className: w.rive,
                fit: "contain",
                autoplay: !1,
                onLoad: H,
                dataBinding: {
                    AnimationState: F,
                    "Avatar01/img": V(null == _ ? void 0 : _.user),
                    "Avatar02/img": V(v),
                    "Avatar03/img": V(S),
                    "Avatar04/img": V(null == _ ? void 0 : _.user),
                    "Avatar05/img": V(I),
                    "Avatar01/Username": D,
                    "Avatar02/Username": j,
                    "Avatar03/Username": G,
                    "Avatar04/Username": D,
                    twoFriends: Z,
                    reducedMotion: B,
                },
                withReducedMotion: "play",
            }),
            (0, r.jsx)("div", {
                className: w.container,
                children: (0, r.jsxs)(A.ZP, {
                    activeSlide: Y,
                    className: w.animatedSlides,
                    slideClassName: w.animatedSlide,
                    children: [
                        (0, r.jsx)(f.Mi4, {
                            id: N.ij.FRIENDS_INTRO,
                            children: (0, r.jsx)(M, { primaryColor: b }),
                        }),
                        (0, r.jsx)(f.Mi4, {
                            id: N.ij.FRIENDS_TRANSITION,
                            children: (0, r.jsx)(k, {}),
                        }),
                        (0, r.jsx)(f.Mi4, {
                            id: N.ij.FRIENDS_BEST,
                            children: (0, r.jsx)(U, {
                                primaryColor: b,
                                sidekick: _,
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function Z() {
    var e;
    let t = (0, i.useMemo)(() => (0, N._3)(), []),
        n = (0, i.useContext)(y.Q),
        a = (0, f.dQu)(n.primaryColor).hex(),
        d = (0, i.useRef)(null),
        [p, h] = (0, i.useState)((0, s.sample)(t)),
        { sidekick: g } = (0, u.e7)([O.Z], () => O.Z.getCheckpointData()),
        E = null == g ? void 0 : g.user,
        v = (0, _.Z)(null != (e = null == E ? void 0 : E.id) ? e : "0"),
        I = (0, u.e7)([m.Z], () => m.Z.isBlocked(null == E ? void 0 : E.id)),
        T = v && !I,
        [A, C] = (0, i.useState)(!1),
        x = A || null == p || p.length < 1 || p.length > j,
        L = (0, S.T)(l.Z),
        M = A ? R.intl.string(R.t.fjcCk5) : "";
    (0, i.useEffect)(() => {
        null != d.current && (d.current.style.height = "".concat(Math.min(d.current.scrollHeight, 140), "px"));
    }, [p]);
    let k = (0, i.useCallback)(() => {
            if (A) return;
            L();
            let e = (0, s.sample)(t);
            for (; null == e || e === p; ) e = (0, s.sample)(t);
            h(e);
        }, [t, p, A, L]),
        U = (0, i.useCallback)((e) => {
            h(e.target.value);
        }, []),
        G = (0, i.useCallback)(() => {
            x ||
                (null == E ? void 0 : E.id) == null ||
                (L(), (0, b.gq)(p, null == E ? void 0 : E.id), h(void 0), C(!0));
        }, [x, L, p, null == E ? void 0 : E.id]);
    return T
        ? (0, r.jsxs)("div", {
              className: w.inputWrapper,
              children: [
                  (0, r.jsx)(f.Text, {
                      variant: "text-sm/semibold",
                      className: w.inputCTA,
                      style: { backgroundColor: a },
                      children: R.intl.string(P.default["//ZYM/"]),
                  }),
                  (0, r.jsx)("textarea", {
                      ref: d,
                      onChange: U,
                      value: null != p ? p : M,
                      className: w.input,
                      style: {
                          color: a,
                          scrollbarColor: "".concat(a, " black"),
                      },
                      maxLength: j + 1,
                      disabled: A,
                  }),
                  (0, r.jsxs)("div", {
                      className: w.actions,
                      children: [
                          (0, r.jsx)(c.P3F, {
                              onClick: k,
                              "aria-disabled": A,
                              className: o()(D.clickable, { [w.disabled]: A }),
                              children: (0, r.jsx)(c.kBK, {
                                  color: a,
                                  colorClass: D.iconColor,
                              }),
                          }),
                          (0, r.jsx)(c.P3F, {
                              onClick: G,
                              "aria-disabled": A || x,
                              className: o()(D.clickable, { [w.disabled]: A || x }),
                              children: (0, r.jsx)(c.Uuj, {
                                  color: a,
                                  colorClass: D.iconColor,
                              }),
                          }),
                      ],
                  }),
              ],
          })
        : null;
}
