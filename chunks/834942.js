(n(938796), n(321073));
var i = n(665260),
    r = n(855986),
    a = n(73153),
    s = n(260509),
    l = n(811091),
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
    f = {};
function I(e) {
    let t, n;
    (p(e), h.add(e));
    let r = c.A.getGuild(e),
        l = u.default.getCurrentUser(),
        A = null != r && r.verificationLevel !== _.PvD.NONE,
        I = null != r && null != r.verificationRoleId;
    if (null == r || null == l || (!A && !I) || (0, s.bM)(r, l)) return;
    let m = o.Ay.getMember(r.id, l.id);
    if (null != m && (0, i.Lt)(m.flags ?? 0, E.D.BYPASSES_VERIFICATION)) return;
    let T = !1;
    I && null != m && (T = !m.roles.includes(r.verificationRoleId)) && (t = d.A.getRole(r.id, r.verificationRoleId));
    let g = !1,
        S = !1,
        N = !1,
        C = !1,
        O = !1,
        R = 0,
        L = 0;
    if (A && !l.isPhoneVerified()) {
        let e = !1;
        if (null != m) {
            let t = new Set();
            for (let e of m.roles) {
                let n = d.A.getRole(r.id, e);
                null == n || n.managed || t.add(e);
            }
            let n = new Date("2022-12-02 00:00:00"),
                i = null == m.joinedAt || new Date(m.joinedAt) < n,
                a = r.features.has(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !i;
            I || a || !(t.size > 0) || (e = !0);
        }
        !e &&
            ((R = +l.createdAt + 6e4 * _.$8o.ACCOUNT_AGE - Date.now()),
            (L = +r.joinedAt + 6e4 * _.$8o.MEMBER_AGE - Date.now()),
            (g = r.verificationLevel >= _.PvD.LOW && !l.isClaimed()),
            l.isStaff() ||
                ((S = r.verificationLevel >= _.PvD.LOW && !l.verified),
                (N = r.verificationLevel >= _.PvD.VERY_HIGH),
                (C = r.verificationLevel >= _.PvD.MEDIUM && R > 0),
                (O = r.verificationLevel >= _.PvD.HIGH && L > 0)));
    }
    let y = [];
    (O && y.push(L),
        C && y.push(R),
        y.length > 0 &&
            (n = setTimeout(() => a.h.dispatch({ type: "GUILD_VERIFICATION_CHECK", guildId: e }), Math.max(...y))),
        (f[e] = {
            notClaimed: g,
            notEmailVerified: S,
            notPhoneVerified: N,
            newAccount: C,
            newMember: O,
            missingVerificationRole: T,
            verificationRole: t,
            canChat: !(g || S || N || C || O || T),
            accountDeadline: new Date(Date.now() + R),
            memberDeadline: new Date(Date.now() + L),
            timeoutRef: n,
        }));
}
function p(e) {
    let t = f[e];
    (null != t && clearTimeout(t.timeoutRef), delete f[e]);
}
function m(e) {
    (h.delete(e.guild.id), I(e.guild.id));
}
class T extends r.Ay.Store {
    static displayName = "GuildVerificationStore";
    initialize() {
        this.waitFor(o.Ay, d.A, c.A, u.default);
    }
    getCheck(e) {
        return null == e ? A : (h.has(e) || I(e), f[e] ?? A);
    }
    canChatInGuild(e) {
        return this.getCheck(e).canChat;
    }
}
let g = new T(a.h, {
    CONNECTION_OPEN: function () {
        for (let e in (h.clear(), f)) p(e);
    },
    CONNECTION_CLOSED: function () {
        l.default.keys(f).forEach(p);
    },
    CURRENT_USER_UPDATE: function () {
        h.clear();
    },
    GUILD_CREATE: m,
    GUILD_UPDATE: m,
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        p(t.id);
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        if (n.id !== u.default.getCurrentUser()?.id) return !1;
        (h.delete(t), I(t));
    },
    GUILD_VERIFICATION_CHECK: function (e) {
        let { guildId: t } = e;
        I(t);
    },
});
n.d(t, {}, { A: g });
