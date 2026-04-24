"use strict";
n.d(t, { A: () => r });
var i = n(998218);
function r(e, t) {
    let n = e.getIconSource(t);
    if (null != n && "number" != typeof n) {
        let e;
        if ((Array.isArray(n) ? n.length > 0 && (e = n[0].uri) : (e = n.uri), null != e))
            return i.A.toURLSafe(e) ?? void 0;
    }
}
