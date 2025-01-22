r.d(n, {
    Zm: function () {
        return b;
    },
    aq: function () {
        return N;
    },
    iD: function () {
        return y;
    },
    mL: function () {
        return I;
    },
    og: function () {
        return C;
    },
    zS: function () {
        return A;
    }
});
var i = r(47120);
var a = r(570140),
    o = r(367907),
    s = r(703656),
    l = r(592125),
    u = r(984933),
    c = r(271383),
    d = r(430824),
    f = r(496675),
    p = r(944486),
    h = r(9156),
    _ = r(626135),
    m = r(160404),
    g = r(225675),
    E = r(981631),
    v = r(176505);
function y(e, n) {
    _.default.track(E.rMx.VIEW_AS_ROLES_SELECTED, {
        num_roles: Object.keys(n.roles).length,
        ...(0, o.hH)(e),
        is_viewing_as_member: n.type === g.z.NEW_MEMBER
    }),
        a.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: n
        }),
        T(e);
}
function b(e, n) {
    let r = m.Z.getData(e);
    null != r &&
        r.type === n.type &&
        (_.default.track(E.rMx.VIEW_AS_ROLES_SELECTED, {
            num_roles: Object.keys(r.roles).length,
            ...(0, o.hH)(e),
            is_viewing_as_member: r.type === g.z.NEW_MEMBER
        }),
        a.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: {
                ...r,
                ...n
            }
        }),
        T(e));
}
function I(e) {
    a.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function T(e) {
    let n = p.Z.getChannelId(e),
        r = l.Z.getChannel(n);
    if (!(null != n && (0, v.AB)(n)) && !f.Z.can(E.Plq.VIEW_CHANNEL, r)) {
        let n = u.ZP.getDefaultChannel(e);
        null != n && (0, s.uL)(E.Z5c.CHANNEL(e, n.id));
    }
}
function S(e, n) {
    let r = [...u.ZP.getSelectableChannelIds(e), ...u.ZP.getVocalChannelIds(e)],
        i = Array.from(n);
    u.ZP.addConditionalChangeListener(() => {
        let n = c.ZP.getSelfMember(e);
        if (null == n) return !1;
        if (i.some((e) => !n.roles.includes(e))) return !0;
        let a = [...u.ZP.getSelectableChannelIds(e), ...u.ZP.getVocalChannelIds(e)].filter((e) => !r.includes(e));
        return a.length > 0 && A(e, a, []), !1;
    });
}
function A(e, n, r) {
    let i = new Set(h.ZP.getOptedInChannels(e));
    n.forEach((e) => i.add(e)),
        r.forEach((e) => i.delete(e)),
        b(e, {
            type: g.z.NEW_MEMBER,
            optInChannels: i
        });
}
function C(e, n) {
    let r = d.Z.getRoles(e);
    S(e, n);
    let i = {};
    n.forEach((e) => (i[e] = r[e])),
        b(e, {
            type: g.z.NEW_MEMBER,
            roles: i
        });
}
function N(e, n) {
    b(e, {
        type: g.z.NEW_MEMBER,
        ...n
    });
}
