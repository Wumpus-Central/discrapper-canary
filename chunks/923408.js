"use strict";
n.d(t, { CD: () => _, Ey: () => E, HJ: () => h, VA: () => f, VU: () => c, jZ: () => p, tO: () => d });
var r = n(562465),
    i = n(73153),
    s = n(198982),
    a = n(563173),
    o = n(545934),
    l = n(166403),
    u = n(652215);
async function c(e) {
    let t = (
        await r.Bo.get({ url: u.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body.map((e) => a.A.createFromServer(e));
    return i.h.dispatch({ type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId: e, appliedBoosts: t }), t;
}
async function d() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (
            await r.Bo.get({
                url: u.Rsh.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0,
            })
        ).body.map((e) => a.A.createFromServer(e));
    return i.h.dispatch({ type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: t }), t;
}
async function _() {
    i.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
    let e = (await r.Bo.get({ url: u.Rsh.USER_GUILD_BOOST_SLOTS, oldFormErrors: !0, rejectWithError: !1 })).body.map(
        (e) => o.A.createFromServer(e, l.A.getSubscriptionById(e.subscription_id)),
    );
    return i.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: e }), e;
}
async function f(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    i.h.dispatch({ type: "GUILD_APPLY_BOOST_START" });
    try {
        let s = await r.Bo.put({
                url: u.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t, disable_powerup_auto_apply: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            o = Array.isArray(s.body) ? s.body.map(a.A.createFromServer) : [a.A.createFromServer(s.body)];
        return i.h.dispatch({ type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: o }), _(), o;
    } catch (t) {
        let e = new s.ex(t);
        throw (i.h.dispatch({ type: "GUILD_APPLY_BOOST_FAIL", error: e }), e);
    }
}
async function p(e, t) {
    i.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
    try {
        await r.Bo.del({ url: u.Rsh.APPLIED_GUILD_BOOST(e, t), oldFormErrors: !0, rejectWithError: !1 }), _();
    } catch (t) {
        let e = new s.ex(t);
        throw (i.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_FAIL", error: e }), e);
    }
    i.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: t });
}
async function h(e) {
    let t = await r.Bo.post({ url: u.Rsh.USER_GUILD_BOOST_SLOT_CANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = o.A.createFromServer(t.body, l.A.getSubscriptionById(t.body.subscription_id));
    return i.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
async function E(e) {
    let t = await r.Bo.post({ url: u.Rsh.USER_GUILD_BOOST_SLOT_UNCANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = o.A.createFromServer(t.body, l.A.getSubscriptionById(t.body.subscription_id));
    return i.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
