n.d(t, { Bx: () => eN, Ay: () => eS, Gm: () => eg, Q_: () => e_, zF: () => eT, zR: () => ep });
var i,
    l = n(192308),
    r = n(793322),
    s = n(174768),
    a = n(186111),
    o = n(309010),
    d = n(967198),
    c = n(114129),
    u = n(442325),
    A = n(323073),
    E = n(288254),
    h = n(734057),
    C = n(406704),
    _ = n(747926),
    g = n(774603),
    T = n(176522),
    I = n(435558),
    p = n.n(I),
    N = n(858899),
    S = n(147036),
    f = n(957565),
    O = n(105292);
let L = (0, I.throttle)(() => (0, N.P0)({ text: O.intl.string(O.t["+5kSoW"]), variant: "success" }), 3e3, {
    leading: !0,
    trailing: !1,
});
var m = n(265422),
    b = n(625494),
    R = n(652215),
    v = n(272613),
    U = n(819638),
    D = n(723702),
    y = n(763827),
    G = n(64460),
    M = n(92960),
    P = n(477672),
    x = n(314519),
    V = n(837057),
    j = n(310419),
    w = n(488995),
    H = n(675704),
    k = n(74477),
    B = n(680671);
let F = (0, D.isMac)() || (0, D.isMacWeb)();
function W() {
    return (0, B.t)() && k.A.getConfig({ location: k.R }).enabled;
}
var K = n(806964),
    Y = n(552049),
    Z = n(877991),
    z = n(332779),
    X = n(274794),
    J = n(928531),
    q = n(251494),
    Q = n(82038),
    $ = n(14214),
    ee = n(151199),
    et = n(975571),
    en = n(28647),
    ei = n(851109);
