"use strict";
n.d(t, { A: () => O }), n(321073), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(167189),
    l = n(833291),
    u = n(929396),
    c = n(439864),
    d = n(219065),
    _ = n(594061),
    h = n(315069),
    f = n(652215);
class p extends h.A {
    id;
    path;
    inviteCode;
    static fromPath(e) {
        return new p({ id: e, path: e });
    }
    static fromInviteCode(e) {
        return new p({ id: `invite:${e}`, path: f.BVt.INVITE(e), inviteCode: e });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.path = e.path), (this.inviteCode = e.inviteCode);
    }
}
var E = n(808728),
    m = n(994500),
    g = n(287809),
    A = n(768038),
    I = n(695184),
    T = n(240248),
    S = n(998218),
    y = n(450827),
    C = n(989133),
    N = n(926140);
let v = Object.freeze({});
function R(e, t) {
    return t.frecencyBoosters ? (0, A.X3)(e) : {};
}
class O {
    query = "";
    options = v;
    results = [];
    _userResults = [];
    _groupDMResults = [];
    _textChannelResults = [];
    _voiceChannelResults = [];
    _guildResults = [];
    _applicationResults = [];
    _gameProfileResults = [];
    _linkResults = [];
    _inAppNavigations = [];
    _asyncTimeout;
    userSearchContext;
    onResultsChange;
    resultTypes;
    _userBlacklist = null;
    _limit;
    _refetchForSingleCategoryLimit;
    _refetched = !1;
    constructor(e, t, n = 100, i = v, r = 0) {
        (this.onResultsChange = e),
            this.setOptions(i, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = r),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = y.A.getUserSearchContext(this.parseUserResults, this._limit));
    }
    setLimit(e) {
        let { userSearchContext: t } = this;
        (this._limit = e),
            null != t && t.setLimit(e),
            this._userResults.length > this._limit && (this._userResults.length = this._limit),
            this._groupDMResults.length > this._limit && (this._groupDMResults.length = this._limit),
            this._textChannelResults.length > this._limit && (this._textChannelResults.length = this._limit),
            this._voiceChannelResults.length > this._limit && (this._voiceChannelResults.length = this._limit),
            this._guildResults.length > this._limit && (this._guildResults.length = this._limit),
            this._applicationResults.length > this._limit && (this._applicationResults.length = this._limit),
            this._gameProfileResults.length > this._limit && (this._gameProfileResults.length = this._limit),
            this._linkResults.length > this._limit && (this._linkResults.length = this._limit),
            this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setRefetchForSingleCategoryLimit(e) {
        this._refetchForSingleCategoryLimit = e;
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null),
            (this._userResults = this._include(N.rD.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(N.rD.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(N.rD.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(N.rD.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(N.rD.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(N.rD.APPLICATION) ? this._applicationResults : []),
            (this._gameProfileResults = this._include(N.rD.GAME_PROFILE) ? this._gameProfileResults : []),
            (this._linkResults = this._include(N.rD.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(N.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(N.rD.USER) && this.options?.userFilters?.thread != null;
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.options = { ...this.options, ...e }) : (this.options = e),
            null != this.options.blacklist
                ? (this._userBlacklist = Array.from(this.options.blacklist)
                      .map((e) => (e.startsWith("user:") ? e.replace("user:", "") : ""))
                      .filter((e) => "" !== e))
                : (this._userBlacklist = null);
    }
    _willRefetchIfSingleCategoryResults() {
        return (
            !this._refetched &&
            !(this._refetchForSingleCategoryLimit <= 5) &&
            null == this.options.voiceChannelGuildFilter &&
            null == this.options.userFilters &&
            1 ===
                [
                    this._userResults,
                    this._groupDMResults,
                    this._textChannelResults,
                    this._voiceChannelResults,
                    this._guildResults,
                    this._applicationResults,
                    this._gameProfileResults,
                    this._linkResults,
                    this._inAppNavigations,
                ].filter((e) => e.length > 0).length
        );
    }
    refetchIfSingleCategoryResults() {
        if (!this._willRefetchIfSingleCategoryResults()) return;
        this._refetched = !0;
        let e = this.query;
        this._userResults.length > 0
            ? this.queryUsers(e, null, this._refetchForSingleCategoryLimit)
            : this._groupDMResults.length > 0
              ? (this._groupDMResults = this.queryGroupDMs(e, this._refetchForSingleCategoryLimit))
              : this._textChannelResults.length > 0
                ? (this._textChannelResults = this.queryTextChannels(e, this._refetchForSingleCategoryLimit))
                : this._voiceChannelResults.length > 0
                  ? (this._voiceChannelResults = this.queryVoiceChannels(e, this._refetchForSingleCategoryLimit))
                  : this._guildResults.length > 0
                    ? (this._guildResults = this.queryGuilds(e, this._refetchForSingleCategoryLimit))
                    : this._applicationResults.length > 0
                      ? (this._applicationResults = this.queryApplications(e, this._refetchForSingleCategoryLimit))
                      : this._gameProfileResults.length > 0
                        ? (this._gameProfileResults = this.queryGameProfiles(e, this._refetchForSingleCategoryLimit))
                        : this._linkResults.length > 0
                          ? (this._linkResults = this.queryLink(e, this._refetchForSingleCategoryLimit))
                          : this._inAppNavigations.length > 0 &&
                            (this._inAppNavigations = this.queryInAppNavigations(
                                e,
                                this._refetchForSingleCategoryLimit,
                            ));
    }
    search(e, t) {
        if (((this.query = e), (this._refetched = !1), "" === e.trim())) {
            this.clear(), this.updateAllResults();
            return;
        }
        (this.options.frecencyBoosters ? _.bW.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit),
                (this._groupDMResults = this.queryGroupDMs(e, this._limit)),
                (this._textChannelResults = this.queryTextChannels(e, this._limit)),
                (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)),
                (this._guildResults = this.queryGuilds(e, this._limit)),
                (this._applicationResults = this.queryApplications(e, this._limit)),
                (this._gameProfileResults = this.queryGameProfiles(e, this._limit)),
                (this._linkResults = this.queryLink(e, this._limit)),
                (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)),
                this._isAsyncSearch()
                    ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, 300)))
                    : this._include(N.rD.USER) || this.updateAllResults();
        });
    }
    clear() {
        let { userSearchContext: e } = this;
        null != e && e.clearQuery(),
            (this.results = []),
            (this._userResults = []),
            (this._groupDMResults = []),
            (this._textChannelResults = []),
            (this._voiceChannelResults = []),
            (this._guildResults = []),
            (this._applicationResults = []),
            (this._gameProfileResults = []),
            (this._linkResults = []),
            (this._inAppNavigations = []);
    }
    clean() {
        this.clear(), this.destroy(), (this.query = ""), this.updateAllResults();
    }
    pause() {
        this.userSearchContext?.unsubscribe?.();
    }
    resume() {
        this.userSearchContext?.subscribe?.();
    }
    destroy() {
        let { userSearchContext: e } = this;
        null != e && (e.destroy(), (this.userSearchContext = null));
    }
    queryTextChannels(e, t) {
        if (!this._include(N.rD.TEXT_CHANNEL)) return [];
        let n = R(N.rD.TEXT_CHANNEL, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            s = null != r ? (e) => !r.has(`channel:${e.id}`) : void 0;
        return A.Ay.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            allowSnowflake: i,
            filter: s,
            boosters: n,
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(N.rD.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: i } = this.options,
            r = R(N.rD.VOICE_CHANNEL, this.options);
        return A.Ay.queryChannels({
            query: e,
            guildId: i,
            limit: t,
            fuzzy: !0,
            type: E.vM,
            allowSnowflake: n,
            boosters: r,
        });
    }
    queryGuilds(e, t) {
        if (!this._include(N.rD.GUILD)) return [];
        let n = R(N.rD.GUILD, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            s = null != r ? (e) => !r.has(`guild:${e.id}`) : void 0;
        return A.Ay.queryGuilds({ query: e, limit: t, fuzzy: !0, filter: s, boosters: n, allowSnowflake: i });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: i } = this;
        if (null == i || !this._include(N.rD.USER)) return;
        let { allowSnowflake: r, userFilters: s } = this.options,
            a = R(N.rD.USER, this.options);
        if (s?.thread != null) {
            let t = d.A.getMemberListSections(s.thread),
                i = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds)
                    (!s?.friends || m.A.isFriend(e)) &&
                        (this._userBlacklist?.includes(e) || i.push({ userId: e, nick: n.usersById[e]?.displayName }));
            }
            this._userResults = A.Ay.queryUsers({ query: e, users: i, limit: n, boosters: a, allowSnowflake: r });
            return;
        }
        void 0 !== t && I.A.requestMembers(t, e, 100),
            i.setLimit(n),
            i.setQuery({ query: e, filters: s, blacklist: this._userBlacklist, boosters: a });
    }
    queryGroupDMs(e, t) {
        if (!this._include(N.rD.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            i = R(N.rD.GROUP_DM, this.options),
            r = null != n ? (e) => !n.has(`channel:${e.id}`) : void 0;
        return A.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, filter: r, boosters: i });
    }
    queryApplications(e, t) {
        return this._include(N.rD.APPLICATION) ? A.Ay.queryApplications({ query: e, limit: t, fuzzy: !0 }) : [];
    }
    queryGameProfiles(e, t) {
        if (!this._include(N.rD.GAME_PROFILE)) return [];
        let n = (0, c.q)(e, "Autocompleter.queryGameProfiles") ?? A.Ay.queryGames(e, t).map(u.Sj),
            i = e.toLocaleLowerCase();
        return n
            .slice(0, t)
            .map((e, t) => ({
                type: N.rD.GAME_PROFILE,
                record: e,
                score: (0, A.zy)((0, A.XA)(e.name, i, t)),
                comparator: e.name,
                sortable: e.name.toLocaleLowerCase(),
            }));
    }
    refreshGameProfiles() {
        !(0, T.uJ)(this.query.trim()) &&
            this._include(N.rD.GAME_PROFILE) &&
            ((this._gameProfileResults = this.queryGameProfiles(this.query, this._limit)), this.updateAllResults());
    }
    queryLink(e, t) {
        let n;
        if (!this._include(N.rD.LINK)) return [];
        let i = (0, l.br)(e);
        if (i?.type === o.I.INVITE) return [{ type: N.rD.LINK, record: p.fromInviteCode(i.code), score: 1 }];
        let r = a().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: s, hostname: u = "", host: c } = n,
            d = S.A.isDiscordHostname(u) || window.location.host === c;
        return null !== s && d && S.A.isAppRoute(s) ? [{ type: N.rD.LINK, record: p.fromPath(s), score: 1 }] : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(N.rD.IN_APP_NAVIGATION)
            ? A.Ay.queryInAppNavigations({ query: e, limit: t, fuzzy: !0 })
            : [];
    }
    parseUserResults = (e) => {
        let { results: t } = e;
        if (!this._include(N.rD.USER)) return;
        for (let { id: e, score: n, comparator: i } of ((this._userResults = []), t)) {
            let t = g.default.getUser(e);
            null != t &&
                this._userResults.push({ type: N.rD.USER, record: t, score: (0, A.zy)(n), comparator: i ?? void 0 });
        }
        let n = this._willRefetchIfSingleCategoryResults();
        !n && this._userResults.length > this._limit && (this._userResults.length = this._limit),
            n && this.refetchIfSingleCategoryResults(),
            this.updateAllResults();
    };
    updateAllResults = () => {
        clearTimeout(this._asyncTimeout),
            (this.results = r()([
                ...this._userResults,
                ...this._groupDMResults,
                ...this._textChannelResults,
                ...this._voiceChannelResults,
                ...this._guildResults,
                ...this._gameProfileResults,
                ...this._linkResults,
                ...this._inAppNavigations,
            ])
                .uniqBy((e) => `${e.type}-${e.record.id}`)
                .sort(C.A)
                .value()),
            this.onResultsChange(this.results, this.query);
    };
}
