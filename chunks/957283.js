"use strict";
n.d(t, { N: () => s });
var i = n(17928),
    r = n(940382),
    a = n(761640);
function s() {
    let e = (0, i.bG)([a.Ay], () => a.Ay.getSidebarState(a.fe)),
        t = e?.type === r.PE.VIEW_MESSAGE_REQUEST ? e : null;
    return {
        channelId: t?.channelId,
        hasSingleMessageRequest: t?.details != null && t.details.hasSingleMessageRequest,
    };
}
