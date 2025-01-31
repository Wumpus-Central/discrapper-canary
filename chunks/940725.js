n.d(t, { h: () => u }), n(47120);
var i = n(704215),
    l = n(442837),
    a = n(645041),
    r = n(271383),
    s = n(430824),
    o = n(594174),
    c = n(353093),
    d = n(981631);
function u(e) {
    let t = (0, l.e7)(
            [o.default, s.Z, r.ZP],
            () =>
                (function (e) {
                    let [t, n, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, s.Z, r.ZP];
                    if (null == e) return !1;
                    let l = n.getGuild(e);
                    if (null == l || !(0, c.EJ)(l) || null == l.profile) return !1;
                    let a = t.getCurrentUser();
                    if (null == a) return !1;
                    let d = i.getMember(e, a.id);
                    if (null == d || d.isPending) return !1;
                    if (null == a.primaryGuild) return !0;
                    let u = null != d.joinedAt ? new Date(d.joinedAt) : null,
                        h = null != u && Date.now() - u.getTime() > 259200000,
                        { identityGuildId: p, identityEnabled: m } = a.primaryGuild;
                    return null != p && null == m ? e === p : null == p && null == m ? h : (p !== e || !1 !== m) && null != p && !1 === m && h;
                })(e, [o.default, s.Z, r.ZP]),
            [e]
        ),
        n = (0, a.FT)(i.C.ADOPT_CLAN_IDENTITY_NOTICE, null != e ? e : d.lds);
    return t && !n;
}
