n.d(t, {
    ZP: () => h,
    sE: () => p
}),
    n(997841);
var r = n(192379),
    i = n(533800),
    o = n(442837),
    a = n(234383),
    s = n(314897),
    l = n(271383),
    c = n(701190),
    u = n(594174),
    d = n(630388),
    f = n(330705),
    _ = n(981631),
    p = (function (e) {
        return (e[(e.IS_MEMBER = 0)] = 'IS_MEMBER'), (e[(e.ADOPT_TAG = 1)] = 'ADOPT_TAG'), (e[(e.HAS_APPLICATION = 2)] = 'HAS_APPLICATION'), (e[(e.APPLY_TO_JOIN = 3)] = 'APPLY_TO_JOIN'), (e[(e.LURK_DISCOVERABLE = 4)] = 'LURK_DISCOVERABLE'), (e[(e.JOIN_VIA_INVITE = 5)] = 'JOIN_VIA_INVITE'), e;
    })({});
function h(e) {
    let { id: t, features: n } = e,
        p = (0, o.e7)([s.default], () => s.default.getId()),
        h = (0, o.e7)([u.default], () => u.default.getUser(p), [p]),
        m = (0, o.e7)(
            [l.ZP],
            () => {
                var e;
                return (null == (e = null != t ? l.ZP.getMember(t, p) : null) ? void 0 : e.joinedAt) != null;
            },
            [t, p]
        ),
        { validInviteKey: g, isBypassInvite: E } = (0, o.cj)([c.Z], () => {
            var e;
            let n = c.Z.getInviteKeyForGuildId(t),
                r = null != n ? c.Z.getInvite(n) : null;
            return null == r || r.state === _.r2o.BANNED || r.state === _.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1
                  }
                : {
                      validInviteKey: n,
                      isBypassInvite: (0, d.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS)
                  };
        }),
        b = (0, a.Z)(),
        y = r.useMemo(() => {
            if (m) {
                let n = null == h ? void 0 : h.primaryGuild,
                    r = (null == n ? void 0 : n.identityGuildId) === t && (null == n ? void 0 : n.identityEnabled) === !0;
                return +(null != e.tag && !r);
            }
            return b.includes(t) ? 2 : (null == n ? void 0 : n.includes(_.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == n ? void 0 : n.includes(_.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != g || e.visibility === f.k.PUBLIC_WITH_RECRUITMENT) && !E ? 3 : null != g ? 5 : (null == n ? void 0 : n.includes(_.oNc.DISCOVERABLE)) ? 4 : null;
        }, [n, t, E, m, b, e.visibility, e.tag, g, null == h ? void 0 : h.primaryGuild]);
    return {
        guildId: t,
        ctaType: y,
        validInviteKey: g
    };
}
