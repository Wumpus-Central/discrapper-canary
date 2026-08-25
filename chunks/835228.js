n.d(t, { o: () => C }), n(323874), n(14289), n(35956);
var r = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    l = n(727522),
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
    O = n(775602);
let I = (0, A.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    _ = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var M = n(333007),
    b = n(866665),
    v = n(955418),
    L = n(311169);
function T(e) {
    let { iframeId: t } = e,
        n = s.useSyncExternalStore(v.SV, v.NO);
    if ((s.useEffect(() => () => (0, v.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let i = (0, c.fl)(t);
    return null == i ? null : M.createPortal((0, r.jsx)(R, { tooltip: n, iframe: i }), i.ownerDocument.body);
}
function R(e) {
    let { tooltip: t, iframe: n } = e,
        [, i] = s.useReducer((e) => e + 1, 0);
    s.useLayoutEffect(() => {
        i();
    }, []);
    let a = n.getBoundingClientRect(),
        l = a.left + Math.min(Math.max(t.x, 0), a.width),
        u = a.top + Math.min(Math.max(t.y, 0), a.height);
    return (0, r.jsx)(b.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${l},${u}`,
        children: (0, r.jsx)("span", { className: L.Y, style: { left: l, top: u } }),
    });
}
var g = n(809685),
    S = n(360469),
    w = n(698398);
function y(e) {
    let {
            url: t,
            className: n,
            style: i,
            shouldRefocus: a,
            queryParams: A,
            allowPopups: M = !1,
            referrerPolicy: b = "origin",
            onLoad: L,
            onIframeMount: R,
            onIframeUnmount: w,
            onGuestReload: y,
        } = e,
        C = (0, m.xi)({}),
        D = (0, l.useMemoOne)(() => (0, u.A)(), [t]),
        P = s.useRef(null),
        H = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = (0, h.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
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
                        [r, i] = s.useState(!1),
                        a = (0, p.aL)();
                    return (
                        s.useEffect(() => {
                            function e() {
                                i(!0);
                            }
                            function t() {
                                i(!1);
                            }
                            return (
                                a.subscribe(x.jej.POPOUT_SHOW, e),
                                a.subscribe(x.jej.POPOUT_HIDE, t),
                                () => {
                                    a.unsubscribe(x.jej.POPOUT_SHOW, e), a.unsubscribe(x.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [a]),
                        e || t || r || n
                    );
                })(),
                [a, l] = s.useState(!1),
                u = (0, p.aL)();
            return (
                s.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        i && (u.dispatch(x.jej.POPOUT_CLOSE), f._.dispatch(x.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, i, t, u]),
                s.useEffect(() => {
                    if (r || !a || !t) return;
                    let { current: s } = e,
                        l = i;
                    function u(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || I(e);
                        }, 100);
                    }
                    return (
                        s?.addEventListener("focusout", u),
                        n.document.activeElement?.tagName === "IFRAME" || l || s?.focus(),
                        () => {
                            s?.removeEventListener("focusout", u), (l = !0);
                        }
                    );
                }, [t, a, r, e, n, i]),
                l
            );
        })(P, a, null == C ? window : C),
        U = { ...A, frame_id: D, platform: S.vu.DESKTOP },
        [k, F] = s.useState(!1),
        W = d.A.theme,
        G = { ...i };
    W === x.NJ8.LIGHT ? (G.colorScheme = "light") : (G.colorScheme = "dark");
    let $ = s.useCallback(
            (e) => {
                ((P.current = e), null == e)
                    ? (0, c.$9)(D)
                    : ((0, c.M7)(D, e), null != e.contentWindow && (0, c.Yt)(e.contentWindow, D));
            },
            [D],
        ),
        z = s.useRef(null);
    return (
        s.useEffect(() => () => (0, g.ir)(D), [D]),
        !(function (e) {
            let {
                    onIframeMount: t,
                    onIframeUnmount: n,
                    isNewIframe: r = !0,
                    isIframeRetiring: i = !0,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = s.useRef(t),
                l = s.useRef(n),
                u = s.useRef(r),
                o = s.useRef(i);
            s.useEffect(() => {
                (a.current = t), (l.current = n), (u.current = r), (o.current = i);
            }),
                s.useEffect(
                    () => (
                        u.current && (f._.dispatch(x.jej.IFRAME_MOUNT, { id: e }), a.current?.(e)),
                        () => {
                            o.current && (f._.dispatch(x.jej.IFRAME_UNMOUNT, { id: e }), l.current?.(e));
                        }
                    ),
                    [e],
                );
        })(D, { onIframeMount: R, onIframeUnmount: w }),
        s.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                F(t);
            }
            return (
                f._.subscribe(x.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    f._.unsubscribe(x.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        k && (G.pointerEvents = "none"),
        null != t
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)("iframe", {
                          ref: $,
                          style: G,
                          allow: "autoplay; encrypted-media",
                          referrerPolicy: b,
                          onLoad: function (e) {
                              let n = e.target;
                              z.current === D && ((0, v.ny)(D), (0, g.ir)(D), y?.(D)),
                                  (z.current = D),
                                  null != n.contentWindow && n.contentWindow.postMessage([o.A.HELLO, U], t ?? ""),
                                  H(!0),
                                  L?.(n);
                          },
                          sandbox: (function (e) {
                              let { allowPopups: t } = e,
                                  n = _;
                              return t && (n = [..._, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                          })({ allowPopups: M }),
                          className: n,
                          src: `${t}?${new URLSearchParams(U)}`,
                      }),
                      (0, r.jsx)(T, { iframeId: D }),
                  ],
              })
            : null
    );
}
function C(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: i } = n,
        [l, u] = s.useState(!1),
        o = s.useCallback(
            (e) => {
                u(!0), i?.(e);
            },
            [i],
        );
    return (0, r.jsxs)("div", {
        className: w.Qf,
        children: [
            !l && (0, r.jsx)("div", { className: a()(w.Qf, !0 !== t ? w.SL : void 0) }),
            (0, r.jsx)("div", {
                className: a()(w.Qf, l ? void 0 : w.Ar),
                children: (0, r.jsx)(y, { ...n, onLoad: o }),
            }),
        ],
    });
}
