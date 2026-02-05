n.d(t, { A: () => E });
var i = n(353640),
    r = n(499867),
    a = n(121894),
    l = n(506774),
    s = n(626584),
    o = n(954571),
    d = n(315290),
    c = n(652215);
let u = "UserFlowAnalyticsStore_current",
    A = "UserFlowAnalyticsStore";
function h(e) {
    if (e === d.do.UNKNOWN) return null;
    let t = l.w.get(`${A}-${e}`);
    if (null == t) return null;
    let { version: n, ...i } = t;
    return 1 !== n ? null : i;
}
new s.A("UserFlowAnalytics");
let _ = (0, i.v)()(
    (0, r.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            let e = t().currentFlow ?? l.w.get(u);
            if (null == e) return null;
            let { [e]: n } = t().flows,
                i = n ?? h(e);
            return i?.currentStep != null ? e : null;
        },
    })),
);
function m(e, t) {
    let { [e]: n, ...i } = _.getState().flows,
        r = n ?? h(e);
    (r?.currentStep == null || r.currentStep !== t) &&
        (0, a.r)(() => {
            _.setState({
                flows: {
                    ...i,
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
function p(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    e === d.do.ANY && (i = _.getState().activeFlow() ?? d.do.UNKNOWN);
    let { [i]: r, ...l } = _.getState().flows,
        s = r ?? h(i);
    null == s ||
        null == s.currentStep ||
        (s.currentStep !== t &&
            (0, a.r)(() => {
                _.setState({
                    flows: {
                        ...l,
                        [i]: {
                            ...s,
                            lastStep: s.currentStep,
                            lastTimestamp: s.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        },
                    },
                    currentFlow: i,
                });
            }));
}
function g() {
    return null != _.getState().activeFlow();
}
_.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        if (
            null != e &&
            (!(function (e) {
                if (e.type === d.do.UNKNOWN) return;
                let t = `${A}-${e.type}`;
                e.ended
                    ? (l.w.remove(t), l.w.remove(u))
                    : (l.w.set(`${A}-${e.type}`, { ...e, version: 1 }), l.w.set(u, e.type));
            })(e),
            o.default.track(
                c.HAw.NUO_TRANSITION,
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
            let t = { ..._.getState().flows };
            delete t[e.type],
                (0, a.r)(() => {
                    _.setState({ flows: t, currentFlow: null });
                });
        }
    },
);
let E = {
    flowStart: m,
    flowStepOrStart: function (e, t) {
        g() ? p(e, t) : m(e, t);
    },
    flowStep: p,
    hasActiveFlow: g,
};
