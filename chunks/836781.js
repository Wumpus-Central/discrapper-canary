n.d(t, { A: () => X, Z: () => G });
var i = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    o = n(548411),
    s = n(554830),
    d = n(930125),
    u = n(338717),
    h = n(282108),
    c = n(776231),
    m = n(302031),
    p = n(644447),
    g = n(625494),
    x = n(515718),
    A = n(700331),
    f = n(454290),
    y = n(536763),
    w = n(452282),
    C = n(967758),
    I = n(358731),
    v = n(158816);
let j = l.memo(function (e) {
    let { items: t, currentIndex: n, children: r } = e,
        o = t[n],
        s = t.length > 1,
        d = (0, C.A)(s, { width: o.width, height: o.height }),
        [u, h] = l.useState(0);
    return (
        l.useEffect(() => {
            let e = () => h((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        l.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, w.U3)(n - 1, t.length)],
                    i = t[(0, w.U3)(n + 1, t.length)];
                G(e, !0), t.length > 2 && G(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(I.Ay, {
            mode: I.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(v.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: d.width > 0 && d.height > 0 && r(d.width, d.height) },
                        o.url,
                    ),
                }),
        })
    );
});
var E = n(331322),
    M = n(87221),
    S = n(689175),
    _ = n(939249),
    N = n(775602),
    O = n(607470),
    b = n(619517),
    P = n(154872),
    V = n(838541),
    T = n(985018),
    D = n(656633);
function L(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let U = l.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        l = (function (e) {
            if ("IMAGE" === e.type) return (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, P.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == l && "VIDEO" === t.type
        ? (0, i.jsx)(O.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == l
          ? null
          : (0, h.qo)({ type: d.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(E.B, {
                  align: "center",
                  justify: "center",
                  className: D.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(M.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(b.Ay, {
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
function R(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: r, className: o, enabledContentHarmTypeFlags: s } = e,
        d = l.useRef(null);
    return (
        l.useLayoutEffect(() => {
            let e = document.getElementById(L(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !N.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(D.IL, o),
            children: (0, i.jsx)(S.Ch, {
                orientation: "horizontal",
                className: a()(D.nV, o),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, l) => {
                    let o = l === n,
                        d = o ? T.t["qv/U5V"] : T.t.zviMAG;
                    return (0, i.jsx)(
                        _.D,
                        {
                            id: L(l),
                            className: a()(D.Qq, { [D.AD]: !o, [D.$1]: 0 === l, [D.HV]: l === t.length - 1 }),
                            "aria-label": T.intl.formatToPlainString(d, { pageNumber: l + 1, totalPages: t.length }),
                            onClick: () => r(l),
                            children: (0, i.jsx)(U, { item: e, enabledContentHarmTypeFlags: s }),
                        },
                        l,
                    );
                }),
            }),
        })
    );
}
var k = n(597351),
    F = n(652215),
    H = n(420165);
function W(e) {
    let { children: t, isObscured: n, src: r } = e,
        [o, s] = l.useState(!1),
        d = l.useCallback(() => {
            s((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: o,
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
    if (!(0, x.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, p.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, y.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function X(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: r = 0,
            enabledContentHarmTypeFlags: u = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [m, p] = l.useState(r),
        x = l.useRef(r),
        { zoomed: y, setZoomed: w } = (0, f.Q)(),
        C = l.useCallback(
            (e) => {
                var i;
                p((e = ((e % (i = t.length)) + i) % i)), (x.current = e), n?.(e), w(!1);
            },
            [n, t, w],
        );
    l.useEffect(() => {
        let e = () => C(x.current + 1),
            t = () => C(x.current - 1);
        return (
            g._.subscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
            g._.subscribe(F.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                g._.unsubscribe(F.jej.MODAL_CAROUSEL_NEXT, e), g._.unsubscribe(F.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [C, w]);
    let v = t[m],
        E = (0, h.qo)({ type: d.D.GenericMedia, media: v }, u),
        M = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => A.l.markActionPerformed(A.N.CONTEXT_MENU_OPENED),
        S = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.Ay, {
                children: (e) =>
                    S
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(F.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: o.Z,
                                      tooltip: T.intl.string(T.t.vgfxaA),
                                      className: a()(H.vi, e),
                                  }),
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), g._.dispatch(F.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: s.K,
                                      tooltip: T.intl.string(T.t.XiOHRX),
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
                        src: v.url,
                        children: (n) =>
                            (0, i.jsx)(P.Ay, { media: v, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: M }),
                    }),
            }),
            S &&
                (0, i.jsx)(I.Ay, {
                    children: (e) =>
                        (0, i.jsx)(R, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: C,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
