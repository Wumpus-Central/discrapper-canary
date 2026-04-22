"use strict";
n.d(t, { A: () => J, q: () => q });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    d = n(121894),
    c = n(337836),
    _ = n(43990),
    f = n(825437),
    E = n(311907),
    h = n(192308),
    p = n(231723),
    m = n(187322),
    g = n(638495),
    A = n(252453),
    I = n(318009),
    T = n(92960),
    S = n(14214),
    y = n(775602),
    N = n(697138),
    O = n(933958),
    R = n(793574),
    v = n(688810),
    C = n(590703),
    b = n(681582),
    D = n(573435),
    L = n(71855),
    w = n(203480),
    M = n(670735),
    P = n(549205),
    U = n(750506),
    k = n(267102),
    x = n(666347),
    G = n(97469),
    V = n(975616),
    F = n(611635),
    B = n(723702),
    H = n(677134),
    Y = n(837921),
    W = n(913934),
    j = n(869146),
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
            (0, W.M)(e),
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
                j.A.unmountWindow(this.props.windowKey), B.isPlatformEmbedded && Y.Ay.close(this.props.windowKey);
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
            (0, d.r)(() => h.useModalsStore.setState((e) => ({ ...e, [p.KX]: [] }))),
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
        let i = r.querySelector(`style[${C.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(C.Vg, "true"), (s.textContent = e), r.appendChild(s);
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
                contentClassName: d,
                themeOverride: E,
                titleBarTheme: h,
                hideModals: p = !1,
                appContext: A,
            } = this.props,
            T = q({ withTitleBar: s, isFullScreen: i }),
            S = n === $.f ? x.A : M.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsx)(
                V.e,
                {
                    windowKey: n,
                    themeOverride: E,
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
                                                    children: (0, r.jsxs)(U.Yf, {
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
                                                                        className: a()(z.Qs, d),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !p && (0, r.jsx)(g.b, {}),
                                                            (0, r.jsx)(I.A, {}),
                                                            (0, r.jsx)(c.P, {}),
                                                            (0, r.jsx)(U.C8, {}),
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
            { lang: u, style: d, className: c } = (0, F.xb)();
        return (
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", d);
            }, [n, d]),
            i.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", u);
            }, [n, u]),
            (0, r.jsx)("div", { "data-popout-root": !0, ref: t, className: a()(c, s), children: o })
        );
    }),
    J = i.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: i } = (0, E.cf)([j.A], () => ({
            guestWindow: j.A.getWindow(e.windowKey),
            isFullScreen: j.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: a } = (0, E.cf)([y.A, O.Ay], () => ({
            forcedColors: y.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: O.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, w.A)(n, !1);
        let { analyticsLocations: o } = (0, v.Ay)(R.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, C.Ay)(),
            c = (0, G.NC)(),
            _ = e.themeOverride ?? c;
        return null == n
            ? null
            : (0, r.jsx)(A.W, {
                  children: (0, r.jsx)(v.f5, {
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
                          clientThemesCSS: d,
                      }),
                  }),
              });
    });
