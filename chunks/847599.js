"use strict";
n.d(t, {
    A5: () => m,
    Bf: () => S,
    Bs: () => A,
    IY: () => g,
    Im: () => E,
    St: () => I,
    UT: () => T,
    Vh: () => N,
    WU: () => f,
    _7: () => p,
    mU: () => y,
    oQ: () => C,
    q1: () => h,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c = n(734057),
    d = n(174459),
    _ = n(652215),
    h =
        (((i = {}).GET_STARTED_MODAL = "get_started_modal"),
        (i.RETRY_MODAL = "retry_modal"),
        (i.NSFW_GUILD = "nsfw_guild"),
        (i.NSFW_AGE_GATE = "nsfw_age_gate"),
        (i.OBSCURED_MEDIA = "obscured_media"),
        (i.SYSTEM_DM_RETRY_BUTTON = "system_dm_retry_button"),
        (i.DEV_TOOLS_QUICK_ACTIONS = "dev_tools_quick_actions"),
        (i.SENSITIVE_MEDIA_FILTER_SETTINGS = "sensitive_media_filter_settings"),
        (i.SENSITIVE_MEDIA_LEARN_MORE = "sensitive_media_learn_more"),
        (i.MESSAGE_REQUESTS_SETTINGS = "message_requests_settings"),
        (i.ACCOUNT_AGE_GROUP = "account_age_group"),
        (i.FORUM_POST_MEDIA_PREVIEW = "forum_post_media_preview"),
        (i.SEARCH_MEDIA_PREVIEW = "search_media_preview"),
        (i.CONTENT_AND_SOCIAL_NOTICE = "content_and_social_notice"),
        (i.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL = "dev_tools_age_verification_retry_modal"),
        (i.SAFETY_FLOWS = "safety_flows"),
        (i.AUTOMATED_UNDERAGE_APPEALS = "automated_underage_appeals"),
        (i.EXPRESSIVE_GET_STARTED = "expressive_get_started"),
        (i.STAGE_CHANNEL_RAISE_HAND = "stage_channel_raise_hand"),
        (i.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT = "stage_channel_age_verification_prompt"),
        (i.START_STAGE_PROMPT = "start_stage_prompt"),
        (i.AGE_RESTRICTED_DM_COMMANDS_SETTINGS = "age_restricted_dm_commands_settings"),
        (i.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS = "age_restricted_servers_access_settings"),
        (i.FAMILY_CENTER_CONNECTION = "family_center_connection"),
        (i.PARENTAL_CONSENT_LOCKOUT = "parental_consent_lockout"),
        i),
    f =
        (((r = {})[(r.PRIMARY = 1)] = "PRIMARY"),
        (r[(r.RETRY = 2)] = "RETRY"),
        (r[(r.EXPRESSIVE_PRIMARY = 3)] = "EXPRESSIVE_PRIMARY"),
        (r[(r.SAFETY_FLOWS = 4)] = "SAFETY_FLOWS"),
        r),
    p =
        (((s = {}).MANUAL_REVIEW_REQUEST = "manual_review_request"),
        (s.LEARN_MORE = "learn_more"),
        (s.GET_STARTED = "get_started"),
        (s.SYSTEM_DMS_LEARN_MORE = "system_dms_learn_more"),
        (s.METHOD_SELECT = "method_select"),
        (s.LOG_OUT = "log_out"),
        s),
    E = (((a = {}).RETRY = "retry"), a),
    m =
        (((o = {}).NSFW_CHANNEL_AGE_VERIFY = "nsfw_channel_age_verify"),
        (o.NSFW_CHANNEL_UNDERAGE = "nsfw_channel_underage"),
        (o.NSFW_CHANNEL_VERIFIED = "nsfw_channel_verified"),
        (o.GUILD_LARGE_SERVER = "guild_large_server"),
        (o.GUILD_LARGE_SERVER_UNDERAGE = "guild_large_server_underage"),
        (o.NSFW_EMBEDDED_ACTIVITY = "nsfw_embedded_activity"),
        (o.NSFW_APP_LISTING = "nsfw_app_listing"),
        (o.SPOILER_CHANNEL = "spoiler_channel"),
        o),
    g =
        (((l = {}).NSFW_CHANNEL_AGREE_CTA = "nsfw_channel_agree_cta"),
        (l.NSFW_CHANNEL_DISAGREE_CTA = "nsfw_channel_disagree_cta"),
        l);
function A(e, t, n) {
    d.default.track(_.HAw.AGE_VERIFICATION_MODAL_VIEWED, { modal_session_id: e, modal_version: t, entry_point: n });
}
function I(e, t, n, i) {
    d.default.track(_.HAw.AGE_VERIFICATION_MODAL_CLICKED, { modal_session_id: e, modal_version: t, cta: n, method: i });
}
function T(e, t) {
    d.default.track(_.HAw.AGE_VERIFICATION_DM_CLICKED, { cta: e, channel_id: t });
}
function S(e, t, n) {
    d.default.track(_.HAw.NSFW_SPACE_WARNING_MODAL_VIEWED, { channel_id: t, guild_id: n, modal_type: e });
}
function y(e, t, n, i) {
    let r = null != n ? c.A.getChannel(n) : null,
        s = r?.topic != null && "" !== r.topic.trim();
    d.default.track(_.HAw.NSFW_SPACE_WARNING_MODAL_CLICKED, {
        cta: e,
        modal_type: t,
        channel_id: n,
        guild_id: i,
        has_channel_topic: s,
    });
}
var C = (((u = {}).VERIFIED_TEEN = "verified_teen"), (u.VERIFIED_ADULT = "verified_adult"), (u.ERROR = "error"), u);
function N(e) {
    d.default.track(_.HAw.AGE_VERIFICATION_TOAST_VIEWED, { toast_type: e });
}
