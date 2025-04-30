n.d(t, {
    F3: () => g,
    ZP: () => E,
    sE: () => m
}),
    n(997841);
var r = n(73800),
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
        return (e[(e.IS_MEMBER = 0)] = 'IS_MEMBER'), (e[(e.ADOPT_TAG = 1)] = 'ADOPT_TAG'), (e[(e.HAS_APPLICATION = 2)] = 'HAS_APPLICATION'), (e[(e.APPLY_TO_JOIN = 3)] = 'APPLY_TO_JOIN'), (e[(e.LURK_DISCOVERABLE = 4)] = 'LURK_DISCOVERABLE'), (e[(e.JOIN_VIA_INVITE = 5)] = 'JOIN_VIA_INVITE'), e;
    })({}),
    g = (function (e) {
        return (e.INVITE = 'INVITE'), e;
    })({});
function E(e, t) {
    let { id: n, features: m } = e,
        g = (0, a.e7)([l.default], () => l.default.getId()),
        E = (0, a.e7)([u.Z], () => u.Z.getGuild(n)),
        b = (0, a.e7)([f.default], () => f.default.getUser(g), [g]),
        y = (0, a.e7)(
            [c.ZP],
            () => {
                var e;
                return (null == (e = null != n ? c.ZP.getMember(n, g) : null) ? void 0 : e.joinedAt) != null;
            },
            [n, g]
        ),
        { validInviteKey: O, isBypassInvite: v } = (0, a.cj)([d.Z], () => {
            var e;
            let t = d.Z.getInviteKeyForGuildId(n),
                r = null != t ? d.Z.getInvite(t) : null;
            return null == r || r.state === h.r2o.BANNED || r.state === h.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1
                  }
                : {
                      validInviteKey: t,
                      isBypassInvite: (0, _.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS)
                  };
        }),
        I = (0, s.Z)(),
        S = r.useMemo(() => {
            if (y) {
                let r = null == b ? void 0 : b.primaryGuild,
                    i = (null == r ? void 0 : r.identityGuildId) === n && (null == r ? void 0 : r.identityEnabled) === !0;
                return 'INVITE' !== t && null != e.tag && !i && null != E && (0, o.up)(E) ? 1 : 0;
            }
            return I.includes(n) ? 2 : (null == m ? void 0 : m.includes(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == m ? void 0 : m.includes(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != O || e.visibility === p.k.PUBLIC_WITH_RECRUITMENT) && !v ? 3 : null != O ? 5 : (null == m ? void 0 : m.includes(h.oNc.DISCOVERABLE)) ? 4 : null;
        }, [y, I, n, m, O, e.visibility, e.tag, v, null == b ? void 0 : b.primaryGuild, t, E]);
    return {
        guildId: n,
        ctaType: S,
        validInviteKey: O
    };
}
