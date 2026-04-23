"use strict";
n.d(t, { A: () => R }), n(321073), n(323874), n(14289), n(35956);
var i = n(735438),
    r = n.n(i),
    s = n(791332),
    a = n.n(s),
    o = n(167189),
    l = n(833291),
    d = n(219065),
    _ = n(594061),
    u = n(315069),
    c = n(652215);
class E extends u.A {
    id;
    path;
    inviteCode;
    static fromPath(e) {
        return new E({ id: e, path: e });
    }
    static fromInviteCode(e) {
        return new E({ id: `invite:${e}`, path: c.BVt.INVITE(e), inviteCode: e });
    }
    constructor(e) {
        super(), (this.id = e.id), (this.path = e.path), (this.inviteCode = e.inviteCode);
    }
}
var h = n(808728),
    m = n(994500),
    f = n(287809),
    g = n(768038),
    p = n(695184),
    A = n(998218),
    I = n(450827),
    T = n(989133),
    S = n(926140);
let N = Object.freeze({});
function C(e, t) {
    return t.frecencyBoosters ? (0, g.X3)(e) : {};
}
class R {
    query = "";
    options = N;
    results = [];
    _userResults = [];
    _groupDMResults = [];
    _textChannelResults = [];
    _voiceChannelResults = [];
    _guildResults = [];
    _applicationResults = [];
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
    constructor(e, t, n = 100, i = N, r = 0) {
        (this.onResultsChange = e),
            this.setOptions(i, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = r),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = I.A.getUserSearchContext(this.parseUserResults, this._limit));
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
            this._linkResults.length > this._limit && (this._linkResults.length = this._limit),
            this._inAppNavigations.length > this._limit && (this._inAppNavigations.length = this._limit);
    }
    setRefetchForSingleCategoryLimit(e) {
        this._refetchForSingleCategoryLimit = e;
    }
    setResultTypes(e) {
        (this.resultTypes = null != e ? new Set(e) : null),
            (this._userResults = this._include(S.rD.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(S.rD.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(S.rD.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(S.rD.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(S.rD.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(S.rD.APPLICATION) ? this._applicationResults : []),
            (this._linkResults = this._include(S.rD.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(S.rD.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        return this._include(S.rD.USER) && this.options?.userFilters?.thread != null;
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
                      : this._linkResults.length > 0
                        ? (this._linkResults = this.queryLink(e, this._refetchForSingleCategoryLimit))
                        : this._inAppNavigations.length > 0 &&
                          (this._inAppNavigations = this.queryInAppNavigations(e, this._refetchForSingleCategoryLimit));
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
                (this._linkResults = this.queryLink(e, this._limit)),
                (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)),
                this._isAsyncSearch()
                    ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, 300)))
                    : this._include(S.rD.USER) || this.updateAllResults();
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
        if (!this._include(S.rD.TEXT_CHANNEL)) return [];
        let n = C(S.rD.TEXT_CHANNEL, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            s = null != r ? (e) => !r.has(`channel:${e.id}`) : void 0;
        return g.Ay.queryChannels({
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
        if (!this._include(S.rD.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: i } = this.options,
            r = C(S.rD.VOICE_CHANNEL, this.options);
        return g.Ay.queryChannels({
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
        if (!this._include(S.rD.GUILD)) return [];
        let n = C(S.rD.GUILD, this.options),
            { allowSnowflake: i, blacklist: r } = this.options,
            s = null != r ? (e) => !r.has(`guild:${e.id}`) : void 0;
        return g.Ay.queryGuilds({ query: e, limit: t, fuzzy: !0, filter: s, boosters: n, allowSnowflake: i });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: i } = this;
        if (null == i || !this._include(S.rD.USER)) return;
        let { allowSnowflake: r, userFilters: s } = this.options,
            a = C(S.rD.USER, this.options);
        if (s?.thread != null) {
            let t = d.A.getMemberListSections(s.thread),
                i = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds)
                    (!s?.friends || m.A.isFriend(e)) &&
                        (this._userBlacklist?.includes(e) || i.push({ userId: e, nick: n.usersById[e]?.displayName }));
            }
            this._userResults = g.Ay.queryUsers({ query: e, users: i, limit: n, boosters: a, allowSnowflake: r });
            return;
        }
        void 0 !== t && p.A.requestMembers(t, e, 100),
            i.setLimit(n),
            i.setQuery({ query: e, filters: s, blacklist: this._userBlacklist, boosters: a });
    }
    queryGroupDMs(e, t) {
        if (!this._include(S.rD.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            i = C(S.rD.GROUP_DM, this.options),
            r = null != n ? (e) => !n.has(`channel:${e.id}`) : void 0;
        return g.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, filter: r, boosters: i });
    }
    queryApplications(e, t) {
        return this._include(S.rD.APPLICATION) ? g.Ay.queryApplications({ query: e, limit: t, fuzzy: !0 }) : [];
    }
    queryLink(e, t) {
        let n;
        if (!this._include(S.rD.LINK)) return [];
        let i = (0, l.br)(e);
        if (i?.type === o.I.INVITE) return [{ type: S.rD.LINK, record: E.fromInviteCode(i.code), score: 1 }];
        let r = a().sanitizeUrl(e);
        try {
            n = new URL(r);
        } catch (e) {
            return [];
        }
        let { pathname: s, hostname: d = "", host: _ } = n,
            u = A.A.isDiscordHostname(d) || window.location.host === _;
        return null !== s && u && A.A.isAppRoute(s) ? [{ type: S.rD.LINK, record: E.fromPath(s), score: 1 }] : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(S.rD.IN_APP_NAVIGATION)
            ? g.Ay.queryInAppNavigations({ query: e, limit: t, fuzzy: !0 })
            : [];
    }
    parseUserResults = (e) => {
        let { results: t } = e;
        if (!this._include(S.rD.USER)) return;
        for (let { id: e, score: n, comparator: i } of ((this._userResults = []), t)) {
            let t = f.default.getUser(e);
            null != t &&
                this._userResults.push({ type: S.rD.USER, record: t, score: (0, g.zy)(n), comparator: i ?? void 0 });
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
                ...this._linkResults,
                ...this._inAppNavigations,
            ])
                .uniqBy((e) => `${e.type}-${e.record.id}`)
                .sort(T.A)
                .value()),
            this.onResultsChange(this.results, this.query);
    };
}
