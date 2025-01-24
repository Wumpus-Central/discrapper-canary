e.d(t, {
    S: function () {
        return u;
    }
});
var r = e(442837),
    i = e(359119);
function u(n, t) {
    return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(n), [n])
        .filter((n) => n.type === t)
        .find((n) => null == n.dismiss_timestamp && ((null == n ? void 0 : n.expiry) == null || Date.parse(n.expiry) > Date.now()));
}
