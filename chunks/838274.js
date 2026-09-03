n.d(t, { A: () => a });
var i = n(582128),
    r = n(228366);
function a(e) {
    let { connectedEmbeddedActivity: t } = e,
        n = t?.applicationId;
    i.useEffect(() => {
        null != t &&
            null != n &&
            r.h.dispatch({ type: "EMBEDDED_ACTIVITY_OPEN", location: t.location, applicationId: n });
    }, [n, t]);
}
