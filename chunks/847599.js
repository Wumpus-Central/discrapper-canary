"use strict";
n.d(t, {
    A5: () => p,
    Bf: () => T,
    Bs: () => g,
    IY: () => m,
    Im: () => h,
    St: () => A,
    UT: () => I,
    Vh: () => N,
    WU: () => f,
    _7: () => E,
    mU: () => S,
    oQ: () => y,
    q1: () => _,
});
var r,
    i,
    s,
    a,
    o,
    l,
    u,
    d = n(954571),
    c = n(652215),
    _ =
        (((r = {}).GET_STARTED_MODAL = "get_started_modal"),
        (r.RETRY_MODAL = "retry_modal"),
        (r.NSFW_GUILD = "nsfw_guild"),
        (r.NSFW_AGE_GATE = "nsfw_age_gate"),
        (r.OBSCURED_MEDIA = "obscured_media"),
        (r.SYSTEM_DM_RETRY_BUTTON = "system_dm_retry_button"),
        (r.DEV_TOOLS_QUICK_ACTIONS = "dev_tools_quick_actions"),
        (r.SENSITIVE_MEDIA_FILTER_SETTINGS = "sensitive_media_filter_settings"),
        (r.SENSITIVE_MEDIA_LEARN_MORE = "sensitive_media_learn_more"),
        (r.MESSAGE_REQUESTS_SETTINGS = "message_requests_settings"),
        (r.ACCOUNT_AGE_GROUP = "account_age_group"),
        (r.FORUM_POST_MEDIA_PREVIEW = "forum_post_media_preview"),
        (r.SEARCH_MEDIA_PREVIEW = "search_media_preview"),
        (r.CONTENT_AND_SOCIAL_NOTICE = "content_and_social_notice"),
        (r.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL = "dev_tools_age_verification_retry_modal"),
        (r.SAFETY_FLOWS = "safety_flows"),
        (r.AUTOMATED_UNDERAGE_APPEALS = "automated_underage_appeals"),
        (r.EXPRESSIVE_GET_STARTED = "expressive_get_started"),
        (r.STAGE_CHANNEL_RAISE_HAND = "stage_channel_raise_hand"),
        (r.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT = "stage_channel_age_verification_prompt"),
        (r.START_STAGE_PROMPT = "start_stage_prompt"),
        (r.AGE_RESTRICTED_DM_COMMANDS_SETTINGS = "age_restricted_dm_commands_settings"),
        (r.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS = "age_restricted_servers_access_settings"),
        r),
    f =
        (((i = {})[(i.PRIMARY = 1)] = "PRIMARY"),
        (i[(i.RETRY = 2)] = "RETRY"),
        (i[(i.EXPRESSIVE_PRIMARY = 3)] = "EXPRESSIVE_PRIMARY"),
        (i[(i.SAFETY_FLOWS = 4)] = "SAFETY_FLOWS"),
        i),
    E =
        (((s = {}).MANUAL_REVIEW_REQUEST = "manual_review_request"),
        (s.LEARN_MORE = "learn_more"),
        (s.GET_STARTED = "get_started"),
        (s.SYSTEM_DMS_LEARN_MORE = "system_dms_learn_more"),
        (s.METHOD_SELECT = "method_select"),
        (s.LOG_OUT = "log_out"),
        s),
    h = (((a = {}).RETRY = "retry"), a),
    p =
        (((o = {}).NSFW_CHANNEL_AGE_VERIFY = "nsfw_channel_age_verify"),
        (o.NSFW_CHANNEL_UNDERAGE = "nsfw_channel_underage"),
        (o.NSFW_CHANNEL_VERIFIED = "nsfw_channel_verified"),
        (o.GUILD_LARGE_SERVER = "guild_large_server"),
        (o.GUILD_LARGE_SERVER_UNDERAGE = "guild_large_server_underage"),
        (o.NSFW_EMBEDDED_ACTIVITY = "nsfw_embedded_activity"),
        (o.NSFW_APP_LISTING = "nsfw_app_listing"),
        (o.SPOILER_CHANNEL = "spoiler_channel"),
        o),
    m =
        (((l = {}).NSFW_CHANNEL_AGREE_CTA = "nsfw_channel_agree_cta"),
        (l.NSFW_CHANNEL_DISAGREE_CTA = "nsfw_channel_disagree_cta"),
        l);
function g(e, t, n) {
    d.default.track(c.HAw.AGE_VERIFICATION_MODAL_VIEWED, { modal_session_id: e, modal_version: t, entry_point: n });
}
function A(e, t, n, r) {
    d.default.track(c.HAw.AGE_VERIFICATION_MODAL_CLICKED, { modal_session_id: e, modal_version: t, cta: n, method: r });
}
function I(e, t) {
    d.default.track(c.HAw.AGE_VERIFICATION_DM_CLICKED, { cta: e, channel_id: t });
}
function T(e, t, n) {
    d.default.track(c.HAw.NSFW_SPACE_WARNING_MODAL_VIEWED, { channel_id: t, guild_id: n, modal_type: e });
}
function S(e, t, n, r) {
    d.default.track(c.HAw.NSFW_SPACE_WARNING_MODAL_CLICKED, { cta: e, modal_type: t, channel_id: n, guild_id: r });
}
var y = (((u = {}).VERIFIED_TEEN = "verified_teen"), (u.VERIFIED_ADULT = "verified_adult"), (u.ERROR = "error"), u);
function N(e) {
    d.default.track(c.HAw.AGE_VERIFICATION_TOAST_VIEWED, { toast_type: e });
}
