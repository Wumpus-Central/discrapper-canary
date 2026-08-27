n.d(t, { N: () => s });
var i = n(17928),
    l = n(940382),
    r = n(761640);
function s() {
    let e = (0, i.bG)([r.Ay], () => r.Ay.getSidebarState(r.fe)),
        t = e?.type === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest: t?.details != null && t.details.hasSingleMessageRequest,
    };
}
