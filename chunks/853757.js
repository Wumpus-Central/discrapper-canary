n.d(t, { A: () => eI, q: () => eN });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    o = n(284009),
    a = n.n(o),
    u = n(561028),
    d = n(121894),
    c = n(337836),
    h = n(855986),
    f = n(462887),
    g = n(38021),
    p = n(192308),
    m = n(559106),
    A = n(43990),
    y = n(638495),
    v = n(557361),
    w = n(353680),
    x = n(318009),
    E = n(92960),
    b = n(14214),
    C = n(775602),
    N = n(697138),
    O = n(933958),
    _ = n(793574),
    D = n(688810),
    I = n(590703),
    S = n(681582),
    j = n(573435),
    T = n(71855),
    k = n(203480),
    P = n(670735),
    L = n(549205),
    R = n(750506),
    M = n(80556),
    G = n(267102),
    U = n(435558),
    K = n.n(U),
    B = n(736819),
    F = n(258873),
    W = n(622242),
    H = n(731738),
    V = n(834730),
    Y = n(273626),
    z = n(684013),
    J = n(964486),
    $ = n(913379),
    X = n(976860),
    Z = n(287809),
    Q = n(144400),
    q = n(927813),
    ee = n(777334),
    et = n(41984),
    en = n(870373),
    er = n(302614),
    ei = n(887287),
    el = n(376113),
    es = n(672396),
    eo = n(652215),
    ea = n(792996),
    eu = n(261289);
