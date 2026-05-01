t.d(n, { F: () => s });
var i = t(17928),
    r = t(349435);
function s(e, n) {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === n)
        .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
}
