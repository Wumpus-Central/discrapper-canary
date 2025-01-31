n.d(t, {
    Zm: () => v,
    aq: () => A,
    iD: () => E,
    mL: () => y,
    og: () => S,
    zS: () => T
}),
    n(47120);
var i = n(570140),
    r = n(367907),
    a = n(703656),
    s = n(592125),
    o = n(984933),
    l = n(271383),
    u = n(430824),
    c = n(496675),
    d = n(944486),
    f = n(9156),
    _ = n(626135),
    p = n(160404),
    h = n(225675),
    m = n(981631),
    g = n(176505);
function E(e, t) {
    _.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(t.roles).length,
        ...(0, r.hH)(e),
        is_viewing_as_member: t.type === h.z.NEW_MEMBER
    }),
        i.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: t
        }),
        I(e);
}
function v(e, t) {
    let n = p.Z.getData(e);
    null != n &&
        n.type === t.type &&
        (_.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(n.roles).length,
            ...(0, r.hH)(e),
            is_viewing_as_member: n.type === h.z.NEW_MEMBER
        }),
        i.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: {
                ...n,
                ...t
            }
        }),
        I(e));
}
function y(e) {
    i.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function I(e) {
    let t = d.Z.getChannelId(e),
        n = s.Z.getChannel(t);
    if (!(null != t && (0, g.AB)(t)) && !c.Z.can(m.Plq.VIEW_CHANNEL, n)) {
        let t = o.ZP.getDefaultChannel(e);
        null != t && (0, a.uL)(m.Z5c.CHANNEL(e, t.id));
    }
}
function b(e, t) {
    let n = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)],
        i = Array.from(t);
    o.ZP.addConditionalChangeListener(() => {
        let t = l.ZP.getSelfMember(e);
        if (null == t) return !1;
        if (i.some((e) => !t.roles.includes(e))) return !0;
        let r = [...o.ZP.getSelectableChannelIds(e), ...o.ZP.getVocalChannelIds(e)].filter((e) => !n.includes(e));
        return r.length > 0 && T(e, r, []), !1;
    });
}
function T(e, t, n) {
    let i = new Set(f.ZP.getOptedInChannels(e));
    t.forEach((e) => i.add(e)),
        n.forEach((e) => i.delete(e)),
        v(e, {
            type: h.z.NEW_MEMBER,
            optInChannels: i
        });
}
function S(e, t) {
    let n = u.Z.getRoles(e);
    b(e, t);
    let i = {};
    t.forEach((e) => (i[e] = n[e])),
        v(e, {
            type: h.z.NEW_MEMBER,
            roles: i
        });
}
function A(e, t) {
    v(e, {
        type: h.z.NEW_MEMBER,
        ...t
    });
}
