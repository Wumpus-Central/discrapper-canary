(s.d(t, { Ay: () => o, BQ: () => h, Gf: () => u, Z8: () => p, qv: () => f, s2: () => x }), s(321073));
var n = s(477900),
    r = s(582128),
    a = s(284009),
    i = s.n(a),
    l = s(196765);
let c = r.createContext(null);
function u(e) {
    let { stepConfigs: t, breadcrumbs: s, children: a } = e,
        i = r.useMemo(() => {
            var e, n;
            return (
                (e = t),
                (n = s),
                (0, l.v)((t, s) => ({
                    stepConfigs: e,
                    stepsHistory: [],
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
                    setStep(e) {
                        let n = [...s().stepsHistory];
                        (n.push(e), t({ step: e, previousStep: s().step, stepsHistory: n }));
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, t) => (null != n ? n.indexOf(e.id) - n.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, s]);
    return (0, n.jsx)(c, { value: i, children: a });
}
function o(e) {
    let t = r.useContext(c);
    return (i()(null != t, "useSteps must be used inside CheckoutStepContext"), t(e));
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
function x() {
    return o(d);
}
function f() {
    return o(m);
}
function C(e) {
    return e.stepsHistory;
}
function h() {
    return o(C);
}
