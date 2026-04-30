"use strict";
n.d(t, { N: () => a });
var i = n(17928),
    r = n(940382),
    s = n(761640);
function a() {
    let e = (0, i.bG)([s.Ay], () => s.Ay.getSidebarState(s.fe)),
        t = e?.type === r.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest:
            t?.details != null && t.details.type === r.LU.MESSAGE_REQUEST && t.details.hasSingleMessageRequest,
    };
}
