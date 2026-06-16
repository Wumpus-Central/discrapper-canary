"use strict";
n.d(t, { A: () => f });
var i = n(636537),
    r = n(228366),
    s = n(157559),
    a = n(867455),
    o = n(543531),
    l = n(407689),
    u = n(613999),
    c = n(853742),
    d = n(652215),
    _ = n(375708);
async function h(e, t, n) {
    try {
        return await e();
    } catch (e) {
        e.body?.code === d.t02.NON_MODERATED_TAG_REQUIRED
            ? s.A.show({ title: t, body: n })
            : e.body?.code === d.t02.INVALID_FORM_BODY &&
              e.body?.errors.emoji &&
              s.A.show({ title: _.intl.string(_.t.T8sBLJ), body: _.intl.string(_.t.aHt1Bd) });
    }
}
let f = {
    resort(e) {
        r.h.dispatch({ type: "RESORT_THREADS", channelId: e });
    },
    createForumTag: (e, t) =>
        i.Bo.post({
            url: d.Rsh.FORUM_TAGS(t),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated,
            },
            rejectWithError: !1,
        }),
    updateForumTag(e, t) {
        let n = i.Bo.put({
            url: d.Rsh.FORUM_TAG(t, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated,
            },
            rejectWithError: !1,
        });
        h(() => n, _.intl.string(_.t.T8sBLJ), _.intl.string(_.t.imcb5u));
    },
    deleteForumTag(e, t) {
        let n = i.Bo.del({ url: d.Rsh.FORUM_TAG(e, t), rejectWithError: !1 });
        h(() => n, _.intl.string(_.t["0ZkNDU"]), _.intl.string(_.t.imcb5u));
    },
    updateForumPostTags: async (e, t) => (
        await a.A.unarchiveThreadIfNecessary(e),
        i.Bo.patch({ url: d.Rsh.CHANNEL(e), body: { applied_tags: t }, rejectWithError: !1 })
    ),
    hideAdminOnboarding(e, t) {
        r.h.dispatch({ type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId: e, hide: t });
    },
    markPostAsSeen(e, t, n) {
        (0, o.wR)((0, u.$l)(e), t, n);
    },
    markPostAsUnseen(e, t, n) {
        (0, o.zK)((0, u.$l)(e), t, n);
    },
    flushSeenItems(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ao.IMMEDIATE_WITH_COOLDOWN;
        (0, o.Xt)((0, u.$l)(e), t);
    },
    async searchForumPosts(e, t, n, i, s) {
        r.h.dispatch({ type: "FORUM_SEARCH_START", channelId: t });
        try {
            let o = await a.A.searchThreads(e, t, n, i, s);
            (0, c.Sc)({ guildId: e, channelId: t, numSearchResults: o.length }),
                r.h.dispatch({ type: "FORUM_SEARCH_SUCCESS", channelId: t, threadIds: o });
        } catch {
            r.h.dispatch({ type: "FORUM_SEARCH_FAILURE", channelId: t });
        }
    },
    updateForumSearchQuery(e, t) {
        r.h.dispatch({ type: "FORUM_SEARCH_QUERY_UPDATED", channelId: e, query: t });
    },
    clearForumSearch(e) {
        r.h.dispatch({ type: "FORUM_SEARCH_CLEAR", channelId: e });
    },
};
