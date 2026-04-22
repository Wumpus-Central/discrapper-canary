l.d(t, { A: () => S, B: () => j });
var n = l(627968),
    a = l(64700),
    i = l(310784),
    s = l.n(i),
    r = l(503698),
    o = l.n(r),
    d = l(615300),
    c = l(939249),
    u = l(456412),
    _ = l(654107),
    m = l(871751),
    h = l(133296),
    b = l(848752),
    p = l(452282),
    f = l(619517),
    x = l(652176),
    g = l(203982),
    C = l(995393),
    A = l(652215),
    v = l(55607);
let j = 747,
    I = (e) => (0, x.$o)({ ...e, className: v.tN, mediaPlayerClassName: v.yf }),
    E = (e) => (0, n.jsx)(f.Ay, { ...e });
function T(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [l, n] = (0, _.rh)(t, "#000000"),
        i = a.useMemo(() => {
            let e = s()(l).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [l]);
    return null != t && "#000000" !== l ? i : void 0;
}
function N(e) {
    let { item: t, onPlay: l, onEnded: a, onClick: i, playable: s, isMuted: r } = e,
        o = T(t),
        d = (0, n.jsx)(
            m.rr,
            {
                href: null,
                thumbnail: { url: t.videoThumbnailSrc, width: j, height: 560 },
                video: { url: t.src, proxyURL: t.src, width: j, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: j,
                onPlay: l,
                onEnded: a,
                playable: s,
                className: v.Ki,
                volume: 1,
                autoMute: r,
                autoPlay: s,
                renderVideoComponent: I,
                renderImageComponent: E,
                renderLinkComponent: x.bU,
            },
            r ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return s
        ? (0, n.jsx)("div", { className: v.AU, style: u, children: d })
        : (0, n.jsx)(c.D, { className: v.AU, onClick: i, style: u, children: d });
}
function k(e) {
    let { item: t, setHasInteracted: l, onSetItem: a, isCurrentItem: i, itemIndex: s } = e,
        r = { background: T(t) };
    return i
        ? (0, n.jsx)(c.D, {
              onClick: () => l(!0),
              className: v.AU,
              style: r,
              children: (0, n.jsx)("img", { src: t.src, alt: "", className: v.NP }),
          })
        : (0, n.jsx)(c.D, {
              onClick: () => a(s),
              className: v.AU,
              style: r,
              children: (0, n.jsx)("img", { alt: "", className: v.tv, src: t.src, draggable: !1 }),
          });
}
let S = (0, u.A)((e) => {
    let {
            items: t,
            className: l,
            paused: i = !1,
            autoplayInterval: s = 8e3,
            onItemChange: r,
            isMuted: c = !0,
            onTrackClick: u,
        } = e,
        _ = (0, a.useRef)(0),
        [m, f] = (0, a.useState)(0),
        [x, I] = (0, a.useState)(0),
        E = (0, a.useRef)(0),
        T = (0, a.useRef)(t.length),
        [S, y] = (0, a.useState)(!0),
        [R, L] = (0, a.useState)(!1),
        [O, U] = (0, a.useState)(!1),
        [w, D] = (0, a.useState)(!1),
        [P, B] = (0, a.useState)(!1),
        M = (0, a.useCallback)(
            (e, l) => {
                let n = t[e]?.backgroundSrc,
                    a = l.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: d.A.Extrapolate.CLAMP });
                return {
                    opacity: l.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: d.A.Extrapolate.CLAMP,
                    }),
                    filter: d.A.template`grayscale(${a})`,
                    backgroundImage: null != n ? `url(${n})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        F = (0, a.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            L(!1), U(t);
            let l = T.current,
                n = (0, p.U3)(E.current, l),
                a = (0, p.U3)(e, l);
            (E.current = a),
                I(a),
                _.current++,
                f(_.current),
                y(1 === Math.abs(a - n) || (a === l - 1 && 0 === n) || (0 === a && n === l - 1));
        }, []),
        H = (0, a.useCallback)(() => {
            F(E.current + 1, !1);
        }, [F]),
        G = (0, a.useCallback)(() => {
            u?.(C.Jq.CAROUSEL_NEXT), F(E.current + 1);
        }, [F, u]),
        W = (0, a.useCallback)(() => {
            u?.(C.Jq.CAROUSEL_PREV), F(E.current - 1);
        }, [F, u]),
        Y = (0, a.useCallback)((e) => {
            L(!0), U(!e);
        }, []),
        q = (0, a.useCallback)(() => {
            O || H();
        }, [O, H]),
        V = (0, a.useCallback)((e) => {
            let t = E.current;
            e < t ? D(!0) : e > t && B(!0);
        }, []),
        $ = (0, a.useCallback)(() => {
            D(!1), B(!1);
        }, []),
        z = (0, a.useCallback)(
            (e, t, l) =>
                (0, n.jsx)(k, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: l,
                    onSetItem: (e) => {
                        u?.(C.Jq.CAROUSEL_ITEM), F(e);
                    },
                    setHasInteracted: U,
                }),
            [F, u],
        ),
        X = (0, a.useCallback)(
            (e, l, a) => {
                let i = l === (0, p.U3)(x, t.length);
                return (0, n.jsx)(d.A.div, {
                    className: o()(v.AS, { [v.Xt]: i }),
                    style: null != a ? M(l, a) : null,
                    onMouseEnter: i ? null : () => V(l),
                    onMouseLeave: i ? null : $,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(
                                  N,
                                  {
                                      item: e,
                                      onPlay: Y,
                                      onEnded: q,
                                      playable: i,
                                      isMuted: c,
                                      onClick: () => {
                                          u?.(C.Jq.CAROUSEL_ITEM), F(l);
                                      },
                                  },
                                  m,
                              )
                            : z(e, l, i),
                });
            },
            [x, t.length, M, V, $, Y, q, F, z, c, u, m],
        ),
        J = (0, a.useCallback)(() => {
            let e = (0, n.jsx)(p.Ay, {
                className: v.Dk,
                items: t,
                itemSize: { width: j, margin: 0 },
                renderItem: X,
                currentIndex: x,
                animate: S,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, n.jsxs)("div", {
                      className: v.HY,
                      children: [
                          e,
                          (0, n.jsx)(b.Q8, { onClick: W, className: o()(v.UE, { [v.h_]: w }) }),
                          (0, n.jsx)(b.Oj, { onClick: G, className: o()(v.UE, { [v.h_]: P }) }),
                      ],
                  });
        }, [t, X, x, S, W, G, w, P]),
        K = (0, a.useCallback)(
            (e, t) => {
                let l = x === t;
                return (0, n.jsx)(
                    "div",
                    {
                        className: o()(v.Yw, l ? v.sM : v.N7),
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: v.Pr,
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
            [x],
        );
    (0, a.useEffect)(
        () => (
            g._.subscribe(A.jej.CAROUSEL_PREV, W),
            g._.subscribe(A.jej.CAROUSEL_NEXT, G),
            () => {
                g._.unsubscribe(A.jej.CAROUSEL_PREV, W), g._.unsubscribe(A.jej.CAROUSEL_NEXT, G);
            }
        ),
        [W, G],
    ),
        (0, a.useEffect)(() => {
            T.current = t.length;
        }, [t]),
        (0, a.useEffect)(() => {
            r?.(t[x], x);
        }, [x, t, r]);
    let Q = (0, a.useCallback)(
        (e) => {
            u?.(C.Jq.CAROUSEL_ITEM), F(e);
        },
        [F, u],
    );
    return (0, n.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: s,
        className: l,
        disable: R || O || i,
        children: [
            J(),
            (0, n.jsx)("div", {
                className: v.X$,
                children: (0, n.jsx)(b.Ay, {
                    renderItem: K,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: x,
                    onSetItem: Q,
                    paginationContainerClass: v.XG,
                    align: b.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
