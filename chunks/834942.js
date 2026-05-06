"use strict";
n.d(t, { A: () => T }), n(938796), n(321073);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(260509),
    o = n(935208),
    l = n(696451),
    u = n(317525),
    c = n(71393),
    d = n(287809),
    _ = n(652215),
    f = n(340837);
let h = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        missingVerificationRole: !1,
        canChat: !0,
    },
    p = new Set(),
    E = {};
function m(e) {
    let t, n;
    g(e), p.add(e);
    let r = c.A.getGuild(e),
        o = d.default.getCurrentUser(),
        h = null != r && r.verificationLevel !== _.PvD.NONE,
        m = null != r && null != r.verificationRoleId;
    if (null == r || null == o || (!h && !m) || (0, a.bM)(r, o)) return;
    let A = l.Ay.getMember(r.id, o.id);
    if (null != A && (0, i.Lt)(A.flags ?? 0, f.D.BYPASSES_VERIFICATION)) return;
    let I = !1;
    m && null != A && (I = !A.roles.includes(r.verificationRoleId)) && (t = u.A.getRole(r.id, r.verificationRoleId));
    let T = !1,
        S = !1,
        N = !1,
        y = !1,
        C = !1,
        v = 0,
        O = 0;
    if (h && !o.isPhoneVerified()) {
        let e = !1;
        if (null != A) {
            let t = new Set();
            for (let e of A.roles) {
                let n = u.A.getRole(r.id, e);
                null == n || n.managed || t.add(e);
            }
            let n = new Date("2022-12-02 00:00:00"),
                i = null == A.joinedAt || new Date(A.joinedAt) < n,
                s = r.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
            m || s || !(t.size > 0) || (e = !0);
        }
        !e &&
            ((v = +o.createdAt + 6e4 * _.$8o.ACCOUNT_AGE - Date.now()),
            (O = +r.joinedAt + 6e4 * _.$8o.MEMBER_AGE - Date.now()),
            (T = r.verificationLevel >= _.PvD.LOW && !o.isClaimed()),
            o.isStaff() ||
                ((S = r.verificationLevel >= _.PvD.LOW && !o.verified),
                (N = r.verificationLevel >= _.PvD.VERY_HIGH),
                (y = r.verificationLevel >= _.PvD.MEDIUM && v > 0),
                (C = r.verificationLevel >= _.PvD.HIGH && O > 0)));
    }
    let R = [];
    C && R.push(O),
        y && R.push(v),
        R.length > 0 &&
            (n = setTimeout(() => s.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...R))),
        (E[e] = {
            notClaimed: T,
            notEmailVerified: S,
            notPhoneVerified: N,
            newAccount: y,
            newMember: C,
            missingVerificationRole: I,
            verificationRole: t,
            canChat: !(T || S || N || y || C || I),
            accountDeadline: new Date(Date.now() + v),
            memberDeadline: new Date(Date.now() + O),
            timeoutRef: n,
        });
}
function g(e) {
    let t = E[e];
    null != t && clearTimeout(t.timeoutRef), delete E[e];
}
function A(e) {
    p.delete(e.guild.id), m(e.guild.id);
}
class I extends r.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(l.Ay, u.A, c.A, d.default);
    }
    getCheck(e) {
        return null == e ? h : (p.has(e) || m(e), E[e] ?? h);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let T = new I(s.h, {
    CONNECTION_OPEN: function () {
        for (let e in (p.clear(), E)) g(e);
    },
    CONNECTION_CLOSED: function () {
        o.default.keys(E).forEach(g);
    },
    CURRENT_USER_UPDATE: function () {
        p.clear();
    },
    GUILD_CREATE: A,
    GUILD_UPDATE: A,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        g(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (n.id !== d.default.getCurrentUser()?.id) return !1;
        p.delete(t), m(t);
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let { guildId: t } = e;
        m(t);
    },
});
