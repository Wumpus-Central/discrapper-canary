r.d(n, {
    Z: function () {
        return j;
    }
});
var i = r(724458);
var a = r(47120);
var o = r(757143);
var s = r(773603);
var l = r(315314);
var u = r(610138);
var c = r(216116);
var d = r(78328);
var f = r(815648);
var p = r(653041);
var h = r(392711),
    _ = r.n(h),
    m = r(477660),
    g = r.n(m),
    E = r(675478),
    v = r(131704),
    y = r(601964),
    b = r(709302),
    I = r(592125),
    T = r(580005),
    S = r(984933),
    A = r(699516),
    C = r(594174),
    N = r(483360),
    R = r(892880),
    O = r(591759),
    D = r(279779),
    x = r(620490),
    L = r(727785),
    w = r(981631);
function P(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let M = 100,
    k = 1000,
    U = 0.2,
    B = 0.1,
    G = Object.freeze({}),
    Z = 300;
function F() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        n = arguments.length > 1 ? arguments[1] : void 0;
    return k * e * (null != n ? n : 1);
}
function V(e, n) {
    var r, i;
    if (!n.frecencyBoosters) return {};
    let a = T.Z.getFrequentlyWithoutFetchingLatest(),
        o = a.reduce((e, n) => {
            let { id: r } = n,
                i = T.Z.getScoreWithoutFetchingLatest(r);
            return i > e ? i : e;
        }, 0),
        s = [];
    switch (e) {
        case L.h8.GUILD:
            s = a.filter((e) => e instanceof y.ZP);
            break;
        case L.h8.USER:
            s = a.filter((e) => e instanceof v.Sf && e.type === w.d4z.DM);
            break;
        case L.h8.GROUP_DM:
            s = a.filter((e) => e instanceof v.Sf && e.isMultiUserDM());
            break;
        case L.h8.TEXT_CHANNEL:
            s = a.filter((e) => e instanceof v.Sf && (0, v.r8)(e.type));
            break;
        case L.h8.VOICE_CHANNEL:
            s = a.filter((e) => e instanceof v.Sf && e.isGuildVocal());
    }
    let l = {};
    for (let n of s) {
        let { id: r } = n,
            i = T.Z.getScoreWithoutFetchingLatest(r);
        if (e === L.h8.USER && n instanceof v.mn) {
            if (n.type === w.d4z.DM) l[(r = n.getRecipientId())] = 1 + i / o;
            else if (n.type === w.d4z.GROUP_DM) {
                let e = n.recipients.length;
                for (let r of n.recipients) l[r] = 1 + (i / o) * (1 / e);
            }
        } else l[r] = 1 + i / o;
    }
    for (let e of A.Z.getFriendIDs()) l[e] = (null !== (r = l[e]) && void 0 !== r ? r : 1) + U;
    for (let e of I.Z.getDMUserIds()) l[e] = (null !== (i = l[e]) && void 0 !== i ? i : 1) + B;
    return l;
}
class j {
    createSearchContext() {
        null == this.userSearchContext && (this.userSearchContext = D.Z.getSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: n } = this;
        (this._limit = e), null != n && n.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null), (this._userResults = this._include(L.h8.USER) ? this._userResults : []), (this._groupDMResults = this._include(L.h8.GROUP_DM) ? this._groupDMResults : []), (this._textChannelResults = this._include(L.h8.TEXT_CHANNEL) ? this._textChannelResults : []), (this._voiceChannelResults = this._include(L.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []), (this._guildResults = this._include(L.h8.GUILD) ? this._guildResults : []), (this._applicationResults = this._include(L.h8.APPLICATION) ? this._applicationResults : []), (this._linkResults = this._include(L.h8.LINK) ? this._linkResults : []), (this._inAppNavigations = this._include(L.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(L.h8.USER);
    }
    setOptions(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n
            ? (this.options = {
                  ...this.options,
                  ...e
              })
            : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith('user:') ? e.replace('user:', '') : ''))
                      .filter((e) => '' !== e))
                : (this._userBlacklist = null);
    }
    search(e, n) {
        if (((this.query = e), '' === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? E.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, n, this._limit), (this._groupDMResults = this.queryGroupDMs(e, this._limit)), (this._textChannelResults = this.queryTextChannels(e, this._limit)), (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)), (this._guildResults = this.queryGuilds(e, this._limit)), (this._applicationResults = this.queryApplications(e, this._limit));
            (this._linkResults = this.queryLink(e, this._limit)), (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, Z))) : this.updateAllResults();
        });
    }
    clear() {
        let { userSearchContext: e } = this;
        null != e && e.clearQuery(), (this.results = []), (this._userResults = []), (this._groupDMResults = []), (this._textChannelResults = []), (this._voiceChannelResults = []), (this._guildResults = []), (this._applicationResults = []), (this._linkResults = []), (this._inAppNavigations = []);
    }
    clean() {
        this.clear(), this.destroy(), (this.query = ''), this.updateAllResults();
    }
    pause() {
        var e, n;
        null === (n = this.userSearchContext) || void 0 === n || null === (e = n.unsubscribe) || void 0 === e || e.call(n);
    }
    resume() {
        var e, n;
        null === (n = this.userSearchContext) || void 0 === n || null === (e = n.subscribe) || void 0 === e || e.call(n);
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, n) {
        if (!this._include(L.h8.TEXT_CHANNEL)) return [];
        let r = V(L.h8.TEXT_CHANNEL, this.options),
            { blacklist: i } = this.options,
            a = null != i ? (e) => !i.has('channel:'.concat(e.id)) : void 0;
        return N.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: n,
            fuzzy: !0,
            filter: a,
            boosters: r
        });
    }
    queryVoiceChannels(e, n) {
        if (!this._include(L.h8.VOICE_CHANNEL)) return [];
        let { voiceChannelGuildFilter: r } = this.options,
            i = V(L.h8.VOICE_CHANNEL, this.options);
        return N.ZP.queryChannels({
            query: e,
            guildId: r,
            limit: n,
            fuzzy: !0,
            type: S.Zb,
            boosters: i
        });
    }
    queryGuilds(e, n) {
        if (!this._include(L.h8.GUILD)) return [];
        let r = V(L.h8.GUILD, this.options),
            { blacklist: i } = this.options,
            a = null != i ? (e) => !i.has('guild:'.concat(e.id)) : void 0;
        return N.ZP.queryGuilds({
            query: e,
            limit: n,
            fuzzy: !0,
            filter: a,
            boosters: r
        });
    }
    queryUsers(e, n, r) {
        let { userSearchContext: i } = this;
        if (null == i || !this._include(L.h8.USER)) return;
        let { userFilters: a } = this.options;
        void 0 !== n && R.Z.requestMembers(n, e, 100), i.setLimit(r), i.setQuery(e, a, this._userBlacklist, V(L.h8.USER, this.options));
    }
    queryGroupDMs(e, n) {
        if (!this._include(L.h8.GROUP_DM)) return [];
        let { blacklist: r } = this.options,
            i = V(L.h8.GROUP_DM, this.options),
            a = null != r ? (e) => !r.has('channel:'.concat(e.id)) : void 0;
        return N.ZP.queryGroupDMs({
            query: e,
            limit: n,
            fuzzy: !0,
            filter: a,
            boosters: i
        });
    }
    queryApplications(e, n) {
        return this._include(L.h8.APPLICATION)
            ? N.ZP.queryApplications({
                  query: e,
                  limit: n,
                  fuzzy: !0
              })
            : [];
    }
    queryLink(e, n) {
        let r;
        if (!this._include(L.h8.LINK)) return [];
        let i = g().sanitizeUrl(e);
        try {
            r = new URL(i);
        } catch (e) {
            return [];
        }
        let { pathname: a, hostname: o = '', host: s } = r,
            l = O.Z.isDiscordHostname(o) || window.location.host === s;
        return null !== a && l && O.Z.isAppRoute(a)
            ? [
                  {
                      type: L.h8.LINK,
                      record: b.Z.fromPath(a),
                      score: 1
                  }
              ]
            : [];
    }
    queryInAppNavigations(e, n) {
        return this._include(L.h8.IN_APP_NAVIGATION)
            ? N.ZP.queryInAppNavigations({
                  query: e,
                  limit: n,
                  fuzzy: !0
              })
            : [];
    }
    constructor(e, n, r = M, i = G) {
        P(this, 'query', ''),
            P(this, 'options', G),
            P(this, 'results', []),
            P(this, '_userResults', []),
            P(this, '_groupDMResults', []),
            P(this, '_textChannelResults', []),
            P(this, '_voiceChannelResults', []),
            P(this, '_guildResults', []),
            P(this, '_applicationResults', []),
            P(this, '_linkResults', []),
            P(this, '_inAppNavigations', []),
            P(this, '_asyncTimeout', void 0),
            P(this, 'userSearchContext', void 0),
            P(this, 'onResultsChange', void 0),
            P(this, 'resultTypes', void 0),
            P(this, '_userBlacklist', null),
            P(this, '_limit', void 0),
            P(this, 'parseUserResults', (e) => {
                let { results: n } = e;
                if (!!this._include(L.h8.USER)) {
                    for (let { id: e, score: r, comparator: i } of ((this._userResults = []), n)) {
                        let n = C.default.getUser(e);
                        if (null != n)
                            this._userResults.push({
                                type: L.h8.USER,
                                record: n,
                                score: F(r),
                                comparator: null != i ? i : void 0
                            });
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults();
                }
            }),
            P(this, 'updateAllResults', () => {
                clearTimeout(this._asyncTimeout),
                    (this.results = _()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations])
                        .uniqBy((e) => ''.concat(e.type, '-').concat(e.record.id))
                        .sort(x.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(i, !0),
            (this._limit = r),
            this.createSearchContext(),
            this.setResultTypes(n);
    }
}
