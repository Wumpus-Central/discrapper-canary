n.d(t, { u: () => a });
var i = n(562465),
    r = n(652215);
async function a(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await i.Bo.get({
            url: r.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: { url: t },
            timeout: 500,
        });
        return !!n.trusted;
    } catch {
        return !1;
    }
}
