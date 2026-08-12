n.d(t, { F: () => a });
var r = n(17928),
    i = n(349435);
function a(e, t) {
    return (0, r.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === t)
        .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
}
