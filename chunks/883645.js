(t.d(s, { Ay: () => o, BQ: () => f, Gf: () => u, Z8: () => C, qv: () => L, s2: () => x }), t(321073));
var n = t(477900),
    r = t(582128),
    i = t(284009),
    a = t.n(i),
    l = t(196765);
let c = r.createContext(null);
function u(e) {
    let { stepConfigs: s, breadcrumbs: t, children: i } = e,
        a = r.useMemo(() => {
            var e, n;
            return (
                (e = s),
                (n = t),
                (0, l.v)((s, t) => ({
                    stepConfigs: e,
                    stepsHistory: [],
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
                    setStep(e) {
                        let n = [...t().stepsHistory];
                        (n.push(e), s({ step: e, previousStep: t().step, stepsHistory: n }));
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, s) => (null != n ? n.indexOf(e.id) - n.indexOf(s.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [s, t]);
    return (0, n.jsx)(c, { value: a, children: i });
}
function o(e) {
    let s = r.useContext(c);
    return (a()(null != s, "useSteps must be used inside CheckoutStepContext"), s(e));
}
function m(e) {
    return e.step;
}
function d(e) {
    return e.setStep;
}
function C() {
    let { step: e, stepConfigs: s } = o();
    return s.find((s) => s.key === e) ?? null;
}
function x() {
    return o(m);
}
function L() {
    return o(d);
}
function p(e) {
    return e.stepsHistory;
}
function f() {
    return o(p);
}
