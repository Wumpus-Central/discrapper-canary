r.d(t, {
    MT: () => s,
    cD: () => a,
});
var n = r(544891);
r(504518);
var i = r(981631);
async function s(e) {
    return (
        await n.tn.get({
            url: i.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            rejectWithError: !0,
        })
    ).body;
}
async function a(e, t) {
    try {
        return await n.tn.post({
            url: i.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
    } catch (e) {}
}
