"use strict";
n.d(t, { A: () => Y, Z: () => W });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(548411),
    o = n(554830),
    d = n(930125),
    c = n(338717),
    u = n(282108),
    _ = n(597098),
    E = n(302031),
    A = n(644447),
    h = n(625494),
    I = n(515718),
    f = n(700331),
    p = n(454290),
    T = n(536763),
    m = n(267102),
    g = n(452282),
    S = n(967758),
    N = n(358731),
    C = n(158816);
let O = r.memo(function (e) {
    let { items: t, currentIndex: n, children: a } = e,
        l = t[n],
        o = t.length > 1,
        d = (0, m._o)(),
        c = (0, S.A)(o, { width: l.width, height: l.height }, d),
        [u, _] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return _((e) => e + 1);
            }
            return d.addEventListener("resize", e), () => d.removeEventListener("resize", e);
        }, [d]),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, g.U3)(n - 1, t.length)],
                    i = t[(0, g.U3)(n + 1, t.length)];
                W(e, !0), t.length > 2 && W(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(N.Ay, {
            mode: N.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: s()(C.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: c.width > 0 && c.height > 0 && a(c.width, c.height) },
                        l.url,
                    ),
                }),
        })
    );
});
var R = n(331322),
    L = n(87221),
    y = n(689175),
    D = n(939249),
    v = n(775602),
    b = n(607470),
    M = n(619517),
    P = n(154872),
    U = n(838541),
    w = n(375708),
    G = n(656633);
function x(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let k = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, A.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, P.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(b.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == r
          ? null
          : (0, u.qo)({ type: d.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(R.B, {
                  align: "center",
                  justify: "center",
                  className: G.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(L.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(M.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: r,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: U.dG.MOSAIC,
              });
});
function F(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: l, enabledContentHarmTypeFlags: o } = e,
        d = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(x(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !v.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: s()(G.IL, l),
            children: (0, i.jsx)(y.Ch, {
                orientation: "horizontal",
                className: s()(G.nV, l),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let l = r === n,
                        d = l ? w.t["qv/U5V"] : w.t.zviMAG;
                    return (0, i.jsx)(
                        D.D,
                        {
                            id: x(r),
                            className: s()(G.Qq, { [G.AD]: !l, [G.$1]: 0 === r, [G.HV]: r === t.length - 1 }),
                            "aria-label": w.intl.formatToPlainString(d, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => a(r),
                            children: (0, i.jsx)(k, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        r,
                    );
                }),
            }),
        })
    );
}
var V = n(597351),
    B = n(652215),
    H = n(420165);
function j(e) {
    let { children: t, isObscured: n, src: a } = e,
        [l, o] = r.useState(!1),
        d = r.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(E.Bs.Provider, {
              value: l,
              children: (0, i.jsx)(
                  E.Ay,
                  {
                      type: E.Ay.Types.ATTACHMENT,
                      reason: c.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: d,
                      children: (e) => (0, i.jsx)("div", { className: s()(H.JT, { [H.Qr]: e }), children: t(e) }),
                  },
                  a,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function W(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, I.eJ)(e)) return void (0, _.yt)(e.url);
    let n = (0, A.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, T.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function Y(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: a = 0,
            enabledContentHarmTypeFlags: c = 0,
            shouldHideMediaOptions: _ = !1,
        } = e,
        [E, A] = r.useState(a),
        I = r.useRef(a),
        { zoomed: T, setZoomed: m } = (0, p.Q)(),
        g = r.useCallback(
            (e) => {
                var i;
                A((e = ((e % (i = t.length)) + i) % i)), (I.current = e), n?.(e), m(!1);
            },
            [n, t, m],
        );
    r.useEffect(() => {
        function e() {
            return g(I.current + 1);
        }
        function t() {
            return g(I.current - 1);
        }
        return (
            h._.subscribe(B.jej.MODAL_CAROUSEL_NEXT, e),
            h._.subscribe(B.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                h._.unsubscribe(B.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(B.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [g, m]);
    let S = t[E],
        C = (0, u.qo)({ type: d.D.GenericMedia, media: S }, c),
        R = _
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        L = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(N.Ay, {
                children: (e) =>
                    L
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(B.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: l.Z,
                                      tooltip: w.intl.string(w.t.vgfxaA),
                                      className: s()(H.vi, e),
                                  }),
                                  (0, i.jsx)(V.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(B.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: w.intl.string(w.t.XiOHRX),
                                      className: s()(H.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(O, {
                items: t,
                currentIndex: E,
                children: (e, t) =>
                    (0, i.jsx)(j, {
                        isObscured: !T && C,
                        src: S.url,
                        children: (n) =>
                            (0, i.jsx)(P.Ay, { media: S, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: R }),
                    }),
            }),
            L &&
                (0, i.jsx)(N.Ay, {
                    children: (e) =>
                        (0, i.jsx)(F, {
                            items: t,
                            currentIndex: E,
                            onGalleryItemClick: g,
                            className: e,
                            enabledContentHarmTypeFlags: c,
                        }),
                }),
        ],
    });
}
