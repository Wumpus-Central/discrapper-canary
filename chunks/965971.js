"use strict";
n.d(t, { A: () => Z });
var i = n(835245),
    r = n(499979),
    s = n(228366),
    a = n(56562),
    o = n(439372),
    l = n(77729),
    u = n(626584),
    c = n(973522),
    d = n(952818),
    _ = n(41984),
    h = n(296027),
    f = n(592598),
    p = n(157257),
    E = n(773371),
    m = n(184809),
    g = n(174459),
    A = n(19575),
    I = n(9302),
    T = n(365971),
    S = n(427603),
    y = n(506774);
class N {
    static _loaded = null;
    static storageKey = "GameDisplayModeStorage";
    games;
    constructor(e) {
        this.games = e;
    }
    save() {
        let e = { games: this.games };
        y.w.set(N.storageKey, e);
    }
    static load() {
        return null == N._loaded && (N._loaded = N.loadInternal()), N._loaded;
    }
    static loadInternal() {
        let e = y.w.get(N.storageKey);
        if (null != e) return new N(e.games ?? {});
        let t = new N({});
        return t.save(), t;
    }
    static getGameSettings(e) {
        return null == e ? null : (N.load().games[e] ?? null);
    }
    static updateGameSettings(e, t) {
        if (null == e) return;
        let n = N.load(),
            i = n.games[e];
        if (null == i) {
            (n.games[e] = { screen: a.aI.UNKNOWN, date: Date.now(), ...t }), n.save();
            return;
        }
        "boolean" == typeof t.disabled && (i.disabled = t.disabled),
            "number" == typeof t.screen && (i.screen = t.screen),
            (i.date = Date.now()),
            n.save();
    }
    static isPromptingForGameDisable(e) {
        return N.getGameSettings(e)?.disabled ?? !1;
    }
    static setPromptingForGameDisable(e, t) {
        N.updateGameSettings(e, { disabled: t });
    }
    static getGameDisplayMode(e) {
        return null == e ? null : (N.getGameSettings(e)?.screen ?? null);
    }
    static setGameDisplayMode(e, t) {
        N.updateGameSettings(e, { screen: t });
    }
    static clearOldGameSettings() {
        let e = N.load();
        if (null == e.games) return;
        let t = Date.now() - 31536e6;
        for (let n in e.games) e.games[n].date < t && delete e.games[n];
        e.save();
    }
    static reset() {
        let e = N.load();
        (e.games = {}), e.save();
    }
    static isTestMode() {
        return !!window.__GAME_DISPLAY_MODE_TEST_MODE__;
    }
    static isVerbose() {
        return !!window.__GAME_DISPLAY_MODE_DEBUG__;
    }
}
setTimeout(() => N.clearOldGameSettings(), 6e4);
var v = n(652215),
    C = n(672396);
