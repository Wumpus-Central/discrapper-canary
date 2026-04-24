n.d(t, { A: () => X, Z: () => G });
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(548411),
    o = n(554830),
    d = n(930125),
    u = n(338717),
    h = n(282108),
    c = n(776231),
    m = n(302031),
    g = n(644447),
    p = n(625494),
    f = n(515718),
    A = n(700331),
    x = n(454290),
    y = n(536763),
    w = n(452282),
    _ = n(967758),
    E = n(358731),
    C = n(158816);
let b = a.memo(function (e) {
    let { items: t, currentIndex: n, children: r } = e,
        s = t[n],
        o = t.length > 1,
        d = (0, _.A)(o, { width: s.width, height: s.height }),
        [u, h] = a.useState(0);
    return (
        a.useEffect(() => {
            let e = () => h((e) => e + 1);
            return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
        }),
        a.useEffect(() => {
            if (t.length > 1) {
                let e = t[(0, w.U3)(n - 1, t.length)],
                    i = t[(0, w.U3)(n + 1, t.length)];
                G(e, !0), t.length > 2 && G(i, !0);
            }
        }, [n, t]),
        (0, i.jsx)(E.Ay, {
            mode: E.nY.PINNED,
            children: (e) =>
                (0, i.jsx)("div", {
                    className: l()(C.k4, e),
                    children: (0, i.jsx)(
                        "div",
                        { children: d.width > 0 && d.height > 0 && r(d.width, d.height) },
                        s.url,
                    ),
                }),
        })
    );
});
var S = n(331322),
    I = n(87221),
    v = n(689175),
    M = n(939249),
    j = n(775602),
    T = n(607470),
    N = n(619517),
    O = n(154872),
    P = n(838541),
    D = n(985018),
    R = n(656633);
