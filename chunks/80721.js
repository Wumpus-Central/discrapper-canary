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
    a = n(544891),
    o = n(570140),
    s = n(598077),
    l = n(504518),
    c = n(981631);
let u = 10;
async function d() {
    o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERSHIP_FETCH_START" });
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
                          subscriptionStatus: e.subscription_status,
                          currentPeriodEnd: e.current_period_end,
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
    o.Z.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_START" });
    try {
        let n = await a.tn.post({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITES(e),
            body: { user_ids: t },
            rejectWithError: !0,
        });
        return (
            o.Z.dispatch({
                type: "PREMIUM_GROUP_INVITE_USERS_SUCCESS",
                subscriptionId: e,
            }),
            {
                invitedUsers: n.body.invited_users,
                ineligibleUsers: n.body.ineligible_users,
            }
        );
    } catch (e) {
        return o.Z.dispatch({ type: "PREMIUM_GROUP_INVITE_USERS_FAILURE" }), null;
    }
}
async function _(e, t) {
    o.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_START" });
    try {
        let n = await a.tn.del({
            url: c.ANM.BILLING_SUBSCRIPTION_REMOVE_USER(e, t),
            rejectWithError: !0,
        });
        return (
            o.Z.dispatch({
                type: "PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS",
                subscriptionId: e,
            }),
            n
        );
    } catch (e) {
        return o.Z.dispatch({ type: "PREMIUM_GROUP_REMOVE_MEMBER_FAILURE" }), null;
    }
}
async function m(e) {
    o.Z.dispatch({ type: "PREMIUM_GROUP_MEMBERS_FETCH_START" });
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
async function h(e, t, n) {
    o.Z.dispatch({
        type: "PREMIUM_GROUP_ACCEPT_INVITE_START",
        subscriptionGroupMemberId: n,
    });
    try {
        await a.tn.patch({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        }),
            o.Z.dispatch({
                type: "PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS",
                subscriptionGroupMemberId: n,
            });
    } catch (e) {
        throw (
            (o.Z.dispatch({
                type: "PREMIUM_GROUP_ACCEPT_INVITE_FAIL",
                subscriptionGroupMemberId: n,
            }),
            e)
        );
    }
}
async function g(e, t, n) {
    o.Z.dispatch({
        type: "PREMIUM_GROUP_REMOVE_INVITE_START",
        subscriptionGroupMemberId: n,
    });
    try {
        let r = await a.tn.del({
            url: c.ANM.BILLING_SUBSCRIPTION_INVITE(e, t),
            rejectWithError: !0,
        });
        return (
            o.Z.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_SUCCESS",
                subscriptionId: e,
                subscriptionGroupMemberId: n,
            }),
            r
        );
    } catch (e) {
        return (
            o.Z.dispatch({
                type: "PREMIUM_GROUP_REMOVE_INVITE_FAILURE",
                subscriptionGroupMemberId: n,
            }),
            null
        );
    }
}
async function E(e) {
    o.Z.dispatch({
        type: "PREMIUM_GROUP_INVITE_FETCH_START",
        subscriptionGroupMemberId: e,
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
            subscriptionGroupMemberId: e,
            invite: t,
        });
    } catch (n) {
        var t;
        o.Z.dispatch({
            type: "PREMIUM_GROUP_INVITE_FETCH_FAIL",
            subscriptionGroupMemberId: e,
            status: null != (t = null == n ? void 0 : n.status) ? t : 0,
        });
    }
}
