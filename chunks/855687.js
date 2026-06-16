"use strict";
n.d(t, { K: () => r });
var i = n(652215);
function r(e, t, n, r) {
    let s = n ?? t;
    return (
        (null != s && e.can(i.xBc.CREATE_INSTANT_INVITE, s)) ||
        (null != t && null != t.vanityURLCode) ||
        r?.invite_code != null
    );
}
