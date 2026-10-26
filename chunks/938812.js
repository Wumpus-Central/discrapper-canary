n.d(t, { Bx: () => ef, Ay: () => eO, Gm: () => eT, Q_: () => eI, zF: () => ep, zR: () => eS });
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
    I = n(176522),
    T = n(435558),
    p = n.n(T),
    N = n(858899),
    S = n(147036),
    f = n(957565),
    O = n(105292);
let L = (0, T.throttle)(() => (0, N.P0)({ text: O.intl.string(O.t["+5kSoW"]), variant: "success" }), 3e3, {
    leading: !0,
    trailing: !1,
});
var m = n(265422),
    b = n(625494),
    R = n(652215),
    v = n(630685),
    U = n(272613),
    D = n(398884),
    y = n(819638),
    G = n(723702),
    M = n(763827),
    P = n(64460),
    x = n(92960),
    V = n(477672),
    w = n(314519),
    j = n(837057),
    H = n(310419),
    k = n(488995),
    B = n(675704),
    F = n(74477),
    W = n(680671);
let K = (0, G.isMac)() || (0, G.isMacWeb)();
function Y() {
    return (0, W.t)() && F.A.getConfig({ location: F.R }).enabled;
}
var Z = n(806964),
    z = n(552049),
    X = n(877991),
    J = n(332779),
    q = n(274794),
    Q = n(928531),
    $ = n(251494),
    ee = n(82038),
    et = n(14214),
    en = n(151199),
    ei = n(975571),
    el = n(28647),
    er = n(851109);
