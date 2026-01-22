l.d(t, {
    A: () => O,
    B: () => E,
}),
    l(896048);
var n = l(627968),
    a = l(64700),
    r = l(310784),
    s = l.n(r),
    c = l(503698),
    i = l.n(c),
    o = l(615300),
    u = l(397927),
    d = l(456412),
    b = l(654107),
    h = l(871751),
    f = l(133296),
    p = l(848752),
    m = l(452282),
    g = l(619517),
    C = l(652176),
    x = l(203982),
    j = l(995393),
    k = l(652215),
    _ = l(863876);
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = l[t]),
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
function v() {
    var e, t;
    let l =
        ((e = ["grayscale(", ")"]),
        t || (t = e.slice(0)),
        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(t) } })));
    return (
        (v = function () {
            return l;
        }),
        l
    );
}
let E = 747,
    I = (e) => {
        var t, l;
        return (0, C.$o)(
            ((t = A({}, e)),
            (l = l =
                {
                    className: _.tN,
                    mediaPlayerClassName: _.yf,
                }),
            Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l))
                : (function (e, t) {
                      var l = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                          var n = Object.getOwnPropertySymbols(e);
                          l.push.apply(l, n);
                      }
                      return l;
                  })(Object(l)).forEach(function (e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e));
                  }),
            t),
        );
    },
    S = (e) => (0, n.jsx)(g.Ay, A({}, e));
