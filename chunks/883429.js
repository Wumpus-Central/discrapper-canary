n.d(t, { Z: () => p });
var i = n(544891),
    r = n(570140),
    a = n(668781),
    s = n(346479),
    o = n(929991),
    l = n(480739),
    u = n(985518),
    c = n(228392),
    d = n(981631),
    f = n(388032);
async function _(e, t, n) {
    try {
        return await e();
    } catch (e) {
        var i, r, s;
        (null === (i = e.body) || void 0 === i ? void 0 : i.code) === d.evJ.NON_MODERATED_TAG_REQUIRED
            ? a.Z.show({
                  title: t,
                  body: n
              })
            : (null === (r = e.body) || void 0 === r ? void 0 : r.code) === d.evJ.INVALID_FORM_BODY &&
              (null === (s = e.body) || void 0 === s ? void 0 : s.errors.emoji) &&
              a.Z.show({
                  title: f.intl.string(f.t.T8sBLC),
                  body: f.intl.string(f.t.aHt1BQ)
              });
    }
}
let p = {
    resort(e) {
        r.Z.dispatch({
            type: 'RESORT_THREADS',
            channelId: e
        });
    },
    createForumTag: (e, t) =>
        i.tn.post({
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
        let n = i.tn.put({
            url: d.ANM.FORUM_TAG(t, e.id),
            body: {
                name: e.name,
                emoji_id: e.emojiId,
                emoji_name: null == e.emojiId ? e.emojiName : void 0,
                moderated: e.moderated
            },
            rejectWithError: !1
        });
        _(() => n, f.intl.string(f.t.T8sBLC), f.intl.string(f.t.imcb5u));
    },
    deleteForumTag(e, t) {
        let n = i.tn.del({
            url: d.ANM.FORUM_TAG(e, t),
            rejectWithError: !1
        });
        _(() => n, f.intl.string(f.t['0ZkNDQ']), f.intl.string(f.t.imcb5u));
    },
    updateForumPostTags: async (e, t) => (
        await s.Z.unarchiveThreadIfNecessary(e),
        i.tn.patch({
            url: d.ANM.CHANNEL(e),
            body: { applied_tags: t },
            rejectWithError: !1
        })
    ),
    hideAdminOnboarding(e, t) {
        r.Z.dispatch({
            type: 'ADMIN_ONBOARDING_GUIDE_HIDE',
            channelId: e,
            hide: t
        });
    },
    markPostAsSeen(e, t, n) {
        (0, o.a8)((0, u.UP)(e), t, n);
    },
    markPostAsUnseen(e, t, n) {
        (0, o.FL)((0, u.UP)(e), t, n);
    },
    flushSeenItems(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.cs.IMMEDIATE_WITH_COOLDOWN;
        (0, o.rS)((0, u.UP)(e), t);
    },
    async searchForumPosts(e, t, n, i) {
        r.Z.dispatch({
            type: 'FORUM_SEARCH_START',
            channelId: t
        });
        try {
            let a = await s.Z.searchThreads(e, t, n, i);
            (0, c.Js)({
                guildId: e,
                channelId: t,
                numSearchResults: a.length
            }),
                r.Z.dispatch({
                    type: 'FORUM_SEARCH_SUCCESS',
                    channelId: t,
                    threadIds: a
                });
        } catch {
            r.Z.dispatch({
                type: 'FORUM_SEARCH_FAILURE',
                channelId: t
            });
        }
    },
    updateForumSearchQuery(e, t) {
        r.Z.dispatch({
            type: 'FORUM_SEARCH_QUERY_UPDATED',
            channelId: e,
            query: t
        });
    },
    clearForumSearch(e) {
        r.Z.dispatch({
            type: 'FORUM_SEARCH_CLEAR',
            channelId: e
        });
    }
};
