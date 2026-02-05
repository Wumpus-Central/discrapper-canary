l.d(n, { F: () => s });
var t = l(311907),
    i = l(349435);
function s(e, n) {
    return (0, t.bG)([i.Ay], () => i.Ay.getChannelSafetyWarnings(e), [e])
        .filter((e) => e.type === n)
        .find((e) => null == e.dismiss_timestamp && (e?.expiry == null || Date.parse(e.expiry) > Date.now()));
}
