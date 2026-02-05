n.d(t, { A: () => j, B: () => E });
var a = n(627968),
    l = n(64700),
    s = n(310784),
    r = n.n(s),
    i = n(503698),
    o = n.n(i),
    d = n(615300),
    c = n(397927),
    _ = n(456412),
    u = n(654107),
    m = n(871751),
    h = n(133296),
    p = n(848752),
    b = n(452282),
    g = n(619517),
    f = n(652176),
    C = n(203982),
    A = n(995393),
    x = n(652215),
    T = n(863876);
let E = 747,
    I = (e) => (0, f.$o)({ ...e, className: T.tN, mediaPlayerClassName: T.yf }),
    N = (e) => (0, a.jsx)(g.Ay, { ...e });
function S(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, a] = (0, u.rh)(t, "#000000"),
        s = l.useMemo(() => {
            let e = r()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [n]);
    return null != t && "#000000" !== n ? s : void 0;
}
function v(e) {
    let { item: t, onPlay: n, onEnded: l, onClick: s, playable: r, isMuted: i } = e,
        o = S(t),
        d = (0, a.jsx)(
            m.rr,
            {
                href: null,
                thumbnail: { url: t.videoThumbnailSrc, width: E, height: 560 },
                video: { url: t.src, proxyURL: t.src, width: E, height: 560 },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: E,
                onPlay: n,
                onEnded: l,
                playable: r,
                className: T.Ki,
                volume: 1,
                autoMute: i,
                autoPlay: r,
                renderVideoComponent: I,
                renderImageComponent: N,
                renderLinkComponent: f.bU,
            },
            i ? "player-muted" : "player-unmuted",
        ),
        _ = { background: o };
    return r
        ? (0, a.jsx)("div", { className: T.AU, style: _, children: d })
        : (0, a.jsx)(c.DUT, { className: T.AU, onClick: s, style: _, children: d });
}
function k(e) {
    let { item: t, setHasInteracted: n, onSetItem: l, isCurrentItem: s, itemIndex: r } = e,
        i = { background: S(t) };
    return s
        ? (0, a.jsx)(c.DUT, {
              onClick: () => n(!0),
              className: T.AU,
              style: i,
              children: (0, a.jsx)("img", { src: t.src, alt: "", className: T.NP }),
          })
        : (0, a.jsx)(c.DUT, {
              onClick: () => l(r),
              className: T.AU,
              style: i,
              children: (0, a.jsx)("img", { alt: "", className: T.tv, src: t.src, draggable: !1 }),
          });
}
let j = (0, _.A)((e) => {
    let {
            items: t,
            className: n,
            paused: s = !1,
            autoplayInterval: r = 8e3,
            onItemChange: i,
            isMuted: c = !0,
            onTrackClick: _,
        } = e,
        u = (0, l.useRef)(0),
        [m, g] = (0, l.useState)(0),
        [f, I] = (0, l.useState)(0),
        N = (0, l.useRef)(0),
        S = (0, l.useRef)(t.length),
        [j, y] = (0, l.useState)(!0),
        [R, U] = (0, l.useState)(!1),
        [O, P] = (0, l.useState)(!1),
        [L, w] = (0, l.useState)(!1),
        [D, M] = (0, l.useState)(!1),
        B = (0, l.useCallback)(
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
            U(!1), P(t);
            let n = S.current,
                a = (0, b.U3)(N.current, n),
                l = (0, b.U3)(e, n);
            (N.current = l),
                I(l),
                u.current++,
                g(u.current),
                y(1 === Math.abs(l - a) || (l === n - 1 && 0 === a) || (0 === l && a === n - 1));
        }, []),
        H = (0, l.useCallback)(() => {
            F(N.current + 1, !1);
        }, [F]),
        G = (0, l.useCallback)(() => {
            _?.(A.Jq.CAROUSEL_NEXT), F(N.current + 1);
        }, [F, _]),
        W = (0, l.useCallback)(() => {
            _?.(A.Jq.CAROUSEL_PREV), F(N.current - 1);
        }, [F, _]),
        Y = (0, l.useCallback)((e) => {
            U(!0), P(!e);
        }, []),
        q = (0, l.useCallback)(() => {
            O || H();
        }, [O, H]),
        V = (0, l.useCallback)((e) => {
            let t = N.current;
            e < t ? w(!0) : e > t && M(!0);
        }, []),
        X = (0, l.useCallback)(() => {
            w(!1), M(!1);
        }, []),
        $ = (0, l.useCallback)(
            (e, t, n) =>
                (0, a.jsx)(k, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: n,
                    onSetItem: (e) => {
                        _?.(A.Jq.CAROUSEL_ITEM), F(e);
                    },
                    setHasInteracted: P,
                }),
            [F, _],
        ),
        z = (0, l.useCallback)(
            (e, n, l) => {
                let s = n === (0, b.U3)(f, t.length);
                return (0, a.jsx)(d.A.div, {
                    className: o()(T.AS, { [T.Xt]: s }),
                    style: null != l ? B(n, l) : null,
                    onMouseEnter: s ? null : () => V(n),
                    onMouseLeave: s ? null : X,
                    children:
                        "video" === e.type
                            ? (0, a.jsx)(
                                  v,
                                  {
                                      item: e,
                                      onPlay: Y,
                                      onEnded: q,
                                      playable: s,
                                      isMuted: c,
                                      onClick: () => {
                                          _?.(A.Jq.CAROUSEL_ITEM), F(n);
                                      },
                                  },
                                  m,
                              )
                            : $(e, n, s),
                });
            },
            [f, t.length, B, V, X, Y, q, F, $, c, _, m],
        ),
        J = (0, l.useCallback)(() => {
            let e = (0, a.jsx)(b.Ay, {
                className: T.Dk,
                items: t,
                itemSize: { width: E, margin: 0 },
                renderItem: z,
                currentIndex: f,
                animate: j,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: T.HY,
                      children: [
                          e,
                          (0, a.jsx)(p.Q8, { onClick: W, className: o()(T.UE, { [T.h_]: L }) }),
                          (0, a.jsx)(p.Oj, { onClick: G, className: o()(T.UE, { [T.h_]: D }) }),
                      ],
                  });
        }, [t, z, f, j, W, G, L, D]),
        K = (0, l.useCallback)(
            (e, t) => {
                let n = f === t;
                return (0, a.jsx)(
                    "div",
                    {
                        className: o()(T.Yw, n ? T.sM : T.N7),
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: T.Pr,
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
            C._.subscribe(x.jej.CAROUSEL_PREV, W),
            C._.subscribe(x.jej.CAROUSEL_NEXT, G),
            () => {
                C._.unsubscribe(x.jej.CAROUSEL_PREV, W), C._.unsubscribe(x.jej.CAROUSEL_NEXT, G);
            }
        ),
        [W, G],
    ),
        (0, l.useEffect)(() => {
            S.current = t.length;
        }, [t]),
        (0, l.useEffect)(() => {
            i?.(t[f], f);
        }, [f, t, i]);
    let Q = (0, l.useCallback)(
        (e) => {
            _?.(A.Jq.CAROUSEL_ITEM), F(e);
        },
        [F, _],
    );
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: H,
        interval: r,
        className: n,
        disable: R || O || s,
        children: [
            J(),
            (0, a.jsx)("div", {
                className: T.X$,
                children: (0, a.jsx)(p.Ay, {
                    renderItem: K,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: f,
                    onSetItem: Q,
                    paginationContainerClass: T.XG,
                    align: p.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
