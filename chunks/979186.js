"use strict";
n.d(t, { q: () => eg, A: () => eC });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(284009),
    o = n.n(l),
    d = n(936504),
    c = n(121894),
    u = n(337836),
    _ = n(43990),
    E = n(825437),
    A = n(17928),
    h = n(192308),
    I = n(231723),
    f = n(187322),
    p = n(638495),
    T = n(965830),
    m = n(318009),
    g = n(92960),
    S = n(14214),
    N = n(775602),
    C = n(697138),
    R = n(933958),
    O = n(793574),
    L = n(688810),
    D = n(590703),
    y = n(681582),
    v = n(573435),
    b = n(71855),
    M = n(203480),
    P = n(670735),
    U = n(549205),
    w = n(750506),
    G = n(267102),
    x = n(435558),
    k = n.n(x),
    F = n(580929),
    V = n(258873),
    B = n(622242),
    H = n(731738),
    j = n(834730),
    W = n(780907),
    Y = n(684013),
    K = n(964486),
    $ = n(807393),
    z = n(976860),
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
    ea = n(375708),
    es = n(481234);
let el = k().throttle(
        () => {
            $.A.increment(
                { name: H.K.APP_CRASHED, tags: [`reason:${V.J.UNHANDLED_JS_ERROR}`, `level:${B.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    eo = 10 * X.A.Millis.SECOND;
function ed(e) {
    let { error: t, onLock: n, onReload: a, onDisable: s, onCrashDisabled: l } = e,
        o = r.useMemo(() => new F.SpringValue(1), []),
        d = r.useRef(null),
        [c, u] = r.useState(!1),
        [_, E] = r.useState(!1),
        h = (0, A.bG)([q.default], () => q.default.getCurrentUser());
    (0, K.Ay)(
        () => (
            (d.current = setTimeout(f, eo)),
            Y.A.track(er.HAw.NOTIFICATION_VIEWED, { notif_type: ei.KS.OverlayCrashed }),
            () => {
                null != d.current && clearTimeout(d.current);
            }
        ),
    );
    let I = (h?.isStaff() ?? !1) || (h?.isStaffPersonal() ?? !1),
        f = r.useCallback(() => {
            o.set(0), null != d.current && clearTimeout(d.current), (d.current = null), n?.(), l?.();
        }, [o, n, l]),
        p = r.useCallback(
            (e) => {
                _ ||
                    (E(!0),
                    n?.(),
                    Y.A.track(
                        er.HAw.NOTIFICATION_CLICKED,
                        { notif_type: ei.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => a?.(), 200));
            },
            [n, a, _],
        ),
        T = r.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (u(!0), null != d.current && clearTimeout(d.current)) : u(!1);
            },
            [u],
        ),
        m = r.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), s?.();
            },
            [s, n],
        ),
        g = (0, A.bG)([et.A], () => et.A.getFocusedRunningGame()),
        S = c
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(j.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: ea.intl.string(ea.t.mn4eXC),
                      }),
                      (0, i.jsxs)("div", {
                          className: es.Xh,
                          children: [
                              (0, i.jsx)(j.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, i.jsx)(j.E, {
                                  variant: "text-xxs/normal",
                                  color: "text-subtle",
                                  children: (0, i.jsx)("code", {
                                      className: es.aY,
                                      children: (0, i.jsx)("pre", { children: t.stack }),
                                  }),
                              }),
                          ],
                      }),
                  ],
              })
            : null,
        N = c ? null : ea.intl.string(ea.t.oEJEFq);
    return (0, i.jsx)(en.$, {
        title: ea.intl.string(ea.t.U38qZj),
        body: S,
        hint: I ? N : void 0,
        confirmText: ea.intl.string(ea.t.a3HlgJ),
        cancelText: null != g ? ea.intl.string(ea.t.qIYnPo) : void 0,
        icon: (0, i.jsx)(Z.A, { width: 40, height: 40, className: es.Lo }),
        onNotificationClick: T,
        onConfirmClick: p,
        onCancelClick: null != g ? m : void 0,
        onDismissClick: n,
        expand: !0,
        locked: !0,
        notificationId: "overlay-crashed",
        index: 0,
        status: er.yFH.ACTIVE,
        containerRef: null,
        contentOpacity: o,
        className: es.Pl,
        wrapperClassName: es.fl,
    });
}
class ec extends r.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, z.JK)().location;
        this.setState({ error: e, info: t });
        let i = et.A.getTargetPID();
        Y.A.setOverlayCrashed(i, e), Y.A.setInputLocked(!0, i);
        let r = (0, Q.St)(e, J.Ue.OutOfProcess, { extra: { info: t, location: n } });
        Y.A.track(er.HAw.APP_CRASHED, {
            path: n.pathname,
            extra: t,
            error_message: e.message,
            error_stack: e.stack,
            sentry_issue_id: r,
            error_level: "fatal",
        }),
            el(),
            (this.pid = i);
    }
    render() {
        let { children: e, className: t } = this.props,
            { error: n, showError: r } = this.state;
        return null != n
            ? r
                ? (0, i.jsx)(ee.A, {
                      className: es.wz,
                      children: (0, i.jsx)(ed, {
                          error: n,
                          onLock: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              Y.A.setInputLocked(!0, e), this.setState({ showError: !1 });
                          },
                          onDisable: () => {
                              let e = et.A.getFocusedRunningGame();
                              null != e && W.Ay.toggleOverlay(e, !1, !1);
                          },
                          onCrashDisabled: () => {
                              let e = this.pid ?? et.A.getTargetPID();
                              Y.A.updateOverlayState(e, J.AR.OVERLAY_CRASHED_DISABLED, "OOPOverlayErrorBoundary"),
                                  this.setState({ showError: !1 });
                          },
                          onReload: () => {
                              Y.A.setReloadOverlay(et.A.getTargetPID()), this.setState({ showError: !1 });
                          },
                      }),
                  })
                : null
            : (0, i.jsx)("div", { className: t, children: e });
    }
}
var eu = n(97469),
    e_ = n(258599),
    eE = n(597619),
    eA = n(723702),
    eh = n(677134),
    eI = n(19575),
    ef = n(346142),
    ep = n(869146),
    eT = n(392164),
    em = n(612802);
function eg(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && eA.isPlatformEmbedded && !n;
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
            (0, ef.M)(e),
            e.addEventListener("blur", this.handleBlur),
            eA.isPlatformEmbedded
                ? t.addEventListener("contextmenu", eh.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", eh.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                ep.A.unmountWindow(this.props.windowKey), eA.isPlatformEmbedded && eI.Ay.close(this.props.windowKey);
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
            eA.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", eh.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", eh.contextMenuCallbackWeb),
            (0, c.r)(() => h.useModalsStore.setState((e) => ({ ...e, [I.KX]: [] }))),
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
        o()(null != i, "Window document head was null");
        let r = i.querySelector(`style[${D.Vg}]`);
        if (null != r) {
            r.textContent = e;
            return;
        }
        let a = n.createElement("style");
        a.setAttribute(D.Vg, "true"), (a.textContent = e), i.appendChild(a);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, U.I)(n.documentElement)),
        [S.VT, S.rR, (0, g.LB)(t), ...(this.props.keybinds ?? [])]))
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
                withTitleBar: a,
                guestWindow: l,
                clientThemesClassName: o,
                contentClassName: c,
                themeOverride: A,
                titleBarTheme: h,
                hideModals: I = !1,
                appContext: T,
            } = this.props,
            g = eg({ withTitleBar: a, isFullScreen: r }),
            S = n === eT.f,
            N = S ? ec : P.A;
        return (0, i.jsx)(d.Kd, {
            children: (0, i.jsx)(
                e_.e,
                {
                    windowKey: n,
                    themeOverride: A,
                    children: (0, i.jsx)(C.A, {
                        children: (0, i.jsxs)(f.xp, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(eN, {
                                    guestWindow: l,
                                    className: s()(o, { overlay: S }),
                                    children: (0, i.jsxs)(N, {
                                        children: [
                                            (0, i.jsx)(v.Al, {}),
                                            (0, i.jsx)(G.Wr, {
                                                appContext: T ?? er.BRT.POPOUT,
                                                renderWindow: l,
                                                children: (0, i.jsx)(y.l, {
                                                    children: (0, i.jsxs)(w.Yf, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: em.SW,
                                                                children: [
                                                                    g &&
                                                                        (0, i.jsx)(_.N, {
                                                                            theme: h,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(b.cq, {
                                                                                    windowKey: n,
                                                                                    className: s()(e, em.uv),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: s()(em.Qs, c),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !I && (0, i.jsx)(p.b, {}),
                                                            (0, i.jsx)(m.A, {}),
                                                            (0, i.jsx)(u.P, {}),
                                                            (0, i.jsx)(w.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(E.Ut, {}),
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
        let { guestWindow: n, className: a, children: l } = e,
            { lang: d, style: c, className: u } = (0, eE.xb)();
        r.useEffect(() => {
            let e = n.document.documentElement;
            o()(null != e, "Window document element was null"), e.setAttribute("style", c);
        }, [n, c]),
            r.useEffect(() => {
                let e = n.document.documentElement;
                o()(null != e, "Window document element was null"), e.setAttribute("lang", d);
            }, [n, d]);
        let _ = s()(u, a, "in-popout");
        return (
            r.useLayoutEffect(() => {
                let e = n.document.documentElement;
                o()(null != e, "Window document element was null"), e.setAttribute("class", _);
            }, [n, _]),
            (0, i.jsx)("div", { "data-popout-root": !0, ref: t, children: l })
        );
    }),
    eC = r.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: r } = (0, A.cf)([ep.A], () => ({
            guestWindow: ep.A.getWindow(e.windowKey),
            isFullScreen: ep.A.isWindowFullScreen(e.windowKey),
        }));
        o()(null != n, "Missing guestWindow reference");
        let { forcedColors: a, connectedEmbeddedActivity: s } = (0, A.cf)([N.Ay, R.Ay], () => ({
            forcedColors: N.Ay.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: R.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, M.A)(n, !1);
        let { analyticsLocations: l } = (0, L.Ay)(O.A.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: c } = (0, D.Ay)(),
            u = (0, eu.NC)(),
            _ = e.themeOverride ?? u;
        return null == n
            ? null
            : (0, i.jsx)(T.W, {
                  children: (0, i.jsx)(L.f5, {
                      value: l,
                      children: (0, i.jsx)(eS, {
                          ref: t,
                          ...e,
                          titleBarTheme: _,
                          guestWindow: n,
                          isFullScreen: r,
                          forcedColors: a,
                          connectedEmbeddedActivity: s,
                          clientThemesClassName: d,
                          clientThemesCSS: c,
                      }),
                  }),
              });
    });
