a.d(e, {
    I1: () => i,
    YJ: () => o
});
var r = a(370336);
let _ = '_sentryScope',
    n = '_sentryIsolationScope';
function o(t, e, a) {
    t && ((0, r.xp)(t, n, a), (0, r.xp)(t, _, e));
}
function i(t) {
    return {
        scope: t[_],
        isolationScope: t[n]
    };
}
