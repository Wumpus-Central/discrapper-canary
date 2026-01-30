n.d(t, {
    u: () => l,
});
var r = n(562465),
    i = n(652215);
async function l(e, t) {
    if (void 0 === e) return !1;
    try {
        let { body: n } = await r.Bo.get({
            url: i.Rsh.ACTIVITIES_TRUSTED_LINKS(e),
            rejectWithError: !1,
            query: {
                url: t,
            },
            timeout: 500,
        });
        return !!n.trusted;
    } catch (e) {
        return !1;
    }
}
