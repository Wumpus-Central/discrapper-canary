"use strict";
n.d(t, { A: () => s });
var i = n(64700),
    r = n(228366);
function s(e) {
    let { connectedEmbeddedActivity: t } = e,
        n = t?.applicationId;
    i.useEffect(() => {
        null != t &&
            null != n &&
            r.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
    }, [n, t]);
}
