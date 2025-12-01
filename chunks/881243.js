r.d(t, {
    I1: () => _,
    YJ: () => o,
});
var n = r(370336);
let a = "_sentryScope",
    i = "_sentryIsolationScope";
function o(e, t, r) {
    e && ((0, n.xp)(e, i, r), (0, n.xp)(e, a, t));
}
function _(e) {
    return {
        scope: e[a],
        isolationScope: e[i],
    };
}
