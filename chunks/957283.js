n.d(t, { N: () => r });
var l = n(17928),
    i = n(940382),
    s = n(761640);
function r() {
    let e = (0, l.bG)([s.Ay], () => s.Ay.getSidebarState(s.fe)),
        t = e?.type === i.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest:
            t?.details != null && t.details.type === i.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest,
    };
}