let R = new u.A("OverlayUsageStatsManager");
R.verbose = () => {};
class O {
    actions = { [C.uj.Viewed]: 0, [C.uj.Clicked]: 0 };
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[C.uj.Viewed],
            i = this.actions[C.uj.Clicked];
        return 0 === n && 0 === i ? null : { event_uuid: t, notification_type: e, viewed_count: n, clicked_count: i };
    }
}
class b {
    actionCounters = { [C.uj.Viewed]: 0, [C.uj.Clicked]: 0 };
    groupCounters = { [C.uj.Viewed]: b.makeEmptyGroupAnalytics(), [C.uj.Clicked]: b.makeEmptyGroupAnalytics() };
    counters = b.makeCounters();
    static makeEmptyGroupAnalytics() {
        return {
            [C.BR.Nudge]: 0,
            [C.BR.TextChat]: 0,
            [C.BR.VoiceCall]: 0,
            [C.BR.Activity]: 0,
            [C.BR.Clips]: 0,
            [C.BR.Other]: 0,
        };
    }
    static makeCounters() {
        let e = {},
            t = Object.values(C.KS);
        for (let n of t) e[n] = new O();
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e;
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void R.error(`NotificationCounter: Unknown notification action: ${t}`);
        let i = (0, C.Vo)(e);
        if (!(i in n)) return void R.error(`NotificationCounter: Unknown notification action: ${e}`);
        ++n[i], ++this.actionCounters[t];
        let r = this.counters[e];
        null == r ? R.error(`NotificationCounter: Unknown notification type: ${e}`) : r.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[C.uj.Viewed],
            t = this.groupCounters[C.uj.Clicked];
        return {
            notices_viewed: this.actionCounters[C.uj.Viewed],
            notices_clicked: this.actionCounters[C.uj.Clicked],
            notice_nudge_viewed: e[C.BR.Nudge],
            notice_text_chat_viewed: e[C.BR.TextChat],
            notice_voice_call_viewed: e[C.BR.VoiceCall],
            notice_activity_viewed: e[C.BR.Activity],
            notice_clips_viewed: e[C.BR.Clips],
            notice_other_viewed: e[C.BR.Other],
            notice_nudge_clicked: t[C.BR.Nudge],
            notice_text_chat_clicked: t[C.BR.TextChat],
            notice_voice_call_clicked: t[C.BR.VoiceCall],
            notice_activity_clicked: t[C.BR.Activity],
            notice_clips_clicked: t[C.BR.Clips],
            notice_other_clicked: t[C.BR.Other],
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
class D {
    types = { 0: D.makeEmptyAnalytics(), 1: D.makeEmptyAnalytics() };
    static makeEmptyAnalytics() {
        return { initialized: !1, pinnedToggledCount: 0, visibleDuration: new r.W0(), pinned: !1 };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case v.uss.VOICE:
                return this.getByType(0);
            case v.uss.TEXT:
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
class L {
    game;
    counters = {
        [a.aI.UNKNOWN]: new r.W0(),
        [a.aI.WINDOWED]: new r.W0(),
        [a.aI.MAXIMIZED]: new r.W0(),
        [a.aI.BORDERLESS_FULLSCREEN]: new r.W0(),
        [a.aI.FULLSCREEN]: new r.W0(),
        [a.aI.MINIMIZED]: new r.W0(),
    };
    lastscreenType = void 0;
    updateScreenInterval;
    constructor(e) {
        (this.game = e), this.update(), (this.updateScreenInterval = setInterval(() => this.update(), 1e4));
    }
    update() {
        let e = this.game,
            t = A.Ay.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = h.default.getTrackedGameByPid(e.pid);
                R.error(`ScreenTypeAnalytics: Unknown screen type for ${this.game.name}: ${t}`, {
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
                [a.aI.UNKNOWN]: e(a.aI.UNKNOWN),
                [a.aI.WINDOWED]: e(a.aI.WINDOWED),
                [a.aI.MAXIMIZED]: e(a.aI.MAXIMIZED),
                [a.aI.BORDERLESS_FULLSCREEN]: e(a.aI.BORDERLESS_FULLSCREEN),
                [a.aI.FULLSCREEN]: e(a.aI.FULLSCREEN),
                [a.aI.MINIMIZED]: e(a.aI.MINIMIZED),
            },
            n = Object.entries(t).sort((e, t) => {
                let [n, i] = e,
                    [r, s] = t;
                return s - i;
            })[0],
            i = parseInt(n[0], 10),
            r = isNaN(i) ? a.aI.UNKNOWN : i;
        isNaN(i) && R.error(`ScreenTypeAnalytics: Unknown most used screen type: ${n}`, t);
        let s = N.getGameDisplayMode(this.game.name ?? this.game.id);
        N.setGameDisplayMode(this.game.name ?? this.game.id, r);
        let o = {
            screentype_unknown_duration: t[a.aI.UNKNOWN],
            screentype_windowed_duration: t[a.aI.WINDOWED],
            screentype_maximized_duration: t[a.aI.MAXIMIZED],
            screentype_borderless_fullscreen_duration: t[a.aI.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: t[a.aI.FULLSCREEN],
            screentype_minimized_duration: t[a.aI.MINIMIZED],
        };
        return {
            ...o,
            screentype_global_supported_duration:
                o.screentype_windowed_duration +
                o.screentype_maximized_duration +
                o.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: o.screentype_fullscreen_duration,
            screentype_initial: a.aI[this.game.fullscreenType],
            screentype_most_used: a.aI[r],
            screentype_most_used_previous: null == s ? null : a.aI[s],
            screentype_last: a.aI[this.lastscreenType ?? a.aI.UNKNOWN],
            game_display_mode_is_adjustment_supported: A.Ay.GameDisplayModeIsGameSupported(this.game.name),
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
}
class w {
    game;
    static gamesByPid = {};
    static gamesByName = {};
    static get debug() {
        return { gamesByPid: w.gamesByPid, gamesByName: w.gamesByName };
    }
    static desktopMainWindowHasFocus = document.hasFocus();
    uuid = (function () {
        try {
            return crypto.randomUUID();
        } catch (e) {
            return R.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, i.A)();
        }
    })();
    overlayStatus;
    overlayMethod = null;
    overlayMethodStats = null;
    overlayState = null;
    overlayStateRaw = null;
    overlayStateReason = null;
    overlayStateRawReason = null;
    notificationAnalytics = new b();
    widgetAnalytics = new D();
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
            (this.screenAnalytics = new L(e)),
            (this.overlayStatus = (0, d.hw)(e)),
            (this.overlayMethod = this.overlayStatus?.overlayMethod ?? null),
            (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)),
            w.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(),
            z.hasConnection() && this.rtcConnectionTimer.start();
    }
    getQunsName(e) {
        let t = e ?? a.YL.QUNS_UNKNOWN;
        return a.YL[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: i, legacyEnabled: r } = h.default.getPerGameEnabledStatus(t),
            s = {
                legacy_override: !0 === r,
                enabled: i || r,
                quns_mode: this.getQunsName(a.YL.QUNS_UNKNOWN),
                current_method: e,
            };
        if (null != t) {
            let { quns: e } = A.Ay.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            s.quns_mode = this.getQunsName(e);
        }
        if (null == e)
            return { original_method: (null != t ? h.default.getRenderMethod(t.pid) : null) ?? _.Ue.Disabled, ...s };
        if (null == n) return { original_method: e, ...s };
        let o = e !== n.original_method ? e : void 0;
        return { ...n, any_other_method: o ?? n.any_other_method, ...s };
    }
    static getGameName(e) {
        return e.name ?? e.id ?? null;
    }
    static ignoreGame(e) {
        return e.isLauncher ?? !1;
    }
    static create(e) {
        let t = w.getGameName(e);
        if (w.ignoreGame(e) || null == t) return null;
        let n = new w({ ...e });
        return (
            (n.gameConcurrentGameCount = Object.values(w.gamesByPid).length),
            (w.gamesByPid[e.pid] = n),
            (w.gamesByName[t] = n),
            n
        );
    }
    static getByName(e) {
        if (null == e) return null;
        let t = d.Ay.getRunningGames().find((t) => {
            let n = (0, d.Zh)(t);
            return n.name?.toLowerCase() === e.toLowerCase();
        })?.pid;
        return null != t ? w.gamesByPid[t] : null;
    }
    static getByPid(e) {
        return w.gamesByPid[e];
    }
    static async destroy(e) {
        let t = w.getGameName(e);
        if (w.ignoreGame(e) || null == t) return;
        let n = w.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (g.default.track(v.HAw.OVERLAY_USAGE_STATS, t.usage), t.notifications))
                g.default.track(v.HAw.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            R.verbose(`OVERLAY_USAGE_STATS: ${e.name}`, t), delete w.gamesByPid[e.pid];
        }
        delete w.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            R.verbose("setOverlayMethod", {
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
                setting_is_enabled: E.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: m.default.getDisplayUserMode(),
                setting_display_name: m.default.getDisplayNameMode(),
                setting_avatar_size: m.default.getAvatarSizeMode(),
                setting_notification_position: m.default.getNotificationPositionMode(),
                setting_chat_notification: f.A.isNotificationDisabled(C.KS.TextChat) ? "DISABLED" : "ENABLED",
            },
            n = (0, d.hw)(this.game),
            i = (0, c.wH)(this.game),
            r = this.overlayMethodStats ?? this.buildOverlayMethodStats(e, this.game),
            s = null != r.any_other_method ? _.Ue[r.any_other_method] : null,
            a = null != r.current_method ? _.Ue[r.current_method] : null,
            o = n.enabledLegacy || n.enabledOOP;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: 7,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...t,
                overlay_status_game_enabled: o,
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
                hardware_display_count: (await l.A?.hardware?.getDisplayCount?.()) ?? null,
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
                any_other_method: s,
                current_method: a,
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
        for (let e of Object.values(w.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(w.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(w.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== w.desktopMainWindowHasFocus) {
            for (let t of Object.values(w.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            w.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(w.gamesByPid))
            switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(w.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
}
function M() {
    let e = E.default.getFocusedPID();
    if (null == e || e === I.UNSET_PID || !h.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = h.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.applicationId || t.state !== _.AR.OVERLAY_RENDERING
        ? null
        : { gameName: t.gameName, gameId: t.applicationId };
}
function P(e) {
    for (let t of (R.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != w.getByPid(t.pid)) {
            R.verbose("handleRunningGamesChange added", t, "already tracked");
            continue;
        }
        w.incrementConcurrentGameCount();
        let e = w.create(t);
        R.verbose("handleRunningGamesChange added", t, e);
    }
    for (let t of e.removed) w.destroy(t), R.verbose("handleRunningGamesChange removed", t);
}
function x(e) {
    if (e.pid === I.DEV_PID) return;
    let t = w.getByPid(e.pid);
    (R.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t)
        ? R.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, w.debug)
        : t.setLocked(e.locked);
}
function k(e) {
    if ((R.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId)) return;
    let t = w.getByName(e.gameName ?? e.gameId);
    null == t
        ? R.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, w.debug)
        : t.notificationAnalytics.increment(e.notificationType, e.action);
}
function U(e) {
    if ((R.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId)) return;
    let t = w.getByName(e.gameName ?? e.gameId);
    if (null == t) return void R.error("OVERLAY_WIDGET_CHANGED: Game not found", e, w.debug);
    let n = t.widgetAnalytics.getByWidget(e.widgetType);
    null != n &&
        (n.initialized || ((n.initialized = !0), (n.pinned = e.pinned)),
        n.pinned !== e.pinned && ++n.pinnedToggledCount,
        (n.pinned = e.pinned),
        n.visibleDuration.toggle(e.visible));
}
function G(e) {
    if (
        (R.verbose("OVERLAY_FOCUSED", e),
        w.gameSetAllUnfocused(),
        null == e.pid || e.pid === I.DEV_PID || e.pid === I.UNSET_PID)
    )
        return;
    let t = w.getByPid(e.pid);
    null == t ? R.error("OVERLAY_FOCUSED: Game not found", e, w.debug) : t.gameSetFocused(!0);
}
function F(e) {
    if ((R.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === I.DEV_PID)) return;
    let t = w.getByPid(e.pid);
    null == t
        ? R.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, w.debug)
        : t.setSoundboardShown(e.enabled, !!e.enabled && (e.keepOpen ?? !1));
}
function V(e) {
    if ((R.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId)) return;
    let t = w.getByName(e.gameName ?? e.gameId);
    if (null == t) return void R.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, w.debug);
    switch (e.eventType) {
        case "ack":
            ++t.overlayMessageAckCount;
            break;
        case "create":
            ++t.overlayMessageCreateCount;
    }
}
function B(e) {
    R.verbose("MESSAGE_ACKED", e);
    let t = M();
    null == t
        ? w.desktopMessageEvent("ack")
        : s.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "ack",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function H(e) {
    if (e.message.state !== v.cmJ.SENDING) return;
    R.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = M();
    null == t
        ? w.desktopMessageEvent("created")
        : s.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "create",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function j(e) {
    let t = (0, S.A)();
    null != t &&
        t !== I.DEV_PID &&
        t !== I.UNSET_PID &&
        (R.verbose("AUDIO_TOGGLE_SELF_MUTE", e), w.handleMuteToggled());
}
function Y(e) {
    R.verbose("WINDOW_FOCUS", e);
    let t = (0, T.Xg)();
    e.windowId !== t
        ? R.verbose("WINDOW_FOCUS: Not main window", { action: e, mainWindowId: t })
        : w.desktopSetFocused(e.focused);
}
function W(e) {
    if (e.pid === I.DEV_PID || e.pid === I.UNSET_PID) return;
    let t = w.getByPid(e.pid);
    null == t ? R.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, w.debug) : (t.successfullyShown = !0);
}
function K(e) {
    let t = w.getByPid(e.pid);
    null == t
        ? R.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, w.debug)
        : e.overlayMethod !== _.Ue.Disabled &&
          (R.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod));
}
function $(e) {
    let t = w.getByPid(e.pid);
    if (null == t) return void R.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, w.debug);
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
            case v.S7L.RTC_CONNECTED:
                z.connections.add(t);
                break;
            case v.S7L.DISCONNECTED:
                z.connections.delete(t);
        }
        let n = z.hasConnection();
        z.previousHasConnection !== n && (w.toggleRtcConnection(n), (z.previousHasConnection = n));
    }
}
class q {
    static handleMessageAcked(e) {
        R.verbose("MESSAGE_ACKED", e);
        let t = p.A.getGame();
        null == t
            ? R.error("Game not found.")
            : s.h.dispatch({ type: "OVERLAY_MESSAGE_EVENT_ACTION", eventType: "ack", gameName: t.name, gameId: t.id });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== v.cmJ.SENDING) return;
        R.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = p.A.getGame();
        null == t
            ? R.error("Game not found.")
            : s.h.dispatch({
                  type: "OVERLAY_MESSAGE_EVENT_ACTION",
                  eventType: "create",
                  gameName: t.name,
                  gameId: t.id,
              });
    }
}
class X extends o.A {
    actions = __OVERLAY__
        ? { MESSAGE_ACKED: q.handleMessageAcked, MESSAGE_CREATE: q.handleMessageCreate }
        : {
              OVERLAY_FOCUSED: G,
              OVERLAY_NOTIFICATION_EVENT: k,
              OVERLAY_SET_INPUT_LOCKED: x,
              OVERLAY_WIDGET_CHANGED: U,
              OVERLAY_MESSAGE_EVENT_ACTION: V,
              RUNNING_GAMES_CHANGE: P,
              SOUNDBOARD_SET_OVERLAY_ENABLED: F,
              MESSAGE_ACKED: B,
              MESSAGE_CREATE: H,
              WINDOW_FOCUS: Y,
              RTC_CONNECTION_STATE: z.handleRTCConnectionState,
              AUDIO_TOGGLE_SELF_MUTE: j,
              OVERLAY_SUCCESSFULLY_SHOWN: W,
              OVERLAY_UPDATE_OVERLAY_METHOD: K,
              OVERLAY_TRACK_STATE_CHANGED: $,
          };
}
let Z = new X();
