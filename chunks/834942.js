"use strict";
n.d(t, { A: () => g }), n(938796), n(321073);
var i = n(665260),
    r = n(17928),
    a = n(228366),
    s = n(260509),
    l = n(935208),
    o = n(696451),
    d = n(317525),
    c = n(71393),
    u = n(287809),
    _ = n(652215),
    E = n(340837);
let A = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        missingVerificationRole: !1,
        canChat: !0,
    },
    h = new Set(),
    I = {};
function f(e) {
    let t, n;
    p(e), h.add(e);
    let r = c.A.getGuild(e),
        l = u.default.getCurrentUser(),
        A = null != r && r.verificationLevel !== _.PvD.NONE,
        f = null != r && null != r.verificationRoleId;
    if (null == r || null == l || (!A && !f) || (0, s.bM)(r, l)) return;
    let T = o.Ay.getMember(r.id, l.id);
    if (null != T && (0, i.Lt)(T.flags ?? 0, E.D.BYPASSES_VERIFICATION)) return;
    let m = !1;
    f && null != T && (m = !T.roles.includes(r.verificationRoleId)) && (t = d.A.getRole(r.id, r.verificationRoleId));
    let g = !1,
        S = !1,
        N = !1,
        C = !1,
        R = !1,
        O = 0,
        L = 0;
    if (A && !l.isPhoneVerified()) {
        let e = !1;
        if (null != T) {
            let t = new Set();
            for (let e of T.roles) {
                let n = d.A.getRole(r.id, e);
                null == n || n.managed || t.add(e);
            }
            let n = new Date("2022-12-02 00:00:00"),
                i = null == T.joinedAt || new Date(T.joinedAt) < n,
                a = r.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
            f || a || !(t.size > 0) || (e = !0);
        }
        !e &&
            ((O = +l.createdAt + 6e4 * _.$8o.ACCOUNT_AGE - Date.now()),
            (L = +r.joinedAt + 6e4 * _.$8o.MEMBER_AGE - Date.now()),
            (g = r.verificationLevel >= _.PvD.LOW && !l.isClaimed()),
            l.isStaff() ||
                ((S = r.verificationLevel >= _.PvD.LOW && !l.verified),
                (N = r.verificationLevel >= _.PvD.VERY_HIGH),
                (C = r.verificationLevel >= _.PvD.MEDIUM && O > 0),
                (R = r.verificationLevel >= _.PvD.HIGH && L > 0)));
    }
    let y = [];
    R && y.push(L),
        C && y.push(O),
        y.length > 0 &&
            (n = setTimeout(() => a.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...y))),
        (I[e] = {
            notClaimed: g,
            notEmailVerified: S,
            notPhoneVerified: N,
            newAccount: C,
            newMember: R,
            missingVerificationRole: m,
            verificationRole: t,
            canChat: !(g || S || N || C || R || m),
            accountDeadline: new Date(Date.now() + O),
            memberDeadline: new Date(Date.now() + L),
            timeoutRef: n,
        });
}
function p(e) {
    let t = I[e];
    null != t && clearTimeout(t.timeoutRef), delete I[e];
}
function T(e) {
    h.delete(e.guild.id), f(e.guild.id);
}
class m extends r.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(o.Ay, d.A, c.A, u.default);
    }
    getCheck(e) {
        return null == e ? A : (h.has(e) || f(e), I[e] ?? A);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let g = new m(a.h, {
    CONNECTION_OPEN: function () {
        for (let e in (h.clear(), I)) p(e);
    },
    CONNECTION_CLOSED: function () {
        l.default.keys(I).forEach(p);
    },
    CURRENT_USER_UPDATE: function () {
        h.clear();
    },
    GUILD_CREATE: T,
    GUILD_UPDATE: T,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        p(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (n.id !== u.default.getCurrentUser()?.id) return !1;
        h.delete(t), f(t);
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let { guildId: t } = e;
        f(t);
    },
});
