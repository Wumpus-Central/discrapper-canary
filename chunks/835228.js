n.d(t, { o: () => C }), n(323874), n(14289), n(35956);
var r = n(477900),
    l = n(582128),
    i = n(503698),
    s = n.n(i),
    a = n(727522),
    u = n(132500),
    o = n(440454),
    c = n(484697),
    d = n(363195),
    f = n(625494),
    m = n(851907),
    A = n(435558),
    h = n(17928),
    E = n(192308),
    p = n(267102),
    j = n(186111),
    N = n(712687),
    x = n(652215),
    M = n(775602);
let O = (0, A.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    _ = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var I = n(333007),
    b = n(866665),
    v = n(955418),
    L = n(524565);
function T(e) {
    let { iframeId: t } = e,
        n = l.useSyncExternalStore(v.SV, v.NO);
    if ((l.useEffect(() => () => (0, v.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let i = (0, c.fl)(t);
    return null == i ? null : I.createPortal((0, r.jsx)(g, { tooltip: n, iframe: i }), i.ownerDocument.body);
}
function g(e) {
    let { tooltip: t, iframe: n } = e,
        [, i] = l.useReducer((e) => e + 1, 0);
    l.useLayoutEffect(() => {
        i();
    }, []);
    let s = n.getBoundingClientRect(),
        a = s.left + Math.min(Math.max(t.x, 0), s.width),
        u = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(b.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${a},${u}`,
        children: (0, r.jsx)("span", { className: L.Y, style: { left: a, top: u } }),
    });
}
var R = n(809685),
    w = n(360469),
    S = n(2771);
function y(e) {
    let {
            url: t,
            className: n,
            style: i,
            shouldRefocus: s,
            queryParams: A,
            allowPopups: I = !1,
            referrerPolicy: b = "origin",
            onLoad: L,
            onIframeMount: g,
            onIframeUnmount: S,
        } = e,
        y = (0, m.xi)({}),
        C = (0, a.useMemoOne)(() => (0, u.A)(), [t]),
        D = l.useRef(null),
        H = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = (0, h.bG)([M.Ay], () => M.Ay.keyboardModeEnabled),
                i = (function () {
                    let e = (0, E.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, h.bG)([N.A], () => N.A.isOpen()),
                        n = (0, h.bG)([j.A], () => j.A.hasLayers()),
                        [r, i] = l.useState(!1),
                        s = (0, p.aL)();
                    return (
                        l.useEffect(() => {
                            function e() {
                                i(!0);
                            }
                            function t() {
                                i(!1);
                            }
                            return (
                                s.subscribe(x.jej.POPOUT_SHOW, e),
                                s.subscribe(x.jej.POPOUT_HIDE, t),
                                () => {
                                    s.unsubscribe(x.jej.POPOUT_SHOW, e), s.unsubscribe(x.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [s]),
                        e || t || r || n
                    );
                })(),
                [s, a] = l.useState(!1),
                u = (0, p.aL)();
            return (
                l.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        i && (u.dispatch(x.jej.POPOUT_CLOSE), f._.dispatch(x.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, i, t, u]),
                l.useEffect(() => {
                    if (r || !s || !t) return;
                    let { current: l } = e,
                        a = i;
                    function u(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || a || O(e);
                        }, 100);
                    }
                    return (
                        l?.addEventListener("focusout", u),
                        n.document.activeElement?.tagName === "IFRAME" || a || l?.focus(),
                        () => {
                            l?.removeEventListener("focusout", u), (a = !0);
                        }
                    );
                }, [t, s, r, e, n, i]),
                a
            );
        })(D, s, null == y ? window : y),
        P = { ...A, frame_id: C, platform: w.vu.DESKTOP },
        [k, U] = l.useState(!1),
        F = d.A.theme,
        W = { ...i };
    F === x.NJ8.LIGHT ? (W.colorScheme = "light") : (W.colorScheme = "dark");
    let $ = l.useCallback(
            (e) => {
                ((D.current = e), null == e)
                    ? (0, c.$9)(C)
                    : ((0, c.M7)(C, e), null != e.contentWindow && (0, c.Yt)(e.contentWindow, C));
            },
            [C],
        ),
        G = l.useRef(null);
    return (
        l.useEffect(() => () => (0, R.ir)(C), [C]),
        !(function (e) {
            let {
                    onIframeMount: t,
                    onIframeUnmount: n,
                    isNewIframe: r = !0,
                    isIframeRetiring: i = !0,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = l.useRef(t),
                a = l.useRef(n),
                u = l.useRef(r),
                o = l.useRef(i);
            l.useEffect(() => {
                (s.current = t), (a.current = n), (u.current = r), (o.current = i);
            }),
                l.useEffect(
                    () => (
                        u.current && (f._.dispatch(x.jej.IFRAME_MOUNT, { id: e }), s.current?.(e)),
                        () => {
                            o.current && (f._.dispatch(x.jej.IFRAME_UNMOUNT, { id: e }), a.current?.(e));
                        }
                    ),
                    [e],
                );
        })(C, { onIframeMount: g, onIframeUnmount: S }),
        l.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                U(t);
            }
            return (
                f._.subscribe(x.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    f._.unsubscribe(x.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        k && (W.pointerEvents = "none"),
        null != t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("iframe", {
                          ref: $,
                          style: W,
                          allow: "autoplay; encrypted-media",
                          referrerPolicy: b,
                          onLoad: function (e) {
                              let n = e.target;
                              G.current === C && ((0, v.ny)(C), (0, R.ir)(C)),
                                  (G.current = C),
                                  null != n.contentWindow && n.contentWindow.postMessage([o.A.HELLO, P], t ?? ""),
                                  H(!0),
                                  L?.(n);
                          },
                          sandbox: (function (e) {
                              let { allowPopups: t } = e,
                                  n = _;
                              return t && (n = [..._, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                          })({ allowPopups: I }),
                          className: n,
                          src: `${t}?${new URLSearchParams(P)}`,
                      }),
                      (0, r.jsx)(T, { iframeId: C }),
                  ],
              })
            : null
    );
}
function C(e) {
    let { onLoad: t } = e,
        [n, i] = l.useState(!1),
        a = l.useCallback(
            (e) => {
                i(!0), t?.(e);
            },
            [t],
        );
    return (0, r.jsxs)("div", {
        className: S.Qf,
        children: [
            !n && (0, r.jsx)("div", { className: s()(S.Qf, S.SL) }),
            (0, r.jsx)("div", {
                className: s()(S.Qf, n ? void 0 : S.Ar),
                children: (0, r.jsx)(y, { ...e, onLoad: a }),
            }),
        ],
    });
}
