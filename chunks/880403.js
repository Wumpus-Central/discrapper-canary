"use strict";
n.d(t, { A: () => o });
var r = n(622543),
    i = n(287809),
    a = n(927578),
    s = n(649032);
function o(e) {
    if (e?.program_current_state === s.L.PAYMENT_PROCESSING) return !0;
    let t = i.default.getCurrentUser(),
        n = null != t ? r.A.getUserProfile(t.id)?.premiumSince : null;
    return !((0, a.To)(n) >= 1) && null == e;
}
