let t, n, o;
l.d(r, {
    Z: () => z,
    g: () => D,
}),
    l(388685),
    l(953529);
var i,
    u,
    a = l(392711),
    _ = l.n(a),
    c = l(149765),
    E = l(866442),
    S = l(442837),
    s = l(570140),
    d = l(311929),
    f = l(561654),
    I = l(606318),
    T = l(402235),
    O = l(485386),
    N = l(990492),
    G = l(823379),
    g = l(700785),
    R = l(999382),
    L = l(981631),
    y = l(141006);
function A(e, r, l) {
    return (
        r in e
            ? Object.defineProperty(e, r, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[r] = l),
        e
    );
}
function C(e) {
    for (var r = 1; r < arguments.length; r++) {
        var l = null != arguments[r] ? arguments[r] : {},
            t = Object.keys(l);
        "function" == typeof Object.getOwnPropertySymbols &&
            (t = t.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                }),
            )),
            t.forEach(function (r) {
                A(e, r, l[r]);
            });
    }
    return e;
}
var D = (((u = {}).SOLID = "solid"), (u.GRADIENT = "gradient"), (u.HOLOGRAPHIC = "holographic"), u);
let P = new Set(),
    p = L.QZA.CLOSED,
    m = !1,
    U = !1,
    M = [],
    h = [],
    b = !1,
    w = new Set(),
    x = new Map(),
    Z = new Map(),
    v = new Map();
