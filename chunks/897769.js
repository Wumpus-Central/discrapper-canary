n.d(t, { S: () => l });
var i = n(442837),
    r = n(359119);
function l(e, t) {
    return (0, i.e7)([r.ZP], () => r.ZP.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp && ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()));
}
