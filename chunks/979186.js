n.d(t, { q: () => ew, A: () => eN });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(284009),
    a = n.n(l),
    c = n(936504),
    u = n(121894),
    d = n(337836),
    h = n(43990),
    f = n(825437),
    p = n(17928),
    m = n(192308),
    g = n(231723),
    A = n(187322),
    v = n(638495),
    y = n(965830),
    x = n(318009),
    w = n(92960),
    E = n(14214),
    C = n(775602),
    N = n(697138),
    b = n(933958),
    O = n(793574),
    _ = n(688810),
    D = n(590703),
    I = n(681582),
    T = n(573435),
    j = n(71855),
    k = n(203480),
    S = n(670735),
    L = n(549205),
    P = n(750506),
    M = n(267102),
    R = n(435558),
    U = n.n(R),
    K = n(580929),
    G = n(258873),
    F = n(622242),
    V = n(731738),
    B = n(834730),
    H = n(780907),
    W = n(684013),
    Y = n(964486),
    z = n(807393),
    J = n(976860),
    X = n(287809),
    $ = n(144400),
    Z = n(927813),
    q = n(777334),
    Q = n(41984),
    ee = n(302614),
    et = n(489277),
    en = n(28528),
    er = n(672396),
    ei = n(652215),
    es = n(375708),
    eo = n(481234);
