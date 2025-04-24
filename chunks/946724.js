let r, i, l;
n.d(t, {
    Z: () => V,
    g: () => y
}),
    n(388685),
    n(583741),
    n(953529);
var s,
    a,
    o = n(392711),
    c = n.n(o),
    u = n(149765),
    d = n(866442),
    m = n(442837),
    g = n(570140),
    p = n(561654),
    h = n(956226),
    f = n(430824),
    x = n(990492),
    b = n(823379),
    j = n(700785),
    _ = n(999382),
    v = n(981631),
    O = n(141006);
function C(e, t, n) {
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
var y = (((a = {}).SOLID = 'solid'), (a.GRADIENT = 'gradient'), (a.HOLOGRAPHIC = 'holographic'), a);
let N = new Set(),
    I = v.QZA.CLOSED,
    E = !1,
    S = !1,
    T = [],
    P = [],
    w = !1,
    R = new Set(),
    Z = new Map(),
    D = new Map(),
    k = new Map();
function A() {
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
function L(e) {
    let { section: t } = e;
    if (null != r || t !== v.pNK.ROLES) return !1;
    M();
}
function M() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = _.Z.getProps().guild),
        (E = !1),
        (S = !1),
        (l = void 0),
        N.clear(),
        k.clear(),
        (I = v.QZA.OPEN),
        G(
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
function G(e) {
    e.forEach((e) => {
        let t = 'solid';
        null != e.colors && (null != e.colors.tertiary_color ? (t = 'holographic') : null != e.colors.secondary_color && (t = 'gradient'));
        let n = {
            solid: {
                primary_color: v.p6O,
                secondary_color: null,
                tertiary_color: null
            },
            gradient: {
                primary_color: O.Eg.primary_color,
                secondary_color: O.Eg.secondary_color,
                tertiary_color: null
            },
            holographic: {
                primary_color: O.SK.primary_color,
                secondary_color: O.SK.secondary_color,
                tertiary_color: O.SK.tertiary_color
            }
        };
        if (null != e.colors) {
            var r, i, l;
            n[t] = {
                primary_color: null != (r = e.colors.primary_color) ? r : v.p6O,
                secondary_color: null != (i = e.colors.secondary_color) ? i : null,
                tertiary_color: null != (l = e.colors.tertiary_color) ? l : null
            };
        }
        k.set(e.id, {
            currentStyle: t,
            styleColors: n
        });
    });
}
let U = c().debounce(() => {
    let e = !1;
    S && ((S = A().length > 0) || (e = !0)),
        [...N].forEach((t) => {
            var n;
            c().isEqual(
                F(t),
                ((n = t),
                P.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (N.delete(t), (e = !0));
        }),
        0 === N.size && (E = !1),
        w && c().isEqual(Z, D) && ((e = !0), (w = !1)),
        e && W.emitChange();
}, 500);
function B(e, t) {
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
                    C(e, t, n[t]);
                });
        }
        return e;
    })({}, e, t);
    (T[n] = r), (T = [...T]), (E = !0), N.add(r.id), U();
}
function F(e) {
    return T.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function z(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || I === v.QZA.SUBMITTING) return !1;
    r = _.Z.getProps().guild;
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
        N.forEach((e) => {
            let t = F(e),
                r = -1;
            null ==
                n.find((t, n) => {
                    let { id: i } = t;
                    if (i === e) return (r = n), !0;
                }) || null == t
                ? N.delete(e)
                : (n[r] = t);
        }),
        0 === N.size && (E = !1);
    let i = new Map();
    N.forEach((e) => {
        let t = k.get(e);
        null != t && i.set(e, t);
    }),
        k.clear(),
        G(n),
        i.forEach((e, t) => {
            k.set(t, e);
        }),
        (S = !1),
        (T = [...n]);
}
class H extends (s = m.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, p.Z, f.Z);
    }
    hasChanges() {
        return E || S || w;
    }
    getRoleStyleData(e) {
        return k.get(e);
    }
    get errorMessage() {
        return l;
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
        return Array.from(N);
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
        return A();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return F(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return D;
    }
}
C(H, 'displayName', 'GuildSettingsRolesStore');
let W = new H(
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => M(),
                  GUILD_SETTINGS_INIT: L,
                  GUILD_SETTINGS_SET_SECTION: L,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != T && t.length !== T.length) return !1;
                      (T = t.map((e) => F(e)).filter(b.lm)), (S = !0), U();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = F(t);
                      if (null == i) return !1;
                      let { permissions: l } = i;
                      return B(i, { permissions: (l = r ? u.IH(l, n) : u.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = F(t);
                      return null != r && B(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = F(t);
                      return null != n && B(n, { permissions: j.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = F(t);
                      return null != r && B(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = F(t);
                      return null != r && B(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, d.Rf)(n),
                          i = F(t);
                      if (null == i) return !1;
                      let l = k.get(t);
                      return (
                          null != l &&
                          ((l.currentStyle = 'solid'),
                          (l.styleColors.solid = {
                              primary_color: n,
                              secondary_color: void 0,
                              tertiary_color: void 0
                          }),
                          k.set(t, l),
                          B(i, {
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
                          i = F(t);
                      if (null == i) return !1;
                      let l = (0, h.D)(n),
                          s = k.get(t);
                      return (
                          null != s &&
                          ((s.styleColors[r] = n),
                          (s.currentStyle = r),
                          k.set(t, s),
                          B(i, {
                              color: null != n.primary_color ? n.primary_color : void 0,
                              colors: n,
                              colorString: l.primaryColor,
                              colorStrings: l
                          }))
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = F(t);
                      return (
                          null != i &&
                          B(i, {
                              hoist: n,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = F(t);
                      return (
                          null != i &&
                          B(i, {
                              icon: n,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != F(t.id)) return void B(t, t);
                          (T = [...T, t]), U();
                      }
                  },
                  GUILD_SETTINGS_ROLES_ROLE_STYLE_UPDATE: function (e) {
                      var t;
                      let { id: n, currentStyle: r } = e,
                          i = F(n);
                      if (null == i) return !1;
                      let l = k.get(n);
                      if (null == l) return !1;
                      k.set(n, {
                          currentStyle: r,
                          styleColors: l.styleColors
                      });
                      let s = l.styleColors[r],
                          a = (0, h.D)(s);
                      return B(i, {
                          color: null != (t = s.primary_color) ? t : void 0,
                          colors: s,
                          colorString: a.primaryColor,
                          colorStrings: a
                      });
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = F(t);
                      if (null == r) return !1;
                      let i = Z.get(r.id);
                      if (c().isEqual(i, n)) return !1;
                      D.set(r.id, n), Z.set(r.id, n), U();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = F(t);
                      if (null == r) return !1;
                      (w = !0), R.add(r.id), D.set(r.id, n), U();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null), (P = T = []), Z.clear(), N.clear(), k.clear(), D.clear(), (R = new Set()), (E = !1), (S = !1), (w = !1), (I = v.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: z,
                  GUILD_ROLE_UPDATE: z,
                  GUILD_ROLE_DELETE: function (e) {
                      return R.has(e.roleId) && (R.delete(e.roleId), Z.delete(e.roleId), D.delete(e.roleId), (w = !1)), z(e);
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      I = v.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (I = v.QZA.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      M(!1);
                  }
              }
    ),
    V = W;
