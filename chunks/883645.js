n.d(t, { Ay: () => o, BQ: () => g, Gf: () => c, Z8: () => p, qv: () => x, s2: () => f }), n(321073);
var s = n(477900),
    r = n(582128),
    i = n(284009),
    a = n.n(i),
    l = n(196765);
let u = r.createContext(null);
function c(e) {
    let { stepConfigs: t, breadcrumbs: n, children: i } = e,
        a = r.useMemo(() => {
            var e, s;
            return (
                (e = t),
                (s = n),
                (0, l.v)((t, n) => ({
                    stepConfigs: e,
                    stepsHistory: [],
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
                    setStep(e) {
                        let s = [...n().stepsHistory];
                        s.push(e), t({ step: e, previousStep: n().step, stepsHistory: s });
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, t) => (null != s ? s.indexOf(e.id) - s.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, n]);
    return (0, s.jsx)(u, { value: a, children: i });
}
function o(e) {
    let t = r.useContext(u);
    return a()(null != t, "useSteps must be used inside CheckoutStepContext"), t(e);
}
function d(e) {
    return e.step;
}
function m(e) {
    return e.setStep;
}
function p() {
    let { step: e, stepConfigs: t } = o();
    return t.find((t) => t.key === e) ?? null;
}
function f() {
    return o(d);
}
function x() {
    return o(m);
}
function v(e) {
    return e.stepsHistory;
}
function g() {
    return o(v);
}
