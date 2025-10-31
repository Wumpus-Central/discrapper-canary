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
    b = n(981631),
    _ = n(925962);
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
                    className: _.videoWrapper,
                    mediaPlayerClassName: _.mediaPlayer,
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
    P = (e) => (0, a.jsx)(g.ZP, f({}, e));
function j(e) {
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
            className: _.video,
            volume: 1,
            autoMute: !0,
            autoPlay: i,
            renderVideoComponent: I,
            renderImageComponent: P,
            renderLinkComponent: h.iT,
        });
    return i
        ? o
        : (0, a.jsx)(s.P3F, {
              className: _.itemImageWrapper,
              onClick: l,
              children: o,
          });
}
let k = (0, c.Z)((e) => {
    let { items: t, className: n, paused: l = !1, autoplayInterval: c = 8000 } = e,
        [u, g] = (0, r.useState)(0),
        h = (0, r.useRef)(0),
        f = (0, r.useRef)(t.length),
        [I, P] = (0, r.useState)(!0),
        [k, S] = (0, r.useState)(!1),
        [y, N] = (0, r.useState)(!1),
        [w, O] = (0, r.useState)(!1),
        [E, R] = (0, r.useState)(!1),
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
        Z = (0, r.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            S(!1), N(t);
            let n = f.current,
                a = (0, p.gN)(h.current, n),
                r = (0, p.gN)(e, n);
            (h.current = r), g(r), P(1 === Math.abs(r - a) || (r === n - 1 && 0 === a) || (0 === r && a === n - 1));
        }, []),
        T = (0, r.useCallback)(() => {
            Z(h.current + 1, !1);
        }, [Z]),
        A = (0, r.useCallback)(() => {
            Z(h.current + 1);
        }, [Z]),
        W = (0, r.useCallback)(() => {
            Z(h.current - 1);
        }, [Z]),
        B = (0, r.useCallback)((e) => {
            S(!0), N(!e);
        }, []),
        H = (0, r.useCallback)(() => {
            y || T();
        }, [y, T]),
        D = (0, r.useCallback)((e) => {
            let t = h.current;
            e < t ? O(!0) : e > t && R(!0);
        }, []),
        z = (0, r.useCallback)(() => {
            O(!1), R(!1);
        }, []),
        F = (0, r.useCallback)(
            (e, t, n) =>
                n
                    ? (0, a.jsx)(s.P3F, {
                          onClick: () => N(!0),
                          className: _.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              src: e.src,
                              alt: "",
                              className: _.currentImage,
                          }),
                      })
                    : (0, a.jsx)(s.P3F, {
                          onClick: () => Z(t),
                          className: _.itemImageWrapper,
                          children: (0, a.jsx)("img", {
                              alt: "",
                              className: _.itemImage,
                              src: e.src,
                              draggable: !1,
                          }),
                      }),
            [Z],
        ),
        M = (0, r.useCallback)(
            (e, n, r) => {
                let l = n === (0, p.gN)(u, t.length);
                return (0, a.jsx)(o.Z.div, {
                    className: i()(_.item, { [_.currentItem]: l }),
                    style: null != r ? L(n, r) : null,
                    onMouseEnter: l ? null : () => D(n),
                    onMouseLeave: l ? null : z,
                    children:
                        "video" === e.type
                            ? (0, a.jsx)(j, {
                                  item: e,
                                  onPlay: B,
                                  onEnded: H,
                                  playable: l,
                                  onClick: () => Z(n),
                              })
                            : F(e, n, l),
                });
            },
            [u, t.length, L, D, z, B, H, Z, F],
        ),
        Q = (0, r.useCallback)(() => {
            let e = (0, a.jsx)(p.ZP, {
                className: _.carousel,
                items: t,
                itemSize: {
                    width: v,
                    margin: 12,
                },
                renderItem: M,
                currentIndex: u,
                animate: I,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, a.jsxs)("div", {
                      className: _.carouselButtonsContainer,
                      children: [
                          e,
                          (0, a.jsx)(m.am, {
                              onClick: W,
                              className: i()(_.arrow, { [_.arrowHovered]: w }),
                          }),
                          (0, a.jsx)(m.Pz, {
                              onClick: A,
                              className: i()(_.arrow, { [_.arrowHovered]: E }),
                          }),
                      ],
                  });
        }, [t, M, u, I, W, A, w, E]),
        U = (0, r.useCallback)(
            (e, t) => {
                let n = u === t;
                return (0, a.jsx)(
                    "div",
                    {
                        className: i()(
                            _.paginationItem,
                            n ? _.selectedStorePaginationItem : _.unselectedStorePaginationItem,
                        ),
                        children: (0, a.jsx)("img", {
                            alt: "",
                            className: _.storePaginationImg,
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
            [u],
        );
    return (
        (0, r.useEffect)(
            () => (
                C.S.subscribe(b.CkL.CAROUSEL_PREV, W),
                C.S.subscribe(b.CkL.CAROUSEL_NEXT, A),
                () => {
                    C.S.unsubscribe(b.CkL.CAROUSEL_PREV, W), C.S.unsubscribe(b.CkL.CAROUSEL_NEXT, A);
                }
            ),
            [W, A],
        ),
        (0, r.useEffect)(() => {
            f.current = t.length;
        }, [t]),
        (0, a.jsxs)(d.Z, {
            pauseOnHover: !0,
            onInterval: T,
            interval: c,
            className: n,
            disable: k || y || l,
            children: [
                Q(),
                (0, a.jsx)("div", {
                    className: _.pagination,
                    children: (0, a.jsx)(m.ZP, {
                        renderItem: U,
                        scrollToPadding: 40,
                        items: t,
                        selectedIndex: u,
                        onSetItem: Z,
                        paginationContainerClass: _.scroller,
                        align: m.ZP.Align.CENTER,
                    }),
                }),
            ],
        })
    );
});
