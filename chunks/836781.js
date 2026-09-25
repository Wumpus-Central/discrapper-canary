n.d(t, { A: () => z, Z: () => X });
var i = n(477900),
    r = n(582128),
    l = n(503698),
    a = n.n(l),
    o = n(548411),
    s = n(554830),
    u = n(930125),
    d = n(338717),
    c = n(282108),
    h = n(776231),
    m = n(302031),
    g = n(644447),
    p = n(625494),
    f = n(515718),
    x = n(700331),
    y = n(454290),
    A = n(536763),
    E = n(267102),
    j = n(452282),
    v = n(967758),
    C = n(358731),
    I = n(827045);
let M = r.memo(function (e) {
    let { items: t, currentIndex: n, children: l } = e,
        o = t[n],
        s = t.length > 1,
        u = (0, E._o)(),
        d = (0, v.A)(s, { width: o.width, height: o.height }, u),
        [c, h] = r.useState(0);
    return (
        r.useEffect(() => {
            function e() {
                return h((e) => e + 1);
            }
            return (u.addEventListener("resize", e), () => u.removeEventListener("resize", e));
        }, [u]),
        r.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, j.U3)(n - 1, t.length)],
                    i = t[(0, j.U3)(n + 1, t.length)];
                (X(e, !0), t.length > 2 && X(i, !0));
            }
        }, [n, t]),
        (0, i.jsx)(C.Ay, {
            mode: C.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: a()(I.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: d.width > 0 && d.height > 0 && l(d.width, d.height) },
                        o.url,
                    ),
                }),
        })
    );
});
var S = n(331322),
    N = n(87221),
    w = n(689175),
    V = n(939249),
    P = n(775602),
    O = n(607470),
    b = n(619517),
    T = n(591818),
    _ = n(838541),
    D = n(375708),
    R = n(280462);
function U(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let L = r.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        r = (function (e) {
            if ("IMAGE" === e.type) return (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, T.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == r && "VIDEO" === t.type
        ? (0, i.jsx)(O.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == r
          ? null
          : (0, c.qo)({ type: u.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(S.B, {
                  align: "center",
                  justify: "center",
                  className: R.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(N.D, { size: "sm", color: "white" }),
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
                  mediaLayoutType: _.dG.MOSAIC,
              });
});
function k(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: l, className: o, enabledContentHarmTypeFlags: s } = e,
        u = r.useRef(null);
    return (
        r.useLayoutEffect(() => {
            let e = document.getElementById(U(n));
            null != u.current &&
                null != e &&
                u.current.scrollIntoViewNode({ node: e, animate: !P.Ay.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: a()(R.IL, o),
            children: (0, i.jsx)(w.Ch, {
                orientation: "horizontal",
                className: a()(R.nV, o),
                ref: u,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, r) => {
                    let o = r === n,
                        u = o ? D.t["qv/U5V"] : D.t.zviMAG;
                    return (0, i.jsx)(
                        V.D,
                        {
                            id: U(r),
                            className: a()(R.Qq, { [R.AD]: !o, [R.$1]: 0 === r, [R.HV]: r === t.length - 1 }),
                            "aria-label": D.intl.formatToPlainString(u, { pageNumber: r + 1, totalPages: t.length }),
                            onClick: () => l(r),
                            children: (0, i.jsx)(L, { item: e, enabledContentHarmTypeFlags: s }),
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
    W = n(418450);
function G(e) {
    let { children: t, isObscured: n, src: l } = e,
        [o, s] = r.useState(!1),
        u = r.useCallback(() => {
            s((e) => !e);
        }, []);
    return n
        ? (0, i.jsx)(m.Bs.Provider, {
              value: o,
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
function X(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, f.eJ)(e)) return void (0, h.yt)(e.url);
    let n = (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
    (0, A.A)({ src: n, width: e.width, height: e.height, hasMultiple: t, options: e });
}
function z(e) {
    let {
            items: t,
            onIndexChange: n,
            startIndex: l = 0,
            enabledContentHarmTypeFlags: d = 0,
            shouldHideMediaOptions: h = !1,
        } = e,
        [m, g] = r.useState(l),
        f = r.useRef(l),
        { zoomed: A, setZoomed: E } = (0, y.Q)(),
        j = r.useCallback(
            (e) => {
                var i;
                (g((e = ((e % (i = t.length)) + i) % i)), (f.current = e), n?.(e), E(!1));
            },
            [n, t, E],
        );
    r.useEffect(() => {
        function e() {
            return j(f.current + 1);
        }
        function t() {
            return j(f.current - 1);
        }
        return (
            p._.subscribe(H.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(H.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                (p._.unsubscribe(H.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(H.jej.MODAL_CAROUSEL_PREV, t));
            }
        );
    }, [j, E]);
    let v = t[m],
        I = (0, c.qo)({ type: u.D.GenericMedia, media: v }, d),
        S = h
            ? (e) => {
                  (e.stopPropagation(), e.preventDefault());
              }
            : () => x.l.markActionPerformed(x.N.CONTEXT_MENU_OPENED),
        N = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.Ay, {
                children: (e) =>
                    N
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_PREV));
                                      },
                                      icon: o.Z,
                                      tooltip: D.intl.string(D.t.vgfxaA),
                                      className: a()(W.vi, e),
                                  }),
                                  (0, i.jsx)(F.A, {
                                      onClick: (e) => {
                                          (e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_NEXT));
                                      },
                                      icon: s.K,
                                      tooltip: D.intl.string(D.t.XiOHRX),
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
                    (0, i.jsx)(G, {
                        isObscured: !A && I,
                        src: v.url,
                        children: (n) =>
                            (0, i.jsx)(T.Ay, { media: v, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: S }),
                    }),
            }),
            N &&
                (0, i.jsx)(C.Ay, {
                    children: (e) =>
                        (0, i.jsx)(k, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: j,
                            className: e,
                            enabledContentHarmTypeFlags: d,
                        }),
                }),
        ],
    });
}
