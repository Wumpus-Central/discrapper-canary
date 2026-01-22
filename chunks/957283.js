n.d(t, { N: () => a });
var r = n(311907),
    l = n(940382),
    i = n(761640);
function a() {
    let e = (0, r.bG)([i.Ay], () => i.Ay.getSidebarState(i.fe)),
        t = (null == e ? void 0 : e.type) === l.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: null == t ? void 0 : t.channelId,
        hasSingleMessageRequest:
            (null == t ? void 0 : t.details) != null &&
            t.details.type === l.LU.MESSAGE_REQUEST &&
            t.details.hasSingleMessageRequest,
    };
}
