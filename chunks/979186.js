n.d(t, { q: () => eb, A: () => eD });
var r = n(477900),
    i = n(582128),
    s = n(503698),
    l = n.n(s),
    o = n(284009),
    a = n.n(o),
    c = n(561028),
    d = n(121894),
    u = n(337836),
    h = n(43990),
    f = n(557361),
    g = n(17928),
    p = n(462887),
    m = n(38021),
    A = n(192308),
    v = n(231723),
    y = n(259678),
    x = n(638495),
    w = n(965830),
    E = n(318009),
    C = n(92960),
    b = n(14214),
    N = n(775602),
    O = n(697138),
    _ = n(933958),
    D = n(793574),
    I = n(688810),
    T = n(590703),
    j = n(681582),
    k = n(573435),
    S = n(71855),
    L = n(203480),
    P = n(670735),
    R = n(549205),
    M = n(750506),
    U = n(267102),
    K = n(435558),
    G = n.n(K),
    F = n(892437),
    B = n(258873),
    V = n(622242),
    H = n(731738),
    W = n(834730),
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
    en = n(302614),
    er = n(489277),
    ei = n(28528),
    es = n(672396),
    el = n(652215),
    eo = n(375708),
    ea = n(261289);
let ec = G().throttle(
        () => {
            X.A.increment(
                { name: H.K.APP_CRASHED, tags: [`reason:${B.J.UNHANDLED_JS_ERROR}`, `level:${V.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    ed = 10 * Q.A.Millis.SECOND;
function eu(e) {
    let { error: t, onLock: n, onReload: s, onDisable: l, onCrashDisabled: o } = e,
        a = i.useMemo(() => new F.SpringValue(1), []),
        c = i.useRef(null),
        [d, u] = i.useState(!1),
        [h, f] = i.useState(!1),
        p = (0, g.bG)([Z.default], () => Z.default.getCurrentUser());
    (0, J.Ay)(
        () => (
            (c.current = setTimeout(A, ed)),
            z.A.track(el.HAw.NOTIFICATION_VIEWED, { notif_type: es.KS.OverlayCrashed }),
            () => {
                null != c.current && clearTimeout(c.current);
            }
        ),
    );
    let m = (p?.isStaff() ?? !1) || (p?.isStaffPersonal() ?? !1),
        A = i.useCallback(() => {
            (a.set(0), null != c.current && clearTimeout(c.current), (c.current = null), n?.(), o?.());
        }, [a, n, o]),
        v = i.useCallback(
            (e) => {
                h ||
                    (f(!0),
                    n?.(),
                    z.A.track(
                        el.HAw.NOTIFICATION_CLICKED,
                        { notif_type: es.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, h],
        ),
        y = i.useCallback(
            (e) => {
                (e.stopPropagation(), e.shiftKey ? (u(!0), null != c.current && clearTimeout(c.current)) : u(!1));
            },
            [u],
        ),
        x = i.useCallback(
            (e) => {
                (e.stopPropagation(), n?.(), l?.());
            },
            [l, n],
        ),
        w = (0, g.bG)([er.A], () => er.A.getFocusedRunningGame()),
        E = d
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(W.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: eo.intl.string(eo.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: ea.Xh,
                          children: [
                              (0, r.jsx)(W.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(W.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: ea.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        C = d ? null : eo.intl.string(eo.t.oEJEFq);
    return (0, r.jsx)(ei.$, {
        title: eo.intl.string(eo.t.U38qZj),
        body: E,
        hint: m ? C : void 0,
        confirmText: eo.intl.string(eo.t.a3HlgJ),
        cancelText: null != w ? eo.intl.string(eo.t.qIYnPo) : void 0,
        icon: (0, r.jsx)(q.A, { width: 40, height: 40, className: ea.Lo }),
        onNotificationClick: y,
        onConfirmClick: v,
        onCancelClick: null != w ? x : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: el.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: a,
        className: ea.Pl,
        wrapperClassName: ea.fl,
    });
}
class eh extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, $.JK)().location;
        this.setState({ error: e, info: t });
        let r = er.A.getTargetPID();
        (z.A.setOverlayCrashed(r, e), z.A.setInputLocked(!0, r));
        let i = (0, ee.St)(e, et.Ue.OutOfProcess, { extra: { info: t, location: n } });
        (z.A.track(el.HAw.APP_CRASHED, {
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
                ? (0, r.jsx)(en.A, {
                      className: ea.wz,
                      children: (0, r.jsx)(eu, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? er.A.getTargetPID();
                              (z.A.setInputLocked(!0, e), this.setState({ showError: !1 }));
                          },
                          onDisable: () => {
                              let e = er.A.getFocusedRunningGame();
                              null != e && Y.Ay.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? er.A.getTargetPID();
                              (z.A.updateOverlayState(e, et.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 }));
                          },
                          onReload: () => {
                              (z.A.setReloadOverlay(er.A.getTargetPID()), this.setState({ showError: !1 }));
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
var ef = n(97469),
    eg = n(164942),
    ep = n(597619),
    em = n(892019),
    eA = n(723702),
    ev = n(677134),
    ey = n(19575),
    ex = n(346142),
    ew = n(869146),
    eE = n(392164),
    eC = n(577063);
function eb(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && eA.isPlatformEmbedded && !n;
}
function eN(e) {
    let { windowKey: t, themeOverride: n } = e,
        { theme: r } = (0, m.wR)(),
        s = n ?? r;
    return (
        i.useLayoutEffect(() => {
            ey.Ay.setTrafficLightAppearance((0, p.M)(s) ? "dark" : "light", t);
        }, [s, t]),
        null
    );
}
class eO extends i.Component {
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
            eA.isPlatformEmbedded
                ? t.addEventListener("contextmenu", ev.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", ev.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds());
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                (ew.A.unmountWindow(this.props.windowKey), eA.isPlatformEmbedded && ey.Ay.close(this.props.windowKey));
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
            eA.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", ev.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", ev.contextMenuCallbackWeb),
            (0, d.r)(() => A.useModalsStore.setState((e) => ({ ...e, [v.KX]: [] }))),
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
                withTitleBar: s,
                guestWindow: o,
                clientThemesClassName: a,
                contentClassName: d,
                themeOverride: g,
                titleBarTheme: p,
                hideModals: m = !1,
                appContext: A,
            } = this.props,
            v = eb({ withTitleBar: s, isFullScreen: i }),
            w = n === eE.f,
            C = w ? eh : P.A;
        return (0, r.jsx)(c.Kd, {
            children: (0, r.jsxs)(
                eg.e,
                {
                    windowKey: n,
                    themeOverride: g,
                    children: [
                        v && (0, r.jsx)(eN, { windowKey: n, themeOverride: p }),
                        (0, r.jsx)(O.A, {
                            children: (0, r.jsxs)(y.xp, {
                                containerRef: this.rootRef,
                                children: [
                                    (0, r.jsx)(e_, {
                                        guestWindow: o,
                                        className: l()(a, { overlay: w }),
                                        children: (0, r.jsxs)(C, {
                                            children: [
                                                (0, r.jsx)(k.Al, {}),
                                                (0, r.jsx)(U.Wr, {
                                                    appContext: A ?? el.BRT.POPOUT,
                                                    renderWindow: o,
                                                    children: (0, r.jsx)(j.l, {
                                                        children: (0, r.jsxs)(M.Yf, {
                                                            children: [
                                                                (0, r.jsxs)("div", {
                                                                    className: eC.SW,
                                                                    children: [
                                                                        v &&
                                                                            (0, r.jsx)(h.N, {
                                                                                theme: p,
                                                                                children: (e) =>
                                                                                    (0, r.jsx)(S.cq, {
                                                                                        windowKey: n,
                                                                                        className: l()(e, eC.uv),
                                                                                    }),
                                                                            }),
                                                                        (0, r.jsx)("div", {
                                                                            className: l()(eC.Qs, d),
                                                                            children: t,
                                                                        }),
                                                                    ],
                                                                }),
                                                                !m && (0, r.jsx)(x.b, {}),
                                                                (0, r.jsx)(E.A, {}),
                                                                (0, r.jsx)(u.P, {}),
                                                                (0, r.jsx)(M.C8, {}),
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
                    ],
                },
                e,
            ),
        });
    }
}
let e_ = i.forwardRef(function (e, t) {
        let { guestWindow: n, className: s, children: o } = e,
            { lang: c, style: d, className: u } = (0, ep.xb)();
        (i.useEffect(() => {
            let e = n.document.documentElement;
            (a()(null != e, "Window document element was null"), e.setAttribute("style", d));
        }, [n, d]),
            i.useEffect(() => {
                let e = n.document.documentElement;
                (a()(null != e, "Window document element was null"), e.setAttribute("lang", c));
            }, [n, c]),
            (0, em.A)(n.document.documentElement));
        let h = l()(u, s, "in-popout");
        return (
            i.useLayoutEffect(() => {
                let e = n.document.documentElement;
                (a()(null != e, "Window document element was null"), e.setAttribute("class", h));
            }, [n, h]),
            (0, r.jsx)("div", { "data-popout-root": !0, ref: t, children: o })
        );
    }),
    eD = i.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: i } = (0, g.cf)([ew.A], () => ({
            guestWindow: ew.A.getWindow(e.windowKey),
            isFullScreen: ew.A.isWindowFullScreen(e.windowKey),
        }));
        a()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: l } = (0, g.cf)([N.Ay, _.Ay], () => ({
            forcedColors: N.Ay.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: _.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, L.A)(n, !1);
        let { analyticsLocations: o } = (0, I.Ay)(D.A.POPOUT_WINDOW),
            { clientThemesClassName: c, clientThemesCSS: d } = (0, T.Ay)(),
            u = (0, ef.NC)(),
            h = e.themeOverride ?? u;
        return null == n
            ? null
            : (0, r.jsx)(w.W, {
                  children: (0, r.jsx)(I.f5, {
                      value: o,
                      children: (0, r.jsx)(eO, {
                          ref: t,
                          ...e,
                          titleBarTheme: h,
                          guestWindow: n,
                          isFullScreen: i,
                          forcedColors: s,
                          connectedEmbeddedActivity: l,
                          clientThemesClassName: c,
                          clientThemesCSS: d,
                      }),
                  }),
              });
    });
