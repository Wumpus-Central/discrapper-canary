"use strict";
n.d(t, { BV: () => _, Cr: () => c, ME: () => a, YY: () => o, c$: () => u, gN: () => l });
var i = n(323125),
    r = n(758836);
n(436317);
var s = n(435220);
let a = "@me",
    o = "@favorites",
    l = "@inbox",
    u = "@guilds-empty-nux",
    c = [a, o, u, l, "@guild-upsell-list"],
    d = Object.freeze({
        INDEX: "/",
        APP: "/app",
        APP_WITH_INVITE_AND_GUILD_ONBOARDING: (e) => `/app/invite-with-guild-onboarding/${e}`,
        APP_WITH_GIFT_CODE: (e) => `/app/gifts/${e}`,
        ACTIVITY: "/activity",
        ACTIVITIES: "/activities",
        ACTIVITIES_HAPPENING_NOW: "/activities/happening-now",
        ACTIVITY_DETAILS: (e) => `/activities/${e}`,
        APPLICATION_LIBRARY: "/library",
        APPLICATION_LIBRARY_INVENTORY: "/library/inventory",
        APPLICATION_LIBRARY_ACTION: (e, t) => `/library/${e}/${t}`,
        APPLICATION_LIBRARY_SETTINGS: "/library/settings",
        APPLICATION_STORE: "/store",
        APPLICATION_STORE_LISTING_SKU: (e, t) => `/store/skus/${e}${null != t ? `/${t}` : ""}`,
        APPLICATION_STORE_LISTING_APPLICATION: (e, t) => `/store/applications/${e}${null != t ? `/${t}` : ""}`,
        BILLING_PREFIX: "/billing",
        BILLING_LOGIN_HANDOFF: "/billing/login/handoff",
        BILLING_PREMIUM_SUBSCRIBE: "/billing/premium/subscribe",
        BILLING_PAYMENT_SOURCES_CREATE: "/billing/payment-sources/create",
        BILLING_PREMIUM_SWITCH_PLAN: "/billing/premium/switch-plan",
        BILLING_GUILD_SUBSCRIPTIONS_PURCHASE: "/billing/guild-subscriptions/purchase",
        BILLING_PAYMENTS: "/billing/payments",
        BILLING_PROMOTION_REDEMPTION: (e) => `/billing/promotions/${e}`,
        BILLING_PROMOTION_REDEMPTION_GENERIC: "/billing/promotions",
        BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION: (e, t) => `/billing/partner-promotions/${e}/${t}`,
        GIFT_CARD_REDEEM: "/redeem",
        FRIENDS: "/channels/@me",
        ME: "/channels/@me",
        MESSAGE_REQUESTS: "/message-requests",
        CHANNEL: (e, t, n) => {
            let i = null == t ? `/channels/${e || a}` : `/channels/${e || a}/${t}`;
            return null == n ? i : `${i}/${n}`;
        },
        CHANNEL_THREAD_VIEW: (e, t, n, i) => {
            let r = `/channels/${e}/${t}/threads/${n}`;
            return null == i ? r : `${r}/${i}`;
        },
        VOICE_CHAT_CHANNEL_PARTIAL: (e, t, n) => {
            let i = `/voice/${e}/${t}`;
            return null == n ? i : `${i}/${n}`;
        },
        LOGIN: "/login",
        LOGIN_HANDOFF: "/login/handoff",
        LOGIN_ONE_TIME: "/login/one-time",
        REGISTER: "/register",
        DEFAULT_LOGGED_OUT: "/login",
        INVITE: (e) => `/invite/${e}`,
        INVITE_LOGIN: (e) => `/invite/${e}/login`,
        INVITE_REGISTER: (e) => `/invite/${e}/register`,
        INVITE_PROXY: (e) => `/invite-proxy/${e}`,
        GUILD_TEMPLATE: (e) => `/template/${e}`,
        GUILD_TEMPLATE_LOGIN: (e) => `/template/${e}/login`,
        GIFT_CODE: (e) => `/gifts/${e}`,
        GIFT_CODE_LOGIN: (e) => `/gifts/${e}/login`,
        WELCOME: (e, t) => (null != t ? `/welcome/${e ?? a}/${t}` : `/welcome/${e ?? a}`),
        VERIFY: "/verify",
        VERIFY_REQUEST: "/verify-request",
        RESET: "/reset",
        APPS: "/apps",
        ACTIVATE: "/activate",
        ACTIVATE_HANDOFF: "/activate/handoff",
        CONNECTION_LINK: (e) => `/connections/${e}/link`,
        CONNECTION_LINK_AUTHORIZE: (e) => `/connections/${e}/link-authorize`,
        CONNECTIONS_SUCCESS: (e) => `/connections/${e}/success`,
        CONNECTIONS_ERROR: (e) => `/connections/${e}/error`,
        CONNECTIONS: (e) => `/connections/${e}`,
        CONNECTIONS_AUTHORIZE_CONTINUE: (e) => `/connections/${e}/authorize-continue`,
        CONNECT_AUTHORIZE: "/connect/authorize",
        OAUTH2_AUTHORIZE: "/oauth2/authorize",
        OAUTH2_AUTHORIZED: "/oauth2/authorized",
        OAUTH2_ERROR: "/oauth2/error",
        SETTINGS: (e, t) => `/settings/${e}${null != t ? `/${t}` : ""}`,
        DEVELOPER_ACTIVATE_APPLICATION_TEST_MODE: "/settings/advanced/activate-application-test-mode",
        SNOWSGIVING: "/snowsgiving",
        PLAYGROUND: (e, t) => {
            let n = "/playground";
            return null != e && ((n += `/${e}`), null != t && (n += `/${t}`)), n;
        },
        CHANGELOGS: (e) => `/settings/changelogs${null != e ? `/${e}` : ""}`,
        USERS: (e) => `/users/${e}`,
        GUILD_CREATE: "/guilds/create",
        DISABLE_EMAIL_NOTIFICATIONS: "/disable-email-notifications",
        DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "/disable-server-highlight-notifications",
        USER_GUILD_NOTIFICATION_SETTINGS: (e) => `/guilds/${e}/notification-settings`,
        AUTHORIZE_IP: "/authorize-ip",
        REJECT_IP: "/reject-ip",
        REJECT_MFA: "/reject-mfa",
        AUTHORIZE_PAYMENT: "/authorize-payment",
        HANDOFF: "/handoff",
        DOMAIN_MIGRATION: "/domain-migration",
        XBOX_EDU: "/connections/xbox/intro",
        XBOX_PIN: "/connections/xbox/pin",
        DOWNLOAD_QR_CODE_REDIRECT: "/download-qr-code",
        BILLING_POPUP_BRIDGE_CALLBACK: "/billing/popup-bridge/callback",
        OAUTH2_WHITELIST_ACCEPT: "/oauth2/allowlist/accept",
        GUILD_DISCOVERY: "/guild-discovery",
        GLOBAL_DISCOVERY: "/discovery",
        QUEST_HOME_DEPRECATED: "/discovery/quests",
        QUEST_HOME: "/quest-home",
        GLOBAL_DISCOVERY_SERVERS: "/discovery/servers",
        GLOBAL_DISCOVERY_APPS: "/discovery/applications",
        GLOBAL_DISCOVERY_APPS_CATEGORY: (e) => `/discovery/applications/categories/${e}`,
        GLOBAL_DISCOVERY_APPS_PROFILE: (e) => `/discovery/applications/${e}`,
        GLOBAL_DISCOVERY_APPS_PROFILE_SECTION: (e, t) => `/discovery/applications/${e}/${t}`,
        GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: (e, t) =>
            `/discovery/applications/${e}/${s.GlobalDiscoveryAppsSections.STORE}/${t}`,
        GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
        GUILD_MEMBER_VERIFICATION: (e) => `/member-verification/${e}`,
        GUILD_MEMBER_VERIFICATION_FOR_HUB: (e, t) => `/member-verification-for-hub/${e}${null != t ? `/${t}` : ""}`,
        POPOUT_WINDOW: "/popout",
        UPCOMING_STAGES: (e, t) => `/guild-stages/${e}${null != t ? `/${t}` : ""}`,
        VERIFY_HUB_EMAIL: "/verify-hub-email",
        OPEN_APP_FROM_EMAIL: "/open-app-from-email",
        BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
        BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK: (e, t) =>
            `/billing/premium/manage?deep_link_type=${e}${null != t ? `&load_id=${t}` : ""}`,
        BILLING_MANAGE_SUBSCRIPTION_WITH_FLOW_TYPE: (e, t) =>
            `/billing/premium/manage?flow_type=${e}${null != t ? `&load_id=${t}` : ""}`,
        BILLING_STANDALONE_CHECKOUT_PAGE: (e, t, n, i, r, s, a) =>
            `/billing/premium/subscribe?plan_id=${e}&gift=${t}&load_id=${n}${null != i ? `&payment_method_type=${i}` : ""}${null != r ? `&deep_link_type=${r}` : ""}${null != s ? `&use_preset_offer=${s}` : ""}${null != a ? `&flow_type=${a}` : ""}`,
        BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE: (e, t, n, i) =>
            `/billing/guild-subscriptions/purchase?guild_id=${e}${null != t ? `&deep_link_type=${t}` : ""}${null != n ? `&load_id=${n}` : ""}${null != i ? `&flow_type=${i}` : ""}`,
        GUILD_BOOSTING_MARKETING: (e) => `/guilds/${e}/premium-guild-subscriptions`,
        GUILD_SETTINGS: (e, t, n) => {
            let i = `/guilds/${e}/settings${null != t ? `/${t}` : ""}`;
            return null == n ? i : `${i}/${n}`;
        },
        PICK_GUILD_SETTINGS: (e, t, n) => {
            let i = `/guilds/settings${null != e ? `/${e}` : ""}`,
                r = null == t ? i : `${i}/${t}`;
            return `${r}${null != n ? `?feature=${n}` : ""}`;
        },
        GUILD_EVENT_DETAILS: (e, t, n) => `/events/${e}/${t}` + (null != n ? `/${n}` : ""),
        FEATURE: (e) => `/feature/${e}`,
        GUILD_FEATURE: (e, t) => `/feature/${e}/${t}`,
        GUILD_JOIN_REQUEST: (e, t) => `/guilds/${e}/requests/${t}`,
        MOBILE_WEB_HANDOFF: "/mweb-handoff",
        APPLICATION_DIRECTORY: "/application-directory",
        APPLICATION_DIRECTORY_PROFILE: (e) => `/application-directory/${e}`,
        APPLICATION_DIRECTORY_PROFILE_SECTION: (e, t) => `/application-directory/${e}/${t}`,
        APPLICATION_DIRECTORY_PROFILE_STORE_SKU: (e, t) =>
            `/application-directory/${e}/${s.ApplicationDirectoryProfileSections.STORE}/${t}`,
        APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
        FAMILY_CENTER: "/family-center",
        SERVER_SHOP: (e) => `/channels/${e}/shop`,
        CHANNELS_GAME_SHOP: (e, t, n, i) => {
            let r = `/channels/${e}/game-shop`;
            return (r += `/${t ?? 0}`), null != n && ((r += `/${n}`), null != i && (r += `/${i}`)), r;
        },
        GAME_SHOP: (e, t, n) => {
            let i = `/game-shop/${e}`;
            return null != t && ((i += `/${t}`), null != n && (i += `/${n}`)), i;
        },
        GUILD_PRODUCT: (e, t) => `/channels/${e}/shop/${t}`,
        REPORT: "/report",
        REPORT_SECOND_LOOK: "/report-review",
        COLLECTIBLES_SHOP: "/shop",
        COLLECTIBLES_SHOP_GAME_SHOP: (e, t, n, i) => {
            let s = `/shop?tab=${r.G2.GAME_SHOPS}&applicationId=${e}`;
            return (
                null != t && (s += `&pageIndex=${t}`),
                null != n && (s += `&skuId=${n}`),
                null != i && (s += `&slug=${i}`),
                s
            );
        },
        COLLECTIBLES_SHOP_WITH_TAB: (e) => `/shop?tab=${e}`,
        COLLECTIBLES_SHOP_COLLECTION_DETAIL: (e) => `/shop/collection/${e}`,
        COLLECTIBLES_SHOP_PRODUCT_DETAIL: (e) => `/shop/product/${e}`,
        COLLECTIBLES_SHOP_LAYOUT: (e) => `/shop/layout/${e}`,
        NITRO_HOME: "/store",
        ACCOUNT_STANDING: "/account-standing",
        CHANNEL_SUMMARIES: (e) => `/channels/${e}/summaries`,
        CHANNEL_SUMMARY: (e, t) => `/channels/${e}/summaries/${t}`,
        USER_SUMMARIES: "/users/@me/summaries",
        QUESTS: (e) => `/quests/${e}`,
        GAME_PROFILE: (e) => `/games/${e}`,
        ACCOUNT_REVERT: (e) => `/wasntme/${e}`,
        POWERUP_STORE: (e) => `/channels/${e}/boosts`,
        CONFERENCE_MODE: "/conference-mode",
        CONFERENCE_MODE_VOICE: (e, t) => `/conference-mode/voice/${e}/${t}`,
        QUEST_PREVIEW: (e) => `/quest-preview/${e}`,
        QUEST_PREVIEW_TOOL_2: (e) => `/quest-home?tab=preview_tool&quest_id=${e}`,
        ICYMI: "/icymi",
    }),
    _ = (0, i.dN)(d, [":", "?", "@"]);
