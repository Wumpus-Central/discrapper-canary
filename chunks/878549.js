"use strict";
n.d(t, { S: () => r });
var i = n(495544);
function r(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.default,
        n = t.getId(),
        r = t.getSessionId();
    return e.userId === n && (null == e.sessionId || void 0 === e.sessionId || e.sessionId === r);
}
