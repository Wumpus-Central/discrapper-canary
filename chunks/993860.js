n.d(t, {
    Z: () => v,
    s: () => m
});
var r,
    l = n(192379),
    i = n(442837),
    a = n(234383),
    s = n(314897),
    o = n(271383),
    c = n(701190),
    u = n(405222),
    d = n(981631),
    m = (((r = {})[(r.IS_MEMBER = 0)] = 'IS_MEMBER'), (r[(r.HAS_APPLICATION = 1)] = 'HAS_APPLICATION'), (r[(r.APPLY_TO_JOIN = 2)] = 'APPLY_TO_JOIN'), (r[(r.LURK_DISCOVERABLE = 3)] = 'LURK_DISCOVERABLE'), (r[(r.JOIN_VIA_INVITE = 4)] = 'JOIN_VIA_INVITE'), r);
function v(e) {
    let { id: t, features: n } = e,
        r = (0, i.e7)([s.default], () => s.default.getId()),
        m = (0, i.e7)(
            [o.ZP],
            () => {
                var e;
                return (null === (e = null != t ? o.ZP.getMember(t, r) : null) || void 0 === e ? void 0 : e.joinedAt) != null;
            },
            [t, r]
        ),
        v = (0, i.e7)([c.Z], () => {
            let e = c.Z.getInviteKeyForGuildId(t),
                n = null != e ? c.Z.getInvite(e) : null;
            return null == n || n.state === d.r2o.BANNED || n.state === d.r2o.EXPIRED ? null : e;
        }),
        x = (0, a.Z)(),
        f = l.useMemo(() => (m ? 0 : x.includes(t) ? 1 : (null == n ? void 0 : n.includes(d.oNc.MEMBER_VERIFICATION_GATE_ENABLED)) && (null == n ? void 0 : n.includes(d.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && (null != v || e.visibility === u.k.PUBLIC_WITH_RECRUITMENT) ? 2 : (null == n ? void 0 : n.includes(d.oNc.DISCOVERABLE)) ? 3 : null != v ? 4 : null), [n, t, m, x, e.visibility, v]);
    return {
        guildId: t,
        ctaType: f,
        validInviteKey: v
    };
}
