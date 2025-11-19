_.d(e, {
    I1: () => E,
    YJ: () => o,
});
var a = _(370336);
let r = "_sentryScope",
    n = "_sentryIsolationScope";
function o(t, e, _) {
    t && ((0, a.xp)(t, n, _), (0, a.xp)(t, r, e));
}
function E(t) {
    return {
        scope: t[r],
        isolationScope: t[n],
    };
}
