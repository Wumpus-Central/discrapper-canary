n.d(t, { A: () => k, B: () => v });
var a = n(627968),
    l = n(64700),
    s = n(310784),
    i = n.n(s),
    r = n(503698),
    o = n.n(r),
    c = n(615300),
    d = n(397927),
    u = n(456412),
    _ = n(654107),
    m = n(871751),
    h = n(133296),
    p = n(848752),
    f = n(452282),
    g = n(619517),
    x = n(652176),
    C = n(203982),
    b = n(995393),
    A = n(652215),
    T = n(55607);
let v = 747,
    E = (e) => (0, x.$o)({ ...e, className: T.tN, mediaPlayerClassName: T.yf }),
    j = (e) => (0, a.jsx)(g.Ay, { ...e });
function N(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [n, a] = (0, _.rh)(t, "#000000"),
        s = l.useMemo(() => {
            let e = i()(n).darken(1);
            return `radial-gradient(circle, ${e.alpha(0.2).hex()} 0%, transparent 100%)`;
        }, [n]);
    return null != t && "#000000" !== n ? s : void 0;
}
function S(e) {
    let { item: t, onPlay: n, onEnded: l, onClick: s, playable: i, isMuted: r } = e,
        o = N(t),
        c = (0, a.jsx)(
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
                playable: i,
                className: T.Ki,
                volume: 1,
                autoMute: r,
                autoPlay: i,
                renderVideoComponent: E,
                renderImageComponent: j,
                renderLinkComponent: x.bU,
            },
            r ? "player-muted" : "player-unmuted",
        ),
        u = { background: o };
    return i
        ? (0, a.jsx)("div", { className: T.AU, style: u, children: c })
        : (0, a.jsx)(d.DUT, { className: T.AU, onClick: s, style: u, children: c });
}
function I(e) {
    let { item: t, setHasInteracted: n, onSetItem: l, isCurrentItem: s, itemIndex: i } = e,
        r = { background: N(t) };
    return s
        ? (0, a.jsx)(d.DUT, {
              onClick: () => n(!0),
              className: T.AU,
              style: r,
              children: (0, a.jsx)("img", { src: t.src, alt: "", className: T.NP }),
          })
        : (0, a.jsx)(d.DUT, {
              onClick: () => l(i),
              className: T.AU,
              style: r,
              children: (0, a.jsx)("img", { alt: "", className: T.tv, src: t.src, draggable: !1 }),
          });
}
let k = (0, u.A)((e) => {
    let {
            items: t,
            className: n,
            paused: s = !1,
            autoplayInterval: i = 8e3,
            onItemChange: r,
            isMuted: d = !0,
            onTrackClick: u,
        } = e,
        _ = (0, l.useRef)(0),
        [m, g] = (0, l.useState)(0),
        [x, E] = (0, l.useState)(0),
        j = (0, l.useRef)(0),
        N = (0, l.useRef)(t.length),
        [k, y] = (0, l.useState)(!0),
        [R, O] = (0, l.useState)(!1),
        [U, w] = (0, l.useState)(!1),
        [P, L] = (0, l.useState)(!1),
        [B, D] = (0, l.useState)(!1),
        M = (0, l.useCallback)(
            (e, n) => {
                let a = t[e]?.backgroundSrc,
                    l = n.interpolate({ inputRange: [0, 1], outputRange: [1, 0], extrapolate: c.A.Extrapolate.CLAMP });
                return {
                    opacity: n.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: c.A.Extrapolate.CLAMP,
                    }),
                    filter: c.A.template`grayscale(${l})`,
                    backgroundImage: null != a ? `url(${a})` : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        H = (0, l.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            O(!1), w(t);
            let n = N.current,
                a = (0, f.U3)(j.current, n),
                l = (0, f.U3)(e, n);
            (j.current = l),
                E(l),
                _.current++,
                g(_.current),
                y(1 === Math.abs(l - a) || (l === n - 1 && 0 === a) || (0 === l && a === n - 1));
        }, []),
        F = (0, l.useCallback)(() => {
            H(j.current + 1, !1);
        }, [H]),
        G = (0, l.useCallback)(() => {
            u?.(b.Jq.CAROUSEL_NEXT), H(j.current + 1);
        }, [H, u]),
        W = (0, l.useCallback)(() => {
            u?.(b.Jq.CAROUSEL_PREV), H(j.current - 1);
        }, [H, u]),
        Y = (0, l.useCallback)((e) => {
            O(!0), w(!e);
        }, []),
        q = (0, l.useCallback)(() => {
            U || F();
        }, [U, F]),
        X = (0, l.useCallback)((e) => {
            let t = j.current;
            e < t ? L(!0) : e > t && D(!0);
        }, []),
        V = (0, l.useCallback)(() => {
            L(!1), D(!1);
        }, []),
        $ = (0, l.useCallback)(
            (e, t, n) =>
                (0, a.jsx)(I, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: n,
                    onSetItem: (e) => {
                        u?.(b.Jq.CAROUSEL_ITEM), H(e);
                    },
                    setHasInteracted: w,
                }),
            [H, u],
        ),
        J = (0, l.useCallback)(
            (e, n, l) => {
                let s = n === (0, f.U3)(x, t.length);
                return (0, a.jsx)(c.A.div, {
                    className: o()(T.AS, { [T.Xt]: s }),
                    style: null != l ? M(n, l) : null,
                    onMouseEnter: s ? null : () => X(n),
                    onMouseLeave: s ? null : V,
                    children:
                        "video" === e.type
                            ? (0, a.jsx)(
                                  S,
                                  {
                                      item: e,
                                      onPlay: Y,
                                      onEnded: q,
                                      playable: s,
                                      isMuted: d,
                                      onClick: () => {
                                          u?.(b.Jq.CAROUSEL_ITEM), H(n);
                                      },
                                  },
                                  m,
                              )
                            : $(e, n, s),
                });
            },
            [x, t.length, M, X, V, Y, q, H, $, d, u, m],
        ),
        z = (0, l.useCallback)(() => {
            let e = (0, a.jsx)(f.Ay, {
                className: T.Dk,
                items: t,
                itemSize: { width: v, margin: 0 },
                renderItem: J,
                currentIndex: x,
                animate: k,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: T.HY,
                      children: [
                          e,
                          (0, a.jsx)(p.Q8, { onClick: W, className: o()(T.UE, { [T.h_]: P }) }),
                          (0, a.jsx)(p.Oj, { onClick: G, className: o()(T.UE, { [T.h_]: B }) }),
                      ],
                  });
        }, [t, J, x, k, W, G, P, B]),
        K = (0, l.useCallback)(
            (e, t) => {
                let n = x === t;
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
            [x],
        );
    (0, l.useEffect)(
        () => (
            C._.subscribe(A.jej.CAROUSEL_PREV, W),
            C._.subscribe(A.jej.CAROUSEL_NEXT, G),
            () => {
                C._.unsubscribe(A.jej.CAROUSEL_PREV, W), C._.unsubscribe(A.jej.CAROUSEL_NEXT, G);
            }
        ),
        [W, G],
    ),
        (0, l.useEffect)(() => {
            N.current = t.length;
        }, [t]),
        (0, l.useEffect)(() => {
            r?.(t[x], x);
        }, [x, t, r]);
    let Q = (0, l.useCallback)(
        (e) => {
            u?.(b.Jq.CAROUSEL_ITEM), H(e);
        },
        [H, u],
    );
    return (0, a.jsxs)(h.A, {
        pauseOnHover: !0,
        onInterval: F,
        interval: i,
        className: n,
        disable: R || U || s,
        children: [
            z(),
            (0, a.jsx)("div", {
                className: T.X$,
                children: (0, a.jsx)(p.Ay, {
                    renderItem: K,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: x,
                    onSetItem: Q,
                    paginationContainerClass: T.XG,
                    align: p.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