let ed = K().throttle(
        () => {
            $.A.increment(
                { name: H.K.APP_CRASHED, tags: [`reason:${F.J.UNHANDLED_JS_ERROR}`, `level:${W.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    ec = 10 * q.A.Millis.SECOND;
function eh(e) {
    let { error: t, onLock: n, onReload: l, onDisable: s, onCrashDisabled: o } = e,
        a = i.useMemo(() => new B.SpringValue(1), []),
        u = i.useRef(null),
        [d, c] = i.useState(!1),
        [f, g] = i.useState(!1),
        p = (0, h.bG)([Z.default], () => Z.default.getCurrentUser());
    (0, J.Ay)(
        () => (
            (u.current = setTimeout(A, ec)),
            (0, en.g)(eo.HAw.NOTIFICATION_VIEWED, { notif_type: es.KS.OverlayCrashed }),
            () => {
                null != u.current && clearTimeout(u.current);
            }
        ),
    );
    let m = (p?.isStaff() ?? !1) || (p?.isStaffPersonal() ?? !1),
        A = i.useCallback(() => {
            (a.set(0), null != u.current && clearTimeout(u.current), (u.current = null), n?.(), o?.());
        }, [a, n, o]),
        y = i.useCallback(
            (e) => {
                f ||
                    (g(!0),
                    n?.(),
                    (0, en.g)(
                        eo.HAw.NOTIFICATION_CLICKED,
                        { notif_type: es.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => l?.(), 200));
            },
            [n, l, f],
        ),
        v = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? (c(!0), null != u.current && clearTimeout(u.current)) : c(!1));
            },
            [c],
        ),
        w = i.useCallback(
            (e) => {
                (e.stopPropagation(), n?.(), s?.());
            },
            [s, n],
        ),
        x = (0, h.bG)([ei.A], () => ei.A.getFocusedRunningGame()),
        E = d
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(V.E, {
                          variant: "body-md/semibold",
                          color: "text-strong",
                          children: ea.intl.string(ea.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: eu.Xh,
                          children: [
                              (0, r.jsx)(V.E, { variant: "body-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(V.E, {
                                  variant: "footnote/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: eu.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        b = d ? null : ea.intl.string(ea.t.oEJEFq);
    return (0, r.jsx)(el.$, {
        title: ea.intl.string(ea.t.U38qZj),
        body: E,
        hint: m ? b : void 0,
        confirmText: ea.intl.string(ea.t.a3HlgJ),
        cancelText: null != x ? ea.intl.string(ea.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(Q.A, { width: 40, height: 40, className: eu.Lo }),
        onNotificationClick: v,
        onConfirmClick: y,
        onCancelClick: null != x ? w : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: eo.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: a,
        className: eu.Pl,
        wrapperClassName: eu.fl,
    });
}
class ef extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, X.JK)().location;
        this.setState({ error: e, info: t });
        let r = ei.A.getTargetPID();
        (z.A.setOverlayCrashed(r, e), z.A.setInputLocked(!0, r));
        let i = (0, ee.St)(e, et.Ue.OutOfProcess, { extra: { info: t, location: n } });
        ((0, en.g)(eo.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            ed(),
            (this.pid = r));
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(er.A, {
                      className: eu.wz,
                      children: (0, r.jsx)(eh, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? ei.A.getTargetPID();
                              (z.A.setInputLocked(!0, e), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = ei.A.getFocusedRunningGame();
                              null != e && Y.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? ei.A.getTargetPID();
                              (z.A.updateOverlayState(e, et.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 }));
                          },
                          onReload: () => {
                              (z.A.setReloadOverlay(ei.A.getTargetPID()), this.setState({ showError: !1 }));
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
var eg = n(97469),
    ep = n(446269),
    em = n(611635),
    eA = n(892019),
    ey = n(723702),
    ev = n(677134),
    ew = n(253400),
    ex = n(80833),
    eE = n(869146),
    eb = n(392164),
    eC = n(577063);
function eN(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && ey.isPlatformEmbedded && !n;
}
function eO(e) {
    let { windowKey: t, themeOverride: n } = e,
        { theme: r } = (0, g.wR)(),
        l = n ?? r;
    return (
        i.useLayoutEffect(() => {
            ew.Ay.setTrafficLightAppearance((0, f.M)(l) ? "dark" : "light", t);
        }, [l, t]),
        null
    );
}
class e_ extends i.Component {
    rootRef = i.createRef();
    _cleanupWindowActionCreators = void 0;
    _combokeys = null;
    static defaultProps = { withTitleBar: !0 };
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, ex.M)(e),
            e.addEventListener("blur", this.handleBlur),
            ey.isPlatformEmbedded
                ? t.addEventListener("contextmenu", ev.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", ev.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds());
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                (eE.A.unmountWindow(this.props.windowKey), ey.isPlatformEmbedded && ew.Ay.close(this.props.windowKey));
            };
        null != t ? t({ e, unmountWindow: n }) : n();
    };
    componentDidUpdate(e) {
        let { title: t, clientThemesCSS: n } = this.props;
        (e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme());
    }
    componentWillUnmount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        (this.unregisterPopoutGlobalKeybinds(),
            e.removeEventListener("blur", this.handleBlur),
            ey.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", ev.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", ev.contextMenuCallbackWeb),
            (0, d.r)(() => p.re.setState((e) => ({ ...e, popout: [] }))),
            e.removeEventListener("beforeunload", this.beforeUnload));
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
        a()(null != r, "Window document head was null");
        let i = r.querySelector(`style[${I.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let l = n.createElement("style");
        (l.setAttribute(I.Vg, "true"), (l.textContent = e), r.appendChild(l));
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, L.I)(n.documentElement)),
        [b.VT, b.rR, (0, E.LB)(t), ...(this.props.keybinds ?? [])]))
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
                withTitleBar: l,
                guestWindow: o,
                clientThemesClassName: a,
                contentClassName: d,
                themeOverride: h,
                titleBarTheme: f,
                hideModals: g = !1,
                appContext: p,
            } = this.props,
            w = eN({ withTitleBar: l, isFullScreen: i }),
            E = n === eb.f,
            b = E ? ef : P.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsxs)(
                ep.e,
                {
                    windowKey: n,
                    themeOverride: h,
                    children: [
                        w && (0, r.jsx)(eO, { windowKey: n, themeOverride: f }),
                        (0, r.jsx)(N.A, {
                            children: (0, r.jsxs)(m.xp, {
                                containerRef: this.rootRef,
                                children: [
                                    (0, r.jsx)(eD, {
                                        guestWindow: o,
                                        className: s()(a, { overlay: E }),
                                        children: (0, r.jsxs)(b, {
                                            children: [
                                                (0, r.jsx)(j.Al, {}),
                                                (0, r.jsx)(G.Wr, {
                                                    appContext: p ?? eo.BRT.POPOUT,
                                                    renderWindow: o,
                                                    children: (0, r.jsx)(S.l, {
                                                        children: (0, r.jsx)(M.ks, {
                                                            children: (0, r.jsxs)(R.Yf, {
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        className: eC.SW,
                                                                        children: [
                                                                            w &&
                                                                                (0, r.jsx)(A.N, {
                                                                                    theme: f,
                                                                                    children: (e) =>
                                                                                        (0, r.jsx)(T.cq, {
                                                                                            windowKey: n,
                                                                                            className: s()(e, eC.uv),
                                                                                        }),
                                                                                }),
                                                                            (0, r.jsx)("div", {
                                                                                className: s()(eC.Qs, d),
                                                                                children: t,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    !g && (0, r.jsx)(y.b, {}),
                                                                    (0, r.jsx)(x.A, {}),
                                                                    (0, r.jsx)(c.P, {}),
                                                                    (0, r.jsx)(R.C8, {}),
                                                                    (0, r.jsx)(M.ok, {}),
                                                                ],
                                                            }),
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(v.Ut, {}),
                                ],
                            }),
                        }),
                    ],
                },
                e,
            ),
        });
    }
}
function eD(e) {
    let { guestWindow: t, className: n, children: l, ref: o } = e,
        { lang: u, style: d, className: c } = (0, em.x)();
    (i.useEffect(() => {
        let e = t.document.documentElement;
        (a()(null != e, "Window document element was null"), e.setAttribute("style", d));
    }, [t, d]),
        i.useEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("lang", u));
        }, [t, u]),
        (0, eA.A)(t.document.documentElement));
    let h = s()(c, n, "in-popout");
    return (
        i.useLayoutEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("class", h));
        }, [t, h]),
        (0, r.jsx)("div", { "data-popout-root": !0, ref: o, children: l })
    );
}
let eI = function (e) {
    let { ref: t, ...n } = e,
        { guestWindow: i, isFullScreen: l } = (0, h.cf)([eE.A], () => ({
            guestWindow: eE.A.getWindow(n.windowKey),
            isFullScreen: eE.A.isWindowFullScreen(n.windowKey),
        }));
    a()(null != i, "Missing guestWindow reference");
    let { forcedColors: s, connectedEmbeddedActivity: o } = (0, h.cf)([C.Ay, O.Ay], () => ({
        forcedColors: C.Ay.useForcedColors ? "yes" : "no",
        connectedEmbeddedActivity: O.Ay.getCurrentEmbeddedActivity(),
    }));
    (0, k.A)(i, !1);
    let { analyticsLocations: u } = (0, D.Ay)(_.A.POPOUT_WINDOW),
        { clientThemesClassName: d, clientThemesCSS: c } = (0, I.Ay)(),
        f = (0, eg.NC)(),
        g = n.themeOverride ?? f;
    return null == i
        ? null
        : (0, r.jsx)(w.W, {
              children: (0, r.jsx)(D.f5, {
                  value: u,
                  children: (0, r.jsx)(e_, {
                      ref: t,
                      ...n,
                      titleBarTheme: g,
                      guestWindow: i,
                      isFullScreen: l,
                      forcedColors: s,
                      connectedEmbeddedActivity: o,
                      clientThemesClassName: d,
                      clientThemesCSS: c,
                  }),
              }),
          });
};
