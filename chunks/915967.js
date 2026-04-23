n.d(t, { Ay: () => Z, Bx: () => X, Gm: () => K, Q_: () => W, zF: () => k, zR: () => Y }), n(321073);
var i,
    l = n(966597),
    r = n(774603),
    s = n(430086),
    o = n(122032),
    a = n(394318),
    d = n(303757),
    c = n(830004),
    u = n(434728),
    _ = n(308494),
    A = n(64460),
    E = n(92960),
    I = n(739008),
    h = n(314519),
    g = n(198168),
    C = n(799592),
    p = n(675704),
    S = n(806964),
    T = n(552049),
    N = n(877991),
    b = n(332779),
    L = n(187521),
    f = n(568765),
    m = n(904828),
    O = n(251494),
    G = n(82038),
    R = n(14214),
    U = n(151199),
    D = n(144353),
    y = n(535527),
    P = n(46647),
    M = n(512513),
    v = n(910492),
    x = n(416092),
    V = n(801796),
    j = n(344731),
    H = n(58841),
    w = n(406975),
    B = n(652215),
    F = n(985018),
    W =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function K(e) {
    switch (e) {
        case "NAVIGATION":
            return F.intl.string(F.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return F.intl.string(F.t.bI8F5u);
        case "CHAT":
            return F.intl.string(F.t.hDhbb3);
        case "MISCELLANEOUS":
            return F.intl.string(F.t.cBdwqs);
        case "MESSAGE":
            return F.intl.string(F.t["5fpmX9"]);
        case "DND":
            return F.intl.string(F.t["69j6+4"]);
    }
}
function k(e) {
    switch (e) {
        case "MESSAGE":
            return F.intl.string(F.t.iepGDn);
        case "DND":
            return F.intl.string(F.t.LBsB0a);
        default:
            return;
    }
}
function z() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = Y[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let Y = {
    [B.IWg.SERVER_NEXT]: m.yx,
    [B.IWg.SERVER_PREV]: m.yv,
    [B.IWg.CHANNEL_NEXT]: s.kF,
    [B.IWg.CHANNEL_PREV]: s.Oc,
    [B.IWg.NAVIGATE_BACK]: s.GY,
    [B.IWg.NAVIGATE_FORWARD]: s.M$,
    [B.IWg.UNREAD_NEXT]: V.mH,
    [B.IWg.UNREAD_PREV]: V.US,
    [B.IWg.MENTION_CHANNEL_NEXT]: V.BD,
    [B.IWg.MENTION_CHANNEL_PREV]: V.X8,
    [B.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [B.IWg.JUMP_TO_GUILD]: A.J,
    [B.IWg.SUBMIT]: O.X,
    [B.IWg.TEXTAREA_FOCUS]: G.c,
    [B.IWg.MARK_CHANNEL_READ]: E.Df,
    [B.IWg.MARK_SERVER_READ]: I.P,
    [B.IWg.TOGGLE_CHANNEL_PINS]: D.O,
    [B.IWg.TOGGLE_FOR_LATER]: y.K,
    [B.IWg.TOGGLE_INBOX]: v.q,
    [B.IWg.MARK_TOP_INBOX_CHANNEL_READ]: v.O,
    [B.IWg.TOGGLE_USERS]: x.U,
    [B.IWg.TOGGLE_HELP]: P.x,
    [B.IWg.VIBE_WITH_WUMPUS]: H.y,
    [B.IWg.TOGGLE_MUTE]: R.VT,
    [B.IWg.TOGGLE_DEAFEN]: R.rR,
    [B.IWg.TOGGLE_CATEGORY_COLLAPSED]: U.y,
    [B.IWg.SEARCH_SOUNDBOARD]: L.A,
    [B.IWg.SCROLL_UP]: T.U5,
    [B.IWg.SCROLL_DOWN]: T.fz,
    [B.IWg.QUICKSWITCHER_SHOW]: p.R,
    [B.IWg.CREATE_DM_GROUP]: a.X,
    [B.IWg.SEARCH_EMOJIS]: N.L,
    [B.IWg.SEARCH_GIFS]: b.T,
    [B.IWg.SEARCH_STICKERS]: f.w,
    [B.IWg.TOGGLE_HOTKEYS]: M.z,
    [B.IWg.JUMP_TO_FIRST_UNREAD]: h.s,
    [B.IWg.CREATE_GUILD]: d.$,
    [B.IWg.UPLOAD_FILE]: j.T,
    [B.IWg.RETURN_TO_AUDIO_CHANNEL]: S.u,
    [B.IWg.CALL_ACCEPT]: r.Yo,
    [B.IWg.CALL_START]: r.OX,
    [B.IWg.FOCUS_SEARCH]: u.O,
    [B.IWg.JUMP_TO_CURRENT_CALL]: _.s,
    [B.IWg.ZOOM_IN]: w.Ur,
    [B.IWg.ZOOM_OUT]: w.hU,
    [B.IWg.ZOOM_RESET]: w.O$,
    [B.IWg.OPEN_APP_DIRECTORY]: g.N,
    [B.IWg.BROWSER_DEVTOOLS]: c.i,
    [B.IWg.OPEN_CONTEXT_MENU]: C.b,
    [B.IWg.COPY_CHANNEL_LINK]: o.F,
};
function X() {
    let e = [
            {
                description: F.intl.string(F.t.bx4Uyz),
                binds: z(B.IWg.SERVER_PREV, B.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t["+Wem6h"]),
                binds: z(B.IWg.CHANNEL_PREV, B.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t["+2fcdz"]),
                binds: z(B.IWg.NAVIGATE_BACK, B.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t.eVmj1H),
                binds: z(B.IWg.UNREAD_PREV, B.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t.EcqS7Y),
                binds: z(B.IWg.MENTION_CHANNEL_PREV, B.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: F.intl.string(F.t["4I3pwW"]), binds: z(B.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: F.intl.string(F.t.Bqss72), binds: z(B.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: F.intl.string(F.t.yYsRlD), binds: z(B.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            { description: F.intl.string(F.t.O7ouXO), binds: z(B.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
            { description: F.intl.string(F.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: F.intl.string(F.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: F.intl.string(F.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: F.intl.string(F.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: F.intl.string(F.t.UaXAPx), binds: z(B.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: F.intl.string(F.t["5X9vFj"]), binds: z(B.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: F.intl.string(F.t.wxQFsl), binds: z(B.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: F.intl.string(F.t["C+XV7f"]), binds: z(B.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: F.intl.string(F.t["Q+YV/T"]), binds: z(B.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: F.intl.string(F.t["YEjV+W"]), binds: z(B.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: F.intl.string(F.t.AcBI9S), binds: z(B.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: F.intl.string(F.t.JoxNnl), binds: z(B.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: F.intl.string(F.t["3PHxo8"]), binds: z(B.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: F.intl.string(F.t.YFl7eb), binds: z(B.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: F.intl.string(F.t.L3RYYJ), binds: z(B.IWg.SCROLL_UP, B.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: F.intl.string(F.t["3HAurM"]), binds: z(B.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: F.intl.string(F.t.rrYBEu), binds: z(B.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: F.intl.string(F.t.sUJlPL), binds: z(B.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: F.intl.string(F.t["A+Fv0R"]),
                binds: z(B.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: F.intl.string(F.t.tL6eVW), binds: z(B.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t["QXe/7T"]), binds: z(B.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.d6UIii), binds: z(B.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.IcEW06), binds: z(B.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: F.intl.string(F.t.WN2dsS),
                binds: z(B.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: F.intl.string(F.t.rUK0kk), binds: z(B.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.vkGkSn), binds: z(B.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: F.intl.string(F.t.FJvZ87), binds: z(B.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: F.intl.string(F.t["FiWl/T"]), binds: z(B.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: F.intl.string(F.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: F.intl.string(F.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: F.intl.string(F.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: F.intl.string(F.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: F.intl.string(F.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: F.intl.string(F.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: F.intl.string(F.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: F.intl.string(F.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: F.intl.string(F.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: F.intl.string(F.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: F.intl.string(F.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: F.intl.string(F.t.z9c6mt), binds: z(B.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = l.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: F.intl.string(F.t.IWNSoH), binds: z(B.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let Z = 21552 == n.j ? Y : null;
