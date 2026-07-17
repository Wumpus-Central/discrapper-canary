n.d(t, { Ay: () => c, BQ: () => A, Gf: () => o, Z8: () => f, qv: () => g, s2: () => p }), n(321073);
var r = n(627968),
    a = n(64700),
    s = n(284009),
    i = n.n(s),
    l = n(353640);
let u = a.createContext(null);
function o(e) {
    let { stepConfigs: t, breadcrumbs: n, children: s } = e,
        i = a.useMemo(() => {
            var e, r;
            return (
                (e = t),
                (r = n),
                (0, l.v)((t, n) => ({
                    stepConfigs: e,
                    stepsHistory: [],
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
                    setStep(e) {
                        let r = [...n().stepsHistory];
                        r.push(e), t({ step: e, previousStep: n().step, stepsHistory: r });
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, t) => (null != r ? r.indexOf(e.id) - r.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, n]);
    return (0, r.jsx)(u, { value: i, children: s });
}
function c(e) {
    let t = a.useContext(u);
    return i()(null != t, "useSteps must be used inside CheckoutStepContext"), t(e);
}
function d(e) {
    return e.step;
}
function m(e) {
    return e.setStep;
}
function f() {
    let { step: e, stepConfigs: t } = c();
    return t.find((t) => t.key === e) ?? null;
}
function p() {
    return c(d);
}
function g() {
    return c(m);
}
function x(e) {
    return e.stepsHistory;
}
function A() {
    return c(x);
}
