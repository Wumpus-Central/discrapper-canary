n.d(t, {
    Ay: () => Z,
    QP: () => R,
    S9: () => P,
    sN: () => w,
}),
    n(321073),
    n(638769),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(181370),
    o = n.n(s),
    l = n(136722),
    c = n(311907),
    u = n(73153),
    d = n(49463),
    f = n(488926),
    p = n(616356),
    _ = n(961350),
    h = n(734057),
    m = n(498642),
    g = n(696451),
    E = n(317525),
    b = n(71393),
    y = n(290863),
    O = n(461213),
    A = n(287809),
    v = n(652215),
    S = n(985018);
function I(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function T(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                I(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = "everyone",
    w = 0;
var P = (function (e) {
    return (
        (e.GROUP = "GROUP"),
        (e.MEMBER = "MEMBER"),
        (e.CONTENT_INVENTORY = "CONTENT_INVENTORY"),
        (e.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP"),
        (e.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY"),
        (e.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD"),
        e
    );
})({});
function D(e, t, n, r) {
    switch (t) {
        case v.clD.ONLINE:
        case v.clD.OFFLINE:
        case v.clD.UNKNOWN:
            return {
                type: "GROUP",
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case v.clD.ONLINE:
                            return S.intl.string(S.t.WbGtnH);
                        case v.clD.OFFLINE:
                            return S.intl.string(S.t.Vv0abJ);
                        default:
                            return S.intl.string(S.t["UQMV/E"]);
                    }
                },
                count: n,
                index: r,
            };
        default:
            let i = b.A.getGuild(e),
                a = null != i ? E.A.getRole(i.id, t) : null;
            return {
                type: "GROUP",
                key: t,
                id: t,
                title: null != a ? a.name : "",
                count: n,
                index: r,
            };
    }
}
function x(e, t, n) {
    let r = n === _.default.getId(),
        i = y.A.isMobileOnline(n),
        a = r ? O.A.getStatus() : y.A.getStatus(n, e),
        s = r ? O.A.getActivities() : y.A.getActivities(n, e),
        o = p.A.getStreamForUser(n, e),
        l = A.default.getUser(n);
    return null == l
        ? null
        : N(T({ type: "MEMBER" }, g.Ay.getMember(e, n)), {
              user: l,
              status: a,
              activities: s,
              applicationStream: o,
              isOwner: t === n,
              isMobileOnline: i,
          });
}
function L(e) {
    let t = h.A.getChannel(e);
    return null == t ? R : null == t.memberListId ? j(t) : t.memberListId;
}
function j(e) {
    return f.Ib(v.xBc.VIEW_CHANNEL, e)
        ? R
        : o()
              .v3(
                  a()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: r, deny: i } = t;
                          return (
                              l.zy(r, v.xBc.VIEW_CHANNEL)
                                  ? e.push("allow:".concat(n))
                                  : l.zy(i, v.xBc.VIEW_CHANNEL) && e.push("deny:".concat(n)),
                              e
                          );
                      }, [])
                      .sort()
                      .join(","),
              )
              .toString();
}
class M {
    updateOwnerId() {
        let e = b.A.getGuild(this.guildId);
        if (null == e) return !1;
        let t = f.wT(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            var n;
            let r = t,
                i = Math.max(0, null != (n = e.count) ? n : 0);
            return (t += i + 1), D(this.guildId, e.id, i, r);
        })),
            (this.rows.length = t);
    }
    sync(e, t) {
        let [n] = e;
        t.forEach((e, t) => this.update(n + t, e));
    }
    invalidate(e) {
        let [t, n] = e;
        for (let e = t; e <= n; e++) {
            let t = this.rows[e];
            if (null == t) break;
            delete this.rows[e], "MEMBER" === t.type && delete this.members[t.user.id];
        }
        this.version++;
    }
    insert(e, t) {
        let { group: n, member: r } = t;
        if (null != n) this.rows.splice(e, 0, D(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = x(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n))
            this.rows[e] = D(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = x(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++);
    }
    rebuildMember(e) {
        let t = this.members[e];
        null != t && (Object.assign(t, x(this.guildId, this.ownerId, e)), this.version++);
    }
    rebuildMembers() {
        let e = Object.keys(this.members);
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            this.rebuildMember(n);
        }
    }
    rebuildGroup(e) {
        let t = this.groups.findIndex((t) => t.id === e),
            n = this.groups[t];
        null != n && (this.groups.splice(t, 1, D(this.guildId, e, n.count, n.index)), this.version++);
    }
    constructor(e, t) {
        I(this, "guildId", void 0),
            I(this, "listId", void 0),
            I(this, "ownerId", void 0),
            I(this, "rows", []),
            I(this, "groups", []),
            I(this, "members", {}),
            I(this, "version", 0),
            (this.guildId = e),
            (this.listId = t),
            this.updateOwnerId();
    }
}
class k {
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return (
            null == r &&
                ((r = new M(e, t)).setGroups([
                    {
                        id: v.clD.UNKNOWN,
                        count: 0,
                    },
                ]),
                (n[t] = r)),
            r
        );
    }
    forEach(e, t) {
        if (null == e)
            a().forEach(this._guildLists, (e) => {
                a().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && a().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
    constructor() {
        I(this, "_guildLists", {});
    }
}
let U = new k();
function G(e) {
    let t = U.get(e.guildId, e.id);
    e.ops.forEach((e) => {
        switch (e.op) {
            case "SYNC":
                t.sync(e.range, e.items);
                break;
            case "INVALIDATE":
                t.invalidate(e.range);
                break;
            case "INSERT":
                t.insert(e.index, e.item);
                break;
            case "UPDATE":
                t.update(e.index, e.item);
                break;
            case "DELETE":
                t.delete(e.index);
        }
    }),
        t.setGroups(e.groups);
}
function V() {
    U.reset();
}
function F(e) {
    let { guild: t } = e;
    U.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function B(e) {
    let { guild: t } = e;
    U.delete(t.id);
}
function H(e) {
    let { guildId: t, role: n } = e;
    U.forEach(t, (e) => {
        e.rebuildGroup(n.id), e.rebuildMembers();
    });
}
function Y(e) {
    let { guildId: t, user: n } = e;
    U.forEach(t, (e) => e.rebuildMember(n.id));
}
let W = [];
function K() {
    let e = p.A.getAllApplicationStreams(),
        t = W.concat(e);
    (W = e),
        t.forEach((e) => {
            U.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function z() {
    let e = _.default.getId();
    U.forEach(null, (t) => t.rebuildMember(e));
}
function q() {
    return !0;
}
class X extends (r = c.Ay.Store) {
    initialize() {
        this.waitFor(A.default, b.A, E.A, h.A, g.Ay, y.A, O.A, _.default, m.A, p.A, d.A),
            this.syncWith([O.A], z),
            this.syncWith([p.A], K);
    }
    getProps(e, t) {
        let n = U.get(e, L(t));
        return {
            listId: "".concat(n.guildId, ":").concat(n.listId),
            groups: n.groups,
            rows: n.rows,
            version: n.version,
        };
    }
    getRows(e, t) {
        return U.get(e, L(t)).rows;
    }
}
I(X, "displayName", "ChannelMemberStore");
let Z = new X(u.h, {
    CONNECTION_OPEN: V,
    OVERLAY_INITIALIZE: V,
    GUILD_MEMBER_LIST_UPDATE: G,
    GUILD_UPDATE: F,
    GUILD_DELETE: B,
    GUILD_ROLE_UPDATE: H,
    GUILD_MEMBER_UPDATE: Y,
    CHANNEL_UPDATES: q,
});
