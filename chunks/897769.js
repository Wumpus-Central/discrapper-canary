t.d(n, { S: () => a });
var i = t(442837),
    l = t(359119);
function a(e, n) {
    return (0, i.e7)([l.ZP], () => l.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === n)
        .find((e) => null == e.dismiss_timestamp && ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()));
}
