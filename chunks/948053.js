n.d(t, { Z: () => u });
var r = n(544891),
    i = n(570140),
    l = n(695346),
    a = n(960048),
    s = n(613928),
    o = n(981631);
function c(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let u = {
    async fetchPopularGuildsFromCategories(e, t) {
        try {
            let { guilds: n } = (
                await r.tn.post({
                    url: o.ANM.GRAVITY_TOPIC_GUILDS,
                    body: {
                        category_ids: e,
                        offset: t,
                    },
                    rejectWithError: !1,
                })
            ).body;
            return (
                i.Z.dispatch({
                    type: "LOAD_ICYMI_POPULAR_GUILDS",
                    categoryIds: e,
                    guilds: n,
                    offset: t,
                }),
                !0
            );
        } catch (e) {
            a.Z.captureException(e);
        }
        return !1;
    },
    async fetchDehydrated() {
        let {
            isInitialLoad: e,
            isReloading: t,
            forceRefresh: n,
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        if ((0, s.rK)("fetchDehydrated")) {
            t &&
                i.Z.dispatch({
                    type: "ICYMI_SET_REFRESHING",
                    refreshing: !0,
                });
            try {
                let l = Date.now(),
                    a = await r.tn.get({
                        url: o.ANM.GRAVITY_ITEMS_DEHYDRATED,
                        query: { refresh: n },
                        rejectWithError: !1,
                    });
                await i.Z.dispatch({
                    type: "LOAD_ICYMI_DEHYDRATED",
                    items: a.body.items,
                    loadId: a.body.load_id,
                    startTime: l,
                    isReloading: t,
                    isInitialLoad: e,
                });
            } catch (e) {
                a.Z.captureException(e);
            }
        }
    },
    async gravityJoinGuild(e, t) {
        if ((0, s.rK)("gravityJoinGuild") && 0 !== e.length)
            try {
                return (
                    await r.tn.post({
                        url: o.ANM.GRAVITY_JOIN_GUILD,
                        body: {
                            guild_ids: e,
                            location: t,
                        },
                        rejectWithError: !1,
                    }),
                    !0
                );
            } catch (e) {
                return a.Z.captureException(e), !1;
            }
    },
    async fetchForNotification(e, t) {
        if ((0, s.rK)("fetchInitial"))
            try {
                let n = await r.tn.post({
                    url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                    body: {
                        message_items: [
                            {
                                channel_id: e,
                                message_id: t,
                            },
                        ],
                        activity_items: [],
                        generated_candidate_items: [],
                    },
                    rejectWithError: !1,
                });
                if (0 === n.body.message_items.length) return;
                i.Z.dispatch({
                    type: "LOAD_ICYMI_FROM_NOTIFICATION",
                    messageItem: n.body.message_items[0],
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    fetchForStatusNotification(e) {
        (0, s.rK)("fetchInitialStatus") &&
            i.Z.dispatch({
                type: "LOAD_ICYMI_FROM_NOTIFICATION",
                customStatusItem: e,
            });
    },
    async fetchHydrated(e, t, n) {
        if (!(0, s.rK)("fetchHydrated")) return;
        let { messageItems: l, activityItems: c, generatedCandidateItems: u } = n;
        if (0 === l.length && 0 === c.length && 0 === u.length)
            return void i.Z.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: [],
                requestActivityItems: [],
                requestGeneratedCandidateItems: [],
                messageItems: [],
                activityItems: [],
                generatedCandidateItems: [],
                startingIndex: e,
                endingIndex: t,
            });
        try {
            let n = await r.tn.post({
                url: o.ANM.GRAVITY_ITEMS_HYDRATE,
                body: {
                    message_items: l,
                    activity_items: c,
                    generated_candidate_items: u,
                },
                rejectWithError: !1,
            });
            i.Z.dispatch({
                type: "LOAD_ICYMI_HYDRATED",
                requestMessageItems: l,
                requestActivityItems: c,
                requestGeneratedCandidateItems: u,
                messageItems: n.body.message_items,
                activityItems: n.body.activity_items,
                generatedCandidateItems: n.body.generated_candidate_items,
                startingIndex: e,
                endingIndex: t,
            });
        } catch (r) {
            a.Z.captureException(r);
            let n = (0, s.y_)(e, t);
            i.Z.dispatch({
                type: "LOAD_ICYMI_HYDRATED_FAILED",
                hydrationId: n,
            });
        }
    },
    async getGuildChannelScores() {
        if ((0, s.rK)("guildChannelScores"))
            try {
                let e = await r.tn.get({
                    url: o.ANM.GRAVITY_CUSTOM_SCORES,
                    rejectWithError: !1,
                });
                i.Z.dispatch({
                    type: "LOAD_ICYMI_CUSTOM_SCORES",
                    scores: e.body,
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    async getRecommendedGuilds() {
        if ((0, s.rK)("recommendedGuilds"))
            try {
                let e = await r.tn.get({
                    url: o.ANM.GRAVITY_RECOMMENDED_GUILDS,
                    rejectWithError: !1,
                });
                i.Z.dispatch({
                    type: "LOAD_ICYMI_RECOMMENDED_GUILDS",
                    guilds: e.body.guilds,
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    async getMediaForCurrentStatus() {
        if (!(0, s.rK)("mediaForCurrentStatus")) return;
        let e = l.Ok.getSetting();
        if (null != e && null != e.createdAtMs)
            try {
                let t = await r.tn.get({
                    url: o.ANM.GRAVITY_ATTACHMENTS,
                    rejectWithError: !1,
                });
                i.Z.dispatch({
                    type: "LOAD_ICYMI_CURRENT_STATUS_MEDIA",
                    attachments: t.body.attachments,
                    createdAtMs: Number(e.createdAtMs),
                });
            } catch (e) {
                a.Z.captureException(e);
            }
    },
    reloadICYMITab() {
        i.Z.dispatch({ type: "RELOAD_ICYMI" });
    },
    loadHydratedAttempt(e) {
        i.Z.dispatch({
            type: "LOAD_ICYMI_HYDRATED_ATTEMPT",
            hydrationId: e,
        });
    },
    openICYMITab() {
        i.Z.dispatch({ type: "ICYMI_TAB_OPENED" });
    },
    closeICYMITab() {
        i.Z.dispatch({ type: "ICYMI_TAB_CLOSED" });
    },
    startItemsDwell(e) {
        i.Z.dispatch({
            type: "ICYMI_ITEMS_DWELL_START",
            items: e,
        });
    },
    triggerItemsLongImpression(e) {
        i.Z.dispatch({
            type: "ICYMI_ITEMS_LONG_IMPRESSION",
            items: e,
        });
    },
    ackGravityItems: (e, t) =>
        i.Z.dispatch({
            type: "ICYMI_ACK_ITEMS",
            items: e,
            override: t,
        }),
    gravityScrollEvent: (e) =>
        i.Z.dispatch({
            type: "ICYMI_SCROLL_EVENT",
            timestamp: e,
        }),
    setFilters: (e) =>
        i.Z.dispatch({
            type: "SET_ICYMI_FILTERS",
            filters: e,
        }),
    giveFeedback: () => i.Z.dispatch({ type: "ICYMI_FEEDBACK_GIVEN" }),
    clearReadStates: () => i.Z.dispatch({ type: "CLEAR_ICYMI_READ_STATES" }),
    addedRecommendedGuild: () => i.Z.dispatch({ type: "ICYMI_JOINED_RECOMMENDED_GUILD" }),
    setVideosMuted(e) {
        i.Z.dispatch({
            type: "ICYMI_SET_VIDEOS_MUTED",
            muted: e,
        });
    },
    setTabFocused(e) {
        i.Z.dispatch({
            type: "ICYMI_SET_FOCUSED_TAB",
            focused: e,
        });
    },
    setCardHeight(e, t) {
        i.Z.dispatch({
            type: "ICYMI_SET_CARD_HEIGHT",
            itemId: e,
            height: t,
        });
    },
    takeSurvey() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now();
        i.Z.dispatch({
            type: "ICYMI_TAKE_SURVEY",
            takenAt: e,
        });
    },
    itemInteracted(e, t, n) {
        i.Z.dispatch({
            type: "ICYMI_ITEM_INTERACTED",
            itemId: e,
            itemType: t,
            actionType: n,
        });
    },
    feedItemActioned(e) {
        i.Z.dispatch(c({ type: "ICYMI_FEED_ITEM_ACTIONED" }, e));
    },
    feedFilterActioned(e) {
        i.Z.dispatch(c({ type: "ICYMI_FEED_FILTER_ACTIONED" }, e));
    },
    feedPageActioned(e) {
        i.Z.dispatch(c({ type: "ICYMI_FEED_PAGE_ACTIONED" }, e));
    },
};
