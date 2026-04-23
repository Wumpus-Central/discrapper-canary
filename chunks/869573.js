"use strict";
n.d(t, { Q: () => a });
var r = n(64700),
    i = n(166532),
    s = n(293700);
function a(e, t, n) {
    r.useEffect(() => {
        null != e && e !== i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === s.C.PENDING
            ? n(i.pn.AWAITING_PURCHASE_TOKEN_AUTH)
            : e === i.pn.AWAITING_PURCHASE_TOKEN_AUTH && t === s.C.SUCCESS && n(i.pn.REVIEW);
    }, [e, t, n]);
}
