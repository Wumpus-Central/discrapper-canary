"use strict";
n.d(t, { q: () => eT, A: () => eC });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    d = n(936504),
    _ = n(121894),
    u = n(337836),
    c = n(43990),
    E = n(825437),
    h = n(17928),
    m = n(192308),
    f = n(231723),
    g = n(187322),
    p = n(373495),
    A = n(965830),
    I = n(318009),
    T = n(92960),
    S = n(14214),
    N = n(775602),
    C = n(697138),
    R = n(933958),
    O = n(793574),
    y = n(688810),
    v = n(590703),
    D = n(681582),
    L = n(573435),
    b = n(71855),
    w = n(203480),
    P = n(670735),
    k = n(549205),
    M = n(750506),
    U = n(267102),
    x = n(735438),
    G = n.n(x),
    V = n(419354),
    F = n(258873),
    B = n(622242),
    H = n(731738),
    j = n(834730),
    W = n(780907),
    Y = n(684013),
    K = n(964486),
    z = n(831062),
    $ = n(976860),
    q = n(287809),
    X = n(144400),
    Z = n(927813),
    Q = n(777334),
    J = n(41984),
    ee = n(302614),
    et = n(489277),
    en = n(28528),
    ei = n(672396),
    er = n(652215),
    es = n(985018),
    ea = n(481234);
