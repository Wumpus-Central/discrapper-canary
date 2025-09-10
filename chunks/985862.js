t.d(n, {
    K: () => a,
    Z: () => l,
});
var r = t(647438),
    i = t(183369);
function a(e, n, t) {
    var r;
    let i = () => {
        var n, r;
        return null != (r = null == t || null == (n = t.plans.find((n) => n.id === e)) ? void 0 : n.cost) ? r : 0;
    };
    return null == n ? i() : i() - (null != (r = n.plan.cost) ? r : 0);
}
function l() {
    let { planId: e, portkeyInstance: n, currentGame: t } = (0, i.aj)();
    return r.useMemo(() => a(e, n, t), [e, n, t]);
}
