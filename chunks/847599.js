"use strict";
n.d(t, {
    A5: () => u,
    Bf: () => p,
    Bs: () => d,
    IY: () => c,
    Im: () => l,
    St: () => _,
    UT: () => f,
    Vh: () => E,
    WU: () => a,
    _7: () => o,
    mU: () => h,
    oQ: () => m,
    q1: () => s,
});
var r = n(954571),
    i = n(652215),
    s = (function (e) {
        return (
            (e.GET_STARTED_MODAL = "get_started_modal"),
            (e.RETRY_MODAL = "retry_modal"),
            (e.NSFW_GUILD = "nsfw_guild"),
            (e.NSFW_AGE_GATE = "nsfw_age_gate"),
            (e.OBSCURED_MEDIA = "obscured_media"),
            (e.SYSTEM_DM_RETRY_BUTTON = "system_dm_retry_button"),
            (e.DEV_TOOLS_QUICK_ACTIONS = "dev_tools_quick_actions"),
            (e.SENSITIVE_MEDIA_FILTER_SETTINGS = "sensitive_media_filter_settings"),
            (e.SENSITIVE_MEDIA_LEARN_MORE = "sensitive_media_learn_more"),
            (e.MESSAGE_REQUESTS_SETTINGS = "message_requests_settings"),
            (e.ACCOUNT_AGE_GROUP = "account_age_group"),
            (e.FORUM_POST_MEDIA_PREVIEW = "forum_post_media_preview"),
            (e.SEARCH_MEDIA_PREVIEW = "search_media_preview"),
            (e.CONTENT_AND_SOCIAL_NOTICE = "content_and_social_notice"),
            (e.DEV_TOOLS_AGE_VERIFICATION_RETRY_MODAL = "dev_tools_age_verification_retry_modal"),
            (e.SAFETY_FLOWS = "safety_flows"),
            (e.AUTOMATED_UNDERAGE_APPEALS = "automated_underage_appeals"),
            (e.EXPRESSIVE_GET_STARTED = "expressive_get_started"),
            (e.STAGE_CHANNEL_RAISE_HAND = "stage_channel_raise_hand"),
            (e.STAGE_CHANNEL_AGE_VERIFICATION_PROMPT = "stage_channel_age_verification_prompt"),
            (e.START_STAGE_PROMPT = "start_stage_prompt"),
            (e.AGE_RESTRICTED_DM_COMMANDS_SETTINGS = "age_restricted_dm_commands_settings"),
            (e.AGE_RESTRICTED_SERVERS_ACCESS_SETTINGS = "age_restricted_servers_access_settings"),
            e
        );
    })({}),
    a = (function (e) {
        return (
            (e[(e.PRIMARY = 1)] = "PRIMARY"),
            (e[(e.RETRY = 2)] = "RETRY"),
            (e[(e.EXPRESSIVE_PRIMARY = 3)] = "EXPRESSIVE_PRIMARY"),
            (e[(e.SAFETY_FLOWS = 4)] = "SAFETY_FLOWS"),
            e
        );
    })({}),
    o = (function (e) {
        return (
            (e.MANUAL_REVIEW_REQUEST = "manual_review_request"),
            (e.LEARN_MORE = "learn_more"),
            (e.GET_STARTED = "get_started"),
            (e.SYSTEM_DMS_LEARN_MORE = "system_dms_learn_more"),
            (e.METHOD_SELECT = "method_select"),
            (e.LOG_OUT = "log_out"),
            e
        );
    })({}),
    l = (function (e) {
        return (e.RETRY = "retry"), e;
    })({}),
    u = (function (e) {
        return (
            (e.NSFW_CHANNEL_AGE_VERIFY = "nsfw_channel_age_verify"),
            (e.NSFW_CHANNEL_UNDERAGE = "nsfw_channel_underage"),
            (e.NSFW_CHANNEL_VERIFIED = "nsfw_channel_verified"),
            (e.GUILD_LARGE_SERVER = "guild_large_server"),
            (e.GUILD_LARGE_SERVER_UNDERAGE = "guild_large_server_underage"),
            (e.NSFW_EMBEDDED_ACTIVITY = "nsfw_embedded_activity"),
            (e.NSFW_APP_LISTING = "nsfw_app_listing"),
            (e.SPOILER_CHANNEL = "spoiler_channel"),
            e
        );
    })({}),
    c = (function (e) {
        return (
            (e.NSFW_CHANNEL_AGREE_CTA = "nsfw_channel_agree_cta"),
            (e.NSFW_CHANNEL_DISAGREE_CTA = "nsfw_channel_disagree_cta"),
            e
        );
    })({});
function d(e, t, n) {
    r.default.track(i.HAw.AGE_VERIFICATION_MODAL_VIEWED, { modal_session_id: e, modal_version: t, entry_point: n });
}
function _(e, t, n, s) {
    r.default.track(i.HAw.AGE_VERIFICATION_MODAL_CLICKED, { modal_session_id: e, modal_version: t, cta: n, method: s });
}
function f(e, t) {
    r.default.track(i.HAw.AGE_VERIFICATION_DM_CLICKED, { cta: e, channel_id: t });
}
function p(e, t, n) {
    r.default.track(i.HAw.NSFW_SPACE_WARNING_MODAL_VIEWED, { channel_id: t, guild_id: n, modal_type: e });
}
function h(e, t, n, s) {
    r.default.track(i.HAw.NSFW_SPACE_WARNING_MODAL_CLICKED, { cta: e, modal_type: t, channel_id: n, guild_id: s });
}
var m = (function (e) {
    return (e.VERIFIED_TEEN = "verified_teen"), (e.VERIFIED_ADULT = "verified_adult"), (e.ERROR = "error"), e;
})({});
function E(e) {
    r.default.track(i.HAw.AGE_VERIFICATION_TOAST_VIEWED, { toast_type: e });
}
