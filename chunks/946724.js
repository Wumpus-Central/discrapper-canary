let r, i, l;
(n.d(t, {
    Z: () => Y,
    g: () => N
}),
    n(388685),
    n(583741),
    n(953529));
var s,
    a,
    o = n(392711),
    c = n.n(o),
    d = n(149765),
    u = n(866442),
    m = n(442837),
    g = n(570140),
    p = n(311929),
    f = n(561654),
    h = n(606318),
    x = n(485386),
    b = n(990492),
    j = n(823379),
    _ = n(700785),
    v = n(999382),
    O = n(981631),
    C = n(141006);
function y(e, t, n) {
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
var N = (((a = {}).SOLID = 'solid'), (a.GRADIENT = 'gradient'), (a.HOLOGRAPHIC = 'holographic'), a);
let I = new Set(),
    E = O.QZA.CLOSED,
    S = !1,
    T = !1,
    P = [],
    w = [],
    R = !1,
    Z = new Set(),
    D = new Map(),
    A = new Map(),
    L = new Map();
function k() {
    if (null == r || null == P) return [];
    let e = c()(x.Z.getRoles(r.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return b.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: P,
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
function M(e) {
    let { section: t } = e;
    if (null != r || t !== O.pNK.ROLES) return !1;
    G();
}
function G() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    ((r = v.Z.getProps().guild),
        (S = !1),
        (T = !1),
        (l = void 0),
        I.clear(),
        L.clear(),
        (E = O.QZA.OPEN),
        U(
            (w = [
                ...(P =
                    null != r
                        ? c()(x.Z.getRoles(r.id))
                              .values()
                              .sortBy((e) => {
                                  let { position: t } = e;
                                  return t;
                              })
                              .reverse()
                              .value()
                        : [])
            ])
        ),
        (R = !1),
        e &&
            (A.clear(),
            D.forEach((e, t) => {
                A.set(t, [...e]);
            })));
}
function U(e) {
    e.forEach((e) => {
        let t = 'solid';
        null != e.colors && (null != e.colors.tertiary_color ? (t = 'holographic') : null != e.colors.secondary_color && (t = 'gradient'));
        let n = {
            solid: {
                primary_color: O.p6O,
                secondary_color: null,
                tertiary_color: null
            },
            gradient: {
                primary_color: C.Eg.primary_color,
                secondary_color: C.Eg.secondary_color,
                tertiary_color: null
            },
            holographic: {
                primary_color: C.SK.primary_color,
                secondary_color: C.SK.secondary_color,
                tertiary_color: C.SK.tertiary_color
            }
        };
        if (null != e.colors) {
            var r, i, l;
            n[t] = {
                primary_color: null != (r = e.colors.primary_color) ? r : O.p6O,
                secondary_color: null != (i = e.colors.secondary_color) ? i : null,
                tertiary_color: null != (l = e.colors.tertiary_color) ? l : null
            };
        }
        L.set(e.id, {
            currentStyle: t,
            styleColors: n
        });
    });
}
let B = c().debounce(() => {
    let e = !1;
    (T && ((T = k().length > 0) || (e = !0)),
        [...I].forEach((t) => {
            var n;
            c().isEqual(
                H(t),
                ((n = t),
                w.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (I.delete(t), (e = !0));
        }),
        0 === I.size && (S = !1),
        R && c().isEqual(D, A) && ((e = !0), (R = !1)),
        e && W.emitChange());
}, 500);
function F(e, t) {
    let n = P.indexOf(e);
    if (n < 0) return !1;
    let r = (function (e) {
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
                    y(e, t, n[t]);
                }));
        }
        return e;
    })({}, e, t);
    ((P[n] = r), (P = [...P]), (S = !0), I.add(r.id), B());
}
function H(e) {
    return P.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function z(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || E === O.QZA.SUBMITTING) return !1;
    r = v.Z.getProps().guild;
    let n = [];
    (null != r &&
        (n = c()(x.Z.getRoles(r.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        I.forEach((e) => {
            let t = H(e),
                r = -1;
            null ==
                n.find((t, n) => {
                    let { id: i } = t;
                    if (i === e) return ((r = n), !0);
                }) || null == t
                ? I.delete(e)
                : (n[r] = t);
        }),
        0 === I.size && (S = !1));
    let i = new Map();
    (I.forEach((e) => {
        let t = L.get(e);
        null != t && i.set(e, t);
    }),
        L.clear(),
        U(n),
        i.forEach((e, t) => {
            L.set(t, e);
        }),
        (T = !1),
        (P = [...n]));
}
class V extends (s = m.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, f.Z, x.Z);
    }
    hasChanges() {
        return S || T || R;
    }
    getRoleStyleData(e) {
        return L.get(e);
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return T;
    }
    get hasRoleConfigurationChanges() {
        return R;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(I);
    }
    get editedRoleIdsForConfigurations() {
        return Z;
    }
    get roles() {
        return P;
    }
    get formState() {
        return E;
    }
    getSortDeltas() {
        return k();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return H(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return A;
    }
}
y(V, 'displayName', 'GuildSettingsRolesStore');
let W = new V(
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => G(),
                  GUILD_SETTINGS_INIT: M,
                  GUILD_SETTINGS_SET_SECTION: M,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != P && t.length !== P.length) return !1;
                      ((P = t.map((e) => H(e)).filter(j.lm)), (T = !0), B());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return F(i, { permissions: (l = r ? d.IH(l, n) : d.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = H(t);
                      return null != r && F(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = H(t);
                      return null != n && F(n, { permissions: _.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = H(t);
                      return null != r && F(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = H(t);
                      return null != r && F(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = H(t);
                      if (null == i) return !1;
                      let l = L.get(t);
                      return (
                          null != l &&
                          ((l.currentStyle = 'solid'),
                          (l.styleColors.solid = {
                              primary_color: n,
                              secondary_color: void 0,
                              tertiary_color: void 0
                          }),
                          L.set(t, l),
                          F(i, {
                              color: n,
                              colorString: r,
                              colors: {
                                  primary_color: n,
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
                      let { id: t, colors: n, currentStyle: r } = e,
                          i = H(t);
                      if (null == i) return !1;
                      let l = (0, h.DX)(n),
                          s = L.get(t);
                      return (
                          null != s &&
                          ((s.styleColors[r] = n),
                          (s.currentStyle = r),
                          L.set(t, s),
                          F(i, {
                              color: null != n.primary_color ? n.primary_color : void 0,
                              colors: n,
                              colorString: l.primaryColor,
                              colorStrings: l
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = H(t);
                      return (
                          null != i &&
                          F(i, {
                              hoist: n,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = H(t);
                      return (
                          null != i &&
                          F(i, {
                              icon: n,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != H(t.id)) return void F(t, t);
                          ((P = [...P, t]), B());
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = H(n);
                      if (null == i) return !1;
                      let l = L.get(n);
                      if (null == l) return !1;
                      L.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors
                      });
                      let s = l.styleColors[r],
                          a = (0, h.DX)(s);
                      return F(i, {
                          color: null != (t = s.primary_color) ? t : void 0,
                          colors: s,
                          colorString: a.primaryColor,
                          colorStrings: a
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = H(t);
                      if (null == r) return !1;
                      let i = D.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      (A.set(r.id, n), D.set(r.id, n), B());
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = H(t);
                      if (null == r) return !1;
                      ((R = !0), Z.add(r.id), A.set(r.id, n), B());
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      ((r = null), (w = P = []), D.clear(), I.clear(), L.clear(), A.clear(), (Z = new Set()), (S = !1), (T = !1), (R = !1), (E = O.QZA.CLOSED));
                  },
                  GUILD_ROLE_CREATE: z,
                  GUILD_ROLE_UPDATE: z,
                  GUILD_ROLE_DELETE: function (e) {
                      return (Z.has(e.roleId) && (Z.delete(e.roleId), D.delete(e.roleId), A.delete(e.roleId), (R = !1)), z(e));
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      E = O.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      ((E = O.QZA.OPEN), (l = t));
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      G(!1);
                  },
                  GUILD_SETTINGS_PIN_PERMISSION_MIGRATED: function (e) {
                      let { guildId: t } = e;
                      null != r && t === r.id && (r = (0, p.t8)(r, 'features', r.features.union(new Set([O.oNc.PIN_PERMISSION_MIGRATION_COMPLETE]))));
                  }
              }
    ),
    Y = W;
