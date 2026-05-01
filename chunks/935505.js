"use strict";
n.d(t, { $L: () => b, cr: () => S, kL: () => N, fO: () => R, au: () => C, d1: () => y, io: () => v });
var i = n(602137),
    r = n(970278),
    s = n(152007),
    a = n(802958),
    o = n(456874),
    l = n(734057),
    u = n(31717),
    c = n(576705),
    d = n(522602),
    _ = n(935208),
    f = n(969043),
    h = n(679804),
    p = n(878317),
    E = n(835245);
function m(e) {
    return { channelId: e, sessionId: (0, E.A)() };
}
let g = new (class {
    session;
    getForumChannelSessionId(e) {
        return (
            null == this.session && (this.session = m(e)),
            this.session.channelId !== e && (this.session = m(e)),
            this.session.sessionId
        );
    }
})();
var A = n(652215),
    I = n(746080),
    T = n(37411);
function S(e) {
    return g.getForumChannelSessionId(e);
}
function N(e) {
    switch (e) {
        case i.T.CREATION_DATE:
            return T.az.CREATION_DATE;
        case i.T.LATEST_ACTIVITY:
            return T.az.LATEST_ACTIVITY;
        default:
            throw Error(`Unexpected sort order ${e}`);
    }
}
function y(e) {
    return d.A.getUploads(e, u.C.FirstThreadMessage).length;
}
function C(e) {
    let t = l.A.getChannel(e);
    if (null == t) return [];
    let n = l.A.getChannel(t.parent_id),
        i = n?.availableTags;
    if (null == n || null == i) return [];
    let r = u.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        s = new Set(i.map((e) => e.id));
    return Array.from(r).filter((e) => s.has(e));
}
function v(e, t) {
    return Object.keys(r.A.getThreadsForParent(e, t)).length;
}
function O(e) {
    let { loaded: t, firstMessage: n } = f.A.getMessage(e);
    return t ? n : null;
}
function R(e) {
    let { channelId: t, sessionId: n } = e,
        i = l.A.getChannel(t);
    return null != i && i.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != i.topic && i.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: i.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: i.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: i.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: i.hasFlag(I.lx.REQUIRE_TAG),
              forum_channel_can_create_post: c.A.can(A.xBc.SEND_MESSAGES, i),
              forum_channel_filter_tag_ids: h.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: h.A.getSortOrderAnalytics(i.id),
              forum_channel_session_id: n ?? S(i.id),
              forum_channel_layout: h.A.getLayoutAnalytics(i.id),
              forum_channel_default_sort_order: i.defaultSortOrder,
              forum_channel_tag_setting: h.A.getTagSettingAnalytics(i.id),
              forum_channel_default_layout: i.defaultForumLayout,
              forum_channel_is_moderator_report_channel: i.isModeratorReportChannel(),
          }
        : null;
}
function b(e) {
    let t,
        n,
        i,
        { channelId: r, sessionId: u } = e,
        c = l.A.getChannel(r);
    if (null == c || !c.isForumPost()) return null;
    let d = l.A.getChannel(c.parent_id);
    return null != d && d.isForumLikeChannel()
        ? {
              ...R({ channelId: d.id, sessionId: u }),
              thread_approximate_member_count: a.A.getMemberCount(r),
              thread_approximate_message_count: o.A.getCount(r),
              thread_archived: c.threadMetadata?.archived === !0,
              thread_locked: c.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: c.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: _.default.extractTimestamp(r),
              forum_post_id: c.id,
              forum_post_first_message_id: _.default.castChannelIdAsMessageId(c.id),
              forum_post_num_reactions: null == (t = O(c.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = O(c.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = l.A.getChannel(e);
                  if (null == t) return [];
                  let n = l.A.getChannel(t.parent_id),
                      i = n?.availableTags;
                  if (null == n || null == i) return [];
                  let r = new Set(i.map((e) => e.id));
                  return t.appliedTags?.filter((e) => r.has(e)) ?? [];
              })(c.id),
              forum_post_is_pinned: c.hasFlag(I.lx.PINNED),
              forum_post_is_new: p.A.getReadStateSnapshotAnalytics(c.id)?.isNew,
              forum_post_is_unread: p.A.getReadStateSnapshotAnalytics(c.id)?.hasUnreads,
              forum_post_is_following: s.A.hasJoined(c.id),
              forum_post_attachment_mimetypes:
                  null == (i = O(c.id)) ? [] : i.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
