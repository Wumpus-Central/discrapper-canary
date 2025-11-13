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
    h = n(124347),
    g = n(524444),
    C = n(585483),
    b = n(981631),
    f = n(925962);
function _(e) {
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
        return (0, g.lV)(
            ((t = _({}, e)),
            (n = n =
                {
                    className: f.videoWrapper,
                    mediaPlayerClassName: f.mediaPlayer,
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
    j = (e) => (0, a.jsx)(h.ZP, _({}, e));
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
            className: f.video,
            volume: 1,
            autoMute: !0,
            autoPlay: i,
            renderVideoComponent: I,
            renderImageComponent: j,
            renderLinkComponent: g.iT,
        });
    return i
        ? o
        : (0, a.jsx)(s.P3F, {
              className: f.itemImageWrapper,
              onClick: l,
              children: o,
          });
}
let k = (0, c.Z)((e) => {
    let { items: t, className: n, paused: l = !1, autoplayInterval: c = 8000, onItemChange: u } = e,
        [h, g] = (0, r.useState)(0),
        _ = (0, r.useRef)(0),
        I = (0, r.useRef)(t.length),
        [j, k] = (0, r.useState)(!0),
        [S, y] = (0, r.useState)(!1),
        [w, N] = (0, r.useState)(!1),
        [O, E] = (0, r.useState)(!1),
        [R, Z] = (0, r.useState)(!1),
        L = (0, r.useCallback)(
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
            y(!1), N(t);
            let n = I.current,
                a = (0, p.gN)(_.current, n),
                r = (0, p.gN)(e, n);
            (_.current = r), g(r), k(1 === Math.abs(r - a) || (r === n - 1 && 0 === a) || (0 === r && a === n - 1));
        }, []),
        T = (0, r.useCallback)(() => {
            B(_.current + 1, !1);
        }, [B]),
        W = (0, r.useCallback)(() => {
            B(_.current + 1);
        }, [B]),
        A = (0, r.useCallback)(() => {
            B(_.current - 1);
        }, [B]),
        H = (0, r.useCallback)((e) => {
            y(!0), N(!e);
        }, []),
        D = (0, r.useCallback)(() => {
            w || T();
        }, [w, T]),
        z = (0, r.useCallback)((e) => {
            let t = _.current;
            e < t ? E(!0) : e > t && Z(!0);
        }, []),
        F = (0, r.useCallback)(() => {
            E(!1), Z(!1);
        }, []),
        Q = (0, r.useCallback)(
            (e, t, n) =>
                n
                    ? (0, a.jsx)(s.P3F, {
                          onClick: () => N(!0),
                          className: f.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              src: e.src,
                              alt: "",
                              className: f.currentImage,
                          }),
                      })
                    : (0, a.jsx)(s.P3F, {
                          onClick: () => B(t),
                          className: f.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              alt: "",
                              className: f.itemImage,
                              src: e.src,
                              draggable: !1,
                          }),
                      }),
            [B],
        ),
        U = (0, r.useCallback)(
            (e, n, r) => {
                let l = n === (0, p.gN)(h, t.length);
                return (0, a.jsx)(o.Z.div, {
                    className: i()(f.item, { [f.currentItem]: l }),
                    style: null != r ? L(n, r) : null,
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
                            : Q(e, n, l),
                });
            },
            [h, t.length, L, z, F, H, D, B, Q],
        ),
        M = (0, r.useCallback)(() => {
            let e = (0, a.jsx)(p.ZP, {
                className: f.carousel,
                items: t,
                itemSize: {
                    width: v,
                    margin: 12,
                },
                renderItem: U,
                currentIndex: h,
                animate: j,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: f.carouselButtonsContainer,
                      children: [
                          e,
                          (0, a.jsx)(m.am, {
                              onClick: A,
                              className: i()(f.arrow, { [f.arrowHovered]: O }),
                          }),
                          (0, a.jsx)(m.Pz, {
                              onClick: W,
                              className: i()(f.arrow, { [f.arrowHovered]: R }),
                          }),
                      ],
                  });
        }, [t, U, h, j, A, W, O, R]),
        G = (0, r.useCallback)(
            (e, t) => {
                let n = h === t;
                return (0, a.jsx)(
                    "div",
                    {
                        className: i()(
                            f.paginationItem,
                            n ? f.selectedStorePaginationItem : f.unselectedStorePaginationItem,
                        ),
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: f.storePaginationImg,
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
            [h],
        );
    return (
        (0, r.useEffect)(
            () => (
                C.S.subscribe(b.CkL.CAROUSEL_PREV, A),
                C.S.subscribe(b.CkL.CAROUSEL_NEXT, W),
                () => {
                    C.S.unsubscribe(b.CkL.CAROUSEL_PREV, A), C.S.unsubscribe(b.CkL.CAROUSEL_NEXT, W);
                }
            ),
            [A, W],
        ),
        (0, r.useEffect)(() => {
            I.current = t.length;
        }, [t]),
        (0, r.useEffect)(() => {
            null == u || u(t[h], h);
        }, [h, t, u]),
        (0, a.jsxs)(d.Z, {
            pauseOnHover: !0,
            onInterval: T,
            interval: c,
            className: n,
            disable: S || w || l,
            children: [
                M(),
                (0, a.jsx)("div", {
                    className: f.pagination,
                    children: (0, a.jsx)(m.ZP, {
                        renderItem: G,
                        scrollToPadding: 40,
                        items: t,
                        selectedIndex: h,
                        onSetItem: B,
                        paginationContainerClass: f.scroller,
                        align: m.ZP.Align.CENTER,
                    }),
                }),
            ],
        })
    );
});
