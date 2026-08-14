"use strict";
n.d(t, { o: () => L }), n(323874), n(14289), n(35956);
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(727522),
    o = n(132500),
    d = n(440454),
    c = n(484697),
    u = n(363195),
    _ = n(625494),
    E = n(851907),
    A = n(435558),
    h = n(17928),
    I = n(192308),
    f = n(267102),
    p = n(186111),
    T = n(712687),
    m = n(652215),
    g = n(775602);
let S = (0, A.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    N = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var C = n(360469),
    R = n(2771);
function O(e) {
    let {
            url: t,
            className: n,
            style: a,
            shouldRefocus: s,
            queryParams: A,
            allowPopups: R = !1,
            referrerPolicy: O = "origin",
            onLoad: L,
            onIframeMount: D,
            onIframeUnmount: y,
        } = e,
        v = (0, E.xi)({}),
        b = (0, l.useMemoOne)(() => (0, o.A)(), [t]),
        M = r.useRef(null),
        P = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                i = (0, h.bG)([g.Ay], () => g.Ay.keyboardModeEnabled),
                a = (function () {
                    let e = (0, I.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, h.bG)([T.A], () => T.A.isOpen()),
                        n = (0, h.bG)([p.A], () => p.A.hasLayers()),
                        [i, a] = r.useState(!1),
                        s = (0, f.aL)();
                    return (
                        r.useEffect(() => {
                            function e() {
                                a(!0);
                            }
                            function t() {
                                a(!1);
                            }
                            return (
                                s.subscribe(m.jej.POPOUT_SHOW, e),
                                s.subscribe(m.jej.POPOUT_HIDE, t),
                                () => {
                                    s.unsubscribe(m.jej.POPOUT_SHOW, e), s.unsubscribe(m.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [s]),
                        e || t || i || n
                    );
                })(),
                [s, l] = r.useState(!1),
                o = (0, f.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        a && (o.dispatch(m.jej.POPOUT_CLOSE), _._.dispatch(m.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, a, t, o]),
                r.useEffect(() => {
                    if (i || !s || !t) return;
                    let { current: r } = e,
                        l = a;
                    function o(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || S(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", o),
                        n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
                        () => {
                            r?.removeEventListener("focusout", o), (l = !0);
                        }
                    );
                }, [t, s, i, e, n, a]),
                l
            );
        })(M, s, null == v ? window : v),
        U = { ...A, frame_id: b, platform: C.vu.DESKTOP },
        [w, G] = r.useState(!1),
        x = u.A.theme,
        k = { ...a };
    x === m.NJ8.LIGHT ? (k.colorScheme = "light") : (k.colorScheme = "dark");
    let F = r.useCallback(
        (e) => {
            (M.current = e), e?.contentWindow != null && (0, c.Y)(e.contentWindow, b);
        },
        [b],
    );
    return (
        !(function (e) {
            let {
                    onIframeMount: t,
                    onIframeUnmount: n,
                    isNewIframe: i = !0,
                    isIframeRetiring: a = !0,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                s = r.useRef(t),
                l = r.useRef(n),
                o = r.useRef(i),
                d = r.useRef(a);
            r.useEffect(() => {
                (s.current = t), (l.current = n), (o.current = i), (d.current = a);
            }),
                r.useEffect(
                    () => (
                        o.current && (_._.dispatch(m.jej.IFRAME_MOUNT, { id: e }), s.current?.(e)),
                        () => {
                            d.current && (_._.dispatch(m.jej.IFRAME_UNMOUNT, { id: e }), l.current?.(e));
                        }
                    ),
                    [e],
                );
        })(b, { onIframeMount: D, onIframeUnmount: y }),
        r.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                G(t);
            }
            return (
                _._.subscribe(m.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    _._.unsubscribe(m.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        w && (k.pointerEvents = "none"),
        null != t
            ? (0, i.jsx)("iframe", {
                  ref: F,
                  style: k,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: O,
                  onLoad: function (e) {
                      let n = e.target;
                      null != n.contentWindow && n.contentWindow.postMessage([d.A.HELLO, U], t ?? ""), P(!0), L?.(n);
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = N;
                      return t && (n = [...N, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: R }),
                  className: n,
                  src: `${t}?${new URLSearchParams(U)}`,
              })
            : null
    );
}
function L(e) {
    let { onLoad: t } = e,
        [n, a] = r.useState(!1),
        l = r.useCallback(
            (e) => {
                a(!0), t?.(e);
            },
            [t],
        );
    return (0, i.jsxs)("div", {
        className: R.Qf,
        children: [
            !n && (0, i.jsx)("div", { className: s()(R.Qf, R.SL) }),
            (0, i.jsx)("div", {
                className: s()(R.Qf, n ? void 0 : R.Ar),
                children: (0, i.jsx)(O, { ...e, onLoad: l }),
            }),
        ],
    });
}
