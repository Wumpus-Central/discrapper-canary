"use strict";
n.d(t, { K: () => i });
var r = n(652215);
function i(e, t, n, i) {
    let a = n ?? t;
    return (
        (null != a && e.can(r.xBc.CREATE_INSTANT_INVITE, a)) ||
        (null != t && null != t.vanityURLCode) ||
        i?.invite_code != null
    );
}
