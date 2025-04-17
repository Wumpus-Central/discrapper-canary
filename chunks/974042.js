n.d(t, { ZP: () => W }), n(539854), n(388685);
var r,
    i = n(392711),
    l = n.n(i),
    a = n(442837),
    o = n(570140),
    s = n(194359),
    c = n(81825),
    u = n(353926),
    d = n(5254),
    p = n(91896),
    h = n(441623),
    f = n(199902),
    g = n(271383),
    m = n(430824),
    b = n(158776),
    _ = n(699516),
    E = n(594174),
    O = n(981631),
    N = n(474936);
function y(e, t, n) {
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
function I(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function C(e) {
    let t = E.default.getUser(e);
    return {
        user: t,
        usernameLower: null != t ? t.username.toLowerCase() : null
    };
}
function S(e) {
    return {
        status: b.Z.getStatus(e),
        isMobile: b.Z.isMobileOnline(e),
        activities: b.Z.getActivities(e),
        applicationStream: f.Z.getAnyStreamForUser(e)
    };
}
function T(e) {
    let t = [];
    return (
        l()(g.ZP.memberOf(e))
            .map(m.Z.getGuild)
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
class P extends c.Z {
    get comparator() {
        var e, t, n, r, i;
        return [this.type, +(null == this.giftIntentType), null != (i = null != (r = null == (e = this.nickname) ? void 0 : e.toLowerCase()) ? r : null == (n = this.user) || null == (t = n.globalName) ? void 0 : t.toLowerCase()) ? i : this.usernameLower];
    }
    constructor(e) {
        var t;
        super(), y(this, 'key', void 0), y(this, 'userId', void 0), y(this, 'type', void 0), y(this, 'status', void 0), y(this, 'isMobile', void 0), y(this, 'activities', void 0), y(this, 'applicationStream', void 0), y(this, 'user', void 0), y(this, 'usernameLower', void 0), y(this, 'mutualGuildsLength', void 0), y(this, 'mutualGuilds', void 0), y(this, 'nickname', void 0), y(this, 'spam', void 0), y(this, 'giftIntentType', void 0), y(this, 'ignoredUser', void 0), y(this, 'applicationId', void 0), y(this, 'isGameRelationship', void 0), (this.key = e.key), (this.userId = e.userId), (this.type = e.type), (this.status = e.status), (this.activities = e.activities), (this.applicationStream = e.applicationStream), (this.user = e.user), (this.isMobile = e.isMobile), (this.usernameLower = e.usernameLower), (this.mutualGuildsLength = e.mutualGuildsLength), (this.mutualGuilds = e.mutualGuilds), (this.nickname = e.nickname), (this.spam = e.spam), (this.giftIntentType = e.giftIntentType), (this.ignoredUser = e.ignoredUser), (this.applicationId = e.applicationId), (this.isGameRelationship = null != (t = e.isGameRelationship) && t);
    }
}
class j {
    reset() {
        let e = new Set(),
            t = l().map(
                _.Z.getRelationships(),
                (t, n) => (
                    t === O.OGo.FRIEND && e.add(n),
                    new P(
                        v(
                            I(
                                {
                                    key: n,
                                    type: t,
                                    userId: n,
                                    nickname: _.Z.getNickname(n)
                                },
                                C(n),
                                S(n),
                                T(n)
                            ),
                            {
                                spam: _.Z.isSpam(n),
                                ignoredUser: _.Z.isIgnored(n),
                                giftIntentType: t === O.OGo.FRIEND && h.Z.isTopAffinityFriendAnniversary({ userId: n }) ? N.hX.FRIEND_ANNIVERSARY : void 0,
                                applicationId: _.Z.getOriginApplicationId(n)
                            }
                        )
                    )
                )
            ),
            n = [],
            r = p.Z.getGameRelationships().values(),
            i = new Set();
        r.forEach((t) => {
            let { id: r, applicationId: l, type: a } = t;
            !(a === O.OGo.FRIEND && e.has(r)) &&
                ((a === O.OGo.FRIEND && i.has(r)) ||
                    (a === O.OGo.FRIEND && i.add(r),
                    n.push(
                        new P(
                            v(
                                I(
                                    {
                                        key: ''.concat(r, '-').concat(l),
                                        type: a,
                                        userId: r,
                                        applicationId: l,
                                        nickname: _.Z.getNickname(r)
                                    },
                                    C(r),
                                    S(r),
                                    T(r)
                                ),
                                {
                                    spam: _.Z.isSpam(r),
                                    ignoredUser: _.Z.isIgnored(r),
                                    isGameRelationship: !0
                                }
                            )
                        )
                    )));
        });
        let a = l().map(
            d.Z.getSuggestions(),
            (e) =>
                new P(
                    I(
                        {
                            key: e.key,
                            userId: e.key,
                            type: 99,
                            nickname: e.name
                        },
                        C(e.key),
                        S(e.key),
                        T(e.key)
                    )
                )
        );
        return new j(l().concat(t, n, a));
    }
    clone() {
        return new j(this._rows);
    }
    update(e) {
        let t = !1;
        for (let n = 0; n < this._rows.length; n++) {
            let r = this._rows[n],
                i = r.merge(e(r.userId));
            (t = t || i !== r), (this._rows[n] = i);
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
                    case O.pJs.ONLINE:
                        return t.type === O.OGo.FRIEND && t.status !== O.Skl.OFFLINE;
                    case O.pJs.PENDING:
                        return (t.type === O.OGo.PENDING_INCOMING && !t.spam && !t.ignoredUser) || t.type === O.OGo.PENDING_OUTGOING;
                    case O.pJs.SPAM:
                        return t.type === O.OGo.PENDING_INCOMING && t.spam;
                    case O.pJs.PENDING_IGNORED:
                        return t.type === O.OGo.PENDING_INCOMING && t.ignoredUser;
                    case O.pJs.SUGGESTIONS:
                        return 99 === t.type;
                    case O.pJs.ALL:
                    default:
                        return t.type === O.OGo.FRIEND;
                }
            })
            .sortBy((e) => e.comparator)
            .value();
    }
    getRelationshipCounts() {
        let e = {
            [O.OGo.FRIEND]: 0,
            [O.OGo.PENDING_INCOMING]: 0,
            [O.OGo.PENDING_OUTGOING]: 0,
            99: 0,
            [O.OGo.BLOCKED]: 0
        };
        return (
            this._rows.forEach((t) => {
                null != t.user && null != e[t.type] && e[t.type]++;
            }),
            e
        );
    }
    constructor(e = []) {
        y(this, '_rows', void 0), (this._rows = e);
    }
}
let A = !0,
    Z = !1,
    x = O.pJs.ONLINE,
    L = new j(),
    w = !0,
    R = !1;
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    A && (e || (x !== O.pJs.ONLINE && x !== O.pJs.ADD_FRIEND)) && !Z && ((A = !1), (Z = !0), s.Z.fetchRelationships());
}
function k() {
    if (((A = !0), w ? (Z = !1) : D(), (L = L.reset()), R)) return;
    let e = L.getRelationshipCounts();
    x = 0 === e[O.OGo.FRIEND] ? (0 !== e[O.OGo.PENDING_INCOMING] ? O.pJs.PENDING : O.pJs.ADD_FRIEND) : O.pJs.ONLINE;
}
function M() {
    L = w ? new j() : L.reset();
}
function U(e) {
    return function () {
        return !w && !!L.update(e) && ((L = L.clone()), !0);
    };
}
class G extends (r = a.ZP.Store) {
    initialize() {
        this.waitFor(_.Z, b.Z, E.default, m.Z, g.ZP, f.Z, d.Z, u.Z), this.syncWith([_.Z], M), this.syncWith([p.Z], M), this.syncWith([d.Z], M), this.syncWith([h.Z], M), this.syncWith([E.default], U(C)), this.syncWith([b.Z, f.Z], U(S)), k();
    }
    getState() {
        return {
            fetching: Z,
            section: x,
            rows: L
        };
    }
}
y(G, 'displayName', 'FriendsStore');
let W = new G(o.Z, {
    CONNECTION_OPEN: function () {
        k();
    },
    FRIENDS_SET_SECTION: function (e) {
        (x = e.section), D();
    },
    CHANNEL_SELECT: function (e) {
        let { channelId: t } = e;
        return (w = null != t), M(), !w;
    },
    LOAD_RELATIONSHIPS_SUCCESS: function () {
        Z = !1;
    },
    LOAD_RELATIONSHIPS_FAILURE: function () {
        (A = !0), (Z = !0);
    },
    FRIENDS_SET_INITIAL_SECTION: function (e) {
        (x = e.section), (R = !0);
    }
});
