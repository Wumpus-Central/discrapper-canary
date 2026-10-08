(s.d(t, { Ay: () => u, BQ: () => A, Gf: () => c, Z8: () => E, qv: () => _, s2: () => p }), s(321073));
var n = s(477900),
    r = s(582128),
    a = s(284009),
    i = s.n(a),
    l = s(196765);
let o = r.createContext(null);
function c(e) {
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
    return (0, n.jsx)(o, { value: i, children: a });
}
function u(e) {
    let t = r.useContext(o);
    return (i()(null != t, "useSteps must be used inside CheckoutStepContext"), t(e));
}
function d(e) {
    return e.step;
}
function m(e) {
    return e.setStep;
}
function E() {
    let { step: e, stepConfigs: t } = u();
    return t.find((t) => t.key === e) ?? null;
}
function p() {
    return u(d);
}
function _() {
    return u(m);
}
function L(e) {
    return e.stepsHistory;
}
function A() {
    return u(L);
}
