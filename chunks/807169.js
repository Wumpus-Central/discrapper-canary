n.d(t, {
    Hs: () => g,
    Vh: () => y,
    k: () => m,
    ny: () => I
});
var i = n(192379),
    r = n(149765),
    a = n(442837),
    s = n(911969),
    o = n(160404),
    l = n(695346),
    u = n(131704),
    c = n(314897),
    d = n(592125),
    f = n(271383),
    _ = n(496675),
    p = n(594174),
    h = n(981631);
function m(e, t) {
    var n, i, r, a, s;
    let _;
    let h = null != (_ = e instanceof u.Sf && e.isThread() && null !== (r = d.Z.getChannel(e.parent_id)) && void 0 !== r ? r : e) ? I(_) : void 0,
        m = l.xM.getSetting(),
        g = c.default.getId(),
        y = null !== (a = null === (n = p.default.getCurrentUser()) || void 0 === n ? void 0 : n.nsfwAllowed) && void 0 !== a && a,
        b = null != h && null !== (s = null === (i = f.ZP.getMember(h, g)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [],
        T = o.Z.isViewingRoles(h),
        { computedPermissions: S, hasBaseAccessPermissions: A, hasSendMessagesPermission: N } = v(_, e instanceof u.Sf && e.isThread());
    return {
        context: _,
        userId: g,
        roleIds: b,
        isImpersonating: T,
        commandTypes: t,
        computedPermissions: S,
        hasBaseAccessPermissions: A,
        hasSendMessagesPermission: N,
        allowNsfw: E(_, y, m)
    };
}
function g(e, t) {
    let n = i.useMemo(() => {
            if (e instanceof u.Sf && e.isThread()) {
                var t;
                return null !== (t = d.Z.getChannel(e.parent_id)) && void 0 !== t ? t : e;
            }
            return e;
        }, [e]),
        r = null != n ? I(n) : void 0,
        s = l.xM.useSetting(),
        _ = (0, a.e7)([c.default], () => c.default.getId()),
        h = (0, a.e7)([p.default], () => {
            var e, t;
            return null !== (t = null === (e = p.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== t && t;
        }),
        m = (0, a.Wu)([f.ZP], () => {
            var e, t;
            return null != r && null !== (t = null === (e = f.ZP.getMember(r, _)) || void 0 === e ? void 0 : e.roles) && void 0 !== t ? t : [];
        }),
        g = (0, a.e7)([o.Z], () => o.Z.isViewingRoles(r));
    return i.useMemo(() => {
        let { computedPermissions: i, hasBaseAccessPermissions: r, hasSendMessagesPermission: a } = v(n, e instanceof u.Sf && e.isThread());
        return {
            context: n,
            userId: _,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: i,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, h, s)
        };
    }, [t, n, g, m, _, h, s, e]);
}
function E(e, t, n) {
    return !!t && (!(e instanceof u.Sf) || (null != e.guild_id ? e.nsfw : n));
}
function v(e, t) {
    let n, i;
    if ((e instanceof u.Sf && e.isPrivate()) || null == e)
        return {
            computedPermissions: r.vB(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0
        };
    let a = _.Z.computePermissions(e);
    return (
        r.e$(a, h.Plq.ADMINISTRATOR) ? ((n = !0), (i = !0)) : e instanceof u.Sf ? ((n = r.e$(a, h.Plq.VIEW_CHANNEL) && r.e$(a, h.Plq.USE_APPLICATION_COMMANDS)), (i = t ? r.e$(a, h.Plq.SEND_MESSAGES_IN_THREADS) : r.e$(a, h.Plq.SEND_MESSAGES))) : ((n = r.e$(a, h.Plq.VIEW_CHANNEL)), (i = !0)),
        {
            computedPermissions: a,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: i
        }
    );
}
function y(e, t) {
    return e instanceof u.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === h.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t ? s.D.BOT_DM : s.D.PRIVATE_CHANNEL) : s.D.GUILD;
}
function I(e) {
    return e instanceof u.Sf ? e.guild_id : e.id;
}
