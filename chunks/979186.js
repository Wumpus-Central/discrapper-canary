"use strict";
n.d(t, { q: () => eT, A: () => eC });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(284009),
    l = n.n(o),
    u = n(936504),
    d = n(121894),
    c = n(337836),
    _ = n(43990),
    h = n(825437),
    f = n(17928),
    E = n(192308),
    p = n(231723),
    m = n(187322),
    g = n(638495),
    A = n(30169),
    I = n(318009),
    T = n(92960),
    S = n(14214),
    N = n(775602),
    C = n(697138),
    y = n(933958),
    v = n(793574),
    R = n(688810),
    O = n(590703),
    b = n(681582),
    L = n(573435),
    D = n(71855),
    P = n(203480),
    w = n(670735),
    M = n(549205),
    x = n(750506),
    U = n(267102),
    k = n(735438),
    G = n.n(k),
    V = n(580929),
    F = n(258873),
    B = n(622242),
    j = n(731738),
    H = n(834730),
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
    es = n(375708),
    ea = n(481234);
let eo = G().throttle(
        () => {
            $.A.increment(
                { name: j.K.APP_CRASHED, tags: [`reason:${F.J.UNHANDLED_JS_ERROR}`, `level:${B.k.FATAL}`] },
                !0,
            );
        },
        100,
        { trailing: !1 },
    ),
    el = 10 * X.A.Millis.SECOND;
