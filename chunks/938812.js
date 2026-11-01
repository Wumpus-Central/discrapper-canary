n.d(t, { Bx: () => eN, Ay: () => eC, Gm: () => eT, Q_: () => ep, zF: () => em, zR: () => eS });
var i,
    r = n(192308),
    a = n(793322),
    s = n(174768),
    l = n(186111),
    o = n(309010),
    d = n(967198),
    c = n(114129),
    u = n(442325),
    _ = n(323073),
    E = n(288254),
    A = n(734057),
    h = n(406704),
    f = n(747926),
    I = n(774603),
    p = n(176522),
    T = n(435558),
    m = n.n(T),
    g = n(858899),
    S = n(147036),
    N = n(957565),
    C = n(105292);
let O = (0, T.throttle)(() => (0, g.P0)({ text: C.intl.string(C.t["+5kSoW"]), variant: "success" }), 3e3, {
    leading: !0,
    trailing: !1,
});
var R = n(265422),
    L = n(625494),
    y = n(652215),
    D = n(630685),
    v = n(272613),
    b = n(398884),
    P = n(819638),
    M = n(723702),
    U = n(763827),
    w = n(64460),
    G = n(92960),
    x = n(477672),
    k = n(314519),
    F = n(837057),
    B = n(310419),
    V = n(488995),
    H = n(675704),
    j = n(74477),
    W = n(680671);
let Y = (0, M.isMac)() || (0, M.isMacWeb)();
function K() {
    return (0, W.t)() && j.A.getConfig({ location: j.R }).enabled;
}
var $ = n(806964),
    z = n(552049),
    X = n(877991),
    q = n(332779),
    Z = n(274794),
    Q = n(928531),
    J = n(251494),
    ee = n(82038),
    et = n(14214),
    en = n(151199),
    ei = n(975571),
    er = n(28647),
    ea = n(851109);
