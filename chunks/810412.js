"use strict";
n.d(t, {
    Dk: () => h,
    IP: () => A,
    OverlayToggledClientSettingType: () => f,
    Q3: () => E,
    Y: () => p,
    YX: () => I,
    Z5: () => g,
    xp: () => m,
});
var r,
    i,
    s,
    a = n(64700),
    o = n(77729),
    l = n(760751),
    u = n(383501),
    d = n(954571),
    c = n(41984),
    _ = n(652215),
    f = (((r = {}).OOP = "oop"), (r.OOP_GAME = "oop game"), (r.LEGACY = "legacy"), (r.LEGACY_GAME = "legacy game"), r);
async function E(e, t, r) {
    let i = null != r ? l.A.getDetectableGame(r) : null,
        { default: s } = n(833551),
        a = s?.getMostRecentOverlayRenderMethod() ?? void 0,
        u = null != a ? c.Ue[a] : void 0;
    __OVERLAY__ && (u = c.Ue[c.Ue.Hook]),
        d.default.track(_.HAw.OVERLAY_TOGGLED, {
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
            application_id: i?.id ?? void 0,
            application_name: i?.name ?? void 0,
            most_recent_overlay_render_method: u,
            hardware_display_count: (await o.A?.hardware?.getDisplayCount?.()) ?? null,
        });
}
function h(e, t) {
    let [n, r] = a.useState(e()),
        i = a.useRef(e);
    return (
        a.useEffect(() => {
            i.current = e;
        }, [e]),
        a.useEffect(() => {
            r((e) => {
                let t = i.current();
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
    let { locked: n, shownUserIds: r, liveUserIds: i, contentInventoryIds: s } = t;
    ((r?.length ?? 0) !== 0 || (i?.length ?? 0) !== 0 || (s?.length ?? 0) !== 0) &&
        d.default.track(_.HAw.WIDGET_CONTENT_SHOWN, {
            overlay_locked: n,
            widget_type: e,
            shown_user_ids: r,
            live_user_ids: i,
            content_inventory_ids: s,
            media_session_id: u.A.getMediaSessionId(),
        });
}
function m(e, t) {
    let { pinned: n, opacity: r } = t;
    d.default.track(_.HAw.WIDGET_SETTING_UPDATED, { widget_type: e, pinned: n, opacity: r });
}
var g =
        (((i = {}).SCREEN_SHARE = "screen share"),
        (i.CAMERA = "camera"),
        (i.MICROPHONE = "microphone"),
        (i.AUDIO = "audio"),
        (i.VOICE = "voice"),
        (i.CALL_BUTTON = "call button"),
        (i.SOUNDBOARD = "soundboard"),
        (i.GO_LIVE = "go live"),
        (i.INVITE = "invite"),
        (i.REDIRECT = "redirect"),
        (i.FRIEND_LIST = "friend list"),
        (i.FRIEND_REQUEST = "friend request"),
        (i.KEYBIND_HINT = "keybind hint"),
        (i.TEXT_CHAT = "text chat"),
        (i.FAVORITE = "favorite"),
        (i.GROUP_MANAGED = "group managed"),
        (i.TAB_SELECTED = "tab selected"),
        i),
    A =
        (((s = {}).UNKNOWN = "unknown"),
        (s.ENABLED = "enabled"),
        (s.DISABLED = "disabled"),
        (s.SETTINGS_OPENED = "settings opened"),
        (s.PANEL_OPENED = "panel opened"),
        (s.OVERLAY_UNLOCKED = "overlay unlocked"),
        (s.STREAM_PREVIEWED = "stream previewed"),
        (s.INVITE_SENT = "invite sent"),
        (s.JOIN_REQUEST_SENT = "join request sent"),
        (s.PROFILE_OPENED = "profile opened"),
        (s.GUILD_PROFILE_OPENED = "guild profile opened"),
        (s.CHAT = "chat"),
        (s.ACCEPT_REQUEST = "accept request"),
        (s.DECLINE_REQUEST = "decline request"),
        (s.CANCEL_REQUEST = "cancel request"),
        (s.SEND_REQUEST = "send request"),
        (s.SEARCH = "search"),
        (s.SETTING_ADJUSTED = "setting adjusted"),
        (s.OPENED_TEXT_CHAT = "opened text chat"),
        (s.CLOSED_TEXT_CHAT = "closed text chat"),
        (s.CHANNEL_SELECTED = "channel selected"),
        (s.ADDED_TO_FAVORITES = "added to favorites"),
        (s.REMOVED_FROM_FAVORITES = "removed from favorites"),
        (s.FRIEND_TAB_SELECTED = "friend tab selected"),
        (s.VOICE_TAB_SELECTED = "voice tab selected"),
        (s.MESSAGES_TAB_SELECTED = "messages tab selected"),
        s);
function I(e, t) {
    let { type: n, value: r, userId: i, secondaryValue: s } = t;
    d.default.track(_.HAw.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: r,
        interaction_secondary_value: s,
        target_user_id: i,
        media_session_id: u.A.getMediaSessionId(),
    });
}
