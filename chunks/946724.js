let r, i, o;
n.d(t, {
    Z: () => em,
    g: () => A,
}),
    n(388685),
    n(953529);
var a,
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
var A = (function (e) {
    return (e.SOLID = "solid"), (e.GRADIENT = "gradient"), (e.HOLOGRAPHIC = "holographic"), e;
})({});
let N = new Set(),
    C = v.QZA.CLOSED,
    R = !1,
    P = !1,
    w = [],
    D = [],
    L = !1,
    x = new Set(),
    M = new Map(),
    j = new Map(),
    k = new Map();
function U() {
    return null == r || null == w
        ? []
        : E.ZP.calculatePositionDeltas({
              oldOrdering: g.Z.getSortedRoles(r.id),
              newOrdering: w,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function G(e) {
    let { section: t } = e;
    if (null != r || t !== v.pNK.ROLES) return !1;
    B();
}
function B() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = O.Z.getProps().guild),
        (R = !1),
        (P = !1),
        (o = void 0),
        N.clear(),
        k.clear(),
        (C = v.QZA.OPEN),
        (D = [...(w = null != r ? [...g.Z.getSortedRoles(r.id)] : [])]),
        Z(null == r ? void 0 : r.id, D),
        (L = !1),
        e &&
            (j.clear(),
            M.forEach((e, t) => {
                j.set(t, [...e]);
            }));
}
function Z(e, t) {
    t.forEach((t) => {
        let n = "solid",
            r = (0, m.zI)(e, t);
        null != t.colors &&
            r &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let i = e_();
        if (null != t.colors) {
            var o, a, s;
            i[n] = {
                primary_color: null != (o = t.colors.primary_color) ? o : v.p6O,
                secondary_color: null != (a = t.colors.secondary_color) ? a : null,
                tertiary_color: null != (s = t.colors.tertiary_color) ? s : null,
            };
        }
        k.set(t.id, {
            currentStyle: n,
            styleColors: i,
        });
    });
}
function F() {
    (r = null),
        (D = w = []),
        M.clear(),
        N.clear(),
        k.clear(),
        j.clear(),
        (x = new Set()),
        (R = !1),
        (P = !1),
        (L = !1),
        (C = v.QZA.CLOSED);
}
function V(e) {
    let { roles: t } = e;
    if (null != w && t.length !== w.length) return !1;
    (w = t.map((e) => ea(e)).filter(b.lm)), (P = !0), $();
}
function H(e) {
    let { id: t, flag: n, allow: r } = e,
        i = ea(t);
    if (null == i) return !1;
    let { permissions: o } = i;
    return et(i, { permissions: (o = r ? c.IH(o, n) : c.Od(o, n)) });
}
function Y(e) {
    let { id: t, permissions: n } = e,
        r = ea(t);
    return null != r && et(r, { permissions: n });
}
function W(e) {
    let { id: t } = e,
        n = ea(t);
    return null != n && et(n, { permissions: y.Hn });
}
function K(e) {
    let { id: t, name: n } = e,
        r = ea(t);
    return null != r && et(r, { name: n });
}
function z(e) {
    let { id: t, description: n } = e,
        r = ea(t);
    return null != r && et(r, { description: n });
}
function q(e) {
    let { id: t, color: n } = e,
        r = 0 === n ? null : (0, u.Rf)(n),
        i = ea(t);
    if (null == i) return !1;
    let o = k.get(t);
    return (
        null != o &&
        ((o.currentStyle = "solid"),
        (o.styleColors.solid = {
            primary_color: n,
            secondary_color: null,
            tertiary_color: null,
        }),
        k.set(t, S({}, o)),
        et(i, {
            color: n,
            colorString: r,
            colors: {
                primary_color: n,
                secondary_color: null,
                tertiary_color: null,
            },
            colorStrings:
                null != r
                    ? {
                          primaryColor: r,
                          secondaryColor: null,
                          tertiaryColor: null,
                      }
                    : null,
        }))
    );
}
function X(e) {
    let { id: t, colors: n, currentStyle: r } = e,
        i = ea(t);
    if (null == i) return !1;
    let o = (0, h.DX)(n),
        a = k.get(t);
    return (
        null != a &&
        ((a.styleColors[r] = n),
        (a.currentStyle = r),
        k.set(t, S({}, a)),
        et(i, {
            color: n.primary_color,
            colors: n,
            colorString: o.primaryColor,
            colorStrings: o,
        }))
    );
}
function Q(e) {
    let { id: t, hoist: n, mentionable: r } = e,
        i = ea(t);
    return (
        null != i &&
        et(i, {
            hoist: n,
            mentionable: r,
        })
    );
}
function J(e) {
    let { id: t, icon: n, unicodeEmoji: r } = e,
        i = ea(t);
    return (
        null != i &&
        et(i, {
            icon: n,
            unicodeEmoji: r,
        })
    );
}
let $ = l().debounce(() => {
    let e = !1;
    P && ((P = U().length > 0) || (e = !0)),
        [...N].forEach((t) => {
            l().isEqual(ea(t), es(t)) && (N.delete(t), (e = !0));
        }),
        0 === N.size && (R = !1),
        L && l().isEqual(M, j) && ((e = !0), (L = !1)),
        e && eh.emitChange();
}, 500);
function ee(e) {
    let { role: t, searchQuery: n } = e;
    if (((i = n), null != t)) {
        if (null != ea(t.id)) return void et(t, t);
        (w = [...w, t]), $();
    }
}
function et(e, t) {
    let n = w.indexOf(e);
    if (n < 0) return !1;
    let r = S({}, e, t),
        i = [...w];
    (i[n] = r), (w = i), (R = !0), N.add(r.id), $();
}
function en(e) {
    var t;
    let { id: n, currentStyle: r } = e,
        i = ea(n);
    if (null == i) return !1;
    let o = k.get(n);
    if (null == o) return !1;
    k.set(n, {
        currentStyle: r,
        styleColors: o.styleColors,
    });
    let a = o.styleColors[r],
        s = (0, h.DX)(a);
    return et(i, {
        color: null != (t = a.primary_color) ? t : void 0,
        colors: a,
        colorString: s.primaryColor,
        colorStrings: s,
    });
}
function er(e) {
    let { roleId: t, roleConnectionConfigurations: n } = e,
        r = ea(t);
    if (null == r) return !1;
    let i = M.get(r.id);
    if (l().isEqual(i, n)) return !1;
    j.set(r.id, n), M.set(r.id, n), $();
}
function ei(e) {
    let { roleId: t, roleConnectionConfigurations: n } = e,
        r = ea(t);
    if (null == r) return !1;
    (L = !0), x.add(r.id), j.set(r.id, n), $();
}
function eo(e) {
    let { guildId: t } = e;
    null != r &&
        t === r.id &&
        (r = (0, _.t8)(r, "features", r.features.union(new Set([v.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
}
function ea(e) {
    return w.find((t) => {
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
    return x.has(e.roleId) && (x.delete(e.roleId), M.delete(e.roleId), j.delete(e.roleId), (L = !1)), ec(e);
}
function ec(e) {
    let { guildId: t } = e;
    if (null == (r = O.Z.getProps().guild) || t !== r.id || C === v.QZA.SUBMITTING) return !1;
    let n = [...g.Z.getSortedRoles(r.id)];
    N.forEach((e) => {
        let t = ea(e),
            r = -1;
        null ==
            n.find((t, n) => {
                let { id: i } = t;
                if (i === e) return (r = n), !0;
            }) || null == t
            ? N.delete(e)
            : (n[r] = t);
    }),
        0 === N.size && (R = !1);
    let i = new Map();
    N.forEach((e) => {
        let t = k.get(e);
        null != t && i.set(e, t);
    }),
        k.clear(),
        Z(t, n),
        i.forEach((e, t) => {
            k.set(t, e);
        }),
        (P = !1),
        (w = [...n]);
}
function eu(e) {
    let { message: t } = e;
    (C = v.QZA.OPEN), (o = t);
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
            tertiary_color: null,
        },
        gradient: {
            primary_color: I.Eg.primary_color,
            secondary_color: I.Eg.secondary_color,
            tertiary_color: null,
        },
        holographic: {
            primary_color: I.SK.primary_color,
            secondary_color: I.SK.secondary_color,
            tertiary_color: I.SK.tertiary_color,
        },
    };
}
class ep extends (a = d.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, p.Z, g.Z);
    }
    hasChanges() {
        return R || P || L;
    }
    getRoleStyleData(e) {
        return k.get(e);
    }
    get errorMessage() {
        return o;
    }
    get hasSortChanges() {
        return P;
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
        return w;
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
        return ea(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return j;
    }
}
T(ep, "displayName", "GuildSettingsRolesStore");
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
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: X,
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: Q,
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: J,
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
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: eo,
              },
    ),
    em = eh;
