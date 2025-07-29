(n.d(t, { Z: () => S }), n(388685), n(704826), n(35282), n(781311), n(457542), n(539854), n(190126), n(368063), n(65234), n(111804), n(490233), n(97749), n(642613));
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(159299),
    l = n(675478),
    c = n(709302),
    u = n(984933),
    d = n(699516),
    _ = n(594174),
    f = n(483360),
    p = n(892880),
    h = n(591759),
    m = n(279779),
    g = n(620490),
    E = n(727785);
function b(e, t, n) {
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
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
let O = 100,
    v = Object.freeze({}),
    I = 300;
function T(e, t) {
    return t.frecencyBoosters ? (0, f.Cq)(e) : {};
}
class S {
    createSearchContext() {
        null == this.userSearchContext && (this.userSearchContext = m.Z.getUserSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        ((this._limit = e), null != t && t.setLimit(e), this._userResults.length > this._limit && (this._userResults.length = this._limit), this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit), this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit), this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit), this._guildResults.length > this._limit && (this._guildResults.length = this._limit), this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit), this._linkResults.length > this._limit && (this._linkResults.length = this._limit), this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit));
    }
    setResultTypes(e) {
        ((this.resultTypes = null != e ? new Set(e) : null), (this._userResults = this._include(E.h8.USER) ? this._userResults : []), (this._groupDMResults = this._include(E.h8.GROUP_DM) ? this._groupDMResults : []), (this._textChannelResults = this._include(E.h8.TEXT_CHANNEL) ? this._textChannelResults : []), (this._voiceChannelResults = this._include(E.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []), (this._guildResults = this._include(E.h8.GUILD) ? this._guildResults : []), (this._applicationResults = this._include(E.h8.APPLICATION) ? this._applicationResults : []), (this._linkResults = this._include(E.h8.LINK) ? this._linkResults : []), (this._inAppNavigations = this._include(E.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []));
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        var e, t;
        return this._include(E.h8.USER) && (null == (t = this.options) || null == (e = t.userFilters) ? void 0 : e.thread) != null;
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (t ? (this.options = y({}, this.options, e)) : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith('user:') ? e.replace('user:', '') : ''))
                      .filter((e) => '' !== e))
                : (this._userBlacklist = null));
    }
    search(e, t) {
        if (((this.query = e), '' === e.trim())) {
            (this.clear(), this.updateAllResults());
            return;
        }
        (this.options.frecencyBoosters ? l.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            (this.queryUsers(e, t, this._limit), (this._groupDMResults = this.queryGroupDMs(e, this._limit)), (this._textChannelResults = this.queryTextChannels(e, this._limit)), (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)), (this._guildResults = this.queryGuilds(e, this._limit)), (this._applicationResults = this.queryApplications(e, this._limit)), (this._linkResults = this.queryLink(e, this._limit)), (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)), this._isAsyncSearch() ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, I))) : this.updateAllResults());
        });
    }
    clear() {
        let { userSearchContext: e } = this;
        (null != e && e.clearQuery(), (this.results = []), (this._userResults = []), (this._groupDMResults = []), (this._textChannelResults = []), (this._voiceChannelResults = []), (this._guildResults = []), (this._applicationResults = []), (this._linkResults = []), (this._inAppNavigations = []));
    }
    clean() {
        (this.clear(), this.destroy(), (this.query = ''), this.updateAllResults());
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
        if (!this._include(E.h8.TEXT_CHANNEL)) return [];
        let n = T(E.h8.TEXT_CHANNEL, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('channel:'.concat(e.id)) : void 0;
        return f.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(E.h8.VOICE_CHANNEL)) return [];
        let { voiceChannelGuildFilter: n } = this.options,
            r = T(E.h8.VOICE_CHANNEL, this.options);
        return f.ZP.queryChannels({
            query: e,
            guildId: n,
            limit: t,
            fuzzy: !0,
            type: u.Zb,
            boosters: r
        });
    }
    queryGuilds(e, t) {
        if (!this._include(E.h8.GUILD)) return [];
        let n = T(E.h8.GUILD, this.options),
            { blacklist: r } = this.options,
            i = null != r ? (e) => !r.has('guild:'.concat(e.id)) : void 0;
        return f.ZP.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: n
        });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(E.h8.USER)) return;
        let { userFilters: i } = this.options,
            a = T(E.h8.USER, this.options);
        if ((null == i ? void 0 : i.thread) != null) {
            let t = s.Z.getMemberListSections(i.thread),
                r = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds) {
                    var o, l, c;
                    (null == i || !i.friends || d.Z.isFriend(e)) &&
                        ((null != (c = null == (o = this._userBlacklist) ? void 0 : o.includes(e)) && c) ||
                            r.push({
                                userId: e,
                                nick: null == (l = n.usersById[e]) ? void 0 : l.displayName
                            }));
                }
            }
            this._userResults = f.ZP.queryUsers({
                query: e,
                users: r,
                limit: n,
                boosters: a
            });
            return;
        }
        (void 0 !== t && p.Z.requestMembers(t, e, 100),
            r.setLimit(n),
            r.setQuery({
                query: e,
                filters: i,
                blacklist: this._userBlacklist,
                boosters: a
            }));
    }
    queryGroupDMs(e, t) {
        if (!this._include(E.h8.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = T(E.h8.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has('channel:'.concat(e.id)) : void 0;
        return f.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: r
        });
    }
    queryApplications(e, t) {
        return this._include(E.h8.APPLICATION)
            ? f.ZP.queryApplications({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(E.h8.LINK)) return [];
        let r = o().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: i, hostname: a = '', host: s } = n,
            l = h.Z.isDiscordHostname(a) || window.location.host === s;
        return null !== i && l && h.Z.isAppRoute(i)
            ? [
                  {
                      type: E.h8.LINK,
                      record: c.Z.fromPath(i),
                      score: 1
                  }
              ]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(E.h8.IN_APP_NAVIGATION)
            ? f.ZP.queryInAppNavigations({
                  query: e,
                  limit: t,
                  fuzzy: !0
              })
            : [];
    }
    constructor(e, t, n = O, r = v) {
        (b(this, 'query', ''),
            b(this, 'options', v),
            b(this, 'results', []),
            b(this, '_userResults', []),
            b(this, '_groupDMResults', []),
            b(this, '_textChannelResults', []),
            b(this, '_voiceChannelResults', []),
            b(this, '_guildResults', []),
            b(this, '_applicationResults', []),
            b(this, '_linkResults', []),
            b(this, '_inAppNavigations', []),
            b(this, '_asyncTimeout', void 0),
            b(this, 'userSearchContext', void 0),
            b(this, 'onResultsChange', void 0),
            b(this, 'resultTypes', void 0),
            b(this, '_userBlacklist', null),
            b(this, '_limit', void 0),
            b(this, 'parseUserResults', (e) => {
                let { results: t } = e;
                if (this._include(E.h8.USER)) {
                    for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
                        let t = _.default.getUser(e);
                        null != t &&
                            this._userResults.push({
                                type: E.h8.USER,
                                record: t,
                                score: (0, f.mB)(n),
                                comparator: null != r ? r : void 0
                            });
                    }
                    (this._userResults.length > this._limit && (this._userResults.length = this._limit), this.updateAllResults());
                }
            }),
            b(this, 'updateAllResults', () => {
                (clearTimeout(this._asyncTimeout),
                    (this.results = i()([...this._userResults, ...this._groupDMResults, ...this._textChannelResults, ...this._voiceChannelResults, ...this._guildResults, ...this._linkResults, ...this._inAppNavigations])
                        .uniqBy((e) => ''.concat(e.type, '-').concat(e.record.id))
                        .sort(g.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query));
            }),
            (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            this.createSearchContext(),
            this.setResultTypes(t));
    }
}
