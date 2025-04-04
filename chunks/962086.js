n.d(t, {
    Zm: () => I,
    aq: () => R,
    iD: () => O,
    mL: () => S,
    og: () => C,
    zS: () => A
}),
    n(47120);
var r = n(570140),
    i = n(367907),
    o = n(703656),
    a = n(592125),
    s = n(984933),
    l = n(271383),
    c = n(430824),
    u = n(496675),
    d = n(944486),
    f = n(9156),
    _ = n(626135),
    p = n(160404),
    h = n(225675),
    m = n(981631),
    g = n(176505);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    _.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, v(b({ num_roles: Object.keys(t.roles).length }, (0, i.hH)(e)), { is_viewing_as_member: t.type === h.z.NEW_MEMBER })),
        r.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: t
        }),
        T(e);
}
function I(e, t) {
    let n = p.Z.getData(e);
    null != n &&
        n.type === t.type &&
        (_.default.track(m.rMx.VIEW_AS_ROLES_SELECTED, v(b({ num_roles: Object.keys(n.roles).length }, (0, i.hH)(e)), { is_viewing_as_member: n.type === h.z.NEW_MEMBER })),
        r.Z.dispatch({
            type: 'IMPERSONATE_UPDATE',
            guildId: e,
            data: b({}, n, t)
        }),
        T(e));
}
function S(e) {
    r.Z.dispatch({
        type: 'IMPERSONATE_STOP',
        guildId: e
    });
}
function T(e) {
    let t = d.Z.getChannelId(e),
        n = a.Z.getChannel(t);
    if (!(null != t && (0, g.AB)(t)) && !u.Z.can(m.Plq.VIEW_CHANNEL, n)) {
        let t = s.ZP.getDefaultChannel(e);
        null != t && (0, o.uL)(m.Z5c.CHANNEL(e, t.id));
    }
}
function N(e, t) {
    let n = [...s.ZP.getSelectableChannelIds(e), ...s.ZP.getVocalChannelIds(e)],
        r = Array.from(t);
    s.ZP.addConditionalChangeListener(() => {
        let t = l.ZP.getSelfMember(e);
        if (null == t) return !1;
        if (r.some((e) => !t.roles.includes(e))) return !0;
        let i = [...s.ZP.getSelectableChannelIds(e), ...s.ZP.getVocalChannelIds(e)].filter((e) => !n.includes(e));
        return i.length > 0 && A(e, i, []), !1;
    });
}
function A(e, t, n) {
    let r = new Set(f.ZP.getOptedInChannels(e));
    t.forEach((e) => r.add(e)),
        n.forEach((e) => r.delete(e)),
        I(e, {
            type: h.z.NEW_MEMBER,
            optInChannels: r
        });
}
function C(e, t) {
    let n = c.Z.getRoles(e);
    N(e, t);
    let r = {};
    t.forEach((e) => (r[e] = n[e])),
        I(e, {
            type: h.z.NEW_MEMBER,
            roles: r
        });
}
function R(e, t) {
    I(e, b({ type: h.z.NEW_MEMBER }, t));
}
