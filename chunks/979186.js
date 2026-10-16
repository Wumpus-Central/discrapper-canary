n.d(t, { q: () => eN, A: () => eI });
var r = n(477900),
    i = n(582128),
    l = n(503698),
    s = n.n(l),
    o = n(284009),
    a = n.n(o),
    u = n(561028),
    d = n(121894),
    c = n(337836),
    h = n(17928),
    f = n(462887),
    g = n(38021),
    p = n(192308),
    m = n(231723),
    A = n(559106),
    y = n(43990),
    v = n(638495),
    x = n(557361),
    w = n(965830),
    E = n(318009),
    C = n(92960),
    b = n(14214),
    N = n(775602),
    O = n(697138),
    _ = n(933958),
    D = n(793574),
    I = n(688810),
    S = n(590703),
    j = n(681582),
    T = n(573435),
    k = n(71855),
    L = n(203480),
    P = n(670735),
    R = n(549205),
    M = n(750506),
    U = n(267102),
    G = n(435558),
    K = n.n(G),
    B = n(941143),
    F = n(258873),
    W = n(622242),
    H = n(731738),
    V = n(834730),
    Y = n(780907),
    z = n(684013),
    J = n(964486),
    $ = n(807393),
    X = n(976860),
    Z = n(287809),
    Q = n(144400),
    q = n(927813),
    ee = n(777334),
    et = n(41984),
    en = n(870373),
    er = n(302614),
    ei = n(233741),
    el = n(28528),
    es = n(672396),
    eo = n(652215),
    ea = n(105292),
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
        x = i.useCallback(
            (e) => {
                (e.stopPropagation(), n?.(), s?.());
            },
            [s, n],
        ),
        w = (0, h.bG)([ei.A], () => ei.A.getFocusedRunningGame()),
        E = d
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(V.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: ea.intl.string(ea.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: eu.Xh,
                          children: [
                              (0, r.jsx)(V.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(V.E, {
                                  variant: "text-xxs/normal",
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
        C = d ? null : ea.intl.string(ea.t.oEJEFq);
    return (0, r.jsx)(el.$, {
        title: ea.intl.string(ea.t.U38qZj),
        body: E,
        hint: m ? C : void 0,
        confirmText: ea.intl.string(ea.t.a3HlgJ),
        cancelText: null != w ? ea.intl.string(ea.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(Q.A, { width: 40, height: 40, className: eu.Lo }),
        onNotificationClick: v,
        onConfirmClick: y,
        onCancelClick: null != w ? x : void 0,
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
    ep = n(741906),
    em = n(611635),
    eA = n(892019),
    ey = n(723702),
    ev = n(677134),
    ex = n(19575),
    ew = n(346142),
    eE = n(869146),
    eC = n(392164),
    eb = n(577063);
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
            ex.Ay.setTrafficLightAppearance((0, f.M)(l) ? "dark" : "light", t);
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
            (0, ew.M)(e),
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
                (eE.A.unmountWindow(this.props.windowKey), ey.isPlatformEmbedded && ex.Ay.close(this.props.windowKey));
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
            (0, d.r)(() => p.useModalsStore.setState((e) => ({ ...e, [m.KX]: [] }))),
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
        let i = r.querySelector(`style[${S.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let l = n.createElement("style");
        (l.setAttribute(S.Vg, "true"), (l.textContent = e), r.appendChild(l));
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, R.I)(n.documentElement)),
        [b.VT, b.rR, (0, C.LB)(t), ...(this.props.keybinds ?? [])]))
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
            m = eN({ withTitleBar: l, isFullScreen: i }),
            w = n === eC.f,
            C = w ? ef : P.A;
        return (0, r.jsx)(u.Kd, {
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
                                        className: s()(a, { overlay: w }),
                                        children: (0, r.jsxs)(C, {
                                            children: [
                                                (0, r.jsx)(T.Al, {}),
                                                (0, r.jsx)(U.Wr, {
                                                    appContext: p ?? eo.BRT.POPOUT,
                                                    renderWindow: o,
                                                    children: (0, r.jsx)(j.l, {
                                                        children: (0, r.jsxs)(M.Yf, {
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: eb.SW,
                                                                    children: [
                                                                        m &&
                                                                            (0, r.jsx)(y.N, {
                                                                                theme: f,
                                                                                children: (e) =>
                                                                                    (0, r.jsx)(k.cq, {
                                                                                        windowKey: n,
                                                                                        className: s()(e, eb.uv),
                                                                                    }),
                                                                            }),
                                                                        (0, r.jsx)("div", {
                                                                            className: s()(eb.Qs, d),
                                                                            children: t,
                                                                        }),
                                                                    ],
                                                                }),
                                                                !g && (0, r.jsx)(v.b, {}),
                                                                (0, r.jsx)(E.A, {}),
                                                                (0, r.jsx)(c.P, {}),
                                                                (0, r.jsx)(M.C8, {}),
                                                            ],
                                                        }),
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, r.jsx)(x.Ut, {}),
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
    let { forcedColors: s, connectedEmbeddedActivity: o } = (0, h.cf)([N.Ay, _.Ay], () => ({
        forcedColors: N.Ay.useForcedColors ? "yes" : "no",
        connectedEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
    }));
    (0, L.A)(i, !1);
    let { analyticsLocations: u } = (0, I.Ay)(D.A.POPOUT_WINDOW),
        { clientThemesClassName: d, clientThemesCSS: c } = (0, S.Ay)(),
        f = (0, eg.NC)(),
        g = n.themeOverride ?? f;
    return null == i
        ? null
        : (0, r.jsx)(w.W, {
              children: (0, r.jsx)(I.f5, {
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
