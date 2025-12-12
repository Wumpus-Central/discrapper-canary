n.d(t, {
    Jn: () => _,
    MT: () => f,
    WH: () => d,
    cD: () => p,
    hH: () => E,
    i1: () => m,
    if: () => g,
    r7: () => h,
});
var r = n(512722),
    i = n.n(r),
    o = n(544891),
    a = n(570140),
    s = n(598077),
    l = n(504518),
    c = n(981631);
let u = 10;
async function d() {
    a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
    try {
        let e = (
            await o.tn.get({
                url: c.ANM.PREMIUM_GROUP_MEMBERSHIP,
                rejectWithError: !0,
            })
        ).body;
        return (
            null != e
                ? a.Z.dispatch({
                      type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS",
                      membership: {
                          subscriptionId: e.subscription_id,
                          memberType: e.member_type,
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: e.current_period_end,
                      },
                  })
                : a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND" }),
            e
        );
    } catch (e) {
        return a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE" }), null;
    }
}
async function f(e, t, n, r) {
    let { users: i, next_index: a } = (
        await o.tn.get({
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
        nextIndex: a,
    };
}
async function p(e, t) {
    a.Z.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let n = await o.tn.post({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            a.Z.dispatch({
                type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS",
                subscriptionId: e,
            }),
            {
                invitedUsers: n.body.invited_users,
                ineligibleUsers: n.body.ineligible_users,
            }
        );
    } catch (e) {
        return a.Z.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function _(e, t) {
    a.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let n = await o.tn.del({
            url: c.ANM.BILLING_SUBSCRIPTION_REMOVE_USER(e, t),
            rejectWithError: !0,
        });
        return (
            a.Z.dispatch({
                type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS",
                subscriptionId: e,
            }),
            n
        );
    } catch (e) {
        return a.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), null;
    }
}
async function m(e) {
    a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
    try {
        let t = (
                await o.tn.get({
                    url: c.ANM.BILLING_SUBSCRIPTION_MEMBERS(e),
                    rejectWithError: !0,
                })
            ).body.map(l.Z.createFromServer),
            n = t.find((e) => e.isPrimary());
        return (
            i()(null != n, "Primary member not found in premium group"),
            a.Z.dispatch({
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
        return a.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_FAILURE" }), [];
    }
}
async function h(e, t) {
    await o.tn.patch({
        url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
        rejectWithError: !0,
    });
}
async function g(e, t) {
    a.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_START" });
    try {
        let n = await o.tn.del({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        });
        return (
            a.Z.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
            }),
            n
        );
    } catch (e) {
        return a.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE" }), null;
    }
}
async function E(e) {
    a.Z.dispatch({
        type: "PREMIUM_GROUP_INVITE_FETCH_START",
        inviteId: e,
    });
    try {
        let t = (
            await o.tn.get({
                url: c.ANM.PREMIUM_GROUP_INVITE(e),
                rejectWithError: !0,
            })
        ).body;
        a.Z.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_SUCCESS",
            inviteId: e,
            invite: t,
        });
    } catch (n) {
        var t;
        a.Z.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
            inviteId: e,
            status: null != (t = null == n ? void 0 : n.status) ? t : 0,
        });
    }
}
