"use strict";
n.d(t, { A: () => a });
var r = n(308528),
    i = n(695870),
    s = n(734057);
function a(e) {
    if (e !== i.E) return null;
    let t = s.A.getChannel(e);
    return null == t ? null : r.A.ensurePrivateChannel(t.recipients);
}
