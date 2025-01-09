let i, r, l;
n(47120);
var s,
    a,
    o,
    c,
    d = n(392711),
    u = n.n(d),
    m = n(149765),
    h = n(866442),
    g = n(442837),
    x = n(570140),
    p = n(561654),
    f = n(430824),
    C = n(990492),
    v = n(823379),
    N = n(700785),
    _ = n(999382),
    I = n(981631);
let T = new Set(),
    j = I.QZA.CLOSED,
    b = !1,
    E = !1,
    S = [],
    R = [],
    y = !1,
    A = new Set(),
    Z = new Map(),
    L = new Map();
function D() {
    if (null == i || null == S) return [];
    let e = u()(f.Z.getRoles(i.id))
        .values()
        .sortBy((e) => {
            let { position: t } = e;
            return t;
        })
        .reverse()
        .value();
    return C.ZP.calculatePositionDeltas({
        oldOrdering: e,
        newOrdering: S,
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
function O(e) {
    let { section: t } = e;
    if (null != i || t !== I.pNK.ROLES) return !1;
    M();
}
function M() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
    (i = _.Z.getProps().guild),
        (b = !1),
        (E = !1),
        (l = void 0),
        T.clear(),
        (j = I.QZA.OPEN),
        (R = [
            ...(S =
                null != i
                    ? u()(f.Z.getRoles(i.id))
                          .values()
                          .sortBy((e) => {
                              let { position: t } = e;
                              return t;
                          })
                          .reverse()
                          .value()
                    : [])
        ]),
        (y = !1),
        e &&
            (L.clear(),
            Z.forEach((e, t) => {
                L.set(t, [...e]);
            }));
}
let k = u().debounce(() => {
    let e = !1;
    E && !(E = D().length > 0) && (e = !0),
        [...T].forEach((t) => {
            u().isEqual(
                w(t),
                (function (e) {
                    return R.find((t) => {
                        let { id: n } = t;
                        return n === e;
                    });
                })(t)
            ) && (T.delete(t), (e = !0));
        }),
        0 === T.size && (b = !1),
        y && u().isEqual(Z, L) && ((e = !0), (y = !1)),
        e && G.emitChange();
}, 500);
function P(e, t) {
    let n = S.indexOf(e);
    if (n < 0) return !1;
    let i = {
        ...e,
        ...t
    };
    (S[n] = i), (S = [...S]), (b = !0), T.add(i.id), k();
}
function w(e) {
    return S.find((t) => {
        let { id: n } = t;
        return n === e;
    });
}
function B(e) {
    let { guildId: t } = e;
    if (null == i || t !== i.id || j === I.QZA.SUBMITTING) return !1;
    i = _.Z.getProps().guild;
    let n = [];
    null != i &&
        (n = u()(f.Z.getRoles(i.id))
            .values()
            .sortBy((e) => {
                let { position: t } = e;
                return t;
            })
            .reverse()
            .value()),
        T.forEach((e) => {
            let t = w(e),
                i = -1;
            null ==
                n.find((t, n) => {
                    let { id: r } = t;
                    if (r === e) return (i = n), !0;
                }) || null == t
                ? T.delete(e)
                : (n[i] = t);
        }),
        0 === T.size && (b = !1),
        (E = !1),
        (S = [...n]);
}
class U extends (s = g.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, p.Z, f.Z);
    }
    hasChanges() {
        return b || E || y;
    }
    get errorMessage() {
        return l;
    }
    get hasSortChanges() {
        return E;
    }
    get hasRoleConfigurationChanges() {
        return y;
    }
    get guild() {
        return i;
    }
    get editedRoleIds() {
        return Array.from(T);
    }
    get editedRoleIdsForConfigurations() {
        return A;
    }
    get roles() {
        return S;
    }
    get formState() {
        return j;
    }
    getSortDeltas() {
        return D();
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
        return L;
    }
}
(c = 'GuildSettingsRolesStore'),
    (o = 'displayName') in (a = U)
        ? Object.defineProperty(a, o, {
              value: c,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[o] = c);
let G = new U(
    x.Z,
    __OVERLAY__
        ? {}
        : {
              GUILD_SETTINGS_ROLES_INIT: () => M(),
              GUILD_SETTINGS_INIT: O,
              GUILD_SETTINGS_SET_SECTION: O,
              GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
                  let { roles: t } = e;
                  if (null != S && t.length !== S.length) return !1;
                  (S = t.map((e) => w(e)).filter(v.lm)), (E = !0), k();
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
                  let { id: t, flag: n, allow: i } = e,
                      r = w(t);
                  if (null == r) return !1;
                  let { permissions: l } = r;
                  return P(r, { permissions: (l = i ? m.IH(l, n) : m.Od(l, n)) });
              },
              GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
                  let { id: t, permissions: n } = e,
                      i = w(t);
                  return null != i && P(i, { permissions: n });
              },
              GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
                  let { id: t } = e,
                      n = w(t);
                  return null != n && P(n, { permissions: N.Hn });
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
                      i = 0 === n ? null : (0, h.Rf)(n),
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
                      (S = [...S, t]), k();
                  }
              },
              GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = w(t);
                  if (null == i) return !1;
                  let r = Z.get(i.id);
                  if (u().isEqual(r, n)) return !1;
                  L.set(i.id, n), Z.set(i.id, n), k();
              },
              GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
                  let { roleId: t, roleConnectionConfigurations: n } = e,
                      i = w(t);
                  if (null == i) return !1;
                  (y = !0), A.add(i.id), L.set(i.id, n), k();
              },
              GUILD_SETTINGS_CLOSE: function () {
                  (i = null), (R = S = []), Z.clear(), T.clear(), L.clear(), (A = new Set()), (b = !1), (E = !1), (y = !1), (j = I.QZA.CLOSED);
              },
              GUILD_ROLE_CREATE: B,
              GUILD_ROLE_UPDATE: B,
              GUILD_ROLE_DELETE: function (e) {
                  return A.has(e.roleId) && (A.delete(e.roleId), Z.delete(e.roleId), L.delete(e.roleId), (y = !1)), B(e);
              },
              GUILD_SETTINGS_ROLES_SUBMITTING: function () {
                  j = I.QZA.SUBMITTING;
              },
              GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
                  let { message: t } = e;
                  (j = I.QZA.OPEN), (l = t);
              },
              GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
                  M(!1);
              }
          }
);
t.Z = G;
