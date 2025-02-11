let i, r, l;
n.d(t, { Z: () => B }), n(47120);
var s,
    a,
    o,
    c = n(392711),
    d = n.n(c),
    u = n(149765),
    m = n(866442),
    h = n(442837),
    g = n(570140),
    x = n(561654),
    p = n(430824),
    _ = n(990492),
    C = n(823379),
    f = n(700785),
    v = n(999382),
    N = n(981631);
let j = new Set(),
    I = N.QZA.CLOSED,
    E = !1,
    b = !1,
    T = [],
    S = [],
    R = !1,
    Z = new Set(),
    y = new Map(),
    A = new Map();
function L() {
    if (null == i || null == T) return [];
    let e = d()(p.Z.getRoles(i.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return _.ZP.calculatePositionDeltas({
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
function D(e) {
    let { section: t } = e;
    if (null != i || t !== N.pNK.ROLES) return !1;
    k();
}
function k() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = v.Z.getProps().guild),
        (E = !1),
        (b = !1),
        (l = void 0),
        j.clear(),
        (I = N.QZA.OPEN),
        (S = [
            ...(T =
                null != i
                    ? d()(p.Z.getRoles(i.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        (R = !1),
        e &&
            (A.clear(),
            y.forEach((e, t) => {
                A.set(t, [...e]);
            }));
}
let O = d().debounce(() => {
    let e = !1;
    !b || (b = L().length > 0) || (e = !0),
        [...j].forEach((t) => {
            var n;
            d().isEqual(
                w(t),
                ((n = t),
                S.find((e) => {
                    let { id: t } = e;
                    return t === n;
                }))
            ) && (j.delete(t), (e = !0));
        }),
        0 === j.size && (E = !1),
        R && d().isEqual(y, A) && ((e = !0), (R = !1)),
        e && G.emitChange();
}, 500);
function P(e, t) {
    let n = T.indexOf(e);
    if (n < 0) return !1;
    let i = {
        ...e,
        ...t
    };
    (T[n] = i), (T = [...T]), (E = !0), j.add(i.id), O();
}
function w(e) {
    return T.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function M(e) {
    let { guildId: t } = e;
    if (null == i || t !== i.id || I === N.QZA.SUBMITTING) return !1;
    i = v.Z.getProps().guild;
    let n = [];
    null != i &&
        (n = d()(p.Z.getRoles(i.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        j.forEach((e) => {
            let t = w(e),
                i = -1;
            null ==
                n.find((t, n) => {
                    let { id: r } = t;
                    if (r === e) return (i = n), !0;
                }) || null == t
                ? j.delete(e)
                : (n[i] = t);
        }),
        0 === j.size && (E = !1),
        (b = !1),
        (T = [...n]);
}
class U extends (s = h.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, x.Z, p.Z);
    }
    hasChanges() {
        return E || b || R;
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return b;
    }
    get hasRoleConfigurationChanges() {
        return R;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(j);
    }
    get editedRoleIdsForConfigurations() {
        return Z;
    }
    get roles() {
        return T;
    }
    get formState() {
        return I;
    }
    getSortDeltas() {
        return L();
    }
    showNotice() {
        return this.hasChanges();
    }
    getRole(e) {
        return w(e);
    }
    getPermissionSearchQuery() {
        return r;
    }
    getEditedRoleConnectionConfigurationsMap() {
        return A;
    }
}
(o = 'GuildSettingsRolesStore'),
    (a = 'displayName') in U
        ? Object.defineProperty(U, a, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (U[a] = o);
let G = new U(
        g.Z,
        __OVERLAY__
            ? {}
            : {
                  GUILD_SETTINGS_ROLES_INIT: () => k(),
                  GUILD_SETTINGS_INIT: D,
                  GUILD_SETTINGS_SET_SECTION: D,
                  GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                      let { roles: t } = e;
                      if (null != T && t.length !== T.length) return !1;
                      (T = t.map((e) => w(e)).filter(C.lm)), (b = !0), O();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                      let { id: t, flag: n, allow: i } = e,
                          r = w(t);
                      if (null == r) return !1;
                      let { permissions: l } = r;
                      return P(r, { permissions: (l = i ? u.IH(l, n) : u.Od(l, n)) });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                      let { id: t, permissions: n } = e,
                          i = w(t);
                      return null != i && P(i, { permissions: n });
                  },
                  GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                      let { id: t } = e,
                          n = w(t);
                      return null != n && P(n, { permissions: f.Hn });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
                      let { id: t, name: n } = e,
                          i = w(t);
                      return null != i && P(i, { name: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
                      let { id: t, description: n } = e,
                          i = w(t);
                      return null != i && P(i, { description: n });
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
                      let { id: t, color: n } = e,
                          i = 0 === n ? null : (0, m.Rf)(n),
                          r = w(t);
                      return (
                          null != r &&
                          P(r, {
                              color: n,
                              colorString: i
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
                      let { id: t, hoist: n, mentionable: i } = e,
                          r = w(t);
                      return (
                          null != r &&
                          P(r, {
                              hoist: n,
                              mentionable: i
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
                      let { id: t, icon: n, unicodeEmoji: i } = e,
                          r = w(t);
                      return (
                          null != r &&
                          P(r, {
                              icon: n,
                              unicodeEmoji: i
                          })
                      );
                  },
                  GUILD_SETTINGS_ROLE_SELECT: function (e) {
                      let { role: t, searchQuery: n } = e;
                      if (((r = n), null != t)) {
                          if (null != w(t.id)) {
                              P(t, t);
                              return;
                          }
                          (T = [...T, t]), O();
                      }
                  },
                  GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = w(t);
                      if (null == i) return !1;
                      let r = y.get(i.id);
                      if (d().isEqual(r, n)) return !1;
                      A.set(i.id, n), y.set(i.id, n), O();
                  },
                  GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                      let { roleId: t, roleConnectionConfigurations: n } = e,
                          i = w(t);
                      if (null == i) return !1;
                      (R = !0), Z.add(i.id), A.set(i.id, n), O();
                  },
                  GUILD_SETTINGS_CLOSE: function () {
                      (i = null), (S = T = []), y.clear(), j.clear(), A.clear(), (Z = new Set()), (E = !1), (b = !1), (R = !1), (I = N.QZA.CLOSED);
                  },
                  GUILD_ROLE_CREATE: M,
                  GUILD_ROLE_UPDATE: M,
                  GUILD_ROLE_DELETE: function (e) {
                      return Z.has(e.roleId) && (Z.delete(e.roleId), y.delete(e.roleId), A.delete(e.roleId), (R = !1)), M(e);
                  },
                  GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                      I = N.QZA.SUBMITTING;
                  },
                  GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                      let { message: t } = e;
                      (I = N.QZA.OPEN), (l = t);
                  },
                  GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                      k(!1);
                  }
              }
    ),
    B = G;
