"use strict";
n.d(t, { q: () => eT, A: () => ey });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    c = n(121894),
    d = n(337836),
    _ = n(43990),
    f = n(825437),
    h = n(17928),
    p = n(192308),
    E = n(231723),
    m = n(187322),
    g = n(373495),
    A = n(30169),
    I = n(318009),
    T = n(92960),
    S = n(14214),
    N = n(775602),
    y = n(697138),
    C = n(933958),
    v = n(793574),
    O = n(688810),
    R = n(590703),
    b = n(681582),
    D = n(573435),
    L = n(71855),
    w = n(203480),
    M = n(670735),
    P = n(549205),
    x = n(750506),
    U = n(267102),
    k = n(735438),
    G = n.n(k),
    F = n(785651),
    V = n(258873),
    B = n(622242),
    H = n(731738),
    j = n(834730),
    Y = n(780907),
    W = n(684013),
    K = n(964486),
    z = n(807393),
    $ = n(976860),
    q = n(287809),
    Z = n(144400),
    X = n(927813),
    Q = n(777334),
    J = n(41984),
    ee = n(302614),
    et = n(489277),
    en = n(28528),
    ei = n(672396),
    er = n(652215),
    es = n(375708),
    ea = n(481234);
let eo = G().throttle(
        () => {
            z.A.increment(
                { name: H.K.APP_CRASHED, tags: [`reason:${V.J.UNHANDLED_JS_ERROR}`, `level:${B.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    el = 10 * X.A.Millis.SECOND;
function eu(e) {
    let { error: t, onLock: n, onReload: s, onDisable: a, onCrashDisabled: o } = e,
        l = r.useMemo(() => new F.SpringValue(1), []),
        u = r.useRef(null),
        [c, d] = r.useState(!1),
        [_, f] = r.useState(!1),
        p = (0, h.bG)([q.default], () => q.default.getCurrentUser());
    (0, K.Ay)(
        () => (
            (u.current = setTimeout(m, el)),
            W.A.track(er.HAw.NOTIFICATION_VIEWED, { notif_type: ei.KS.OverlayCrashed }),
            () => {
                null != u.current && clearTimeout(u.current);
            }
        ),
    );
    let E = (p?.isStaff() ?? !1) || (p?.isStaffPersonal() ?? !1),
        m = r.useCallback(() => {
            l.set(0), null != u.current && clearTimeout(u.current), (u.current = null), n?.(), o?.();
        }, [l, n, o]),
        g = r.useCallback(
            (e) => {
                _ ||
                    (f(!0),
                    n?.(),
                    W.A.track(
                        er.HAw.NOTIFICATION_CLICKED,
                        { notif_type: ei.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, _],
        ),
        A = r.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (d(!0), null != u.current && clearTimeout(u.current)) : d(!1);
            },
            [d],
        ),
        I = r.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), a?.();
            },
            [a, n],
        ),
        T = (0, h.bG)([et.A], () => et.A.getFocusedRunningGame()),
        S = c
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(j.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: es.intl.string(es.t.mn4eXC),
                      }),
                      (0, i.jsxs)("div", {
                          className: ea.Xh,
                          children: [
                              (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, i.jsx)("code", {
                                      className: ea.aY,
                                      children: (0, i.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        N = c ? null : es.intl.string(es.t.oEJEFq);
    return (0, i.jsx)(en.$, {
        title: es.intl.string(es.t.U38qZj),
        body: S,
        hint: E ? N : void 0,
        confirmText: es.intl.string(es.t.a3HlgJ),
        cancelText: null != T ? es.intl.string(es.t.qIYnPo) : void 0,
        icon: (0, i.jsx)(Z.A, { width: 40, height: 40, className: ea.Lo }),
        onNotificationClick: A,
        onConfirmClick: g,
        onCancelClick: null != T ? I : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: er.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: l,
        className: ea.Pl,
        wrapperClassName: ea.fl,
    });
}
class ec extends r.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, $.JK)().location;
        this.setState({ error: e, info: t });
        let i = et.A.getTargetPID();
        W.A.setOverlayCrashed(i, e), W.A.setInputLocked(!0, i);
        let r = (0, Q.St)(e, J.Ue.OutOfProcess, { extra: { info: t, location: n } });
        W.A.track(er.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: "fatal",
        }),
            eo(),
            (this.pid = i);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: r } = this.state;
        return null != n
            ? r
                ? (0, i.jsx)(ee.A, {
                      className: ea.wz,
                      children: (0, i.jsx)(eu, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              W.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = et.A.getFocusedRunningGame();
                              null != e && Y.Ay.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              W.A.updateOverlayState(e, J.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              W.A.setReloadOverlay(et.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, i.jsx)("div", { className: t, children: e });
    }
}
var ed = n(97469),
    e_ = n(164942),
    ef = n(597619),
    eh = n(723702),
    ep = n(677134),
    eE = n(19575),
    em = n(346142),
    eg = n(869146),
    eA = n(392164),
    eI = n(612802);
function eT(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && eh.isPlatformEmbedded && !n;
}
class eS extends r.Component {
    rootRef = r.createRef();
    _cleanupWindowActionCreators = void 0;
    _combokeys = null;
    static defaultProps = { withTitleBar: !0 };
    componentDidMount() {
        let { guestWindow: e } = this.props,
            t = e.document;
        null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")),
            this.updateTitle(),
            this.updateClientTheme(),
            (0, em.M)(e),
            e.addEventListener("blur", this.handleBlur),
            eh.isPlatformEmbedded
                ? t.addEventListener("contextmenu", ep.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", ep.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                eg.A.unmountWindow(this.props.windowKey), eh.isPlatformEmbedded && eE.Ay.close(this.props.windowKey);
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
            eh.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", ep.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", ep.contextMenuCallbackWeb),
            (0, c.r)(() => p.useModalsStore.setState((e) => ({ ...e, [E.KX]: [] }))),
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
            i = n.head;
        l()(null != i, "Window document head was null");
        let r = i.querySelector(`style[${R.Vg}]`);
        if (null != r) {
            r.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(R.Vg, "true"), (s.textContent = e), i.appendChild(s);
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
                isFullScreen: r,
                withTitleBar: s,
                guestWindow: o,
                clientThemesClassName: l,
                contentClassName: c,
                themeOverride: h,
                titleBarTheme: p,
                hideModals: E = !1,
                appContext: A,
            } = this.props,
            T = eT({ withTitleBar: s, isFullScreen: r }),
            S = n === eA.f ? ec : M.A;
        return (0, i.jsx)(u.Kd, {
            children: (0, i.jsx)(
                e_.e,
                {
                    windowKey: n,
                    themeOverride: h,
                    children: (0, i.jsx)(y.A, {
                        children: (0, i.jsxs)(m.xp, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(eN, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, i.jsxs)(S, {
                                        children: [
                                            (0, i.jsx)(D.Al, {}),
                                            (0, i.jsx)(U.Wr, {
                                                appContext: A ?? er.BRT.POPOUT,
                                                renderWindow: o,
                                                children: (0, i.jsx)(b.l, {
                                                    children: (0, i.jsxs)(x.Yf, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: eI.SW,
                                                                children: [
                                                                    T &&
                                                                        (0, i.jsx)(_.N, {
                                                                            theme: p,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(L.cq, {
                                                                                    windowKey: n,
                                                                                    className: a()(e, eI.uv),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: a()(eI.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !E && (0, i.jsx)(g.b, {}),
                                                            (0, i.jsx)(I.A, {}),
                                                            (0, i.jsx)(d.P, {}),
                                                            (0, i.jsx)(x.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(f.Ut, {}),
                            ],
                        }),
                    }),
                },
                e,
            ),
        });
    }
}
let eN = r.forwardRef(function (e, t) {
        let { guestWindow: n, className: s, children: o } = e,
            { lang: u, style: c, className: d } = (0, ef.xb)();
        return (
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", c);
            }, [n, c]),
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", u);
            }, [n, u]),
            (0, i.jsx)("div", { "data-popout-root": !0, ref: t, className: a()(d, s), children: o })
        );
    }),
    ey = r.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: r } = (0, h.cf)([eg.A], () => ({
            guestWindow: eg.A.getWindow(e.windowKey),
            isFullScreen: eg.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: a } = (0, h.cf)([N.A, C.Ay], () => ({
            forcedColors: N.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: C.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, w.A)(n, !1);
        let { analyticsLocations: o } = (0, O.Ay)(v.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: c } = (0, R.Ay)(),
            d = (0, ed.NC)(),
            _ = e.themeOverride ?? d;
        return null == n
            ? null
            : (0, i.jsx)(A.W, {
                  children: (0, i.jsx)(O.f5, {
                      value: o,
                      children: (0, i.jsx)(eS, {
                          ref: t,
                          ...e,
                          titleBarTheme: _,
                          guestWindow: n,
                          isFullScreen: r,
                          forcedColors: s,
                          connectedEmbeddedActivity: a,
                          clientThemesClassName: u,
                          clientThemesCSS: c,
                      }),
                  }),
              });
    });
