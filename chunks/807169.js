n.d(t, {
    Hs: () => g,
    Vh: () => y,
    k: () => m,
    ny: () => O
});
var r = n(73800),
    i = n(149765),
    a = n(442837),
    o = n(911969),
    s = n(160404),
    l = n(695346),
    c = n(131704),
    u = n(314897),
    d = n(592125),
    _ = n(271383),
    f = n(496675),
    p = n(594174),
    h = n(981631);
function m(e, t) {
    var n, r, i, a, o;
    let f,
        h = null != (f = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e) ? O(f) : void 0,
        m = l.xM.getSetting(),
        g = u.default.getId(),
        y = null != (a = null == (n = p.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) && a,
        v = null != h && null != (o = null == (r = _.ZP.getMember(h, g)) ? void 0 : r.roles) ? o : [],
        I = s.Z.isViewingRoles(h),
        { computedPermissions: T, hasBaseAccessPermissions: S, hasSendMessagesPermission: A } = b(f, e instanceof c.Sf && e.isThread());
    return {
        context: f,
        userId: g,
        roleIds: v,
        isImpersonating: I,
        commandTypes: t,
        computedPermissions: T,
        hasBaseAccessPermissions: S,
        hasSendMessagesPermission: A,
        allowNsfw: E(f, y, m)
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
        i = null != n ? O(n) : void 0,
        o = l.xM.useSetting(),
        f = (0, a.e7)([u.default], () => u.default.getId()),
        h = (0, a.e7)([p.default], () => {
            var e, t;
            return null != (t = null == (e = p.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) && t;
        }),
        m = (0, a.Wu)([_.ZP], () => {
            var e, t;
            return null != i && null != (t = null == (e = _.ZP.getMember(i, f)) ? void 0 : e.roles) ? t : [];
        }),
        g = (0, a.e7)([s.Z], () => s.Z.isViewingRoles(i));
    return r.useMemo(() => {
        let { computedPermissions: r, hasBaseAccessPermissions: i, hasSendMessagesPermission: a } = b(n, e instanceof c.Sf && e.isThread());
        return {
            context: n,
            userId: f,
            roleIds: m,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, h, o)
        };
    }, [t, n, g, m, f, h, o, e]);
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
    let a = f.Z.computePermissions(e);
    return (
        i.e$(a, h.Plq.ADMINISTRATOR) ? ((n = !0), (r = !0)) : e instanceof c.Sf ? ((n = i.e$(a, h.Plq.VIEW_CHANNEL) && i.e$(a, h.Plq.USE_APPLICATION_COMMANDS)), (r = t ? i.e$(a, h.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(a, h.Plq.SEND_MESSAGES))) : ((n = i.e$(a, h.Plq.VIEW_CHANNEL)), (r = !0)),
        {
            computedPermissions: a,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: r
        }
    );
}
function y(e, t) {
    return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === h.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t ? o.D.BOT_DM : o.D.PRIVATE_CHANNEL) : o.D.GUILD;
}
function O(e) {
    return e instanceof c.Sf ? e.guild_id : e.id;
}
