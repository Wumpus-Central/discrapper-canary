n(653041), n(47120);
var i,
    r = n(392711),
    l = n.n(r),
    a = n(442837),
    s = n(570140),
    o = n(194359),
    c = n(81825),
    d = n(353926),
    u = n(5254),
    h = n(372460),
    m = n(91896),
    p = n(441623),
    g = n(199902),
    f = n(271383),
    _ = n(430824),
    E = n(158776),
    I = n(699516),
    C = n(594174),
    N = n(981631),
    v = n(474936);
function S(e, t, n) {
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
function T(e) {
    let t = C.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function b(e) {
    return {
        status: E.Z.getStatus(e),
        isMobile: E.Z.isMobileOnline(e),
        activities: E.Z.getActivities(e),
        applicationStream: g.Z.getAnyStreamForUser(e)
    };
}
function A(e) {
    let t = [];
    return (
        l()(f.ZP.memberOf(e))
            .map(_.Z.getGuild)
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
class Z extends c.Z {
    get comparator() {
        var e, t, n, i, r;
        return [this.type, null != this.giftIntentType ? 0 : 1, null !== (r = null !== (i = null === (e = this.nickname) || void 0 === e ? void 0 : e.toLowerCase()) && void 0 !== i ? i : null === (n = this.user) || void 0 === n ? void 0 : null === (t = n.globalName) || void 0 === t ? void 0 : t.toLowerCase()) && void 0 !== r ? r : this.usernameLower];
    }
    constructor(e) {
        var t;
        super(), S(this, 'key', void 0), S(this, 'userId', void 0), S(this, 'type', void 0), S(this, 'status', void 0), S(this, 'isMobile', void 0), S(this, 'activities', void 0), S(this, 'applicationStream', void 0), S(this, 'user', void 0), S(this, 'usernameLower', void 0), S(this, 'mutualGuildsLength', void 0), S(this, 'mutualGuilds', void 0), S(this, 'nickname', void 0), S(this, 'spam', void 0), S(this, 'giftIntentType', void 0), S(this, 'ignoredUser', void 0), S(this, 'applicationId', void 0), S(this, 'isGameRelationship', void 0), (this.key = e.key), (this.userId = e.userId), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType), (this.ignoredUser = e.ignoredUser), (this.applicationId = e.applicationId), (this.isGameRelationship = null !== (t = e.isGameRelationship) && void 0 !== t && t);
    }
}
class x {
    reset() {
        let e = l().map(
                I.Z.getRelationships(),
                (e, t) =>
                    new Z({
                        key: t,
                        type: e,
                        userId: t,
                        nickname: I.Z.getNickname(t),
                        ...T(t),
                        ...b(t),
                        ...A(t),
                        spam: I.Z.isSpam(t),
                        ignoredUser: I.Z.isIgnored(t),
                        giftIntentType: e === N.OGo.FRIEND && p.Z.isTopAffinityFriendAnniversary({ userId: t }) ? v.hX.FRIEND_ANNIVERSARY : void 0
                    })
            ),
            t = (0, h.r8)({ location: 'FriendsStore' })
                ? l().map(m.Z.getGameRelationships().values(), (e) => {
                      let { id: t, applicationId: n, type: i } = e;
                      return new Z({
                          key: ''.concat(t, '-').concat(n),
                          type: i,
                          userId: t,
                          applicationId: n,
                          nickname: I.Z.getNickname(t),
                          ...T(t),
                          ...b(t),
                          ...A(t),
                          spam: I.Z.isSpam(t),
                          ignoredUser: I.Z.isIgnored(t),
                          isGameRelationship: !0
                      });
                  })
                : [],
            n = l().map(
                u.Z.getSuggestions(),
                (e) =>
                    new Z({
                        key: e.key,
                        userId: e.key,
                        type: 99,
                        nickname: e.name,
                        ...T(e.key),
                        ...b(e.key),
                        ...A(e.key)
                    })
            );
        return new x(l().concat(e, t, n));
    }
    clone() {
        return new x(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let i = this._rows[n],
                r = i.merge(e(i.userId));
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
                    case N.pJs.ONLINE:
                        return t.type === N.OGo.FRIEND && t.status !== N.Skl.OFFLINE;
                    case N.pJs.PENDING:
                        return (t.type === N.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) || t.type === N.OGo.PENDING_OUTGOING;
                    case N.pJs.SPAM:
                        return t.type === N.OGo.PENDING_INCOMING && t.spam;
                    case N.pJs.PENDING_IGNORED:
                        return t.type === N.OGo.PENDING_INCOMING && t.ignoredUser;
                    case N.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case N.pJs.BLOCKED:
                        return t.type === N.OGo.BLOCKED;
                    case N.pJs.ALL:
                    default:
                        return t.type === N.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [N.OGo.FRIEND]: 0,
            [N.OGo.PENDING_INCOMING]: 0,
            [N.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [N.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        S(this, '_rows', void 0), (this._rows = e);
    }
}
let L = !0,
    y = !1,
    P = N.pJs.ONLINE,
    O = new x(),
    R = !0,
    j = !1;
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    L && (e || (P !== N.pJs.ONLINE && P !== N.pJs.ADD_FRIEND)) && !y && ((L = !1), (y = !0), o.Z.fetchRelationships());
}
function M() {
    if (((L = !0), R ? (y = !1) : D(), (O = O.reset()), j)) return;
    let e = O.getRelationshipCounts();
    P = 0 === e[N.OGo.FRIEND] ? (0 !== e[N.OGo.PENDING_INCOMING] ? N.pJs.PENDING : N.pJs.ADD_FRIEND) : N.pJs.ONLINE;
}
function w() {
    O = R ? new x() : O.reset();
}
function k(e) {
    return function () {
        return !R && !!O.update(e) && ((O = O.clone()), !0);
    };
}
class U extends (i = a.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, E.Z, C.default, _.Z, f.ZP, g.Z, u.Z, d.Z), this.syncWith([I.Z], w), this.syncWith([m.Z], w), this.syncWith([u.Z], w), this.syncWith([p.Z], w), this.syncWith([C.default], k(T)), this.syncWith([E.Z, g.Z], k(b)), M();
    }
    getState() {
        return {
            fetching: y,
            section: P,
            pendingCount: I.Z.getPendingCount(),
            rows: O
        };
    }
}
S(U, 'displayName', 'FriendsStore'),
    (t.ZP = new U(s.Z, {
        CONNECTION_OPEN: function () {
            M();
        },
        FRIENDS_SET_SECTION: function (e) {
            (P = e.section), D();
        },
        CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            return (R = null != t), w(), !R;
        },
        LOAD_RELATIONSHIPS_SUCCESS: function () {
            y = !1;
        },
        LOAD_RELATIONSHIPS_FAILURE: function () {
            (L = !0), (y = !0);
        },
        FRIENDS_SET_INITIAL_SECTION: function (e) {
            (P = e.section), (j = !0);
        }
    }));
