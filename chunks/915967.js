n.d(t, { Ay: () => Z, Bx: () => K, Gm: () => F, Q_: () => V, zF: () => Y, zR: () => z }), n(321073);
var i,
    s = n(966597),
    r = n(774603),
    a = n(430086),
    l = n(394318),
    o = n(303757),
    c = n(830004),
    d = n(434728),
    u = n(308494),
    _ = n(64460),
    m = n(92960),
    A = n(739008),
    g = n(314519),
    E = n(198168),
    h = n(799592),
    p = n(675704),
    C = n(806964),
    x = n(552049),
    T = n(877991),
    I = n(332779),
    S = n(187521),
    f = n(568765),
    N = n(904828),
    b = n(251494),
    R = n(82038),
    v = n(14214),
    O = n(151199),
    j = n(144353),
    P = n(535527),
    y = n(46647),
    L = n(512513),
    D = n(910492),
    M = n(416092),
    G = n(801796),
    U = n(344731),
    k = n(58841),
    B = n(406975),
    w = n(652215),
    H = n(985018),
    V =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function F(e) {
    switch (e) {
        case "NAVIGATION":
            return H.intl.string(H.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return H.intl.string(H.t.bI8F5u);
        case "CHAT":
            return H.intl.string(H.t.hDhbb3);
        case "MISCELLANEOUS":
            return H.intl.string(H.t.cBdwqs);
        case "MESSAGE":
            return H.intl.string(H.t["5fpmX9"]);
        case "DND":
            return H.intl.string(H.t["69j6+4"]);
    }
}
function Y(e) {
    switch (e) {
        case "MESSAGE":
            return H.intl.string(H.t.iepGDn);
        case "DND":
            return H.intl.string(H.t.LBsB0a);
        default:
            return;
    }
}
function W() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = z[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let z = {
    [w.IWg.SERVER_NEXT]: N.yx,
    [w.IWg.SERVER_PREV]: N.yv,
    [w.IWg.CHANNEL_NEXT]: a.kF,
    [w.IWg.CHANNEL_PREV]: a.Oc,
    [w.IWg.NAVIGATE_BACK]: a.GY,
    [w.IWg.NAVIGATE_FORWARD]: a.M$,
    [w.IWg.UNREAD_NEXT]: G.mH,
    [w.IWg.UNREAD_PREV]: G.US,
    [w.IWg.MENTION_CHANNEL_NEXT]: G.BD,
    [w.IWg.MENTION_CHANNEL_PREV]: G.X8,
    [w.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
    [w.IWg.JUMP_TO_GUILD]: _.J,
    [w.IWg.SUBMIT]: b.X,
    [w.IWg.TEXTAREA_FOCUS]: R.c,
    [w.IWg.MARK_CHANNEL_READ]: m.D,
    [w.IWg.MARK_SERVER_READ]: A.P,
    [w.IWg.TOGGLE_CHANNEL_PINS]: j.O,
    [w.IWg.TOGGLE_FOR_LATER]: P.K,
    [w.IWg.TOGGLE_INBOX]: D.q,
    [w.IWg.MARK_TOP_INBOX_CHANNEL_READ]: D.O,
    [w.IWg.TOGGLE_USERS]: M.U,
    [w.IWg.TOGGLE_HELP]: y.x,
    [w.IWg.VIBE_WITH_WUMPUS]: k.y,
    [w.IWg.TOGGLE_MUTE]: v.VT,
    [w.IWg.TOGGLE_DEAFEN]: v.rR,
    [w.IWg.TOGGLE_CATEGORY_COLLAPSED]: O.y,
    [w.IWg.SEARCH_SOUNDBOARD]: S.A,
    [w.IWg.SCROLL_UP]: x.U5,
    [w.IWg.SCROLL_DOWN]: x.fz,
    [w.IWg.QUICKSWITCHER_SHOW]: p.R,
    [w.IWg.CREATE_DM_GROUP]: l.X,
    [w.IWg.SEARCH_EMOJIS]: T.L,
    [w.IWg.SEARCH_GIFS]: I.T,
    [w.IWg.SEARCH_STICKERS]: f.w,
    [w.IWg.TOGGLE_HOTKEYS]: L.z,
    [w.IWg.JUMP_TO_FIRST_UNREAD]: g.s,
    [w.IWg.CREATE_GUILD]: o.$,
    [w.IWg.UPLOAD_FILE]: U.T,
    [w.IWg.RETURN_TO_AUDIO_CHANNEL]: C.u,
    [w.IWg.CALL_ACCEPT]: r.Yo,
    [w.IWg.CALL_START]: r.OX,
    [w.IWg.FOCUS_SEARCH]: d.O,
    [w.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [w.IWg.ZOOM_IN]: B.Ur,
    [w.IWg.ZOOM_OUT]: B.hU,
    [w.IWg.ZOOM_RESET]: B.O$,
    [w.IWg.OPEN_APP_DIRECTORY]: E.N,
    [w.IWg.BROWSER_DEVTOOLS]: c.i,
    [w.IWg.OPEN_CONTEXT_MENU]: h.b,
};
function K() {
    let e = [
            {
                description: H.intl.string(H.t.bx4Uyz),
                binds: W(w.IWg.SERVER_PREV, w.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t["+Wem6h"]),
                binds: W(w.IWg.CHANNEL_PREV, w.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t["+2fcdz"]),
                binds: W(w.IWg.NAVIGATE_BACK, w.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.eVmj1H),
                binds: W(w.IWg.UNREAD_PREV, w.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.EcqS7Y),
                binds: W(w.IWg.MENTION_CHANNEL_PREV, w.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: H.intl.string(H.t["4I3pwW"]), binds: W(w.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: H.intl.string(H.t.Bqss72), binds: W(w.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: H.intl.string(H.t.yYsRlD), binds: W(w.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            { description: H.intl.string(H.t.O7ouXO), binds: W(w.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
            { description: H.intl.string(H.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: H.intl.string(H.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: H.intl.string(H.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: H.intl.string(H.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: H.intl.string(H.t.UaXAPx), binds: W(w.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: H.intl.string(H.t["5X9vFj"]), binds: W(w.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: H.intl.string(H.t.wxQFsl), binds: W(w.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: H.intl.string(H.t["C+XV7f"]), binds: W(w.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: H.intl.string(H.t["Q+YV/T"]), binds: W(w.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: H.intl.string(H.t["YEjV+W"]), binds: W(w.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: H.intl.string(H.t.AcBI9S), binds: W(w.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: H.intl.string(H.t.JoxNnl), binds: W(w.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: H.intl.string(H.t["3PHxo8"]), binds: W(w.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: H.intl.string(H.t.YFl7eb), binds: W(w.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: H.intl.string(H.t.L3RYYJ), binds: W(w.IWg.SCROLL_UP, w.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: H.intl.string(H.t["3HAurM"]), binds: W(w.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: H.intl.string(H.t.rrYBEu), binds: W(w.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: H.intl.string(H.t.sUJlPL), binds: W(w.IWg.UPLOAD_FILE), group: "CHAT", groupEnd: !0 },
            { description: H.intl.string(H.t.tL6eVW), binds: W(w.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: H.intl.string(H.t["QXe/7T"]), binds: W(w.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: H.intl.string(H.t.d6UIii), binds: W(w.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: H.intl.string(H.t.IcEW06), binds: W(w.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: H.intl.string(H.t.WN2dsS),
                binds: W(w.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: H.intl.string(H.t.rUK0kk), binds: W(w.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: H.intl.string(H.t.vkGkSn), binds: W(w.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: H.intl.string(H.t.FJvZ87), binds: W(w.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: H.intl.string(H.t["FiWl/T"]), binds: W(w.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: H.intl.string(H.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: H.intl.string(H.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: H.intl.string(H.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: H.intl.string(H.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: H.intl.string(H.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: H.intl.string(H.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: H.intl.string(H.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: H.intl.string(H.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: H.intl.string(H.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: H.intl.string(H.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: H.intl.string(H.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: H.intl.string(H.t.z9c6mt), binds: W(w.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = s.A.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
    return (
        t && !n && e.push({ description: H.intl.string(H.t.IWNSoH), binds: W(w.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let Z = 21552 == n.j ? z : null;
