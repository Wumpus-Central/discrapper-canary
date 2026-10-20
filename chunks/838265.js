(n.d(t, { o: () => K }), n(323874), n(14289), n(35956));
var r = n(477900),
    u = n(582128),
    l = n(503698),
    o = n.n(l),
    s = n(727522),
    i = n(134559),
    c = n(17928),
    a = n(765548),
    f = n(97157),
    d = n(132500),
    m = n(440454),
    p = n(484697),
    E = n(363195),
    h = n(625494),
    j = n(96858),
    b = n(851907),
    O = n(435558),
    w = n(192308),
    x = n(267102),
    S = n(186111),
    v = n(712687),
    R = n(652215),
    y = n(775602);
let A = (0, O.debounce)((e) => {
        setTimeout(() => {
            e.current?.focus();
        }, 0);
    }, 50),
    L = ["allow-pointer-lock", "allow-scripts", "allow-same-origin", "allow-forms"];
var g = n(333007),
    M = n(866665),
    T = n(955418),
    I = n(533550);
function N(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(T.SV, T.NO);
    if ((u.useEffect(() => () => (0, T.ny)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : g.createPortal((0, r.jsx)(P, { tooltip: n, iframe: l }), l.ownerDocument.body);
}
function P(e) {
    let { tooltip: t, iframe: n } = e,
        [, l] = u.useReducer((e) => e + 1, 0);
    u.useLayoutEffect(() => {
        l();
    }, []);
    let o = n.getBoundingClientRect(),
        s = o.left + Math.min(Math.max(t.x, 0), o.width),
        i = o.top + Math.min(Math.max(t.y, 0), o.height);
    return (0, r.jsx)(M.m, {
        text: t.text,
        keyboardShortcut: t.shortcut,
        position: t.position ?? "top",
        align: t.align ?? "center",
        forceOpen: !0,
        positionKey: `${s},${i}`,
        children: (0, r.jsx)("span", { className: I.Y, style: { left: s, top: i } }),
    });
}
var _ = n(673953),
    U = n(342296),
    C = n(777977),
    H = n(504115);
function k(e) {
    let { iframeId: t } = e,
        n = u.useSyncExternalStore(C.$P, C.Eh);
    if ((u.useEffect(() => () => (0, C.OR)(t), [t]), null == n || n.iframeId !== t)) return null;
    let l = (0, p.fl)(t);
    return null == l ? null : g.createPortal((0, r.jsx)(D, { popout: n, iframe: l }), l.ownerDocument.body);
}
function D(e) {
    let { popout: t, iframe: n } = e,
        l = u.useRef(null),
        [, o] = u.useReducer((e) => e + 1, 0);
    (u.useLayoutEffect(() => {
        o();
    }, []),
        u.useEffect(() => {
            let e = n.ownerDocument.defaultView;
            if (null != e) return (e.addEventListener("blur", r), () => e.removeEventListener("blur", r));
            function r() {
                n.ownerDocument.activeElement === n && (0, C.OR)(t.iframeId);
            }
        }, [n, t.iframeId]));
    let s = n.getBoundingClientRect(),
        i = s.left + Math.min(Math.max(t.x, 0), s.width),
        c = s.top + Math.min(Math.max(t.y, 0), s.height);
    return (0, r.jsx)(U.A, {
        userId: t.userId,
        targetElementRef: l,
        shouldShow: !0,
        position: "right",
        align: "top",
        appContext: (0, _.cH)(n),
        positionKey: `${i},${c}`,
        clickTrap: !0,
        onRequestClose: () => (0, C.OR)(t.iframeId),
        children: () => (0, r.jsx)("span", { ref: l, className: H.Y, style: { left: i, top: c } }),
    });
}
var F = n(809685),
    $ = n(429582),
    G = n(698398);
let W = "autoplay; encrypted-media";
function B(e) {
    let {
            url: t,
            className: n,
            style: l,
            shouldRefocus: o,
            queryParams: O,
            allowPopups: g = !1,
            referrerPolicy: M = "origin",
            onLoad: I,
            onIframeMount: P,
            onIframeUnmount: _,
            onGuestReload: U,
            contextSource: H,
            nativeView: D = !1,
        } = e,
        G = (0, b.xi)({}),
        B = (0, s.useMemoOne)(() => (0, d.A)(), [t]),
        K = u.useRef(null),
        [V, Y] = u.useState(!1),
        Q = D && !V && (0, $.H9)(),
        X = (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t,
                l = (0, c.bG)([y.Ay], () => y.Ay.keyboardModeEnabled),
                o = (function () {
                    let e = (0, w.useModalsStore)(
                            (e) =>
                                !Object.entries(e).every((e) => {
                                    let [t, n] = e;
                                    return 0 === n.length;
                                }),
                        ),
                        t = (0, c.bG)([v.A], () => v.A.isOpen()),
                        n = (0, c.bG)([S.A], () => S.A.hasLayers()),
                        [r, l] = u.useState(!1),
                        o = (0, x.aL)();
                    return (
                        u.useEffect(() => {
                            function e() {
                                l(!0);
                            }
                            function t() {
                                l(!1);
                            }
                            return (
                                o.subscribe(R.jej.POPOUT_SHOW, e),
                                o.subscribe(R.jej.POPOUT_HIDE, t),
                                () => {
                                    (o.unsubscribe(R.jej.POPOUT_SHOW, e), o.unsubscribe(R.jej.POPOUT_HIDE, t));
                                }
                            );
                        }, [o]),
                        e || t || r || n
                    );
                })(),
                [s, i] = u.useState(!1),
                a = (0, x.aL)();
            return (
                u.useEffect(() => {
                    if (r) return (n.addEventListener("blur", e), () => n.removeEventListener("blur", e));
                    function e() {
                        o && (a.dispatch(R.jej.POPOUT_CLOSE), h._.dispatch(R.jej.CONTEXT_MENU_CLOSE));
                    }
                }, [n, o, r, a]),
                u.useEffect(() => {
                    if (l || !s || !t) return;
                    let { current: r } = e,
                        u = o;
                    function i(t) {
                        let n = t.relatedTarget;
                        setTimeout(() => {
                            (null != n && ("BUTTON" !== n.tagName || n.hasAttribute("aria-expanded"))) || u || A(e);
                        }, 100);
                    }
                    return (
                        r?.addEventListener("focusout", i),
                        n.document.activeElement?.tagName === "IFRAME" || u || r?.focus(),
                        () => {
                            (r?.removeEventListener("focusout", i), (u = !0));
                        }
                    );
                }, [t, s, l, e, n, o]),
                i
            );
        })(K, o && !Q, null == G ? window : G, o),
        q = (0, j.qw)("EmbedIFrame"),
        J = (0, f.A)(t, q),
        Z = "ready" === J.status ? (J.policy.thirdPartyFrames ? void 0 : "object-src 'none'") : void 0,
        z = { ...O, frame_id: B, platform: i.v.DESKTOP, discord_shim: `${q}` },
        ee = null != t ? `${t}?${new URLSearchParams(z)}` : null,
        et = (function (e) {
            let { allowPopups: t } = e,
                n = L;
            return (t && (n = [...L, "allow-popups", "allow-popups-to-escape-sandbox"]), n.join(" "));
        })({ allowPopups: g }),
        [en, er] = u.useState(!1),
        eu = (0, c.bG)([E.A], () => E.A.theme),
        el = { ...l };
    null == el.colorScheme && (el.colorScheme = eu === R.NJ8.LIGHT ? "light" : "dark");
    let eo = u.useRef(null);
    function es(e) {
        (eo.current === B && ((0, T.ny)(B), (0, F.ir)(B), (0, C.OR)(B), U?.(B)),
            (eo.current = B),
            null != e.contentWindow && e.contentWindow.postMessage([m.A.HELLO, z], t ?? ""),
            X(!0),
            I?.(e));
    }
    let ei = u.useRef(null),
        { colorScheme: ec } = el,
        ea = (0, a.A)(() =>
            null != ee ? { src: ee, sandbox: et, allow: W, referrerPolicy: M, colorScheme: ec, csp: Z } : null,
        ),
        ef = (0, a.A)(es),
        ed = u.useCallback(
            (e) => {
                if (((K.current = e), null == e)) {
                    (ei.current?.destroy(), (ei.current = null), (0, p.$9)(B));
                    return;
                }
                let t = ea();
                (Q &&
                    null != t &&
                    ((ei.current = (0, $.xW)(
                        e,
                        B,
                        t,
                        () => ef(e),
                        () => Y(!0),
                    )),
                    null == ei.current && Y(!0)),
                    (0, p.M7)(B, e),
                    null != e.contentWindow && (0, p.Yt)(e.contentWindow, B));
            },
            [B, Q, ea, ef],
        );
    return (u.useEffect(() => () => (0, F.ir)(B), [B]),
    !(function (e, t) {
        let {
                onIframeMount: n,
                onIframeUnmount: r,
                isNewIframe: l = !0,
                isIframeRetiring: o = !0,
                contextSource: s,
            } = t,
            i = u.useRef(n),
            c = u.useRef(r),
            a = u.useRef(l),
            f = u.useRef(o),
            d = u.useRef(s);
        (u.useEffect(() => {
            ((i.current = n), (c.current = r), (a.current = l), (f.current = o), (d.current = s));
        }),
            u.useEffect(
                () => (
                    a.current &&
                        (h._.dispatch(R.jej.IFRAME_MOUNT, { id: e, data: { contextSource: d.current } }),
                        i.current?.(e)),
                    () => {
                        f.current && (h._.dispatch(R.jej.IFRAME_UNMOUNT, { id: e }), c.current?.(e));
                    }
                ),
                [e],
            ));
    })(B, { onIframeMount: P, onIframeUnmount: _, contextSource: (0, s.useMemoOne)(() => H, [t]) }),
    u.useEffect(() => {
        function e(e) {
            let { resizing: t } = e;
            er(t);
        }
        return (
            h._.subscribe(R.jej.MANUAL_IFRAME_RESIZING, e),
            () => {
                h._.unsubscribe(R.jej.MANUAL_IFRAME_RESIZING, e);
            }
        );
    }, []),
    u.useEffect(() => {
        ei.current?.setInputSuspended(en);
    }, [en, ed]),
    u.useEffect(() => {
        null != ec && ei.current?.setColorScheme(ec);
    }, [ec, ed]),
    en && (el.pointerEvents = "none"),
    "loading" === J.status || "failed" === J.status)
        ? null
        : null != ee
          ? (0, r.jsxs)(r.Fragment, {
                children: [
                    Q
                        ? (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ed,
                                  style: { ...el, colorScheme: "normal", pointerEvents: "none" },
                                  sandbox: "",
                                  className: n,
                              },
                              "native-view",
                          )
                        : (0, r.jsx)(
                              "iframe",
                              {
                                  ref: ed,
                                  csp: Z,
                                  style: el,
                                  allow: W,
                                  referrerPolicy: M,
                                  onLoad: (e) => es(e.currentTarget),
                                  sandbox: et,
                                  className: n,
                                  src: ee,
                              },
                              "page",
                          ),
                    (0, r.jsx)(N, { iframeId: B }),
                    (0, r.jsx)(k, { iframeId: B }),
                ],
            })
          : null;
}
function K(e) {
    let { transparentWhileLoading: t = !1, ...n } = e,
        { onLoad: l } = n,
        [s, i] = u.useState(!1),
        c = u.useCallback(
            (e) => {
                (i(!0), l?.(e));
            },
            [l],
        );
    return (0, r.jsxs)("div", {
        className: G.Qf,
        children: [
            !s && (0, r.jsx)("div", { className: o()(G.Qf, !0 !== t ? G.SL : void 0) }),
            (0, r.jsx)("div", {
                className: o()(G.Qf, s ? void 0 : G.Ar),
                children: (0, r.jsx)(B, { ...n, onLoad: c }),
            }),
        ],
    });
}
