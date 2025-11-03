n.d(t, {
    Q: () => v,
    Z: () => k,
}),
    n(388685);
var a = n(951288),
    r = n(647438),
    l = n(120356),
    i = n.n(l),
    o = n(748780),
    s = n(481060),
    c = n(112724),
    u = n(446411),
    d = n(679056),
    m = n(44488),
    p = n(519160),
    g = n(124347),
    h = n(524444),
    C = n(585483),
    _ = n(981631),
    b = n(925962);
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function x() {
    var e, t;
    let n =
        ((e = ["grayscale(", ")"]),
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (x = function () {
            return n;
        }),
        n
    );
}
let v = 747,
    I = (e) => {
        var t, n;
        return (0, h.lV)(
            ((t = f({}, e)),
            (n = n =
                {
                    className: b.videoWrapper,
                    mediaPlayerClassName: b.mediaPlayer,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : (function (e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          n.push.apply(n, a);
                      }
                      return n;
                  })(Object(n)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                  }),
            t),
        );
    },
    j = (e) => (0, a.jsx)(g.ZP, f({}, e));
function P(e) {
    let { item: t, onPlay: n, onEnded: r, onClick: l, playable: i } = e,
        o = (0, a.jsx)(u.BC, {
            href: null,
            thumbnail: {
                url: t.videoThumbnailSrc,
                width: v,
                height: 560,
            },
            video: {
                url: t.src,
                proxyURL: t.src,
                width: v,
                height: 560,
            },
            provider: void 0,
            allowFullScreen: !0,
            maxHeight: 560,
            maxWidth: v,
            onPlay: n,
            onEnded: r,
            playable: i,
            className: b.video,
            volume: 1,
            autoMute: !0,
            autoPlay: i,
            renderVideoComponent: I,
            renderImageComponent: j,
            renderLinkComponent: h.iT,
        });
    return i
        ? o
        : (0, a.jsx)(s.P3F, {
              className: b.itemImageWrapper,
              onClick: l,
              children: o,
          });
}
let k = (0, c.Z)((e) => {
    let { items: t, className: n, paused: l = !1, autoplayInterval: c = 8000, onItemChange: u } = e,
        [g, h] = (0, r.useState)(0),
        f = (0, r.useRef)(0),
        I = (0, r.useRef)(t.length),
        [j, k] = (0, r.useState)(!0),
        [S, y] = (0, r.useState)(!1),
        [N, w] = (0, r.useState)(!1),
        [E, O] = (0, r.useState)(!1),
        [R, L] = (0, r.useState)(!1),
        Z = (0, r.useCallback)(
            (e, n) => {
                var a;
                let r = null == (a = t[e]) ? void 0 : a.backgroundSrc,
                    l = n.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                        extrapolate: o.Z.Extrapolate.CLAMP,
                    });
                return {
                    opacity: n.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: o.Z.Extrapolate.CLAMP,
                    }),
                    filter: o.Z.template(x(), l),
                    backgroundImage: null != r ? "url(".concat(r, ")") : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        B = (0, r.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            y(!1), w(t);
            let n = I.current,
                a = (0, p.gN)(f.current, n),
                r = (0, p.gN)(e, n);
            (f.current = r), h(r), k(1 === Math.abs(r - a) || (r === n - 1 && 0 === a) || (0 === r && a === n - 1));
        }, []),
        A = (0, r.useCallback)(() => {
            B(f.current + 1, !1);
        }, [B]),
        T = (0, r.useCallback)(() => {
            B(f.current + 1);
        }, [B]),
        W = (0, r.useCallback)(() => {
            B(f.current - 1);
        }, [B]),
        H = (0, r.useCallback)((e) => {
            y(!0), w(!e);
        }, []),
        D = (0, r.useCallback)(() => {
            N || A();
        }, [N, A]),
        z = (0, r.useCallback)((e) => {
            let t = f.current;
            e < t ? O(!0) : e > t && L(!0);
        }, []),
        F = (0, r.useCallback)(() => {
            O(!1), L(!1);
        }, []),
        M = (0, r.useCallback)(
            (e, t, n) =>
                n
                    ? (0, a.jsx)(s.P3F, {
                          onClick: () => w(!0),
                          className: b.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              src: e.src,
                              alt: "",
                              className: b.currentImage,
                          }),
                      })
                    : (0, a.jsx)(s.P3F, {
                          onClick: () => B(t),
                          className: b.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              alt: "",
                              className: b.itemImage,
                              src: e.src,
                              draggable: !1,
                          }),
                      }),
            [B],
        ),
        Q = (0, r.useCallback)(
            (e, n, r) => {
                let l = n === (0, p.gN)(g, t.length);
                return (0, a.jsx)(o.Z.div, {
                    className: i()(b.item, { [b.currentItem]: l }),
                    style: null != r ? Z(n, r) : null,
                    onMouseEnter: l ? null : () => z(n),
                    onMouseLeave: l ? null : F,
                    children:
                        "video" === e.type
                            ? (0, a.jsx)(P, {
                                  item: e,
                                  onPlay: H,
                                  onEnded: D,
                                  playable: l,
                                  onClick: () => B(n),
                              })
                            : M(e, n, l),
                });
            },
            [g, t.length, Z, z, F, H, D, B, M],
        ),
        U = (0, r.useCallback)(() => {
            let e = (0, a.jsx)(p.ZP, {
                className: b.carousel,
                items: t,
                itemSize: {
                    width: v,
                    margin: 12,
                },
                renderItem: Q,
                currentIndex: g,
                animate: j,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: b.carouselButtonsContainer,
                      children: [
                          e,
                          (0, a.jsx)(m.am, {
                              onClick: W,
                              className: i()(b.arrow, { [b.arrowHovered]: E }),
                          }),
                          (0, a.jsx)(m.Pz, {
                              onClick: T,
                              className: i()(b.arrow, { [b.arrowHovered]: R }),
                          }),
                      ],
                  });
        }, [t, Q, g, j, W, T, E, R]),
        G = (0, r.useCallback)(
            (e, t) => {
                let n = g === t;
                return (0, a.jsx)(
                    "div",
                    {
                        className: i()(
                            b.paginationItem,
                            n ? b.selectedStorePaginationItem : b.unselectedStorePaginationItem,
                        ),
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: b.storePaginationImg,
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
                    "page-".concat(t),
                );
            },
            [g],
        );
    return (
        (0, r.useEffect)(
            () => (
                C.S.subscribe(_.CkL.CAROUSEL_PREV, W),
                C.S.subscribe(_.CkL.CAROUSEL_NEXT, T),
                () => {
                    C.S.unsubscribe(_.CkL.CAROUSEL_PREV, W), C.S.unsubscribe(_.CkL.CAROUSEL_NEXT, T);
                }
            ),
            [W, T],
        ),
        (0, r.useEffect)(() => {
            I.current = t.length;
        }, [t]),
        (0, r.useEffect)(() => {
            null == u || u(t[g], g);
        }, [g, t, u]),
        (0, a.jsxs)(d.Z, {
            pauseOnHover: !0,
            onInterval: A,
            interval: c,
            className: n,
            disable: S || N || l,
            children: [
                U(),
                (0, a.jsx)("div", {
                    className: b.pagination,
                    children: (0, a.jsx)(m.ZP, {
                        renderItem: G,
                        scrollToPadding: 40,
                        items: t,
                        selectedIndex: g,
                        onSetItem: B,
                        paginationContainerClass: b.scroller,
                        align: m.ZP.Align.CENTER,
                    }),
                }),
            ],
        })
    );
});
