"use strict";
n.d(t, { jZ: () => m, VU: () => u, VA: () => h, CD: () => E, Ey: () => g, tO: () => c, HJ: () => f });
var i = n(636537),
    r = n(228366),
    s = n(845584),
    a = n(315069);
class o extends a.A {
    id;
    guildId;
    userId;
    user;
    ended;
    endsAt;
    static createFromServer(e) {
        return new o({
            id: e.id,
            guildId: e.guild_id,
            userId: null != e.user ? e.user.id : e.user_id,
            user: e.user,
            ended: e.ended,
            endsAt: null != e.ends_at && "" !== e.ends_at ? new Date(e.ends_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.guildId = e.guildId),
            (this.userId = e.userId),
            (this.user = e.user),
            (this.ended = e.ended),
            (this.endsAt = null != e.endsAt ? e.endsAt : null);
    }
}
var l = n(545934),
    d = n(166403),
    _ = n(652215);
async function u(e) {
    let t = (
        await i.Bo.get({ url: _.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e), oldFormErrors: !0, rejectWithError: !0 })
    ).body.map((e) => o.createFromServer(e));
    return r.h.dispatch({ type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId: e, appliedBoosts: t }), t;
}
async function c() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (
            await i.Bo.get({
                url: _.Rsh.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0,
            })
        ).body.map((e) => o.createFromServer(e));
    return r.h.dispatch({ type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: t }), t;
}
async function E() {
    r.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
    let e = (await i.Bo.get({ url: _.Rsh.USER_GUILD_BOOST_SLOTS, oldFormErrors: !0, rejectWithError: !1 })).body.map(
        (e) => l.A.createFromServer(e, d.A.getSubscriptionById(e.subscription_id)),
    );
    return r.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: e }), e;
}
async function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GUILD_APPLY_BOOST_START" });
    try {
        let s = await i.Bo.put({
                url: _.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t, disable_powerup_auto_apply: n },
                oldFormErrors: !0,
                rejectWithError: !1,
            }),
            a = Array.isArray(s.body) ? s.body.map(o.createFromServer) : [o.createFromServer(s.body)];
        return r.h.dispatch({ type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: a }), E(), a;
    } catch (t) {
        let e = new s.ex(t);
        throw (r.h.dispatch({ type: "GUILD_APPLY_BOOST_FAIL", error: e }), e);
    }
}
async function m(e, t) {
    r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
    try {
        await i.Bo.del({ url: _.Rsh.APPLIED_GUILD_BOOST(e, t), oldFormErrors: !0, rejectWithError: !1 }), E();
    } catch (t) {
        let e = new s.ex(t);
        throw (r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_FAIL", error: e }), e);
    }
    r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: t });
}
async function f(e) {
    let t = await i.Bo.post({ url: _.Rsh.USER_GUILD_BOOST_SLOT_CANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = l.A.createFromServer(t.body, d.A.getSubscriptionById(t.body.subscription_id));
    return r.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
async function g(e) {
    let t = await i.Bo.post({ url: _.Rsh.USER_GUILD_BOOST_SLOT_UNCANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = l.A.createFromServer(t.body, d.A.getSubscriptionById(t.body.subscription_id));
    return r.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
