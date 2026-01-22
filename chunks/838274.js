n.d(t, {
    A: () => a,
});
var r = n(64700),
    i = n(73153);

function a(e) {
    let { connectedEmbeddedActivity: t } = e,
        n = null == t ? void 0 : t.applicationId;
    r.useEffect(() => {
        null != t &&
            null != n &&
            i.h.dispatch({
                type: "EMBEDDED_ACTIVITY_OPEN",
                location: t.location,
                applicationId: n,
            });
    }, [n, t]);
}
