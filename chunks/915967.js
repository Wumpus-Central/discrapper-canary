n.d(t, { Ay: () => Q, Bx: () => X, Gm: () => k, Q_: () => W, zF: () => K, zR: () => z }), n(321073);
var i,
    r = n(966597),
    l = n(774603),
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
    T = n(806964),
    S = n(552049),
    b = n(877991),
    f = n(332779),
    N = n(187521),
    m = n(568765),
    L = n(904828),
    O = n(251494),
    R = n(82038),
    G = n(14214),
    U = n(151199),
    D = n(144353),
    y = n(535527),
    P = n(46647),
    M = n(512513),
    v = n(910492),
    x = n(416092),
    V = n(801796),
    H = n(344731),
    j = n(58841),
    B = n(406975),
    w = n(652215),
    F = n(985018),
    W =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function k(e) {
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
function K(e) {
    switch (e) {
        case "MESSAGE":
            return F.intl.string(F.t.iepGDn);
        case "DND":
            return F.intl.string(F.t.LBsB0a);
        default:
            return;
    }
}
function Y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = z[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let z = {
    [w.IWg.SERVER_NEXT]: L.yx,
    [w.IWg.SERVER_PREV]: L.yv,
    [w.IWg.CHANNEL_NEXT]: s.kF,
    [w.IWg.CHANNEL_PREV]: s.Oc,
    [w.IWg.NAVIGATE_BACK]: s.GY,
    [w.IWg.NAVIGATE_FORWARD]: s.M$,
    [w.IWg.UNREAD_NEXT]: V.mH,
    [w.IWg.UNREAD_PREV]: V.US,
    [w.IWg.MENTION_CHANNEL_NEXT]: V.BD,
    [w.IWg.MENTION_CHANNEL_PREV]: V.X8,
    [w.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [w.IWg.JUMP_TO_GUILD]: A.J,
    [w.IWg.SUBMIT]: O.X,
    [w.IWg.TEXTAREA_FOCUS]: R.c,
    [w.IWg.MARK_CHANNEL_READ]: E.Df,
    [w.IWg.MARK_SERVER_READ]: I.P,
    [w.IWg.TOGGLE_CHANNEL_PINS]: D.O,
    [w.IWg.TOGGLE_FOR_LATER]: y.K,
    [w.IWg.TOGGLE_INBOX]: v.q,
    [w.IWg.MARK_TOP_INBOX_CHANNEL_READ]: v.O,
    [w.IWg.TOGGLE_USERS]: x.U,
    [w.IWg.TOGGLE_HELP]: P.x,
    [w.IWg.VIBE_WITH_WUMPUS]: j.y,
    [w.IWg.TOGGLE_MUTE]: G.VT,
    [w.IWg.TOGGLE_DEAFEN]: G.rR,
    [w.IWg.TOGGLE_CATEGORY_COLLAPSED]: U.y,
    [w.IWg.SEARCH_SOUNDBOARD]: N.A,
    [w.IWg.SCROLL_UP]: S.U5,
    [w.IWg.SCROLL_DOWN]: S.fz,
    [w.IWg.QUICKSWITCHER_SHOW]: p.R,
    [w.IWg.CREATE_DM_GROUP]: a.X,
    [w.IWg.SEARCH_EMOJIS]: b.L,
    [w.IWg.SEARCH_GIFS]: f.T,
    [w.IWg.SEARCH_STICKERS]: m.w,
    [w.IWg.TOGGLE_HOTKEYS]: M.z,
    [w.IWg.JUMP_TO_FIRST_UNREAD]: h.s,
    [w.IWg.CREATE_GUILD]: d.$,
    [w.IWg.UPLOAD_FILE]: H.T,
    [w.IWg.RETURN_TO_AUDIO_CHANNEL]: T.u,
    [w.IWg.CALL_ACCEPT]: l.Yo,
    [w.IWg.CALL_START]: l.OX,
    [w.IWg.FOCUS_SEARCH]: u.O,
    [w.IWg.JUMP_TO_CURRENT_CALL]: _.s,
    [w.IWg.ZOOM_IN]: B.Ur,
    [w.IWg.ZOOM_OUT]: B.hU,
    [w.IWg.ZOOM_RESET]: B.O$,
    [w.IWg.OPEN_APP_DIRECTORY]: g.N,
    [w.IWg.BROWSER_DEVTOOLS]: c.i,
    [w.IWg.OPEN_CONTEXT_MENU]: C.b,
    [w.IWg.COPY_CHANNEL_LINK]: o.F,
};
function X() {
    let e = [
            {
                description: F.intl.string(F.t.bx4Uyz),
                binds: Y(w.IWg.SERVER_PREV, w.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t["+Wem6h"]),
                binds: Y(w.IWg.CHANNEL_PREV, w.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t["+2fcdz"]),
                binds: Y(w.IWg.NAVIGATE_BACK, w.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t.eVmj1H),
                binds: Y(w.IWg.UNREAD_PREV, w.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: F.intl.string(F.t.EcqS7Y),
                binds: Y(w.IWg.MENTION_CHANNEL_PREV, w.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: F.intl.string(F.t["4I3pwW"]), binds: Y(w.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: F.intl.string(F.t.Bqss72), binds: Y(w.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: F.intl.string(F.t.yYsRlD), binds: Y(w.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            { description: F.intl.string(F.t.O7ouXO), binds: Y(w.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
            { description: F.intl.string(F.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: F.intl.string(F.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: F.intl.string(F.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: F.intl.string(F.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: F.intl.string(F.t.UaXAPx), binds: Y(w.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: F.intl.string(F.t["5X9vFj"]), binds: Y(w.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: F.intl.string(F.t.wxQFsl), binds: Y(w.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: F.intl.string(F.t["C+XV7f"]), binds: Y(w.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: F.intl.string(F.t["Q+YV/T"]), binds: Y(w.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: F.intl.string(F.t["YEjV+W"]), binds: Y(w.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: F.intl.string(F.t.AcBI9S), binds: Y(w.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: F.intl.string(F.t.JoxNnl), binds: Y(w.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: F.intl.string(F.t["3PHxo8"]), binds: Y(w.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: F.intl.string(F.t.YFl7eb), binds: Y(w.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: F.intl.string(F.t.L3RYYJ), binds: Y(w.IWg.SCROLL_UP, w.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: F.intl.string(F.t["3HAurM"]), binds: Y(w.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: F.intl.string(F.t.rrYBEu), binds: Y(w.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: F.intl.string(F.t.sUJlPL), binds: Y(w.IWg.UPLOAD_FILE), group: "CHAT" },
            {
                description: F.intl.string(F.t["A+Fv0R"]),
                binds: Y(w.IWg.COPY_CHANNEL_LINK),
                group: "CHAT",
                groupEnd: !0,
            },
            { description: F.intl.string(F.t.tL6eVW), binds: Y(w.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t["QXe/7T"]), binds: Y(w.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.d6UIii), binds: Y(w.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.IcEW06), binds: Y(w.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: F.intl.string(F.t.WN2dsS),
                binds: Y(w.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: F.intl.string(F.t.rUK0kk), binds: Y(w.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: F.intl.string(F.t.vkGkSn), binds: Y(w.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: F.intl.string(F.t.FJvZ87), binds: Y(w.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: F.intl.string(F.t["FiWl/T"]), binds: Y(w.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
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
            { description: F.intl.string(F.t.z9c6mt), binds: Y(w.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: F.intl.string(F.t.IWNSoH), binds: Y(w.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let Q = 21552 == n.j ? z : null;
