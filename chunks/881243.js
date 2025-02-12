a.d(e, {
    I1: () => i,
    YJ: () => o
});
var r = a(370336);
let n = '_sentryScope',
    _ = '_sentryIsolationScope';
function o(t, e, a) {
    t && ((0, r.xp)(t, _, a), (0, r.xp)(t, n, e));
}
function i(t) {
    return {
        scope: t[n],
        isolationScope: t[_]
    };
}
