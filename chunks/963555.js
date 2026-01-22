n.d(t, {
    F: () => i,
});
var r = n(311907),
    l = n(349435);

function i(e, t) {
    return (0, r.bG)([l.Ay], () => l.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find(
            (e) =>
                null == e.dismiss_timestamp &&
                ((null == e ? void 0 : e.expiry) == null || Date.parse(e.expiry) > Date.now()),
        );
}
