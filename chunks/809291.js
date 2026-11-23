s(321073);
var r = s(52133),
    a = s(149468),
    n = s(822382),
    i = s(386649),
    c = s(652215);
let l = /\s+/;
function _(e) {
    let t = new Set(),
        s = [],
        r = [],
        a = [];
    for (let n of e) {
        let e = n.message.author?.id;
        (null != e && t.add(e), s.push(n.sourceType), r.push(n.channelId), a.push(n.messageId));
    }
    return { num_citation_authors: t.size, citation_source_types: s, citation_channel_ids: r, citation_message_ids: a };
}
function u(e) {
    let t = e.trim();
    return { length: t.length, wordCount: t.split(l).filter(Boolean).length };
}
let d = new (class {
    rowVisibilityState = {
        isRowViewable: !1,
        isTabActive: !1,
        isNavigationFocused: !1,
        isAppActive: !0,
        currentAnswer: null,
    };
    dwellStartTime = null;
    lastShownAnswerKey = null;
    lastShownSuggestionKey = null;
    parentSuggestedSearch = null;
    setIsRowViewable(e, t) {
        this.updateVisibility({ isRowViewable: e }, t);
    }
    setIsTabActive(e, t) {
        this.updateVisibility({ isTabActive: e }, t);
    }
    setIsNavigationFocused(e, t) {
        this.updateVisibility({ isNavigationFocused: e }, t);
    }
    setIsAppActive(e, t) {
        this.updateVisibility({ isAppActive: e }, t);
    }
    setAnswer(e, t) {
        this.updateVisibility({ currentAnswer: e }, t);
    }
    resetSession(e) {
        (this.updateVisibility({ currentAnswer: null }, e),
            (this.lastShownAnswerKey = null),
            (this.lastShownSuggestionKey = null),
            (this.parentSuggestedSearch = null));
    }
    updateVisibility(e, t) {
        let s = this.rowVisibilityState,
            a = { ...s, ...e };
        if ((0, r.A)(a, s)) return;
        this.rowVisibilityState = a;
        let n = a.isRowViewable && a.isTabActive && a.isNavigationFocused && a.isAppActive && null != a.currentAnswer;
        if (
            null != this.dwellStartTime &&
            (!n || a.currentAnswer?.smartSearchQuery.requestKey !== s.currentAnswer?.smartSearchQuery.requestKey)
        ) {
            let e = performance.now() - this.dwellStartTime;
            ((this.dwellStartTime = null),
                null != s.currentAnswer &&
                    this.trackSmartSearchAnswerDwelled(
                        { smartSearchQuery: s.currentAnswer.smartSearchQuery, dwellDurationMs: e },
                        t,
                    ));
        }
        n &&
            null != a.currentAnswer &&
            null == this.dwellStartTime &&
            ((this.dwellStartTime = performance.now()), this.trackSmartSearchAnswerShownDeduped(a.currentAnswer, t));
    }
    getContextualProperties(e, t) {
        return {
            search_session_id: t.getSessionId(e.searchContext),
            search_query_id: t.getQueryId(e.searchContext),
            search_location: t.getLocation(e.searchContext),
            guild_id: e.guildId,
            channel_id: (0, n._b)(e.searchContext),
            filter_channel_ids: e.channelIds,
            num_filter_channels: e.channelIds.length,
            parent_suggested_search_id:
                e.queryText === this.parentSuggestedSearch?.suggestedSearchText
                    ? this.parentSuggestedSearch?.suggestionId
                    : null,
        };
    }
    trackSmartSearchAnswerReturned(e) {
        let {
                smartSearchQuery: t,
                requestId: s,
                durationMs: r,
                responseStatus: n,
                smartSearchStatus: i,
                answerText: l,
                citations: d,
                contextualProperties: h,
            } = e,
            o = u(t.queryText),
            S = u(l);
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_RETURNED, {
            ...h,
            ..._(d),
            request_id: s,
            duration_ms: Math.round(r),
            response_status: n,
            smart_search_status: i,
            search_query_length: t.searchQueryString.trim().length,
            search_query_content_length: o.length,
            num_query_words: o.wordCount,
            answer_length: S.length,
            num_answer_words: S.wordCount,
            num_citations_returned: d.length,
        });
    }
    trackSuggestedSearchesReturned(e) {
        let { requestId: t, durationMs: s, responseStatusCode: r, suggestedSearches: n, contextualProperties: i } = e;
        a.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCHES_RETURNED, {
            ...i,
            request_id: t,
            duration_ms: Math.round(s),
            response_status_code: r,
            suggested_search_ids: n.map((e) => e.suggestionId),
        });
    }
    trackSmartSearchAnswerToggled(e, t) {
        let { smartSearchQuery: s, isCollapsed: r } = e;
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_TOGGLED, {
            ...this.getContextualProperties(s, t),
            is_collapsed: r,
        });
    }
    trackSmartSearchCitationOpened(e, t) {
        let { smartSearchQuery: s, citation: r, index: n, numCitationsPresented: i } = e;
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_CITATION_OPENED, {
            ...this.getContextualProperties(s, t),
            citation_source_id: r.sourceId,
            citation_source_type: r.sourceType,
            citation_channel_id: r.channelId,
            citation_message_id: r.messageId,
            citation_index: n,
            num_citations_presented: i,
        });
    }
    trackSuggestedSearchStarted(e, t) {
        let { smartSearchQuery: s, suggestedSearch: r, suggestionSource: n, index: l, numSuggestedSearches: _ } = e,
            u = i.A.getStateForScope(s),
            d = u?.suggestedSearches.findIndex((e) => e.suggestionId === r.suggestionId) ?? -1;
        (a.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCH_STARTED, {
            ...this.getContextualProperties(s, t),
            suggested_search_id: r.suggestionId,
            shown_index: l,
            suggestion_source: n,
            num_suggested_searches: _,
            fetch_request_id: u?.requestId,
            global_index: d >= 0 ? d : null,
        }),
            (this.parentSuggestedSearch = r));
    }
    trackSuggestedSearchesShownDeduped(e, t) {
        let { smartSearchQuery: s, suggestedSearches: r, suggestionSource: n } = e,
            i = `${n}:${s.requestKey}`;
        this.lastShownSuggestionKey !== i &&
            ((this.lastShownSuggestionKey = i),
            a.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCHES_SHOWN, {
                ...this.getContextualProperties(s, t),
                suggested_search_ids: r.map((e) => e.suggestionId),
                suggestion_source: n,
            }));
    }
    trackSmartSearchAnswerShownDeduped(e, t) {
        let { smartSearchQuery: s, answerText: r, presentedCitations: n, hasKeywordResults: i } = e;
        if (this.lastShownAnswerKey === s.requestKey) return;
        this.lastShownAnswerKey = s.requestKey;
        let l = u(r);
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_SHOWN, {
            ...this.getContextualProperties(s, t),
            ..._(n),
            num_citations_presented: n.length,
            answer_length: l.length,
            num_answer_words: l.wordCount,
            search_query_length: s.searchQueryString.trim().length,
            has_keyword_results: i,
        });
    }
    trackSmartSearchAnswerDwelled(e, t) {
        let { smartSearchQuery: s, dwellDurationMs: r } = e;
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_DWELLED, {
            ...this.getContextualProperties(s, t),
            dwell_duration_ms: Math.round(r),
        });
    }
    trackSmartSearchFeedbackGiven(e, t) {
        let { smartSearchQuery: s, hasPositiveFeedback: r } = e;
        a.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_FEEDBACK_GIVEN, {
            ...this.getContextualProperties(s, t),
            is_positive_feedback: r,
        });
    }
})();
s.d(t, {}, { A: d });
