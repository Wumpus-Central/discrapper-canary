"use strict";
n.d(t, { A: () => g });
var i = n(353640),
    r = n(499867),
    s = n(121894),
    a = n(506774),
    o = n(626584),
    l = n(174459),
    u = n(315290),
    c = n(652215);
let d = "UserFlowAnalyticsStore_current",
    _ = "UserFlowAnalyticsStore";
function f(e) {
    if (e === u.do.UNKNOWN) return null;
    let t = a.w.get(`${_}-${e}`);
    if (null == t) return null;
    let { version: n, ...i } = t;
    return 1 !== n ? null : i;
}
new o.A("UserFlowAnalytics");
let h = (0, i.v)()(
    (0, r.eh)((e, t) => ({
        flows: {},
        currentFlow: null,
        activeFlow: () => {
            let e = t().currentFlow ?? a.w.get(d);
            if (null == e) return null;
            let { [e]: n } = t().flows,
                i = n ?? f(e);
            return i?.currentStep != null ? e : null;
        },
    })),
);
function p(e, t) {
    let { [e]: n, ...i } = h.getState().flows,
        r = n ?? f(e);
    (r?.currentStep == null || r.currentStep !== t) &&
        (0, s.r)(() => {
            h.setState({
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
function E(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = e;
    e === u.do.ANY && (i = h.getState().activeFlow() ?? u.do.UNKNOWN);
    let { [i]: r, ...a } = h.getState().flows,
        o = r ?? f(i);
    null == o ||
        null == o.currentStep ||
        (o.currentStep !== t &&
            (0, s.r)(() => {
                h.setState({
                    flows: {
                        ...a,
                        [i]: {
                            ...o,
                            lastStep: o.currentStep,
                            lastTimestamp: o.currentTimestamp,
                            currentStep: t,
                            currentTimestamp: new Date(),
                            ended: n,
                        },
                    },
                    currentFlow: i,
                });
            }));
}
function m() {
    return null != h.getState().activeFlow();
}
h.subscribe(
    (e) => (null != e.currentFlow ? e.flows[e.currentFlow] : void 0),
    (e) => {
        if (
            null != e &&
            (!(function (e) {
                if (e.type === u.do.UNKNOWN) return;
                let t = `${_}-${e.type}`;
                e.ended
                    ? (a.w.remove(t), a.w.remove(d))
                    : (a.w.set(`${_}-${e.type}`, { ...e, version: 1 }), a.w.set(d, e.type));
            })(e),
            l.default.track(
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
            let t = { ...h.getState().flows };
            delete t[e.type],
                (0, s.r)(() => {
                    h.setState({ flows: t, currentFlow: null });
                });
        }
    },
);
let g = {
    flowStart: p,
    flowStepOrStart: function (e, t) {
        m() ? E(e, t) : p(e, t);
    },
    flowStep: E,
    hasActiveFlow: m,
};
