n.d(t, { N: () => s });
var i = n(311907),
    l = n(940382),
    a = n(761640);
function s() {
    let e = (0, i.bG)([a.Ay], () => a.Ay.getSidebarState(a.fe)),
        t = e?.type === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest:
            t?.details != null && t.details.type === l.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest,
    };
}
