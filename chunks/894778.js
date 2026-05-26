n.d(t, { A: () => d });
var l = n(353640),
    r = n(499867),
    u = n(121894),
    a = n(506774),
    c = n(626584),
    o = n(174459),
    s = n(315290),
    i = n(652215);
let _ = "UserFlowAnalyticsStore_current",
    p = "UserFlowAnalyticsStore";
function w(e) {
    if (e === s.do.UNKNOWN) return null;
    let t = a.w.get(`${p}-${e}`);
    if (null == t) return null;
    let { version: n, ...l } = t;
    return 1 !== n ? null : l;
}
new c.A("UserFlowAnalytics");
let N = (0, l.v)()(
    (0, r.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            let e = t().currentFlow ?? a.w.get(_);
            if (null == e) return null;
            let { [e]: n } = t().flows,
                l = n ?? w(e);
            return l?.currentStep != null ? e : null;
        },
    })),
);
function S(e, t) {
    let { [e]: n, ...l } = N.getState().flows,
        r = n ?? w(e);
    (r?.currentStep == null || r.currentStep !== t) &&
        (0, u.r)(() => {
            N.setState({
                flows: {
                    ...l,
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
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        l = e;
    e === s.do.ANY && (l = N.getState().activeFlow() ?? s.do.UNKNOWN);
    let { [l]: r, ...a } = N.getState().flows,
        c = r ?? w(l);
    null == c ||
        null == c.currentStep ||
        (c.currentStep !== t &&
            (0, u.r)(() => {
                N.setState({
                    flows: {
                        ...a,
                        [l]: {
                            ...c,
                            lastStep: c.currentStep,
                            lastTimestamp: c.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        },
                    },
                    currentFlow: l,
                });
            }));
}
function A() {
    return null != N.getState().activeFlow();
}
N.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        if (
            null != e &&
            (!(function (e) {
                if (e.type === s.do.UNKNOWN) return;
                let t = `${p}-${e.type}`;
                e.ended
                    ? (a.w.remove(t), a.w.remove(_))
                    : (a.w.set(`${p}-${e.type}`, { ...e, version: 1 }), a.w.set(_, e.type));
            })(e),
            o.default.track(
                i.HAw.NUO_TRANSITION,
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
            let t = { ...N.getState().flows };
            delete t[e.type],
                (0, u.r)(() => {
                    N.setState({ flows: t, currentFlow: null });
                });
        }
    },
);
let d = {
    flowStart: S,
    flowStepOrStart: function (e, t) {
        A() ? T(e, t) : S(e, t);
    },
    flowStep: T,
    hasActiveFlow: A,
};
