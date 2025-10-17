a.d(t, {
    Q: () => I,
    Z: () => k,
}),
    a(388685);
var n = a(951288),
    l = a(647438),
    r = a(120356),
    i = a.n(r),
    o = a(748780),
    s = a(481060),
    c = a(112724),
    u = a(446411),
    d = a(679056),
    m = a(44488),
    p = a(519160),
    g = a(124347),
    b = a(524444),
    h = a(585483),
    C = a(981631),
    _ = a(925962);
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var a = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(a);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(a).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(a, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = a[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function f() {
    var e, t;
    let a =
        ((e = ["grayscale(", ")"]),
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (f = function () {
            return a;
        }),
        a
    );
}
let I = 747,
    x = (e) => {
        var t, a;
        return (0, b.lV)(
            ((t = v({}, e)),
            (a = a =
                {
                    className: _.videoWrapper,
                    mediaPlayerClassName: _.mediaPlayer,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                : (function (e, t) {
                      var a = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          a.push.apply(a, n);
                      }
                      return a;
                  })(Object(a)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                  }),
            t),
        );
    },
    j = (e) => (0, n.jsx)(g.ZP, v({}, e));
function y(e) {
    let { item: t, onPlay: a, onEnded: l, onClick: r, playable: i } = e,
        o = (0, n.jsx)(u.BC, {
            href: null,
            thumbnail: {
                url: t.videoThumbnailSrc,
                width: I,
                height: 560,
            },
            video: {
                url: t.src,
                proxyURL: t.src,
                width: I,
                height: 560,
            },
            provider: void 0,
            allowFullScreen: !0,
            maxHeight: 560,
            maxWidth: I,
            onPlay: a,
            onEnded: l,
            playable: i,
            className: _.video,
            volume: 1,
            autoMute: !0,
            autoPlay: i,
            renderVideoComponent: x,
            renderImageComponent: j,
            renderLinkComponent: b.iT,
        });
    return i
        ? o
        : (0, n.jsx)(s.P3F, {
              className: _.itemImageWrapper,
              onClick: r,
              children: o,
          });
}
let k = (0, c.Z)((e) => {
    let { items: t, className: a, paused: r = !1, autoplayInterval: c = 8000 } = e,
        [u, g] = (0, l.useState)(0),
        [b, v] = (0, l.useState)(!0),
        [x, j] = (0, l.useState)(!1),
        [k, P] = (0, l.useState)(!1),
        [S, N] = (0, l.useState)(!1),
        [w, O] = (0, l.useState)(!1),
        A = (0, l.useCallback)(
            (e, a) => {
                var n;
                let l = null == (n = t[e]) ? void 0 : n.backgroundSrc,
                    r = a.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                        extrapolate: o.Z.Extrapolate.CLAMP,
                    });
                return {
                    opacity: a.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: o.Z.Extrapolate.CLAMP,
                    }),
                    filter: o.Z.template(f(), r),
                    backgroundImage: null != l ? "url(".concat(l, ")") : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        E = (0, l.useCallback)(
            function (e) {
                let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = (0, p.gN)(u, t.length),
                    l = (0, p.gN)(e, t.length),
                    r = 1 === Math.abs(e - n) || (e === t.length - 1 && 0 === n) || (0 === e && n === t.length - 1);
                j(!1), g(l), v(r), P(a);
            },
            [u, t],
        ),
        W = (0, l.useCallback)(() => {
            E(u + 1, !1);
        }, [E, u]),
        L = (0, l.useCallback)(() => {
            E(u + 1);
        }, [E, u]),
        R = (0, l.useCallback)(() => {
            E(u - 1);
        }, [E, u]),
        Z = (0, l.useCallback)((e) => {
            j(!0), P(!e);
        }, []),
        H = (0, l.useCallback)(() => {
            k || W();
        }, [k, W]),
        T = (0, l.useCallback)(
            (e) => {
                e < u ? N(!0) : e > u && O(!0);
            },
            [u],
        ),
        B = (0, l.useCallback)(() => {
            N(!1), O(!1);
        }, []),
        D = (0, l.useCallback)(
            (e, t, a) =>
                a
                    ? (0, n.jsx)(s.P3F, {
                          onClick: () => P(!0),
                          className: _.itemImageWrapper,
                          children: (0, n.jsx)("img", {
                              src: e.src,
                              alt: "",
                              className: _.currentImage,
                          }),
                      })
                    : (0, n.jsx)(s.P3F, {
                          onClick: () => E(t),
                          className: _.itemImageWrapper,
                          children: (0, n.jsx)("img", {
                              alt: "",
                              className: _.itemImage,
                              src: e.src,
                              draggable: !1,
                          }),
                      }),
            [E],
        ),
        M = (0, l.useCallback)(
            (e, a, l) => {
                let r = a === (0, p.gN)(u, t.length);
                return (0, n.jsx)(o.Z.div, {
                    className: i()(_.item, { [_.currentItem]: r }),
                    style: null != l ? A(a, l) : null,
                    onMouseEnter: r ? null : () => T(a),
                    onMouseLeave: r ? null : B,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(y, {
                                  item: e,
                                  onPlay: Z,
                                  onEnded: H,
                                  playable: r,
                                  onClick: () => E(a),
                              })
                            : D(e, a, r),
                });
            },
            [u, t.length, A, T, B, Z, H, E, D],
        ),
        Q = (0, l.useCallback)(() => {
            let e = (0, n.jsx)(p.ZP, {
                className: _.carousel,
                items: t,
                itemSize: {
                    width: I,
                    margin: 12,
                },
                renderItem: M,
                currentIndex: u,
                animate: b,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, n.jsxs)("div", {
                      className: _.carouselButtonsContainer,
                      children: [
                          e,
                          (0, n.jsx)(m.am, {
                              onClick: R,
                              className: i()(_.arrow, { [_.arrowHovered]: S }),
                          }),
                          (0, n.jsx)(m.Pz, {
                              onClick: L,
                              className: i()(_.arrow, { [_.arrowHovered]: w }),
                          }),
                      ],
                  });
        }, [t, M, u, b, R, L, S, w]),
        z = (0, l.useCallback)(
            (e, t) => {
                let a = u === t;
                return (0, n.jsx)(
                    "div",
                    {
                        className: i()(
                            _.paginationItem,
                            a ? _.selectedStorePaginationItem : _.unselectedStorePaginationItem,
                        ),
                        children: (0, n.jsx)("img", {
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
        (0, l.useEffect)(
            () => (
                h.S.subscribe(C.CkL.CAROUSEL_PREV, R),
                h.S.subscribe(C.CkL.CAROUSEL_NEXT, L),
                () => {
                    h.S.unsubscribe(C.CkL.CAROUSEL_PREV, R), h.S.unsubscribe(C.CkL.CAROUSEL_NEXT, L);
                }
            ),
            [R, L],
        ),
        (0, n.jsxs)(d.Z, {
            pauseOnHover: !0,
            onInterval: W,
            interval: c,
            className: a,
            disable: x || k || r,
            children: [
                Q(),
                (0, n.jsx)("div", {
                    className: _.pagination,
                    children: (0, n.jsx)(m.ZP, {
                        renderItem: z,
                        scrollToPadding: 40,
                        items: t,
                        selectedIndex: u,
                        onSetItem: E,
                        paginationContainerClass: _.scroller,
                        align: m.ZP.Align.CENTER,
                    }),
                }),
            ],
        })
    );
});
