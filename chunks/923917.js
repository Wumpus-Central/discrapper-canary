"use strict";
n.d(t, { A: () => z, q: () => Y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o),
    u = n(758879),
    c = n(121894),
    d = n(337836),
    _ = n(158954),
    f = n(311907),
    p = n(397927),
    h = n(318009),
    m = n(92960),
    g = n(14214),
    E = n(775602),
    A = n(697138),
    I = n(933958),
    T = n(793574),
    y = n(688810),
    S = n(590703),
    v = n(681582),
    C = n(573435),
    b = n(71855),
    N = n(203480),
    R = n(670735),
    O = n(549205),
    D = n(750506),
    L = n(267102),
    w = n(666347),
    x = n(97469),
    P = n(975616),
    M = n(611635),
    k = n(723702),
    U = n(677134),
    G = n(837921),
    V = n(913934),
    F = n(869146),
    B = n(652215),
    j = n(392164),
    H = n(32069);
function Y(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && k.isPlatformEmbedded && !n;
}
class W extends i.Component {
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
            (0, V.M)(e),
            e.addEventListener("blur", this.handleBlur),
            k.isPlatformEmbedded
                ? t.addEventListener("contextmenu", U.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", U.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                F.A.unmountWindow(this.props.windowKey), k.isPlatformEmbedded && G.Ay.close(this.props.windowKey);
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
            k.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", U.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", U.contextMenuCallbackWeb),
            (0, c.r)(() => p.red.setState((e) => ({ ...e, [p.KX8]: [] }))),
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
            r = !1,
            i = n.head;
        l()(null != i, `Window document ${r ? "body" : "head"} was null`);
        let a = i.querySelector(`style[${S.Vg}]`);
        if (null != a) {
            a.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(S.Vg, "true"), (s.textContent = e), i.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, O.I)(t.documentElement)),
        [g.VT, g.rR, m.D, ...(this.props.keybinds ?? [])]))
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
                withTitleBar: a,
                guestWindow: o,
                clientThemesClassName: l,
                contentClassName: c,
                themeOverride: f,
                titleBarTheme: m,
                hideModals: g = !1,
                appContext: E,
            } = this.props,
            I = Y({ withTitleBar: a, isFullScreen: i }),
            T = n === j.f ? w.A : R.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsx)(
                P.e,
                {
                    windowKey: n,
                    themeOverride: f,
                    children: (0, r.jsx)(A.A, {
                        children: (0, r.jsxs)(p.xpW, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(K, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, r.jsxs)(T, {
                                        children: [
                                            (0, r.jsx)(C.Al, {}),
                                            (0, r.jsx)(L.Wr, {
                                                appContext: E ?? B.BRT.POPOUT,
                                                renderWindow: o,
                                                children: (0, r.jsx)(v.l, {
                                                    children: (0, r.jsxs)(D.Yf, {
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: H.SW,
                                                                children: [
                                                                    I &&
                                                                        (0, r.jsx)(_.NPJ, {
                                                                            theme: m,
                                                                            children: (e) =>
                                                                                (0, r.jsx)(b.cq, {
                                                                                    windowKey: n,
                                                                                    className: s()(e, H.uv),
                                                                                }),
                                                                        }),
                                                                    (0, r.jsx)("div", {
                                                                        className: s()(H.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !g && (0, r.jsx)(p.bM6, {}),
                                                            (0, r.jsx)(h.A, {}),
                                                            (0, r.jsx)(d.P, {}),
                                                            (0, r.jsx)(D.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, r.jsx)(_.Utq, {}),
                            ],
                        }),
                    }),
                },
                e,
            ),
        });
    }
}
let K = i.forwardRef(function (e, t) {
        let { guestWindow: n, className: a, children: o } = e,
            { lang: u, style: c, className: d } = (0, M.xb)();
        return (
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", c);
            }, [n, c]),
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", u);
            }, [n, u]),
            (0, r.jsx)("div", { "data-popout-root": !0, ref: t, className: s()(d, a), children: o })
        );
    }),
    z = i.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: i } = (0, f.cf)([F.A], () => ({
            guestWindow: F.A.getWindow(e.windowKey),
            isFullScreen: F.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: a, connectedEmbeddedActivity: s } = (0, f.cf)([E.A, I.Ay], () => ({
            forcedColors: E.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: I.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, N.A)(n, !1);
        let { analyticsLocations: o } = (0, y.Ay)(T.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: c } = (0, S.Ay)(),
            d = (0, x.NC)(),
            _ = e.themeOverride ?? d;
        return null == n
            ? null
            : (0, r.jsx)(p.WaV, {
                  children: (0, r.jsx)(y.f5, {
                      value: o,
                      children: (0, r.jsx)(W, {
                          ref: t,
                          ...e,
                          titleBarTheme: _,
                          guestWindow: n,
                          isFullScreen: i,
                          forcedColors: a,
                          connectedEmbeddedActivity: s,
                          clientThemesClassName: u,
                          clientThemesCSS: c,
                      }),
                  }),
              });
    });
