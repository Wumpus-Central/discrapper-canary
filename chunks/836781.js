n.d(t, { A: () => G, Z: () => X });
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(548411),
    o = n(554830),
    u = n(930125),
    d = n(338717),
    h = n(282108),
    c = n(597098),
    m = n(302031),
    g = n(644447),
    p = n(625494),
    x = n(515718),
    f = n(700331),
    y = n(454290),
    A = n(536763),
    w = n(452282),
    E = n(967758),
    I = n(358731),
    j = n(158816);
let C = r.memo(function (e) {
    let { items: t, currentIndex: n, children: l } = e,
        s = t[n],
        o = t.length > 1,
        u = (0, E.A)(o, { width: s.width, height: s.height }),
        [d, h] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return h((e) => e + 1);
            }
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, w.U3)(n - 1, t.length)],
                    i = t[(0, w.U3)(n + 1, t.length)];
                X(e, !0), t.length > 2 && X(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(I.Ay, {
            mode: I.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(j.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: u.width > 0 && u.height > 0 && l(u.width, u.height) },
                        s.url,
                    ),
                }),
        })
    );
});
var v = n(331322),
    M = n(87221),
    N = n(689175),
    O = n(939249),
    S = n(775602),
    V = n(607470),
    _ = n(619517),
    D = n(154872),
    b = n(838541),
    T = n(375708),
    L = n(656633);
function P(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let U = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, D.VZ)(e.proxyUrl);
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
            ? (0, i.jsx)(v.B, {
                  align: "center",
                  justify: "center",
                  className: L.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(M.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(_.Ay, {
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
                  mediaLayoutType: b.dG.MOSAIC,
              });
});
function R(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: l, className: s, enabledContentHarmTypeFlags: o } = e,
        u = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(P(n));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({ node: e, animate: !S.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(L.IL, s),
            children: (0, i.jsx)(N.Ch, {
                orientation: "horizontal",
                className: a()(L.nV, s),
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let s = r === n,
                        u = s ? T.t["qv/U5V"] : T.t.zviMAG;
                    return (0, i.jsx)(
                        O.D,
                        {
                            id: P(r),
                            className: a()(L.Qq, { [L.AD]: !s, [L.$1]: 0 === r, [L.HV]: r === t.length - 1 }),
                            "aria-label": T.intl.formatToPlainString(u, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => l(r),
                            children: (0, i.jsx)(U, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        r,
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
                      children: (e) => (0, i.jsx)("div", { className: a()(H.JT, { [H.Qr]: e }), children: t(e) }),
                  },
                  l,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function X(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, x.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, A.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function G(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: l = 0,
            enabledContentHarmTypeFlags: d = 0,
            shouldHideMediaOptions: c = !1,
        } = e,
        [m, g] = r.useState(l),
        x = r.useRef(l),
        { zoomed: A, setZoomed: w } = (0, y.Q)(),
        E = r.useCallback(
            (e) => {
                var i;
                g((e = ((e % (i = t.length)) + i) % i)), (x.current = e), n?.(e), w(!1);
            },
            [n, t, w],
        );
    r.useEffect(() => {
        function e() {
            return E(x.current + 1);
        }
        function t() {
            return E(x.current - 1);
        }
        return (
            p._.subscribe(F.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(F.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(F.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(F.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [E, w]);
    let j = t[m],
        v = (0, h.qo)({ type: u.D.GenericMedia, media: j }, d),
        M = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => f.l.markActionPerformed(f.N.CONTEXT_MENU_OPENED),
        N = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.Ay, {
                children: (e) =>
                    N
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(F.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Z,
                                      tooltip: T.intl.string(T.t.vgfxaA),
                                      className: a()(H.vi, e),
                                  }),
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(F.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: T.intl.string(T.t.XiOHRX),
                                      className: a()(H.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(C, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(W, {
                        isObscured: !A && v,
                        src: j.url,
                        children: (n) =>
                            (0, i.jsx)(D.Ay, { media: j, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: M }),
                    }),
            }),
            N &&
                (0, i.jsx)(I.Ay, {
                    children: (e) =>
                        (0, i.jsx)(R, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: E,
                            className: e,
                            enabledContentHarmTypeFlags: d,
                        }),
                }),
        ],
    });
}
