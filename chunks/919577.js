n.d(t, { A: () => A });
var i = n(636537),
    r = n(228366),
    a = n(157559),
    s = n(867455),
    l = n(543531),
    o = n(407689),
    d = n(613999),
    c = n(853742),
    u = n(652215),
    _ = n(375708);
async function E(e, t, n) {
    try {
        return await e();
    } catch (e) {
        e.body?.code === u.t02.NON_MODERATED_TAG_REQUIRED
            ? a.A.show({ title: t, body: n })
            : e.body?.code === u.t02.INVALID_FORM_BODY &&
              e.body?.errors.emoji &&
              a.A.show({ title: _.intl.string(_.t.T8sBLJ), body: _.intl.string(_.t.aHt1Bd) });
    }
}
let A = {
    resort(e) {
        r.h.dispatch({ type: "RESORT_THREADS", channelId: e });
    },
    createForumTag: (e, t) =>
        i.Bo.post({
            url: u.Rsh.FORUM_TAGS(t),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated,
            },
            rejectWithError: (0, i.fT)(),
        }),
    updateForumTag(e, t) {
        let n = i.Bo.put({
            url: u.Rsh.FORUM_TAG(t, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated,
            },
            rejectWithError: (0, i.fT)(),
        });
        E(() => n, _.intl.string(_.t.T8sBLJ), _.intl.string(_.t.imcb5u));
    },
    deleteForumTag(e, t) {
        let n = i.Bo.del({ url: u.Rsh.FORUM_TAG(e, t), rejectWithError: (0, i.fT)() });
        E(() => n, _.intl.string(_.t["0ZkNDU"]), _.intl.string(_.t.imcb5u));
    },
    updateForumPostTags: async (e, t) => (
        await s.A.unarchiveThreadIfNecessary(e),
        i.Bo.patch({ url: u.Rsh.CHANNEL(e), body: { applied_tags: t }, rejectWithError: (0, i.fT)() })
    ),
    hideAdminOnboarding(e, t) {
        r.h.dispatch({ type: "ADMIN_ONBOARDING_GUIDE_HIDE", channelId: e, hide: t });
    },
    markPostAsSeen(e, t, n) {
        (0, l.wR)((0, d.$l)(e), t, n);
    },
    markPostAsUnseen(e, t, n) {
        (0, l.zK)((0, d.$l)(e), t, n);
    },
    flushSeenItems(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.Ao.IMMEDIATE_WITH_COOLDOWN;
        (0, l.Xt)((0, d.$l)(e), t);
    },
    async searchForumPosts(e, t, n, i, a) {
        r.h.dispatch({ type: "FORUM_SEARCH_START", channelId: t });
        try {
            let l = await s.A.searchThreads(e, t, n, i, a);
            (0, c.Sc)({ guildId: e, channelId: t, numSearchResults: l.length }),
                r.h.dispatch({ type: "FORUM_SEARCH_SUCCESS", channelId: t, threadIds: l });
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
