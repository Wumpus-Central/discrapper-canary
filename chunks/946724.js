let r, i, s;
n.d(t, { Z: () => U }), n(47120), n(978209), n(266796);
var a,
    l = n(392711),
    o = n.n(l),
    c = n(149765),
    d = n(866442),
    u = n(442837),
    m = n(570140),
    p = n(561654),
    g = n(430824),
    h = n(990492),
    f = n(823379),
    b = n(700785),
    x = n(999382),
    j = n(981631);
function N(e, t, n) {
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
    _ = j.QZA.CLOSED,
    O = !1,
    y = !1,
    C = [],
    I = [],
    E = !1,
    S = new Set(),
    T = new Map(),
    P = new Map();
function w() {
    if (null == r || null == C) return [];
    let e = o()(g.Z.getRoles(r.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return h.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: C,
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
function R(e) {
    let { section: t } = e;
    if (null != r || t !== j.pNK.ROLES) return !1;
    D();
}
function D() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (r = x.Z.getProps().guild),
        (O = !1),
        (y = !1),
        (s = void 0),
        v.clear(),
        (_ = j.QZA.OPEN),
        (I = [
            ...(C =
                null != r
                    ? o()(g.Z.getRoles(r.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        (E = !1),
        e &&
            (P.clear(),
            T.forEach((e, t) => {
                P.set(t, [...e]);
            }));
}
let Z = o().debounce(() => {
    let e = !1;
    !y || (y = w().length > 0) || (e = !0),
        [...v].forEach((t) => {
            var n;
            o().isEqual(
                k(t),
                ((n = t),
                I.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (v.delete(t), (e = !0));
        }),
        0 === v.size && (O = !1),
        E && o().isEqual(T, P) && ((e = !0), (E = !1)),
        e && M.emitChange();
}, 500);
function A(e, t) {
    let n = C.indexOf(e);
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
                    N(e, t, n[t]);
                });
        }
        return e;
    })({}, e, t);
    (C[n] = r), (C = [...C]), (O = !0), v.add(r.id), Z();
}
function k(e) {
    return C.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function W(e) {
    let { guildId: t } = e;
    if (null == r || t !== r.id || _ === j.QZA.SUBMITTING) return !1;
    r = x.Z.getProps().guild;
    let n = [];
    null != r &&
        (n = o()(g.Z.getRoles(r.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        v.forEach((e) => {
            let t = k(e),
                r = -1;
            null ==
                n.find((t, n) => {
                    let { id: i } = t;
                    if (i === e) return (r = n), !0;
                }) || null == t
                ? v.delete(e)
                : (n[r] = t);
        }),
        0 === v.size && (O = !1),
        (y = !1),
        (C = [...n]);
}
class L extends (a = u.ZP.Store) {
    initialize() {
        this.waitFor(x.Z, p.Z, g.Z);
    }
    hasChanges() {
        return O || y || E;
    }
    get errorMessage() {
        return s;
    }
    get hasSortChanges() {
        return y;
    }
    get hasRoleConfigurationChanges() {
        return E;
    }
    get guild() {
        return r;
    }
    get editedRoleIds() {
        return Array.from(v);
    }
    get editedRoleIdsForConfigurations() {
        return S;
    }
    get roles() {
        return C;
    }
    get formState() {
        return _;
    }
    getSortDeltas() {
        return w();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return k(e);
    }
    getPermissionSearchQuery() {
        return i;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return P;
    }
}
N(L, 'displayName', 'GuildSettingsRolesStore');
let M = new L(
        m.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => D(),
                  GUILD_SETTINGS_INIT: R,
                  GUILD_SETTINGS_SET_SECTION: R,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != C && t.length !== C.length) return !1;
                      (C = t.map((e) => k(e)).filter(f.lm)), (y = !0), Z();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: r } = e,
                          i = k(t);
                      if (null == i) return !1;
                      let { permissions: s } = i;
                      return A(i, { permissions: (s = r ? c.IH(s, n) : c.Od(s, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          r = k(t);
                      return null != r && A(r, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = k(t);
                      return null != n && A(n, { permissions: b.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          r = k(t);
                      return null != r && A(r, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          r = k(t);
                      return null != r && A(r, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          r = 0 === n ? null : (0, d.Rf)(n),
                          i = k(t);
                      return (
                          null != i &&
                          A(i, {
                              color: n,
                              colorString: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: r } = e,
                          i = k(t);
                      return (
                          null != i &&
                          A(i, {
                              hoist: n,
                              mentionable: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: r } = e,
                          i = k(t);
                      return (
                          null != i &&
                          A(i, {
                              icon: n,
                              unicodeEmoji: r
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((i = n), null != t)) {
                          if (null != k(t.id)) {
                              A(t, t);
                              return;
                          }
                          (C = [...C, t]), Z();
                      }
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = k(t);
                      if (null == r) return !1;
                      let i = T.get(r.id);
                      if (o().isEqual(i, n)) return !1;
                      P.set(r.id, n), T.set(r.id, n), Z();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          r = k(t);
                      if (null == r) return !1;
                      (E = !0), S.add(r.id), P.set(r.id, n), Z();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (r = null), (I = C = []), T.clear(), v.clear(), P.clear(), (S = new Set()), (O = !1), (y = !1), (E = !1), (_ = j.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: W,
                  GUILD_ROLE_UPDATE: W,
                  GUILD_ROLE_DELETE: function (e) {
                      return S.has(e.roleId) && (S.delete(e.roleId), T.delete(e.roleId), P.delete(e.roleId), (E = !1)), W(e);
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      _ = j.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (_ = j.QZA.OPEN), (s = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      D(!1);
                  }
              }
    ),
    U = M;
