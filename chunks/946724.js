let l, n, o;
(r.d(t, {
    Z: () => Q,
    g: () => C
}),
    r(388685),
    r(583741),
    r(953529));
var i,
    a,
    s = r(392711),
    u = r.n(s),
    c = r(149765),
    d = r(866442),
    E = r(442837),
    f = r(570140),
    _ = r(311929),
    g = r(561654),
    S = r(606318),
    p = r(402235),
    h = r(485386),
    I = r(990492),
    R = r(823379),
    y = r(700785),
    O = r(999382),
    T = r(981631),
    N = r(141006);
function L(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
function D(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(r);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            l.forEach(function (t) {
                L(e, t, r[t]);
            }));
    }
    return e;
}
var C = (((a = {}).SOLID = 'solid'), (a.GRADIENT = 'gradient'), (a.HOLOGRAPHIC = 'holographic'), a);
let P = new Set(),
    G = T.QZA.CLOSED,
    A = !1,
    m = !1,
    v = [],
    b = [],
    U = !1,
    M = new Set(),
    x = new Map(),
    w = new Map(),
    Z = new Map();
function H() {
    if (null == l || null == v) return [];
    let e = u()(h.Z.getRoles(l.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return I.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: v,
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
function j(e) {
    let { section: t } = e;
    if (null != l || t !== T.pNK.ROLES) return !1;
    q();
}
function q() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((l = O.Z.getProps().guild),
        (A = !1),
        (m = !1),
        (o = void 0),
        P.clear(),
        Z.clear(),
        (G = T.QZA.OPEN),
        (b = [
            ...(v =
                null != l
                    ? u()(h.Z.getRoles(l.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        k(null == l ? void 0 : l.id, b),
        (U = !1),
        e &&
            (w.clear(),
            x.forEach((e, t) => {
                w.set(t, [...e]);
            })));
}
function k(e, t) {
    t.forEach((t) => {
        let r = 'solid',
            l = (0, p.zI)(e, t);
        null != t.colors && l && (null != t.colors.tertiary_color ? (r = 'holographic') : null != t.colors.secondary_color && (r = 'gradient'));
        let n = {
            solid: {
                primary_color: T.p6O,
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
            n[r] = {
                primary_color: null != (o = t.colors.primary_color) ? o : T.p6O,
                secondary_color: null != (i = t.colors.secondary_color) ? i : null,
                tertiary_color: null != (a = t.colors.tertiary_color) ? a : null
            };
        }
        Z.set(t.id, {
            currentStyle: r,
            styleColors: n
        });
    });
}
let K = u().debounce(() => {
    let e = !1;
    (m && ((m = H().length > 0) || (e = !0)),
        [...P].forEach((t) => {
            var r;
            u().isEqual(
                B(t),
                ((r = t),
                b.find((e) => {
                    let { id: t } = e;
                    return t === r;
                }))
            ) && (P.delete(t), (e = !0));
        }),
        0 === P.size && (A = !1),
        U && u().isEqual(x, w) && ((e = !0), (U = !1)),
        e && W.emitChange());
}, 500);
function F(e, t) {
    let r = v.indexOf(e);
    if (r < 0) return !1;
    let l = D({}, e, t);
    ((v[r] = l), (v = [...v]), (A = !0), P.add(l.id), K());
}
function B(e) {
    return v.find((t) => {
        let { id: r } = t;
        return r === e;
    });
}
function X(e) {
    let { guildId: t } = e;
    if (null == l || t !== l.id || G === T.QZA.SUBMITTING) return !1;
    l = O.Z.getProps().guild;
    let r = [];
    (null != l &&
        (r = u()(h.Z.getRoles(l.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        P.forEach((e) => {
            let t = B(e),
                l = -1;
            null ==
                r.find((t, r) => {
                    let { id: n } = t;
                    if (n === e) return ((l = r), !0);
                }) || null == t
                ? P.delete(e)
                : (r[l] = t);
        }),
        0 === P.size && (A = !1));
    let n = new Map();
    (P.forEach((e) => {
        let t = Z.get(e);
        null != t && n.set(e, t);
    }),
        Z.clear(),
        k(t, r),
        n.forEach((e, t) => {
            Z.set(t, e);
        }),
        (m = !1),
        (v = [...r]));
}
class z extends (i = E.ZP.Store) {
    initialize() {
        this.waitFor(O.Z, g.Z, h.Z);
    }
    hasChanges() {
        return A || m || U;
    }
    getRoleStyleData(e) {
        return Z.get(e);
    }
    get errorMessage() {
        return o;
    }
    get hasSortChanges() {
        return m;
    }
    get hasRoleConfigurationChanges() {
        return U;
    }
    get guild() {
        return l;
    }
    get editedRoleIds() {
        return Array.from(P);
    }
    get editedRoleIdsForConfigurations() {
        return M;
    }
    get roles() {
        return v;
    }
    get formState() {
        return G;
    }
    getSortDeltas() {
        return H();
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
        return w;
    }
}
L(z, 'displayName', 'GuildSettingsRolesStore');
let W = new z(
        f.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => q(),
                  GUILD_SETTINGS_INIT: j,
                  GUILD_SETTINGS_SET_SECTION: j,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != v && t.length !== v.length) return !1;
                      ((v = t.map((e) => B(e)).filter(R.lm)), (m = !0), K());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: r, allow: l } = e,
                          n = B(t);
                      if (null == n) return !1;
                      let { permissions: o } = n;
                      return F(n, { permissions: (o = l ? c.IH(o, r) : c.Od(o, r)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: r } = e,
                          l = B(t);
                      return null != l && F(l, { permissions: r });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          r = B(t);
                      return null != r && F(r, { permissions: y.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: r } = e,
                          l = B(t);
                      return null != l && F(l, { name: r });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: r } = e,
                          l = B(t);
                      return null != l && F(l, { description: r });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: r } = e,
                          l = 0 === r ? null : (0, d.Rf)(r),
                          n = B(t);
                      if (null == n) return !1;
                      let o = Z.get(t);
                      return (
                          null != o &&
                          ((o.currentStyle = 'solid'),
                          (o.styleColors.solid = {
                              primary_color: r,
                              secondary_color: void 0,
                              tertiary_color: void 0
                          }),
                          Z.set(t, D({}, o)),
                          F(n, {
                              color: r,
                              colorString: l,
                              colors: {
                                  primary_color: r,
                                  secondary_color: void 0,
                                  tertiary_color: void 0
                              },
                              colorStrings: {
                                  primaryColor: null != l ? l : void 0,
                                  secondaryColor: void 0,
                                  tertiaryColor: void 0
                              }
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: r, currentStyle: l } = e,
                          n = B(t);
                      if (null == n) return !1;
                      let o = (0, S.DX)(r),
                          i = Z.get(t);
                      return (
                          null != i &&
                          ((i.styleColors[l] = r),
                          (i.currentStyle = l),
                          Z.set(t, D({}, i)),
                          F(n, {
                              color: null != r.primary_color ? r.primary_color : void 0,
                              colors: r,
                              colorString: o.primaryColor,
                              colorStrings: o
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: r, mentionable: l } = e,
                          n = B(t);
                      return (
                          null != n &&
                          F(n, {
                              hoist: r,
                              mentionable: l
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: r, unicodeEmoji: l } = e,
                          n = B(t);
                      return (
                          null != n &&
                          F(n, {
                              icon: r,
                              unicodeEmoji: l
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: r } = e;
                      if (((n = r), null != t)) {
                          if (null != B(t.id)) return void F(t, t);
                          ((v = [...v, t]), K());
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: r, currentStyle: l } = e,
                          n = B(r);
                      if (null == n) return !1;
                      let o = Z.get(r);
                      if (null == o) return !1;
                      Z.set(r, {
                          currentStyle: l,
                          styleColors: o.styleColors
                      });
                      let i = o.styleColors[l],
                          a = (0, S.DX)(i);
                      return F(n, {
                          color: null != (t = i.primary_color) ? t : void 0,
                          colors: i,
                          colorString: a.primaryColor,
                          colorStrings: a
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: r } = e,
                          l = B(t);
                      if (null == l) return !1;
                      let n = x.get(l.id);
                      if (u().isEqual(n, r)) return !1;
                      (w.set(l.id, r), x.set(l.id, r), K());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: r } = e,
                          l = B(t);
                      if (null == l) return !1;
                      ((U = !0), M.add(l.id), w.set(l.id, r), K());
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      ((l = null), (b = v = []), x.clear(), P.clear(), Z.clear(), w.clear(), (M = new Set()), (A = !1), (m = !1), (U = !1), (G = T.QZA.CLOSED));
                  },
                  GUILD_ROLE_CREATE: X,
                  GUILD_ROLE_UPDATE: X,
                  GUILD_ROLE_DELETE: function (e) {
                      return (M.has(e.roleId) && (M.delete(e.roleId), x.delete(e.roleId), w.delete(e.roleId), (U = !1)), X(e));
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      G = T.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      ((G = T.QZA.OPEN), (o = t));
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      q(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      null != l && t === l.id && (l = (0, _.t8)(l, 'features', l.features.union(new Set([T.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
                  }
              }
    ),
    Q = W;
