n.d(t, {
    ZP: () => g,
    sE: () => m
}),
    n(997841);
var r = n(192379),
    i = n(533800),
    o = n(442837),
    a = n(731722),
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
    })({});
function g(e) {
    let { id: t, features: n } = e,
        m = (0, o.e7)([l.default], () => l.default.getId()),
        g = (0, o.e7)([u.Z], () => u.Z.getGuild(t)),
        E = (0, o.e7)([f.default], () => f.default.getUser(m), [m]),
        b = (0, o.e7)(
            [c.ZP],
            () => {
                var e;
                return (null == (e = null != t ? c.ZP.getMember(t, m) : null) ? void 0 : e.joinedAt) != null;
            },
            [t, m]
        ),
        { validInviteKey: y, isBypassInvite: v } = (0, o.cj)([d.Z], () => {
            var e;
            let n = d.Z.getInviteKeyForGuildId(t),
                r = null != n ? d.Z.getInvite(n) : null;
            return null == r || r.state === h.r2o.BANNED || r.state === h.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1
                  }
                : {
                      validInviteKey: n,
                      isBypassInvite: (0, _.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS)
                  };
        }),
        O = (0, s.Z)(),
        I = r.useMemo(() => {
            if (b) {
                let n = null == E ? void 0 : E.primaryGuild,
                    r = (null == n ? void 0 : n.identityGuildId) === t && (null == n ? void 0 : n.identityEnabled) === !0;
                return null != e.tag && !r && null != g && (0, a.u)(g) ? 1 : 0;
            }
            return O.includes(t) ? 2 : (null == n ? void 0 : n.includes(h.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == n ? void 0 : n.includes(h.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != y || e.visibility === p.k.PUBLIC_WITH_RECRUITMENT) && !v ? 3 : null != y ? 5 : (null == n ? void 0 : n.includes(h.oNc.DISCOVERABLE)) ? 4 : null;
        }, [n, t, v, b, O, e.visibility, e.tag, y, null == E ? void 0 : E.primaryGuild, g]);
    return {
        guildId: t,
        ctaType: I,
        validInviteKey: y
    };
}
