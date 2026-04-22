"use strict";
n.d(t, { A: () => T }), n(938796), n(321073);
var r = n(665260),
    i = n(311907),
    s = n(73153),
    a = n(260509),
    o = n(661191),
    l = n(696451),
    u = n(317525),
    d = n(71393),
    c = n(287809),
    _ = n(652215),
    f = n(340837);
let E = {
        notClaimed: !1,
        notEmailVerified: !1,
        notPhoneVerified: !1,
        newAccount: !1,
        newMember: !1,
        missingVerificationRole: !1,
        canChat: !0,
    },
    h = new Set(),
    p = {};
function m(e) {
    let t, n, i;
    g(e), h.add(e);
    let o = d.A.getGuild(e),
        E = c.default.getCurrentUser(),
        m = null != o && o.verificationLevel !== _.PvD.NONE,
        A = null != o && null != o.verificationRoleId;
    if (null == o || null == E || (!m && !A) || (0, a.bM)(o, E)) return;
    let I = l.Ay.getMember(o.id, E.id);
    if (null != I && (0, r.Lt)(I.flags ?? 0, f.D.BYPASSES_VERIFICATION)) return;
    let T = !1;
    if (A && null != I && (T = !I.roles.includes(o.verificationRoleId))) {
        let e = u.A.getRole(o.id, o.verificationRoleId);
        null != e && ((t = e.name), (n = e.tags?.guild_connections === null));
    }
    let S = !1,
        y = !1,
        N = !1,
        O = !1,
        R = !1,
        v = 0,
        C = 0;
    if (m && !E.isPhoneVerified()) {
        let e = !1;
        if (null != I) {
            let t = new Set();
            for (let e of I.roles) {
                let n = u.A.getRole(o.id, e);
                null == n || n.managed || t.add(e);
            }
            let n = new Date("2022-12-02 00:00:00"),
                r = null == I.joinedAt || new Date(I.joinedAt) < n,
                i = o.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !r;
            A || i || !(t.size > 0) || (e = !0);
        }
        !e &&
            ((v = +E.createdAt + 6e4 * _.$8o.ACCOUNT_AGE - Date.now()),
            (C = +o.joinedAt + 6e4 * _.$8o.MEMBER_AGE - Date.now()),
            (S = o.verificationLevel >= _.PvD.LOW && !E.isClaimed()),
            E.isStaff() ||
                ((y = o.verificationLevel >= _.PvD.LOW && !E.verified),
                (N = o.verificationLevel >= _.PvD.VERY_HIGH),
                (O = o.verificationLevel >= _.PvD.MEDIUM && v > 0),
                (R = o.verificationLevel >= _.PvD.HIGH && C > 0)));
    }
    let b = [];
    R && b.push(C),
        O && b.push(v),
        b.length > 0 &&
            (i = setTimeout(() => s.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...b))),
        (p[e] = {
            notClaimed: S,
            notEmailVerified: y,
            notPhoneVerified: N,
            newAccount: O,
            newMember: R,
            missingVerificationRole: T,
            verificationRoleName: t,
            verificationRoleIsLinkedRole: n,
            canChat: !(S || y || N || O || R || T),
            accountDeadline: new Date(Date.now() + v),
            memberDeadline: new Date(Date.now() + C),
            timeoutRef: i,
        });
}
function g(e) {
    let t = p[e];
    null != t && clearTimeout(t.timeoutRef), delete p[e];
}
function A(e) {
    h.delete(e.guild.id), m(e.guild.id);
}
class I extends i.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(l.Ay, u.A, d.A, c.default);
    }
    getCheck(e) {
        return null == e ? E : (h.has(e) || m(e), p[e] ?? E);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let T = new I(s.h, {
    CONNECTION_OPEN: function () {
        for (let e in (h.clear(), p)) g(e);
    },
    CONNECTION_CLOSED: function () {
        o.default.keys(p).forEach(g);
    },
    CURRENT_USER_UPDATE: function () {
        h.clear();
    },
    GUILD_CREATE: A,
    GUILD_UPDATE: A,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        g(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (n.id !== c.default.getCurrentUser()?.id) return !1;
        h.delete(t), m(t);
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let { guildId: t } = e;
        m(t);
    },
});
