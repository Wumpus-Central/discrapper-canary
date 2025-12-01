n.d(t, { Z: () => T }),
    n(388685),
    n(704826),
    n(35282),
    n(781311),
    n(457542),
    n(539854),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(642613);
var r = n(392711),
    i = n.n(r),
    a = n(159635),
    o = n.n(a),
    s = n(159299),
    l = n(675478),
    c = n(709302),
    u = n(984933),
    d = n(699516),
    f = n(594174),
    p = n(483360),
    _ = n(892880),
    m = n(591759),
    h = n(279779),
    g = n(620490),
    E = n(727785);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
let O = 100,
    v = Object.freeze({}),
    S = 300;
function I(e, t) {
    return t.frecencyBoosters ? (0, p.Cq)(e) : {};
}
class T {
    createSearchContext() {
        null == this.userSearchContext &&
            (this.userSearchContext = h.Z.getUserSearchContext(this.parseUserResults, this._limit));
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
            (this._userResults = this._include(E.h8.USER) ? this._userResults : []),
            (this._groupDMResults = this._include(E.h8.GROUP_DM) ? this._groupDMResults : []),
            (this._textChannelResults = this._include(E.h8.TEXT_CHANNEL) ? this._textChannelResults : []),
            (this._voiceChannelResults = this._include(E.h8.VOICE_CHANNEL) ? this._voiceChannelResults : []),
            (this._guildResults = this._include(E.h8.GUILD) ? this._guildResults : []),
            (this._applicationResults = this._include(E.h8.APPLICATION) ? this._applicationResults : []),
            (this._linkResults = this._include(E.h8.LINK) ? this._linkResults : []),
            (this._inAppNavigations = this._include(E.h8.IN_APP_NAVIGATION) ? this._inAppNavigations : []);
    }
    _include(e) {
        return null == this.resultTypes || this.resultTypes.has(e);
    }
    _isAsyncSearch() {
        var e, t;
        return (
            this._include(E.h8.USER) &&
            (null == (t = this.options) || null == (e = t.userFilters) ? void 0 : e.thread) != null
        );
    }
    setOptions(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        t ? (this.options = y({}, this.options, e)) : (this.options = e),
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
        (this.options.frecencyBoosters ? l.DZ.loadIfNecessary() : Promise.resolve()).finally(() => {
            this.queryUsers(e, t, this._limit),
                (this._groupDMResults = this.queryGroupDMs(e, this._limit)),
                (this._textChannelResults = this.queryTextChannels(e, this._limit)),
                (this._voiceChannelResults = this.queryVoiceChannels(e, this._limit)),
                (this._guildResults = this.queryGuilds(e, this._limit)),
                (this._applicationResults = this.queryApplications(e, this._limit)),
                (this._linkResults = this.queryLink(e, this._limit)),
                (this._inAppNavigations = this.queryInAppNavigations(e, this._limit)),
                this._isAsyncSearch()
                    ? (clearTimeout(this._asyncTimeout), (this._asyncTimeout = setTimeout(this.updateAllResults, S)))
                    : this._include(E.h8.USER) || this.updateAllResults();
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
        let n = I(E.h8.TEXT_CHANNEL, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            a = null != i ? (e) => !i.has("channel:".concat(e.id)) : void 0;
        return p.ZP.queryChannels({
            query: e,
            guildId: null,
            limit: t,
            fuzzy: !0,
            allowSnowflake: r,
            filter: a,
            boosters: n,
        });
    }
    queryVoiceChannels(e, t) {
        if (!this._include(E.h8.VOICE_CHANNEL)) return [];
        let { allowSnowflake: n, voiceChannelGuildFilter: r } = this.options,
            i = I(E.h8.VOICE_CHANNEL, this.options);
        return p.ZP.queryChannels({
            query: e,
            guildId: r,
            limit: t,
            fuzzy: !0,
            type: u.Zb,
            allowSnowflake: n,
            boosters: i,
        });
    }
    queryGuilds(e, t) {
        if (!this._include(E.h8.GUILD)) return [];
        let n = I(E.h8.GUILD, this.options),
            { allowSnowflake: r, blacklist: i } = this.options,
            a = null != i ? (e) => !i.has("guild:".concat(e.id)) : void 0;
        return p.ZP.queryGuilds({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: a,
            boosters: n,
            allowSnowflake: r,
        });
    }
    queryUsers(e, t, n) {
        let { userSearchContext: r } = this;
        if (null == r || !this._include(E.h8.USER)) return;
        let { allowSnowflake: i, userFilters: a } = this.options,
            o = I(E.h8.USER, this.options);
        if ((null == a ? void 0 : a.thread) != null) {
            let t = s.Z.getMemberListSections(a.thread),
                r = [];
            for (let e in t) {
                let n = t[e];
                for (let e of n.userIds) {
                    var l, c, u;
                    (null == a || !a.friends || d.Z.isFriend(e)) &&
                        ((null != (u = null == (l = this._userBlacklist) ? void 0 : l.includes(e)) && u) ||
                            r.push({
                                userId: e,
                                nick: null == (c = n.usersById[e]) ? void 0 : c.displayName,
                            }));
                }
            }
            this._userResults = p.ZP.queryUsers({
                query: e,
                users: r,
                limit: n,
                boosters: o,
                allowSnowflake: i,
            });
            return;
        }
        void 0 !== t && _.Z.requestMembers(t, e, 100),
            r.setLimit(n),
            r.setQuery({
                query: e,
                filters: a,
                blacklist: this._userBlacklist,
                boosters: o,
            });
    }
    queryGroupDMs(e, t) {
        if (!this._include(E.h8.GROUP_DM)) return [];
        let { blacklist: n } = this.options,
            r = I(E.h8.GROUP_DM, this.options),
            i = null != n ? (e) => !n.has("channel:".concat(e.id)) : void 0;
        return p.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            filter: i,
            boosters: r,
        });
    }
    queryApplications(e, t) {
        return this._include(E.h8.APPLICATION)
            ? p.ZP.queryApplications({
                  query: e,
                  limit: t,
                  fuzzy: !0,
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
        let { pathname: i, hostname: a = "", host: s } = n,
            l = m.Z.isDiscordHostname(a) || window.location.host === s;
        return null !== i && l && m.Z.isAppRoute(i)
            ? [
                  {
                      type: E.h8.LINK,
                      record: c.Z.fromPath(i),
                      score: 1,
                  },
              ]
            : [];
    }
    queryInAppNavigations(e, t) {
        return this._include(E.h8.IN_APP_NAVIGATION)
            ? p.ZP.queryInAppNavigations({
                  query: e,
                  limit: t,
                  fuzzy: !0,
              })
            : [];
    }
    constructor(e, t, n = O, r = v, a = 0) {
        b(this, "query", ""),
            b(this, "options", v),
            b(this, "results", []),
            b(this, "_userResults", []),
            b(this, "_groupDMResults", []),
            b(this, "_textChannelResults", []),
            b(this, "_voiceChannelResults", []),
            b(this, "_guildResults", []),
            b(this, "_applicationResults", []),
            b(this, "_linkResults", []),
            b(this, "_inAppNavigations", []),
            b(this, "_asyncTimeout", void 0),
            b(this, "userSearchContext", void 0),
            b(this, "onResultsChange", void 0),
            b(this, "resultTypes", void 0),
            b(this, "_userBlacklist", null),
            b(this, "_limit", void 0),
            b(this, "_refetchForSingleCategoryLimit", void 0),
            b(this, "_refetched", !1),
            b(this, "parseUserResults", (e) => {
                let { results: t } = e;
                if (!this._include(E.h8.USER)) return;
                for (let { id: e, score: n, comparator: r } of ((this._userResults = []), t)) {
                    let t = f.default.getUser(e);
                    null != t &&
                        this._userResults.push({
                            type: E.h8.USER,
                            record: t,
                            score: (0, p.mB)(n),
                            comparator: null != r ? r : void 0,
                        });
                }
                let n = this._willRefetchIfSingleCategoryResults();
                !n && this._userResults.length > this._limit && (this._userResults.length = this._limit),
                    n && this.refetchIfSingleCategoryResults(),
                    this.updateAllResults();
            }),
            b(this, "updateAllResults", () => {
                clearTimeout(this._asyncTimeout),
                    (this.results = i()([
                        ...this._userResults,
                        ...this._groupDMResults,
                        ...this._textChannelResults,
                        ...this._voiceChannelResults,
                        ...this._guildResults,
                        ...this._linkResults,
                        ...this._inAppNavigations,
                    ])
                        .uniqBy((e) => "".concat(e.type, "-").concat(e.record.id))
                        .sort(g.Z)
                        .value()),
                    this.onResultsChange(this.results, this.query);
            }),
            (this.onResultsChange = e),
            this.setOptions(r, !0),
            (this._limit = n),
            (this._refetchForSingleCategoryLimit = a),
            this.createSearchContext(),
            this.setResultTypes(t);
    }
}
