"use strict";
n.d(t, { A: () => X });
var i = n(132500),
    r = n(499979),
    a = n(228366),
    s = n(56562),
    l = n(439372),
    o = n(77729),
    d = n(626584),
    c = n(973522),
    u = n(952818),
    _ = n(41984),
    E = n(296027),
    A = n(592598),
    h = n(157257),
    I = n(773371),
    f = n(184809),
    p = n(174459),
    T = n(19575),
    m = n(9302),
    g = n(365971),
    S = n(427603),
    N = n(506774);
class C {
    static _loaded = null;
    static storageKey = "GameDisplayModeStorage";
    games;
    constructor(e) {
        this.games = e;
    }
    save() {
        let e = { games: this.games };
        N.w.set(C.storageKey, e);
    }
    static load() {
        return null == C._loaded && (C._loaded = C.loadInternal()), C._loaded;
    }
    static loadInternal() {
        let e = N.w.get(C.storageKey);
        if (null != e) return new C(e.games ?? {});
        let t = new C({});
        return t.save(), t;
    }
    static getGameSettings(e) {
        return null == e ? null : (C.load().games[e] ?? null);
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = C.load(),
            i = n.games[e];
        if (null == i) {
            (n.games[e] = { screen: s.aI.UNKNOWN, date: Date.now(), ...t }), n.save();
            return;
        }
        "boolean" == typeof t.disabled && (i.disabled = t.disabled),
            "number" == typeof t.screen && (i.screen = t.screen),
            (i.date = Date.now()),
            n.save();
    }
    static isPromptingForGameDisable(e) {
        return C.getGameSettings(e)?.disabled ?? !1;
    }
    static setPromptingForGameDisable(e, t) {
        C.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        return null == e ? null : (C.getGameSettings(e)?.screen ?? null);
    }
    static setGameDisplayMode(e, t) {
        C.updateGameSettings(e, { screen: t });
    }
    static clearOldGameSettings() {
        let e = C.load();
        if (null == e.games) return;
        let t = Date.now() - 31536e6;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
        e.save();
    }
    static reset() {
        let e = C.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
}
setTimeout(() => C.clearOldGameSettings(), 6e4);
var O = n(652215),
    R = n(672396);
let L = new d.A("OverlayUsageStatsManager");
L.verbose = () => {};
class D {
    actions = { [R.uj.Viewed]: 0, [R.uj.Clicked]: 0 };
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[R.uj.Viewed],
            i = this.actions[R.uj.Clicked];
        return 0 === n && 0 === i ? null : { event_uuid: t, notification_type: e, viewed_count: n, clicked_count: i };
    }
}
class y {
    actionCounters = { [R.uj.Viewed]: 0, [R.uj.Clicked]: 0 };
    groupCounters = { [R.uj.Viewed]: y.makeEmptyGroupAnalytics(), [R.uj.Clicked]: y.makeEmptyGroupAnalytics() };
    counters = y.makeCounters();
    static makeEmptyGroupAnalytics() {
        return {
            [R.BR.Nudge]: 0,
            [R.BR.TextChat]: 0,
            [R.BR.VoiceCall]: 0,
            [R.BR.Activity]: 0,
            [R.BR.Clips]: 0,
            [R.BR.Other]: 0,
        };
    }
    static makeCounters() {
        let e = {},
            t = Object.values(R.KS);
        for (let n of t) e[n] = new D();
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e;
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void L.error(`NotificationCounter: Unknown notification action: ${t}`);
        let i = (0, R.Vo)(e);
        if (!(i in n)) return void L.error(`NotificationCounter: Unknown notification action: ${e}`);
        ++n[i], ++this.actionCounters[t];
        let r = this.counters[e];
        null == r ? L.error(`NotificationCounter: Unknown notification type: ${e}`) : r.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[R.uj.Viewed],
            t = this.groupCounters[R.uj.Clicked];
        return {
            notices_viewed: this.actionCounters[R.uj.Viewed],
            notices_clicked: this.actionCounters[R.uj.Clicked],
            notice_nudge_viewed: e[R.BR.Nudge],
            notice_text_chat_viewed: e[R.BR.TextChat],
            notice_voice_call_viewed: e[R.BR.VoiceCall],
            notice_activity_viewed: e[R.BR.Activity],
            notice_clips_viewed: e[R.BR.Clips],
            notice_other_viewed: e[R.BR.Other],
            notice_nudge_clicked: t[R.BR.Nudge],
            notice_text_chat_clicked: t[R.BR.TextChat],
            notice_voice_call_clicked: t[R.BR.VoiceCall],
            notice_activity_clicked: t[R.BR.Activity],
            notice_clips_clicked: t[R.BR.Clips],
            notice_other_clicked: t[R.BR.Other],
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((t) => {
                let [n, i] = t;
                return i.getAnalytics(n, e);
            })
            .filter((e) => null != e);
    }
}
class v {
    types = { 0: v.makeEmptyAnalytics(), 1: v.makeEmptyAnalytics() };
    static makeEmptyAnalytics() {
        return { initialized: !1, pinnedToggledCount: 0, visibleDuration: new r.W0(), pinned: !1 };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case O.uss.VOICE:
                return this.getByType(0);
            case O.uss.TEXT:
                return this.getByType(1);
            default:
                return null;
        }
    }
    getAnalytics() {
        let e = this.types[0],
            t = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: t.pinnedToggledCount,
            widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: t.pinned,
        };
    }
}
class b {
    game;
    counters = {
        [s.aI.UNKNOWN]: new r.W0(),
        [s.aI.WINDOWED]: new r.W0(),
        [s.aI.MAXIMIZED]: new r.W0(),
        [s.aI.BORDERLESS_FULLSCREEN]: new r.W0(),
        [s.aI.FULLSCREEN]: new r.W0(),
        [s.aI.MINIMIZED]: new r.W0(),
    };
    lastscreenType = void 0;
    updateScreenInterval;
    constructor(e) {
        (this.game = e), this.update(), (this.updateScreenInterval = setInterval(() => this.update(), 1e4));
    }
    update() {
        let e = this.game,
            t = T.Ay.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = E.default.getTrackedGameByPid(e.pid);
                L.error(`ScreenTypeAnalytics: Unknown screen type for ${this.game.name}: ${t}`, {
                    rawGame: this.game,
                    overlayTrackedGame: n,
                });
                return;
            }
            this.counters[t].start(),
                null != this.lastscreenType && this.counters[this.lastscreenType].stop(),
                (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        let e = (e) => this.counters[e].elapsed().asMilliseconds(),
            t = {
                [s.aI.UNKNOWN]: e(s.aI.UNKNOWN),
                [s.aI.WINDOWED]: e(s.aI.WINDOWED),
                [s.aI.MAXIMIZED]: e(s.aI.MAXIMIZED),
                [s.aI.BORDERLESS_FULLSCREEN]: e(s.aI.BORDERLESS_FULLSCREEN),
                [s.aI.FULLSCREEN]: e(s.aI.FULLSCREEN),
                [s.aI.MINIMIZED]: e(s.aI.MINIMIZED),
            },
            n = Object.entries(t).sort((e, t) => {
                let [n, i] = e,
                    [r, a] = t;
                return a - i;
            })[0],
            i = parseInt(n[0], 10),
            r = isNaN(i) ? s.aI.UNKNOWN : i;
        isNaN(i) && L.error(`ScreenTypeAnalytics: Unknown most used screen type: ${n}`, t);
        let a = C.getGameDisplayMode(this.game.name ?? this.game.id);
        C.setGameDisplayMode(this.game.name ?? this.game.id, r);
        let l = {
            screentype_unknown_duration: t[s.aI.UNKNOWN],
            screentype_windowed_duration: t[s.aI.WINDOWED],
            screentype_maximized_duration: t[s.aI.MAXIMIZED],
            screentype_borderless_fullscreen_duration: t[s.aI.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: t[s.aI.FULLSCREEN],
            screentype_minimized_duration: t[s.aI.MINIMIZED],
        };
        return {
            ...l,
            screentype_global_supported_duration:
                l.screentype_windowed_duration +
                l.screentype_maximized_duration +
                l.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: l.screentype_fullscreen_duration,
            screentype_initial: s.aI[this.game.fullscreenType],
            screentype_most_used: s.aI[r],
            screentype_most_used_previous: null == a ? null : s.aI[a],
            screentype_last: s.aI[this.lastscreenType ?? s.aI.UNKNOWN],
            game_display_mode_is_adjustment_supported: T.Ay.GameDisplayModeIsGameSupported(this.game.name),
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
}
class M {
    game;
    static gamesByPid = {};
    static gamesByName = {};
    static get debug() {
        return { gamesByPid: M.gamesByPid, gamesByName: M.gamesByName };
    }
    static desktopMainWindowHasFocus = document.hasFocus();
    uuid = (function () {
        try {
            return crypto.randomUUID();
        } catch (e) {
            return L.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, i.A)();
        }
    })();
    overlayStatus;
    overlayMethod = null;
    overlayMethodStats = null;
    overlayState = null;
    overlayStateRaw = null;
    overlayStateReason = null;
    overlayStateRawReason = null;
    notificationAnalytics = new y();
    widgetAnalytics = new v();
    screenAnalytics;
    uiUnlockedCount = 0;
    uiLockedCount = 0;
    gameFocusChangedCount = 0;
    gameConcurrentGameCount = 0;
    overlayMessageAckCount = 0;
    overlayMessageCreateCount = 0;
    gameTimer = r.W0.startNew();
    gameFocusedTimer = new r.W0();
    unlockedTimer = new r.W0();
    rtcConnectionTimer = new r.W0();
    desktopFocusedTimer = new r.W0();
    desktopFocusChangedCount = 0;
    desktopMessageAckCount = 0;
    desktopMessageCreateCount = 0;
    soundboardShownTimer = new r.W0();
    soundboardShownCount = 0;
    soundboardKeepOpenCount = 0;
    muteToggledCount = 0;
    _successfullyShown = !1;
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    constructor(e) {
        (this.game = e),
            (this.screenAnalytics = new b(e)),
            (this.overlayStatus = (0, u.hw)(e)),
            (this.overlayMethod = this.overlayStatus?.overlayMethod ?? null),
            (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)),
            M.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(),
            z.hasConnection() && this.rtcConnectionTimer.start();
    }
    getQunsName(e) {
        let t = e ?? s.YL.QUNS_UNKNOWN;
        return s.YL[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: i, legacyEnabled: r } = E.default.getPerGameEnabledStatus(t),
            a = {
                legacy_override: !0 === r,
                enabled: i || r,
                quns_mode: this.getQunsName(s.YL.QUNS_UNKNOWN),
                current_method: e,
            };
        if (null != t) {
            let { quns: e } = T.Ay.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            a.quns_mode = this.getQunsName(e);
        }
        if (null == e)
            return { original_method: (null != t ? E.default.getRenderMethod(t.pid) : null) ?? _.Ue.Disabled, ...a };
        if (null == n) return { original_method: e, ...a };
        let l = e !== n.original_method ? e : void 0;
        return { ...n, any_other_method: l ?? n.any_other_method, ...a };
    }
    static getGameName(e) {
        return e.name ?? e.id ?? null;
    }
    static ignoreGame(e) {
        return e.isLauncher ?? !1;
    }
    static create(e) {
        let t = M.getGameName(e);
        if (M.ignoreGame(e) || null == t) return null;
        let n = new M({ ...e });
        return (
            (n.gameConcurrentGameCount = Object.values(M.gamesByPid).length),
            (M.gamesByPid[e.pid] = n),
            (M.gamesByName[t] = n),
            n
        );
    }
    static getByName(e) {
        if (null == e) return null;
        let t = u.Ay.getRunningGames().find((t) => {
            let n = (0, u.Zh)(t);
            return n.name?.toLowerCase() === e.toLowerCase();
        })?.pid;
        return null != t ? M.gamesByPid[t] : null;
    }
    static getByPid(e) {
        return M.gamesByPid[e];
    }
    static async destroy(e) {
        let t = M.getGameName(e);
        if (M.ignoreGame(e) || null == t) return;
        let n = M.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (p.default.track(O.HAw.OVERLAY_USAGE_STATS, t.usage), t.notifications))
                p.default.track(O.HAw.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            L.verbose(`OVERLAY_USAGE_STATS: ${e.name}`, t), delete M.gamesByPid[e.pid];
        }
        delete M.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            L.verbose("setOverlayMethod", {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats,
            });
    }
    setOverlayState(e, t, n) {
        n || ((this.overlayState = e), (this.overlayStateReason = t)),
            (this.overlayStateRaw = e),
            (this.overlayStateRawReason = t);
    }
    getSettingMethod() {
        return null == this.overlayMethod ? _.Ue[_.Ue.Disabled] : _.Ue[this.overlayMethod];
    }
    async getAnalytics() {
        let e = this.overlayMethod ?? _.Ue.Disabled,
            t = {
                setting_is_enabled: I.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: f.default.getDisplayUserMode(),
                setting_display_name: f.default.getDisplayNameMode(),
                setting_avatar_size: f.default.getAvatarSizeMode(),
                setting_notification_position: f.default.getNotificationPositionMode(),
                setting_chat_notification: A.A.isNotificationDisabled(R.KS.TextChat) ? "DISABLED" : "ENABLED",
            },
            n = (0, u.hw)(this.game),
            i = (0, c.wH)(this.game),
            r = this.overlayMethodStats ?? this.buildOverlayMethodStats(e, this.game),
            a = null != r.any_other_method ? _.Ue[r.any_other_method] : null,
            s = null != r.current_method ? _.Ue[r.current_method] : null,
            l = n.enabledLegacy || n.enabledOOP;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: 7,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...t,
                overlay_status_game_enabled: l,
                overlay_status_game_source: n.source,
                game_name: i.gameName ?? null,
                game_id: i.gameId ?? null,
                game_exe: i.exe ?? null,
                game_elevated: this.game.elevated,
                game_is_launcher: this.game.isLauncher ?? !1,
                game_duration: this.gameTimer.elapsed().asMilliseconds(),
                game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
                game_focused_change_count: this.gameFocusChangedCount,
                game_concurrent_game_count: this.gameConcurrentGameCount,
                ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
                ui_unlocked_count: this.uiUnlockedCount,
                ui_locked_count: this.uiLockedCount,
                soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
                soundboard_shown_count: this.soundboardShownCount,
                soundboard_keep_open_count: this.soundboardKeepOpenCount,
                hardware_display_count: (await o.A?.hardware?.getDisplayCount?.()) ?? null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown,
                ...r,
                original_method: _.Ue[r.original_method],
                any_other_method: a,
                current_method: s,
                last_overlay_state: this.overlayState,
                last_overlay_state_raw: this.overlayStateRaw,
                last_overlay_state_reason: this.overlayStateReason,
                last_overlay_state_raw_reason: this.overlayStateRawReason,
            },
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid),
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(M.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(M.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(M.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== M.desktopMainWindowHasFocus) {
            for (let t of Object.values(M.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            M.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(M.gamesByPid))
            switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(M.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
}
function P() {
    let e = I.default.getFocusedPID();
    if (null == e || e === m.UNSET_PID || !E.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = E.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.gameId || t.state !== _.AR.OVERLAY_RENDERING
        ? null
        : { gameName: t.gameName, gameId: t.gameId };
}
function U(e) {
    for (let t of (L.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != M.getByPid(t.pid)) {
            L.verbose("handleRunningGamesChange added", t, "already tracked");
            continue;
        }
        M.incrementConcurrentGameCount();
        let e = M.create(t);
        L.verbose("handleRunningGamesChange added", t, e);
    }
    for (let t of e.removed) M.destroy(t), L.verbose("handleRunningGamesChange removed", t);
}
function w(e) {
    if (e.pid === m.DEV_PID) return;
    let t = M.getByPid(e.pid);
    (L.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t)
        ? L.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, M.debug)
        : t.setLocked(e.locked);
}
function G(e) {
    if ((L.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    null == t
        ? L.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, M.debug)
        : t.notificationAnalytics.increment(e.notificationType, e.action);
}
function x(e) {
    if ((L.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    if (null == t) return void L.error("OVERLAY_WIDGET_CHANGED: Game not found", e, M.debug);
    let n = t.widgetAnalytics.getByWidget(e.widgetType);
    null != n &&
        (n.initialized || ((n.initialized = !0), (n.pinned = e.pinned)),
        n.pinned !== e.pinned && ++n.pinnedToggledCount,
        (n.pinned = e.pinned),
        n.visibleDuration.toggle(e.visible));
}
function k(e) {
    if (
        (L.verbose("OVERLAY_FOCUSED", e),
        M.gameSetAllUnfocused(),
        null == e.pid || e.pid === m.DEV_PID || e.pid === m.UNSET_PID)
    )
        return;
    let t = M.getByPid(e.pid);
    null == t ? L.error("OVERLAY_FOCUSED: Game not found", e, M.debug) : t.gameSetFocused(!0);
}
function F(e) {
    if ((L.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === m.DEV_PID)) return;
    let t = M.getByPid(e.pid);
    null == t
        ? L.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, M.debug)
        : t.setSoundboardShown(e.enabled, !!e.enabled && (e.keepOpen ?? !1));
}
function V(e) {
    if ((L.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    if (null == t) return void L.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, M.debug);
    switch (e.eventType) {
        case "ack":
            ++t.overlayMessageAckCount;
            break;
        case "create":
            ++t.overlayMessageCreateCount;
    }
}
function B(e) {
    L.verbose("MESSAGE_ACKED", e);
    let t = P();
    null == t
        ? M.desktopMessageEvent("ack")
        : a.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "ack",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function H(e) {
    if (e.message.state !== O.cmJ.SENDING) return;
    L.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = P();
    null == t
        ? M.desktopMessageEvent("created")
        : a.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "create",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function j(e) {
    let t = (0, S.A)();
    null != t &&
        t !== m.DEV_PID &&
        t !== m.UNSET_PID &&
        (L.verbose("AUDIO_TOGGLE_SELF_MUTE", e), M.handleMuteToggled());
}
function W(e) {
    L.verbose("WINDOW_FOCUS", e);
    let t = (0, g.Xg)();
    e.windowId !== t
        ? L.verbose("WINDOW_FOCUS: Not main window", { action: e, mainWindowId: t })
        : M.desktopSetFocused(e.focused);
}
function Y(e) {
    if (e.pid === m.DEV_PID || e.pid === m.UNSET_PID) return;
    let t = M.getByPid(e.pid);
    null == t ? L.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, M.debug) : (t.successfullyShown = !0);
}
function K(e) {
    let t = M.getByPid(e.pid);
    null == t
        ? L.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, M.debug)
        : e.overlayMethod !== _.Ue.Disabled &&
          (L.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod));
}
function $(e) {
    let t = M.getByPid(e.pid);
    if (null == t) return void L.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, M.debug);
    if (e.newState !== _.AR.OVERLAY_TEARING_DOWN) {
        if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, !0);
        t.setOverlayState(e.newState, e.reason, !1);
    }
}
class z {
    static connections = new Set();
    static previousHasConnection = !1;
    static hasConnection() {
        return z.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        let t = (e.channelId ?? "unknown") + e.context;
        switch (e.state) {
            case O.S7L.RTC_CONNECTED:
                z.connections.add(t);
                break;
            case O.S7L.DISCONNECTED:
                z.connections.delete(t);
        }
        let n = z.hasConnection();
        z.previousHasConnection !== n && (M.toggleRtcConnection(n), (z.previousHasConnection = n));
    }
}
class q {
    static handleMessageAcked(e) {
        L.verbose("MESSAGE_ACKED", e);
        let t = h.A.getGame();
        null == t
            ? L.error("Game not found.")
            : a.h.dispatch({ type: "OVERLAY_MESSAGE_EVENT_ACTION", eventType: "ack", gameName: t.name, gameId: t.id });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== O.cmJ.SENDING) return;
        L.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = h.A.getGame();
        null == t
            ? L.error("Game not found.")
            : a.h.dispatch({
                  type: "OVERLAY_MESSAGE_EVENT_ACTION",
                  eventType: "create",
                  gameName: t.name,
                  gameId: t.id,
              });
    }
}
class Z extends l.A {
    actions = __OVERLAY__
        ? { MESSAGE_ACKED: q.handleMessageAcked, MESSAGE_CREATE: q.handleMessageCreate }
        : {
              OVERLAY_FOCUSED: k,
              OVERLAY_NOTIFICATION_EVENT: G,
              OVERLAY_SET_INPUT_LOCKED: w,
              OVERLAY_WIDGET_CHANGED: x,
              OVERLAY_MESSAGE_EVENT_ACTION: V,
              RUNNING_GAMES_CHANGE: U,
              SOUNDBOARD_SET_OVERLAY_ENABLED: F,
              MESSAGE_ACKED: B,
              MESSAGE_CREATE: H,
              WINDOW_FOCUS: W,
              RTC_CONNECTION_STATE: z.handleRTCConnectionState,
              AUDIO_TOGGLE_SELF_MUTE: j,
              OVERLAY_SUCCESSFULLY_SHOWN: Y,
              OVERLAY_UPDATE_OVERLAY_METHOD: K,
              OVERLAY_TRACK_STATE_CHANGED: $,
          };
}
let X = new Z();
