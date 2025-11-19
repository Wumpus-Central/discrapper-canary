n.d(t, {
    F3: () => g,
    ZP: () => E,
    sE: () => m,
}),
    n(997841),
    n(388685);
var r = n(473749),
    i = n(533800),
    a = n(442837),
    o = n(731722),
    s = n(234383),
    l = n(314897),
    c = n(271383),
    u = n(430824),
    d = n(701190),
    f = n(594174),
    _ = n(630388),
    p = n(330705),
    h = n(981631),
    m = (function (e) {
        return (
            (e[(e.IS_MEMBER = 0)] = "IS_MEMBER"),
            (e[(e.ADOPT_TAG = 1)] = "ADOPT_TAG"),
            (e[(e.HAS_APPLICATION = 2)] = "HAS_APPLICATION"),
            (e[(e.APPLY_TO_JOIN = 3)] = "APPLY_TO_JOIN"),
            (e[(e.LURK_DISCOVERABLE = 4)] = "LURK_DISCOVERABLE"),
            (e[(e.JOIN_VIA_INVITE = 5)] = "JOIN_VIA_INVITE"),
            (e[(e.ACCEPT_ROLES = 6)] = "ACCEPT_ROLES"),
            e
        );
    })({}),
    g = (function (e) {
        return (e.INVITE = "INVITE"), e;
    })({});
function E(e, t, n) {
    let { id: m, features: g } = e,
        E = (0, a.e7)([l.default], () => l.default.getId()),
        b = (0, a.e7)([u.Z], () => u.Z.getGuild(m)),
        y = (0, a.e7)([f.default], () => f.default.getUser(E), [E]),
        O = (0, a.e7)([c.ZP], () => {
            var e;
            return (null == (e = null != m ? c.ZP.getMember(m, E) : null) ? void 0 : e.joinedAt) != null;
        }, [m, E]),
        {
            validInviteKey: v,
            isBypassInvite: I,
            inviteRoles: T,
        } = (0, a.cj)([d.Z], () => {
            var e;
            let t = null != n ? n : d.Z.getInviteKeyForGuildId(m),
                r = null != t ? d.Z.getInvite(t) : null;
            return null == r || r.state === h.r2o.BANNED || r.state === h.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1,
                      inviteRoles: null,
                  }
                : {
                      validInviteKey: t,
                      isBypassInvite: (0, _.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS),
                      inviteRoles: r.roles,
                  };
        }, [m, n]),
        S = (0, s.Z)(),
        A = r.useMemo(() => {
            if (O) {
                if ("INVITE" === t && null != T && T.length > 0 && null != y) {
                    var n;
                    let e = c.ZP.getMember(m, y.id),
                        t = new Set(null != (n = null == e ? void 0 : e.roles) ? n : []);
                    if (T.some((e) => !t.has(e.id))) return 6;
                }
                let r = null == y ? void 0 : y.primaryGuild,
                    i =
                        (null == r ? void 0 : r.identityGuildId) === m &&
                        (null == r ? void 0 : r.identityEnabled) === !0;
                return "INVITE" !== t && null != e.tag && !i && null != b && (0, o.up)(b) ? 1 : 0;
            }
            return S.includes(m)
                ? 2
                : (null == g ? void 0 : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                    (null == g ? void 0 : g.includes(h.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) &&
                    (null != v || e.visibility === p.k.PUBLIC_WITH_RECRUITMENT) &&
                    !I
                  ? 3
                  : null != v
                    ? 5
                    : (null == g ? void 0 : g.includes(h.GuildFeatures.DISCOVERABLE))
                      ? 4
                      : null;
        }, [O, S, m, g, v, e.visibility, e.tag, I, t, b, T, y]);
    return {
        guildId: m,
        ctaType: A,
        validInviteKey: v,
    };
}
