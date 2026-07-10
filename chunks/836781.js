"use strict";
n.d(t, { A: () => W, Z: () => j });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(548411),
    o = n(554830),
    d = n(930125),
    c = n(338717),
    u = n(282108),
    _ = n(776231),
    E = n(302031),
    A = n(644447),
    h = n(625494),
    I = n(515718),
    f = n(700331),
    p = n(454290),
    T = n(536763),
    m = n(452282),
    g = n(967758),
    S = n(358731),
    N = n(264736);
let C = r.memo(function (e) {
    let { items: t, currentIndex: n, children: a } = e,
        l = t[n],
        o = t.length > 1,
        d = (0, g.A)(o, { width: l.width, height: l.height }),
        [c, u] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return u((e) => e + 1);
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, m.U3)(n - 1, t.length)],
                    i = t[(0, m.U3)(n + 1, t.length)];
                j(e, !0), t.length > 2 && j(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(S.Ay, {
            mode: S.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: s()(N.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: d.width > 0 && d.height > 0 && a(d.width, d.height) },
                        l.url,
                    ),
                }),
        })
    );
});
var R = n(331322),
    O = n(87221),
    L = n(689175),
    D = n(939249),
    y = n(775602),
    v = n(607470),
    b = n(619517),
    M = n(154872),
    P = n(838541),
    U = n(375708),
    w = n(957689);
function G(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let x = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, A.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, M.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(v.A, {
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
                  className: w.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(O.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(b.Ay, {
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
                  mediaLayoutType: P.dG.MOSAIC,
              });
});
function k(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: a, className: l, enabledContentHarmTypeFlags: o } = e,
        d = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(G(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !y.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: s()(w.IL, l),
            children: (0, i.jsx)(L.Ch, {
                orientation: "horizontal",
                className: s()(w.nV, l),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let l = r === n,
                        d = l ? U.t["qv/U5V"] : U.t.zviMAG;
                    return (0, i.jsx)(
                        D.D,
                        {
                            id: G(r),
                            className: s()(w.Qq, { [w.AD]: !l, [w.$1]: 0 === r, [w.HV]: r === t.length - 1 }),
                            "aria-label": U.intl.formatToPlainString(d, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => a(r),
                            children: (0, i.jsx)(x, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        r,
                    );
                }),
            }),
        })
    );
}
var F = n(597351),
    V = n(652215),
    B = n(607173);
function H(e) {
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
                      children: (e) => (0, i.jsx)("div", { className: s()(B.JT, { [B.Qr]: e }), children: t(e) }),
                  },
                  a,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function j(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, I.eJ)(e)) return void (0, _.yt)(e.url);
    let n = (0, A.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, T.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function W(e) {
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
            h._.subscribe(V.jej.MODAL_CAROUSEL_NEXT, e),
            h._.subscribe(V.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                h._.unsubscribe(V.jej.MODAL_CAROUSEL_NEXT, e), h._.unsubscribe(V.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [g, m]);
    let N = t[E],
        R = (0, u.qo)({ type: d.D.GenericMedia, media: N }, c),
        O = _
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        L = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.Ay, {
                children: (e) =>
                    L
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(V.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: l.Z,
                                      tooltip: U.intl.string(U.t.vgfxaA),
                                      className: s()(B.vi, e),
                                  }),
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), h._.dispatch(V.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: U.intl.string(U.t.XiOHRX),
                                      className: s()(B.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(C, {
                items: t,
                currentIndex: E,
                children: (e, t) =>
                    (0, i.jsx)(H, {
                        isObscured: !T && R,
                        src: N.url,
                        children: (n) =>
                            (0, i.jsx)(M.Ay, { media: N, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: O }),
                    }),
            }),
            L &&
                (0, i.jsx)(S.Ay, {
                    children: (e) =>
                        (0, i.jsx)(k, {
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
