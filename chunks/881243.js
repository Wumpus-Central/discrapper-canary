a.d(e, {
    I1: () => i,
    YJ: () => _
});
var r = a(370336);
let n = '_sentryScope',
    o = '_sentryIsolationScope';
function _(t, e, a) {
    t && ((0, r.xp)(t, o, a), (0, r.xp)(t, n, e));
}
function i(t) {
    return {
        scope: t[n],
        isolationScope: t[o]
    };
}
