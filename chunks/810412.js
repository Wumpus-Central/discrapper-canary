"use strict";
n.d(t, {
    Dk: () => h,
    IP: () => T,
    OverlayToggledClientSettingType: () => E,
    Q3: () => A,
    Y: () => I,
    YX: () => m,
    Z5: () => p,
    xp: () => f,
});
var i,
    r,
    a,
    s = n(64700),
    l = n(77729),
    o = n(760751),
    d = n(763827),
    c = n(174459),
    u = n(41984),
    _ = n(652215),
    E = (((i = {}).OOP = "oop"), (i.OOP_GAME = "oop game"), (i.LEGACY = "legacy"), (i.LEGACY_GAME = "legacy game"), i);
async function A(e, t, i) {
    let r = null != i ? o.A.getDetectableGame(i) : null,
        { default: a } = n(296027),
        s = a?.getMostRecentOverlayRenderMethod() ?? void 0,
        d = null != s ? u.Ue[s] : void 0;
    __OVERLAY__ && (d = u.Ue[u.Ue.Hook]),
        c.default.track(_.HAw.OVERLAY_TOGGLED, {
            enabled: e,
            setting_type: (function (e) {
                switch (e) {
                    case "oop":
                    case "oop game":
                    default:
                        return "overlay toggled - global";
                    case "legacy":
                    case "legacy game":
                        return "overlay toggled - game";
                }
            })(t),
            client_setting_type: t,
            application_id: r?.id ?? void 0,
            application_name: r?.name ?? void 0,
            most_recent_overlay_render_method: d,
            hardware_display_count: (await l.A?.hardware?.getDisplayCount?.()) ?? null,
        });
}
function h(e, t) {
    let [n, i] = s.useState(e()),
        r = s.useRef(e);
    return (
        s.useEffect(() => {
            r.current = e;
        }, [e]),
        s.useEffect(() => {
            i((e) => {
                let t = r.current();
                if (e.size > t.size || e.size < t.size) return t;
                for (let n of e) if (!t.has(n)) return t;
                for (let n of t) if (!e.has(n)) return t;
                return e;
            });
        }, t),
        n
    );
}
function I(e, t) {
    let { locked: n, shownUserIds: i, liveUserIds: r, contentInventoryIds: a } = t;
    ((i?.length ?? 0) !== 0 || (r?.length ?? 0) !== 0 || (a?.length ?? 0) !== 0) &&
        c.default.track(_.HAw.WIDGET_CONTENT_SHOWN, {
            overlay_locked: n,
            widget_type: e,
            shown_user_ids: i,
            live_user_ids: r,
            content_inventory_ids: a,
            media_session_id: d.A.getMediaSessionId(),
        });
}
function f(e, t) {
    let { pinned: n, opacity: i } = t;
    c.default.track(_.HAw.WIDGET_SETTING_UPDATED, { widget_type: e, pinned: n, opacity: i });
}
var p =
        (((r = {}).SCREEN_SHARE = "screen share"),
        (r.CAMERA = "camera"),
        (r.MICROPHONE = "microphone"),
        (r.AUDIO = "audio"),
        (r.VOICE = "voice"),
        (r.CALL_BUTTON = "call button"),
        (r.SOUNDBOARD = "soundboard"),
        (r.GO_LIVE = "go live"),
        (r.INVITE = "invite"),
        (r.REDIRECT = "redirect"),
        (r.FRIEND_LIST = "friend list"),
        (r.FRIEND_REQUEST = "friend request"),
        (r.KEYBIND_HINT = "keybind hint"),
        (r.TEXT_CHAT = "text chat"),
        (r.FAVORITE = "favorite"),
        (r.GROUP_MANAGED = "group managed"),
        (r.TAB_SELECTED = "tab selected"),
        (r.CLIPS = "clips"),
        r),
    T =
        (((a = {}).UNKNOWN = "unknown"),
        (a.ENABLED = "enabled"),
        (a.DISABLED = "disabled"),
        (a.SETTINGS_OPENED = "settings opened"),
        (a.PANEL_OPENED = "panel opened"),
        (a.OVERLAY_UNLOCKED = "overlay unlocked"),
        (a.STREAM_PREVIEWED = "stream previewed"),
        (a.INVITE_SENT = "invite sent"),
        (a.JOIN_REQUEST_SENT = "join request sent"),
        (a.PROFILE_OPENED = "profile opened"),
        (a.GUILD_PROFILE_OPENED = "guild profile opened"),
        (a.CHAT = "chat"),
        (a.ACCEPT_REQUEST = "accept request"),
        (a.DECLINE_REQUEST = "decline request"),
        (a.CANCEL_REQUEST = "cancel request"),
        (a.SEND_REQUEST = "send request"),
        (a.SEARCH = "search"),
        (a.SETTING_ADJUSTED = "setting adjusted"),
        (a.OPENED_TEXT_CHAT = "opened text chat"),
        (a.CLOSED_TEXT_CHAT = "closed text chat"),
        (a.CHANNEL_SELECTED = "channel selected"),
        (a.ADDED_TO_FAVORITES = "added to favorites"),
        (a.REMOVED_FROM_FAVORITES = "removed from favorites"),
        (a.FRIEND_TAB_SELECTED = "friend tab selected"),
        (a.VOICE_TAB_SELECTED = "voice tab selected"),
        (a.MESSAGES_TAB_SELECTED = "messages tab selected"),
        a);
function m(e, t) {
    let { type: n, value: i, userId: r, secondaryValue: a } = t;
    c.default.track(_.HAw.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: i,
        interaction_secondary_value: a,
        target_user_id: r,
        media_session_id: d.A.getMediaSessionId(),
    });
}
