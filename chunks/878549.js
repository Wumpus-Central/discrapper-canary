"use strict";
n.d(t, { S: () => i });
var r = n(961350);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.default,
        n = t.getId(),
        i = t.getSessionId();
    return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === i);
}
