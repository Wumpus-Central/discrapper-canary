n.d(t, { q: () => eN, A: () => eI });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    a = n.n(o),
    d = n(561028),
    u = n(121894),
    c = n(337836),
    h = n(17928),
    f = n(462887),
    g = n(38021),
    p = n(192308),
    m = n(231723),
    A = n(559106),
    y = n(43990),
    v = n(638495),
    w = n(557361),
    x = n(965830),
    E = n(318009),
    b = n(92960),
    C = n(14214),
    N = n(775602),
    O = n(697138),
    _ = n(933958),
    D = n(793574),
    I = n(688810),
    T = n(590703),
    S = n(681582),
    j = n(573435),
    k = n(71855),
    M = n(203480),
    L = n(670735),
    R = n(549205),
    P = n(750506),
    U = n(267102),
    G = n(435558),
    K = n.n(G),
    F = n(202091),
    W = n(258873),
    B = n(622242),
    V = n(731738),
    H = n(834730),
    Y = n(780907),
    z = n(684013),
    J = n(964486),
    X = n(807393),
    $ = n(976860),
    Z = n(287809),
    q = n(144400),
    Q = n(927813),
    ee = n(777334),
    et = n(41984),
    en = n(870373),
    er = n(302614),
    ei = n(233741),
    es = n(28528),
    el = n(672396),
    eo = n(652215),
    ea = n(660183),
    ed = n(261289);
