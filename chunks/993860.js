n.d(t, {
    ZP: () => p,
    sE: () => _
}),
    n(789020);
var r = n(192379),
    i = n(533800),
    o = n(442837),
    a = n(234383),
    s = n(314897),
    l = n(271383),
    c = n(701190),
    u = n(630388),
    d = n(330705),
    f = n(981631),
    _ = (function (e) {
        return (e[(e.IS_MEMBER = 0)] = 'IS_MEMBER'), (e[(e.HAS_APPLICATION = 1)] = 'HAS_APPLICATION'), (e[(e.APPLY_TO_JOIN = 2)] = 'APPLY_TO_JOIN'), (e[(e.LURK_DISCOVERABLE = 3)] = 'LURK_DISCOVERABLE'), (e[(e.JOIN_VIA_INVITE = 4)] = 'JOIN_VIA_INVITE'), e;
    })({});
function p(e) {
    let { id: t, features: n } = e,
        _ = (0, o.e7)([s.default], () => s.default.getId()),
        p = (0, o.e7)(
            [l.ZP],
            () => {
                var e;
                return (null == (e = null != t ? l.ZP.getMember(t, _) : null) ? void 0 : e.joinedAt) != null;
            },
            [t, _]
        ),
        { validInviteKey: h, isBypassInvite: m } = (0, o.cj)([c.Z], () => {
            var e;
            let n = c.Z.getInviteKeyForGuildId(t),
                r = null != n ? c.Z.getInvite(n) : null;
            return null == r || r.state === f.r2o.BANNED || r.state === f.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1
                  }
                : {
                      validInviteKey: n,
                      isBypassInvite: (0, u.yE)(null != (e = r.flags) ? e : 0, i.$.IS_APPLICATION_BYPASS)
                  };
        }),
        g = (0, a.Z)(),
        E = r.useMemo(() => (p ? 0 : g.includes(t) ? 1 : (null == n ? void 0 : n.includes(f.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == n ? void 0 : n.includes(f.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != h || e.visibility === d.k.PUBLIC_WITH_RECRUITMENT) && !m ? 2 : null != h ? 4 : (null == n ? void 0 : n.includes(f.oNc.DISCOVERABLE)) ? 3 : null), [n, t, m, p, g, e.visibility, h]);
    return {
        guildId: t,
        ctaType: E,
        validInviteKey: h
    };
}
