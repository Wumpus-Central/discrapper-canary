"use strict";
n.r(t),
    n.d(t, {
        USER_SETTINGS_MODAL_KEY: () => f,
        getUserSettingsSectionsByWebUserSettings: () => m,
        getWebUserSettingsByUserSettingsSections: () => h,
        openUserSettings: () => p,
    });
var r = n(627968),
    i = n(397927),
    s = n(73153),
    a = n(790284),
    o = n(272053),
    l = n(780964),
    u = n(358776),
    c = n(995377),
    d = n(355097),
    _ = n(652215);
let f = "USER_SETTINGS_MODAL_MODAL_KEY";
async function p(e) {
    let {
            subsection: t,
            section: l,
            path: u,
            stackingBehavior: p = "replaceAll",
            ...h
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        E = arguments.length > 2 ? arguments[2] : void 0,
        g = (null != t && t === d.nR) || (null != u && u === d.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS);
    g && a.A.setState({ subsection: d.nR });
    let A = l ?? (null != e ? m().get(e) : null) ?? _.nc_.ACCOUNT;
    if (
        (s.h.dispatch({
            type: "USER_SETTINGS_MODAL_OPEN",
            section: A ?? null,
            subsection: t ?? (g ? d.nR : null),
            ...h,
        }),
        (0, c.f)())
    ) {
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
            { modalKey: f, stackingBehavior: p, stackNextByDefault: !0, contextKey: i.SYi },
        );
    E?.();
}
function h() {
    let e = (0, u.Ci)("getWebUserSettingFromSection");
    return new Map([
        [_.nc_.ACCOUNT, l.X.ACCOUNT_PANEL],
        [_.nc_.PROFILE_CUSTOMIZATION, l.X.PROFILE_PANEL],
        [_.nc_.CONTENT_AND_SOCIAL, l.X.CONTENT_AND_SOCIAL_PANEL],
        [_.nc_.DATA_AND_PRIVACY, l.X.DATA_AND_PRIVACY_PANEL],
        [_.nc_.PRIVACY_AND_SAFETY, l.X.DATA_AND_PRIVACY_PANEL],
        [_.nc_.FAMILY_CENTER, l.X.FAMILY_CENTER_PANEL],
        [_.nc_.SESSIONS, l.X.SESSIONS_PANEL],
        [_.nc_.AUTHORIZED_APPS, l.X.AUTHORIZED_APPS_PANEL],
        [_.nc_.CONNECTIONS, l.X.CONNECTIONS_PANEL],
        [_.nc_.CLIPS, l.X.CLIPS_PANEL],
        [_.nc_.PREMIUM, l.X.NITRO_PANEL],
        [_.nc_.GUILD_BOOSTING, l.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL],
        [_.nc_.SUBSCRIPTIONS, l.X.SUBSCRIPTIONS_PANEL],
        [_.nc_.INVENTORY, l.X.GIFT_PANEL],
        [_.nc_.BILLING, l.X.BILLING_PANEL],
        [_.nc_.APPEARANCE, e ? l.X.DISPLAY_PANEL : l.X.APPEARANCE_PANEL],
        [_.nc_.ACCESSIBILITY, l.X.ACCESSIBILITY_PANEL],
        [_.nc_.VOICE, l.X.VOICE_AND_VIDEO_PANEL],
        [_.nc_.POGGERMODE, l.X.POGGERMODE_PANEL],
        [_.nc_.TEXT, e ? l.X.DISPLAY_MESSAGES_CATEGORY : l.X.CHAT_PANEL],
        [_.nc_.NOTIFICATIONS, l.X.NOTIFICATIONS_PANEL],
        [_.nc_.KEYBINDS, l.X.KEYBINDS_PANEL],
        [_.nc_.LANGUAGE, l.X.LANGUAGE_AND_TIME_PANEL],
        [_.nc_.WINDOWS, e ? l.X.ADVANCED_CATEGORY : l.X.WINDOWS_PANEL],
        [_.nc_.LINUX, e ? l.X.ADVANCED_CATEGORY : l.X.LINUX_PANEL],
        [_.nc_.STREAMER_MODE, e ? l.X.STREAMER_MODE_CATEGORY : l.X.STREAMER_MODE_PANEL],
        [_.nc_.ADVANCED, e ? l.X.DEVELOPER_PANEL : l.X.ADVANCED_PANEL],
        [_.nc_.ACTIVITY_PRIVACY, l.X.ACTIVITY_PRIVACY_PANEL],
        [_.nc_.REGISTERED_GAMES, l.X.REGISTERED_GAMES_PANEL],
        [_.nc_.OVERLAY, l.X.OVERLAY_PANEL],
        [_.nc_.EXPERIMENTS, l.X.EXPERIMENTS_PANEL],
        [_.nc_.DEVELOPER_OPTIONS, l.X.DEVELOPER_OPTIONS_PANEL],
        [_.nc_.ACCOUNT_STANDING, l.X.ACCOUNT_STANDING_CATEGORY],
        [_.nc_.CONNECTED_GAMES, l.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY],
        [_.nc_.EMAILS, l.X.NOTIFICATIONS_EMAIL_CATEGORY],
    ]);
}
function m() {
    let e = h(),
        t = new Map();
    for (let [n, r] of e.entries()) t.set(r, n);
    return t;
}