function eu(e) {
    let { error: t, onLock: n, onReload: s, onDisable: a, onCrashDisabled: o } = e,
        l = r.useMemo(() => new V.SpringValue(1), []),
        u = r.useRef(null),
        [d, c] = r.useState(!1),
        [_, h] = r.useState(!1),
        E = (0, f.bG)([q.default], () => q.default.getCurrentUser());
    (0, K.Ay)(
        () => (
            (u.current = setTimeout(m, el)),
            Y.A.track(er.HAw.NOTIFICATION_VIEWED, { notif_type: ei.KS.OverlayCrashed }),
            () => {
                null != u.current && clearTimeout(u.current);
            }
        ),
    );
    let p = (E?.isStaff() ?? !1) || (E?.isStaffPersonal() ?? !1),
        m = r.useCallback(() => {
            l.set(0), null != u.current && clearTimeout(u.current), (u.current = null), n?.(), o?.();
        }, [l, n, o]),
        g = r.useCallback(
            (e) => {
                _ ||
                    (h(!0),
                    n?.(),
                    Y.A.track(
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
                e.stopPropagation(), e.shiftKey ? (c(!0), null != u.current && clearTimeout(u.current)) : c(!1);
            },
            [c],
        ),
        I = r.useCallback(
            (e) => {
                e.stopPropagation(), n?.(), a?.();
            },
            [a, n],
        ),
        T = (0, f.bG)([et.A], () => et.A.getFocusedRunningGame()),
        S = d
            ? (0, i.jsxs)("div", {
                  children: [
                      (0, i.jsx)(H.E, {
                          variant: "text-md/semibold",
                          color: "text-strong",
                          children: es.intl.string(es.t.mn4eXC),
                      }),
                      (0, i.jsxs)("div", {
                          className: ea.Xh,
                          children: [
                              (0, i.jsx)(H.E, { variant: "text-sm/normal", color: "text-subtle", children: t.message }),
                              (0, i.jsx)(H.E, {
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
        N = d ? null : es.intl.string(es.t.oEJEFq);
    return (0, i.jsx)(en.$, {
        title: es.intl.string(es.t.U38qZj),
        body: S,
        hint: p ? N : void 0,
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
class ed extends r.PureComponent {
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
var ec = n(97469),
    e_ = n(258599),
    eh = n(597619),
    ef = n(723702),
    eE = n(677134),
    ep = n(19575),
    em = n(346142),
    eg = n(869146),
    eA = n(392164),
    eI = n(612802);
function eT(e) {
    let { withTitleBar: t, isFullScreen: n } = e;
    return t && ef.isPlatformEmbedded && !n;
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
            ef.isPlatformEmbedded
                ? t.addEventListener("contextmenu", eE.contextMenuCallbackNative, !1)
                : t.addEventListener("contextmenu", eE.contextMenuCallbackWeb, !1),
            e.addEventListener("beforeunload", this.beforeUnload),
            this.registerPopoutGlobalKeybinds();
    }
    beforeUnload = (e) => {
        let { onBeforeUnload: t } = this.props,
            n = () => {
                eg.A.unmountWindow(this.props.windowKey), ef.isPlatformEmbedded && ep.Ay.close(this.props.windowKey);
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
            ef.isPlatformEmbedded
                ? t.removeEventListener("contextmenu", eE.contextMenuCallbackNative)
                : t.removeEventListener("contextmenu", eE.contextMenuCallbackWeb),
            (0, d.r)(() => E.useModalsStore.setState((e) => ({ ...e, [p.KX]: [] }))),
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
        let r = i.querySelector(`style[${O.Vg}]`);
        if (null != r) {
            r.textContent = e;
            return;
        }
        let s = n.createElement("style");
        s.setAttribute(O.Vg, "true"), (s.textContent = e), i.appendChild(s);
    }
    handleBlur = () => {
        this.props.onBlur?.();
    };
    registerPopoutGlobalKeybinds() {
        let { guestWindow: e, channelId: t } = this.props,
            n = e.document;
        for (let e of ((this._combokeys = (0, M.I)(n.documentElement)),
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
                contentClassName: d,
                themeOverride: f,
                titleBarTheme: E,
                hideModals: p = !1,
                appContext: A,
            } = this.props,
            T = eT({ withTitleBar: s, isFullScreen: r }),
            S = n === eA.f ? ed : w.A;
        return (0, i.jsx)(u.Kd, {
            children: (0, i.jsx)(
                e_.e,
                {
                    windowKey: n,
                    themeOverride: f,
                    children: (0, i.jsx)(C.A, {
                        children: (0, i.jsxs)(m.xp, {
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
                                                children: (0, i.jsx)(b.l, {
                                                    children: (0, i.jsxs)(x.Yf, {
                                                        children: [
                                                            (0, i.jsxs)("div", {
                                                                className: eI.SW,
                                                                children: [
                                                                    T &&
                                                                        (0, i.jsx)(_.N, {
                                                                            theme: E,
                                                                            children: (e) =>
                                                                                (0, i.jsx)(D.cq, {
                                                                                    windowKey: n,
                                                                                    className: a()(e, eI.uv),
                                                                                }),
                                                                        }),
                                                                    (0, i.jsx)("div", {
                                                                        className: a()(eI.Qs, d),
                                                                        children: t,
                                                                    }),
                                                                ],
                                                            }),
                                                            !p && (0, i.jsx)(g.b, {}),
                                                            (0, i.jsx)(I.A, {}),
                                                            (0, i.jsx)(c.P, {}),
                                                            (0, i.jsx)(x.C8, {}),
                                                        ],
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                                (0, i.jsx)(h.Ut, {}),
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
            { lang: u, style: d, className: c } = (0, eh.xb)();
        return (
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("style", d);
            }, [n, d]),
            r.useEffect(() => {
                let e = n.document.documentElement;
                l()(null != e, "Window document element was null"), e.setAttribute("lang", u);
            }, [n, u]),
            (0, i.jsx)("div", { "data-popout-root": !0, ref: t, className: a()(c, s), children: o })
        );
    }),
    eC = r.forwardRef(function (e, t) {
        let { guestWindow: n, isFullScreen: r } = (0, f.cf)([eg.A], () => ({
            guestWindow: eg.A.getWindow(e.windowKey),
            isFullScreen: eg.A.isWindowFullScreen(e.windowKey),
        }));
        l()(null != n, "Missing guestWindow reference");
        let { forcedColors: s, connectedEmbeddedActivity: a } = (0, f.cf)([N.Ay, y.Ay], () => ({
            forcedColors: N.Ay.useForcedColors ? "yes" : "no",
            connectedEmbeddedActivity: y.Ay.getCurrentEmbeddedActivity(),
        }));
        (0, P.A)(n, !1);
        let { analyticsLocations: o } = (0, R.Ay)(v.A.POPOUT_WINDOW),
            { clientThemesClassName: u, clientThemesCSS: d } = (0, O.Ay)(),
            c = (0, ec.NC)(),
            _ = e.themeOverride ?? c;
        return null == n
            ? null
            : (0, i.jsx)(A.W, {
                  children: (0, i.jsx)(R.f5, {
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
                          clientThemesCSS: d,
                      }),
                  }),
              });
    });
