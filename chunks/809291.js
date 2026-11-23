s(321073);
var r = s(52133),
    n = s(149468),
    a = s(822382),
    i = s(386649),
    c = s(652215);
let l = /\s+/;
function u(e) {
    let t = new Set(),
        s = [],
        r = [],
        n = [];
    for (let a of e) {
        let e = a.message.author?.id;
        (null != e && t.add(e), s.push(a.sourceType), r.push(a.channelId), n.push(a.messageId));
    }
    return { num_citation_authors: t.size, citation_source_types: s, citation_channel_ids: r, citation_message_ids: n };
}
function _(e) {
    let t = e.trim();
    return { length: t.length, wordCount: t.split(l).filter(Boolean).length };
}
let h = new (class {
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
            n = { ...s, ...e };
        if ((0, r.A)(n, s)) return;
        this.rowVisibilityState = n;
        let a = n.isRowViewable && n.isTabActive && n.isNavigationFocused && n.isAppActive && null != n.currentAnswer;
        if (
            null != this.dwellStartTime &&
            (!a || n.currentAnswer?.smartSearchQuery.requestKey !== s.currentAnswer?.smartSearchQuery.requestKey)
        ) {
            let e = performance.now() - this.dwellStartTime;
            ((this.dwellStartTime = null),
                null != s.currentAnswer &&
                    this.trackSmartSearchAnswerDwelled(
                        { smartSearchQuery: s.currentAnswer.smartSearchQuery, dwellDurationMs: e },
                        t,
                    ));
        }
        a &&
            null != n.currentAnswer &&
            null == this.dwellStartTime &&
            ((this.dwellStartTime = performance.now()), this.trackSmartSearchAnswerShownDeduped(n.currentAnswer, t));
    }
    getContextualProperties(e, t) {
        return {
            search_session_id: t.getSessionId(e.searchContext),
            search_query_id: t.getQueryId(e.searchContext),
            search_location: t.getLocation(e.searchContext),
            guild_id: e.guildId,
            channel_id: (0, a._b)(e.searchContext),
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
                responseStatus: a,
                smartSearchStatus: i,
                answerText: l,
                citations: h,
                contextualProperties: d,
            } = e,
            o = _(t.queryText),
            S = _(l);
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_RETURNED, {
            ...d,
            ...u(h),
            request_id: s,
            duration_ms: Math.round(r),
            response_status: a,
            smart_search_status: i,
            search_query_length: t.searchQueryString.trim().length,
            search_query_content_length: o.length,
            num_query_words: o.wordCount,
            answer_length: S.length,
            num_answer_words: S.wordCount,
            num_citations_returned: h.length,
        });
    }
    trackSuggestedSearchesReturned(e) {
        let { requestId: t, durationMs: s, responseStatusCode: r, suggestedSearches: a, contextualProperties: i } = e;
        n.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCHES_RETURNED, {
            ...i,
            request_id: t,
            duration_ms: Math.round(s),
            response_status_code: r,
            suggested_search_ids: a.map((e) => e.suggestionId),
        });
    }
    trackSmartSearchAnswerToggled(e, t) {
        let { smartSearchQuery: s, isCollapsed: r } = e;
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_TOGGLED, {
            ...this.getContextualProperties(s, t),
            is_collapsed: r,
        });
    }
    trackSmartSearchCitationOpened(e, t) {
        let { smartSearchQuery: s, citation: r, index: a, numCitationsPresented: i } = e;
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_CITATION_OPENED, {
            ...this.getContextualProperties(s, t),
            citation_source_id: r.sourceId,
            citation_source_type: r.sourceType,
            citation_channel_id: r.channelId,
            citation_message_id: r.messageId,
            citation_index: a,
            num_citations_presented: i,
        });
    }
    trackSuggestedSearchStarted(e, t) {
        let { smartSearchQuery: s, suggestedSearch: r, suggestionSource: a, index: l, numSuggestedSearches: u } = e,
            _ = i.A.getStateForScope(s),
            h = _?.suggestedSearches.findIndex((e) => e.suggestionId === r.suggestionId) ?? -1;
        (n.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCH_STARTED, {
            ...this.getContextualProperties(s, t),
            suggested_search_id: r.suggestionId,
            shown_index: l,
            suggestion_source: a,
            num_suggested_searches: u,
            fetch_request_id: _?.requestId,
            global_index: h >= 0 ? h : null,
        }),
            (this.parentSuggestedSearch = r));
    }
    trackSuggestedSearchesShownDeduped(e, t) {
        let { smartSearchQuery: s, suggestedSearches: r, suggestionSource: a } = e,
            i = `${a}:${s.requestKey}`;
        this.lastShownSuggestionKey !== i &&
            ((this.lastShownSuggestionKey = i),
            n.Ay.trackWithMetadata(c.HAw.SUGGESTED_SEARCHES_SHOWN, {
                ...this.getContextualProperties(s, t),
                suggested_search_ids: r.map((e) => e.suggestionId),
                suggestion_source: a,
            }));
    }
    trackSmartSearchAnswerShownDeduped(e, t) {
        let { smartSearchQuery: s, answerText: r, presentedCitations: a, hasKeywordResults: i } = e;
        if (this.lastShownAnswerKey === s.requestKey) return;
        this.lastShownAnswerKey = s.requestKey;
        let l = _(r);
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_SHOWN, {
            ...this.getContextualProperties(s, t),
            ...u(a),
            num_citations_presented: a.length,
            answer_length: l.length,
            num_answer_words: l.wordCount,
            search_query_length: s.searchQueryString.trim().length,
            has_keyword_results: i,
        });
    }
    trackSmartSearchAnswerDwelled(e, t) {
        let { smartSearchQuery: s, dwellDurationMs: r } = e;
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_ANSWER_DWELLED, {
            ...this.getContextualProperties(s, t),
            dwell_duration_ms: Math.round(r),
        });
    }
    trackSmartSearchFeedbackGiven(e, t) {
        let { smartSearchQuery: s, hasPositiveFeedback: r } = e;
        n.Ay.trackWithMetadata(c.HAw.SMART_SEARCH_FEEDBACK_GIVEN, {
            ...this.getContextualProperties(s, t),
            is_positive_feedback: r,
        });
    }
})();
s.d(t, {}, { A: h });
