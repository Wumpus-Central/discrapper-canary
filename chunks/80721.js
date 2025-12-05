n.d(t, {
    MT: () => f,
    WH: () => d,
    cD: () => p,
    hH: () => h,
    i1: () => _,
    r7: () => m,
});
var r = n(512722),
    i = n.n(r),
    a = n(544891),
    o = n(570140),
    s = n(598077),
    l = n(504518),
    c = n(981631);
let u = 10;
async function d() {
    o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH" });
    try {
        let e = (
            await a.tn.get({
                url: c.ANM.PREMIUM_GROUP_MEMBERSHIP,
                rejectWithError: !0,
            })
        ).body;
        return (
            null != e
                ? o.Z.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                      },
                  })
                : o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function f(e, t, n, r) {
    let { users: i, next_index: o } = (
        await a.tn.get({
            url: c.ANM.BILLING_SUBSCRIPTION_ELIGIBLE_USERS(e),
            query: {
                index: t,
                limit: null != r ? r : u,
                search_query: n,
            },
            rejectWithError: !0,
        })
    ).body;
    return {
        users: i.map((e) => new s.Z(e)),
        nextIndex: o,
    };
}
async function p(e, t) {
    try {
        let n = await a.tn.post({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return {
            invitedUsers: n.body.invited_users,
            ineligibleUsers: n.body.ineligible_users,
        };
    } catch (e) {
        return null;
    }
}
async function _(e) {
    o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH" });
    try {
        let t = (
                await a.tn.get({
                    url: c.ANM.BILLING_SUBSCRIPTION_MEMBERS(e),
                    rejectWithError: !0,
                })
            ).body.map(l.Z.createFromServer),
            n = t.find((e) => e.isPrimary());
        return (
            i()(null != n, "Primary member not found in premium group"),
            o.Z.dispatch({
                type: "PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS",
                members: {
                    primary: n.user,
                    members: t.filter((e) => e.isMember()).map((e) => e.user),
                    invitedUsers: t.filter((e) => e.isInvited()).map((e) => e.user),
                },
            }),
            t
        );
    } catch (e) {
        return o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function m(e, t) {
    await a.tn.patch({
        url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
        rejectWithError: !0,
    });
}
async function h(e) {
    o.Z.dispatch({
        type: "PREMIUM_GROUP_INVITE_FETCH_START",
        inviteId: e,
    });
    try {
        let t = (
            await a.tn.get({
                url: c.ANM.PREMIUM_GROUP_INVITE(e),
                rejectWithError: !0,
            })
        ).body;
        o.Z.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS",
            inviteId: e,
            invite: t,
        });
    } catch (n) {
        var t;
        o.Z.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
            inviteId: e,
            status: null != (t = null == n ? void 0 : n.status) ? t : 0,
        });
    }
}
