n.d(t, {
    A: () => $,
    q: () => X,
}),
    n(896048);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(284009),
    c = n.n(l),
    u = n(758879),
    d = n(121894),
    f = n(337836),
    p = n(158954),
    _ = n(311907),
    h = n(397927),
    m = n(318009),
    g = n(92960),
    E = n(14214),
    b = n(775602),
    y = n(697138),
    O = n(933958),
    A = n(793574),
    v = n(688810),
    S = n(590703),
    I = n(681582),
    T = n(573435),
    C = n(71855),
    N = n(203480),
    R = n(670735),
    w = n(549205),
    P = n(750506),
    D = n(267102),
    x = n(666347),
    L = n(97469),
    j = n(975616),
    M = n(611635),
    k = n(723702),
    U = n(677134),
    G = n(837921),
    V = n(913934),
    F = n(869146),
    B = n(652215),
    H = n(392164),
    Y = n(32069);

function W(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function K(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                W(e, t, n[t]);
            });
    }
    return e;
}

function z(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function q(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : z(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function X(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && k.isPlatformEmbedded && !n;
}
class Z extends (r = a.Component) {
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
            (0, d.r)(() =>
                h.red.setState((e) =>
                    q(K({}, e), {
                        [h.KX8]: [],
                    }),
                ),
            ),
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
        c()(null != i, "Window document ".concat(r ? "body" : "head", " was null"));
        let a = i.querySelector("style[".concat(S.Vg, "]"));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(S.Vg, "true"), (s.textContent = e), i.appendChild(s);
    }
    registerPopoutGlobalKeybinds() {
        var e;
        let { guestWindow: t } = this.props,
            n = t.document;
        for (let t of ((this._combokeys = (0, w.I)(n.documentElement)),
        [E.VT, E.rR, g.D, ...(null != (e = this.props.keybinds) ? e : [])]))
            if (t.comboKeysBindGlobal)
                for (let e of t.binds)
                    this._combokeys.bindGlobal(e, (e, n) => ("function" == typeof t.action && t.action(e, n), !1));
    }
    unregisterPopoutGlobalKeybinds() {
        null != this._combokeys && this._combokeys.reset();
    }
    render() {
        let {
                forcedColors: e,
                children: t,
                windowKey: n,
                isFullScreen: r,
                withTitleBar: a,
                guestWindow: s,
                clientThemesClassName: l,
                contentClassName: c,
                themeOverride: d,
                titleBarTheme: _,
                hideModals: g = !1,
                appContext: E,
            } = this.props,
            b = X({
                withTitleBar: a,
                isFullScreen: r,
            }),
            O = n === H.f ? x.A : R.A;
        return (0, i.jsx)(u.Kd, {
            children: (0, i.jsx)(
                j.e,
                {
                    windowKey: n,
                    themeOverride: d,
                    children: (0, i.jsx)(y.A, {
                        children: (0, i.jsxs)(h.xpW, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(Q, {
                                    guestWindow: s,
                                    className: l,
                                    children: (0, i.jsxs)(O, {
                                        children: [
                                            (0, i.jsx)(T.Al, {}),
                                            (0, i.jsx)(D.Wr, {
                                                appContext: null != E ? E : B.BRT.POPOUT,
                                                renderWindow: s,
                                                children: (0, i.jsx)(I.l, {
                                                    children: (0, i.jsxs)(P.Yf, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: Y.SW,
                                                                children: [
                                                                    b &&
                                                                        (0, i.jsx)(p.NPJ, {
                                                                            theme: _,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(C.cq, {
                                                                                    windowKey: n,
                                                                                    className: o()(e, Y.uv),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: o()(Y.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !g && (0, i.jsx)(h.bM6, {}),
                                                            (0, i.jsx)(m.A, {}),
                                                            (0, i.jsx)(f.P, {}),
                                                            (0, i.jsx)(P.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(p.Utq, {}),
                            ],
                        }),
                    }),
                },
                e,
            ),
        });
    }
    constructor(...e) {
        super(...e),
            W(this, "rootRef", a.createRef()),
            W(this, "_cleanupWindowActionCreators", void 0),
            W(this, "_combokeys", null),
            W(this, "beforeUnload", (e) => {
                let { onBeforeUnload: t } = this.props,
                    n = () => {
                        F.A.unmountWindow(this.props.windowKey),
                            k.isPlatformEmbedded && G.Ay.close(this.props.windowKey);
                    };
                null != t
                    ? t({
                          e,
                          unmountWindow: n,
                      })
                    : n();
            }),
            W(this, "handleBlur", () => {
                var e, t;
                null == (e = (t = this.props).onBlur) || e.call(t);
            });
    }
}
W(Z, "defaultProps", {
    withTitleBar: !0,
});
let Q = a.forwardRef(function (e, t) {
        let { guestWindow: n, className: r, children: s } = e,
            { lang: l, style: u, className: d } = (0, M.xb)();
        return (
            a.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, "Window document element was null"), e.setAttribute("style", u);
            }, [n, u]),
            a.useEffect(() => {
                let e = n.document.documentElement;
                c()(null != e, "Window document element was null"), e.setAttribute("lang", l);
            }, [n, l]),
            (0, i.jsx)("div", {
                "data-popout-root": !0,
                ref: t,
                className: o()(d, r),
                children: s,
            })
        );
    }),
    $ = a.forwardRef(function (e, t) {
        var n;
        let { guestWindow: r, isFullScreen: a } = (0, _.cf)([F.A], () => ({
            guestWindow: F.A.getWindow(e.windowKey),
            isFullScreen: F.A.isWindowFullScreen(e.windowKey),
        }));
        c()(null != r, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: o } = (0, _.cf)([b.A, O.Ay], () => ({
            forcedColors: b.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: O.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, N.A)(r, !1);
        let { analyticsLocations: l } = (0, v.Ay)(A.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, S.Ay)(),
            f = (0, L.NC)(),
            p = null != (n = e.themeOverride) ? n : f;
        return null == r
            ? null
            : (0, i.jsx)(h.WaV, {
                  children: (0, i.jsx)(v.f5, {
                      value: l,
                      children: (0, i.jsx)(
                          Z,
                          q(
                              K(
                                  {
                                      ref: t,
                                  },
                                  e,
                              ),
                              {
                                  titleBarTheme: p,
                                  guestWindow: r,
                                  isFullScreen: a,
                                  forcedColors: s,
                                  connectedEmbeddedActivity: o,
                                  clientThemesClassName: u,
                                  clientThemesCSS: d,
                              },
                          ),
                      ),
                  }),
              });
    });
