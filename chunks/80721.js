n.d(t, {
    MT: () => a,
    r1: () => s,
});
var r = n(544891),
    i = n(981631);
async function a(e) {
    return (
        await r.tn.get({
            url: i.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            rejectWithError: !0,
        })
    ).body;
}
async function s(e, t) {
    try {
        return await r.tn.post({
            url: i.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        });
    } catch (e) {}
}
