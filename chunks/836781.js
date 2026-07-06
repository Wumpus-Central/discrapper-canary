"use strict";
n.d(t, { A: () => W, Z: () => j });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(548411),
    l = n(554830),
    u = n(930125),
    c = n(338717),
    d = n(282108),
    _ = n(776231),
    h = n(302031),
    f = n(644447),
    E = n(625494),
    p = n(515718),
    m = n(700331),
    g = n(454290),
    A = n(536763),
    I = n(452282),
    T = n(967758),
    S = n(358731),
    N = n(158816);
let C = r.memo(function (e) {
    let { items: t, currentIndex: n, children: s } = e,
        o = t[n],
        l = t.length > 1,
        u = (0, T.A)(l, { width: o.width, height: o.height }),
        [c, d] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return d((e) => e + 1);
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, I.U3)(n - 1, t.length)],
                    i = t[(0, I.U3)(n + 1, t.length)];
                j(e, !0), t.length > 2 && j(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(S.Ay, {
            mode: S.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(N.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: u.width > 0 && u.height > 0 && s(u.width, u.height) },
                        o.url,
                    ),
                }),
        })
    );
});
var y = n(331322),
    O = n(87221),
    R = n(689175),
    v = n(939249),
    b = n(775602),
    L = n(607470),
    D = n(619517),
    w = n(154872),
    P = n(838541),
    M = n(375708),
    x = n(656633);
function U(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let k = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, f.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, w.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(L.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == r
          ? null
          : (0, d.qo)({ type: u.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(y.B, {
                  align: "center",
                  justify: "center",
                  className: x.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(O.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(D.Ay, {
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
function G(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: s, className: o, enabledContentHarmTypeFlags: l } = e,
        u = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(U(n));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({ node: e, animate: !b.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(x.IL, o),
            children: (0, i.jsx)(R.Ch, {
                orientation: "horizontal",
                className: a()(x.nV, o),
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let o = r === n,
                        u = o ? M.t["qv/U5V"] : M.t.zviMAG;
                    return (0, i.jsx)(
                        v.D,
                        {
                            id: U(r),
                            className: a()(x.Qq, { [x.AD]: !o, [x.$1]: 0 === r, [x.HV]: r === t.length - 1 }),
                            "aria-label": M.intl.formatToPlainString(u, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => s(r),
                            children: (0, i.jsx)(k, { item: e, enabledContentHarmTypeFlags: l }),
                        },
                        r,
                    );
                }),
            }),
        })
    );
}
var V = n(597351),
    F = n(652215),
    B = n(420165);
function H(e) {
    let { children: t, isObscured: n, src: s } = e,
        [o, l] = r.useState(!1),
        u = r.useCallback(() => {
            l((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(h.Bs.Provider, {
              value: o,
              children: (0, i.jsx)(
                  h.Ay,
                  {
                      type: h.Ay.Types.ATTACHMENT,
                      reason: c.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) => (0, i.jsx)("div", { className: a()(B.JT, { [B.Qr]: e }), children: t(e) }),
                  },
                  s,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function j(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, p.eJ)(e)) return void (0, _.yt)(e.url);
    let n = (0, f.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, A.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function W(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: s = 0,
            enabledContentHarmTypeFlags: c = 0,
            shouldHideMediaOptions: _ = !1,
        } = e,
        [h, f] = r.useState(s),
        p = r.useRef(s),
        { zoomed: A, setZoomed: I } = (0, g.Q)(),
        T = r.useCallback(
            (e) => {
                var i;
                f((e = ((e % (i = t.length)) + i) % i)), (p.current = e), n?.(e), I(!1);
            },
            [n, t, I],
        );
    r.useEffect(() => {
        function e() {
            return T(p.current + 1);
        }
        function t() {
            return T(p.current - 1);
        }
        return (
            E._.subscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
            E._.subscribe(F.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                E._.unsubscribe(F.jej.MODAL_CAROUSEL_NEXT, e), E._.unsubscribe(F.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [T, I]);
    let N = t[h],
        y = (0, d.qo)({ type: u.D.GenericMedia, media: N }, c),
        O = _
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => m.l.markActionPerformed(m.N.CONTEXT_MENU_OPENED),
        R = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(S.Ay, {
                children: (e) =>
                    R
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(V.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), E._.dispatch(F.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Z,
                                      tooltip: M.intl.string(M.t.vgfxaA),
                                      className: a()(B.vi, e),
                                  }),
                                  (0, i.jsx)(V.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), E._.dispatch(F.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: l.K,
                                      tooltip: M.intl.string(M.t.XiOHRX),
                                      className: a()(B.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(C, {
                items: t,
                currentIndex: h,
                children: (e, t) =>
                    (0, i.jsx)(H, {
                        isObscured: !A && y,
                        src: N.url,
                        children: (n) =>
                            (0, i.jsx)(w.Ay, { media: N, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: O }),
                    }),
            }),
            R &&
                (0, i.jsx)(S.Ay, {
                    children: (e) =>
                        (0, i.jsx)(G, {
                            items: t,
                            currentIndex: h,
                            onGalleryItemClick: T,
                            className: e,
                            enabledContentHarmTypeFlags: c,
                        }),
                }),
        ],
    });
}
