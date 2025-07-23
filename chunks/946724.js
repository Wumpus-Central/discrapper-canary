let r, n, o;
(l.d(t, {
    Z: () => Q,
    g: () => C
}),
    l(388685),
    l(583741),
    l(953529));
var i,
    a,
    s = l(392711),
    u = l.n(s),
    c = l(149765),
    E = l(866442),
    d = l(442837),
    S = l(570140),
    g = l(311929),
    _ = l(561654),
    p = l(606318),
    f = l(402235),
    h = l(485386),
    I = l(990492),
    R = l(823379),
    O = l(700785),
    T = l(999382),
    y = l(981631),
    N = l(141006);
function L(e, t, l) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = l),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var l = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(l);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(l).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(l, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                L(e, t, l[t]);
            }));
    }
    return e;
}
var C = (((a = {}).SOLID = 'solid'), (a.GRADIENT = 'gradient'), (a.HOLOGRAPHIC = 'holographic'), a);
let P = new Set(),
    G = y.QZA.CLOSED,
    A = !1,
    v = !1,
    m = [],
    U = [],
    M = !1,
    b = new Set(),
    w = new Map(),
    Z = new Map(),
    H = new Map();
function j() {
    if (null == r || null == m) return [];
    let e = u()(h.Z.getRoles(r.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return I.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: m,
        idGetter: (e) => {
            let { id: t } = e;
            return t;
        },
        existingPositionGetter: (e) => {
            let { originalPosition: t } = e;
            return null != t ? t : 1 / 0;
        },
        ascending: !1
    });
}
function q(e) {
    let { section: t } = e;
    if (null != r || t !== y.pNK.ROLES) return !1;
    x();
}
function x() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((r = T.Z.getProps().guild),
        (A = !1),
        (v = !1),
        (o = void 0),
        P.clear(),
        H.clear(),
        (G = y.QZA.OPEN),
        (U = [
            ...(m =
                null != r
                    ? u()(h.Z.getRoles(r.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        k(null == r ? void 0 : r.id, U),
        (M = !1),
        e &&
            (Z.clear(),
            w.forEach((e, t) => {
                Z.set(t, [...e]);
            })));
}
function k(e, t) {
    t.forEach((t) => {
        let l = 'solid',
            r = (0, f.zI)(e, t);
        null != t.colors && r && (null != t.colors.tertiary_color ? (l = 'holographic') : null != t.colors.secondary_color && (l = 'gradient'));
        let n = {
            solid: {
                primary_color: y.p6O,
                secondary_color: null,
                tertiary_color: null
            },
            gradient: {
                primary_color: N.Eg.primary_color,
                secondary_color: N.Eg.secondary_color,
                tertiary_color: null
            },
            holographic: {
                primary_color: N.SK.primary_color,
                secondary_color: N.SK.secondary_color,
                tertiary_color: N.SK.tertiary_color
            }
        };
        if (null != t.colors) {
            var o, i, a;
            n[l] = {
                primary_color: null != (o = t.colors.primary_color) ? o : y.p6O,
                secondary_color: null != (i = t.colors.secondary_color) ? i : null,
                tertiary_color: null != (a = t.colors.tertiary_color) ? a : null
            };
        }
        H.set(t.id, {
            currentStyle: l,
            styleColors: n
        });
    });
}
let F = u().debounce(() => {
    let e = !1;
    (v && ((v = j().length > 0) || (e = !0)),
        [...P].forEach((t) => {
            var l;
            u().isEqual(
                B(t),
                ((l = t),
                U.find((e) => {
                    let { id: t } = e;
                    return t === l;
                }))
            ) && (P.delete(t), (e = !0));
        }),
        0 === P.size && (A = !1),
        M && u().isEqual(w, Z) && ((e = !0), (M = !1)),
        e && W.emitChange());
}, 500);
function K(e, t) {
    let l = m.indexOf(e);
    if (l < 0) return !1;
    let r = D({}, e, t);
    ((m[l] = r), (m = [...m]), (A = !0), P.add(r.id), F());
}
function B(e) {
    return m.find((t) => {
        let { id: l } = t;
        return l === e;
    });
}
function X(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || G === y.QZA.SUBMITTING) return !1;
    r = T.Z.getProps().guild;
    let l = [];
    (null != r &&
        (l = u()(h.Z.getRoles(r.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        P.forEach((e) => {
            let t = B(e),
                r = -1;
            null ==
                l.find((t, l) => {
                    let { id: n } = t;
                    if (n === e) return ((r = l), !0);
                }) || null == t
                ? P.delete(e)
                : (l[r] = t);
        }),
        0 === P.size && (A = !1));
    let n = new Map();
    (P.forEach((e) => {
        let t = H.get(e);
        null != t && n.set(e, t);
    }),
        H.clear(),
        k(t, l),
        n.forEach((e, t) => {
            H.set(t, e);
        }),
        (v = !1),
        (m = [...l]));
}
class z extends (i = d.ZP.Store) {
    initialize() {
        this.waitFor(T.Z, _.Z, h.Z);
    }
    hasChanges() {
        return A || v || M;
    }
    getRoleStyleData(e) {
        return H.get(e);
    }
    get errorMessage() {
        return o;
    }
    get hasSortChanges() {
        return v;
    }
    get hasRoleConfigurationChanges() {
        return M;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(P);
    }
    get editedRoleIdsForConfigurations() {
        return b;
    }
    get roles() {
        return m;
    }
    get formState() {
        return G;
    }
    getSortDeltas() {
        return j();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return B(e);
    }
    getPermissionSearchQuery() {
        return n;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return Z;
    }
}
L(z, 'displayName', 'GuildSettingsRolesStore');
let W = new z(
        S.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => x(),
                  GUILD_SETTINGS_INIT: q,
                  GUILD_SETTINGS_SET_SECTION: q,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != m && t.length !== m.length) return !1;
                      ((m = t.map((e) => B(e)).filter(R.lm)), (v = !0), F());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: l, allow: r } = e,
                          n = B(t);
                      if (null == n) return !1;
                      let { permissions: o } = n;
                      return K(n, { permissions: (o = r ? c.IH(o, l) : c.Od(o, l)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: l } = e,
                          r = B(t);
                      return null != r && K(r, { permissions: l });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          l = B(t);
                      return null != l && K(l, { permissions: O.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: l } = e,
                          r = B(t);
                      return null != r && K(r, { name: l });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: l } = e,
                          r = B(t);
                      return null != r && K(r, { description: l });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: l } = e,
                          r = 0 === l ? null : (0, E.Rf)(l),
                          n = B(t);
                      if (null == n) return !1;
                      let o = H.get(t);
                      return (
                          null != o &&
                          ((o.currentStyle = 'solid'),
                          (o.styleColors.solid = {
                              primary_color: l,
                              secondary_color: void 0,
                              tertiary_color: void 0
                          }),
                          H.set(t, D({}, o)),
                          K(n, {
                              color: l,
                              colorString: r,
                              colors: {
                                  primary_color: l,
                                  secondary_color: void 0,
                                  tertiary_color: void 0
                              },
                              colorStrings: {
                                  primaryColor: null != r ? r : void 0,
                                  secondaryColor: void 0,
                                  tertiaryColor: void 0
                              }
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: l, currentStyle: r } = e,
                          n = B(t);
                      if (null == n) return !1;
                      let o = (0, p.DX)(l),
                          i = H.get(t);
                      return (
                          null != i &&
                          ((i.styleColors[r] = l),
                          (i.currentStyle = r),
                          H.set(t, D({}, i)),
                          K(n, {
                              color: null != l.primary_color ? l.primary_color : void 0,
                              colors: l,
                              colorString: o.primaryColor,
                              colorStrings: o
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: l, mentionable: r } = e,
                          n = B(t);
                      return (
                          null != n &&
                          K(n, {
                              hoist: l,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: l, unicodeEmoji: r } = e,
                          n = B(t);
                      return (
                          null != n &&
                          K(n, {
                              icon: l,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: l } = e;
                      if (((n = l), null != t)) {
                          if (null != B(t.id)) return void K(t, t);
                          ((m = [...m, t]), F());
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: l, currentStyle: r } = e,
                          n = B(l);
                      if (null == n) return !1;
                      let o = H.get(l);
                      if (null == o) return !1;
                      H.set(l, {
                          currentStyle: r,
                          styleColors: o.styleColors
                      });
                      let i = o.styleColors[r],
                          a = (0, p.DX)(i);
                      return K(n, {
                          color: null != (t = i.primary_color) ? t : void 0,
                          colors: i,
                          colorString: a.primaryColor,
                          colorStrings: a
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: l } = e,
                          r = B(t);
                      if (null == r) return !1;
                      let n = w.get(r.id);
                      if (u().isEqual(n, l)) return !1;
                      (Z.set(r.id, l), w.set(r.id, l), F());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: l } = e,
                          r = B(t);
                      if (null == r) return !1;
                      ((M = !0), b.add(r.id), Z.set(r.id, l), F());
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      ((r = null), (U = m = []), w.clear(), P.clear(), H.clear(), Z.clear(), (b = new Set()), (A = !1), (v = !1), (M = !1), (G = y.QZA.CLOSED));
                  },
                  GUILD_ROLE_CREATE: X,
                  GUILD_ROLE_UPDATE: X,
                  GUILD_ROLE_DELETE: function (e) {
                      return (b.has(e.roleId) && (b.delete(e.roleId), w.delete(e.roleId), Z.delete(e.roleId), (M = !1)), X(e));
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      G = y.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      ((G = y.QZA.OPEN), (o = t));
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      x(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      null != r && t === r.id && (r = (0, g.t8)(r, 'features', r.features.union(new Set([y.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
                  }
              }
    ),
    Q = W;
