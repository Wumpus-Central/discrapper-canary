n.d(t, {
    Hs: () => g,
    Vh: () => y,
    k: () => m,
    ny: () => v
});
var r = n(192379),
    i = n(149765),
    o = n(442837),
    a = n(911969),
    s = n(160404),
    l = n(695346),
    c = n(131704),
    u = n(314897),
    d = n(592125),
    f = n(271383),
    _ = n(496675),
    p = n(594174),
    h = n(981631);
function m(e, t) {
    var n, r, i, o, a;
    let _,
        h = null != (_ = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e) ? v(_) : void 0,
        m = l.xM.getSetting(),
        g = u.default.getId(),
        y = null != (o = null == (n = p.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) && o,
        O = null != h && null != (a = null == (r = f.ZP.getMember(h, g)) ? void 0 : r.roles) ? a : [],
        I = s.Z.isViewingRoles(h),
        { computedPermissions: S, hasBaseAccessPermissions: T, hasSendMessagesPermission: N } = b(_, e instanceof c.Sf && e.isThread());
    return {
        context: _,
        userId: g,
        roleIds: O,
        isImpersonating: I,
        commandTypes: t,
        computedPermissions: S,
        hasBaseAccessPermissions: T,
        hasSendMessagesPermission: N,
        allowNsfw: E(_, y, m)
    };
}
function g(e, t) {
    let n = r.useMemo(() => {
            if (e instanceof c.Sf && e.isThread()) {
                var t;
                return null != (t = d.Z.getChannel(e.parent_id)) ? t : e;
            }
            return e;
        }, [e]),
        i = null != n ? v(n) : void 0,
        a = l.xM.useSetting(),
        _ = (0, o.e7)([u.default], () => u.default.getId()),
        h = (0, o.e7)([p.default], () => {
            var e, t;
            return null != (t = null == (e = p.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) && t;
        }),
        m = (0, o.Wu)([f.ZP], () => {
            var e, t;
            return null != i && null != (t = null == (e = f.ZP.getMember(i, _)) ? void 0 : e.roles) ? t : [];
        }),
        g = (0, o.e7)([s.Z], () => s.Z.isViewingRoles(i));
    return r.useMemo(() => {
        let { computedPermissions: r, hasBaseAccessPermissions: i, hasSendMessagesPermission: o } = b(n, e instanceof c.Sf && e.isThread());
        return {
            context: n,
            userId: _,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: o,
            allowNsfw: E(n, h, a)
        };
    }, [t, n, g, m, _, h, a, e]);
}
function E(e, t, n) {
    return !!t && (!(e instanceof c.Sf) || (null != e.guild_id ? e.nsfw : n));
}
function b(e, t) {
    let n, r;
    if ((e instanceof c.Sf && e.isPrivate()) || null == e)
        return {
            computedPermissions: i.vB(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0
        };
    let o = _.Z.computePermissions(e);
    return (
        i.e$(o, h.Plq.ADMINISTRATOR) ? ((n = !0), (r = !0)) : e instanceof c.Sf ? ((n = i.e$(o, h.Plq.VIEW_CHANNEL) && i.e$(o, h.Plq.USE_APPLICATION_COMMANDS)), (r = t ? i.e$(o, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(o, h.Plq.SEND_MESSAGES))) : ((n = i.e$(o, h.Plq.VIEW_CHANNEL)), (r = !0)),
        {
            computedPermissions: o,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: r
        }
    );
}
function y(e, t) {
    return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === h.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t ? a.D.BOT_DM : a.D.PRIVATE_CHANNEL) : a.D.GUILD;
}
function v(e) {
    return e instanceof c.Sf ? e.guild_id : e.id;
}
