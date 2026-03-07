n.d(t, { Ay: () => X, Bx: () => z, Gm: () => W, Q_: () => H, zF: () => k, zR: () => Y }), n(321073);
var i,
    r = n(966597),
    a = n(774603),
    s = n(430086),
    l = n(394318),
    o = n(303757),
    d = n(830004),
    _ = n(434728),
    c = n(308494),
    u = n(64460),
    A = n(92960),
    I = n(739008),
    E = n(314519),
    g = n(198168),
    h = n(799592),
    C = n(675704),
    p = n(806964),
    S = n(552049),
    f = n(877991),
    T = n(332779),
    m = n(187521),
    b = n(568765),
    N = n(904828),
    L = n(251494),
    O = n(82038),
    R = n(14214),
    G = n(151199),
    U = n(144353),
    y = n(535527),
    v = n(46647),
    D = n(512513),
    P = n(910492),
    M = n(416092),
    x = n(801796),
    V = n(344731),
    w = n(58841),
    F = n(406975),
    j = n(652215),
    B = n(985018),
    H =
        (((i = {}).NAVIGATION = "NAVIGATION"),
        (i.CHAT = "CHAT"),
        (i.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (i.MISCELLANEOUS = "MISCELLANEOUS"),
        (i.MESSAGE = "MESSAGE"),
        (i.DND = "DND"),
        i);
function W(e) {
    switch (e) {
        case "NAVIGATION":
            return B.intl.string(B.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return B.intl.string(B.t.bI8F5u);
        case "CHAT":
            return B.intl.string(B.t.hDhbb3);
        case "MISCELLANEOUS":
            return B.intl.string(B.t.cBdwqs);
        case "MESSAGE":
            return B.intl.string(B.t["5fpmX9"]);
        case "DND":
            return B.intl.string(B.t["69j6+4"]);
    }
}
function k(e) {
    switch (e) {
        case "MESSAGE":
            return B.intl.string(B.t.iepGDn);
        case "DND":
            return B.intl.string(B.t.LBsB0a);
        default:
            return;
    }
}
function K() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = Y[e];
        if (null == t) throw Error(`getBindsFor(...): No bind for ${t}`);
        return t.binds[0];
    });
}
let Y = {
    [j.IWg.SERVER_NEXT]: N.yx,
    [j.IWg.SERVER_PREV]: N.yv,
    [j.IWg.CHANNEL_NEXT]: s.kF,
    [j.IWg.CHANNEL_PREV]: s.Oc,
    [j.IWg.NAVIGATE_BACK]: s.GY,
    [j.IWg.NAVIGATE_FORWARD]: s.M$,
    [j.IWg.UNREAD_NEXT]: x.mH,
    [j.IWg.UNREAD_PREV]: x.US,
    [j.IWg.MENTION_CHANNEL_NEXT]: x.BD,
    [j.IWg.MENTION_CHANNEL_PREV]: x.X8,
    [j.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [j.IWg.JUMP_TO_GUILD]: u.J,
    [j.IWg.SUBMIT]: L.X,
    [j.IWg.TEXTAREA_FOCUS]: O.c,
    [j.IWg.MARK_CHANNEL_READ]: A.D,
    [j.IWg.MARK_SERVER_READ]: I.P,
    [j.IWg.TOGGLE_CHANNEL_PINS]: U.O,
    [j.IWg.TOGGLE_FOR_LATER]: y.K,
    [j.IWg.TOGGLE_INBOX]: P.q,
    [j.IWg.MARK_TOP_INBOX_CHANNEL_READ]: P.O,
    [j.IWg.TOGGLE_USERS]: M.U,
    [j.IWg.TOGGLE_HELP]: v.x,
    [j.IWg.VIBE_WITH_WUMPUS]: w.y,
    [j.IWg.TOGGLE_MUTE]: R.VT,
    [j.IWg.TOGGLE_DEAFEN]: R.rR,
    [j.IWg.TOGGLE_CATEGORY_COLLAPSED]: G.y,
    [j.IWg.SEARCH_SOUNDBOARD]: m.A,
    [j.IWg.SCROLL_UP]: S.U5,
    [j.IWg.SCROLL_DOWN]: S.fz,
    [j.IWg.QUICKSWITCHER_SHOW]: C.R,
    [j.IWg.CREATE_DM_GROUP]: l.X,
    [j.IWg.SEARCH_EMOJIS]: f.L,
    [j.IWg.SEARCH_GIFS]: T.T,
    [j.IWg.SEARCH_STICKERS]: b.w,
    [j.IWg.TOGGLE_HOTKEYS]: D.z,
    [j.IWg.JUMP_TO_FIRST_UNREAD]: E.s,
    [j.IWg.CREATE_GUILD]: o.$,
    [j.IWg.UPLOAD_FILE]: V.T,
    [j.IWg.RETURN_TO_AUDIO_CHANNEL]: p.u,
    [j.IWg.CALL_ACCEPT]: a.Yo,
    [j.IWg.CALL_START]: a.OX,
    [j.IWg.FOCUS_SEARCH]: _.O,
    [j.IWg.JUMP_TO_CURRENT_CALL]: c.s,
    [j.IWg.ZOOM_IN]: F.Ur,
    [j.IWg.ZOOM_OUT]: F.hU,
    [j.IWg.ZOOM_RESET]: F.O$,
    [j.IWg.OPEN_APP_DIRECTORY]: g.N,
    [j.IWg.BROWSER_DEVTOOLS]: d.i,
    [j.IWg.OPEN_CONTEXT_MENU]: h.b,
};
function z() {
    let e = [
            {
                description: B.intl.string(B.t.bx4Uyz),
                binds: K(j.IWg.SERVER_PREV, j.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: B.intl.string(B.t["+Wem6h"]),
                binds: K(j.IWg.CHANNEL_PREV, j.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: B.intl.string(B.t["+2fcdz"]),
                binds: K(j.IWg.NAVIGATE_BACK, j.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: B.intl.string(B.t.eVmj1H),
                binds: K(j.IWg.UNREAD_PREV, j.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: B.intl.string(B.t.EcqS7Y),
                binds: K(j.IWg.MENTION_CHANNEL_PREV, j.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            { description: B.intl.string(B.t["4I3pwW"]), binds: K(j.IWg.JUMP_TO_CURRENT_CALL), group: "NAVIGATION" },
            { description: B.intl.string(B.t.Bqss72), binds: K(j.IWg.TOGGLE_PREVIOUS_GUILD), group: "NAVIGATION" },
            { description: B.intl.string(B.t.yYsRlD), binds: K(j.IWg.QUICKSWITCHER_SHOW), group: "NAVIGATION" },
            { description: B.intl.string(B.t.O7ouXO), binds: K(j.IWg.CREATE_GUILD), group: "NAVIGATION", groupEnd: !0 },
            { description: B.intl.string(B.t.Lns0Fc), binds: ["mod+d"], group: "DND" },
            { description: B.intl.string(B.t.dmMqay), binds: ["up", "down"], group: "DND" },
            { description: B.intl.string(B.t["cs/HVH"]), binds: ["spacebar", "enter"], group: "DND" },
            { description: B.intl.string(B.t["1ioMJQ"]), binds: ["esc"], group: "DND", groupEnd: !0 },
            { description: B.intl.string(B.t.UaXAPx), binds: K(j.IWg.MARK_SERVER_READ), group: "CHAT" },
            { description: B.intl.string(B.t["5X9vFj"]), binds: K(j.IWg.MARK_CHANNEL_READ), group: "CHAT" },
            { description: B.intl.string(B.t.wxQFsl), binds: K(j.IWg.CREATE_DM_GROUP), group: "CHAT" },
            { description: B.intl.string(B.t["C+XV7f"]), binds: K(j.IWg.TOGGLE_CHANNEL_PINS), group: "CHAT" },
            { description: B.intl.string(B.t["Q+YV/T"]), binds: K(j.IWg.TOGGLE_INBOX), group: "CHAT" },
            { description: B.intl.string(B.t["YEjV+W"]), binds: K(j.IWg.MARK_TOP_INBOX_CHANNEL_READ), group: "CHAT" },
            { description: B.intl.string(B.t.AcBI9S), binds: K(j.IWg.TOGGLE_USERS), group: "CHAT" },
            { description: B.intl.string(B.t.JoxNnl), binds: K(j.IWg.SEARCH_EMOJIS), group: "CHAT" },
            { description: B.intl.string(B.t["3PHxo8"]), binds: K(j.IWg.SEARCH_GIFS), group: "CHAT" },
            { description: B.intl.string(B.t.YFl7eb), binds: K(j.IWg.SEARCH_STICKERS), group: "CHAT" },
            { description: B.intl.string(B.t.L3RYYJ), binds: K(j.IWg.SCROLL_UP, j.IWg.SCROLL_DOWN), group: "CHAT" },
            { description: B.intl.string(B.t["3HAurM"]), binds: K(j.IWg.JUMP_TO_FIRST_UNREAD), group: "CHAT" },
            { description: B.intl.string(B.t.rrYBEu), binds: K(j.IWg.TEXTAREA_FOCUS), group: "CHAT" },
            { description: B.intl.string(B.t.sUJlPL), binds: K(j.IWg.UPLOAD_FILE), group: "CHAT", groupEnd: !0 },
            { description: B.intl.string(B.t.tL6eVW), binds: K(j.IWg.TOGGLE_MUTE), group: "VOICE_AND_VIDEO" },
            { description: B.intl.string(B.t["QXe/7T"]), binds: K(j.IWg.TOGGLE_DEAFEN), group: "VOICE_AND_VIDEO" },
            { description: B.intl.string(B.t.d6UIii), binds: K(j.IWg.CALL_ACCEPT), group: "VOICE_AND_VIDEO" },
            { description: B.intl.string(B.t.IcEW06), binds: K(j.IWg.MARK_CHANNEL_READ), group: "VOICE_AND_VIDEO" },
            {
                description: B.intl.string(B.t.WN2dsS),
                binds: K(j.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            { description: B.intl.string(B.t.rUK0kk), binds: K(j.IWg.SEARCH_SOUNDBOARD), group: "VOICE_AND_VIDEO" },
            { description: B.intl.string(B.t.vkGkSn), binds: K(j.IWg.TOGGLE_HELP), group: "MISCELLANEOUS" },
            { description: B.intl.string(B.t.FJvZ87), binds: K(j.IWg.FOCUS_SEARCH), group: "MISCELLANEOUS" },
            { description: B.intl.string(B.t["FiWl/T"]), binds: K(j.IWg.OPEN_CONTEXT_MENU), group: "MISCELLANEOUS" },
            { description: B.intl.string(B.t.HnNtEI), binds: ["h+h+right+n+k"], group: "MISCELLANEOUS", groupEnd: !0 },
            { description: B.intl.string(B.t.fsBWmS), binds: ["e"], group: "MESSAGE" },
            { description: B.intl.string(B.t.xwMqD7), binds: ["backspace"], group: "MESSAGE" },
            { description: B.intl.string(B.t.CvQ18w), binds: ["p"], group: "MESSAGE" },
            { description: B.intl.string(B.t.lfIHs4), binds: ["plus"], group: "MESSAGE" },
            { description: B.intl.string(B.t["5IEsGx"]), binds: ["r"], group: "MESSAGE" },
            { description: B.intl.string(B.t.zSyDdA), binds: ["f"], group: "MESSAGE" },
            { description: B.intl.string(B.t.yGLjXF), binds: ["s"], group: "MESSAGE" },
            { description: B.intl.string(B.t.JrGD7E), binds: ["mod+c"], group: "MESSAGE" },
            { description: B.intl.string(B.t.RpE9k7), binds: ["alt+enter"], group: "MESSAGE" },
            { description: B.intl.string(B.t.rrYBEu), binds: ["escape"], group: "MESSAGE", groupEnd: !0 },
            { description: B.intl.string(B.t.z9c6mt), binds: K(j.IWg.VIBE_WITH_WUMPUS), group: "MISCELLANEOUS" },
        ],
        { enabled: t, inInbox: n } = r.A.getConfig({ location: "keybinds" });
    return (
        t && !n && e.push({ description: B.intl.string(B.t.IWNSoH), binds: K(j.IWg.TOGGLE_FOR_LATER), group: "CHAT" }),
        e
    );
}
let X = 21552 == n.j ? Y : null;
