n.d(t, { N: () => r });
var i = n(17928),
    l = n(940382),
    s = n(761640);
function r() {
    let e = (0, i.bG)([s.Ay], () => s.Ay.getSidebarState(s.fe)),
        t = e?.type === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest: t?.details != null && t.details.hasSingleMessageRequest,
    };
}
