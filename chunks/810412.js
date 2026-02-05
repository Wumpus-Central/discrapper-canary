"use strict";
n.d(t, {
    Dk: () => f,
    IP: () => g,
    OverlayToggledClientSettingType: () => c,
    Q3: () => _,
    Y: () => p,
    YX: () => E,
    Z5: () => m,
    xp: () => h,
});
var r = n(64700),
    i = n(77729),
    a = n(760751),
    s = n(383501),
    o = n(954571),
    l = n(41984),
    u = n(652215),
    c = (function (e) {
        return (e.OOP = "oop"), (e.OOP_GAME = "oop game"), (e.LEGACY = "legacy"), (e.LEGACY_GAME = "legacy game"), e;
    })({});
function d(e) {
    switch (e) {
        case "oop":
        case "oop game":
        default:
            return "overlay toggled - global";
        case "legacy":
        case "legacy game":
            return "overlay toggled - game";
    }
}
async function _(e, t, r) {
    let s = null != r ? a.A.getDetectableGame(r) : null,
        { default: c } = n(833551),
        _ = c?.getMostRecentOverlayRenderMethod() ?? void 0,
        f = null != _ ? l.Ue[_] : void 0;
    __OVERLAY__ && (f = l.Ue[l.Ue.Hook]),
        o.default.track(u.HAw.OVERLAY_TOGGLED, {
            enabled: e,
            setting_type: d(t),
            client_setting_type: t,
            application_id: s?.id ?? void 0,
            application_name: s?.name ?? void 0,
            most_recent_overlay_render_method: f,
            hardware_display_count: (await i.A?.hardware?.getDisplayCount?.()) ?? null,
        });
}
function f(e, t) {
    let [n, i] = r.useState(e()),
        a = r.useRef(e);
    return (
        r.useEffect(() => {
            a.current = e;
        }, [e]),
        r.useEffect(() => {
            i((e) => {
                let t = a.current();
                if (e.size > t.size || e.size < t.size) return t;
                for (let n of e) if (!t.has(n)) return t;
                for (let n of t) if (!e.has(n)) return t;
                return e;
            });
        }, t),
        n
    );
}
function p(e, t) {
    let { locked: n, shownUserIds: r, liveUserIds: i, contentInventoryIds: a } = t;
    ((r?.length ?? 0) !== 0 || (i?.length ?? 0) !== 0 || (a?.length ?? 0) !== 0) &&
        o.default.track(u.HAw.WIDGET_CONTENT_SHOWN, {
            overlay_locked: n,
            widget_type: e,
            shown_user_ids: r,
            live_user_ids: i,
            content_inventory_ids: a,
            media_session_id: s.A.getMediaSessionId(),
        });
}
function h(e, t) {
    let { pinned: n, opacity: r } = t;
    o.default.track(u.HAw.WIDGET_SETTING_UPDATED, { widget_type: e, pinned: n, opacity: r });
}
var m = (function (e) {
        return (
            (e.SCREEN_SHARE = "screen share"),
            (e.CAMERA = "camera"),
            (e.MICROPHONE = "microphone"),
            (e.AUDIO = "audio"),
            (e.VOICE = "voice"),
            (e.CALL_BUTTON = "call button"),
            (e.SOUNDBOARD = "soundboard"),
            (e.GO_LIVE = "go live"),
            (e.INVITE = "invite"),
            (e.REDIRECT = "redirect"),
            (e.FRIEND_LIST = "friend list"),
            (e.FRIEND_REQUEST = "friend request"),
            (e.KEYBIND_HINT = "keybind hint"),
            (e.TEXT_CHAT = "text chat"),
            (e.FAVORITE = "favorite"),
            (e.GROUP_MANAGED = "group managed"),
            (e.TAB_SELECTED = "tab selected"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e.UNKNOWN = "unknown"),
            (e.ENABLED = "enabled"),
            (e.DISABLED = "disabled"),
            (e.SETTINGS_OPENED = "settings opened"),
            (e.PANEL_OPENED = "panel opened"),
            (e.OVERLAY_UNLOCKED = "overlay unlocked"),
            (e.STREAM_PREVIEWED = "stream previewed"),
            (e.INVITE_SENT = "invite sent"),
            (e.JOIN_REQUEST_SENT = "join request sent"),
            (e.PROFILE_OPENED = "profile opened"),
            (e.GUILD_PROFILE_OPENED = "guild profile opened"),
            (e.CHAT = "chat"),
            (e.ACCEPT_REQUEST = "accept request"),
            (e.DECLINE_REQUEST = "decline request"),
            (e.CANCEL_REQUEST = "cancel request"),
            (e.SEND_REQUEST = "send request"),
            (e.SEARCH = "search"),
            (e.SETTING_ADJUSTED = "setting adjusted"),
            (e.OPENED_TEXT_CHAT = "opened text chat"),
            (e.CLOSED_TEXT_CHAT = "closed text chat"),
            (e.CHANNEL_SELECTED = "channel selected"),
            (e.ADDED_TO_FAVORITES = "added to favorites"),
            (e.REMOVED_FROM_FAVORITES = "removed from favorites"),
            (e.FRIEND_TAB_SELECTED = "friend tab selected"),
            (e.VOICE_TAB_SELECTED = "voice tab selected"),
            (e.MESSAGES_TAB_SELECTED = "messages tab selected"),
            e
        );
    })({});
function E(e, t) {
    let { type: n, value: r, userId: i, secondaryValue: a } = t;
    o.default.track(u.HAw.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: r,
        interaction_secondary_value: a,
        target_user_id: i,
        media_session_id: s.A.getMediaSessionId(),
    });
}
