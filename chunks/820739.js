"use strict";
n.d(t, { jZ: () => h, VU: () => u, VA: () => A, CD: () => E, Ey: () => f, tO: () => _, HJ: () => I });
var i = n(636537),
    r = n(228366),
    a = n(913122),
    s = n(315069);
class l extends s.A {
    id;
    guildId;
    userId;
    user;
    ended;
    endsAt;
    static createFromServer(e) {
        return new l({
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
var o = n(545934),
    d = n(166403),
    c = n(652215);
async function u(e) {
    let { includeEnded: t = !1 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        n = (
            await i.Bo.get({
                url: c.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                oldFormErrors: !0,
                query: t ? { include_ended: !0 } : void 0,
                rejectWithError: !0,
            })
        ).body.map((e) => l.createFromServer(e));
    return r.h.dispatch({ type: "GUILD_APPLIED_BOOSTS_FETCH_SUCCESS", guildId: e, appliedBoosts: n }), n;
}
async function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        t = (
            await i.Bo.get({
                url: c.Rsh.USER_APPLIED_GUILD_BOOSTS,
                oldFormErrors: !0,
                query: { paused: e },
                rejectWithError: !0,
            })
        ).body.map((e) => l.createFromServer(e));
    return r.h.dispatch({ type: "USER_APPLIED_BOOSTS_FETCH_SUCCESS", appliedGuildBoosts: t }), t;
}
async function E() {
    r.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH" });
    let e = (
        await i.Bo.get({ url: c.Rsh.USER_GUILD_BOOST_SLOTS, oldFormErrors: !0, rejectWithError: (0, i.fT)() })
    ).body.map((e) => o.A.createFromServer(e, d.A.getSubscriptionById(e.subscription_id)));
    return r.h.dispatch({ type: "GUILD_BOOST_SLOTS_FETCH_SUCCESS", guildBoostSlots: e }), e;
}
async function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    r.h.dispatch({ type: "GUILD_APPLY_BOOST_START" });
    try {
        let a = await i.Bo.put({
                url: c.Rsh.APPLIED_GUILD_BOOSTS_FOR_GUILD(e),
                body: { user_premium_guild_subscription_slot_ids: t, disable_powerup_auto_apply: n },
                oldFormErrors: !0,
                rejectWithError: (0, i.fT)(),
            }),
            s = Array.isArray(a.body) ? a.body.map(l.createFromServer) : [l.createFromServer(a.body)];
        return r.h.dispatch({ type: "GUILD_APPLY_BOOST_SUCCESS", appliedGuildBoost: s }), E(), s;
    } catch (t) {
        let e = new a.ex(t);
        throw (r.h.dispatch({ type: "GUILD_APPLY_BOOST_FAIL", error: e }), e);
    }
}
async function h(e, t) {
    r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_START" });
    try {
        await i.Bo.del({ url: c.Rsh.APPLIED_GUILD_BOOST(e, t), oldFormErrors: !0, rejectWithError: (0, i.fT)() }), E();
    } catch (t) {
        let e = new a.ex(t);
        throw (r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_FAIL", error: e }), e);
    }
    r.h.dispatch({ type: "GUILD_UNAPPLY_BOOST_SUCCESS", boostId: t });
}
async function I(e) {
    let t = await i.Bo.post({ url: c.Rsh.USER_GUILD_BOOST_SLOT_CANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = o.A.createFromServer(t.body, d.A.getSubscriptionById(t.body.subscription_id));
    return r.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
async function f(e) {
    let t = await i.Bo.post({ url: c.Rsh.USER_GUILD_BOOST_SLOT_UNCANCEL(e), oldFormErrors: !0, rejectWithError: !0 }),
        n = o.A.createFromServer(t.body, d.A.getSubscriptionById(t.body.subscription_id));
    return r.h.dispatch({ type: "GUILD_BOOST_SLOT_UPDATE_SUCCESS", guildBoostSlot: n }), n;
}
