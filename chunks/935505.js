"use strict";
n.d(t, { $L: () => D, cr: () => S, kL: () => N, fO: () => y, au: () => R, d1: () => C, io: () => O });
var i = n(602137),
    r = n(970278),
    a = n(152007),
    s = n(802958),
    l = n(456874),
    o = n(734057),
    d = n(31717),
    c = n(576705),
    u = n(522602),
    _ = n(935208),
    E = n(969043),
    A = n(679804),
    h = n(878317),
    I = n(132500);
function f(e) {
    return { channelId: e, sessionId: (0, I.A)() };
}
let p = new (class {
    session;
    getForumChannelSessionId(e) {
        return (
            null == this.session && (this.session = f(e)),
            this.session.channelId !== e && (this.session = f(e)),
            this.session.sessionId
        );
    }
})();
var T = n(652215),
    m = n(746080),
    g = n(37411);
function S(e) {
    return p.getForumChannelSessionId(e);
}
function N(e) {
    switch (e) {
        case i.T.CREATION_DATE:
            return g.az.CREATION_DATE;
        case i.T.LATEST_ACTIVITY:
            return g.az.LATEST_ACTIVITY;
        default:
            throw Error(`Unexpected sort order ${e}`);
    }
}
function C(e) {
    return u.A.getUploads(e, d.C.FirstThreadMessage).length;
}
function R(e) {
    let t = o.A.getChannel(e);
    if (null == t) return [];
    let n = o.A.getChannel(t.parent_id),
        i = n?.availableTags;
    if (null == n || null == i) return [];
    let r = d.A.getThreadSettings(e)?.appliedTags ?? new Set(),
        a = new Set(i.map((e) => e.id));
    return Array.from(r).filter((e) => a.has(e));
}
function O(e, t) {
    return Object.keys(r.A.getThreadsForParent(e, t)).length;
}
function L(e) {
    let { loaded: t, firstMessage: n } = E.A.getMessage(e);
    return t ? n : null;
}
function y(e) {
    let { channelId: t, sessionId: n } = e,
        i = o.A.getChannel(t);
    return null != i && i.isForumLikeChannel()
        ? {
              forum_channel_has_guidelines: null != i.topic && i.topic.trim().length > 0,
              forum_channel_default_emoji_reaction_id: i.defaultReactionEmoji?.emojiId,
              forum_channel_default_emoji_reaction_name: i.defaultReactionEmoji?.emojiName,
              forum_channel_available_tag_ids: i.availableTags?.map((e) => e.id) ?? [],
              forum_channel_tag_required: i.hasFlag(m.lx.REQUIRE_TAG),
              forum_channel_can_create_post: c.A.can(T.xBc.SEND_MESSAGES, i),
              forum_channel_filter_tag_ids: A.A.getFilterTagIdsAnalytics(),
              forum_channel_sort_order: A.A.getSortOrderAnalytics(i.id),
              forum_channel_session_id: n ?? S(i.id),
              forum_channel_layout: A.A.getLayoutAnalytics(i.id),
              forum_channel_default_sort_order: i.defaultSortOrder,
              forum_channel_tag_setting: A.A.getTagSettingAnalytics(i.id),
              forum_channel_default_layout: i.defaultForumLayout,
              forum_channel_is_moderator_report_channel: i.isModeratorReportChannel(),
          }
        : null;
}
function D(e) {
    let t,
        n,
        i,
        { channelId: r, sessionId: d } = e,
        c = o.A.getChannel(r);
    if (null == c || !c.isForumPost()) return null;
    let u = o.A.getChannel(c.parent_id);
    return null != u && u.isForumLikeChannel()
        ? {
              ...y({ channelId: u.id, sessionId: d }),
              thread_approximate_member_count: s.A.getMemberCount(r),
              thread_approximate_message_count: l.A.getCount(r),
              thread_archived: c.threadMetadata?.archived === !0,
              thread_locked: c.threadMetadata?.locked ?? !1,
              thread_auto_archive_duration_minutes: c.threadMetadata?.autoArchiveDuration ?? 0,
              thread_approximate_creation_date: _.default.extractTimestamp(r),
              forum_post_id: c.id,
              forum_post_first_message_id: _.default.castChannelIdAsMessageId(c.id),
              forum_post_num_reactions: null == (t = L(c.id)) ? 0 : t.reactions.reduce((e, t) => e + t.count, 0),
              forum_post_num_unique_reactions: null == (n = L(c.id)) ? 0 : n.reactions.length,
              forum_post_applied_tag_ids: (function (e) {
                  let t = o.A.getChannel(e);
                  if (null == t) return [];
                  let n = o.A.getChannel(t.parent_id),
                      i = n?.availableTags;
                  if (null == n || null == i) return [];
                  let r = new Set(i.map((e) => e.id));
                  return t.appliedTags?.filter((e) => r.has(e)) ?? [];
              })(c.id),
              forum_post_is_pinned: c.hasFlag(m.lx.PINNED),
              forum_post_is_new: h.A.getReadStateSnapshotAnalytics(c.id)?.isNew,
              forum_post_is_unread: h.A.getReadStateSnapshotAnalytics(c.id)?.hasUnreads,
              forum_post_is_following: a.A.hasJoined(c.id),
              forum_post_attachment_mimetypes:
                  null == (i = L(c.id)) ? [] : i.attachments.map((e) => e.content_type ?? "unknown"),
          }
        : null;
}
