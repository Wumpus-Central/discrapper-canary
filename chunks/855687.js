"use strict";
n.d(t, { K: () => r });
var i = n(652215);
function r(e, t, n, r) {
    let a = n ?? t;
    return (
        (null != a && e.can(i.xBc.CREATE_INSTANT_INVITE, a)) ||
        (null != t && null != t.vanityURLCode) ||
        r?.invite_code != null
    );
}
