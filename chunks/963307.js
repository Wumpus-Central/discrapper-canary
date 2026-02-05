"use strict";
n.d(t, { Ay: () => W, QP: () => v, S9: () => b, sN: () => C }), n(321073);
var r = n(735438),
    i = n.n(r),
    a = n(181370),
    s = n.n(a),
    o = n(136722),
    l = n(311907),
    u = n(73153),
    c = n(49463),
    d = n(488926),
    _ = n(616356),
    f = n(961350),
    p = n(734057),
    h = n(498642),
    m = n(696451),
    g = n(317525),
    E = n(71393),
    A = n(290863),
    I = n(461213),
    T = n(287809),
    y = n(652215),
    S = n(985018);
let v = "everyone",
    C = 0;
var b = (function (e) {
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
function N(e, t, n, r) {
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
                            return S.intl.string(S.t.WbGtnH);
                        case y.clD.OFFLINE:
                            return S.intl.string(S.t.Vv0abJ);
                        default:
                            return S.intl.string(S.t["UQMV/E"]);
                    }
                },
                count: n,
                index: r,
            };
        default:
            let i = E.A.getGuild(e),
                a = null != i ? g.A.getRole(i.id, t) : null;
            return { type: "GROUP", key: t, id: t, title: null != a ? a.name : "", count: n, index: r };
    }
}
function R(e, t, n) {
    let r = n === f.default.getId(),
        i = A.A.isMobileOnline(n),
        a = A.A.isVROnline(n),
        s = r ? I.A.getStatus() : A.A.getStatus(n, e),
        o = r ? I.A.getActivities() : A.A.getActivities(n, e),
        l = _.A.getStreamForUser(n, e),
        u = T.default.getUser(n);
    return null == u
        ? null
        : {
              type: "MEMBER",
              ...m.Ay.getMember(e, n),
              user: u,
              status: s,
              activities: o,
              applicationStream: l,
              isOwner: t === n,
              isMobileOnline: i,
              isVROnline: a,
          };
}
function O(e) {
    let t = p.A.getChannel(e);
    return null == t ? v : null == t.memberListId ? D(t) : t.memberListId;
}
function D(e) {
    return d.Ib(y.xBc.VIEW_CHANNEL, e)
        ? v
        : s()
              .v3(
                  i()(e.permissionOverwrites)
                      .reduce((e, t) => {
                          let { id: n, allow: r, deny: i } = t;
                          return (
                              o.zy(r, y.xBc.VIEW_CHANNEL)
                                  ? e.push(`allow:${n}`)
                                  : o.zy(i, y.xBc.VIEW_CHANNEL) && e.push(`deny:${n}`),
                              e
                          );
                      }, [])
                      .sort()
                      .join(","),
              )
              .toString();
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
        let e = E.A.getGuild(this.guildId);
        if (null == e) return !1;
        let t = d.wT(e);
        return this.ownerId !== t && ((this.ownerId = t), !0);
    }
    setGroups(e) {
        let t = 0;
        (this.groups = e.map((e) => {
            let n = t,
                r = Math.max(0, e.count ?? 0);
            return (t += r + 1), N(this.guildId, e.id, r, n);
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
        if (null != n) this.rows.splice(e, 0, N(this.guildId, n.id, n.count));
        else if (null != r) {
            let t = R(this.guildId, this.ownerId, r.user.id);
            if (null == t) return;
            this.rows.splice(e, 0, t), (this.members[r.user.id] = t);
        }
        this.version++;
    }
    update(e, t) {
        let { group: n, member: r } = t,
            i = this.rows[e];
        if ((null != i && "MEMBER" === i.type && delete this.members[i.user.id], null != n))
            this.rows[e] = N(this.guildId, n.id, n.count);
        else if (null != r) {
            let t = R(this.guildId, this.ownerId, r.user.id);
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
        null != t && (Object.assign(t, R(this.guildId, this.ownerId, e)), this.version++);
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
        null != n && (this.groups.splice(t, 1, N(this.guildId, e, n.count, n.index)), this.version++);
    }
}
class w {
    _guildLists = {};
    get(e, t) {
        let n = this._guildLists[e];
        null == n && (n = this._guildLists[e] = {});
        let r = n[t];
        return null == r && ((r = new L(e, t)).setGroups([{ id: y.clD.UNKNOWN, count: 0 }]), (n[t] = r)), r;
    }
    forEach(e, t) {
        if (null == e)
            i().forEach(this._guildLists, (e) => {
                i().forEach(e, t);
            });
        else {
            let n = this._guildLists[e];
            null != n && i().forEach(n, t);
        }
    }
    delete(e) {
        delete this._guildLists[e];
    }
    reset() {
        this._guildLists = {};
    }
}
let x = new w();
function P(e) {
    let t = x.get(e.guildId, e.id);
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
function M() {
    x.reset();
}
function k(e) {
    let { guild: t } = e;
    x.forEach(t.id, (e) => {
        e.updateOwnerId() && e.rebuildMembers();
    });
}
function U(e) {
    let { guild: t } = e;
    x.delete(t.id);
}
function G(e) {
    let { guildId: t, role: n } = e;
    x.forEach(t, (e) => {
        e.rebuildGroup(n.id), e.rebuildMembers();
    });
}
function V(e) {
    let { guildId: t, user: n } = e;
    x.forEach(t, (e) => e.rebuildMember(n.id));
}
let F = [];
function B() {
    let e = _.A.getAllApplicationStreams(),
        t = F.concat(e);
    (F = e),
        t.forEach((e) => {
            x.forEach(null, (t) => t.rebuildMember(e.ownerId));
        });
}
function j() {
    let e = f.default.getId();
    x.forEach(null, (t) => t.rebuildMember(e));
}
function H() {
    return !0;
}
class Y extends l.Ay.Store {
    static displayName = "ChannelMemberStore";
    initialize() {
        this.waitFor(T.default, E.A, g.A, p.A, m.Ay, A.A, I.A, f.default, h.A, _.A, c.A),
            this.syncWith([I.A], j),
            this.syncWith([_.A], B);
    }
    getProps(e, t) {
        let n = x.get(e, O(t));
        return { listId: `${n.guildId}:${n.listId}`, groups: n.groups, rows: n.rows, version: n.version };
    }
    getRows(e, t) {
        return x.get(e, O(t)).rows;
    }
}
let W = new Y(u.h, {
    CONNECTION_OPEN: M,
    OVERLAY_INITIALIZE: M,
    GUILD_MEMBER_LIST_UPDATE: P,
    GUILD_UPDATE: k,
    GUILD_DELETE: U,
    GUILD_ROLE_UPDATE: G,
    GUILD_MEMBER_UPDATE: V,
    CHANNEL_UPDATES: H,
});
