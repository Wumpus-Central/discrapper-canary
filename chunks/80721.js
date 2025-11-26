r.d(t, {
    MT: () => a,
    cD: () => o,
});
var n = r(544891),
    i = r(598077);
r(504518);
var s = r(981631);
async function a(e, t, r, a) {
    let { users: o, next_index: l } = (
        await n.tn.get({
            url: s.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: {
                index: t,
                limit: null != a ? a : 10,
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
        let r = await n.tn.post({
            url: s.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return {
            invitedUsers: r.body.invited_users,
            ineligibleUsers: r.body.ineligible_users,
        };
    } catch (e) {
        return null;
    }
}
