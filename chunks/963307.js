"use strict";
n.d(t, { Ay: () => k, QP: () => O, S9: () => L, sN: () => R }), n(321073);
var i,
    r = n(435558),
    a = n.n(r),
    s = n(181370),
    l = n.n(s),
    o = n(136722),
    d = n(17928),
    c = n(228366),
    u = n(736056),
    _ = n(488926),
    E = n(616356),
    A = n(280450),
    h = n(734057),
    I = n(498642),
    f = n(696451),
    p = n(317525),
    T = n(71393),
    m = n(290863),
    g = n(461213),
    S = n(287809),
    N = n(652215),
    C = n(375708);
let O = "everyone",
    R = 0;
var L =
    (((i = {}).GROUP = "GROUP"),
    (i.MEMBER = "MEMBER"),
    (i.CONTENT_INVENTORY = "CONTENT_INVENTORY"),
    (i.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP"),
    (i.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY"),
    (i.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD"),
    i);
function y(e, t, n, i) {
    switch (t) {
        case N.clD.ONLINE:
        case N.clD.OFFLINE:
        case N.clD.UNKNOWN:
            return {
                type: "GROUP",
                key: t,
                id: t,
                get title() {
                    switch (t) {
                        case N.clD.ONLINE:
                            return C.intl.string(C.t.WbGtnH);
                        case N.clD.OFFLINE:
                            return C.intl.string(C.t.Vv0abJ);
                        default:
                            return C.intl.string(C.t["UQMV/E"]);
                    }
                },
                count: n,
                index: i,
            };
        default:
            let r = T.A.getGuild(e),
                a = null != r ? p.A.getRole(r.id, t) : null;
            return { type: "GROUP", key: t, id: t, title: null != a ? a.name : "", count: n, index: i };
    }
}
function D(e, t, n) {
    let i = n === A.default.getId(),
        r = m.A.isMobileOnline(n),
        a = m.A.isVROnline(n),
        s = i ? g.A.getStatus() : m.A.getStatus(n, e),
        l = i ? g.A.getActivities() : m.A.getActivities(n, e),
        o = E.A.getStreamForUser(n, e),
        d = S.default.getUser(n);
    return null == d
        ? null
        : {
              type: "MEMBER",
              ...f.Ay.getMember(e, n),
              user: d,
              status: s,
              activities: l,
              applicationStream: o,
              isOwner: t === n,
              isMobileOnline: r,
              isVROnline: a,
          };
}
function v(e) {
    var t;
    let n = h.A.getChannel(e);
    return null == n
        ? O
        : null == n.memberListId
          ? ((t = n),
            _.Ib(N.xBc.VIEW_CHANNEL, t)
                ? O
                : l()
                      .v3(
                          a()(t.permissionOverwrites)
                              .reduce((e, t) => {
                                  let { id: n, allow: i, deny: r } = t;
                                  return (
                                      o.zy(i, N.xBc.VIEW_CHANNEL)
                                          ? e.push(`allow:${n}`)
                                          : o.zy(r, N.xBc.VIEW_CHANNEL) && e.push(`deny:${n}`),
                                      e
                                  );
                              }, [])
                              .sort()
                              .join(","),
                      )
                      .toString())
          : n.memberListId;
}
class b {
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
        let e = T.A.getGuild(this.guildId);
        if (null == e) return !1;
        let t = _.wT(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            let n = t,
                i = Math.max(0, e.count ?? 0);
            return (t += i + 1), y(this.guildId, e.id, i, n);
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
        let { group: n, member: i } = t;
        if (null != n) this.rows.splice(e, 0, y(this.guildId, n.id, n.count));
        else if (null != i) {
            let t = D(this.guildId, this.ownerId, i.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[i.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: i } = t,
            r = this.rows[e];
        if ((null != r && "MEMBER" === r.type && delete this.members[r.user.id], null != n))
            this.rows[e] = y(this.guildId, n.id, n.count);
        else if (null != i) {
            let t = D(this.guildId, this.ownerId, i.user.id);
            if (null == t) return;
            (this.rows[e] = t), (this.members[i.user.id] = t);
        }
        this.version++;
    }
    delete(e) {
        let t = this.rows[e];
        null != t && ("MEMBER" === t.type && delete this.members[t.user.id], this.rows.splice(e, 1), this.version++);
    }
    rebuildMember(e) {
        let t = this.members[e];
        null != t && (Object.assign(t, D(this.guildId, this.ownerId, e)), this.version++);
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
        null != n && (this.groups.splice(t, 1, y(this.guildId, e, n.count, n.index)), this.version++);
    }
}
let M = new (class {
    _guildLists = {};
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let i = n[t];
        return null == i && ((i = new b(e, t)).setGroups([{ id: N.clD.UNKNOWN, count: 0 }]), (n[t] = i)), i;
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
})();
function P() {
    M.reset();
}
let U = [];
function w() {
    let e = E.A.getAllApplicationStreams(),
        t = U.concat(e);
    (U = e),
        t.forEach((e) => {
            M.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function G() {
    let e = A.default.getId();
    M.forEach(null, (t) => t.rebuildMember(e));
}
class x extends d.Ay.Store {
    static displayName = "ChannelMemberStore";
    initialize() {
        this.waitFor(S.default, T.A, p.A, h.A, f.Ay, m.A, g.A, A.default, I.A, E.A, u.A),
            this.syncWith([g.A], G),
            this.syncWith([E.A], w);
    }
    getProps(e, t) {
        let n = M.get(e, v(t));
        return { listId: `${n.guildId}:${n.listId}`, groups: n.groups, rows: n.rows, version: n.version };
    }
    getRows(e, t) {
        return M.get(e, v(t)).rows;
    }
}
let k = new x(c.h, {
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let t = M.get(e.guildId, e.id);
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
        M.forEach(t.id, (e) => {
            e.updateOwnerId() && e.rebuildMembers();
        });
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        M.delete(t.id);
    },
    GUILD_ROLE_UPDATE: function (e) {
        let { guildId: t, role: n } = e;
        M.forEach(t, (e) => {
            e.rebuildGroup(n.id), e.rebuildMembers();
        });
    },
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        M.forEach(t, (e) => e.rebuildMember(n.id));
    },
    CHANNEL_UPDATES: function () {
        return !0;
    },
});
