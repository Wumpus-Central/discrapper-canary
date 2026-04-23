"use strict";
n.d(t, { Ay: () => G, QP: () => v, S9: () => O, sN: () => C }), n(321073);
var r,
    i = n(735438),
    s = n.n(i),
    a = n(181370),
    o = n.n(a),
    l = n(136722),
    u = n(311907),
    c = n(73153),
    d = n(49463),
    _ = n(488926),
    f = n(616356),
    p = n(961350),
    h = n(734057),
    E = n(498642),
    m = n(696451),
    g = n(317525),
    A = n(71393),
    I = n(290863),
    T = n(461213),
    S = n(287809),
    y = n(652215),
    N = n(985018);
let v = "everyone",
    C = 0;
var O =
    (((r = {}).GROUP = "GROUP"),
    (r.MEMBER = "MEMBER"),
    (r.CONTENT_INVENTORY = "CONTENT_INVENTORY"),
    (r.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP"),
    (r.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY"),
    (r.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD"),
    r);
function R(e, t, n, r) {
    switch (t) {
        case y.clD.ONLINE:
        case y.clD.OFFLINE:
        case y.clD.UNKNOWN:
            return {
                type: "GROUP",
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case y.clD.ONLINE:
                            return N.intl.string(N.t.WbGtnH);
                        case y.clD.OFFLINE:
                            return N.intl.string(N.t.Vv0abJ);
                        default:
                            return N.intl.string(N.t["UQMV/E"]);
                    }
                },
                count: n,
                index: r,
            };
        default:
            let i = A.A.getGuild(e),
                s = null != i ? g.A.getRole(i.id, t) : null;
            return { type: "GROUP", key: t, id: t, title: null != s ? s.name : "", count: n, index: r };
    }
}
function b(e, t, n) {
    let r = n === p.default.getId(),
        i = I.A.isMobileOnline(n),
        s = I.A.isVROnline(n),
        a = r ? T.A.getStatus() : I.A.getStatus(n, e),
        o = r ? T.A.getActivities() : I.A.getActivities(n, e),
        l = f.A.getStreamForUser(n, e),
        u = S.default.getUser(n);
    return null == u
        ? null
        : {
              type: "MEMBER",
              ...m.Ay.getMember(e, n),
              user: u,
              status: a,
              activities: o,
              applicationStream: l,
              isOwner: t === n,
              isMobileOnline: i,
              isVROnline: s,
          };
}
function D(e) {
    var t;
    let n = h.A.getChannel(e);
    return null == n
        ? v
        : null == n.memberListId
          ? ((t = n),
            _.Ib(y.xBc.VIEW_CHANNEL, t)
                ? v
                : o()
                      .v3(
                          s()(t.permissionOverwrites)
                              .reduce((e, t) => {
                                  let { id: n, allow: r, deny: i } = t;
                                  return (
                                      l.zy(r, y.xBc.VIEW_CHANNEL)
                                          ? e.push(`allow:${n}`)
                                          : l.zy(i, y.xBc.VIEW_CHANNEL) && e.push(`deny:${n}`),
                                      e
                                  );
                              }, [])
                              .sort()
                              .join(","),
                      )
                      .toString())
          : n.memberListId;
}
class L {
    guildId;
    listId;
    ownerId;
    rows = [];
    groups = [];
    members = {};
    version = 0;
    constructor(e, t) {
        (this.guildId = e), (this.listId = t), this.updateOwnerId();
    }
    updateOwnerId() {
        let e = A.A.getGuild(this.guildId);
        if (null == e) return !1;
        let t = _.wT(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            let n = t,
                r = Math.max(0, e.count ?? 0);
            return (t += r + 1), R(this.guildId, e.id, r, n);
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
        if (null != n) this.rows.splice(e, 0, R(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = b(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n))
            this.rows[e] = R(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = b(this.guildId, this.ownerId, r.user.id);
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
        null != t && (Object.assign(t, b(this.guildId, this.ownerId, e)), this.version++);
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
        null != n && (this.groups.splice(t, 1, R(this.guildId, e, n.count, n.index)), this.version++);
    }
}
let w = new (class {
    _guildLists = {};
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return null == r && ((r = new L(e, t)).setGroups([{ id: y.clD.UNKNOWN, count: 0 }]), (n[t] = r)), r;
    }
    forEach(e, t) {
        if (null == e)
            s().forEach(this._guildLists, (e) => {
                s().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && s().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
})();
function M() {
    w.reset();
}
let P = [];
function x() {
    let e = f.A.getAllApplicationStreams(),
        t = P.concat(e);
    (P = e),
        t.forEach((e) => {
            w.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function k() {
    let e = p.default.getId();
    w.forEach(null, (t) => t.rebuildMember(e));
}
class U extends u.Ay.Store {
    static displayName = "ChannelMemberStore";
    initialize() {
        this.waitFor(S.default, A.A, g.A, h.A, m.Ay, I.A, T.A, p.default, E.A, f.A, d.A),
            this.syncWith([T.A], k),
            this.syncWith([f.A], x);
    }
    getProps(e, t) {
        let n = w.get(e, D(t));
        return { listId: `${n.guildId}:${n.listId}`, groups: n.groups, rows: n.rows, version: n.version };
    }
    getRows(e, t) {
        return w.get(e, D(t)).rows;
    }
}
let G = new U(c.h, {
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let t = w.get(e.guildId, e.id);
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
    },
    GUILD_UPDATE: function (e) {
        let { guild: t } = e;
        w.forEach(t.id, (e) => {
            e.updateOwnerId() && e.rebuildMembers();
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        w.delete(t.id);
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t, role: n } = e;
        w.forEach(t, (e) => {
            e.rebuildGroup(n.id), e.rebuildMembers();
        });
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        w.forEach(t, (e) => e.rebuildMember(n.id));
    },
    CHANNEL_UPDATES: function () {
        return !0;
    },
});
