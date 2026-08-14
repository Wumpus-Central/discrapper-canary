n.d(t, { A: () => z, Z: () => G });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    s = n(548411),
    o = n(554830),
    u = n(930125),
    d = n(338717),
    h = n(282108),
    c = n(776231),
    m = n(302031),
    g = n(644447),
    p = n(625494),
    x = n(515718),
    f = n(700331),
    y = n(454290),
    A = n(536763),
    E = n(267102),
    I = n(452282),
    j = n(967758),
    v = n(358731),
    C = n(142248);
let M = r.memo(function (e) {
    let { items: t, currentIndex: n, children: l } = e,
        s = t[n],
        o = t.length > 1,
        u = (0, E._o)(),
        d = (0, j.A)(o, { width: s.width, height: s.height }, u),
        [h, c] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return c((e) => e + 1);
            }
            return u.addEventListener("resize", e), () => u.removeEventListener("resize", e);
        }, [u]),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, I.U3)(n - 1, t.length)],
                    i = t[(0, I.U3)(n + 1, t.length)];
                G(e, !0), t.length > 2 && G(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(v.Ay, {
            mode: v.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(C.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: d.width > 0 && d.height > 0 && l(d.width, d.height) },
                        s.url,
                    ),
                }),
        })
    );
});
var N = n(331322),
    w = n(87221),
    O = n(689175),
    S = n(939249),
    _ = n(775602),
    V = n(607470),
    D = n(619517),
    b = n(154872),
    T = n(838541),
    L = n(375708),
    P = n(165377);
function U(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let R = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, b.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(V.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == r
          ? null
          : (0, h.qo)({ type: u.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(N.B, {
                  align: "center",
                  justify: "center",
                  className: P.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(w.D, { size: "sm", color: "white" }),
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
                  mediaLayoutType: T.dG.MOSAIC,
              });
});
function k(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: l, className: s, enabledContentHarmTypeFlags: o } = e,
        u = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(U(n));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({ node: e, animate: !_.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(P.IL, s),
            children: (0, i.jsx)(O.Ch, {
                orientation: "horizontal",
                className: a()(P.nV, s),
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let s = r === n,
                        u = s ? L.t["qv/U5V"] : L.t.zviMAG;
                    return (0, i.jsx)(
                        S.D,
                        {
                            id: U(r),
                            className: a()(P.Qq, { [P.AD]: !s, [P.$1]: 0 === r, [P.HV]: r === t.length - 1 }),
                            "aria-label": L.intl.formatToPlainString(u, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => l(r),
                            children: (0, i.jsx)(R, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        r,
                    );
                }),
            }),
        })
    );
}
var F = n(597351),
    H = n(652215),
    W = n(189645);
function X(e) {
    let { children: t, isObscured: n, src: l } = e,
        [s, o] = r.useState(!1),
        u = r.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: s,
              children: (0, i.jsx)(
                  m.Ay,
                  {
                      type: m.Ay.Types.ATTACHMENT,
                      reason: d.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: u,
                      children: (e) => (0, i.jsx)("div", { className: a()(W.JT, { [W.Qr]: e }), children: t(e) }),
                  },
                  l,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function G(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, x.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, A.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function z(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: l = 0,
            enabledContentHarmTypeFlags: d = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [m, g] = r.useState(l),
        x = r.useRef(l),
        { zoomed: A, setZoomed: E } = (0, y.Q)(),
        I = r.useCallback(
            (e) => {
                var i;
                g((e = ((e % (i = t.length)) + i) % i)), (x.current = e), n?.(e), E(!1);
            },
            [n, t, E],
        );
    r.useEffect(() => {
        function e() {
            return I(x.current + 1);
        }
        function t() {
            return I(x.current - 1);
        }
        return (
            p._.subscribe(H.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(H.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(H.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(H.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [I, E]);
    let j = t[m],
        C = (0, h.qo)({ type: u.D.GenericMedia, media: j }, d),
        N = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        w = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Ay, {
                children: (e) =>
                    w
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Z,
                                      tooltip: L.intl.string(L.t.vgfxaA),
                                      className: a()(W.vi, e),
                                  }),
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: L.intl.string(L.t.XiOHRX),
                                      className: a()(W.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(M, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(X, {
                        isObscured: !A && C,
                        src: j.url,
                        children: (n) =>
                            (0, i.jsx)(b.Ay, { media: j, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: N }),
                    }),
            }),
            w &&
                (0, i.jsx)(v.Ay, {
                    children: (e) =>
                        (0, i.jsx)(k, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: I,
                            className: e,
                            enabledContentHarmTypeFlags: d,
                        }),
                }),
        ],
    });
}
