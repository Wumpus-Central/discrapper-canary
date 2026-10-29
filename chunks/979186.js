n.d(t, { q: () => eO, A: () => eS });
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
    m = n(192308),
    p = n(231723),
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
    P = n(203480),
    L = n(670735),
    R = n(549205),
    M = n(750506),
    G = n(80556),
    U = n(267102),
    K = n(435558),
    B = n.n(K),
    F = n(941143),
    W = n(258873),
    H = n(622242),
    V = n(731738),
    Y = n(834730),
    z = n(452295),
    J = n(684013),
    $ = n(964486),
    X = n(807393),
    Z = n(976860),
    Q = n(287809),
    q = n(144400),
    ee = n(927813),
    et = n(777334),
    en = n(41984),
    er = n(870373),
    ei = n(302614),
    el = n(233741),
    es = n(28528),
    eo = n(672396),
    ea = n(652215),
    eu = n(105292),
    ed = n(261289);
let ec = B().throttle(
        () => {
            X.A.increment(
                { name: V.K.APP_CRASHED, tags: [`reason:${W.J.UNHANDLED_JS_ERROR}`, `level:${H.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    eh = 10 * ee.A.Millis.SECOND;
function ef(e) {
    let { error: t, onLock: n, onReload: l, onDisable: s, onCrashDisabled: o } = e,
        a = i.useMemo(() => new F.SpringValue(1), []),
        u = i.useRef(null),
        [d, c] = i.useState(!1),
        [f, g] = i.useState(!1),
        m = (0, h.bG)([Q.default], () => Q.default.getCurrentUser());
    (0, $.Ay)(
        () => (
            (u.current = setTimeout(A, eh)),
            (0, er.g)(ea.HAw.NOTIFICATION_VIEWED, { notif_type: eo.KS.OverlayCrashed }),
            () => {
                null != u.current && clearTimeout(u.current);
            }
        ),
    );
    let p = (m?.isStaff() ?? !1) || (m?.isStaffPersonal() ?? !1),
        A = i.useCallback(() => {
            (a.set(0), null != u.current && clearTimeout(u.current), (u.current = null), n?.(), o?.());
        }, [a, n, o]),
        y = i.useCallback(
            (e) => {
                f ||
                    (g(!0),
                    n?.(),
                    (0, er.g)(
                        ea.HAw.NOTIFICATION_CLICKED,
                        { notif_type: eo.KS.OverlayCrashed, action_type: "reload" },
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
        w = (0, h.bG)([el.A], () => el.A.getFocusedRunningGame()),
        E = d
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(Y.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: eu.intl.string(eu.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: ed.Xh,
                          children: [
                              (0, r.jsx)(Y.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(Y.E, {
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
        C = d ? null : eu.intl.string(eu.t.oEJEFq);
    return (0, r.jsx)(es.$, {
        title: eu.intl.string(eu.t.U38qZj),
        body: E,
        hint: p ? C : void 0,
        confirmText: eu.intl.string(eu.t.a3HlgJ),
        cancelText: null != w ? eu.intl.string(eu.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(q.A, { width: 40, height: 40, className: ed.Lo }),
        onNotificationClick: v,
        onConfirmClick: y,
        onCancelClick: null != w ? x : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: ea.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: a,
        className: ed.Pl,
        wrapperClassName: ed.fl,
    });
}
class eg extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, Z.JK)().location;
        this.setState({ error: e, info: t });
        let r = el.A.getTargetPID();
        (J.A.setOverlayCrashed(r, e), J.A.setInputLocked(!0, r));
        let i = (0, et.St)(e, en.Ue.OutOfProcess, { extra: { info: t, location: n } });
        ((0, er.g)(ea.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            ec(),
            (this.pid = r));
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(ei.A, {
                      className: ed.wz,
                      children: (0, r.jsx)(ef, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? el.A.getTargetPID();
                              (J.A.setInputLocked(!0, e), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = el.A.getFocusedRunningGame();
                              null != e && z.A.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? el.A.getTargetPID();
                              (J.A.updateOverlayState(e, en.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 }));
                          },
                          onReload: () => {
                              (J.A.setReloadOverlay(el.A.getTargetPID()), this.setState({ showError: !1 }));
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
var em = n(97469),
    ep = n(539900),
    eA = n(611635),
    ey = n(892019),
    ev = n(723702),
    ex = n(677134),
    ew = n(19575),
    eE = n(346142),
    eC = n(869146),
    eb = n(392164),
    eN = n(577063);
function eO(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && ev.isPlatformEmbedded && !n;
}
function e_(e) {
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
class eD extends i.Component {
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
            (0, eE.M)(e),
            e.addEventListener("blur", this.handleBlur),
            ev.isPlatformEmbedded
                ? t.addEventListener("contextmenu", ex.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", ex.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds());
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                (eC.A.unmountWindow(this.props.windowKey), ev.isPlatformEmbedded && ew.Ay.close(this.props.windowKey));
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
            ev.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", ex.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", ex.contextMenuCallbackWeb),
            (0, d.r)(() => m.useModalsStore.setState((e) => ({ ...e, [p.KX]: [] }))),
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
                appContext: m,
            } = this.props,
            p = eO({ withTitleBar: l, isFullScreen: i }),
            w = n === eb.f,
            C = w ? eg : L.A;
        return (0, r.jsx)(u.Kd, {
            children: (0, r.jsxs)(
                ep.e,
                {
                    windowKey: n,
                    themeOverride: h,
                    children: [
                        p && (0, r.jsx)(e_, { windowKey: n, themeOverride: f }),
                        (0, r.jsx)(O.A, {
                            children: (0, r.jsxs)(A.xp, {
                                containerRef: this.rootRef,
                                children: [
                                    (0, r.jsx)(eI, {
                                        guestWindow: o,
                                        className: s()(a, { overlay: w }),
                                        children: (0, r.jsxs)(C, {
                                            children: [
                                                (0, r.jsx)(T.Al, {}),
                                                (0, r.jsx)(U.Wr, {
                                                    appContext: m ?? ea.BRT.POPOUT,
                                                    renderWindow: o,
                                                    children: (0, r.jsx)(j.l, {
                                                        children: (0, r.jsx)(G.ks, {
                                                            children: (0, r.jsxs)(M.Yf, {
                                                                children: [
                                                                    (0, r.jsxs)("div", {
                                                                        className: eN.SW,
                                                                        children: [
                                                                            p &&
                                                                                (0, r.jsx)(y.N, {
                                                                                    theme: f,
                                                                                    children: (e) =>
                                                                                        (0, r.jsx)(k.cq, {
                                                                                            windowKey: n,
                                                                                            className: s()(e, eN.uv),
                                                                                        }),
                                                                                }),
                                                                            (0, r.jsx)("div", {
                                                                                className: s()(eN.Qs, d),
                                                                                children: t,
                                                                            }),
                                                                        ],
                                                                    }),
                                                                    !g && (0, r.jsx)(v.b, {}),
                                                                    (0, r.jsx)(E.A, {}),
                                                                    (0, r.jsx)(c.P, {}),
                                                                    (0, r.jsx)(M.C8, {}),
                                                                    (0, r.jsx)(G.ok, {}),
                                                                ],
                                                            }),
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
function eI(e) {
    let { guestWindow: t, className: n, children: l, ref: o } = e,
        { lang: u, style: d, className: c } = (0, eA.x)();
    (i.useEffect(() => {
        let e = t.document.documentElement;
        (a()(null != e, "Window document element was null"), e.setAttribute("style", d));
    }, [t, d]),
        i.useEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("lang", u));
        }, [t, u]),
        (0, ey.A)(t.document.documentElement));
    let h = s()(c, n, "in-popout");
    return (
        i.useLayoutEffect(() => {
            let e = t.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("class", h));
        }, [t, h]),
        (0, r.jsx)("div", { "data-popout-root": !0, ref: o, children: l })
    );
}
let eS = function (e) {
    let { ref: t, ...n } = e,
        { guestWindow: i, isFullScreen: l } = (0, h.cf)([eC.A], () => ({
            guestWindow: eC.A.getWindow(n.windowKey),
            isFullScreen: eC.A.isWindowFullScreen(n.windowKey),
        }));
    a()(null != i, "Missing guestWindow reference");
    let { forcedColors: s, connectedEmbeddedActivity: o } = (0, h.cf)([N.Ay, _.Ay], () => ({
        forcedColors: N.Ay.useForcedColors ? "yes" : "no",
        connectedEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
    }));
    (0, P.A)(i, !1);
    let { analyticsLocations: u } = (0, I.Ay)(D.A.POPOUT_WINDOW),
        { clientThemesClassName: d, clientThemesCSS: c } = (0, S.Ay)(),
        f = (0, em.NC)(),
        g = n.themeOverride ?? f;
    return null == i
        ? null
        : (0, r.jsx)(w.W, {
              children: (0, r.jsx)(I.f5, {
                  value: u,
                  children: (0, r.jsx)(eD, {
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
