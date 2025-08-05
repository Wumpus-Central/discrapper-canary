let r, i, a;
(n.d(t, {
    Z: () => em,
    g: () => A
}),
    n(388685),
    n(953529));
var o,
    s = n(392711),
    l = n.n(s),
    c = n(149765),
    u = n(866442),
    d = n(442837),
    f = n(570140),
    _ = n(311929),
    p = n(561654),
    h = n(606318),
    m = n(402235),
    g = n(485386),
    E = n(990492),
    b = n(823379),
    y = n(700785),
    O = n(999382),
    v = n(981631),
    I = n(141006);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            }));
    }
    return e;
}
var A = (function (e) {
    return ((e.SOLID = 'solid'), (e.GRADIENT = 'gradient'), (e.HOLOGRAPHIC = 'holographic'), e);
})({});
let N = new Set(),
    C = v.QZA.CLOSED,
    w = !1,
    R = !1,
    P = [],
    D = [],
    L = !1,
    x = new Set(),
    k = new Map(),
    j = new Map(),
    M = new Map();
function U() {
    return null == r || null == P
        ? []
        : E.ZP.calculatePositionDeltas({
              oldOrdering: g.Z.getSortedRoles(r.id),
              newOrdering: P,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1
          });
}
function G(e) {
    let { section: t } = e;
    if (null != r || t !== v.pNK.ROLES) return !1;
    B();
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((r = O.Z.getProps().guild),
        (w = !1),
        (R = !1),
        (a = void 0),
        N.clear(),
        M.clear(),
        (C = v.QZA.OPEN),
        (D = [...(P = null != r ? [...g.Z.getSortedRoles(r.id)] : [])]),
        Z(null == r ? void 0 : r.id, D),
        (L = !1),
        e &&
            (j.clear(),
            k.forEach((e, t) => {
                j.set(t, [...e]);
            })));
}
function Z(e, t) {
    t.forEach((t) => {
        let n = 'solid',
            r = (0, m.zI)(e, t);
        null != t.colors && r && (null != t.colors.tertiary_color ? (n = 'holographic') : null != t.colors.secondary_color && (n = 'gradient'));
        let i = e_();
        if (null != t.colors) {
            var a, o, s;
            i[n] = {
                primary_color: null != (a = t.colors.primary_color) ? a : v.p6O,
                secondary_color: null != (o = t.colors.secondary_color) ? o : null,
                tertiary_color: null != (s = t.colors.tertiary_color) ? s : null
            };
        }
        M.set(t.id, {
            currentStyle: n,
            styleColors: i
        });
    });
}
function F() {
    ((r = null), (D = P = []), k.clear(), N.clear(), M.clear(), j.clear(), (x = new Set()), (w = !1), (R = !1), (L = !1), (C = v.QZA.CLOSED));
}
function V(e) {
    let { roles: t } = e;
    if (null != P && t.length !== P.length) return !1;
    ((P = t.map((e) => eo(e)).filter(b.lm)), (R = !0), J());
}
function H(e) {
    let { id: t, flag: n, allow: r } = e,
        i = eo(t);
    if (null == i) return !1;
    let { permissions: a } = i;
    return et(i, { permissions: (a = r ? c.IH(a, n) : c.Od(a, n)) });
}
function Y(e) {
    let { id: t, permissions: n } = e,
        r = eo(t);
    return null != r && et(r, { permissions: n });
}
function W(e) {
    let { id: t } = e,
        n = eo(t);
    return null != n && et(n, { permissions: y.Hn });
}
function K(e) {
    let { id: t, name: n } = e,
        r = eo(t);
    return null != r && et(r, { name: n });
}
function z(e) {
    let { id: t, description: n } = e,
        r = eo(t);
    return null != r && et(r, { description: n });
}
function q(e) {
    let { id: t, color: n } = e,
        r = 0 === n ? null : (0, u.Rf)(n),
        i = eo(t);
    if (null == i) return !1;
    let a = M.get(t);
    return (
        null != a &&
        ((a.currentStyle = 'solid'),
        (a.styleColors.solid = {
            primary_color: n,
            secondary_color: null,
            tertiary_color: null
        }),
        M.set(t, S({}, a)),
        et(i, {
            color: n,
            colorString: r,
            colors: {
                primary_color: n,
                secondary_color: null,
                tertiary_color: null
            },
            colorStrings:
                null != r
                    ? {
                          primaryColor: r,
                          secondaryColor: null,
                          tertiaryColor: null
                      }
                    : null
        }))
    );
}
function $(e) {
    let { id: t, colors: n, currentStyle: r } = e,
        i = eo(t);
    if (null == i) return !1;
    let a = (0, h.DX)(n),
        o = M.get(t);
    return (
        null != o &&
        ((o.styleColors[r] = n),
        (o.currentStyle = r),
        M.set(t, S({}, o)),
        et(i, {
            color: n.primary_color,
            colors: n,
            colorString: a.primaryColor,
            colorStrings: a
        }))
    );
}
function X(e) {
    let { id: t, hoist: n, mentionable: r } = e,
        i = eo(t);
    return (
        null != i &&
        et(i, {
            hoist: n,
            mentionable: r
        })
    );
}
function Q(e) {
    let { id: t, icon: n, unicodeEmoji: r } = e,
        i = eo(t);
    return (
        null != i &&
        et(i, {
            icon: n,
            unicodeEmoji: r
        })
    );
}
let J = l().debounce(() => {
    let e = !1;
    (R && ((R = U().length > 0) || (e = !0)),
        [...N].forEach((t) => {
            l().isEqual(eo(t), es(t)) && (N.delete(t), (e = !0));
        }),
        0 === N.size && (w = !1),
        L && l().isEqual(k, j) && ((e = !0), (L = !1)),
        e && eh.emitChange());
}, 500);
function ee(e) {
    let { role: t, searchQuery: n } = e;
    if (((i = n), null != t)) {
        if (null != eo(t.id)) return void et(t, t);
        ((P = [...P, t]), J());
    }
}
function et(e, t) {
    let n = P.indexOf(e);
    if (n < 0) return !1;
    let r = S({}, e, t),
        i = [...P];
    ((i[n] = r), (P = i), (w = !0), N.add(r.id), J());
}
function en(e) {
    var t;
    let { id: n, currentStyle: r } = e,
        i = eo(n);
    if (null == i) return !1;
    let a = M.get(n);
    if (null == a) return !1;
    M.set(n, {
        currentStyle: r,
        styleColors: a.styleColors
    });
    let o = a.styleColors[r],
        s = (0, h.DX)(o);
    return et(i, {
        color: null != (t = o.primary_color) ? t : void 0,
        colors: o,
        colorString: s.primaryColor,
        colorStrings: s
    });
}
function er(e) {
    let { roleId: t, roleConnectionConfigurations: n } = e,
        r = eo(t);
    if (null == r) return !1;
    let i = k.get(r.id);
    if (l().isEqual(i, n)) return !1;
    (j.set(r.id, n), k.set(r.id, n), J());
}
function ei(e) {
    let { roleId: t, roleConnectionConfigurations: n } = e,
        r = eo(t);
    if (null == r) return !1;
    ((L = !0), x.add(r.id), j.set(r.id, n), J());
}
function ea(e) {
    let { guildId: t } = e;
    null != r && t === r.id && (r = (0, _.t8)(r, 'features', r.features.union(new Set([v.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
}
function eo(e) {
    return P.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function es(e) {
    return D.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function el(e) {
    return (x.has(e.roleId) && (x.delete(e.roleId), k.delete(e.roleId), j.delete(e.roleId), (L = !1)), ec(e));
}
function ec(e) {
    let { guildId: t } = e;
    if (null == (r = O.Z.getProps().guild) || t !== r.id || C === v.QZA.SUBMITTING) return !1;
    let n = [...g.Z.getSortedRoles(r.id)];
    (N.forEach((e) => {
        let t = eo(e),
            r = -1;
        null ==
            n.find((t, n) => {
                let { id: i } = t;
                if (i === e) return ((r = n), !0);
            }) || null == t
            ? N.delete(e)
            : (n[r] = t);
    }),
        0 === N.size && (w = !1));
    let i = new Map();
    (N.forEach((e) => {
        let t = M.get(e);
        null != t && i.set(e, t);
    }),
        M.clear(),
        Z(t, n),
        i.forEach((e, t) => {
            M.set(t, e);
        }),
        (R = !1),
        (P = [...n]));
}
function eu(e) {
    let { message: t } = e;
    ((C = v.QZA.OPEN), (a = t));
}
function ed() {
    B(!1);
}
function ef() {
    C = v.QZA.SUBMITTING;
}
function e_() {
    return {
        solid: {
            primary_color: v.p6O,
            secondary_color: null,
            tertiary_color: null
        },
        gradient: {
            primary_color: I.Eg.primary_color,
            secondary_color: I.Eg.secondary_color,
            tertiary_color: null
        },
        holographic: {
            primary_color: I.SK.primary_color,
            secondary_color: I.SK.secondary_color,
            tertiary_color: I.SK.tertiary_color
        }
    };
}
class ep extends (o = d.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, p.Z, g.Z);
    }
    hasChanges() {
        return w || R || L;
    }
    getRoleStyleData(e) {
        return M.get(e);
    }
    get errorMessage() {
        return a;
    }
    get hasSortChanges() {
        return R;
    }
    get hasRoleConfigurationChanges() {
        return L;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(N);
    }
    get editedRoleIdsForConfigurations() {
        return x;
    }
    get roles() {
        return P;
    }
    get formState() {
        return C;
    }
    getSortDeltas() {
        return U();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return eo(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return j;
    }
}
T(ep, 'displayName', 'GuildSettingsRolesStore');
let eh = new ep(
        f.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => B(),
                  GUILD_SETTINGS_INIT: G,
                  GUILD_SETTINGS_SET_SECTION: G,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: V,
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: H,
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: Y,
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: W,
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: K,
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: z,
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: q,
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: $,
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: X,
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: Q,
                  GUILD_SETTINGS_ROLE_SELECT: ee,
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: en,
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: er,
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: ei,
                  GUILD_SETTINGS_CLOSE: F,
                  GUILD_ROLE_CREATE: ec,
                  GUILD_ROLE_UPDATE: ec,
                  GUILD_ROLE_DELETE: el,
                  GUILD_SETTINGS_ROLES_SUBMITTING: ef,
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: eu,
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: ed,
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: ea
              }
    ),
    em = eh;
