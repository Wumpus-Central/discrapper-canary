n(653041);
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(194359),
    c = n(81825),
    d = n(5254),
    u = n(441623),
    h = n(199902),
    m = n(271383),
    p = n(430824),
    g = n(158776),
    f = n(699516),
    _ = n(594174),
    E = n(981631),
    I = n(474936);
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
function N(e) {
    let t = _.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function v(e) {
    return {
        status: g.Z.getStatus(e),
        isMobile: g.Z.isMobileOnline(e),
        activities: g.Z.getActivities(e),
        applicationStream: h.Z.getAnyStreamForUser(e)
    };
}
function S(e) {
    let t = [];
    return (
        l()(m.ZP.memberOf(e))
            .map(p.Z.getGuild)
            .sortBy((e) => (null != e ? e.name.toLowerCase() : null))
            .forEach((e) => {
                null != e && t.push(e);
            }),
        {
            mutualGuildsLength: t.length,
            mutualGuilds: t.slice(0, 5)
        }
    );
}
class T extends c.Z {
    get comparator() {
        var e, t, n, i, r;
        return [this.type, null != this.giftIntentType ? 0 : 1, null !== (r = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== r ? r : this.usernameLower];
    }
    constructor(e) {
        super(), C(this, 'key', void 0), C(this, 'type', void 0), C(this, 'status', void 0), C(this, 'isMobile', void 0), C(this, 'activities', void 0), C(this, 'applicationStream', void 0), C(this, 'user', void 0), C(this, 'usernameLower', void 0), C(this, 'mutualGuildsLength', void 0), C(this, 'mutualGuilds', void 0), C(this, 'nickname', void 0), C(this, 'spam', void 0), C(this, 'giftIntentType', void 0), C(this, 'ignoredUser', void 0), (this.key = e.key), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType), (this.ignoredUser = e.ignoredUser);
    }
}
class b {
    reset() {
        let e = l().map(
                f.Z.getRelationships(),
                (e, t) =>
                    new T({
                        key: t,
                        type: e,
                        nickname: f.Z.getNickname(t),
                        ...N(t),
                        ...v(t),
                        ...S(t),
                        spam: f.Z.isSpam(t),
                        ignoredUser: f.Z.isIgnored(t),
                        giftIntentType: e === E.OGo.FRIEND && u.Z.isTopAffinityFriendAnniversary({ userId: t }) ? I.hX.FRIEND_ANNIVERSARY : void 0
                    })
            ),
            t = l().map(
                d.Z.getSuggestions(),
                (e) =>
                    new T({
                        key: e.key,
                        type: 99,
                        nickname: e.name,
                        ...N(e.key),
                        ...v(e.key),
                        ...S(e.key)
                    })
            );
        return new b(l().concat(e, t));
    }
    clone() {
        return new b(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n],
                r = i.merge(e(i.key));
            (t = t || r !== i), (this._rows[n] = r);
        }
        return t;
    }
    filter(e, t) {
        return l()(this._rows)
            .filter((e) => {
                if (null == e.user) return !1;
                if (null != t && '' !== t) {
                    let n = t.toLowerCase();
                    return [e.usernameLower, e.nickname, e.user.globalName].map((e) => (null == e ? void 0 : e.toLowerCase())).some((e) => (null == e ? void 0 : e.includes(n)));
                }
                return !0;
            })
            .filter((t) => {
                switch (e) {
                    case E.pJs.ONLINE:
                        return t.type === E.OGo.FRIEND && t.status !== E.Skl.OFFLINE;
                    case E.pJs.PENDING:
                        return (t.type === E.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) || t.type === E.OGo.PENDING_OUTGOING;
                    case E.pJs.SPAM:
                        return t.type === E.OGo.PENDING_INCOMING && t.spam;
                    case E.pJs.PENDING_IGNORED:
                        return t.type === E.OGo.PENDING_INCOMING && t.ignoredUser;
                    case E.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case E.pJs.BLOCKED:
                        return t.type === E.OGo.BLOCKED;
                    case E.pJs.ALL:
                    default:
                        return t.type === E.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [E.OGo.FRIEND]: 0,
            [E.OGo.PENDING_INCOMING]: 0,
            [E.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [E.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        C(this, '_rows', void 0), (this._rows = e);
    }
}
let A = !0,
    Z = !1,
    x = E.pJs.ONLINE,
    L = new b(),
    P = !0,
    O = !1;
function y() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    A && (e || (x !== E.pJs.ONLINE && x !== E.pJs.ADD_FRIEND)) && !Z && ((A = !1), (Z = !0), o.Z.fetchRelationships());
}
function R() {
    if (((A = !0), P ? (Z = !1) : y(), (L = L.reset()), O)) return;
    let e = L.getRelationshipCounts();
    x = 0 === e[E.OGo.FRIEND] ? (0 !== e[E.OGo.PENDING_INCOMING] ? E.pJs.PENDING : E.pJs.ADD_FRIEND) : E.pJs.ONLINE;
}
function j() {
    L = P ? new b() : L.reset();
}
function D(e) {
    return function () {
        return !P && !!L.update(e) && ((L = L.clone()), !0);
    };
}
class M extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(f.Z, g.Z, _.default, p.Z, m.ZP, h.Z, d.Z), this.syncWith([f.Z], j), this.syncWith([d.Z], j), this.syncWith([u.Z], j), this.syncWith([_.default], D(N)), this.syncWith([g.Z, h.Z], D(v)), R();
    }
    getState() {
        return {
            fetching: Z,
            section: x,
            pendingCount: f.Z.getPendingCount(),
            rows: L
        };
    }
}
C(M, 'displayName', 'FriendsStore'),
    (t.ZP = new M(s.Z, {
        CONNECTION_OPEN: function () {
            R();
        },
        FRIENDS_SET_SECTION: function (e) {
            (x = e.section), y();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (P = null != t), j(), !P;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
            Z = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
            (A = !0), (Z = !0);
        },
        DRAWER_SELECT_TAB: function (e) {
            let { tab: t } = e;
            return (P = t !== E.cII.FRIENDS), j(), !P;
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
            (x = e.section), (O = !0);
        }
    }));
