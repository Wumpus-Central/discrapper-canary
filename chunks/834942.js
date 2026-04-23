"use strict";
n.d(t, { A: () => T }), n(938796), n(321073);
var i = n(665260),
    r = n(17928),
    s = n(228366),
    a = n(260509),
    o = n(935208),
    l = n(696451),
    d = n(317525),
    _ = n(71393),
    u = n(287809),
    c = n(652215),
    E = n(340837);
let h = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        missingVerificationRole: !1,
        canChat: !0,
    },
    m = new Set(),
    f = {};
function g(e) {
    let t, n, r;
    p(e), m.add(e);
    let o = _.A.getGuild(e),
        h = u.default.getCurrentUser(),
        g = null != o && o.verificationLevel !== c.PvD.NONE,
        A = null != o && null != o.verificationRoleId;
    if (null == o || null == h || (!g && !A) || (0, a.bM)(o, h)) return;
    let I = l.Ay.getMember(o.id, h.id);
    if (null != I && (0, i.Lt)(I.flags ?? 0, E.D.BYPASSES_VERIFICATION)) return;
    let T = !1;
    if (A && null != I && (T = !I.roles.includes(o.verificationRoleId))) {
        let e = d.A.getRole(o.id, o.verificationRoleId);
        null != e && ((t = e.name), (n = e.tags?.guild_connections === null));
    }
    let S = !1,
        N = !1,
        C = !1,
        R = !1,
        O = !1,
        y = 0,
        v = 0;
    if (g && !h.isPhoneVerified()) {
        let e = !1;
        if (null != I) {
            let t = new Set();
            for (let e of I.roles) {
                let n = d.A.getRole(o.id, e);
                null == n || n.managed || t.add(e);
            }
            let n = new Date("2022-12-02 00:00:00"),
                i = null == I.joinedAt || new Date(I.joinedAt) < n,
                r = o.features.has(c.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
            A || r || !(t.size > 0) || (e = !0);
        }
        !e &&
            ((y = +h.createdAt + 6e4 * c.$8o.ACCOUNT_AGE - Date.now()),
            (v = +o.joinedAt + 6e4 * c.$8o.MEMBER_AGE - Date.now()),
            (S = o.verificationLevel >= c.PvD.LOW && !h.isClaimed()),
            h.isStaff() ||
                ((N = o.verificationLevel >= c.PvD.LOW && !h.verified),
                (C = o.verificationLevel >= c.PvD.VERY_HIGH),
                (R = o.verificationLevel >= c.PvD.MEDIUM && y > 0),
                (O = o.verificationLevel >= c.PvD.HIGH && v > 0)));
    }
    let D = [];
    O && D.push(v),
        R && D.push(y),
        D.length > 0 &&
            (r = setTimeout(() => s.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...D))),
        (f[e] = {
            notClaimed: S,
            notEmailVerified: N,
            notPhoneVerified: C,
            newAccount: R,
            newMember: O,
            missingVerificationRole: T,
            verificationRoleName: t,
            verificationRoleIsLinkedRole: n,
            canChat: !(S || N || C || R || O || T),
            accountDeadline: new Date(Date.now() + y),
            memberDeadline: new Date(Date.now() + v),
            timeoutRef: r,
        });
}
function p(e) {
    let t = f[e];
    null != t && clearTimeout(t.timeoutRef), delete f[e];
}
function A(e) {
    m.delete(e.guild.id), g(e.guild.id);
}
class I extends r.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(l.Ay, d.A, _.A, u.default);
    }
    getCheck(e) {
        return null == e ? h : (m.has(e) || g(e), f[e] ?? h);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let T = new I(s.h, {
    CONNECTION_OPEN: function () {
        for (let e in (m.clear(), f)) p(e);
    },
    CONNECTION_CLOSED: function () {
        o.default.keys(f).forEach(p);
    },
    CURRENT_USER_UPDATE: function () {
        m.clear();
    },
    GUILD_CREATE: A,
    GUILD_UPDATE: A,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        p(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (n.id !== u.default.getCurrentUser()?.id) return !1;
        m.delete(t), g(t);
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let { guildId: t } = e;
        g(t);
    },
});