let eo = G().throttle(
        () => {
            z.A.increment(
                { name: H.K.APP_CRASHED, tags: [`reason:${F.J.UNHANDLED_JS_ERROR}`, `level:${B.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    el = 10 * Z.A.Millis.SECOND;
function ed(e) {
    let { error: t, onLock: n, onReload: s, onDisable: a, onCrashDisabled: o } = e,
        l = r.useMemo(() => new V.SpringValue(1), []),
        d = r.useRef(null),
        [_, u] = r.useState(!1),
        [c, E] = r.useState(!1),
        m = (0, h.bG)([q.default], () => q.default.getCurrentUser());
    (0, K.Ay)(
        () => (
            (d.current = setTimeout(g, el)),
            Y.A.track(er.HAw.NOTIFICATION_VIEWED, { notif_type: ei.KS.OverlayCrashed }),
            () => {
                null != d.current && clearTimeout(d.current);
            }
        ),
    );
    let f = (m?.isStaff() ?? !1) || (m?.isStaffPersonal() ?? !1),
        g = r.useCallback(() => {
            l.set(0), null != d.current && clearTimeout(d.current), (d.current = null), n?.(), o?.();
        }, [l, n, o]),
        p = r.useCallback(
            (e) => {
                c ||
                    (E(!0),
                    n?.(),
                    Y.A.track(
                        er.HAw.NOTIFICATION_CLICKED,
                        { notif_type: ei.KS.OverlayCrashed, action_type: "reload" },
                        !0,
                    ),
                    e.stopPropagation(),
                    setTimeout(() => s?.(), 200));
            },
            [n, s, c],
        ),
        A = r.useCallback(
            (e) => {
                e.stopPropagation(), e.shiftKey ? (u(!0), null != d.current && clearTimeout(d.current)) : u(!1);
            },
            [u],
        ),
        I = r.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), a?.();
            },
            [a, n],
        ),
        T = (0, h.bG)([et.A], () => et.A.getFocusedRunningGame()),
        S = _
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
        N = _ ? null : es.intl.string(es.t.oEJEFq);
    return (0, i.jsx)(en.$, {
        title: es.intl.string(es.t.U38qZj),
        body: S,
        hint: f ? N : void 0,
        confirmText: es.intl.string(es.t.a3HlgJ),
        cancelText: null != T ? es.intl.string(es.t.qIYnPo) : void 0,
        icon: (0, i.jsx)(X.A, { width: 40, height: 40, className: ea.Lo }),
        onNotificationClick: A,
        onConfirmClick: p,
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
class e_ extends r.PureComponent {
    state = { error: null, showError: !0, info: null };
    pid = null;
    componentDidCatch(e, t) {
        let n = (0, $.JK)().location;
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
    ec = n(164942),
    eE = n(597619),
    eh = n(723702),
    em = n(677134),
    ef = n(19575),
    eg = n(346142),
    ep = n(869146),
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
            (0, eg.M)(e),
            e.addEventListener("blur", this.handleBlur),
            eh.isPlatformEmbedded
                ? t.addEventListener("contextmenu", em.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", em.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                ep.A.unmountWindow(this.props.windowKey), eh.isPlatformEmbedded && ef.Ay.close(this.props.windowKey);
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
                ? t.removeEventListener("contextmenu", em.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", em.contextMenuCallbackWeb),
            (0, _.r)(() => m.useModalsStore.setState((e) => ({ ...e, [f.KX]: [] }))),
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
        let r = i.querySelector(`style[${v.Vg}]`);
        if (null != r) {
            r.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(v.Vg, "true"), (s.textContent = e), i.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, k.I)(n.documentElement)),
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
                contentClassName: _,
                themeOverride: h,
                titleBarTheme: m,
                hideModals: f = !1,
                appContext: A,
            } = this.props,
            T = eT({ withTitleBar: s, isFullScreen: r }),
            S = n === eA.f ? e_ : P.A;
        return (0, i.jsx)(d.Kd, {
            children: (0, i.jsx)(
                ec.e,
                {
                    windowKey: n,
                    themeOverride: h,
                    children: (0, i.jsx)(C.A, {
                        children: (0, i.jsxs)(g.xp, {
                            containerRef: this.rootRef,
                            children: [
                                (0, i.jsx)(eN, {
                                    guestWindow: o,
                                    className: l,
                                    children: (0, i.jsxs)(S, {
                                        children: [
                                            (0, i.jsx)(L.Al, {}),
                                            (0, i.jsx)(U.Wr, {
                                                appContext: A ?? er.BRT.POPOUT,
                                                renderWindow: o,
                                                children: (0, i.jsx)(D.l, {
                                                    children: (0, i.jsxs)(M.Yf, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: eI.SW,
                                                                children: [
                                                                    T &&
                                                                        (0, i.jsx)(c.N, {
                                                                            theme: m,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(b.cq, {
                                                                                    windowKey: n,
                                                                                    className: a()(e, eI.uv),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: a()(eI.Qs, _),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !f && (0, i.jsx)(p.b, {}),
                                                            (0, i.jsx)(I.A, {}),
                                                            (0, i.jsx)(u.P, {}),
                                                            (0, i.jsx)(M.C8, {}),
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
        let { guestWindow: n, className: s, children: o } = e,
            { lang: d, style: _, className: u } = (0, eE.xb)();
        return (
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", _);
            }, [n, _]),
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", d);
            }, [n, d]),
            (0, i.jsx)("div", { "data-popout-root": !0, ref: t, className: a()(u, s), children: o })
        );
    }),
    eC = r.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: r } = (0, h.cf)([ep.A], () => ({
            guestWindow: ep.A.getWindow(e.windowKey),
            isFullScreen: ep.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: a } = (0, h.cf)([N.A, R.Ay], () => ({
            forcedColors: N.A.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: R.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, w.A)(n, !1);
        let { analyticsLocations: o } = (0, y.Ay)(O.A.POPOUT_WINDOW),
            { clientThemesClassName: d, clientThemesCSS: _ } = (0, v.Ay)(),
            u = (0, eu.NC)(),
            c = e.themeOverride ?? u;
        return null == n
            ? null
            : (0, i.jsx)(A.W, {
                  children: (0, i.jsx)(y.f5, {
                      value: o,
                      children: (0, i.jsx)(eS, {
                          ref: t,
                          ...e,
                          titleBarTheme: c,
                          guestWindow: n,
                          isFullScreen: r,
                          forcedColors: s,
                          connectedEmbeddedActivity: a,
                          clientThemesClassName: d,
                          clientThemesCSS: _,
                      }),
                  }),
              });
    });
