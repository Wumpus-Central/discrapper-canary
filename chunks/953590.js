"use strict";
n.d(t, { A: () => S, B: () => v });
var a = n(627968),
    l = n(64700),
    r = n(310784),
    s = n.n(r),
    i = n(503698),
    o = n.n(i),
    d = n(615300),
    c = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    b = n(848752),
    p = n(452282),
    g = n(619517),
    f = n(652176),
    C = n(203982),
    x = n(995393),
    A = n(652215),
    I = n(863876);
let v = 747,
    j = (e) => (0, f.$o)({ ...e, className: I.tN, mediaPlayerClassName: I.yf }),
    k = (e) => (0, a.jsx)(g.Ay, { ...e });
function y(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, a] = (0, _.rh)(t, "#000000"),
        r = l.useMemo(() => {
            let e = s()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [n]);
    return null != t && "#000000" !== n ? r : void 0;
}
function N(e) {
    let { item: t, onPlay: n, onEnded: l, onClick: r, playable: s, isMuted: i } = e,
        o = y(t),
        d = (0, a.jsx)(
            m.rr,
            {
                href: null,
                thumbnail: { url: t.videoThumbnailSrc, width: v, height: 560 },
                video: { url: t.src, proxyURL: t.src, width: v, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: v,
                onPlay: n,
                onEnded: l,
                playable: s,
                className: I.Ki,
                volume: 1,
                autoMute: i,
                autoPlay: s,
                renderVideoComponent: j,
                renderImageComponent: k,
                renderLinkComponent: f.bU,
            },
            i ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return s
        ? (0, a.jsx)("div", { className: I.AU, style: u, children: d })
        : (0, a.jsx)(c.DUT, { className: I.AU, onClick: r, style: u, children: d });
}
function E(e) {
    let { item: t, setHasInteracted: n, onSetItem: l, isCurrentItem: r, itemIndex: s } = e,
        i = { background: y(t) };
    return r
        ? (0, a.jsx)(c.DUT, {
              onClick: () => n(!0),
              className: I.AU,
              style: i,
              children: (0, a.jsx)("img", { src: t.src, alt: "", className: I.NP }),
          })
        : (0, a.jsx)(c.DUT, {
              onClick: () => l(s),
              className: I.AU,
              style: i,
              children: (0, a.jsx)("img", { alt: "", className: I.tv, src: t.src, draggable: !1 }),
          });
}
let S = (0, u.A)((e) => {
    let {
            items: t,
            className: n,
            paused: r = !1,
            autoplayInterval: s = 8e3,
            onItemChange: i,
            isMuted: c = !0,
            onTrackClick: u,
        } = e,
        _ = (0, l.useRef)(0),
        [m, g] = (0, l.useState)(0),
        [f, j] = (0, l.useState)(0),
        k = (0, l.useRef)(0),
        y = (0, l.useRef)(t.length),
        [S, T] = (0, l.useState)(!0),
        [P, R] = (0, l.useState)(!1),
        [U, w] = (0, l.useState)(!1),
        [L, O] = (0, l.useState)(!1),
        [D, B] = (0, l.useState)(!1),
        M = (0, l.useCallback)(
            (e, n) => {
                let a = t[e]?.backgroundSrc,
                    l = n.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: d.A.Extrapolate.CLAMP });
                return {
                    opacity: n.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: d.A.Extrapolate.CLAMP,
                    }),
                    filter: d.A.template`grayscale(${l})`,
                    backgroundImage: null != a ? `url(${a})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        F = (0, l.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            R(!1), w(t);
            let n = y.current,
                a = (0, p.U3)(k.current, n),
                l = (0, p.U3)(e, n);
            (k.current = l),
                j(l),
                _.current++,
                g(_.current),
                T(1 === Math.abs(l - a) || (l === n - 1 && 0 === a) || (0 === l && a === n - 1));
        }, []),
        H = (0, l.useCallback)(() => {
            F(k.current + 1, !1);
        }, [F]),
        G = (0, l.useCallback)(() => {
            u?.(x.Jq.CAROUSEL_NEXT), F(k.current + 1);
        }, [F, u]),
        V = (0, l.useCallback)(() => {
            u?.(x.Jq.CAROUSEL_PREV), F(k.current - 1);
        }, [F, u]),
        X = (0, l.useCallback)((e) => {
            R(!0), w(!e);
        }, []),
        Y = (0, l.useCallback)(() => {
            U || H();
        }, [U, H]),
        W = (0, l.useCallback)((e) => {
            let t = k.current;
            e < t ? O(!0) : e > t && B(!0);
        }, []),
        $ = (0, l.useCallback)(() => {
            O(!1), B(!1);
        }, []),
        q = (0, l.useCallback)(
            (e, t, n) =>
                (0, a.jsx)(E, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: n,
                    onSetItem: (e) => {
                        u?.(x.Jq.CAROUSEL_ITEM), F(e);
                    },
                    setHasInteracted: w,
                }),
            [F, u],
        ),
        z = (0, l.useCallback)(
            (e, n, l) => {
                let r = n === (0, p.U3)(f, t.length);
                return (0, a.jsx)(d.A.div, {
                    className: o()(I.AS, { [I.Xt]: r }),
                    style: null != l ? M(n, l) : null,
                    onMouseEnter: r ? null : () => W(n),
                    onMouseLeave: r ? null : $,
                    children:
                        "video" === e.type
                            ? (0, a.jsx)(
                                  N,
                                  {
                                      item: e,
                                      onPlay: X,
                                      onEnded: Y,
                                      playable: r,
                                      isMuted: c,
                                      onClick: () => {
                                          u?.(x.Jq.CAROUSEL_ITEM), F(n);
                                      },
                                  },
                                  m,
                              )
                            : q(e, n, r),
                });
            },
            [f, t.length, M, W, $, X, Y, F, q, c, u, m],
        ),
        J = (0, l.useCallback)(() => {
            let e = (0, a.jsx)(p.Ay, {
                className: I.Dk,
                items: t,
                itemSize: { width: v, margin: 0 },
                renderItem: z,
                currentIndex: f,
                animate: S,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: I.HY,
                      children: [
                          e,
                          (0, a.jsx)(b.Q8, { onClick: V, className: o()(I.UE, { [I.h_]: L }) }),
                          (0, a.jsx)(b.Oj, { onClick: G, className: o()(I.UE, { [I.h_]: D }) }),
                      ],
                  });
        }, [t, z, f, S, V, G, L, D]),
        Q = (0, l.useCallback)(
            (e, t) => {
                let n = f === t;
                return (0, a.jsx)(
                    "div",
                    {
                        className: o()(I.Yw, n ? I.sM : I.N7),
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: I.Pr,
                            src:
                                null != e.thumbnailSrc
                                    ? e.thumbnailSrc
                                    : "image" === e.type
                                      ? e.src
                                      : "video" === e.type
                                        ? e.videoThumbnailSrc
                                        : void 0,
                            draggable: !1,
                        }),
                    },
                    `page-${t}`,
                );
            },
            [f],
        );
    (0, l.useEffect)(
        () => (
            C._.subscribe(A.jej.CAROUSEL_PREV, V),
            C._.subscribe(A.jej.CAROUSEL_NEXT, G),
            () => {
                C._.unsubscribe(A.jej.CAROUSEL_PREV, V), C._.unsubscribe(A.jej.CAROUSEL_NEXT, G);
            }
        ),
        [V, G],
    ),
        (0, l.useEffect)(() => {
            y.current = t.length;
        }, [t]),
        (0, l.useEffect)(() => {
            i?.(t[f], f);
        }, [f, t, i]);
    let K = (0, l.useCallback)(
        (e) => {
            u?.(x.Jq.CAROUSEL_ITEM), F(e);
        },
        [F, u],
    );
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: s,
        className: n,
        disable: P || U || r,
        children: [
            J(),
            (0, a.jsx)("div", {
                className: I.X$,
                children: (0, a.jsx)(b.Ay, {
                    renderItem: Q,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: f,
                    onSetItem: K,
                    paginationContainerClass: I.XG,
                    align: b.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
