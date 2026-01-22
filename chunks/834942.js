n.d(t, { A: () => R }), n(896048), n(938796), n(321073);
var r,
    i = n(665260),
    a = n(311907),
    s = n(73153),
    o = n(260509),
    l = n(661191),
    c = n(696451),
    u = n(317525),
    d = n(71393),
    f = n(287809),
    p = n(652215),
    _ = n(340837);
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let m = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        canChat: !0,
    },
    g = new Set(),
    E = {};
function b(e) {
    let t;
    y(e), g.add(e);
    let n = d.A.getGuild(e),
        r = f.default.getCurrentUser();
    if (null == n || n.verificationLevel === p.PvD.NONE || null == r || (0, o.bM)(n, r) || r.isPhoneVerified()) return;
    let a = c.Ay.getMember(n.id, r.id);
    if (null != a) {
        var l;
        if ((0, i.Lt)(null != (l = a.flags) ? l : 0, _.D.BYPASSES_VERIFICATION)) return;
        let e = new Set();
        for (let t of a.roles) {
            let r = u.A.getRole(n.id, t);
            null == r || r.managed || e.add(t);
        }
        let t = new Date("2022-12-02 00:00:00"),
            r = null == a.joinedAt || new Date(a.joinedAt) < t;
        if (!(n.features.has(p.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r) && e.size > 0) return;
    }
    let h = +r.createdAt + 60000 * p.$8o.ACCOUNT_AGE - Date.now(),
        m = +n.joinedAt + 60000 * p.$8o.MEMBER_AGE - Date.now(),
        b = n.verificationLevel >= p.PvD.LOW && !r.isClaimed(),
        O = !1,
        A = !1,
        v = !1,
        S = !1;
    r.isPhoneVerified() ||
        r.isStaff() ||
        ((O = n.verificationLevel >= p.PvD.LOW && !r.verified),
        (A = n.verificationLevel >= p.PvD.VERY_HIGH),
        (v = n.verificationLevel >= p.PvD.MEDIUM && h > 0),
        (S = n.verificationLevel >= p.PvD.HIGH && m > 0));
    let I = [];
    S && I.push(m),
        v && I.push(h),
        I.length > 0 &&
            (t = setTimeout(
                () =>
                    s.h.dispatch({
                        type: "GUILD_VERIFICATION_CHECK",
                        guildId: e,
                    }),
                Math.max(...I),
            )),
        (E[e] = {
            notClaimed: b,
            notEmailVerified: O,
            notPhoneVerified: A,
            newAccount: v,
            newMember: S,
            canChat: !(b || O || A || v || S),
            accountDeadline: new Date(Date.now() + h),
            memberDeadline: new Date(Date.now() + m),
            timeoutRef: t,
        });
}
function y(e) {
    let t = E[e];
    null != t && clearTimeout(t.timeoutRef), delete E[e];
}
function O() {
    for (let e in (g.clear(), E)) y(e);
}
function A() {
    l.default.keys(E).forEach(y);
}
function v(e) {
    g.delete(e.guild.id), b(e.guild.id);
}
function S(e) {
    let { guild: t } = e;
    y(t.id);
}
function I(e) {
    var t;
    let { guildId: n, user: r } = e;
    if (r.id !== (null == (t = f.default.getCurrentUser()) ? void 0 : t.id)) return !1;
    g.delete(n);
}
function T() {
    g.clear();
}
function C(e) {
    let { guildId: t } = e;
    b(t);
}
class N extends (r = a.Ay.Store) {
    initialize() {
        this.waitFor(c.Ay, u.A, d.A, f.default);
    }
    getCheck(e) {
        var t;
        return null == e ? m : (g.has(e) || b(e), null != (t = E[e]) ? t : m);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
h(N, "displayName", "GuildVerificationStore");
let R = new N(s.h, {
    CONNECTION_OPEN: O,
    CONNECTION_CLOSED: A,
    CURRENT_USER_UPDATE: T,
    GUILD_CREATE: v,
    GUILD_UPDATE: v,
    GUILD_DELETE: S,
    GUILD_MEMBER_UPDATE: I,
    GUILD_VERIFICATION_CHECK: C,
});
