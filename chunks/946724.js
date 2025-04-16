let r, i, s;
n.d(t, {
    Z: () => V,
    g: () => C
}),
    n(388685),
    n(583741),
    n(953529);
var l,
    a,
    o = n(392711),
    c = n.n(o),
    d = n(149765),
    u = n(866442),
    m = n(442837),
    g = n(570140),
    p = n(561654),
    h = n(956226),
    f = n(430824),
    x = n(990492),
    b = n(823379),
    j = n(700785),
    N = n(999382),
    _ = n(981631),
    v = n(141006);
function O(e, t, n) {
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
var C = (((a = {}).SOLID = 'solid'), (a.GRADIENT = 'gradient'), (a.HOLOGRAPHIC = 'holographic'), a);
let y = new Set(),
    I = _.QZA.CLOSED,
    E = !1,
    S = !1,
    T = [],
    P = [],
    w = !1,
    R = new Set(),
    Z = new Map(),
    D = new Map(),
    A = new Map();
function k() {
    if (null == r || null == T) return [];
    let e = c()(f.Z.getRoles(r.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return x.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: T,
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
function W(e) {
    let { section: t } = e;
    if (null != r || t !== _.pNK.ROLES) return !1;
    L();
}
function L() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = N.Z.getProps().guild),
        (E = !1),
        (S = !1),
        (s = void 0),
        y.clear(),
        A.clear(),
        (I = _.QZA.OPEN),
        M(
            (P = [
                ...(T =
                    null != r
                        ? c()(f.Z.getRoles(r.id))
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
        (w = !1),
        e &&
            (D.clear(),
            Z.forEach((e, t) => {
                D.set(t, [...e]);
            }));
}
function M(e) {
    e.forEach((e) => {
        let t = 'solid';
        null != e.colors && (null != e.colors.tertiary_color ? (t = 'holographic') : null != e.colors.secondary_color && (t = 'gradient'));
        let n = {
            solid: {
                primary_color: _.p6O,
                secondary_color: null,
                tertiary_color: null
            },
            gradient: {
                primary_color: v.Eg.primary_color,
                secondary_color: v.Eg.secondary_color,
                tertiary_color: null
            },
            holographic: {
                primary_color: v.SK.primary_color,
                secondary_color: v.SK.secondary_color,
                tertiary_color: v.SK.tertiary_color
            }
        };
        if (null != e.colors) {
            var r, i, s;
            n[t] = {
                primary_color: null != (r = e.colors.primary_color) ? r : _.p6O,
                secondary_color: null != (i = e.colors.secondary_color) ? i : null,
                tertiary_color: null != (s = e.colors.tertiary_color) ? s : null
            };
        }
        A.set(e.id, {
            currentStyle: t,
            styleColors: n
        });
    });
}
let G = c().debounce(() => {
    let e = !1;
    S && ((S = k().length > 0) || (e = !0)),
        [...y].forEach((t) => {
            var n;
            c().isEqual(
                B(t),
                ((n = t),
                P.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (y.delete(t), (e = !0));
        }),
        0 === y.size && (E = !1),
        w && c().isEqual(Z, D) && ((e = !0), (w = !1)),
        e && H.emitChange();
}, 500);
function U(e, t) {
    let n = T.indexOf(e);
    if (n < 0) return !1;
    let r = (function (e) {
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
                    O(e, t, n[t]);
                });
        }
        return e;
    })({}, e, t);
    (T[n] = r), (T = [...T]), (E = !0), y.add(r.id), G();
}
function B(e) {
    return T.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function F(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || I === _.QZA.SUBMITTING) return !1;
    r = N.Z.getProps().guild;
    let n = [];
    null != r &&
        (n = c()(f.Z.getRoles(r.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        y.forEach((e) => {
            let t = B(e),
                r = -1;
            null ==
                n.find((t, n) => {
                    let { id: i } = t;
                    if (i === e) return (r = n), !0;
                }) || null == t
                ? y.delete(e)
                : (n[r] = t);
        }),
        0 === y.size && (E = !1);
    let i = new Map();
    y.forEach((e) => {
        let t = A.get(e);
        null != t && i.set(e, t);
    }),
        A.clear(),
        M(n),
        i.forEach((e, t) => {
            A.set(t, e);
        }),
        (S = !1),
        (T = [...n]);
}
class z extends (l = m.ZP.Store) {
    initialize() {
        this.waitFor(N.Z, p.Z, f.Z);
    }
    hasChanges() {
        return E || S || w;
    }
    getRoleStyleData(e) {
        return A.get(e);
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return S;
    }
    get hasRoleConfigurationChanges() {
        return w;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(y);
    }
    get editedRoleIdsForConfigurations() {
        return R;
    }
    get roles() {
        return T;
    }
    get formState() {
        return I;
    }
    getSortDeltas() {
        return k();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return B(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return D;
    }
}
O(z, 'displayName', 'GuildSettingsRolesStore');
let H = new z(
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => L(),
                  GUILD_SETTINGS_INIT: W,
                  GUILD_SETTINGS_SET_SECTION: W,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != T && t.length !== T.length) return !1;
                      (T = t.map((e) => B(e)).filter(b.lm)), (S = !0), G();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = B(t);
                      if (null == i) return !1;
                      let { permissions: s } = i;
                      return U(i, { permissions: (s = r ? d.IH(s, n) : d.Od(s, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = B(t);
                      return null != r && U(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = B(t);
                      return null != n && U(n, { permissions: j.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = B(t);
                      return null != r && U(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = B(t);
                      return null != r && U(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, u.Rf)(n),
                          i = B(t);
                      if (null == i) return !1;
                      let s = A.get(t);
                      return (
                          null != s &&
                          ((s.currentStyle = 'solid'),
                          (s.styleColors.solid = {
                              primary_color: n,
                              secondary_color: void 0,
                              tertiary_color: void 0
                          }),
                          A.set(t, s),
                          U(i, {
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
                          i = B(t);
                      if (null == i) return !1;
                      let s = (0, h.D)(n),
                          l = A.get(t);
                      return (
                          null != l &&
                          ((l.styleColors[r] = n),
                          (l.currentStyle = r),
                          A.set(t, l),
                          U(i, {
                              color: null != n.primary_color ? n.primary_color : void 0,
                              colors: n,
                              colorString: s.primaryColor,
                              colorStrings: s
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = B(t);
                      return (
                          null != i &&
                          U(i, {
                              hoist: n,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = B(t);
                      return (
                          null != i &&
                          U(i, {
                              icon: n,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != B(t.id)) return void U(t, t);
                          (T = [...T, t]), G();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = B(n);
                      if (null == i) return !1;
                      let s = A.get(n);
                      if (null == s) return !1;
                      A.set(n, {
                          currentStyle: r,
                          styleColors: s.styleColors
                      });
                      let l = s.styleColors[r],
                          a = (0, h.D)(l);
                      return U(i, {
                          color: null != (t = l.primary_color) ? t : void 0,
                          colors: l,
                          colorString: a.primaryColor,
                          colorStrings: a
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = B(t);
                      if (null == r) return !1;
                      let i = Z.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      D.set(r.id, n), Z.set(r.id, n), G();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = B(t);
                      if (null == r) return !1;
                      (w = !0), R.add(r.id), D.set(r.id, n), G();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null), (P = T = []), Z.clear(), y.clear(), A.clear(), D.clear(), (R = new Set()), (E = !1), (S = !1), (w = !1), (I = _.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: F,
                  GUILD_ROLE_UPDATE: F,
                  GUILD_ROLE_DELETE: function (e) {
                      return R.has(e.roleId) && (R.delete(e.roleId), Z.delete(e.roleId), D.delete(e.roleId), (w = !1)), F(e);
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      I = _.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (I = _.QZA.OPEN), (s = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      L(!1);
                  }
              }
    ),
    V = H;
