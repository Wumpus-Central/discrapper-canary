n.d(t, { Dk: () => d, IP: () => E, Y: () => c, YX: () => A, Z5: () => _, xp: () => u });
var i,
    r,
    a = n(582128),
    s = n(763827),
    l = n(174459),
    o = n(652215);
function d(e, t) {
    let [n, i] = a.useState(e()),
        r = a.useRef(e);
    return (
        a.useEffect(() => {
            r.current = e;
        }, [e]),
        a.useEffect(() => {
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
function c(e, t) {
    let { locked: n, shownUserIds: i, liveUserIds: r, contentInventoryIds: a } = t;
    ((i?.length ?? 0) !== 0 || (r?.length ?? 0) !== 0 || (a?.length ?? 0) !== 0) &&
        l.default.track(o.HAw.WIDGET_CONTENT_SHOWN, {
            overlay_locked: n,
            widget_type: e,
            shown_user_ids: i,
            live_user_ids: r,
            content_inventory_ids: a,
            media_session_id: s.A.getMediaSessionId(),
        });
}
function u(e, t) {
    let { pinned: n, opacity: i } = t;
    l.default.track(o.HAw.WIDGET_SETTING_UPDATED, { widget_type: e, pinned: n, opacity: i });
}
var _ =
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
        (i.CLIPS = "clips"),
        i),
    E =
        (((r = {}).UNKNOWN = "unknown"),
        (r.ENABLED = "enabled"),
        (r.DISABLED = "disabled"),
        (r.SETTINGS_OPENED = "settings opened"),
        (r.PANEL_OPENED = "panel opened"),
        (r.OVERLAY_UNLOCKED = "overlay unlocked"),
        (r.STREAM_PREVIEWED = "stream previewed"),
        (r.INVITE_SENT = "invite sent"),
        (r.JOIN_REQUEST_SENT = "join request sent"),
        (r.PROFILE_OPENED = "profile opened"),
        (r.GUILD_PROFILE_OPENED = "guild profile opened"),
        (r.CHAT = "chat"),
        (r.ACCEPT_REQUEST = "accept request"),
        (r.DECLINE_REQUEST = "decline request"),
        (r.CANCEL_REQUEST = "cancel request"),
        (r.SEND_REQUEST = "send request"),
        (r.SEARCH = "search"),
        (r.SETTING_ADJUSTED = "setting adjusted"),
        (r.OPENED_TEXT_CHAT = "opened text chat"),
        (r.CLOSED_TEXT_CHAT = "closed text chat"),
        (r.CHANNEL_SELECTED = "channel selected"),
        (r.ADDED_TO_FAVORITES = "added to favorites"),
        (r.REMOVED_FROM_FAVORITES = "removed from favorites"),
        (r.FRIEND_TAB_SELECTED = "friend tab selected"),
        (r.VOICE_TAB_SELECTED = "voice tab selected"),
        (r.MESSAGES_TAB_SELECTED = "messages tab selected"),
        r);
function A(e, t) {
    let { type: n, value: i, userId: r, secondaryValue: a } = t;
    l.default.track(o.HAw.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: i,
        interaction_secondary_value: a,
        target_user_id: r,
        media_session_id: s.A.getMediaSessionId(),
    });
}
