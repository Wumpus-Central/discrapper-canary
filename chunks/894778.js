n.d(t, { A: () => w });
var r = n(353640),
    l = n(499867),
    o = n(121894),
    a = n(506774),
    u = n(626584),
    i = n(174459),
    _ = n(315290),
    s = n(652215);
let c = "UserFlowAnalyticsStore_current",
    p = "UserFlowAnalyticsStore";
function d(e) {
    if (e === _.do.UNKNOWN) return null;
    let t = a.w.get(`${p}-${e}`);
    if (null == t) return null;
    let { version: n, ...r } = t;
    return 1 !== n ? null : r;
}
new u.A("UserFlowAnalytics");
let E = (0, r.v)()(
    (0, l.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            let e = t().currentFlow ?? a.w.get(c);
            if (null == e) return null;
            let { [e]: n } = t().flows,
                r = n ?? d(e);
            return r?.currentStep != null ? e : null;
        },
    })),
);
function S(e, t) {
    let { [e]: n, ...r } = E.getState().flows,
        l = n ?? d(e);
    (l?.currentStep == null || l.currentStep !== t) &&
        (0, o.r)(() => {
            E.setState({
                flows: {
                    ...r,
                    [e]: {
                        type: e,
                        lastStep: null,
                        lastTimestamp: null,
                        currentStep: t,
                        currentTimestamp: new Date(),
                        skipped: !1,
                    },
                },
                currentFlow: e,
            });
        });
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e;
    e === _.do.ANY && (r = E.getState().activeFlow() ?? _.do.UNKNOWN);
    let { [r]: l, ...a } = E.getState().flows,
        u = l ?? d(r);
    null == u ||
        null == u.currentStep ||
        (u.currentStep !== t &&
            (0, o.r)(() => {
                E.setState({
                    flows: {
                        ...a,
                        [r]: {
                            ...u,
                            lastStep: u.currentStep,
                            lastTimestamp: u.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        },
                    },
                    currentFlow: r,
                });
            }));
}
function g() {
    return null != E.getState().activeFlow();
}
E.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        if (
            null != e &&
            (!(function (e) {
                if (e.type === _.do.UNKNOWN) return;
                let t = `${p}-${e.type}`;
                e.ended
                    ? (a.w.remove(t), a.w.remove(c))
                    : (a.w.set(`${p}-${e.type}`, { ...e, version: 1 }), a.w.set(c, e.type));
            })(e),
            i.default.track(
                s.HAw.NUO_TRANSITION,
                {
                    flow_type: e.type,
                    from_step: e.lastStep,
                    to_step: e.currentStep,
                    seconds_on_from_step:
                        "function" != typeof e.lastTimestamp?.getTime
                            ? 0
                            : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3,
                },
                { flush: !0 },
            ),
            e.ended)
        ) {
            let t = { ...E.getState().flows };
            delete t[e.type],
                (0, o.r)(() => {
                    E.setState({ flows: t, currentFlow: null });
                });
        }
    },
);
let w = {
    flowStart: S,
    flowStepOrStart: function (e, t) {
        g() ? N(e, t) : S(e, t);
    },
    flowStep: N,
    hasActiveFlow: g,
};
