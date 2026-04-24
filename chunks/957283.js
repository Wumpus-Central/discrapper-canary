t.d(l, { N: () => h });
var a = t(17928),
    s = t(940382),
    i = t(761640);
function h() {
    let e = (0, a.bG)([i.Ay], () => i.Ay.getSidebarState(i.fe)),
        l = e?.type === s.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: l?.channelId,
        hasSingleMessageRequest:
            l?.details != null && l.details.type === s.LU.MESSAGE_REQUEST && l.details.hasSingleMessageRequest,
    };
}
