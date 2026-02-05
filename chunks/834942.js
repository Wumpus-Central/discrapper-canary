"use strict";
n.d(t, { A: () => N }), n(938796), n(321073);
var r = n(665260),
    i = n(311907),
    a = n(73153),
    s = n(260509),
    o = n(661191),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(287809),
    _ = n(652215),
    f = n(340837);
let p = { notClaimed: !1, notEmailVerified: !1, notPhoneVerified: !1, newAccount: !1, newMember: !1, canChat: !0 },
    h = new Set(),
    m = {};
function g(e) {
    let t;
    E(e), h.add(e);
    let n = c.A.getGuild(e),
        i = d.default.getCurrentUser();
    if (null == n || n.verificationLevel === _.PvD.NONE || null == i || (0, s.bM)(n, i) || i.isPhoneVerified()) return;
    let o = l.Ay.getMember(n.id, i.id);
    if (null != o) {
        if ((0, r.Lt)(o.flags ?? 0, f.D.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of o.roles) {
            let r = u.A.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date("2022-12-02 00:00:00"),
            i = null == o.joinedAt || new Date(o.joinedAt) < t;
        if (!(n.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i) && e.size > 0) return;
    }
    let p = +i.createdAt + 6e4 * _.$8o.ACCOUNT_AGE - Date.now(),
        g = +n.joinedAt + 6e4 * _.$8o.MEMBER_AGE - Date.now(),
        A = n.verificationLevel >= _.PvD.LOW && !i.isClaimed(),
        I = !1,
        T = !1,
        y = !1,
        S = !1;
    i.isPhoneVerified() ||
        i.isStaff() ||
        ((I = n.verificationLevel >= _.PvD.LOW && !i.verified),
        (T = n.verificationLevel >= _.PvD.VERY_HIGH),
        (y = n.verificationLevel >= _.PvD.MEDIUM && p > 0),
        (S = n.verificationLevel >= _.PvD.HIGH && g > 0));
    let v = [];
    S && v.push(g),
        y && v.push(p),
        v.length > 0 &&
            (t = setTimeout(() => a.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...v))),
        (m[e] = {
            notClaimed: A,
            notEmailVerified: I,
            notPhoneVerified: T,
            newAccount: y,
            newMember: S,
            canChat: !(A || I || T || y || S),
            accountDeadline: new Date(Date.now() + p),
            memberDeadline: new Date(Date.now() + g),
            timeoutRef: t,
        });
}
function E(e) {
    let t = m[e];
    null != t && clearTimeout(t.timeoutRef), delete m[e];
}
function A() {
    for (let e in (h.clear(), m)) E(e);
}
function I() {
    o.default.keys(m).forEach(E);
}
function T(e) {
    h.delete(e.guild.id), g(e.guild.id);
}
function y(e) {
    let { guild: t } = e;
    E(t.id);
}
function S(e) {
    let { guildId: t, user: n } = e;
    if (n.id !== d.default.getCurrentUser()?.id) return !1;
    h.delete(t);
}
function v() {
    h.clear();
}
function C(e) {
    let { guildId: t } = e;
    g(t);
}
class b extends i.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(l.Ay, u.A, c.A, d.default);
    }
    getCheck(e) {
        return null == e ? p : (h.has(e) || g(e), m[e] ?? p);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let N = new b(a.h, {
    CONNECTION_OPEN: A,
    CONNECTION_CLOSED: I,
    CURRENT_USER_UPDATE: v,
    GUILD_CREATE: T,
    GUILD_UPDATE: T,
    GUILD_DELETE: y,
    GUILD_MEMBER_UPDATE: S,
    GUILD_VERIFICATION_CHECK: C,
});
