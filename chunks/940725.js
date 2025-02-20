n.d(t, { h: () => d }), n(47120);
var r = n(704215),
    i = n(442837),
    l = n(645041),
    o = n(271383),
    a = n(430824),
    s = n(594174),
    c = n(353093),
    u = n(981631);
function d(e) {
    let t = (0, i.e7)(
            [s.default, a.Z, o.ZP],
            () =>
                (function (e) {
                    let [t, n, r] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.default, a.Z, o.ZP];
                    if (null == e) return !1;
                    let i = n.getGuild(e);
                    if (null == i || !(0, c.EJ)(i) || null == i.profile) return !1;
                    let l = t.getCurrentUser();
                    if (null == l) return !1;
                    let u = r.getMember(e, l.id);
                    if (null == u || u.isPending) return !1;
                    if (null == l.primaryGuild) return !0;
                    let d = null != u.joinedAt ? new Date(u.joinedAt) : null,
                        p = null != d && Date.now() - d.getTime() > 259200000,
                        { identityGuildId: h, identityEnabled: f } = l.primaryGuild;
                    return null != h && null == f ? e === h : null == h && null == f ? p : (h !== e || !1 !== f) && null != h && !1 === f && p;
                })(e, [s.default, a.Z, o.ZP]),
            [e]
        ),
        n = (0, l.FT)(r.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : u.lds);
    return t && !n;
}
