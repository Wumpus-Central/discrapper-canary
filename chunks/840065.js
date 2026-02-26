"use strict";
n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => _,
        getUserSettingsSectionsByWebUserSettings: () => E,
        getWebUserSettingsByUserSettingsSections: () => m,
        openUserSettings: () => f,
        openUserSettingsFromParsedUrl: () => g,
    });
var r = n(627968),
    i = n(397927),
    s = n(73153),
    a = n(894858),
    o = n(954571),
    l = n(780964),
    u = n(358776),
    c = n(995377),
    d = n(652215);
let _ = "USER_SETTINGS_MODAL_MODAL_KEY";
async function f(e) {
    let {
            subsection: t,
            stackingBehavior: o = "replaceAll",
            ...l
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { section: d.nc_.ACCOUNT },
        u = arguments.length > 2 ? arguments[2] : void 0;
    s.h.dispatch({ type: "USER_SETTINGS_MODAL_OPEN", subsection: t ?? null, ...l }),
        (0, c.f)()
            ? a.A.setState({ requestedTargetKey: e })
            : await (0, i.mMO)(
                  async () => {
                      let { default: t } = await Promise.all([
                          n.e("41927"),
                          n.e("38939"),
                          n.e("34699"),
                          n.e("3795"),
                          n.e("8555"),
                          n.e("28936"),
                          n.e("68859"),
                          n.e("40396"),
                          n.e("13088"),
                          n.e("48330"),
                          n.e("92414"),
                          n.e("94857"),
                          n.e("48840"),
                          n.e("49559"),
                          n.e("37372"),
                          n.e("99970"),
                          n.e("70503"),
                          n.e("62175"),
                          n.e("97283"),
                          n.e("3183"),
                          n.e("10566"),
                          n.e("2292"),
                          n.e("67231"),
                          n.e("41595"),
                          n.e("41606"),
                          n.e("84127"),
                          n.e("62733"),
                          n.e("83518"),
                          n.e("73368"),
                          n.e("69733"),
                          n.e("86713"),
                          n.e("49546"),
                          n.e("64190"),
                          n.e("94604"),
                          n.e("34749"),
                          n.e("12664"),
                          n.e("44667"),
                          n.e("7803"),
                          n.e("55090"),
                          n.e("84704"),
                          n.e("67646"),
                          n.e("86738"),
                          n.e("2191"),
                          n.e("40198"),
                          n.e("95782"),
                          n.e("30485"),
                          n.e("73099"),
                          n.e("32391"),
                      ]).then(n.bind(n, 796150));
                      return (n) => (0, r.jsx)(t, { ...n, target: e });
                  },
                  { modalKey: _, stackingBehavior: o, stackNextByDefault: !0, contextKey: i.SYi },
              ),
        u?.();
}
function p(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    o.default.track(d.HAw.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function h(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    o.default.track(d.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function m() {
    let e = (0, u.WJ)("getWebUserSettingFromSection"),
        t = (0, u.Ci)("getWebUserSettingFromSection"),
        n = new Map([
            [d.nc_.ACCOUNT, l.X.ACCOUNT_PANEL],
            [d.nc_.PROFILE_CUSTOMIZATION, l.X.PROFILE_PANEL],
            [d.nc_.CONTENT_AND_SOCIAL, l.X.CONTENT_AND_SOCIAL_PANEL],
            [d.nc_.DATA_AND_PRIVACY, l.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.PRIVACY_AND_SAFETY, l.X.DATA_AND_PRIVACY_PANEL],
            [d.nc_.FAMILY_CENTER, l.X.FAMILY_CENTER_PANEL],
            [d.nc_.SESSIONS, l.X.SESSIONS_PANEL],
            [d.nc_.AUTHORIZED_APPS, l.X.AUTHORIZED_APPS_PANEL],
            [d.nc_.CONNECTIONS, l.X.CONNECTIONS_PANEL],
            [d.nc_.CLIPS, l.X.CLIPS_PANEL],
            [d.nc_.PRIVATE_BROWSING, l.X.PRIVATE_BROWSING_PANEL],
            [d.nc_.PREMIUM, l.X.NITRO_PANEL],
            [d.nc_.GUILD_BOOSTING, l.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
            [d.nc_.SUBSCRIPTIONS, l.X.SUBSCRIPTIONS_PANEL],
            [d.nc_.INVENTORY, l.X.GIFT_PANEL],
            [d.nc_.BILLING, l.X.BILLING_PANEL],
            [d.nc_.APPEARANCE, t ? l.X.DISPLAY_PANEL : l.X.APPEARANCE_PANEL],
            [d.nc_.ACCESSIBILITY, l.X.ACCESSIBILITY_PANEL],
            [d.nc_.VOICE, l.X.VOICE_AND_VIDEO_PANEL],
            [d.nc_.POGGERMODE, l.X.POGGERMODE_PANEL],
            [d.nc_.TEXT, t ? l.X.DISPLAY_CHAT_CATEGORY : l.X.CHAT_PANEL],
            [d.nc_.NOTIFICATIONS, l.X.NOTIFICATIONS_PANEL],
            [d.nc_.KEYBINDS, l.X.KEYBINDS_PANEL],
            [d.nc_.LANGUAGE, l.X.LANGUAGE_AND_TIME_PANEL],
            [d.nc_.WINDOWS, t ? l.X.ADVANCED_CATEGORY : l.X.WINDOWS_PANEL],
            [d.nc_.LINUX, t ? l.X.ADVANCED_CATEGORY : l.X.LINUX_PANEL],
            [d.nc_.STREAMER_MODE, t ? l.X.STREAMER_MODE_CATEGORY : l.X.STREAMER_MODE_PANEL],
            [d.nc_.ADVANCED, t ? l.X.DEVELOPER_PANEL : l.X.ADVANCED_PANEL],
            [d.nc_.ACTIVITY_PRIVACY, l.X.ACTIVITY_PRIVACY_PANEL],
            [d.nc_.REGISTERED_GAMES, l.X.REGISTERED_GAMES_PANEL],
            [d.nc_.OVERLAY, l.X.OVERLAY_PANEL],
            [d.nc_.EXPERIMENTS, l.X.EXPERIMENTS_PANEL],
            [d.nc_.DEVELOPER_OPTIONS, l.X.DEVELOPER_OPTIONS_PANEL],
            [d.nc_.ACCOUNT_STANDING, l.X.ACCOUNT_STANDING_CATEGORY],
            [d.nc_.CONNECTED_GAMES, l.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY],
            [d.nc_.EMAILS, l.X.NOTIFICATIONS_EMAIL_CATEGORY],
        ]);
    return e || n.delete(d.nc_.CONNECTED_GAMES), n;
}
function E() {
    let e = m(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function g(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    p({ section: t.section, subsection: t.subsection, urlOrigin: n });
    let i = m(),
        s = i.get(t.section);
    if (null == s) {
        h({ section: t.section, subsection: t.subsection, urlOrigin: n }), f();
        return;
    }
    f((null != t.subsection && "" !== t.subsection ? i.get(d.nc_[t.subsection]) : null) ?? s, {
        section: t.section,
        subsection: t.subsection,
        analyticsLocations: r,
    });
}
