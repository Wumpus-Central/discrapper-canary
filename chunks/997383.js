n.d(t, { Z: () => L }), n(724458), n(47120), n(757143), n(773603), n(315314), n(309749), n(610138), n(216116), n(78328), n(815648), n(653041);
var i = n(392711),
    r = n.n(i),
    a = n(477660),
    s = n.n(a),
    o = n(675478),
    l = n(131704),
    u = n(601964),
    c = n(709302),
    d = n(592125),
    f = n(580005),
    _ = n(984933),
    p = n(699516),
    h = n(594174),
    m = n(483360),
    g = n(892880),
    E = n(591759),
    v = n(279779),
    y = n(620490),
    I = n(727785),
    b = n(981631);
function T(e, t, n) {
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
let S = 100,
    A = 1000,
    N = 0.2,
    C = 0.1,
    R = Object.freeze({}),
    O = 300;
function D() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 ? arguments[1] : void 0;
    return A * e * (null != t ? t : 1);
}
function x(e, t) {
    var n, i;
    if (!t.frecencyBoosters) return {};
    let r = f.Z.getFrequentlyWithoutFetchingLatest(),
        a = r.reduce((e, t) => {
            let { id: n } = t,
                i = f.Z.getScoreWithoutFetchingLatest(n);
            return i > e ? i : e;
        }, 0),
        s = [];
    switch (e) {
        case I.h8.GUILD:
            s = r.filter((e) => e instanceof u.ZP);
            break;
        case I.h8.USER:
            s = r.filter((e) => e instanceof l.Sf && e.type === b.d4z.DM);
            break;
        case I.h8.GROUP_DM:
            s = r.filter((e) => e instanceof l.Sf && e.isMultiUserDM());
            break;
        case I.h8.TEXT_CHANNEL:
            s = r.filter((e) => e instanceof l.Sf && (0, l.r8)(e.type));
            break;
        case I.h8.VOICE_CHANNEL:
            s = r.filter((e) => e instanceof l.Sf && e.isGuildVocal());
    }
    let o = {};
    for (let t of s) {
        let { id: n } = t,
            i = f.Z.getScoreWithoutFetchingLatest(n);
        if (e === I.h8.USER && t instanceof l.mn) {
            if (t.type === b.d4z.DM) o[(n = t.getRecipientId())] = 1 + i / a;
            else if (t.type === b.d4z.GROUP_DM) {
                let e = t.recipients.length;
                for (let n of t.recipients) o[n] = 1 + (i / a) * (1 / e);
            }
        } else o[n] = 1 + i / a;
    }
    for (let e of p.Z.getFriendIDs()) o[e] = (null !== (n = o[e]) && void 0 !== n ? n : 1) + N;
    for (let e of d.Z.getDMUserIds()) o[e] = (null !== (i = o[e]) && void 0 !== i ? i : 1) + C;
    return o;
}
class L {
    createSearchContext() {
        null == this.userSearchContext && (this.userSearchContext = v.Z.getSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        (this._limit = e), null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null), (this._userResults = this._include(I.h8.USER) ? this._userResults : []), (this._groupDMResults = this._include(I.h8.GROUP_DM) ? this._groupDMResults : []), (this._textChannelResults = this._include(I.h8.TEXT_CHANNEL) ? this._textChannelResults : []), (this._voiceChannelResults = this._include(I.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []), (this._guildResults = this._include(I.h8.GUILD) ? this._guildResults : []), (this._applicationResults = this._include(I.h8.APPLICATION) ? this._applicationResults : []), (this._linkResults = this._include(I.h8.LINK) ? this._linkResults : []), (this._inAppNavigations = this._include(I.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(I.h8.USER);
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t
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
    search(e, t) {
        if (((this.query = e), '' === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? o.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit), (this._groupDMResults = this.queryGroupDMs(e, this._limit)), (this._textChannelResults = this.queryTextChannels(e, this._limit)), (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)), (this._guildResults = this.queryGuilds(e, this._limit)), (this._applicationResults = this.queryApplications(e, this._limit)), (this._linkResults = this.queryLink(e, this._limit)), (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, O))) : this.updateAllResults();
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
        null === (t = this.userSearchContext) || void 0 === t || null === (e = t.unsubscribe) || void 0 === e || e.call(t);
    }
    resume() {
        var e, t;
        null === (t = this.userSearchContext) || void 0 === t || null === (e = t.subscribe) || void 0 === e || e.call(t);
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, t) {
        if (!this._include(I.h8.TEXT_CHANNEL)) return [];
        let n = x(I.h8.TEXT_CHANNEL, this.options),
            { blacklist: i } = this.options,
            r = null != i ? (e) => !i.has('channel:'.concat(e.id)) : void 0;
        return m.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            filter: r,
            boosters: n
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(I.h8.VOICE_CHANNEL)) return [];
        let { voiceChannelGuildFilter: n } = this.options,
            i = x(I.h8.VOICE_CHANNEL, this.options);
        return m.ZP.queryChannels({
            query: e,
            guildId: n,
            limit: t,
            fuzzy: !0,
            type: _.Zb,
            boosters: i
        });
    }
    queryGuilds(e, t) {
        if (!this._include(I.h8.GUILD)) return [];
        let n = x(I.h8.GUILD, this.options),
            { blacklist: i } = this.options,
            r = null != i ? (e) => !i.has('guild:'.concat(e.id)) : void 0;
        return m.ZP.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: r,
            boosters: n
        });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: i } = this;
        if (null == i || !this._include(I.h8.USER)) return;
        let { userFilters: r } = this.options;
        void 0 !== t && g.Z.requestMembers(t, e, 100), i.setLimit(n), i.setQuery(e, r, this._userBlacklist, x(I.h8.USER, this.options));
    }
    queryGroupDMs(e, t) {
        if (!this._include(I.h8.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            i = x(I.h8.GROUP_DM, this.options),
            r = null != n ? (e) => !n.has('channel:'.concat(e.id)) : void 0;
        return m.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: r,
            boosters: i
        });
    }
    queryApplications(e, t) {
        return this._include(I.h8.APPLICATION)
            ? m.ZP.queryApplications({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(I.h8.LINK)) return [];
        let i = s().sanitizeUrl(e);
        try {
            n = new URL(i);
        } catch (e) {
            return [];
        }
        let { pathname: r, hostname: a = '', host: o } = n,
            l = E.Z.isDiscordHostname(a) || window.location.host === o;
        return null !== r && l && E.Z.isAppRoute(r)
            ? [
                  {
                      type: I.h8.LINK,
                      record: c.Z.fromPath(r),
                      score: 1
                  }
              ]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(I.h8.IN_APP_NAVIGATION)
            ? m.ZP.queryInAppNavigations({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    constructor(e, t, n = S, i = R) {
        T(this, 'query', ''),
            T(this, 'options', R),
            T(this, 'results', []),
            T(this, '_userResults', []),
            T(this, '_groupDMResults', []),
            T(this, '_textChannelResults', []),
            T(this, '_voiceChannelResults', []),
            T(this, '_guildResults', []),
            T(this, '_applicationResults', []),
            T(this, '_linkResults', []),
            T(this, '_inAppNavigations', []),
            T(this, '_asyncTimeout', void 0),
            T(this, 'userSearchContext', void 0),
            T(this, 'onResultsChange', void 0),
            T(this, 'resultTypes', void 0),
            T(this, '_userBlacklist', null),
            T(this, '_limit', void 0),
            T(this, 'parseUserResults', (e) => {
                let { results: t } = e;
                if (this._include(I.h8.USER)) {
                    for (let { id: e, score: n, comparator: i } of ((this._userResults = []), t)) {
                        let t = h.default.getUser(e);
                        null != t &&
                            this._userResults.push({
                                type: I.h8.USER,
                                record: t,
                                score: D(n),
                                comparator: null != i ? i : void 0
                            });
                    }
                    this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults();
                }
            }),
            T(this, 'updateAllResults', () => {
                clearTimeout(this._asyncTimeout),
                    (this.results = r()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations])
                        .uniqBy((e) => ''.concat(e.type, '-').concat(e.record.id))
                        .sort(y.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(i, !0),
            (this._limit = n),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
}
