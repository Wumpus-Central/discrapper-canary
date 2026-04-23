"use strict";
n.d(t, { Ay: () => G, QP: () => R, S9: () => y, sN: () => O }), n(321073);
var i,
    r = n(735438),
    s = n.n(r),
    a = n(181370),
    o = n.n(a),
    l = n(136722),
    d = n(17928),
    _ = n(228366),
    u = n(736056),
    c = n(488926),
    E = n(616356),
    h = n(495544),
    m = n(734057),
    f = n(498642),
    g = n(696451),
    p = n(317525),
    A = n(71393),
    I = n(290863),
    T = n(461213),
    S = n(287809),
    N = n(652215),
    C = n(985018);
let R = "everyone",
    O = 0;
var y =
    (((i = {}).GROUP = "GROUP"),
    (i.MEMBER = "MEMBER"),
    (i.CONTENT_INVENTORY = "CONTENT_INVENTORY"),
    (i.CONTENT_INVENTORY_GROUP = "CONTENT_INVENTORY_GROUP"),
    (i.HIDDEN_CONTENT_INVENTORY = "HIDDEN_CONTENT_INVENTORY"),
    (i.CONTENT_INVENTORY_LEADERBOARD = "CONTENT_INVENTORY_LEADERBOARD"),
    i);
function v(e, t, n, i) {
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
            let r = A.A.getGuild(e),
                s = null != r ? p.A.getRole(r.id, t) : null;
            return { type: "GROUP", key: t, id: t, title: null != s ? s.name : "", count: n, index: i };
    }
}
function D(e, t, n) {
    let i = n === h.default.getId(),
        r = I.A.isMobileOnline(n),
        s = I.A.isVROnline(n),
        a = i ? T.A.getStatus() : I.A.getStatus(n, e),
        o = i ? T.A.getActivities() : I.A.getActivities(n, e),
        l = E.A.getStreamForUser(n, e),
        d = S.default.getUser(n);
    return null == d
        ? null
        : {
              type: "MEMBER",
              ...g.Ay.getMember(e, n),
              user: d,
              status: a,
              activities: o,
              applicationStream: l,
              isOwner: t === n,
              isMobileOnline: r,
              isVROnline: s,
          };
}
function L(e) {
    var t;
    let n = m.A.getChannel(e);
    return null == n
        ? R
        : null == n.memberListId
          ? ((t = n),
            c.Ib(N.xBc.VIEW_CHANNEL, t)
                ? R
                : o()
                      .v3(
                          s()(t.permissionOverwrites)
                              .reduce((e, t) => {
                                  let { id: n, allow: i, deny: r } = t;
                                  return (
                                      l.zy(i, N.xBc.VIEW_CHANNEL)
                                          ? e.push(`allow:${n}`)
                                          : l.zy(r, N.xBc.VIEW_CHANNEL) && e.push(`deny:${n}`),
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
        let e = A.A.getGuild(this.guildId);
        if (null == e) return !1;
        let t = c.wT(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            let n = t,
                i = Math.max(0, e.count ?? 0);
            return (t += i + 1), v(this.guildId, e.id, i, n);
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
        if (null != n) this.rows.splice(e, 0, v(this.guildId, n.id, n.count));
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
            this.rows[e] = v(this.guildId, n.id, n.count);
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
        null != n && (this.groups.splice(t, 1, v(this.guildId, e, n.count, n.index)), this.version++);
    }
}
let w = new (class {
    _guildLists = {};
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let i = n[t];
        return null == i && ((i = new b(e, t)).setGroups([{ id: N.clD.UNKNOWN, count: 0 }]), (n[t] = i)), i;
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
function P() {
    w.reset();
}
let k = [];
function M() {
    let e = E.A.getAllApplicationStreams(),
        t = k.concat(e);
    (k = e),
        t.forEach((e) => {
            w.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function U() {
    let e = h.default.getId();
    w.forEach(null, (t) => t.rebuildMember(e));
}
class x extends d.Ay.Store {
    static displayName = "ChannelMemberStore";
    initialize() {
        this.waitFor(S.default, A.A, p.A, m.A, g.Ay, I.A, T.A, h.default, f.A, E.A, u.A),
            this.syncWith([T.A], U),
            this.syncWith([E.A], M);
    }
    getProps(e, t) {
        let n = w.get(e, L(t));
        return { listId: `${n.guildId}:${n.listId}`, groups: n.groups, rows: n.rows, version: n.version };
    }
    getRows(e, t) {
        return w.get(e, L(t)).rows;
    }
}
let G = new x(_.h, {
    CONNECTION_OPEN: P,
    OVERLAY_INITIALIZE: P,
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
