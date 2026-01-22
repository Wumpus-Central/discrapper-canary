n.d(t, { A: () => _ });
var r = n(562465),
    i = n(73153),
    a = n(157559),
    s = n(867455),
    o = n(543531),
    l = n(407689),
    c = n(613999),
    u = n(853742),
    d = n(652215),
    f = n(985018);
async function p(e, t, n) {
    try {
        return await e();
    } catch (e) {
        var r, i, s;
        (null == (r = e.body) ? void 0 : r.code) === d.t02.NON_MODERATED_TAG_REQUIRED
            ? a.A.show({
                  title: t,
                  body: n,
              })
            : (null == (i = e.body) ? void 0 : i.code) === d.t02.INVALID_FORM_BODY &&
              (null == (s = e.body) ? void 0 : s.errors.emoji) &&
              a.A.show({
                  title: f.intl.string(f.t.T8sBLJ),
                  body: f.intl.string(f.t.aHt1Bd),
              });
    }
}
let _ = {
    resort(e) {
        i.h.dispatch({
            type: "RESORT_THREADS",
            channelId: e,
        });
    },
    createForumTag: (e, t) =>
        r.Bo.post({
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
        let n = r.Bo.put({
            url: d.Rsh.FORUM_TAG(t, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated,
            },
            rejectWithError: !1,
        });
        p(() => n, f.intl.string(f.t.T8sBLJ), f.intl.string(f.t.imcb5u));
    },
    deleteForumTag(e, t) {
        let n = r.Bo.del({
            url: d.Rsh.FORUM_TAG(e, t),
            rejectWithError: !1,
        });
        p(() => n, f.intl.string(f.t["0ZkNDU"]), f.intl.string(f.t.imcb5u));
    },
    updateForumPostTags: async (e, t) => (
        await s.A.unarchiveThreadIfNecessary(e),
        r.Bo.patch({
            url: d.Rsh.CHANNEL(e),
            body: { applied_tags: t },
            rejectWithError: !1,
        })
    ),
    hideAdminOnboarding(e, t) {
        i.h.dispatch({
            type: "ADMIN_ONBOARDING_GUIDE_HIDE",
            channelId: e,
            hide: t,
        });
    },
    markPostAsSeen(e, t, n) {
        (0, o.wR)((0, c.$l)(e), t, n);
    },
    markPostAsUnseen(e, t, n) {
        (0, o.zK)((0, c.$l)(e), t, n);
    },
    flushSeenItems(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.Ao.IMMEDIATE_WITH_COOLDOWN;
        (0, o.Xt)((0, c.$l)(e), t);
    },
    async searchForumPosts(e, t, n, r, a) {
        i.h.dispatch({
            type: "FORUM_SEARCH_START",
            channelId: t,
        });
        try {
            let o = await s.A.searchThreads(e, t, n, r, a);
            (0, u.Sc)({
                guildId: e,
                channelId: t,
                numSearchResults: o.length,
            }),
                i.h.dispatch({
                    type: "FORUM_SEARCH_SUCCESS",
                    channelId: t,
                    threadIds: o,
                });
        } catch (e) {
            i.h.dispatch({
                type: "FORUM_SEARCH_FAILURE",
                channelId: t,
            });
        }
    },
    updateForumSearchQuery(e, t) {
        i.h.dispatch({
            type: "FORUM_SEARCH_QUERY_UPDATED",
            channelId: e,
            query: t,
        });
    },
    clearForumSearch(e) {
        i.h.dispatch({
            type: "FORUM_SEARCH_CLEAR",
            channelId: e,
        });
    },
};
