n.d(t, { A: () => X, Z: () => G });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    s = n(548411),
    o = n(554830),
    d = n(930125),
    u = n(338717),
    c = n(282108),
    h = n(776231),
    m = n(302031),
    p = n(644447),
    g = n(625494),
    x = n(515718),
    f = n(700331),
    A = n(454290),
    y = n(536763),
    w = n(452282),
    I = n(967758),
    v = n(358731),
    C = n(158816);
let j = l.memo(function (e) {
    let { items: t, currentIndex: n, children: r } = e,
        s = t[n],
        o = t.length > 1,
        d = (0, I.A)(o, { width: s.width, height: s.height }),
        [u, c] = l.useState(0);
    return (
        l.useEffect(() => {
            let e = () => c((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        l.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, w.U3)(n - 1, t.length)],
                    i = t[(0, w.U3)(n + 1, t.length)];
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
                        { children: d.width > 0 && d.height > 0 && r(d.width, d.height) },
                        s.url,
                    ),
                }),
        })
    );
});
var E = n(331322),
    M = n(87221),
    _ = n(689175),
    S = n(939249),
    N = n(775602),
    b = n(607470),
    O = n(619517),
    T = n(154872),
    V = n(838541),
    P = n(375708),
    D = n(656633);
function k(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let U = l.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        l = (function (e) {
            if ("IMAGE" === e.type) return (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, T.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == l && "VIDEO" === t.type
        ? (0, i.jsx)(b.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == l
          ? null
          : (0, c.qo)({ type: d.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(E.B, {
                  align: "center",
                  justify: "center",
                  className: D.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(M.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(O.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: l,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: V.dG.MOSAIC,
              });
});
function L(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: r, className: s, enabledContentHarmTypeFlags: o } = e,
        d = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = document.getElementById(k(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !N.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(D.IL, s),
            children: (0, i.jsx)(_.Ch, {
                orientation: "horizontal",
                className: a()(D.nV, s),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, l) => {
                    let s = l === n,
                        d = s ? P.t["qv/U5V"] : P.t.zviMAG;
                    return (0, i.jsx)(
                        S.D,
                        {
                            id: k(l),
                            className: a()(D.Qq, { [D.AD]: !s, [D.$1]: 0 === l, [D.HV]: l === t.length - 1 }),
                            "aria-label": P.intl.formatToPlainString(d, { pageNumber: l + 1, totalPages: t.length }),
                            onClick: () => r(l),
                            children: (0, i.jsx)(U, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        l,
                    );
                }),
            }),
        })
    );
}
var R = n(597351),
    F = n(652215),
    H = n(420165);
function W(e) {
    let { children: t, isObscured: n, src: r } = e,
        [s, o] = l.useState(!1),
        d = l.useCallback(() => {
            o((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: s,
              children: (0, i.jsx)(
                  m.Ay,
                  {
                      type: m.Ay.Types.ATTACHMENT,
                      reason: u.Oc.EXPLICIT_CONTENT,
                      obscured: !0,
                      isSingleMosaicItem: !0,
                      onToggleObscurity: d,
                      children: (e) => (0, i.jsx)("div", { className: a()(H.JT, { [H.Qr]: e }), children: t(e) }),
                  },
                  r,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function G(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, x.eJ)(e)) return void (0, h.yt)(e.url);
    let n = (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, y.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function X(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: r = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: h = !1,
        } = e,
        [m, p] = l.useState(r),
        x = l.useRef(r),
        { zoomed: y, setZoomed: w } = (0, A.Q)(),
        I = l.useCallback(
            (e) => {
                var i;
                p((e = ((e % (i = t.length)) + i) % i)), (x.current = e), n?.(e), w(!1);
            },
            [n, t, w],
        );
    l.useEffect(() => {
        let e = () => I(x.current + 1),
            t = () => I(x.current - 1);
        return (
            g._.subscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
            g._.subscribe(F.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                g._.unsubscribe(F.jej.MODAL_CAROUSEL_NEXT, e), g._.unsubscribe(F.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [I, w]);
    let C = t[m],
        E = (0, c.qo)({ type: d.D.GenericMedia, media: C }, u),
        M = h
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        _ = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(v.Ay, {
                children: (e) =>
                    _
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(R.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(F.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Z,
                                      tooltip: P.intl.string(P.t.vgfxaA),
                                      className: a()(H.vi, e),
                                  }),
                                  (0, i.jsx)(R.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(F.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: P.intl.string(P.t.XiOHRX),
                                      className: a()(H.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(j, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(W, {
                        isObscured: !y && E,
                        src: C.url,
                        children: (n) =>
                            (0, i.jsx)(T.Ay, { media: C, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: M }),
                    }),
            }),
            _ &&
                (0, i.jsx)(v.Ay, {
                    children: (e) =>
                        (0, i.jsx)(L, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: I,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
