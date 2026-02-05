"use strict";
n.d(t, { N: () => i });
var r = n(998218);
function i(e) {
    let t = r.A.toURLSafe(e),
        n = t?.searchParams.get("referrer_id") ?? void 0;
    return {
        referrerId: n,
        customId: t?.searchParams.get("custom_id") ?? void 0,
        linkId: t?.searchParams.get("link_id") ?? void 0,
    };
}