function q() {
    return null == t || null == M
        ? []
        : N.ZP.calculatePositionDeltas({
              oldOrdering: O.Z.getSortedRoles(t.id),
              newOrdering: M,
              idGetter: (e) => e.id,
              existingPositionGetter: (e) => e.position,
              ascending: !1,
          });
}
function F(e) {
    let { section: r } = e;
    if (null != t || r !== L.pNK.ROLES) return !1;
    H();
}
function H() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (t = R.Z.getProps().guild),
        (m = !1),
        (U = !1),
        (o = void 0),
        P.clear(),
        v.clear(),
        (p = L.QZA.OPEN),
        (h = [...(M = null != t ? [...O.Z.getSortedRoles(t.id)] : [])]),
        B(null == t ? void 0 : t.id, h),
        (b = !1),
        e &&
            (Z.clear(),
            x.forEach((e, r) => {
                Z.set(r, [...e]);
            }));
}
function B(e, r) {
    r.forEach((r) => {
        let l = "solid",
            t = (0, T.zI)(e, r);
        null != r.colors &&
            t &&
            (null != r.colors.tertiary_color
                ? (l = "holographic")
                : null != r.colors.secondary_color && (l = "gradient"));
        let n = {
            solid: {
                primary_color: L.p6O,
                secondary_color: null,
                tertiary_color: null,
            },
            gradient: {
                primary_color: y.Eg.primary_color,
                secondary_color: y.Eg.secondary_color,
                tertiary_color: null,
            },
            holographic: {
                primary_color: y.SK.primary_color,
                secondary_color: y.SK.secondary_color,
                tertiary_color: y.SK.tertiary_color,
            },
        };
        if (null != r.colors) {
            var o, i, u;
            n[l] = {
                primary_color: null != (o = r.colors.primary_color) ? o : L.p6O,
                secondary_color: null != (i = r.colors.secondary_color) ? i : null,
                tertiary_color: null != (u = r.colors.tertiary_color) ? u : null,
            };
        }
        v.set(r.id, {
            currentStyle: l,
            styleColors: n,
        });
    });
}
let K = _().debounce(() => {
    let e = !1;
    U && ((U = q().length > 0) || (e = !0)),
        [...P].forEach((r) => {
            var l;
            _().isEqual(
                j(r),
                ((l = r),
                h.find((e) => {
                    let { id: r } = e;
                    return r === l;
                })),
            ) && (P.delete(r), (e = !0));
        }),
        0 === P.size && (m = !1),
        b && _().isEqual(x, Z) && ((e = !0), (b = !1)),
        e && k.emitChange();
}, 500);
function Q(e, r) {
    let l = M.indexOf(e);
    if (l < 0) return !1;
    let t = C({}, e, r),
        n = [...M];
    (n[l] = t), (M = n), (m = !0), P.add(t.id), K();
}
function j(e) {
    return M.find((r) => {
        let { id: l } = r;
        return l === e;
    });
}
function V(e) {
    let { guildId: r } = e;
    if (null == (t = R.Z.getProps().guild) || r !== t.id || p === L.QZA.SUBMITTING) return !1;
    let l = [...O.Z.getSortedRoles(t.id)];
    P.forEach((e) => {
        let r = j(e),
            t = -1;
        null ==
            l.find((r, l) => {
                let { id: n } = r;
                if (n === e) return (t = l), !0;
            }) || null == r
            ? P.delete(e)
            : (l[t] = r);
    }),
        0 === P.size && (m = !1);
    let n = new Map();
    P.forEach((e) => {
        let r = v.get(e);
        null != r && n.set(e, r);
    }),
        v.clear(),
        B(r, l),
        n.forEach((e, r) => {
            v.set(r, e);
        }),
        (U = !1),
        (M = [...l]);
}
class Y extends (i = S.ZP.Store) {
    initialize() {
        this.waitFor(R.Z, f.Z, O.Z);
    }
    hasChanges() {
        return m || U || b;
    }
    getRoleStyleData(e) {
        return v.get(e);
    }
    get errorMessage() {
        return o;
    }
    get hasSortChanges() {
        return U;
    }
    get hasRoleConfigurationChanges() {
        return b;
    }
    get guild() {
        return t;
    }
    get editedRoleIds() {
        return Array.from(P);
    }
    get editedRoleIdsForConfigurations() {
        return w;
    }
    get roles() {
        return M;
    }
    get formState() {
        return p;
    }
    getSortDeltas() {
        return q();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return j(e);
    }
    getPermissionSearchQuery() {
        return n;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return Z;
    }
}
A(Y, "displayName", "GuildSettingsRolesStore");
let k = new Y(
        s.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => H(),
                  GUILD_SETTINGS_INIT: F,
                  GUILD_SETTINGS_SET_SECTION: F,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: r } = e;
                      if (null != M && r.length !== M.length) return !1;
                      (M = r.map((e) => j(e)).filter(G.lm)), (U = !0), K();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: r, flag: l, allow: t } = e,
                          n = j(r);
                      if (null == n) return !1;
                      let { permissions: o } = n;
                      return Q(n, { permissions: (o = t ? c.IH(o, l) : c.Od(o, l)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: r, permissions: l } = e,
                          t = j(r);
                      return null != t && Q(t, { permissions: l });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: r } = e,
                          l = j(r);
                      return null != l && Q(l, { permissions: g.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: r, name: l } = e,
                          t = j(r);
                      return null != t && Q(t, { name: l });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: r, description: l } = e,
                          t = j(r);
                      return null != t && Q(t, { description: l });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: r, color: l } = e,
                          t = 0 === l ? null : (0, E.Rf)(l),
                          n = j(r);
                      if (null == n) return !1;
                      let o = v.get(r);
                      return (
                          null != o &&
                          ((o.currentStyle = "solid"),
                          (o.styleColors.solid = {
                              primary_color: l,
                              secondary_color: null,
                              tertiary_color: null,
                          }),
                          v.set(r, C({}, o)),
                          Q(n, {
                              color: l,
                              colorString: t,
                              colors: {
                                  primary_color: l,
                                  secondary_color: null,
                                  tertiary_color: null,
                              },
                              colorStrings:
                                  null != t
                                      ? {
                                            primaryColor: t,
                                            secondaryColor: null,
                                            tertiaryColor: null,
                                        }
                                      : null,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: r, colors: l, currentStyle: t } = e,
                          n = j(r);
                      if (null == n) return !1;
                      let o = (0, I.DX)(l),
                          i = v.get(r);
                      return (
                          null != i &&
                          ((i.styleColors[t] = l),
                          (i.currentStyle = t),
                          v.set(r, C({}, i)),
                          Q(n, {
                              color: l.primary_color,
                              colors: l,
                              colorString: o.primaryColor,
                              colorStrings: o,
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: r, hoist: l, mentionable: t } = e,
                          n = j(r);
                      return (
                          null != n &&
                          Q(n, {
                              hoist: l,
                              mentionable: t,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: r, icon: l, unicodeEmoji: t } = e,
                          n = j(r);
                      return (
                          null != n &&
                          Q(n, {
                              icon: l,
                              unicodeEmoji: t,
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: r, searchQuery: l } = e;
                      if (((n = l), null != r)) {
                          if (null != j(r.id)) return void Q(r, r);
                          (M = [...M, r]), K();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var r;
                      let { id: l, currentStyle: t } = e,
                          n = j(l);
                      if (null == n) return !1;
                      let o = v.get(l);
                      if (null == o) return !1;
                      v.set(l, {
                          currentStyle: t,
                          styleColors: o.styleColors,
                      });
                      let i = o.styleColors[t],
                          u = (0, I.DX)(i);
                      return Q(n, {
                          color: null != (r = i.primary_color) ? r : void 0,
                          colors: i,
                          colorString: u.primaryColor,
                          colorStrings: u,
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: r, roleConnectionConfigurations: l } = e,
                          t = j(r);
                      if (null == t) return !1;
                      let n = x.get(t.id);
                      if (_().isEqual(n, l)) return !1;
                      Z.set(t.id, l), x.set(t.id, l), K();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: r, roleConnectionConfigurations: l } = e,
                          t = j(r);
                      if (null == t) return !1;
                      (b = !0), w.add(t.id), Z.set(t.id, l), K();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (t = null),
                          (h = M = []),
                          x.clear(),
                          P.clear(),
                          v.clear(),
                          Z.clear(),
                          (w = new Set()),
                          (m = !1),
                          (U = !1),
                          (b = !1),
                          (p = L.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: V,
                  GUILD_ROLE_UPDATE: V,
                  GUILD_ROLE_DELETE: function (e) {
                      return (
                          w.has(e.roleId) && (w.delete(e.roleId), x.delete(e.roleId), Z.delete(e.roleId), (b = !1)),
                          V(e)
                      );
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      p = L.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: r } = e;
                      (p = L.QZA.OPEN), (o = r);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      H(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: r } = e;
                      null != t &&
                          r === t.id &&
                          (t = (0, d.t8)(
                              t,
                              "features",
                              t.features.union(new Set([L.oNc.PIN_PERMISSION_MIGRATION_COMPLETE])),
                          ));
                  },
              },
    ),
    z = k;
