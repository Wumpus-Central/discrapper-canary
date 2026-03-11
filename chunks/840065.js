"use strict";
n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => p,
        getUserSettingsSectionsByWebUserSettings: () => A,
        getWebUserSettingsByUserSettingsSections: () => g,
        openUserSettings: () => h,
        openUserSettingsFromParsedUrl: () => I,
    });
var r = n(627968),
    i = n(397927),
    s = n(73153),
    a = n(790284),
    o = n(272053),
    l = n(954571),
    u = n(780964),
    c = n(358776),
    d = n(995377),
    _ = n(355097),
    f = n(652215);
let p = "USER_SETTINGS_MODAL_MODAL_KEY";
async function h(e) {
    let {
            subsection: t,
            stackingBehavior: a = "replaceAll",
            ...l
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { section: f.nc_.ACCOUNT },
        u = arguments.length > 2 ? arguments[2] : void 0;
    if ((s.h.dispatch({ type: "USER_SETTINGS_MODAL_OPEN", subsection: t ?? null, ...l }), (0, d.f)())) {
        if (null == e) return;
        o.A.navigate(e);
    } else
        await (0, i.mMO)(
            async () => {
                let { default: t } = await Promise.all([
                    n.e("41927"),
                    n.e("38939"),
                    n.e("81469"),
                    n.e("3795"),
                    n.e("14138"),
                    n.e("8555"),
                    n.e("49924"),
                    n.e("28936"),
                    n.e("68859"),
                    n.e("40396"),
                    n.e("13088"),
                    n.e("48330"),
                    n.e("92414"),
                    n.e("94857"),
                    n.e("48840"),
                    n.e("49559"),
                    n.e("42006"),
                    n.e("37372"),
                    n.e("5283"),
                    n.e("3183"),
                    n.e("49915"),
                    n.e("97283"),
                    n.e("62175"),
                    n.e("12437"),
                    n.e("99328"),
                    n.e("41606"),
                    n.e("21597"),
                    n.e("30453"),
                    n.e("13723"),
                    n.e("74352"),
                    n.e("30425"),
                    n.e("72132"),
                    n.e("51145"),
                    n.e("64190"),
                    n.e("62733"),
                    n.e("83518"),
                    n.e("77130"),
                    n.e("78982"),
                    n.e("34749"),
                    n.e("70144"),
                    n.e("44667"),
                    n.e("95782"),
                    n.e("7803"),
                    n.e("84704"),
                    n.e("22777"),
                    n.e("67646"),
                    n.e("7467"),
                    n.e("68548"),
                    n.e("43898"),
                ]).then(n.bind(n, 796150));
                return (n) => (0, r.jsx)(t, { ...n, target: e });
            },
            { modalKey: p, stackingBehavior: a, stackNextByDefault: !0, contextKey: i.SYi },
        );
    u?.();
}
function m(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(f.HAw.USER_SETTINGS_URL_PARSED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function E(e) {
    let { section: t, subsection: n, urlOrigin: r } = e;
    l.default.track(f.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
        user_settings_section: t,
        user_settings_subsection: n,
        user_settings_url_origin: r,
    });
}
function g() {
    let e = (0, c.Ci)("getWebUserSettingFromSection");
    return new Map([
        [f.nc_.ACCOUNT, u.X.ACCOUNT_PANEL],
        [f.nc_.PROFILE_CUSTOMIZATION, u.X.PROFILE_PANEL],
        [f.nc_.CONTENT_AND_SOCIAL, u.X.CONTENT_AND_SOCIAL_PANEL],
        [f.nc_.DATA_AND_PRIVACY, u.X.DATA_AND_PRIVACY_PANEL],
        [f.nc_.PRIVACY_AND_SAFETY, u.X.DATA_AND_PRIVACY_PANEL],
        [f.nc_.FAMILY_CENTER, u.X.FAMILY_CENTER_PANEL],
        [f.nc_.SESSIONS, u.X.SESSIONS_PANEL],
        [f.nc_.AUTHORIZED_APPS, u.X.AUTHORIZED_APPS_PANEL],
        [f.nc_.CONNECTIONS, u.X.CONNECTIONS_PANEL],
        [f.nc_.CLIPS, u.X.CLIPS_PANEL],
        [f.nc_.PREMIUM, u.X.NITRO_PANEL],
        [f.nc_.GUILD_BOOSTING, u.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
        [f.nc_.SUBSCRIPTIONS, u.X.SUBSCRIPTIONS_PANEL],
        [f.nc_.INVENTORY, u.X.GIFT_PANEL],
        [f.nc_.BILLING, u.X.BILLING_PANEL],
        [f.nc_.APPEARANCE, e ? u.X.DISPLAY_PANEL : u.X.APPEARANCE_PANEL],
        [f.nc_.ACCESSIBILITY, u.X.ACCESSIBILITY_PANEL],
        [f.nc_.VOICE, u.X.VOICE_AND_VIDEO_PANEL],
        [f.nc_.POGGERMODE, u.X.POGGERMODE_PANEL],
        [f.nc_.TEXT, e ? u.X.DISPLAY_MESSAGES_CATEGORY : u.X.CHAT_PANEL],
        [f.nc_.NOTIFICATIONS, u.X.NOTIFICATIONS_PANEL],
        [f.nc_.KEYBINDS, u.X.KEYBINDS_PANEL],
        [f.nc_.LANGUAGE, u.X.LANGUAGE_AND_TIME_PANEL],
        [f.nc_.WINDOWS, e ? u.X.ADVANCED_CATEGORY : u.X.WINDOWS_PANEL],
        [f.nc_.LINUX, e ? u.X.ADVANCED_CATEGORY : u.X.LINUX_PANEL],
        [f.nc_.STREAMER_MODE, e ? u.X.STREAMER_MODE_CATEGORY : u.X.STREAMER_MODE_PANEL],
        [f.nc_.ADVANCED, e ? u.X.DEVELOPER_PANEL : u.X.ADVANCED_PANEL],
        [f.nc_.ACTIVITY_PRIVACY, u.X.ACTIVITY_PRIVACY_PANEL],
        [f.nc_.REGISTERED_GAMES, u.X.REGISTERED_GAMES_PANEL],
        [f.nc_.OVERLAY, u.X.OVERLAY_PANEL],
        [f.nc_.EXPERIMENTS, u.X.EXPERIMENTS_PANEL],
        [f.nc_.DEVELOPER_OPTIONS, u.X.DEVELOPER_OPTIONS_PANEL],
        [f.nc_.ACCOUNT_STANDING, u.X.ACCOUNT_STANDING_CATEGORY],
        [f.nc_.CONNECTED_GAMES, u.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY],
        [f.nc_.EMAILS, u.X.NOTIFICATIONS_EMAIL_CATEGORY],
    ]);
}
function A() {
    let e = g(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
function I(e) {
    let { match: t, urlOrigin: n, analyticsLocations: r } = e;
    m({ section: t.section, subsection: t.subsection, urlOrigin: n });
    let i = g(),
        s = i.get(t.section);
    if (null == s) {
        E({ section: t.section, subsection: t.subsection, urlOrigin: n }), h();
        return;
    }
    t.subsection === _.nR
        ? (a.A.setState({ subsection: t.subsection }),
          h(s, { section: t.section, subsection: t.subsection, analyticsLocations: r }))
        : h((null != t.subsection && "" !== t.subsection ? i.get(f.nc_[t.subsection]) : null) ?? s, {
              section: t.section,
              subsection: t.subsection,
              analyticsLocations: r,
          });
}
