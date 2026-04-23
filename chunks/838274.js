"use strict";
n.d(t, { A: () => s });
var r = n(64700),
    i = n(73153);
function s(e) {
    let { connectedEmbeddedActivity: t } = e,
        n = t?.applicationId;
    r.useEffect(() => {
        null != t &&
            null != n &&
            i.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
    }, [n, t]);
}