function L(e) {
    return `media-view-scroll-thumbnail-${e}`;
}
let U = a.memo(function (e) {
    let { item: t, enabledContentHarmTypeFlags: n = 0 } = e,
        a = (function (e) {
            if ("IMAGE" === e.type) return (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
            if ("VIDEO" === e.type) {
                if (null != e.poster) return e.poster;
                if (null != e.proxyUrl) return (0, O.VZ)(e.proxyUrl);
            }
            return null;
        })(t);
    return null == a && "VIDEO" === t.type
        ? (0, i.jsx)(T.A, {
              src: `${t.url}#t=1`,
              preload: "metadata",
              muted: !0,
              style: { width: 40, height: 40, objectFit: "cover" },
          })
        : null == a
          ? null
          : (0, h.qo)({ type: d.D.GenericMedia, media: t }, n)
            ? (0, i.jsx)(S.B, {
                  align: "center",
                  justify: "center",
                  className: R.cd,
                  style: { width: 40, height: 40 },
                  children: (0, i.jsx)(I.D, { size: "sm", color: "white" }),
              })
            : (0, i.jsx)(N.Ay, {
                  width: t.width ?? 40,
                  height: t.height ?? 40,
                  maxWidth: 40,
                  maxHeight: 40,
                  useFullWidth: !0,
                  src: a,
                  shouldAnimate: !1,
                  shouldRenderAccessory: !1,
                  srcIsAnimated: t.srcIsAnimated,
                  alt: t.alt,
                  mediaLayoutType: P.dG.MOSAIC,
              });
});
function V(e) {
    let { items: t, currentIndex: n, onGalleryItemClick: r, className: s, enabledContentHarmTypeFlags: o } = e,
        d = a.useRef(null);
    return (
        a.useLayoutEffect(() => {
            let e = document.getElementById(L(n));
            null != d.current &&
                null != e &&
                d.current.scrollIntoViewNode({ node: e, animate: !j.A.useReducedMotion, padding: 20 });
        }, [n]),
        (0, i.jsx)("div", {
            className: l()(R.IL, s),
            children: (0, i.jsx)(v.Ch, {
                orientation: "horizontal",
                className: l()(R.nV, s),
                ref: d,
                onClick: (e) => e.stopPropagation(),
                children: t.map((e, a) => {
                    let s = a === n,
                        d = s ? D.t["qv/U5V"] : D.t.zviMAG;
                    return (0, i.jsx)(
                        M.D,
                        {
                            id: L(a),
                            className: l()(R.Qq, { [R.AD]: !s, [R.$1]: 0 === a, [R.HV]: a === t.length - 1 }),
                            "aria-label": D.intl.formatToPlainString(d, { pageNumber: a + 1, totalPages: t.length }),
                            onClick: () => r(a),
                            children: (0, i.jsx)(U, { item: e, enabledContentHarmTypeFlags: o }),
                        },
                        a,
                    );
                }),
            }),
        })
    );
}
var k = n(597351),
    H = n(652215),
    F = n(420165);
function W(e) {
    let { children: t, isObscured: n, src: r } = e,
        [s, o] = a.useState(!1),
        d = a.useCallback(() => {
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
                      children: (e) => (0, i.jsx)("div", { className: l()(F.JT, { [F.Qr]: e }), children: t(e) }),
                  },
                  r,
              ),
          })
        : (0, i.jsx)(i.Fragment, { children: t(!1) });
}
function G(e, t) {
    if ("IMAGE" !== e.type) return;
    if (!(0, f.eJ)(e)) return void (0, c.yt)(e.url);
    let n = (0, g.E)({ proxyURL: e.proxyUrl, url: e.url });
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
        [m, g] = a.useState(r),
        f = a.useRef(r),
        { zoomed: y, setZoomed: w } = (0, x.Q)(),
        _ = a.useCallback(
            (e) => {
                var i;
                g((e = ((e % (i = t.length)) + i) % i)), (f.current = e), n?.(e), w(!1);
            },
            [n, t, w],
        );
    a.useEffect(() => {
        let e = () => _(f.current + 1),
            t = () => _(f.current - 1);
        return (
            p._.subscribe(H.jej.MODAL_CAROUSEL_NEXT, e),
            p._.subscribe(H.jej.MODAL_CAROUSEL_PREV, t),
            () => {
                p._.unsubscribe(H.jej.MODAL_CAROUSEL_NEXT, e), p._.unsubscribe(H.jej.MODAL_CAROUSEL_PREV, t);
            }
        );
    }, [_, w]);
    let C = t[m],
        S = (0, h.qo)({ type: d.D.GenericMedia, media: C }, u),
        I = c
            ? (e) => {
                  e.stopPropagation(), e.preventDefault();
              }
            : () => A.l.markActionPerformed(A.N.CONTEXT_MENU_OPENED),
        v = t.length > 1;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(E.Ay, {
                children: (e) =>
                    v
                        ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_PREV);
                                      },
                                      icon: s.Z,
                                      tooltip: D.intl.string(D.t.vgfxaA),
                                      className: l()(F.vi, e),
                                  }),
                                  (0, i.jsx)(k.A, {
                                      onClick: (e) => {
                                          e.stopPropagation(), p._.dispatch(H.jej.MODAL_CAROUSEL_NEXT);
                                      },
                                      icon: o.K,
                                      tooltip: D.intl.string(D.t.XiOHRX),
                                      className: l()(F.f8, e),
                                  }),
                              ],
                          })
                        : void 0,
            }),
            (0, i.jsx)(b, {
                items: t,
                currentIndex: m,
                children: (e, t) =>
                    (0, i.jsx)(W, {
                        isObscured: !y && S,
                        src: C.url,
                        children: (n) =>
                            (0, i.jsx)(O.Ay, { media: C, maxWidth: e, maxHeight: t, obscured: n, onContextMenu: I }),
                    }),
            }),
            v &&
                (0, i.jsx)(E.Ay, {
                    children: (e) =>
                        (0, i.jsx)(V, {
                            items: t,
                            currentIndex: m,
                            onGalleryItemClick: _,
                            className: e,
                            enabledContentHarmTypeFlags: u,
                        }),
                }),
        ],
    });
}
