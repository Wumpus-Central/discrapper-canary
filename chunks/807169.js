r.d(n, {
    Hs: function () {
        return E;
    },
    Vh: function () {
        return b;
    },
    k: function () {
        return g;
    },
    ny: function () {
        return I;
    }
});
var i = r(192379),
    a = r(149765),
    o = r(442837),
    s = r(911969),
    l = r(160404),
    u = r(695346),
    c = r(131704),
    d = r(314897),
    f = r(592125),
    p = r(271383),
    h = r(496675),
    _ = r(594174),
    m = r(981631);
function g(e, n) {
    var r, i, a, o, s;
    let h;
    let m = null != (h = e instanceof c.Sf && e.isThread() ? (null !== (a = f.Z.getChannel(e.parent_id)) && void 0 !== a ? a : e) : e) ? I(h) : void 0,
        g = u.xM.getSetting(),
        E = d.default.getId(),
        b = null !== (o = null === (r = _.default.getCurrentUser()) || void 0 === r ? void 0 : r.nsfwAllowed) && void 0 !== o && o,
        T = null != m && null !== (s = null === (i = p.ZP.getMember(m, E)) || void 0 === i ? void 0 : i.roles) && void 0 !== s ? s : [],
        S = l.Z.isViewingRoles(m),
        { computedPermissions: A, hasBaseAccessPermissions: C, hasSendMessagesPermission: N } = y(h, e instanceof c.Sf && e.isThread());
    return {
        context: h,
        userId: E,
        roleIds: T,
        isImpersonating: S,
        commandTypes: n,
        computedPermissions: A,
        hasBaseAccessPermissions: C,
        hasSendMessagesPermission: N,
        allowNsfw: v(h, b, g)
    };
}
function E(e, n) {
    let r = i.useMemo(() => {
            if (e instanceof c.Sf && e.isThread()) {
                var n;
                return null !== (n = f.Z.getChannel(e.parent_id)) && void 0 !== n ? n : e;
            }
            return e;
        }, [e]),
        a = null != r ? I(r) : void 0,
        s = u.xM.useSetting(),
        h = (0, o.e7)([d.default], () => d.default.getId()),
        m = (0, o.e7)([_.default], () => {
            var e, n;
            return null !== (n = null === (e = _.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) && void 0 !== n && n;
        }),
        g = (0, o.Wu)([p.ZP], () => {
            var e, n;
            return null != a && null !== (n = null === (e = p.ZP.getMember(a, h)) || void 0 === e ? void 0 : e.roles) && void 0 !== n ? n : [];
        }),
        E = (0, o.e7)([l.Z], () => l.Z.isViewingRoles(a));
    return i.useMemo(() => {
        let { computedPermissions: i, hasBaseAccessPermissions: a, hasSendMessagesPermission: o } = y(r, e instanceof c.Sf && e.isThread());
        return {
            context: r,
            userId: h,
            roleIds: g,
            commandTypes: n,
            isImpersonating: E,
            computedPermissions: i,
            hasBaseAccessPermissions: a,
            hasSendMessagesPermission: o,
            allowNsfw: v(r, m, s)
        };
    }, [n, r, E, g, h, m, s, e]);
}
function v(e, n, r) {
    return !!n && (!(e instanceof c.Sf) || (null != e.guild_id ? e.nsfw : r));
}
function y(e, n) {
    let r, i;
    if ((e instanceof c.Sf && e.isPrivate()) || null == e)
        return {
            computedPermissions: a.vB(0),
            hasBaseAccessPermissions: !0,
            hasSendMessagesPermission: !0
        };
    let o = h.Z.computePermissions(e);
    return (
        a.e$(o, m.Plq.ADMINISTRATOR) ? ((r = !0), (i = !0)) : e instanceof c.Sf ? ((r = a.e$(o, m.Plq.VIEW_CHANNEL) && a.e$(o, m.Plq.USE_APPLICATION_COMMANDS)), (i = n ? a.e$(o, m.Plq.SEND_MESSAGES_IN_THREADS) : a.e$(o, m.Plq.SEND_MESSAGES))) : ((r = a.e$(o, m.Plq.VIEW_CHANNEL)), (i = !0)),
        {
            computedPermissions: o,
            hasBaseAccessPermissions: r,
            hasSendMessagesPermission: i
        }
    );
}
function b(e, n) {
    return e instanceof c.Sf && (null == e ? void 0 : e.guild_id) == null ? ((null == e ? void 0 : e.type) === m.d4z.DM && (null == e ? void 0 : e.getRecipientId()) === n ? s.D.BOT_DM : s.D.PRIVATE_CHANNEL) : s.D.GUILD;
}
function I(e) {
    return e instanceof c.Sf ? e.guild_id : e.id;
}
