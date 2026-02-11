"use strict";
n.d(t, { A: () => z, q: () => W });
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
    h = n(397927),
    p = n(318009),
    g = n(92960),
    E = n(14214),
    A = n(775602),
    I = n(697138),
    T = n(933958),
    y = n(793574),
    S = n(688810),
    v = n(590703),
    C = n(681582),
    b = n(573435),
    N = n(71855),
    R = n(203480),
    O = n(670735),
    D = n(549205),
    L = n(750506),
    w = n(267102),
    x = n(666347),
    P = n(97469),
    M = n(975616),
    k = n(611635),
    U = n(723702),
    G = n(677134),
    F = n(837921),
    V = n(913934),
    B = n(869146),
    j = n(652215),
    H = n(392164),
    Y = n(628867);
function W(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && U.isPlatformEmbedded && !n;
}
class K extends i.Component {
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
            U.isPlatformEmbedded
                ? t.addEventListener("contextmenu", G.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", G.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                B.A.unmountWindow(this.props.windowKey), U.isPlatformEmbedded && F.Ay.close(this.props.windowKey);
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
            U.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", G.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", G.contextMenuCallbackWeb),
            (0, c.r)(() => h.red.setState((e) => ({ ...e, [h.KX8]: [] }))),
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
        let a = i.querySelector(`style[${v.Vg}]`);
        if (null != a) {
            a.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(v.Vg, "true"), (s.textContent = e), i.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e } = this.props,
            t = e.document;
        for (let e of ((this._combokeys = (0, D.I)(t.documentElement)),
        [E.VT, E.rR, g.D, ...(this.props.keybinds ?? [])]))
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
                titleBarTheme: g,
                hideModals: E = !1,
                appContext: A,
            } = this.props,
            T = W({ withTitleBar: a, isFullScreen: i }),
            y = n === H.f ? x.A : O.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsx)(
                M.e,
                {
                    windowKey: n,
                    themeOverride: f,
                    children: (0, r.jsx)(I.A, {
                        children: (0, r.jsxs)(h.xpW, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)($, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, r.jsxs)(y, {
                                        children: [
                                            (0, r.jsx)(b.Al, {}),
                                            (0, r.jsx)(w.Wr, {
                                                appContext: A ?? j.BRT.POPOUT,
                                                renderWindow: o,
                                                children: (0, r.jsx)(C.l, {
                                                    children: (0, r.jsxs)(L.Yf, {
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: Y.SW,
                                                                children: [
                                                                    T &&
                                                                        (0, r.jsx)(_.NPJ, {
                                                                            theme: g,
                                                                            children: (e) =>
                                                                                (0, r.jsx)(N.cq, {
                                                                                    windowKey: n,
                                                                                    className: s()(e, Y.uv),
                                                                                }),
                                                                        }),
                                                                    (0, r.jsx)("div", {
                                                                        className: s()(Y.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !E && (0, r.jsx)(h.bM6, {}),
                                                            (0, r.jsx)(p.A, {}),
                                                            (0, r.jsx)(d.P, {}),
                                                            (0, r.jsx)(L.C8, {}),
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
let $ = i.forwardRef(function (e, t) {
        let { guestWindow: n, className: a, children: o } = e,
            { lang: u, style: c, className: d } = (0, k.xb)();
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
        let { guestWindow: n, isFullScreen: i } = (0, f.cf)([B.A], () => ({
            guestWindow: B.A.getWindow(e.windowKey),
            isFullScreen: B.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: a, connectedEmbeddedActivity: s } = (0, f.cf)([A.A, T.Ay], () => ({
            forcedColors: A.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: T.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, R.A)(n, !1);
        let { analyticsLocations: o } = (0, S.Ay)(y.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: c } = (0, v.Ay)(),
            d = (0, P.NC)(),
            _ = e.themeOverride ?? d;
        return null == n
            ? null
            : (0, r.jsx)(h.WaV, {
                  children: (0, r.jsx)(S.f5, {
                      value: o,
                      children: (0, r.jsx)(K, {
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
