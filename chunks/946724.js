let r, i, l;
n.d(t, {
    Z: () => X,
    g: () => S,
}),
    n(388685),
    n(953529);
var a,
    s,
    o = n(392711),
    c = n.n(o),
    d = n(149765),
    u = n(866442),
    m = n(442837),
    g = n(570140),
    p = n(311929),
    f = n(561654),
    h = n(606318),
    b = n(402235),
    x = n(485386),
    j = n(430824),
    v = n(990492),
    _ = n(823379),
    O = n(700785),
    y = n(999382),
    C = n(981631),
    N = n(141006);
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
function I(e) {
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
var S = (((s = {}).SOLID = "solid"), (s.GRADIENT = "gradient"), (s.HOLOGRAPHIC = "holographic"), s);
let T = new Set(),
    P = C.QZA.CLOSED,
    w = !1,
    R = !1,
    Z = [],
    D = [],
    A = !1,
    L = new Set(),
    k = new Map(),
    M = new Map(),
    G = new Map();
function U() {
    return null == r || null == Z
        ? []
        : v.ZP.calculatePositionDeltas({
              oldOrdering: x.Z.getSortedRoles(r.id),
              newOrdering: Z,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function B(e) {
    let { section: t } = e;
    if (null != r || t !== C.pNK.ROLES) return !1;
    F();
}
function F() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = y.Z.getProps().guild),
        (w = !1),
        (R = !1),
        (l = void 0),
        T.clear(),
        G.clear(),
        (P = C.QZA.OPEN),
        (D = [...(Z = null != r ? [...x.Z.getSortedRoles(r.id)] : [])]),
        H(null == r ? void 0 : r.id, D),
        (A = !1),
        e &&
            (M.clear(),
            k.forEach((e, t) => {
                M.set(t, [...e]);
            }));
}
function H(e, t) {
    t.forEach((t) => {
        let n = "solid",
            r = (0, b.zI)(e, t);
        null != t.colors &&
            r &&
            (null != t.colors.tertiary_color
                ? (n = "holographic")
                : null != t.colors.secondary_color && (n = "gradient"));
        let i = {
            solid: {
                primary_color: C.p6O,
                secondary_color: null,
                tertiary_color: null,
            },
            gradient: {
                primary_color: N.Eg.primary_color,
                secondary_color: N.Eg.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: N.SK.primary_color,
                secondary_color: N.SK.secondary_color,
                tertiary_color: N.SK.tertiary_color,
            },
        };
        if (null != t.colors) {
            var l, a, s;
            i[n] = {
                primary_color: null != (l = t.colors.primary_color) ? l : C.p6O,
                secondary_color: null != (a = t.colors.secondary_color) ? a : null,
                tertiary_color: null != (s = t.colors.tertiary_color) ? s : null,
            };
        }
        G.set(t.id, {
            currentStyle: n,
            styleColors: i,
        });
    });
}
let z = c().debounce(() => {
    let e = !1;
    R && ((R = U().length > 0) || (e = !0)),
        [...T].forEach((t) => {
            var n;
            c().isEqual(
                W(t),
                ((n = t),
                D.find((e) => {
                    let { id: t } = e;
                    return t === n;
                })),
            ) && (T.delete(t), (e = !0));
        }),
        0 === T.size && (w = !1),
        A && c().isEqual(k, M) && ((e = !0), (A = !1)),
        e && q.emitChange();
}, 500);
function V(e, t) {
    let n = Z.indexOf(e);
    if (n < 0) return !1;
    let r = I({}, e, t),
        i = [...Z];
    (i[n] = r), (Z = i), (w = !0), T.add(r.id), z();
}
function W(e) {
    return Z.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function K(e) {
    let { guildId: t } = e;
    if (null == (r = y.Z.getProps().guild) || t !== r.id || P === C.QZA.SUBMITTING) return !1;
    let n = [...x.Z.getSortedRoles(r.id)];
    T.forEach((e) => {
        let t = W(e),
            r = -1;
        null ==
            n.find((t, n) => {
                let { id: i } = t;
                if (i === e) return (r = n), !0;
            }) || null == t
            ? T.delete(e)
            : (n[r] = t);
    }),
        0 === T.size && (w = !1);
    let i = new Map();
    T.forEach((e) => {
        let t = G.get(e);
        null != t && i.set(e, t);
    }),
        G.clear(),
        H(t, n),
        i.forEach((e, t) => {
            G.set(t, e);
        }),
        (R = !1),
        (Z = [...n]);
}
class Y extends (a = m.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, y.Z, f.Z, x.Z);
    }
    hasChanges() {
        return w || R || A;
    }
    getRoleStyleData(e) {
        return G.get(e);
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return R;
    }
    get hasRoleConfigurationChanges() {
        return A;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(T);
    }
    get editedRoleIdsForConfigurations() {
        return L;
    }
    get roles() {
        return Z;
    }
    get formState() {
        return P;
    }
    getSortDeltas() {
        return U();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return W(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return M;
    }
}
E(Y, "displayName", "GuildSettingsRolesStore");
let q = new Y(
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => F(),
                  GUILD_SETTINGS_INIT: B,
                  GUILD_SETTINGS_SET_SECTION: B,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != Z && t.length !== Z.length) return !1;
                      (Z = t.map((e) => W(e)).filter(_.lm)), (R = !0), z();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = W(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return V(i, { permissions: (l = r ? d.IH(l, n) : d.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = W(t);
                      return null != r && V(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = W(t);
                      return null != n && V(n, { permissions: O.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = W(t);
                      return null != r && V(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = W(t);
                      return null != r && V(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = W(t);
                      if (null == i) return !1;
                      let l = G.get(t);
                      return (
                          null != l &&
                          ((l.currentStyle = "solid"),
                          (l.styleColors.solid = {
                              primary_color: n,
                              secondary_color: null,
                              tertiary_color: null,
                          }),
                          G.set(t, I({}, l)),
                          V(i, {
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
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: n, currentStyle: r } = e,
                          i = W(t);
                      if (null == i) return !1;
                      let l = (0, h.DX)(n, i.guildId),
                          a = G.get(t);
                      return (
                          null != a &&
                          ((a.styleColors[r] = n),
                          (a.currentStyle = r),
                          G.set(t, I({}, a)),
                          V(i, {
                              color: n.primary_color,
                              colors: n,
                              colorString: l.primaryColor,
                              colorStrings: l,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          V(i, {
                              hoist: n,
                              mentionable: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          V(i, {
                              icon: n,
                              unicodeEmoji: r,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != W(t.id)) return void V(t, t);
                          (Z = [...Z, t]), z();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = W(n);
                      if (null == i) return !1;
                      let l = G.get(n);
                      if (null == l) return !1;
                      G.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors,
                      });
                      let a = l.styleColors[r],
                          s = (0, h.DX)(a, i.guildId);
                      return V(i, {
                          color: null != (t = a.primary_color) ? t : void 0,
                          colors: a,
                          colorString: s.primaryColor,
                          colorStrings: s,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      let i = k.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      M.set(r.id, n), k.set(r.id, n), z();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      (A = !0), L.add(r.id), M.set(r.id, n), z();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null),
                          (D = Z = []),
                          k.clear(),
                          T.clear(),
                          G.clear(),
                          M.clear(),
                          (L = new Set()),
                          (w = !1),
                          (R = !1),
                          (A = !1),
                          (P = C.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: K,
                  GUILD_ROLE_UPDATE: K,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          L.has(e.roleId) && (L.delete(e.roleId), k.delete(e.roleId), M.delete(e.roleId), (A = !1)),
                          K(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      P = C.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (P = C.QZA.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      F(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      null != r &&
                          t === r.id &&
                          (r = (0, p.t8)(
                              r,
                              "features",
                              r.features.union(new Set([C.oNc.PIN_PERMISSION_MIGRATION_COMPLETE])),
                          ));
                  },
              },
    ),
    X = q;
