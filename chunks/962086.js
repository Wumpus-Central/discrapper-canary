n.d(t, {
    Zm: () => S,
    aq: () => P,
    iD: () => v,
    mL: () => I,
    og: () => N,
    zS: () => A,
}),
    n(388685);
var r = n(570140),
    i = n(367907),
    a = n(703656),
    o = n(592125),
    s = n(984933),
    l = n(271383),
    c = n(485386),
    u = n(496675),
    d = n(944486),
    f = n(9156),
    p = n(626135),
    _ = n(160404),
    m = n(225675),
    h = n(981631),
    g = n(176505);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
function O(e, t) {
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
function v(e, t) {
    p.default.track(
        h.rMx.VIEW_AS_ROLES_SELECTED,
        O(b({ num_roles: Object.keys(t.roles).length }, (0, i.hH)(e)), {
            is_viewing_as_member: t.type === m.z.NEW_MEMBER,
        }),
    ),
        r.Z.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: t,
        }),
        T(e);
}
function S(e, t) {
    let n = _.Z.getData(e);
    null != n &&
        n.type === t.type &&
        (p.default.track(
            h.rMx.VIEW_AS_ROLES_SELECTED,
            O(b({ num_roles: Object.keys(n.roles).length }, (0, i.hH)(e)), {
                is_viewing_as_member: n.type === m.z.NEW_MEMBER,
            }),
        ),
        r.Z.dispatch({
            type: "IMPERSONATE_UPDATE",
            guildId: e,
            data: b({}, n, t),
        }),
        T(e));
}
function I(e) {
    r.Z.dispatch({
        type: "IMPERSONATE_STOP",
        guildId: e,
    });
}
function T(e) {
    let t = d.Z.getChannelId(e),
        n = o.Z.getChannel(t);
    if (!(null != t && (0, g.AB)(t)) && !u.Z.can(h.Plq.VIEW_CHANNEL, n)) {
        let t = s.ZP.getDefaultChannel(e);
        null != t && (0, a.uL)(h.Z5c.CHANNEL(e, t.id));
    }
}
function C(e, t) {
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
        S(e, {
            type: m.z.NEW_MEMBER,
            optInChannels: r,
        });
}
function N(e, t) {
    C(e, t);
    let n = {};
    for (let r of c.Z.getManyRoles(e, t)) n[r.id] = r;
    S(e, {
        type: m.z.NEW_MEMBER,
        roles: n,
    });
}
function P(e, t) {
    S(e, b({ type: m.z.NEW_MEMBER }, t));
}
