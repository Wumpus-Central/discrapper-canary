"use strict";
n.d(t, { K: () => T, A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(17928),
    l = n(970002),
    u = n(228366),
    c = n(775602),
    d = n(607470),
    _ = n(174459),
    h = n(625494);
n(323874), n(14289), n(35956);
var f = n(671325),
    p = n(636537),
    E = n(105596),
    m = n(676279),
    g = n(652215);
let A = function (e) {
    (0, r.useEffect)(() => {
        e && _.default.track(g.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCHING);
    }, [e]);
    let {
            mediaUrls: t,
            isSuccess: n,
            isLoading: i,
        } = (function (e) {
            let t = (0, m.TM)(),
                [n, i] = (0, r.useState)({ modalGlowEntry: void 0, modalGlowIdle: void 0, modalGlowExit: void 0 }),
                [s, a] = (0, r.useState)(!1),
                [o, l] = (0, r.useState)(!1),
                [u, c] = (0, r.useState)(!1),
                d = (0, r.useRef)(!0);
            (0, r.useEffect)(
                () => (
                    (d.current = !0),
                    () => {
                        d.current = !1;
                    }
                ),
                [],
            );
            let h = (0, r.useCallback)(
                    () => null != n.modalGlowEntry && null != n.modalGlowIdle && null != n.modalGlowExit,
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                f = (0, r.useCallback)(async () => {
                    if (!h() && !u) {
                        c(!0), l(!1), a(!1);
                        try {
                            let e = Date.now(),
                                [n, r, s] = await Promise.all([
                                    p.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/26968a6375b676097d7234b043b61312b8037f45d077c91b621ead07c6b0544b.mov"
                                            : "https://cdn.discordapp.com/assets/content/49d12c146442880c181fcc5502a49bd31d7537c2d6d5255aa2ad6b3d668553e7.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    p.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/e1b69b796171027073273beebfee03fdf466010bf89a2ff116deccaec44d7c6f.mov"
                                            : "https://cdn.discordapp.com/assets/content/ad6e3d6f3a4bb6a1debd45bc21e47b7f522685c3facc578bd2129aa4cd795f40.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                    p.Bo.get({
                                        url: t
                                            ? "https://cdn.discordapp.com/assets/content/7c384bc29166872d908b60c5faec0d00d9bd960267a8943331c456018ede5e7d.mov"
                                            : "https://cdn.discordapp.com/assets/content/54bef6c79e1a3e1c2ec8f0d4a208643a7e203dc4c94e3463e6c6b38f6f4bdb23.webm",
                                        binary: !0,
                                        rejectWithError: !0,
                                    }),
                                ]);
                            d.current &&
                                (i({
                                    modalGlowEntry: window.URL.createObjectURL(n.body),
                                    modalGlowExit: window.URL.createObjectURL(r.body),
                                    modalGlowIdle: window.URL.createObjectURL(s.body),
                                }),
                                a(!0),
                                _.default.track(g.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_PREFETCH_SUCCESS, {
                                    load_duration_ms: Date.now() - e,
                                }));
                        } catch (e) {
                            d.current && l(!0);
                        } finally {
                            d.current && c(!1);
                        }
                    }
                }, [h, u, t]);
            return (
                (0, r.useEffect)(() => {
                    e && f();
                }, [e, f]),
                (0, r.useEffect)(
                    () => () => {
                        null != n.modalGlowEntry && window.URL.revokeObjectURL(n.modalGlowEntry),
                            null != n.modalGlowIdle && window.URL.revokeObjectURL(n.modalGlowIdle),
                            null != n.modalGlowExit && window.URL.revokeObjectURL(n.modalGlowExit);
                    },
                    [n.modalGlowEntry, n.modalGlowIdle, n.modalGlowExit],
                ),
                { mediaUrls: n, isSuccess: s, isFailure: o, isLoading: u }
            );
        })(e),
        { status: s } = (0, E.CE)(e ? f.A : null);
    return { mediaUrls: t, isSuccess: n && s === E.BW.Loaded, isLoading: i || s === E.BW.Loading };
};
var I = n(669414);
let T = 1e3,
    S = (e) => {
        let { children: t, isConfirmationStep: n, isEligibleForWowMoment: s, shouldPrefetchWowMoment: f } = e,
            p = (0, o.bG)([c.Ay], () => c.Ay.useReducedMotion),
            [E, m] = (0, r.useState)("entry"),
            T = (0, r.useRef)(null),
            S = (0, r.useRef)(null),
            y = (0, r.useCallback)(() => {
                "entry" === E && (m("idle"), null != T.current && T.current?.play());
            }, [E]),
            C = (0, r.useCallback)(() => {
                "exit" !== E && (m("exit"), null != S.current && S.current?.play());
            }, [E]),
            [N, v] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            f && v(!0);
        }, [f]);
        let { mediaUrls: R, isSuccess: O } = A(!p && s && N),
            b = (0, r.useRef)(null),
            [D, L] = (0, r.useState)(!1),
            [w, M] = (0, r.useState)(!1),
            [P, x] = (0, r.useState)("none"),
            [k, U] = (0, r.useState)(!1);
        return ((0, r.useEffect)(() => {
            let e;
            s &&
                n &&
                !k &&
                "none" === P &&
                (p || !O
                    ? (x("static"),
                      p ||
                          (U(!0),
                          _.default.track(g.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_ASSETS_NOT_LOADED_ON_CONFIRMATION)),
                      (e = !1))
                    : (x("animated"), M(!0), (e = !0)),
                u.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !0,
                    isAnimated: e,
                }),
                _.default.track(g.HAw.PREMIUM_BRAND_REFRESH_WOW_MOMENT_VIEWED, {
                    wow_moment_type: e ? "animated" : "static",
                }));
        }, [p, s, n, O, k, P]),
        (0, r.useEffect)(() => {
            function e() {
                L(!0), C();
            }
            return (
                h._.subscribe(g.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e),
                () => {
                    h._.unsubscribe(g.jej.WOW_MOMENT_CONFIRMATION_MODAL_CLOSED, e);
                }
            );
        }, [C]),
        (0, r.useEffect)(
            () => () => {
                u.h.dispatch({
                    type: "WOW_MOMENT_CONFIRMATION_SET_IS_DISPLAYING_WOW_MOMENT_CONFIRMATION",
                    value: !1,
                    isAnimated: !1,
                });
            },
            [],
        ),
        "animated" === P)
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsxs)("div", {
                          className: I.j,
                          children: [
                              (0, i.jsx)("div", {
                                  className: I.ws,
                                  children: (0, i.jsx)(d.A, {
                                      playsInline: !0,
                                      muted: !0,
                                      autoPlay: !0,
                                      onEnded: y,
                                      className: a()(I.Ki, "entry" === E ? I.RK : I.R),
                                      children: (0, i.jsx)("source", { src: R.modalGlowEntry }),
                                  }),
                              }),
                              (0, i.jsx)(d.A, {
                                  ref: T,
                                  playsInline: !0,
                                  muted: !0,
                                  loop: !0,
                                  className: a()(I.Ki, "idle" === E ? I.RK : I.R),
                                  children: (0, i.jsx)("source", { src: R.modalGlowIdle }),
                              }),
                              (0, i.jsx)(d.A, {
                                  ref: S,
                                  playsInline: !0,
                                  muted: !0,
                                  className: a()(I.Ki, "exit" === E ? I.RK : I.R),
                                  children: (0, i.jsx)("source", { src: R.modalGlowExit }),
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: I.Sh,
                          children: (0, i.jsx)(l.e, {
                              fit: "layout",
                              ref: b,
                              dataBinding: { ExitTrigger: D, EntryTrigger: w },
                              listenOnDocumentBody: !0,
                          }),
                      }),
                      (0, i.jsx)("div", { className: "exit" === E ? I.aO : I.ws, children: t }),
                  ],
              })
            : "static" === P
              ? (0, i.jsxs)(i.Fragment, {
                    children: [
                        !D &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/ada94a00ba3648b0d01f5bbf870b152b02ac6eb1bd1d245d8b46a54527416853.png",
                                        alt: "",
                                        className: I.Uw,
                                    }),
                                    (0, i.jsx)("img", {
                                        src: "https://cdn.discordapp.com/assets/content/096964379958760a2615df5128a9022ac6de873c8f7a6af0beadb1c958ce55ea.png",
                                        alt: "",
                                        className: I.Gv,
                                    }),
                                ],
                            }),
                        t,
                    ],
                })
              : t;
    };
