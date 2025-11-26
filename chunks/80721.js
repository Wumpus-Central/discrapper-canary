r.d(t, {
    MT: () => s,
    cD: () => o,
});
var n = r(544891),
    i = r(598077);
r(504518);
var a = r(981631);
async function s(e, t, r, s) {
    let { users: o, next_index: l } = (
        await n.tn.get({
            url: a.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: {
                index: t,
                limit: null != s ? s : 10,
                search_query: r,
            },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: o.map((e) => new i.Z(e)),
        nextIndex: l,
    };
}
async function o(e, t) {
    try {
        return await n.tn.post({
            url: a.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
    } catch (e) {}
}
