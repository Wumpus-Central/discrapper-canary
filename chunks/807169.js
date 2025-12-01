n.d(t, {
    Hs: () => g,
    Vh: () => y,
    k: () => h,
    ny: () => O,
});
var r = n(473749),
    i = n(149765),
    a = n(442837),
    o = n(911969),
    s = n(160404),
    l = n(519207),
    c = n(131704),
    u = n(314897),
    d = n(592125),
    f = n(271383),
    p = n(496675),
    _ = n(594174),
    m = n(981631);
function h(e, t) {
    var n, r, i, a, o;
    let p,
        m =
            null != (p = e instanceof c.Sf && e.isThread() && null != (i = d.Z.getChannel(e.parent_id)) ? i : e)
                ? O(p)
                : void 0,
        h = (0, l.GG)(),
        g = u.default.getId(),
        y = null != (a = null == (n = _.default.getCurrentUser()) ? void 0 : n.nsfwAllowed) && a,
        v = null != m && null != (o = null == (r = f.ZP.getMember(m, g)) ? void 0 : r.roles) ? o : [],
        S = s.Z.isViewingRoles(m),
        {
            computedPermissions: I,
            hasBaseAccessPermissions: T,
            hasSendMessagesPermission: A,
        } = b(p, e instanceof c.Sf && e.isThread());
    return {
        context: p,
        userId: g,
        roleIds: v,
        isImpersonating: S,
        commandTypes: t,
        computedPermissions: I,
        hasBaseAccessPermissions: T,
        hasSendMessagesPermission: A,
        allowNsfw: E(p, y, h),
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
        o = (0, l.Xg)(),
        p = (0, a.e7)([u.default], () => u.default.getId()),
        m = (0, a.e7)([_.default], () => {
            var e, t;
            return null != (t = null == (e = _.default.getCurrentUser()) ? void 0 : e.nsfwAllowed) && t;
        }),
        h = (0, a.Wu)([f.ZP], () => {
            var e, t;
            return null != i && null != (t = null == (e = f.ZP.getMember(i, p)) ? void 0 : e.roles) ? t : [];
        }),
        g = (0, a.e7)([s.Z], () => s.Z.isViewingRoles(i));
    return r.useMemo(() => {
        let {
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
        } = b(n, e instanceof c.Sf && e.isThread());
        return {
            context: n,
            userId: p,
            roleIds: h,
            commandTypes: t,
            isImpersonating: g,
            computedPermissions: r,
            hasBaseAccessPermissions: i,
            hasSendMessagesPermission: a,
            allowNsfw: E(n, m, o),
        };
    }, [t, n, g, h, p, m, o, e]);
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
            hasSendMessagesPermission: !0,
        };
    let a = p.Z.computePermissions(e);
    return (
        i.e$(a, m.Plq.ADMINISTRATOR)
            ? ((n = !0), (r = !0))
            : e instanceof c.Sf
              ? ((n = i.e$(a, m.Plq.VIEW_CHANNEL) && i.e$(a, m.Plq.USE_APPLICATION_COMMANDS)),
                (r = t ? i.e$(a, m.Plq.SEND_MESSAGES_IN_THREADS) : i.e$(a, m.Plq.SEND_MESSAGES)))
              : ((n = i.e$(a, m.Plq.VIEW_CHANNEL)), (r = !0)),
        {
            computedPermissions: a,
            hasBaseAccessPermissions: n,
            hasSendMessagesPermission: r,
        }
    );
}
function y(e, t) {
    return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null
        ? (null == e ? void 0 : e.type) === m.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === t
            ? o.D.BOT_DM
            : o.D.PRIVATE_CHANNEL
        : o.D.GUILD;
}
function O(e) {
    return e instanceof c.Sf ? e.guild_id : e.id;
}
