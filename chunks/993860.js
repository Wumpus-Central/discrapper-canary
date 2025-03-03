n.d(t, {
    Z: () => j,
    s: () => f
}),
    n(789020);
var r,
    l = n(192379),
    i = n(533800),
    a = n(442837),
    o = n(234383),
    c = n(314897),
    s = n(271383),
    u = n(701190),
    d = n(630388),
    m = n(405222),
    v = n(981631),
    f = (((r = {})[(r.IS_MEMBER = 0)] = 'IS_MEMBER'), (r[(r.HAS_APPLICATION = 1)] = 'HAS_APPLICATION'), (r[(r.APPLY_TO_JOIN = 2)] = 'APPLY_TO_JOIN'), (r[(r.LURK_DISCOVERABLE = 3)] = 'LURK_DISCOVERABLE'), (r[(r.JOIN_VIA_INVITE = 4)] = 'JOIN_VIA_INVITE'), r);
function j(e) {
    let { id: t, features: n } = e,
        r = (0, a.e7)([c.default], () => c.default.getId()),
        f = (0, a.e7)(
            [s.ZP],
            () => {
                var e;
                return (null === (e = null != t ? s.ZP.getMember(t, r) : null) || void 0 === e ? void 0 : e.joinedAt) != null;
            },
            [t, r]
        ),
        { validInviteKey: j, isBypassInvite: I } = (0, a.cj)([u.Z], () => {
            var e;
            let n = u.Z.getInviteKeyForGuildId(t),
                r = null != n ? u.Z.getInvite(n) : null;
            return null == r || r.state === v.r2o.BANNED || r.state === v.r2o.EXPIRED
                ? {
                      validInviteKey: null,
                      isBypassInvite: !1
                  }
                : {
                      validInviteKey: n,
                      isBypassInvite: (0, d.yE)(null !== (e = r.flags) && void 0 !== e ? e : 0, i.$.IS_APPLICATION_BYPASS)
                  };
        }),
        x = (0, o.Z)(),
        b = l.useMemo(() => (f ? 0 : x.includes(t) ? 1 : (null == n ? void 0 : n.includes(v.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == n ? void 0 : n.includes(v.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != j || e.visibility === m.k.PUBLIC_WITH_RECRUITMENT) && !I ? 2 : null != j ? 4 : (null == n ? void 0 : n.includes(v.oNc.DISCOVERABLE)) ? 3 : null), [n, t, I, f, x, e.visibility, j]);
    return {
        guildId: t,
        ctaType: b,
        validInviteKey: j
    };
}
