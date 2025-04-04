n.d(t, { Z: () => p });
var r = n(544891),
    i = n(570140),
    o = n(668781),
    a = n(346479),
    s = n(929991),
    l = n(480739),
    c = n(985518),
    u = n(228392),
    d = n(981631),
    f = n(388032);
async function _(e, t, n) {
    try {
        return await e();
    } catch (e) {
        var r, i, a;
        (null == (r = e.body) ? void 0 : r.code) === d.evJ.NON_MODERATED_TAG_REQUIRED
            ? o.Z.show({
                  title: t,
                  body: n
              })
            : (null == (i = e.body) ? void 0 : i.code) === d.evJ.INVALID_FORM_BODY &&
              (null == (a = e.body) ? void 0 : a.errors.emoji) &&
              o.Z.show({
                  title: f.NW.string(f.t.T8sBLC),
                  body: f.NW.string(f.t.aHt1BQ)
              });
    }
}
let p = {
    resort(e) {
        i.Z.dispatch({
            type: 'RESORT_THREADS',
            channelId: e
        });
    },
    createForumTag: (e, t) =>
        r.tn.post({
            url: d.ANM.FORUM_TAGS(t),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null != e.emojiId ? void 0 : e.emojiName,
                moderated: e.moderated
            },
            rejectWithError: !1
        }),
    updateForumTag(e, t) {
        let n = r.tn.put({
            url: d.ANM.FORUM_TAG(t, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated
            },
            rejectWithError: !1
        });
        _(() => n, f.NW.string(f.t.T8sBLC), f.NW.string(f.t.imcb5u));
    },
    deleteForumTag(e, t) {
        let n = r.tn.del({
            url: d.ANM.FORUM_TAG(e, t),
            rejectWithError: !1
        });
        _(() => n, f.NW.string(f.t['0ZkNDQ']), f.NW.string(f.t.imcb5u));
    },
    updateForumPostTags: async (e, t) => (
        await a.Z.unarchiveThreadIfNecessary(e),
        r.tn.patch({
            url: d.ANM.CHANNEL(e),
            body: { applied_tags: t },
            rejectWithError: !1
        })
    ),
    hideAdminOnboarding(e, t) {
        i.Z.dispatch({
            type: 'ADMIN_ONBOARDING_GUIDE_HIDE',
            channelId: e,
            hide: t
        });
    },
    markPostAsSeen(e, t, n) {
        (0, s.a8)((0, c.UP)(e), t, n);
    },
    markPostAsUnseen(e, t, n) {
        (0, s.FL)((0, c.UP)(e), t, n);
    },
    flushSeenItems(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
        (0, s.rS)((0, c.UP)(e), t);
    },
    async searchForumPosts(e, t, n, r) {
        i.Z.dispatch({
            type: 'FORUM_SEARCH_START',
            channelId: t
        });
        try {
            let o = await a.Z.searchThreads(e, t, n, r);
            (0, u.Js)({
                guildId: e,
                channelId: t,
                numSearchResults: o.length
            }),
                i.Z.dispatch({
                    type: 'FORUM_SEARCH_SUCCESS',
                    channelId: t,
                    threadIds: o
                });
        } catch (e) {
            i.Z.dispatch({
                type: 'FORUM_SEARCH_FAILURE',
                channelId: t
            });
        }
    },
    updateForumSearchQuery(e, t) {
        i.Z.dispatch({
            type: 'FORUM_SEARCH_QUERY_UPDATED',
            channelId: e,
            query: t
        });
    },
    clearForumSearch(e) {
        i.Z.dispatch({
            type: 'FORUM_SEARCH_CLEAR',
            channelId: e
        });
    }
};
