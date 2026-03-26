n.d(t, { Ay: () => X, Bx: () => z, Gm: () => w, Q_: () => F, zF: () => K, zR: () => Y }), n(321073);
var i,
    l = n(966597),
    r = n(774603),
    s = n(430086),
    o = n(394318),
    a = n(303757),
    d = n(830004),
    c = n(434728),
    u = n(308494),
    A = n(64460),
    E = n(92960),
    _ = n(739008),
    I = n(314519),
    g = n(198168),
    C = n(799592),
    h = n(675704),
    p = n(806964),
    T = n(552049),
    S = n(877991),
    N = n(332779),
    b = n(187521),
    L = n(568765),
    O = n(904828),
    m = n(251494),
    f = n(82038),
    G = n(14214),
    R = n(151199),
    U = n(144353),
    D = n(535527),
    y = n(46647),
    P = n(512513),
    M = n(910492),
    v = n(416092),
    x = n(801796),
    V = n(344731),
    j = n(58841),
    H = n(406975),
    B = n(652215),
    W = n(985018),
    F =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function w(e) {
    switch (e) {
        case "NAVIGATION":
            return W.intl.string(W.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return W.intl.string(W.t.bI8F5u);
        case "CHAT":
            return W.intl.string(W.t.hDhbb3);
        case "MISCELLANEOUS":
            return W.intl.string(W.t.cBdwqs);
        case "MESSAGE":
            return W.intl.string(W.t["5fpmX9"]);
        case "DND":
            return W.intl.string(W.t["69j6+4"]);
    }
}
function K(e) {
    switch (e) {
        case "MESSAGE":
            return W.intl.string(W.t.iepGDn);
        case "DND":
            return W.intl.string(W.t.LBsB0a);
        default:
            return;
    }
}
function k() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = Y[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let Y = {
    [B.IWg.SERVER_NEXT]: O.yx,
    [B.IWg.SERVER_PREV]: O.yv,
    [B.IWg.CHANNEL_NEXT]: s.kF,
    [B.IWg.CHANNEL_PREV]: s.Oc,
    [B.IWg.NAVIGATE_BACK]: s.GY,
    [B.IWg.NAVIGATE_FORWARD]: s.M$,
    [B.IWg.UNREAD_NEXT]: x.mH,
    [B.IWg.UNREAD_PREV]: x.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [B.IWg.JUMP_TO_GUILD]: A.J,
    [B.IWg.SUBMIT]: m.X,
    [B.IWg.TEXTAREA_FOCUS]: f.c,
    [B.IWg.MARK_CHANNEL_READ]: E.Df,
    [B.IWg.MARK_SERVER_READ]: _.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: U.O,
    [B.IWg.TOGGLE_FOR_LATER]: D.K,
    [B.IWg.TOGGLE_INBOX]: M.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: M.O,
    [B.IWg.TOGGLE_USERS]: v.U,
    [B.IWg.TOGGLE_HELP]: y.x,
    [B.IWg.VIBE_WITH_WUMPUS]: j.y,
    [B.IWg.TOGGLE_MUTE]: G.VT,
    [B.IWg.TOGGLE_DEAFEN]: G.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: R.y,
    [B.IWg.SEARCH_SOUNDBOARD]: b.A,
    [B.IWg.SCROLL_UP]: T.U5,
    [B.IWg.SCROLL_DOWN]: T.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: h.R,
    [B.IWg.CREATE_DM_GROUP]: o.X,
    [B.IWg.SEARCH_EMOJIS]: S.L,
    [B.IWg.SEARCH_GIFS]: N.T,
    [B.IWg.SEARCH_STICKERS]: L.w,
    [B.IWg.TOGGLE_HOTKEYS]: P.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: I.s,
    [B.IWg.CREATE_GUILD]: a.$,
    [B.IWg.UPLOAD_FILE]: V.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [B.IWg.CALL_ACCEPT]: r.Yo,
    [B.IWg.CALL_START]: r.OX,
    [B.IWg.FOCUS_SEARCH]: c.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [B.IWg.ZOOM_IN]: H.Ur,
    [B.IWg.ZOOM_OUT]: H.hU,
    [B.IWg.ZOOM_RESET]: H.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: g.N,
    [B.IWg.BROWSER_DEVTOOLS]: d.i,
    [B.IWg.OPEN_CONTEXT_MENU]: C.b,
};
function z() {
    let e = [
            {
                description: W.intl.string(W.t.bx4Uyz),
                binds: k(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: W.intl.string(W.t["+Wem6h"]),
                binds: k(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: W.intl.string(W.t["+2fcdz"]),
                binds: k(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: W.intl.string(W.t.eVmj1H),
                binds: k(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: W.intl.string(W.t.EcqS7Y),
                binds: k(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: W.intl.string(W.t["4I3pwW"]), binds: k(B.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: W.intl.string(W.t.Bqss72), binds: k(B.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: W.intl.string(W.t.yYsRlD), binds: k(B.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            { description: W.intl.string(W.t.O7ouXO), binds: k(B.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
            { description: W.intl.string(W.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: W.intl.string(W.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: W.intl.string(W.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: W.intl.string(W.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: W.intl.string(W.t.UaXAPx), binds: k(B.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: W.intl.string(W.t["5X9vFj"]), binds: k(B.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: W.intl.string(W.t.wxQFsl), binds: k(B.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: W.intl.string(W.t["C+XV7f"]), binds: k(B.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: W.intl.string(W.t["Q+YV/T"]), binds: k(B.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: W.intl.string(W.t["YEjV+W"]), binds: k(B.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: W.intl.string(W.t.AcBI9S), binds: k(B.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: W.intl.string(W.t.JoxNnl), binds: k(B.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: W.intl.string(W.t["3PHxo8"]), binds: k(B.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: W.intl.string(W.t.YFl7eb), binds: k(B.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: W.intl.string(W.t.L3RYYJ), binds: k(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: W.intl.string(W.t["3HAurM"]), binds: k(B.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: W.intl.string(W.t.rrYBEu), binds: k(B.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: W.intl.string(W.t.sUJlPL), binds: k(B.IWg.UPLOAD_FILE), group: "CHAT", groupEnd: !0 },
            { description: W.intl.string(W.t.tL6eVW), binds: k(B.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: W.intl.string(W.t["QXe/7T"]), binds: k(B.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: W.intl.string(W.t.d6UIii), binds: k(B.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: W.intl.string(W.t.IcEW06), binds: k(B.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: W.intl.string(W.t.WN2dsS),
                binds: k(B.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: W.intl.string(W.t.rUK0kk), binds: k(B.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: W.intl.string(W.t.vkGkSn), binds: k(B.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: W.intl.string(W.t.FJvZ87), binds: k(B.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: W.intl.string(W.t["FiWl/T"]), binds: k(B.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: W.intl.string(W.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: W.intl.string(W.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: W.intl.string(W.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: W.intl.string(W.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: W.intl.string(W.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: W.intl.string(W.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: W.intl.string(W.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: W.intl.string(W.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: W.intl.string(W.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: W.intl.string(W.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: W.intl.string(W.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: W.intl.string(W.t.z9c6mt), binds: k(B.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = l.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: W.intl.string(W.t.IWNSoH), binds: k(B.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let X = 21552 == n.j ? Y : null;