let el = {
    binds: ["mod+shift+e"],
    comboKeysBindGlobal: !0,
    action: p().debounce(
        () => {
            if (b._.hasSubscribers(R.jej.MARK_TOP_INBOX_CHANNEL_READ))
                return (b._.dispatch(R.jej.MARK_TOP_INBOX_CHANNEL_READ), !1);
        },
        100,
        { leading: !0 },
    ),
};
var er = n(478437),
    es = n(367513),
    ea = n(604681),
    eo = n(198052),
    ed = n(47675),
    ec = n(999291),
    eu = n(358047),
    eA = n(467691),
    eE = n(674272),
    eh = n(431804),
    eC = n(406975),
    e_ =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function eg(e) {
    switch (e) {
        case "NAVIGATION":
            return O.intl.string(O.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return O.intl.string(O.t.bI8F5u);
        case "CHAT":
            return O.intl.string(O.t.hDhbb3);
        case "MISCELLANEOUS":
            return O.intl.string(O.t.cBdwqs);
        case "MESSAGE":
            return O.intl.string(O.t["5fpmX9"]);
        case "DND":
            return O.intl.string(O.t["69j6+4"]);
    }
}
function eT(e) {
    switch (e) {
        case "MESSAGE":
            return O.intl.string(O.t.iepGDn);
        case "DND":
            return O.intl.string(O.t.LBsB0a);
        default:
            return;
    }
}
function eI() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = ep[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let ep = {
    [R.IWg.SERVER_NEXT]: J.yx,
    [R.IWg.SERVER_PREV]: J.yv,
    [R.IWg.CHANNEL_NEXT]: T.kF,
    [R.IWg.CHANNEL_PREV]: T.Oc,
    [R.IWg.NAVIGATE_BACK]: T.GY,
    [R.IWg.NAVIGATE_FORWARD]: T.M$,
    [R.IWg.UNREAD_NEXT]: eA.mH,
    [R.IWg.UNREAD_PREV]: eA.US,
    [R.IWg.MENTION_CHANNEL_NEXT]: eA.BD,
    [R.IWg.MENTION_CHANNEL_PREV]: eA.X8,
    [R.IWg.TOGGLE_PREVIOUS_GUILD]: T.Fv,
    [R.IWg.JUMP_TO_GUILD]: G.J,
    [R.IWg.SUBMIT]: q.X,
    [R.IWg.TEXTAREA_FOCUS]: Q.c,
    [R.IWg.MARK_CHANNEL_READ]: M.Df,
    [R.IWg.MARK_SERVER_READ]: P.P,
    [R.IWg.TOGGLE_CHANNEL_PINS]: {
        binds: ["mod+p"],
        comboKeysBindGlobal: !0,
        action: () => (b._.dispatch(R.jej.TOGGLE_CHANNEL_PINS), !1),
    },
    [R.IWg.TOGGLE_INBOX]: {
        binds: ["mod+i"],
        comboKeysBindGlobal: !0,
        action: () =>
            !(a.A.getLayers().length > 0 || (0, l.hasAnyModalOpen)()) &&
            (!(function () {
                let { notificationCenterVariant: e } = (0, ei.GE)({ location: "TOGGLE_INBOX" });
                if ("sidebar" !== e) return;
                let t = o.Ay.getChannelId(),
                    n = h.A.getChannel(t);
                window.location.pathname.startsWith(R.BVt.CHANNEL(R.gNP)) && null != n
                    ? (0, m.i)(n.guild_id, t)
                    : (0, m.a)(R.BVt.CHANNEL(R.gNP, t ?? void 0));
            })(),
            b._.dispatch(R.jej.TOGGLE_INBOX),
            !1),
    },
    [R.IWg.MARK_TOP_INBOX_CHANNEL_READ]: el,
    [R.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = h.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && eo.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === er.r.GUILD_VOICE || i))
                return (es.A.updateChatOpen(t, !eo.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === er.r.DM) {
                let e = eu.Ay.getSection(t, n?.isDM()),
                    i = (0, ec.AP)(n.getRecipientId()),
                    l = e === R.YvQ.PROFILE;
                return (
                    (0, ed.am)({ displayProfile: i, isProfileOpen: !l }), ea.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (ea.A.toggleMembersSection(), !1);
        },
    },
    [R.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(et.C), !1),
    },
    [R.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eE.A)({ source: eh.y.KEYBIND }), !1),
    },
    [R.IWg.TOGGLE_MUTE]: $.VT,
    [R.IWg.TOGGLE_DEAFEN]: $.rR,
    [R.IWg.TOGGLE_CATEGORY_COLLAPSED]: ee.y,
    [R.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (b._.dispatch(R.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [R.IWg.SCROLL_UP]: Y.U5,
    [R.IWg.SCROLL_DOWN]: Y.fz,
    [R.IWg.QUICKSWITCHER_SHOW]: H.R,
    [R.IWg.CREATE_DM_GROUP]: {
        binds: ["mod+shift+t"],
        comboKeysBindGlobal: !0,
        action: () => (null != d.A.getGuildId() && (0, m.i)(R.ME), b._.safeDispatch(R.jej.TOGGLE_DM_CREATE), !1),
    },
    [R.IWg.CREATE_THREAD]: {
        binds: ["mod+shift+alt+n"],
        comboKeysBindGlobal: !0,
        action() {
            let e,
                t = ((e = h.A.getChannel(o.Ay.getChannelId())), e?.isThread() === !0 ? h.A.getChannel(e.parent_id) : e);
            return (
                !(null == t || t.isForumLikeChannel() || (0, A.qR)(t) || (0, E.BV)(t)) &&
                (!!(0, C.D1)(t) || !!(0, C.vy)(t)) &&
                ((0, _.Tv)(t, void 0, "Keyboard Shortcut"), !1)
            );
        },
    },
    [R.IWg.OPEN_CHANNEL_TAB]: {
        binds: ["mod+t"],
        comboKeysBindGlobal: !0,
        action() {
            if (s.A.isOpen()) return !1;
            if (!u.A.isEnabled()) return (a.A.hasLayers() || (0, r.WU)(), !1);
            let e = o.Ay.getCurrentlySelectedChannelId();
            return null != e && ((0, c.D5)(e, d.A.getGuildId() ?? null), !1);
        },
    },
    [R.IWg.CLOSE_CHANNEL_TAB]: {
        binds: ["mod+w"],
        comboKeysBindGlobal: !0,
        action() {
            if (!u.A.isEnabled() || a.A.hasLayers() || (0, l.hasAnyModalOpen)() || s.A.isOpen()) return;
            let e = u.A.getActiveTab();
            if (null != e && !(u.A.getTabs().length <= 1)) return ((0, c.f5)(e.id), !1);
        },
    },
    [R.IWg.TOGGLE_CHANNEL_TAB_PIN]: {
        binds: ["mod+shift+p"],
        comboKeysBindGlobal: !0,
        action() {
            let e = u.A.getActiveTab();
            if (null != e) return ((0, c.RL)(e.id, !e.pinned), !1);
        },
    },
    [R.IWg.SEARCH_EMOJIS]: Z.L,
    [R.IWg.SEARCH_GIFS]: z.T,
    [R.IWg.SEARCH_STICKERS]: X.w,
    [R.IWg.TOGGLE_HOTKEYS]: en.z,
    [R.IWg.JUMP_TO_FIRST_UNREAD]: x.s,
    [R.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            (0, l.hasModalOpen)(U.fc)
                ? v.A.updateCreateGuildModal({ slide: U.oS.JOIN_GUILD, location: "Keyboard Shortcut" })
                : v.A.openCreateGuildModal({ location: "Keyboard Shortcut" });
        },
    },
    [R.IWg.UPLOAD_FILE]: {
        binds: ["mod+shift+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = h.A.getChannel(o.Ay.getChannelId());
            return (null == e || e.isManaged() || b._.dispatch(R.jej.UPLOAD_FILE, { channelId: e.id }), !1);
        },
    },
    [R.IWg.RECORD_VOICE_MESSAGE]: {
        binds: F ? ["ctrl+shift+d"] : ["alt+r"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (
                !(e.repeat || a.A.hasLayers() || (0, l.hasAnyModalOpen)()) &&
                b._.hasSubscribers(R.jej.RECORD_VOICE_MESSAGE)
            )
                return (b._.dispatchToLastSubscribed(R.jej.RECORD_VOICE_MESSAGE), !1);
        },
    },
    [R.IWg.RETURN_TO_AUDIO_CHANNEL]: K.u,
    [R.IWg.CALL_ACCEPT]: g.Yo,
    [R.IWg.CALL_START]: g.OX,
    [R.IWg.FOCUS_SEARCH]: {
        binds: ["mod+f", "mod+shift+f"],
        comboKeysBindGlobal: !0,
        action(e, t) {
            if (a.A.hasLayers() || (0, l.hasAnyModalOpen)()) return;
            let n = !t.includes("shift");
            return (b._.dispatch(R.jej.FOCUS_SEARCH, { prefillCurrentChannel: n }), !1);
        },
    },
    [R.IWg.JUMP_TO_CURRENT_CALL]: {
        binds: ["mod+shift+alt+v"],
        comboKeysBindGlobal: !0,
        action(e) {
            (e.preventDefault(), e.stopPropagation());
            let t = y.A.getGuildId(),
                n = y.A.getChannelId();
            return (null != n && (0, m.i)(t ?? R.ME, n), !1);
        },
    },
    [R.IWg.ZOOM_IN]: eC.Ur,
    [R.IWg.ZOOM_OUT]: eC.hU,
    [R.IWg.ZOOM_RESET]: eC.O$,
    [R.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, V.transitionToGlobalDiscovery)({
                tab: w.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: j.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [R.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, D.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
        },
    },
    [R.IWg.OPEN_CONTEXT_MENU]: {
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
    [R.IWg.COPY_CHANNEL_LINK]: {
        binds: ["mod+shift+l"],
        comboKeysBindGlobal: !0,
        action() {
            let e = o.Ay.getChannelId();
            if (null == e) return !1;
            let t = h.A.getChannel(e);
            if (null == t) return !1;
            let n = h.A.getChannel(t.parent_id),
                i = (0, S.af)(t, n);
            return ((0, f.C)(i, L), !1);
        },
    },
};
function eN() {
    return [
        {
            description: O.intl.string(O.t.bx4Uyz),
            binds: eI(R.IWg.SERVER_PREV, R.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+Wem6h"]),
            binds: eI(R.IWg.CHANNEL_PREV, R.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+2fcdz"]),
            binds: eI(R.IWg.NAVIGATE_BACK, R.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.eVmj1H),
            binds: eI(R.IWg.UNREAD_PREV, R.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.EcqS7Y),
            binds: eI(R.IWg.MENTION_CHANNEL_PREV, R.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: O.intl.string(O.t["4I3pwW"]), binds: eI(R.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: O.intl.string(O.t.Bqss72), binds: eI(R.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: O.intl.string(O.t.yYsRlD), binds: eI(R.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: O.intl.string(O.t.O7ouXO), binds: eI(R.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: O.intl.string(O.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: O.intl.string(O.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: O.intl.string(O.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: O.intl.string(O.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: O.intl.string(O.t.UaXAPx), binds: eI(R.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: O.intl.string(O.t["5X9vFj"]), binds: eI(R.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.wxQFsl), binds: eI(R.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: O.intl.string(O.t["ZxGD+G"]), binds: eI(R.IWg.CREATE_THREAD), group: "CHAT" },
        { description: O.intl.string(O.t["C+XV7f"]), binds: eI(R.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: O.intl.string(O.t["Q+YV/T"]), binds: eI(R.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: O.intl.string(O.t["YEjV+W"]), binds: eI(R.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.AcBI9S), binds: eI(R.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: O.intl.string(O.t.JoxNnl), binds: eI(R.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: O.intl.string(O.t["3PHxo8"]), binds: eI(R.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: O.intl.string(O.t.YFl7eb), binds: eI(R.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: O.intl.string(O.t.L3RYYJ), binds: eI(R.IWg.SCROLL_UP, R.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: O.intl.string(O.t["3HAurM"]), binds: eI(R.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: O.intl.string(O.t.rrYBEu), binds: eI(R.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: O.intl.string(O.t.Wknt9M), binds: eI(R.IWg.RECORD_VOICE_MESSAGE), group: "CHAT", predicate: W },
        { description: O.intl.string(O.t.sUJlPL), binds: eI(R.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: O.intl.string(O.t["A+Fv0R"]), binds: eI(R.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: O.intl.string(O.t.tL6eVW), binds: eI(R.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t["QXe/7T"]), binds: eI(R.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.d6UIii), binds: eI(R.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.IcEW06), binds: eI(R.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.WN2dsS), binds: eI(R.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: O.intl.string(O.t.rUK0kk), binds: eI(R.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.vkGkSn), binds: eI(R.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.FJvZ87), binds: eI(R.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t["FiWl/T"]), binds: eI(R.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
        { description: O.intl.string(O.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
        { description: O.intl.string(O.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
        { description: O.intl.string(O.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
        { description: O.intl.string(O.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
        { description: O.intl.string(O.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
        { description: O.intl.string(O.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
        { description: O.intl.string(O.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
        { description: O.intl.string(O.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
        { description: O.intl.string(O.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
        { description: O.intl.string(O.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
        { description: O.intl.string(O.t.z9c6mt), binds: eI(R.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eS = 221552 == n.j ? ep : null;