let es = {
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
var ea = n(478437),
    eo = n(367513),
    ed = n(604681),
    ec = n(198052),
    eu = n(47675),
    eA = n(999291),
    eE = n(358047),
    eh = n(467691),
    eC = n(674272),
    e_ = n(431804),
    eg = n(406975),
    eI =
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
function ep(e) {
    switch (e) {
        case "MESSAGE":
            return O.intl.string(O.t.iepGDn);
        case "DND":
            return O.intl.string(O.t.LBsB0a);
        default:
            return;
    }
}
function eN() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = eS[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let eS = {
    [R.IWg.SERVER_NEXT]: Q.yx,
    [R.IWg.SERVER_PREV]: Q.yv,
    [R.IWg.CHANNEL_NEXT]: I.kF,
    [R.IWg.CHANNEL_PREV]: I.Oc,
    [R.IWg.NAVIGATE_BACK]: I.GY,
    [R.IWg.NAVIGATE_FORWARD]: I.M$,
    [R.IWg.UNREAD_NEXT]: eh.mH,
    [R.IWg.UNREAD_PREV]: eh.US,
    [R.IWg.MENTION_CHANNEL_NEXT]: eh.BD,
    [R.IWg.MENTION_CHANNEL_PREV]: eh.X8,
    [R.IWg.TOGGLE_PREVIOUS_GUILD]: I.Fv,
    [R.IWg.JUMP_TO_GUILD]: P.J,
    [R.IWg.SUBMIT]: $.X,
    [R.IWg.TEXTAREA_FOCUS]: ee.c,
    [R.IWg.MARK_CHANNEL_READ]: x.Df,
    [R.IWg.MARK_SERVER_READ]: V.P,
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
                let { notificationCenterVariant: e } = (0, er.GE)({ location: "TOGGLE_INBOX" });
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
    [R.IWg.MARK_TOP_INBOX_CHANNEL_READ]: es,
    [R.IWg.TOGGLE_USERS]: {
        binds: ["mod+u"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId(),
                t = o.Ay.getChannelId(e),
                n = h.A.getChannel(t),
                i = null != t && n?.isVocalThread() === !0 && ec.A.getUserParticipantCount(t) > 0;
            if (null != t && null != n && (n.type === ea.r.GUILD_VOICE || i))
                return (eo.A.updateChatOpen(t, !ec.A.getChatOpen(t)), !1);
            if (null != t && null != n && n.type === ea.r.DM) {
                let e = eE.Ay.getSection(t, n?.isDM()),
                    i = (0, eA.AP)(n.getRecipientId()),
                    l = e === R.YvQ.PROFILE;
                return (
                    (0, eu.am)({ displayProfile: i, isProfileOpen: !l }), ed.A.toggleUserProfileSidebarSection(), !1
                );
            }
            return (ed.A.toggleMembersSection(), !1);
        },
    },
    [R.IWg.TOGGLE_HELP]: {
        binds: ["mod+shift+h", "f1"],
        comboKeysBindGlobal: !0,
        action: () => (window.open(ei.C), !1),
    },
    [R.IWg.VIBE_WITH_WUMPUS]: {
        binds: ["mod+alt+shift+w"],
        comboKeysBindGlobal: !0,
        action: () => ((0, eC.A)({ source: e_.y.KEYBIND }), !1),
    },
    [R.IWg.TOGGLE_MUTE]: et.VT,
    [R.IWg.TOGGLE_DEAFEN]: et.rR,
    [R.IWg.TOGGLE_CATEGORY_COLLAPSED]: en.y,
    [R.IWg.SEARCH_SOUNDBOARD]: {
        binds: ["mod+shift+b"],
        comboKeysBindGlobal: !0,
        action: () => (b._.dispatch(R.jej.TOGGLE_SOUNDBOARD), !1),
    },
    [R.IWg.SCROLL_UP]: z.U5,
    [R.IWg.SCROLL_DOWN]: z.fz,
    [R.IWg.QUICKSWITCHER_SHOW]: B.R,
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
    [R.IWg.SEARCH_EMOJIS]: X.L,
    [R.IWg.SEARCH_GIFS]: J.T,
    [R.IWg.SEARCH_STICKERS]: q.w,
    [R.IWg.TOGGLE_HOTKEYS]: el.z,
    [R.IWg.JUMP_TO_FIRST_UNREAD]: w.s,
    [R.IWg.CREATE_GUILD]: {
        binds: ["mod+shift+n"],
        comboKeysBindGlobal: !0,
        action() {
            if ((0, l.hasModalOpen)(y.fc))
                U.A.updateCreateGuildModal({ slide: y.oS.JOIN_GUILD, location: "Keyboard Shortcut" });
            else {
                let e = !(0, D.Sn)() && (0, v.i)("guild_list_add_server");
                U.A.openCreateGuildModal({ location: "Keyboard Shortcut", joinFirst: e });
            }
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
        binds: K ? ["ctrl+shift+d"] : ["alt+r"],
        comboKeysBindGlobal: !0,
        action(e) {
            if (
                !(e.repeat || a.A.hasLayers() || (0, l.hasAnyModalOpen)()) &&
                b._.hasSubscribers(R.jej.RECORD_VOICE_MESSAGE)
            )
                return (b._.dispatchToLastSubscribed(R.jej.RECORD_VOICE_MESSAGE), !1);
        },
    },
    [R.IWg.RETURN_TO_AUDIO_CHANNEL]: Z.u,
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
            let t = M.A.getGuildId(),
                n = M.A.getChannelId();
            return (null != n && (0, m.i)(t ?? R.ME, n), !1);
        },
    },
    [R.IWg.ZOOM_IN]: eg.Ur,
    [R.IWg.ZOOM_OUT]: eg.hU,
    [R.IWg.ZOOM_RESET]: eg.O$,
    [R.IWg.OPEN_APP_DIRECTORY]: {
        binds: ["mod+ctrl+a"],
        comboKeysBindGlobal: !0,
        action() {
            let e = d.A.getGuildId() ?? void 0;
            (0, j.transitionToGlobalDiscovery)({
                tab: k.GlobalDiscoveryTab.APPS,
                newSessionState: { guildId: e ?? null, entrypoint: { name: H.sW.KEYBOARD_SHORTCUT } },
            });
        },
    },
    [R.IWg.BROWSER_DEVTOOLS]: {
        binds: ["mod+alt+i"],
        comboKeysBindGlobal: !0,
        action(e) {
            if ((0, G.isWeb)() && "discord.com" === location.host) return (e.preventDefault(), e.stopPropagation(), !1);
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
function ef() {
    return [
        {
            description: O.intl.string(O.t.bx4Uyz),
            binds: eN(R.IWg.SERVER_PREV, R.IWg.SERVER_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+Wem6h"]),
            binds: eN(R.IWg.CHANNEL_PREV, R.IWg.CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t["+2fcdz"]),
            binds: eN(R.IWg.NAVIGATE_BACK, R.IWg.NAVIGATE_FORWARD),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.eVmj1H),
            binds: eN(R.IWg.UNREAD_PREV, R.IWg.UNREAD_NEXT),
            group: "NAVIGATION",
        },
        {
            description: O.intl.string(O.t.EcqS7Y),
            binds: eN(R.IWg.MENTION_CHANNEL_PREV, R.IWg.MENTION_CHANNEL_NEXT),
            group: "NAVIGATION",
        },
        { description: O.intl.string(O.t["4I3pwW"]), binds: eN(R.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
        { description: O.intl.string(O.t.Bqss72), binds: eN(R.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
        { description: O.intl.string(O.t.yYsRlD), binds: eN(R.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
        { description: O.intl.string(O.t.O7ouXO), binds: eN(R.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
        { description: O.intl.string(O.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
        { description: O.intl.string(O.t.dmMqay), binds: ["up", "down"], group: "DND" },
        { description: O.intl.string(O.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
        { description: O.intl.string(O.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
        { description: O.intl.string(O.t.UaXAPx), binds: eN(R.IWg.MARK_SERVER_READ), group: "CHAT" },
        { description: O.intl.string(O.t["5X9vFj"]), binds: eN(R.IWg.MARK_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.wxQFsl), binds: eN(R.IWg.CREATE_DM_GROUP), group: "CHAT" },
        { description: O.intl.string(O.t["ZxGD+G"]), binds: eN(R.IWg.CREATE_THREAD), group: "CHAT" },
        { description: O.intl.string(O.t["C+XV7f"]), binds: eN(R.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
        { description: O.intl.string(O.t["Q+YV/T"]), binds: eN(R.IWg.TOGGLE_INBOX), group: "CHAT" },
        { description: O.intl.string(O.t["YEjV+W"]), binds: eN(R.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
        { description: O.intl.string(O.t.AcBI9S), binds: eN(R.IWg.TOGGLE_USERS), group: "CHAT" },
        { description: O.intl.string(O.t.JoxNnl), binds: eN(R.IWg.SEARCH_EMOJIS), group: "CHAT" },
        { description: O.intl.string(O.t["3PHxo8"]), binds: eN(R.IWg.SEARCH_GIFS), group: "CHAT" },
        { description: O.intl.string(O.t.YFl7eb), binds: eN(R.IWg.SEARCH_STICKERS), group: "CHAT" },
        { description: O.intl.string(O.t.L3RYYJ), binds: eN(R.IWg.SCROLL_UP, R.IWg.SCROLL_DOWN), group: "CHAT" },
        { description: O.intl.string(O.t["3HAurM"]), binds: eN(R.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
        { description: O.intl.string(O.t.rrYBEu), binds: eN(R.IWg.TEXTAREA_FOCUS), group: "CHAT" },
        { description: O.intl.string(O.t.Wknt9M), binds: eN(R.IWg.RECORD_VOICE_MESSAGE), group: "CHAT", predicate: Y },
        { description: O.intl.string(O.t.sUJlPL), binds: eN(R.IWg.UPLOAD_FILE), group: "CHAT" },
        { description: O.intl.string(O.t["A+Fv0R"]), binds: eN(R.IWg.COPY_CHANNEL_LINK), group: "CHAT", groupEnd: !0 },
        { description: O.intl.string(O.t.tL6eVW), binds: eN(R.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t["QXe/7T"]), binds: eN(R.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.d6UIii), binds: eN(R.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.IcEW06), binds: eN(R.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.WN2dsS), binds: eN(R.IWg.CALL_START), group: "VOICE_AND_VIDEO", groupEnd: !0 },
        { description: O.intl.string(O.t.rUK0kk), binds: eN(R.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
        { description: O.intl.string(O.t.vkGkSn), binds: eN(R.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t.FJvZ87), binds: eN(R.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
        { description: O.intl.string(O.t["FiWl/T"]), binds: eN(R.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
        { description: O.intl.string(O.t.z9c6mt), binds: eN(R.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
    ];
}
let eO = 221552 == n.j ? eS : null;
