n.d(t, { o: () => L }), n(323874), n(14289), n(35956);
var s = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
    l = n(727522),
    c = n(132500),
    o = n(440454),
    u = n(484697),
    d = n(363195),
    A = n(625494),
    f = n(851907),
    m = n(435558),
    E = n(17928),
    N = n(192308),
    h = n(267102),
    j = n(186111),
    _ = n(712687),
    p = n(652215),
    O = n(775602);
let I = (0, m.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    M = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var b = n(360469),
    x = n(2771);
function v(e) {
    let {
            url: t,
            className: n,
            style: a,
            shouldRefocus: i,
            queryParams: m,
            allowPopups: x = !1,
            referrerPolicy: v = "origin",
            onLoad: L,
            onIframeMount: T,
            onIframeUnmount: R,
        } = e,
        g = (0, f.xi)({}),
        w = (0, l.useMemoOne)(() => (0, c.A)(), [t]),
        S = r.useRef(null),
        C = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                s = (0, E.bG)([O.Ay], () => O.Ay.keyboardModeEnabled),
                a = (function () {
                    let e = (0, N.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, E.bG)([_.A], () => _.A.isOpen()),
                        n = (0, E.bG)([j.A], () => j.A.hasLayers()),
                        [s, a] = r.useState(!1),
                        i = (0, h.aL)();
                    return (
                        r.useEffect(() => {
                            function e() {
                                a(!0);
                            }
                            function t() {
                                a(!1);
                            }
                            return (
                                i.subscribe(p.jej.POPOUT_SHOW, e),
                                i.subscribe(p.jej.POPOUT_HIDE, t),
                                () => {
                                    i.unsubscribe(p.jej.POPOUT_SHOW, e), i.unsubscribe(p.jej.POPOUT_HIDE, t);
                                }
                            );
                        }, [i]),
                        e || t || s || n
                    );
                })(),
                [i, l] = r.useState(!1),
                c = (0, h.aL)();
            return (
                r.useEffect(() => {
                    if (t) return n.addEventListener("blur", e), () => n.removeEventListener("blur", e);
                    function e() {
                        a && (c.dispatch(p.jej.POPOUT_CLOSE), A._.dispatch(p.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, a, t, c]),
                r.useEffect(() => {
                    if (s || !i || !t) return;
                    let { current: r } = e,
                        l = a;
                    function c(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || l || I(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", c),
                        n.document.activeElement?.tagName === "IFRAME" || l || r?.focus(),
                        () => {
                            r?.removeEventListener("focusout", c), (l = !0);
                        }
                    );
                }, [t, i, s, e, n, a]),
                l
            );
        })(S, i, null == g ? window : g),
        D = { ...m, frame_id: w, platform: b.vu.DESKTOP },
        [H, P] = r.useState(!1),
        U = d.A.theme,
        k = { ...a };
    U === p.NJ8.LIGHT ? (k.colorScheme = "light") : (k.colorScheme = "dark");
    let y = r.useCallback(
        (e) => {
            (S.current = e), e?.contentWindow != null && (0, u.Y)(e.contentWindow, w);
        },
        [w],
    );
    return (
        !(function (e) {
            let {
                    onIframeMount: t,
                    onIframeUnmount: n,
                    isNewIframe: s = !0,
                    isIframeRetiring: a = !0,
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = r.useRef(t),
                l = r.useRef(n),
                c = r.useRef(s),
                o = r.useRef(a);
            r.useEffect(() => {
                (i.current = t), (l.current = n), (c.current = s), (o.current = a);
            }),
                r.useEffect(
                    () => (
                        c.current && (A._.dispatch(p.jej.IFRAME_MOUNT, { id: e }), i.current?.(e)),
                        () => {
                            o.current && (A._.dispatch(p.jej.IFRAME_UNMOUNT, { id: e }), l.current?.(e));
                        }
                    ),
                    [e],
                );
        })(w, { onIframeMount: T, onIframeUnmount: R }),
        r.useEffect(() => {
            function e(e) {
                let { resizing: t } = e;
                P(t);
            }
            return (
                A._.subscribe(p.jej.MANUAL_IFRAME_RESIZING, e),
                () => {
                    A._.unsubscribe(p.jej.MANUAL_IFRAME_RESIZING, e);
                }
            );
        }, []),
        H && (k.pointerEvents = "none"),
        null != t
            ? (0, s.jsx)("iframe", {
                  ref: y,
                  style: k,
                  allow: "autoplay; encrypted-media",
                  referrerPolicy: v,
                  onLoad: function (e) {
                      let n = e.target;
                      null != n.contentWindow && n.contentWindow.postMessage([o.A.HELLO, D], t ?? ""), C(!0), L?.(n);
                  },
                  sandbox: (function (e) {
                      let { allowPopups: t } = e,
                          n = M;
                      return t && (n = [...M, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" ");
                  })({ allowPopups: x }),
                  className: n,
                  src: `${t}?${new URLSearchParams(D)}`,
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
    return (0, s.jsxs)("div", {
        className: x.Qf,
        children: [
            !n && (0, s.jsx)("div", { className: i()(x.Qf, x.SL) }),
            (0, s.jsx)("div", {
                className: i()(x.Qf, n ? void 0 : x.Ar),
                children: (0, s.jsx)(v, { ...e, onLoad: l }),
            }),
        ],
    });
}
