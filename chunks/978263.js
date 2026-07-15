"use strict";
n.d(t, { A: () => L }), n(321073), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    a = n(791332),
    s = n.n(a),
    l = n(167189),
    o = n(833291),
    d = n(439864),
    c = n(219065),
    u = n(594061),
    _ = n(315069),
    E = n(652215);
class A extends _.A {
    id;
    path;
    inviteCode;
    static fromPath(e) {
        return new A({ id: e, path: e });
    }
    static fromInviteCode(e) {
        return new A({ id: `invite:${e}`, path: E.BVt.INVITE(e), inviteCode: e });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.path = e.path), (this.inviteCode = e.inviteCode);
    }
}
var h = n(808728),
    I = n(994500),
    f = n(287809),
    p = n(768038),
    T = n(695184),
    m = n(240248),
    g = n(998218),
    S = n(450827),
    N = n(989133),
    C = n(926140);
let O = Object.freeze({});
function R(e, t) {
    return t.frecencyBoosters ? (0, p.X3)(e) : {};
}
class L {
    query = "";
    options = O;
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
    constructor(e, t, n = 100, i = O, r = 0) {
        (this.onResultsChange = e),
            this.setOptions(i, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = r),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = S.A.getUserSearchContext(this.parseUserResults, this._limit));
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
            (this._userResults = this._include(C.rD.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(C.rD.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(C.rD.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(C.rD.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(C.rD.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(C.rD.APPLICATION) ? this._applicationResults : []),
            (this._gameProfileResults = this._include(C.rD.GAME_PROFILE) ? this._gameProfileResults : []),
            (this._linkResults = this._include(C.rD.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(C.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(C.rD.USER) && this.options?.userFilters?.thread != null;
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
        (this.options.frecencyBoosters ? u.bW.loadIfNecessary() : Promise.resolve()).finally(() => {
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
                    : this._include(C.rD.USER) || this.updateAllResults();
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
        if (!this._include(C.rD.TEXT_CHANNEL)) return [];
        let n = R(C.rD.TEXT_CHANNEL, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            a = null != r ? (e) => !r.has(`channel:${e.id}`) : void 0;
        return p.Ay.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            allowSnowflake: i,
            filter: a,
            boosters: n,
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(C.rD.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: i } = this.options,
            r = R(C.rD.VOICE_CHANNEL, this.options);
        return p.Ay.queryChannels({
            query: e,
            guildId: i,
            limit: t,
            fuzzy: !0,
            type: h.vM,
            allowSnowflake: n,
            boosters: r,
        });
    }
    queryGuilds(e, t) {
        if (!this._include(C.rD.GUILD)) return [];
        let n = R(C.rD.GUILD, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            a = null != r ? (e) => !r.has(`guild:${e.id}`) : void 0;
        return p.Ay.queryGuilds({ query: e, limit: t, fuzzy: !0, filter: a, boosters: n, allowSnowflake: i });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: i } = this;
        if (null == i || !this._include(C.rD.USER)) return;
        let { allowSnowflake: r, userFilters: a } = this.options,
            s = R(C.rD.USER, this.options);
        if (a?.thread != null) {
            let t = c.A.getMemberListSections(a.thread),
                i = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds)
                    (!a?.friends || I.A.isFriend(e)) &&
                        (this._userBlacklist?.includes(e) || i.push({ userId: e, nick: n.usersById[e]?.displayName }));
            }
            this._userResults = p.Ay.queryUsers({ query: e, users: i, limit: n, boosters: s, allowSnowflake: r });
            return;
        }
        void 0 !== t && T.A.requestMembers(t, e, 100),
            i.setLimit(n),
            i.setQuery({ query: e, filters: a, blacklist: this._userBlacklist, boosters: s });
    }
    queryGroupDMs(e, t) {
        if (!this._include(C.rD.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            i = R(C.rD.GROUP_DM, this.options),
            r = null != n ? (e) => !n.has(`channel:${e.id}`) : void 0;
        return p.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, filter: r, boosters: i });
    }
    queryApplications(e, t) {
        return this._include(C.rD.APPLICATION) ? p.Ay.queryApplications({ query: e, limit: t, fuzzy: !0 }) : [];
    }
    queryGameProfiles(e, t) {
        if (!this._include(C.rD.GAME_PROFILE)) return [];
        let n = (0, d.q)(e) ?? [],
            i = e.toLocaleLowerCase();
        return n
            .slice(0, t)
            .map((e, t) => ({
                type: C.rD.GAME_PROFILE,
                record: e,
                score: (0, p.zy)((0, p.XA)(e.name, i, t)),
                comparator: e.name,
                sortable: e.name.toLocaleLowerCase(),
            }));
    }
    refreshGameProfiles() {
        !(0, m.uJ)(this.query.trim()) &&
            this._include(C.rD.GAME_PROFILE) &&
            ((this._gameProfileResults = this.queryGameProfiles(this.query, this._limit)), this.updateAllResults());
    }
    queryLink(e, t) {
        let n;
        if (!this._include(C.rD.LINK)) return [];
        let i = (0, o.br)(e);
        if (i?.type === l.I.INVITE)
            return [{ type: C.rD.LINK, record: A.fromInviteCode(i.code), score: (0, p.zy)(11) }];
        let r = s().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: a, hostname: d = "", host: c } = n,
            u = g.A.isDiscordHostname(d) || window.location.host === c;
        return null !== a && u && g.A.isAppRoute(a)
            ? [{ type: C.rD.LINK, record: A.fromPath(a), score: (0, p.zy)(11) }]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(C.rD.IN_APP_NAVIGATION)
            ? p.Ay.queryInAppNavigations({ query: e, limit: t, fuzzy: !0 })
            : [];
    }
    parseUserResults = (e) => {
        let { results: t } = e;
        if (!this._include(C.rD.USER)) return;
        for (let { id: e, score: n, comparator: i } of ((this._userResults = []), t)) {
            let t = f.default.getUser(e);
            null != t &&
                this._userResults.push({ type: C.rD.USER, record: t, score: (0, p.zy)(n), comparator: i ?? void 0 });
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
                .sort(N.A)
                .value()),
            this.onResultsChange(this.results, this.query);
    };
}
