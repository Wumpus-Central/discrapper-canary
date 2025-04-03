n.d(t, { S: () => l });
var r = n(442837),
    i = n(359119);
function l(e, t) {
    return (0, r.e7)([i.ZP], () => i.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp && ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()));
}