let es = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: m().debounce(
        () => {
            if (L._.hasSubscribers(y.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (L._.dispatch(y.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var el = n(478437),
    eo = n(367513),
    ed = n(604681),
    ec = n(198052),
    eu = n(47675),
    e_ = n(999291),
    eE = n(358047),
    eA = n(467691),
    eh = n(674272),
    ef = n(431804),
    eI = n(406975),
    ep =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eT(e) {
    switch (e) {
        case "NAVIGATION":
            return C.intl.string(C.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return C.intl.string(C.t.bI8F5u);
        case "CHAT":
            return C.intl.string(C.t.hDhbb3);
        case "MISCELLANEOUS":
            return C.intl.string(C.t.cBdwqs);
        case "MESSAGE":
            return C.intl.string(C.t["5fpmX9"]);
        case "DND":
            return C.intl.string(C.t["69j6+4"]);
    }
}
function em(e) {
    switch (e) {
        case "MESSAGE":
            return C.intl.string(C.t.iepGDn);
        case "DND":
            return C.intl.string(C.t.LBsB0a);
        default:
            return;
    }
}
function eg() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eS[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eS = {
    [y.IWg.SERVER_NEXT]: Q.yx,
    [y.IWg.SERVER_PREV]: Q.yv,
    [y.IWg.CHANNEL_NEXT]: p.kF,
    [y.IWg.CHANNEL_PREV]: p.Oc,
    [y.IWg.NAVIGATE_BACK]: p.GY,
    [y.IWg.NAVIGATE_FORWARD]: p.M$,
    [y.IWg.UNREAD_NEXT]: eA.mH,
    [y.IWg.UNREAD_PREV]: eA.US,
    [y.IWg.MENTION_CHANNEL_NEXT]: eA.BD,
    [y.IWg.MENTION_CHANNEL_PREV]: eA.X8,
    [y.IWg.TOGGLE_PREVIOUS_GUILD]: p.Fv,
    [y.IWg.JUMP_TO_GUILD]: w.J,
    [y.IWg.SUBMIT]: J.X,
    [y.IWg.TEXTAREA_FOCUS]: ee.c,
    [y.IWg.MARK_CHANNEL_READ]: G.Df,
    [y.IWg.MARK_SERVER_READ]: x.P,
    [y.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (L._.dispatch(y.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [y.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(l.A.getLayers().length > 0 || (0, r.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, ea.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = A.A.getChannel(t);
                window.location.pathname.startsWith(y.BVt.CHANNEL(y.gNP)) && null != n
                    ? (0, R.i)(n.guild_id, t)
                    : (0, R.a)(y.BVt.CHANNEL(y.gNP, t ?? void 0));
            })(),
            L._.dispatch(y.jej.TOGGLE_INBOX),
            !1),
    },
    [y.IWg.MARK_TOP_INBOX_CHANNEL_READ]: es,
    [y.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = A.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && ec.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === el.r.GUILD_VOICE || i))
                return (eo.A.updateChatOpen(t, !ec.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === el.r.DM) {
                let e = eE.Ay.getSection(t, n?.isDM()),
                    i = (0, e_.AP)(n.getRecipientId()),
                    r = e === y.YvQ.PROFILE;
                return (
                    (0, eu.am)({ displayProfile: i, isProfileOpen: !r }), ed.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (ed.A.toggleMembersSection(), !1);
        },
    },
    [y.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(ei.C), !1),
    },
    [y.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eh.A)({ source: ef.y.KEYBIND }), !1),
    },
    [y.IWg.TOGGLE_MUTE]: et.VT,
    [y.IWg.TOGGLE_DEAFEN]: et.rR,
    [y.IWg.TOGGLE_CATEGORY_COLLAPSED]: en.y,
    [y.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (L._.dispatch(y.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [y.IWg.SCROLL_UP]: z.U5,
    [y.IWg.SCROLL_DOWN]: z.fz,
    [y.IWg.QUICKSWITCHER_SHOW]: H.R,
    [y.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, R.i)(y.ME), L._.safeDispatch(y.jej.TOGGLE_DM_CREATE), !1),
    },
    [y.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = A.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? A.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, _.qR)(t) || (0, E.BV)(t)) &&
                (!!(0, h.D1)(t) || !!(0, h.vy)(t)) &&
                ((0, f.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [y.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (l.A.hasLayers() || (0, a.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [y.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || l.A.hasLayers() || (0, r.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [y.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [y.IWg.SEARCH_EMOJIS]: X.L,
    [y.IWg.SEARCH_GIFS]: q.T,
    [y.IWg.SEARCH_STICKERS]: Z.w,
    [y.IWg.TOGGLE_HOTKEYS]: er.z,
    [y.IWg.JUMP_TO_FIRST_UNREAD]: k.s,
    [y.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            if ((0, r.hasModalOpen)(P.fc))
                v.A.updateCreateGuildModal({ slide: P.oS.JOIN_GUILD, location: "Keyboard Shortcut" });
            else {
                let e = !(0, b.Sn)() && (0, D.i)("guild_list_add_server");
                v.A.openCreateGuildModal({ location: "Keyboard Shortcut", joinFirst: e });
            }
        },
    },
    [y.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = A.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || L._.dispatch(y.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [y.IWg.RECORD_VOICE_MESSAGE]: {
        binds: Y ? ["ctrl+shift+d"] : ["alt+r"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (
                !(e.repeat || l.A.hasLayers() || (0, r.hasAnyModalOpen)()) &&
                L._.hasSubscribers(y.jej.RECORD_VOICE_MESSAGE)
            )
                return (L._.dispatchToLastSubscribed(y.jej.RECORD_VOICE_MESSAGE), !1);
        },
    },
    [y.IWg.RETURN_TO_AUDIO_CHANNEL]: $.u,
    [y.IWg.CALL_ACCEPT]: I.Yo,
    [y.IWg.CALL_START]: I.OX,
    [y.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (l.A.hasLayers() || (0, r.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (L._.dispatch(y.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [y.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = U.A.getGuildId(),
                n = U.A.getChannelId();
            return (null != n && (0, R.i)(t ?? y.ME, n), !1);
        },
    },
    [y.IWg.ZOOM_IN]: eI.Ur,
    [y.IWg.ZOOM_OUT]: eI.hU,
    [y.IWg.ZOOM_RESET]: eI.O$,
    [y.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, F.transitionToGlobalDiscovery)({
                tab: V.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: B.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [y.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, M.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [y.IWg.OPEN_CONTEXT_MENU]: {
        binds: ["shift+f10"],
        comboKeysBindGlobal: !0,
        action() {
            let e = document.activeElement;
            return (
                null != e &&
                e !== document.body &&
                (e.dispatchEvent(
                    new MouseEvent("contextmenu", {
                        bubbles: !0,
                        cancelable: !0,
                        view: window,
                        clientX: 0,
                        clientY: 0,
                    }),
                ),
                !1)
            );
        },
    },
    [y.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = A.A.getChannel(e);
            if (null == t) return !1;
            let n = A.A.getChannel(t.parent_id),
                i = (0, S.af)(t, n);
            return ((0, N.C)(i, O), !1);
        },
    },
};
function eN() {
    return [
        {
            description: C.intl.string(C.t.bx4Uyz),
            binds: eg(y.IWg.SERVER_PREV, y.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t["+Wem6h"]),
            binds: eg(y.IWg.CHANNEL_PREV, y.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t["+2fcdz"]),
            binds: eg(y.IWg.NAVIGATE_BACK, y.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t.eVmj1H),
            binds: eg(y.IWg.UNREAD_PREV, y.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: C.intl.string(C.t.EcqS7Y),
            binds: eg(y.IWg.MENTION_CHANNEL_PREV, y.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: C.intl.string(C.t["4I3pwW"]), binds: eg(y.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: C.intl.string(C.t.Bqss72), binds: eg(y.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: C.intl.string(C.t.yYsRlD), binds: eg(y.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: C.intl.string(C.t.O7ouXO), binds: eg(y.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: C.intl.string(C.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: C.intl.string(C.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: C.intl.string(C.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: C.intl.string(C.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: C.intl.string(C.t.UaXAPx), binds: eg(y.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: C.intl.string(C.t["5X9vFj"]), binds: eg(y.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: C.intl.string(C.t.wxQFsl), binds: eg(y.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: C.intl.string(C.t["ZxGD+G"]), binds: eg(y.IWg.CREATE_THREAD), group: "CHAT" },
        { description: C.intl.string(C.t["C+XV7f"]), binds: eg(y.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: C.intl.string(C.t["Q+YV/T"]), binds: eg(y.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: C.intl.string(C.t["YEjV+W"]), binds: eg(y.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: C.intl.string(C.t.AcBI9S), binds: eg(y.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: C.intl.string(C.t.JoxNnl), binds: eg(y.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: C.intl.string(C.t["3PHxo8"]), binds: eg(y.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: C.intl.string(C.t.YFl7eb), binds: eg(y.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: C.intl.string(C.t.L3RYYJ), binds: eg(y.IWg.SCROLL_UP, y.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: C.intl.string(C.t["3HAurM"]), binds: eg(y.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: C.intl.string(C.t.rrYBEu), binds: eg(y.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: C.intl.string(C.t.Wknt9M), binds: eg(y.IWg.RECORD_VOICE_MESSAGE), group: "CHAT", predicate: K },
        { description: C.intl.string(C.t.sUJlPL), binds: eg(y.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: C.intl.string(C.t["A+Fv0R"]), binds: eg(y.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: C.intl.string(C.t.tL6eVW), binds: eg(y.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t["QXe/7T"]), binds: eg(y.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.d6UIii), binds: eg(y.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.IcEW06), binds: eg(y.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.WN2dsS), binds: eg(y.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: C.intl.string(C.t.rUK0kk), binds: eg(y.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: C.intl.string(C.t.vkGkSn), binds: eg(y.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t.FJvZ87), binds: eg(y.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t["FiWl/T"]), binds: eg(y.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: C.intl.string(C.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: C.intl.string(C.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: C.intl.string(C.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: C.intl.string(C.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: C.intl.string(C.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: C.intl.string(C.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: C.intl.string(C.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: C.intl.string(C.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: C.intl.string(C.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: C.intl.string(C.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: C.intl.string(C.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: C.intl.string(C.t.z9c6mt), binds: eg(y.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eC = eS;