function y(e) {
    let t = "videoThumbnailSrc" in e ? e.videoThumbnailSrc : e.src,
        [l, n] = (0, b.rh)(t, "#000000"),
        r = a.useMemo(() => {
            let e = s()(l).darken(1);
            return "radial-gradient(circle, ".concat(e.alpha(0.2).hex(), " 0%, transparent 100%)");
        }, [l]);
    return null != t && "#000000" !== l ? r : void 0;
}
function N(e) {
    let { item: t, onPlay: l, onEnded: a, onClick: r, playable: s, isMuted: c } = e,
        i = y(t),
        o = (0, n.jsx)(
            h.rr,
            {
                href: null,
                thumbnail: {
                    url: t.videoThumbnailSrc,
                    width: E,
                    height: 560,
                },
                video: {
                    url: t.src,
                    proxyURL: t.src,
                    width: E,
                    height: 560,
                },
                provider: void 0,
                allowFullScreen: !0,
                maxHeight: 560,
                maxWidth: E,
                onPlay: l,
                onEnded: a,
                playable: s,
                className: _.Ki,
                volume: 1,
                autoMute: c,
                autoPlay: s,
                renderVideoComponent: I,
                renderImageComponent: S,
                renderLinkComponent: C.bU,
            },
            c ? "player-muted" : "player-unmuted",
        ),
        d = { background: i };
    return s
        ? (0, n.jsx)("div", {
              className: _.AU,
              style: d,
              children: o,
          })
        : (0, n.jsx)(u.DUT, {
              className: _.AU,
              onClick: r,
              style: d,
              children: o,
          });
}
function T(e) {
    let { item: t, setHasInteracted: l, onSetItem: a, isCurrentItem: r, itemIndex: s } = e,
        c = { background: y(t) };
    return r
        ? (0, n.jsx)(u.DUT, {
              onClick: () => l(!0),
              className: _.AU,
              style: c,
              children: (0, n.jsx)("img", {
                  src: t.src,
                  alt: "",
                  className: _.NP,
              }),
          })
        : (0, n.jsx)(u.DUT, {
              onClick: () => a(s),
              className: _.AU,
              style: c,
              children: (0, n.jsx)("img", {
                  alt: "",
                  className: _.tv,
                  src: t.src,
                  draggable: !1,
              }),
          });
}
let O = (0, d.A)((e) => {
    let {
            items: t,
            className: l,
            paused: r = !1,
            autoplayInterval: s = 8000,
            onItemChange: c,
            isMuted: u = !0,
            onTrackClick: d,
        } = e,
        b = (0, a.useRef)(0),
        [h, g] = (0, a.useState)(0),
        [C, A] = (0, a.useState)(0),
        I = (0, a.useRef)(0),
        S = (0, a.useRef)(t.length),
        [y, O] = (0, a.useState)(!0),
        [U, P] = (0, a.useState)(!1),
        [R, L] = (0, a.useState)(!1),
        [D, w] = (0, a.useState)(!1),
        [M, Y] = (0, a.useState)(!1),
        B = (0, a.useCallback)(
            (e, l) => {
                var n;
                let a = null == (n = t[e]) ? void 0 : n.backgroundSrc,
                    r = l.interpolate({
                        inputRange: [0, 1],
                        outputRange: [1, 0],
                        extrapolate: o.A.Extrapolate.CLAMP,
                    });
                return {
                    opacity: l.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0.3, 1],
                        extrapolate: o.A.Extrapolate.CLAMP,
                    }),
                    filter: o.A.template(v(), r),
                    backgroundImage: null != a ? "url(".concat(a, ")") : void 0,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                };
            },
            [t],
        ),
        H = (0, a.useCallback)(function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            P(!1), L(t);
            let l = S.current,
                n = (0, m.U3)(I.current, l),
                a = (0, m.U3)(e, l);
            (I.current = a),
                A(a),
                b.current++,
                g(b.current),
                O(1 === Math.abs(a - n) || (a === l - 1 && 0 === n) || (0 === a && n === l - 1));
        }, []),
        X = (0, a.useCallback)(() => {
            H(I.current + 1, !1);
        }, [H]),
        q = (0, a.useCallback)(() => {
            null == d || d(j.Jq.CAROUSEL_NEXT), H(I.current + 1);
        }, [H, d]),
        F = (0, a.useCallback)(() => {
            null == d || d(j.Jq.CAROUSEL_PREV), H(I.current - 1);
        }, [H, d]),
        G = (0, a.useCallback)((e) => {
            P(!0), L(!e);
        }, []),
        J = (0, a.useCallback)(() => {
            R || X();
        }, [R, X]),
        V = (0, a.useCallback)((e) => {
            let t = I.current;
            e < t ? w(!0) : e > t && Y(!0);
        }, []),
        z = (0, a.useCallback)(() => {
            w(!1), Y(!1);
        }, []),
        W = (0, a.useCallback)(
            (e, t, l) =>
                (0, n.jsx)(T, {
                    item: e,
                    itemIndex: t,
                    isCurrentItem: l,
                    onSetItem: (e) => {
                        null == d || d(j.Jq.CAROUSEL_ITEM), H(e);
                    },
                    setHasInteracted: L,
                }),
            [H, d],
        ),
        $ = (0, a.useCallback)(
            (e, l, a) => {
                let r = l === (0, m.U3)(C, t.length);
                return (0, n.jsx)(o.A.div, {
                    className: i()(_.AS, { [_.Xt]: r }),
                    style: null != a ? B(l, a) : null,
                    onMouseEnter: r ? null : () => V(l),
                    onMouseLeave: r ? null : z,
                    children:
                        "video" === e.type
                            ? (0, n.jsx)(
                                  N,
                                  {
                                      item: e,
                                      onPlay: G,
                                      onEnded: J,
                                      playable: r,
                                      isMuted: u,
                                      onClick: () => {
                                          null == d || d(j.Jq.CAROUSEL_ITEM), H(l);
                                      },
                                  },
                                  h,
                              )
                            : W(e, l, r),
                });
            },
            [C, t.length, B, V, z, G, J, H, W, u, d, h],
        ),
        K = (0, a.useCallback)(() => {
            let e = (0, n.jsx)(m.Ay, {
                className: _.Dk,
                items: t,
                itemSize: {
                    width: E,
                    margin: 0,
                },
                renderItem: $,
                currentIndex: C,
                animate: y,
                edgeItems: 2,
            });
            return t.length <= 1
                ? e
                : (0, n.jsxs)("div", {
                      className: _.HY,
                      children: [
                          e,
                          (0, n.jsx)(p.Q8, {
                              onClick: F,
                              className: i()(_.UE, { [_.h_]: D }),
                          }),
                          (0, n.jsx)(p.Oj, {
                              onClick: q,
                              className: i()(_.UE, { [_.h_]: M }),
                          }),
                      ],
                  });
        }, [t, $, C, y, F, q, D, M]),
        Q = (0, a.useCallback)(
            (e, t) => {
                let l = C === t;
                return (0, n.jsx)(
                    "div",
                    {
                        className: i()(_.Yw, l ? _.sM : _.N7),
                        children: (0, n.jsx)("img", {
                            alt: "",
                            className: _.Pr,
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
            [C],
        );
    (0, a.useEffect)(
        () => (
            x._.subscribe(k.jej.CAROUSEL_PREV, F),
            x._.subscribe(k.jej.CAROUSEL_NEXT, q),
            () => {
                x._.unsubscribe(k.jej.CAROUSEL_PREV, F), x._.unsubscribe(k.jej.CAROUSEL_NEXT, q);
            }
        ),
        [F, q],
    ),
        (0, a.useEffect)(() => {
            S.current = t.length;
        }, [t]),
        (0, a.useEffect)(() => {
            null == c || c(t[C], C);
        }, [C, t, c]);
    let Z = (0, a.useCallback)(
        (e) => {
            null == d || d(j.Jq.CAROUSEL_ITEM), H(e);
        },
        [H, d],
    );
    return (0, n.jsxs)(f.A, {
        pauseOnHover: !0,
        onInterval: X,
        interval: s,
        className: l,
        disable: U || R || r,
        children: [
            K(),
            (0, n.jsx)("div", {
                className: _.X$,
                children: (0, n.jsx)(p.Ay, {
                    renderItem: Q,
                    scrollToPadding: 40,
                    items: t,
                    selectedIndex: C,
                    onSetItem: Z,
                    paginationContainerClass: _.XG,
                    align: p.Ay.Align.CENTER,
                }),
            }),
        ],
    });
});
