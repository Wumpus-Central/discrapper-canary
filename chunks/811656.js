n.d(t, { K: () => g, A: () => S });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(17928),
    o = n(970002),
    d = n(228366),
    c = n(775602),
    u = n(607470),
    _ = n(174459),
    E = n(625494);
n(323874), n(14289), n(35956);
var A = n(671325),
    h = n(636537),
    I = n(799226),
    f = n(676279),
    p = n(652215);
let T = function (e) {
    (0, r.useEffect)(() => {
        e && _.default.track(p.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
    }, [e]);
    let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: i,
        } = (function (e) {
            let t = (0, f.TM)(),
                [n, i] = (0, r.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
                [a, s] = (0, r.useState)(!1),
                [l, o] = (0, r.useState)(!1),
                [d, c] = (0, r.useState)(!1),
                u = (0, r.useRef)(!0);
            (0, r.useEffect)(
                () => (
                    (u.current = !0),
                    () => {
                        u.current = !1;
                    }
                ),
                [],
            );
            let E = (0, r.useCallback)(
                    () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                A = (0, r.useCallback)(async () => {
                    if (!E() && !d) {
                        c(!0), o(!1), s(!1);
                        try {
                            let e = Date.now(),
                                [n, r, a] = await Promise.all([
                                    h.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    h.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    h.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/7c384bc29166872d908b60c5faec0d00d9bd960267a8943331c456018ede5e7d.mov"
                                            : "https://cdn.discordapp.com/assets/content/54bef6c79e1a3e1c2ec8f0d4a208643a7e203dc4c94e3463e6c6b38f6f4bdb23.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                ]);
                            u.current &&
                                (i({
                                    modalGlowEntry: window.URL.createObjectURL(n.body),
                                    modalGlowExit: window.URL.createObjectURL(r.body),
                                    modalGlowIdle: window.URL.createObjectURL(a.body),
                                }),
                                s(!0),
                                _.default.track(p.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                    load_duration_ms: Date.now() - e,
                                }));
                        } catch (e) {
                            u.current && o(!0);
                        } finally {
                            u.current && c(!1);
                        }
                    }
                }, [E, d, t]);
            return (
                (0, r.useEffect)(() => {
                    e && A();
                }, [e, A]),
                (0, r.useEffect)(
                    () => () => {
                        null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                            null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                            null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                    },
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                { mediaUrls: n, isSuccess: a, isFailure: l, isLoading: d }
            );
        })(e),
        { status: a } = (0, I.CE)(e ? A.A : null);
    return { mediaUrls: t, isSuccess: n && a === I.BW.Loaded, isLoading: i || a === I.BW.Loading };
};
var m = n(794899);
let g = 1e3,
    S = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: a, shouldPrefetchWowMoment: A } = e,
            h = (0, l.bG)([c.Ay], () => c.Ay.useReducedMotion),
            [I, f] = (0, r.useState)("entry"),
            g = (0, r.useRef)(null),
            S = (0, r.useRef)(null),
            N = (0, r.useCallback)(() => {
                "entry" === I && (f("idle"), null != g.current && g.current?.play());
            }, [I]),
            C = (0, r.useCallback)(() => {
                "exit" !== I && (f("exit"), null != S.current && S.current?.play());
            }, [I]),
            [O, R] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            A && R(!0);
        }, [A]);
        let { mediaUrls: L, isSuccess: y } = T(!h && a && O),
            D = (0, r.useRef)(null),
            [v, b] = (0, r.useState)(!1),
            [M, P] = (0, r.useState)(!1),
            [U, w] = (0, r.useState)("none"),
            [G, x] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            let e;
            a &&
                n &&
                !G &&
                "none" === U &&
                (h || !y
                    ? (w("static"),
                      h ||
                          (x(!0),
                          _.default.track(p.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (w("animated"), P(!0), (e = !0)),
                d.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !0,
                    isAnimated: e,
                }),
                _.default.track(p.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                    wow_moment_type: e ? "animated" : "static",
                }));
        }, [h, a, n, y, G, U]),
        (0, r.useEffect)(() => {
            function e() {
                b(!0), C();
            }
            return (
                E._.subscribe(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    E._.unsubscribe(p.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [C]),
        (0, r.useEffect)(
            () => () => {
                d.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                    isAnimated: !1,
                });
            },
            [],
        ),
        "animated" === U)
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsxs)("div", {
                          className: m.j,
                          children: [
                              (0, i.jsx)("div", {
                                  className: m.ws,
                                  children: (0, i.jsx)(u.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: N,
                                      className: s()(m.Ki, "entry" === I ? m.RK : m.R),
                                      children: (0, i.jsx)("source", { src: L.modalGlowEntry }),
                                  }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: g,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: s()(m.Ki, "idle" === I ? m.RK : m.R),
                                  children: (0, i.jsx)("source", { src: L.modalGlowIdle }),
                              }),
                              (0, i.jsx)(u.A, {
                                  ref: S,
                                  playsInline: !0,
                                  muted: !0,
                                  className: s()(m.Ki, "exit" === I ? m.RK : m.R),
                                  children: (0, i.jsx)("source", { src: L.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: m.Sh,
                          children: (0, i.jsx)(o.e, {
                              fit: "layout",
                              ref: D,
                              dataBinding: { ExitTrigger: v, EntryTrigger: M },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, i.jsx)("div", { className: "exit" === I ? m.aO : m.ws, children: t }),
                  ],
              })
            : "static" === U
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        !v &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/ada94a00ba3648b0d01f5bbf870b152b02ac6eb1bd1d245d8b46a54527416853.png",
                                        alt: "",
                                        className: m.Uw,
                                    }),
                                    (0, i.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/096964379958760a2615df5128a9022ac6de873c8f7a6af0beadb1c958ce55ea.png",
                                        alt: "",
                                        className: m.Gv,
                                    }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