let eu = K().throttle(
        () => {
            X.A.increment(
                { name: V.K.APP_CRASHED, tags: [`reason:${W.J.UNHANDLED_JS_ERROR}`, `level:${B.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    ec = 10 * Q.A.Millis.SECOND;
function eh(e) {
    let { error: t, onLock: n, onReload: s, onDisable: l, onCrashDisabled: o } = e,
        a = i.useMemo(() => new F.SpringValue(1), []),
        d = i.useRef(null),
        [u, c] = i.useState(!1),
        [f, g] = i.useState(!1),
        p = (0, h.bG)([Z.default], () => Z.default.getCurrentUser());
    (0, J.Ay)(
        () => (
            (d.current = setTimeout(A, ec)),
            (0, en.g)(eo.HAw.NOTIFICATION_VIEWED, { notif_type: el.KS.OverlayCrashed }),
            () => {
                null != d.current && clearTimeout(d.current);
            }
        ),
    );
    let m = (p?.isStaff() ?? !1) || (p?.isStaffPersonal() ?? !1),
        A = i.useCallback(() => {
            (a.set(0), null != d.current && clearTimeout(d.current), (d.current = null), n?.(), o?.());
        }, [a, n, o]),
        y = i.useCallback(
            (e) => {
                f ||
                    (g(!0),
                    n?.(),
                    (0, en.g)(
                        eo.HAw.NOTIFICATION_CLICKED,
                        { notif_type: el.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, f],
        ),
        v = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? (c(!0), null != d.current && clearTimeout(d.current)) : c(!1));
            },
            [c],
        ),
        w = i.useCallback(
            (e) => {
                (e.stopPropagation(), n?.(), l?.());
            },
            [l, n],
        ),
        x = (0, h.bG)([ei.A], () => ei.A.getFocusedRunningGame()),
        E = u
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(H.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: ea.intl.string(ea.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: ed.Xh,
                          children: [
                              (0, r.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(H.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: ed.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        b = u ? null : ea.intl.string(ea.t.oEJEFq);
    return (0, r.jsx)(es.$, {
        title: ea.intl.string(ea.t.U38qZj),
        body: E,
        hint: m ? b : void 0,
        confirmText: ea.intl.string(ea.t.a3HlgJ),
        cancelText: null != x ? ea.intl.string(ea.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(q.A, { width: 40, height: 40, className: ed.Lo }),
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
        className: ed.Pl,
        wrapperClassName: ed.fl,
    });
}
class ef extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, $.JK)().location;
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
            eu(),
            (this.pid = r));
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(er.A, {
                      className: ed.wz,
                      children: (0, r.jsx)(eh, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? ei.A.getTargetPID();
                              (z.A.setInputLocked(!0, e), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = ei.A.getFocusedRunningGame();
                              null != e && Y.Ay.toggleOverlay(e, !1, !1);
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
    ep = n(867045),
    em = n(597619),
    eA = n(892019),
    ey = n(723702),
    ev = n(677134),
    ew = n(19575),
    ex = n(346142),
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
        s = n ?? r;
    return (
        i.useLayoutEffect(() => {
            ew.Ay.setTrafficLightAppearance((0, f.M)(s) ? "dark" : "light", t);
        }, [s, t]),
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
            (0, u.r)(() => p.useModalsStore.setState((e) => ({ ...e, [m.KX]: [] }))),
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
        let i = r.querySelector(`style[${T.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let s = n.createElement("style");
        (s.setAttribute(T.Vg, "true"), (s.textContent = e), r.appendChild(s));
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, R.I)(n.documentElement)),
        [C.VT, C.rR, (0, b.LB)(t), ...(this.props.keybinds ?? [])]))
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
                clientThemesClassName: a,
                contentClassName: u,
                themeOverride: h,
                titleBarTheme: f,
                hideModals: g = !1,
                appContext: p,
            } = this.props,
            m = eN({ withTitleBar: s, isFullScreen: i }),
            x = n === eb.f,
            b = x ? ef : L.A;
        return (0, r.jsx)(d.Kd, {
            children: (0, r.jsxs)(
                ep.e,
                {
                    windowKey: n,
                    themeOverride: h,
                    children: [
                        m && (0, r.jsx)(eO, { windowKey: n, themeOverride: f }),
                        (0, r.jsx)(O.A, {
                            children: (0, r.jsxs)(A.xp, {
                                containerRef: this.rootRef,
                                children: [
                                    (0, r.jsx)(eD, {
                                        guestWindow: o,
                                        className: l()(a, { overlay: x }),
                                        children: (0, r.jsxs)(b, {
                                            children: [
                                                (0, r.jsx)(j.Al, {}),
                                                (0, r.jsx)(U.Wr, {
                                                    appContext: p ?? eo.BRT.POPOUT,
                                                    renderWindow: o,
                                                    children: (0, r.jsx)(S.l, {
                                                        children: (0, r.jsxs)(P.Yf, {
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: eC.SW,
                                                                    children: [
                                                                        m &&
                                                                            (0, r.jsx)(y.N, {
                                                                                theme: f,
                                                                                children: (e) =>
                                                                                    (0, r.jsx)(k.cq, {
                                                                                        windowKey: n,
                                                                                        className: l()(e, eC.uv),
                                                                                    }),
                                                                            }),
                                                                        (0, r.jsx)("div", {
                                                                            className: l()(eC.Qs, u),
                                                                            children: t,
                                                                        }),
                                                                    ],
                                                                }),
                                                                !g && (0, r.jsx)(v.b, {}),
                                                                (0, r.jsx)(E.A, {}),
                                                                (0, r.jsx)(c.P, {}),
                                                                (0, r.jsx)(P.C8, {}),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(w.Ut, {}),
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
    let { guestWindow: t, className: n, children: s, ref: o } = e,
        { lang: d, style: u, className: c } = (0, em.xb)();
    (i.useEffect(() => {
        let e = t.document.documentElement;
        (a()(null != e, "Window document element was null"), e.setAttribute("style", u));
    }, [t, u]),
        i.useEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("lang", d));
        }, [t, d]),
        (0, eA.A)(t.document.documentElement));
    let h = l()(c, n, "in-popout");
    return (
        i.useLayoutEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("class", h));
        }, [t, h]),
        (0, r.jsx)("div", { "data-popout-root": !0, ref: o, children: s })
    );
}
let eI = function (e) {
    let { ref: t, ...n } = e,
        { guestWindow: i, isFullScreen: s } = (0, h.cf)([eE.A], () => ({
            guestWindow: eE.A.getWindow(n.windowKey),
            isFullScreen: eE.A.isWindowFullScreen(n.windowKey),
        }));
    a()(null != i, "Missing guestWindow reference");
    let { forcedColors: l, connectedEmbeddedActivity: o } = (0, h.cf)([N.Ay, _.Ay], () => ({
        forcedColors: N.Ay.useForcedColors ? "yes" : "no",
        connectedEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
    }));
    (0, M.A)(i, !1);
    let { analyticsLocations: d } = (0, I.Ay)(D.A.POPOUT_WINDOW),
        { clientThemesClassName: u, clientThemesCSS: c } = (0, T.Ay)(),
        f = (0, eg.NC)(),
        g = n.themeOverride ?? f;
    return null == i
        ? null
        : (0, r.jsx)(x.W, {
              children: (0, r.jsx)(I.f5, {
                  value: d,
                  children: (0, r.jsx)(e_, {
                      ref: t,
                      ...n,
                      titleBarTheme: g,
                      guestWindow: i,
                      isFullScreen: s,
                      forcedColors: l,
                      connectedEmbeddedActivity: o,
                      clientThemesClassName: u,
                      clientThemesCSS: c,
                  }),
              }),
          });
};
