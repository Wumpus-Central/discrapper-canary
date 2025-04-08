let r, i, s;
n.d(t, { Z: () => U }), n(388685), n(583741), n(953529);
var a,
    l = n(392711),
    o = n.n(l),
    c = n(149765),
    d = n(866442),
    u = n(442837),
    m = n(570140),
    g = n(561654),
    p = n(393031),
    h = n(430824),
    f = n(990492),
    b = n(823379),
    x = n(700785),
    j = n(999382),
    N = n(981631);
function _(e, t, n) {
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
let v = new Set(),
    y = N.QZA.CLOSED,
    C = !1,
    O = !1,
    I = [],
    E = [],
    S = !1,
    T = new Set(),
    P = new Map(),
    w = new Map();
function R() {
    if (null == r || null == I) return [];
    let e = o()(h.Z.getRoles(r.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return f.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: I,
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
function D(e) {
    let { section: t } = e;
    if (null != r || t !== N.pNK.ROLES) return !1;
    Z();
}
function Z() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = j.Z.getProps().guild),
        (C = !1),
        (O = !1),
        (s = void 0),
        v.clear(),
        (y = N.QZA.OPEN),
        (E = [
            ...(I =
                null != r
                    ? o()(h.Z.getRoles(r.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        (S = !1),
        e &&
            (w.clear(),
            P.forEach((e, t) => {
                w.set(t, [...e]);
            }));
}
let A = o().debounce(() => {
    let e = !1;
    O && ((O = R().length > 0) || (e = !0)),
        [...v].forEach((t) => {
            var n;
            o().isEqual(
                W(t),
                ((n = t),
                E.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (v.delete(t), (e = !0));
        }),
        0 === v.size && (C = !1),
        S && o().isEqual(P, w) && ((e = !0), (S = !1)),
        e && G.emitChange();
}, 500);
function k(e, t) {
    let n = I.indexOf(e);
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
                    _(e, t, n[t]);
                });
        }
        return e;
    })({}, e, t);
    (I[n] = r), (I = [...I]), (C = !0), v.add(r.id), A();
}
function W(e) {
    return I.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function L(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || y === N.QZA.SUBMITTING) return !1;
    r = j.Z.getProps().guild;
    let n = [];
    null != r &&
        (n = o()(h.Z.getRoles(r.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        v.forEach((e) => {
            let t = W(e),
                r = -1;
            null ==
                n.find((t, n) => {
                    let { id: i } = t;
                    if (i === e) return (r = n), !0;
                }) || null == t
                ? v.delete(e)
                : (n[r] = t);
        }),
        0 === v.size && (C = !1),
        (O = !1),
        (I = [...n]);
}
class M extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, g.Z, h.Z);
    }
    hasChanges() {
        return C || O || S;
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return O;
    }
    get hasRoleConfigurationChanges() {
        return S;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(v);
    }
    get editedRoleIdsForConfigurations() {
        return T;
    }
    get roles() {
        return I;
    }
    get formState() {
        return y;
    }
    getSortDeltas() {
        return R();
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
        return w;
    }
}
_(M, 'displayName', 'GuildSettingsRolesStore');
let G = new M(
        m.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => Z(),
                  GUILD_SETTINGS_INIT: D,
                  GUILD_SETTINGS_SET_SECTION: D,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != I && t.length !== I.length) return !1;
                      (I = t.map((e) => W(e)).filter(b.lm)), (O = !0), A();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = W(t);
                      if (null == i) return !1;
                      let { permissions: s } = i;
                      return k(i, { permissions: (s = r ? c.IH(s, n) : c.Od(s, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = W(t);
                      return null != r && k(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = W(t);
                      return null != n && k(n, { permissions: x.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = W(t);
                      return null != r && k(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = W(t);
                      return null != r && k(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, d.Rf)(n),
                          i = W(t);
                      return (
                          null != i &&
                          k(i, {
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
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLORS: function (e) {
                      let { id: t, colors: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      let i = (0, p.Z)(n);
                      return k(r, {
                          color: n.primary_color,
                          colors: n,
                          colorString: i.primaryColor,
                          colorStrings: i
                      });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          k(i, {
                              hoist: n,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = W(t);
                      return (
                          null != i &&
                          k(i, {
                              icon: n,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != W(t.id)) return void k(t, t);
                          (I = [...I, t]), A();
                      }
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      let i = P.get(r.id);
                      if (o().isEqual(i, n)) return !1;
                      w.set(r.id, n), P.set(r.id, n), A();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = W(t);
                      if (null == r) return !1;
                      (S = !0), T.add(r.id), w.set(r.id, n), A();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null), (E = I = []), P.clear(), v.clear(), w.clear(), (T = new Set()), (C = !1), (O = !1), (S = !1), (y = N.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: L,
                  GUILD_ROLE_UPDATE: L,
                  GUILD_ROLE_DELETE: function (e) {
                      return T.has(e.roleId) && (T.delete(e.roleId), P.delete(e.roleId), w.delete(e.roleId), (S = !1)), L(e);
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      y = N.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (y = N.QZA.OPEN), (s = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      Z(!1);
                  }
              }
    ),
    U = G;
