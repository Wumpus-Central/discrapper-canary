"use strict";
n.r(t), n.d(t, { default: () => p, trackParseSettingsUrl: () => f });
var r = n(492462),
    i = n(954571),
    s = n(780964),
    a = n(358776),
    o = n(355097),
    l = n(652215);
let u = /[_\s]|%20/g;
function c(e) {
    return null == e ? "" : e.toLowerCase().replace(u, "-");
}
function d(e) {
    return Object.values(o.od).includes(e);
}
function _() {
    let e = (0, a.Ci)("parseSettingsUrl");
    return {
        [o.od.ACCOUNT]: s.X.ACCOUNT_PANEL,
        [o.od.ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
        [o.od.ACCOUNT_ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
        [o.od.PROFILE_CUSTOMIZATION]: s.X.PROFILE_PANEL,
        [o.od.CONTENT_AND_SOCIAL]: s.X.CONTENT_AND_SOCIAL_PANEL,
        [o.od.CONNECTED_GAMES]: s.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY,
        [o.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES]: s.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY,
        [o.od.DATA_AND_PRIVACY]: s.X.DATA_AND_PRIVACY_PANEL,
        [o.od.PRIVACY_AND_SAFETY]: s.X.DATA_AND_PRIVACY_PANEL,
        [o.od.FAMILY_CENTER]: s.X.FAMILY_CENTER_PANEL,
        [o.od.SESSIONS]: s.X.SESSIONS_PANEL,
        [o.od.AUTHORIZED_APPS]: s.X.AUTHORIZED_APPS_PANEL,
        [o.od.CONNECTIONS]: s.X.CONNECTIONS_PANEL,
        [o.od.CLIPS]: s.X.CLIPS_PANEL,
        [o.od.PREMIUM]: s.X.NITRO_PANEL,
        [o.od.GUILD_BOOSTING]: s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
        [o.od.SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
        [o.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
        [o.od.INVENTORY]: s.X.GIFT_PANEL,
        [o.od.BILLING]: s.X.BILLING_PANEL,
        [o.od.APPEARANCE]: e ? s.X.DISPLAY_PANEL : s.X.APPEARANCE_PANEL,
        [o.od.ACCESSIBILITY]: s.X.ACCESSIBILITY_PANEL,
        [o.od.VOICE]: s.X.VOICE_AND_VIDEO_PANEL,
        [o.od.POGGERMODE]: s.X.POGGERMODE_PANEL,
        [o.od.TEXT]: e ? s.X.DISPLAY_MESSAGES_CATEGORY : s.X.CHAT_PANEL,
        [o.od.NOTIFICATIONS]: s.X.NOTIFICATIONS_PANEL,
        [o.od.EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
        [o.od.NOTIFICATIONS_EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
        [o.od.KEYBINDS]: s.X.KEYBINDS_PANEL,
        [o.od.LANGUAGE]: s.X.LANGUAGE_AND_TIME_PANEL,
        [o.od.WINDOWS]: e ? s.X.ADVANCED_CATEGORY : s.X.WINDOWS_PANEL,
        [o.od.LINUX]: e ? s.X.ADVANCED_CATEGORY : s.X.LINUX_PANEL,
        [o.od.STREAMER_MODE]: e ? s.X.STREAMER_MODE_CATEGORY : s.X.STREAMER_MODE_PANEL,
        [o.od.ADVANCED]: e ? s.X.DEVELOPER_PANEL : s.X.ADVANCED_PANEL,
        [o.od.ACTIVITY_PRIVACY]: s.X.ACTIVITY_PRIVACY_PANEL,
        [o.od.REGISTERED_GAMES]: s.X.REGISTERED_GAMES_PANEL,
        [o.od.OVERLAY]: s.X.OVERLAY_PANEL,
        [o.od.EXPERIMENTS]: s.X.EXPERIMENTS_PANEL,
        [o.od.DEVELOPER_OPTIONS]: s.X.DEVELOPER_OPTIONS_PANEL,
    };
}
function f(e, t) {
    let { target: n, path: r } = e;
    null == n
        ? i.default.track(l.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
              user_settings_url_origin: t,
              user_settings_url_path: r,
          })
        : i.default.track(l.HAw.USER_SETTINGS_URL_PARSED, { user_settings_url_path: r, user_settings_url_origin: t });
}
function p(e) {
    let { path: t, search: n } = e,
        [, , i, s] = t.split("?")[0].split("/"),
        a = c(i),
        o = [a, c(s)].filter(Boolean).join("/"),
        l = _();
    return {
        target: (d(o) ? l[o] : void 0) ?? (d(a) ? l[a] : void 0),
        path: o,
        params: (0, r.parse)(n ?? location.search),
    };
}
