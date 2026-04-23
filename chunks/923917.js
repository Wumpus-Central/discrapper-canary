"use strict";
n.d(t, { A: () => Z, q: () => q });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    c = n(121894),
    d = n(337836),
    _ = n(43990),
    f = n(825437),
    p = n(311907),
    h = n(192308),
    E = n(231723),
    m = n(187322),
    g = n(638495),
    A = n(252453),
    I = n(318009),
    T = n(92960),
    S = n(14214),
    y = n(775602),
    N = n(697138),
    v = n(933958),
    C = n(793574),
    O = n(688810),
    R = n(590703),
    b = n(681582),
    D = n(573435),
    L = n(71855),
    w = n(203480),
    M = n(670735),
    P = n(549205),
    x = n(750506),
    k = n(267102),
    U = n(666347),
    G = n(97469),
    F = n(975616),
    V = n(611635),
    B = n(723702),
    H = n(677134),
    j = n(837921),
    Y = n(913934),
    W = n(869146),
    K = n(652215),
    $ = n(392164),
    z = n(612802);
function q(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && B.isPlatformEmbedded && !n;
}
class X extends i.Component {
    rootRef = i.createRef();
    _cleanupWindowActionCreators = void 0;
    _combokeys = null;
    static defaultProps = { withTitleBar: !0 };
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, Y.M)(e),
            e.addEventListener("blur", this.handleBlur),
            B.isPlatformEmbedded
                ? t.addEventListener("contextmenu", H.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", H.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                W.A.unmountWindow(this.props.windowKey), B.isPlatformEmbedded && j.Ay.close(this.props.windowKey);
            };
        null != t ? t({ e, unmountWindow: n }) : n();
    };
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme();
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        this.unregisterPopoutGlobalKeybinds(),
            e.removeEventListener("blur", this.handleBlur),
            B.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", H.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", H.contextMenuCallbackWeb),
            (0, c.r)(() => h.useModalsStore.setState((e) => ({ ...e, [E.KX]: [] }))),
            e.removeEventListener("beforeunload", this.beforeUnload);
    }
    updateTitle() {
        let { title: e, guestWindow: t } = this.props,
            n = t.document.querySelector("title");
        null != n && (n.innerText = e);
    }
    updateClientTheme() {
        let { clientThemesCSS: e, guestWindow: t } = this.props,
            n = t.document,
            r = n.head;
        l()(null != r, "Window document head was null");
        let i = r.querySelector(`style[${R.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(R.Vg, "true"), (s.textContent = e), r.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, P.I)(n.documentElement)),
        [S.VT, S.rR, (0, T.LB)(t), ...(this.props.keybinds ?? [])]))
            if (e.comboKeysBindGlobal)
                for (let t of e.binds)
                    this._combokeys.bindGlobal(t, (t, n) => ("function" == typeof e.action && e.action(t, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let {
                forcedColors: e,
                children: t,
                windowKey: n,
                isFullScreen: i,
                withTitleBar: s,
                guestWindow: o,
                clientThemesClassName: l,
                contentClassName: c,
                themeOverride: p,
                titleBarTheme: h,
                hideModals: E = !1,
                appContext: A,
            } = this.props,
            T = q({ withTitleBar: s, isFullScreen: i }),
            S = n === $.f ? U.A : M.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsx)(
                F.e,
                {
                    windowKey: n,
                    themeOverride: p,
                    children: (0, r.jsx)(N.A, {
                        children: (0, r.jsxs)(m.xp, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(Q, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, r.jsxs)(S, {
                                        children: [
                                            (0, r.jsx)(D.Al, {}),
                                            (0, r.jsx)(k.Wr, {
                                                appContext: A ?? K.BRT.POPOUT,
                                                renderWindow: o,
                                                children: (0, r.jsx)(b.l, {
                                                    children: (0, r.jsxs)(x.Yf, {
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: z.SW,
                                                                children: [
                                                                    T &&
                                                                        (0, r.jsx)(_.N, {
                                                                            theme: h,
                                                                            children: (e) =>
                                                                                (0, r.jsx)(L.cq, {
                                                                                    windowKey: n,
                                                                                    className: a()(e, z.uv),
                                                                                }),
                                                                        }),
                                                                    (0, r.jsx)("div", {
                                                                        className: a()(z.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !E && (0, r.jsx)(g.b, {}),
                                                            (0, r.jsx)(I.A, {}),
                                                            (0, r.jsx)(d.P, {}),
                                                            (0, r.jsx)(x.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(f.Ut, {}),
                            ],
                        }),
                    }),
                },
                e,
            ),
        });
    }
}
let Q = i.forwardRef(function (e, t) {
        let { guestWindow: n, className: s, children: o } = e,
            { lang: u, style: c, className: d } = (0, V.xb)();
        return (
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", c);
            }, [n, c]),
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", u);
            }, [n, u]),
            (0, r.jsx)("div", { "data-popout-root": !0, ref: t, className: a()(d, s), children: o })
        );
    }),
    Z = i.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: i } = (0, p.cf)([W.A], () => ({
            guestWindow: W.A.getWindow(e.windowKey),
            isFullScreen: W.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: a } = (0, p.cf)([y.A, v.Ay], () => ({
            forcedColors: y.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: v.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, w.A)(n, !1);
        let { analyticsLocations: o } = (0, O.Ay)(C.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: c } = (0, R.Ay)(),
            d = (0, G.NC)(),
            _ = e.themeOverride ?? d;
        return null == n
            ? null
            : (0, r.jsx)(A.W, {
                  children: (0, r.jsx)(O.f5, {
                      value: o,
                      children: (0, r.jsx)(X, {
                          ref: t,
                          ...e,
                          titleBarTheme: _,
                          guestWindow: n,
                          isFullScreen: i,
                          forcedColors: s,
                          connectedEmbeddedActivity: a,
                          clientThemesClassName: u,
                          clientThemesCSS: c,
                      }),
                  }),
              });
    });
