n.d(t, {
    F3: () => g,
    ZP: () => E,
    sE: () => h,
}),
    n(997841),
    n(388685);
var r = n(473749),
    i = n(533800),
    a = n(95015),
    o = n(442837),
    s = n(731722),
    l = n(234383),
    c = n(314897),
    u = n(271383),
    d = n(430824),
    f = n(701190),
    p = n(594174),
    _ = n(330705),
    m = n(981631),
    h = (function (e) {
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
    let { id: h, features: g } = e,
        E = (0, o.e7)([c.default], () => c.default.getId()),
        b = (0, o.e7)([d.Z], () => d.Z.getGuild(h)),
        y = (0, o.e7)([p.default], () => p.default.getUser(E), [E]),
        O = (0, o.e7)([u.ZP], () => {
            var e;
            return (null == (e = null != h ? u.ZP.getMember(h, E) : null) ? void 0 : e.joinedAt) != null;
        }, [h, E]),
        {
            validInviteKey: v,
            isBypassInvite: S,
            inviteRoles: I,
        } = (0, o.cj)([f.Z], () => {
            var e;
            let t = null != n ? n : f.Z.getInviteKeyForGuildId(h),
                r = null != t ? f.Z.getInvite(t) : null;
            return null == r || r.state === m.r2o.BANNED || r.state === m.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1,
                      inviteRoles: null,
                  }
                : {
                      validInviteKey: t,
                      isBypassInvite: (0, a.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS),
                      inviteRoles: r.roles,
                  };
        }, [h, n]),
        T = (0, l.Z)(),
        A = r.useMemo(() => {
            if (O) {
                if ("INVITE" === t && null != I && I.length > 0 && null != y) {
                    var n;
                    let e = u.ZP.getMember(h, y.id),
                        t = new Set(null != (n = null == e ? void 0 : e.roles) ? n : []);
                    if (I.some((e) => !t.has(e.id))) return 6;
                }
                let r = null == y ? void 0 : y.primaryGuild,
                    i =
                        (null == r ? void 0 : r.identityGuildId) === h &&
                        (null == r ? void 0 : r.identityEnabled) === !0;
                return "INVITE" !== t && null != e.tag && !i && null != b && (0, s.up)(b) ? 1 : 0;
            }
            return T.includes(h)
                ? 2
                : (null == g ? void 0 : g.includes(m.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) &&
                    (null == g ? void 0 : g.includes(m.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL)) &&
                    (null != v || e.visibility === _.k.PUBLIC_WITH_RECRUITMENT) &&
                    !S
                  ? 3
                  : null != v
                    ? 5
                    : (null == g ? void 0 : g.includes(m.GuildFeatures.DISCOVERABLE))
                      ? 4
                      : null;
        }, [O, T, h, g, v, e.visibility, e.tag, S, t, b, I, y]);
    return {
        guildId: h,
        ctaType: A,
        validInviteKey: v,
    };
}