let el = U().throttle(
        () => {
            z.A.increment(
                { name: V.K.APP_CRASHED, tags: [`reason:${G.J.UNHANDLED_JS_ERROR}`, `level:${F.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    ea = 10 * Z.A.Millis.SECOND;
function ec(e) {
    let { error: t, onLock: n, onReload: s, onDisable: o, onCrashDisabled: l } = e,
        a = i.useMemo(() => new K.SpringValue(1), []),
        c = i.useRef(null),
        [u, d] = i.useState(!1),
        [h, f] = i.useState(!1),
        m = (0, p.bG)([X.default], () => X.default.getCurrentUser());
    (0, Y.Ay)(
        () => (
            (c.current = setTimeout(A, ea)),
            W.A.track(ei.HAw.NOTIFICATION_VIEWED, { notif_type: er.KS.OverlayCrashed }),
            () => {
                null != c.current && clearTimeout(c.current);
            }
        ),
    );
    let g = (m?.isStaff() ?? !1) || (m?.isStaffPersonal() ?? !1),
        A = i.useCallback(() => {
            a.set(0), null != c.current && clearTimeout(c.current), (c.current = null), n?.(), l?.();
        }, [a, n, l]),
        v = i.useCallback(
            (e) => {
                h ||
                    (f(!0),
                    n?.(),
                    W.A.track(
                        ei.HAw.NOTIFICATION_CLICKED,
                        { notif_type: er.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, h],
        ),
        y = i.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (d(!0), null != c.current && clearTimeout(c.current)) : d(!1);
            },
            [d],
        ),
        x = i.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), o?.();
            },
            [o, n],
        ),
        w = (0, p.bG)([et.A], () => et.A.getFocusedRunningGame()),
        E = u
            ? (0, r.jsxs)("div", {
                  children: [
                      (0, r.jsx)(B.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: es.intl.string(es.t.mn4eXC),
                      }),
                      (0, r.jsxs)("div", {
                          className: eo.Xh,
                          children: [
                              (0, r.jsx)(B.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, r.jsx)(B.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, r.jsx)("code", {
                                      className: eo.aY,
                                      children: (0, r.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        C = u ? null : es.intl.string(es.t.oEJEFq);
    return (0, r.jsx)(en.$, {
        title: es.intl.string(es.t.U38qZj),
        body: E,
        hint: g ? C : void 0,
        confirmText: es.intl.string(es.t.a3HlgJ),
        cancelText: null != w ? es.intl.string(es.t.qIYnPo) : void 0,
        icon: (0, r.jsx)($.A, { width: 40, height: 40, className: eo.Lo }),
        onNotificationClick: y,
        onConfirmClick: v,
        onCancelClick: null != w ? x : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: ei.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: a,
        className: eo.Pl,
        wrapperClassName: eo.fl,
    });
}
class eu extends i.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, J.JK)().location;
        this.setState({ error: e, info: t });
        let r = et.A.getTargetPID();
        W.A.setOverlayCrashed(r, e), W.A.setInputLocked(!0, r);
        let i = (0, q.St)(e, Q.Ue.OutOfProcess, { extra: { info: t, location: n } });
        W.A.track(ei.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: i,
            error_level: "fatal",
        }),
            el(),
            (this.pid = r);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: i } = this.state;
        return null != n
            ? i
                ? (0, r.jsx)(ee.A, {
                      className: eo.wz,
                      children: (0, r.jsx)(ec, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              W.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = et.A.getFocusedRunningGame();
                              null != e && H.Ay.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              W.A.updateOverlayState(e, Q.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              W.A.setReloadOverlay(et.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, r.jsx)("div", { className: t, children: e });
    }
}
var ed = n(97469),
    eh = n(258599),
    ef = n(597619),
    ep = n(723702),
    em = n(677134),
    eg = n(19575),
    eA = n(346142),
    ev = n(869146),
    ey = n(392164),
    ex = n(612802);
function ew(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && ep.isPlatformEmbedded && !n;
}
class eE extends i.Component {
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
            (0, eA.M)(e),
            e.addEventListener("blur", this.handleBlur),
            ep.isPlatformEmbedded
                ? t.addEventListener("contextmenu", em.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", em.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                ev.A.unmountWindow(this.props.windowKey), ep.isPlatformEmbedded && eg.Ay.close(this.props.windowKey);
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
            ep.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", em.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", em.contextMenuCallbackWeb),
            (0, u.r)(() => m.useModalsStore.setState((e) => ({ ...e, [g.KX]: [] }))),
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
        a()(null != r, "Window document head was null");
        let i = r.querySelector(`style[${D.Vg}]`);
        if (null != i) {
            i.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(D.Vg, "true"), (s.textContent = e), r.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, L.I)(n.documentElement)),
        [E.VT, E.rR, (0, w.LB)(t), ...(this.props.keybinds ?? [])]))
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
                guestWindow: l,
                clientThemesClassName: a,
                contentClassName: u,
                themeOverride: p,
                titleBarTheme: m,
                hideModals: g = !1,
                appContext: y,
            } = this.props,
            w = ew({ withTitleBar: s, isFullScreen: i }),
            E = n === ey.f,
            C = E ? eu : S.A;
        return (0, r.jsx)(c.Kd, {
            children: (0, r.jsx)(
                eh.e,
                {
                    windowKey: n,
                    themeOverride: p,
                    children: (0, r.jsx)(N.A, {
                        children: (0, r.jsxs)(A.xp, {
                            containerRef: this.rootRef,
                            children: [
                                (0, r.jsx)(eC, {
                                    guestWindow: l,
                                    className: o()(a, { overlay: E }),
                                    children: (0, r.jsxs)(C, {
                                        children: [
                                            (0, r.jsx)(T.Al, {}),
                                            (0, r.jsx)(M.Wr, {
                                                appContext: y ?? ei.BRT.POPOUT,
                                                renderWindow: l,
                                                children: (0, r.jsx)(I.l, {
                                                    children: (0, r.jsxs)(P.Yf, {
                                                        children: [
                                                            (0, r.jsxs)("div", {
                                                                className: ex.SW,
                                                                children: [
                                                                    w &&
                                                                        (0, r.jsx)(h.N, {
                                                                            theme: m,
                                                                            children: (e) =>
                                                                                (0, r.jsx)(j.cq, {
                                                                                    windowKey: n,
                                                                                    className: o()(e, ex.uv),
                                                                                }),
                                                                        }),
                                                                    (0, r.jsx)("div", {
                                                                        className: o()(ex.Qs, u),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !g && (0, r.jsx)(v.b, {}),
                                                            (0, r.jsx)(x.A, {}),
                                                            (0, r.jsx)(d.P, {}),
                                                            (0, r.jsx)(P.C8, {}),
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
let eC = i.forwardRef(function (e, t) {
        let { guestWindow: n, className: s, children: l } = e,
            { lang: c, style: u, className: d } = (0, ef.xb)();
        i.useEffect(() => {
            let e = n.document.documentElement;
            a()(null != e, "Window document element was null"), e.setAttribute("style", u);
        }, [n, u]),
            i.useEffect(() => {
                let e = n.document.documentElement;
                a()(null != e, "Window document element was null"), e.setAttribute("lang", c);
            }, [n, c]);
        let h = o()(d, s, "in-popout");
        return (
            i.useLayoutEffect(() => {
                let e = n.document.documentElement;
                a()(null != e, "Window document element was null"), e.setAttribute("class", h);
            }, [n, h]),
            (0, r.jsx)("div", { "data-popout-root": !0, ref: t, children: l })
        );
    }),
    eN = i.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: i } = (0, p.cf)([ev.A], () => ({
            guestWindow: ev.A.getWindow(e.windowKey),
            isFullScreen: ev.A.isWindowFullScreen(e.windowKey),
        }));
        a()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: o } = (0, p.cf)([C.Ay, b.Ay], () => ({
            forcedColors: C.Ay.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: b.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, k.A)(n, !1);
        let { analyticsLocations: l } = (0, _.Ay)(O.A.POPOUT_WINDOW),
            { clientThemesClassName: c, clientThemesCSS: u } = (0, D.Ay)(),
            d = (0, ed.NC)(),
            h = e.themeOverride ?? d;
        return null == n
            ? null
            : (0, r.jsx)(y.W, {
                  children: (0, r.jsx)(_.f5, {
                      value: l,
                      children: (0, r.jsx)(eE, {
                          ref: t,
                          ...e,
                          titleBarTheme: h,
                          guestWindow: n,
                          isFullScreen: i,
                          forcedColors: s,
                          connectedEmbeddedActivity: o,
                          clientThemesClassName: c,
                          clientThemesCSS: u,
                      }),
                  }),
              });
    });
