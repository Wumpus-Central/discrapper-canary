n.d(t, { Z: () => L }), n(47120), n(757143), n(301563), n(566702), n(773603), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041), n(230036);
var r = n(392711),
    i = n.n(r),
    o = n(477660),
    a = n.n(o),
    s = n(675478),
    l = n(131704),
    c = n(601964),
    u = n(709302),
    d = n(592125),
    f = n(580005),
    _ = n(984933),
    p = n(699516),
    h = n(594174),
    m = n(483360),
    g = n(892880),
    E = n(591759),
    b = n(279779),
    y = n(620490),
    v = n(727785),
    O = n(981631);
function I(e, t, n) {
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
function S(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let T = 100,
    N = 1000,
    A = 0.2,
    C = 0.1,
    R = Object.freeze({}),
    P = 300;
function w() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return N * e * (null != t ? t : 1);
}
function D(e, t) {
    var n, r;
    if (!t.frecencyBoosters) return {};
    let i = f.Z.getFrequentlyWithoutFetchingLatest(),
        o = i.reduce((e, t) => {
            let { id: n } = t,
                r = f.Z.getScoreWithoutFetchingLatest(n);
            return r > e ? r : e;
        }, 0),
        a = [];
    switch (e) {
        case v.h8.GUILD:
            a = i.filter((e) => e instanceof c.ZP);
            break;
        case v.h8.USER:
            a = i.filter((e) => e instanceof l.Sf && e.type === O.d4z.DM);
            break;
        case v.h8.GROUP_DM:
            a = i.filter((e) => e instanceof l.Sf && e.isMultiUserDM());
            break;
        case v.h8.TEXT_CHANNEL:
            a = i.filter((e) => e instanceof l.Sf && (0, l.r8)(e.type));
            break;
        case v.h8.VOICE_CHANNEL:
            a = i.filter((e) => e instanceof l.Sf && e.isGuildVocal());
    }
    let s = {};
    for (let t of a) {
        let { id: n } = t,
            r = f.Z.getScoreWithoutFetchingLatest(n);
        if (e === v.h8.USER && t instanceof l.mn) {
            if (t.type === O.d4z.DM) s[(n = t.getRecipientId())] = 1 + r / o;
            else if (t.type === O.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) s[n] = 1 + (r / o) * (1 / e);
            }
        } else s[n] = 1 + r / o;
    }
    for (let e of p.Z.getFriendIDs()) s[e] = (null != (n = s[e]) ? n : 1) + A;
    for (let e of d.Z.getDMUserIds()) s[e] = (null != (r = s[e]) ? r : 1) + C;
    return s;
}
class L {
    createSearchContext() {
        null == this.userSearchContext && (this.userSearchContext = b.Z.getSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        (this._limit = e), null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null), (this._userResults = this._include(v.h8.USER) ? this._userResults : []), (this._groupDMResults = this._include(v.h8.GROUP_DM) ? this._groupDMResults : []), (this._textChannelResults = this._include(v.h8.TEXT_CHANNEL) ? this._textChannelResults : []), (this._voiceChannelResults = this._include(v.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []), (this._guildResults = this._include(v.h8.GUILD) ? this._guildResults : []), (this._applicationResults = this._include(v.h8.APPLICATION) ? this._applicationResults : []), (this._linkResults = this._include(v.h8.LINK) ? this._linkResults : []), (this._inAppNavigations = this._include(v.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(v.h8.USER);
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.options = S({}, this.options, e)) : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith('user:') ? e.replace('user:', '') : ''))
                      .filter((e) => '' !== e))
                : (this._userBlacklist = null);
    }
    search(e, t) {
        if (((this.query = e), '' === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? s.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit), (this._groupDMResults = this.queryGroupDMs(e, this._limit)), (this._textChannelResults = this.queryTextChannels(e, this._limit)), (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)), (this._guildResults = this.queryGuilds(e, this._limit)), (this._applicationResults = this.queryApplications(e, this._limit)), (this._linkResults = this.queryLink(e, this._limit)), (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, P))) : this.updateAllResults();
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
        var e, t;
        null == (t = this.userSearchContext) || null == (e = t.unsubscribe) || e.call(t);
    }
    resume() {
        var e, t;
        null == (t = this.userSearchContext) || null == (e = t.subscribe) || e.call(t);
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, t) {
        if (!this._include(v.h8.TEXT_CHANNEL)) return [];
        let n = D(v.h8.TEXT_CHANNEL, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('channel:'.concat(e.id)) : void 0;
        return m.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(v.h8.VOICE_CHANNEL)) return [];
        let { voiceChannelGuildFilter: n } = this.options,
            r = D(v.h8.VOICE_CHANNEL, this.options);
        return m.ZP.queryChannels({
            query: e,
            guildId: n,
            limit: t,
            fuzzy: !0,
            type: _.Zb,
            boosters: r
        });
    }
    queryGuilds(e, t) {
        if (!this._include(v.h8.GUILD)) return [];
        let n = D(v.h8.GUILD, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('guild:'.concat(e.id)) : void 0;
        return m.ZP.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(v.h8.USER)) return;
        let { userFilters: i } = this.options;
        void 0 !== t && g.Z.requestMembers(t, e, 100), r.setLimit(n), r.setQuery(e, i, this._userBlacklist, D(v.h8.USER, this.options));
    }
    queryGroupDMs(e, t) {
        if (!this._include(v.h8.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = D(v.h8.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has('channel:'.concat(e.id)) : void 0;
        return m.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: r
        });
    }
    queryApplications(e, t) {
        return this._include(v.h8.APPLICATION)
            ? m.ZP.queryApplications({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(v.h8.LINK)) return [];
        let r = a().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: i, hostname: o = '', host: s } = n,
            l = E.Z.isDiscordHostname(o) || window.location.host === s;
        return null !== i && l && E.Z.isAppRoute(i)
            ? [
                  {
                      type: v.h8.LINK,
                      record: u.Z.fromPath(i),
                      score: 1
                  }
              ]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(v.h8.IN_APP_NAVIGATION)
            ? m.ZP.queryInAppNavigations({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    constructor(e, t, n = T, r = R) {
        I(this, 'query', ''),
            I(this, 'options', R),
            I(this, 'results', []),
            I(this, '_userResults', []),
            I(this, '_groupDMResults', []),
            I(this, '_textChannelResults', []),
            I(this, '_voiceChannelResults', []),
            I(this, '_guildResults', []),
            I(this, '_applicationResults', []),
            I(this, '_linkResults', []),
            I(this, '_inAppNavigations', []),
            I(this, '_asyncTimeout', void 0),
            I(this, 'userSearchContext', void 0),
            I(this, 'onResultsChange', void 0),
            I(this, 'resultTypes', void 0),
            I(this, '_userBlacklist', null),
            I(this, '_limit', void 0),
            I(this, 'parseUserResults', (e) => {
                let { results: t } = e;
                if (this._include(v.h8.USER)) {
                    for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
                        let t = h.default.getUser(e);
                        null != t &&
                            this._userResults.push({
                                type: v.h8.USER,
                                record: t,
                                score: w(n),
                                comparator: null != r ? r : void 0
                            });
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults();
                }
            }),
            I(this, 'updateAllResults', () => {
                clearTimeout(this._asyncTimeout),
                    (this.results = i()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations])
                        .uniqBy((e) => ''.concat(e.type, '-').concat(e.record.id))
                        .sort(y.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
}
