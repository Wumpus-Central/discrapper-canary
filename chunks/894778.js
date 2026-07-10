"use strict";
n.d(t, { A: () => p });
var i = n(353640),
    r = n(499867),
    a = n(121894),
    s = n(506774),
    l = n(626584),
    o = n(174459),
    d = n(315290),
    c = n(652215);
let u = "UserFlowAnalyticsStore_current",
    _ = "UserFlowAnalyticsStore";
function E(e) {
    if (e === d.do.UNKNOWN) return null;
    let t = s.w.get(`${_}-${e}`);
    if (null == t) return null;
    let { version: n, ...i } = t;
    return 1 !== n ? null : i;
}
new l.A("UserFlowAnalytics");
let A = (0, i.v)()(
    (0, r.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            let e = t().currentFlow ?? s.w.get(u);
            if (null == e) return null;
            let { [e]: n } = t().flows,
                i = n ?? E(e);
            return i?.currentStep != null ? e : null;
        },
    })),
);
function h(e, t) {
    let { [e]: n, ...i } = A.getState().flows,
        r = n ?? E(e);
    (r?.currentStep == null || r.currentStep !== t) &&
        (0, a.r)(() => {
            A.setState({
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
function I(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    e === d.do.ANY && (i = A.getState().activeFlow() ?? d.do.UNKNOWN);
    let { [i]: r, ...s } = A.getState().flows,
        l = r ?? E(i);
    null == l ||
        null == l.currentStep ||
        (l.currentStep !== t &&
            (0, a.r)(() => {
                A.setState({
                    flows: {
                        ...s,
                        [i]: {
                            ...l,
                            lastStep: l.currentStep,
                            lastTimestamp: l.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        },
                    },
                    currentFlow: i,
                });
            }));
}
function f() {
    return null != A.getState().activeFlow();
}
A.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        if (
            null != e &&
            (!(function (e) {
                if (e.type === d.do.UNKNOWN) return;
                let t = `${_}-${e.type}`;
                e.ended
                    ? (s.w.remove(t), s.w.remove(u))
                    : (s.w.set(`${_}-${e.type}`, { ...e, version: 1 }), s.w.set(u, e.type));
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
            let t = { ...A.getState().flows };
            delete t[e.type],
                (0, a.r)(() => {
                    A.setState({ flows: t, currentFlow: null });
                });
        }
    },
);
let p = {
    flowStart: h,
    flowStepOrStart: function (e, t) {
        f() ? I(e, t) : h(e, t);
    },
    flowStep: I,
    hasActiveFlow: f,
};
