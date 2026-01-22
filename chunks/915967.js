n.d(t, {
    Ay: () => z,
    Bx: () => K,
    Gm: () => B,
    Q_: () => F,
    zF: () => H,
    zR: () => W,
}),
    n(65821),
    n(321073);
var r = n(966597),
    i = n(774603),
    a = n(430086),
    s = n(394318),
    o = n(303757),
    l = n(830004),
    c = n(434728),
    u = n(308494),
    d = n(64460),
    f = n(92960),
    p = n(739008),
    _ = n(314519),
    h = n(198168),
    m = n(799592),
    g = n(675704),
    E = n(806964),
    b = n(552049),
    y = n(877991),
    O = n(332779),
    A = n(187521),
    v = n(568765),
    S = n(904828),
    I = n(251494),
    T = n(82038),
    C = n(14214),
    N = n(151199),
    R = n(144353),
    w = n(535527),
    P = n(46647),
    D = n(512513),
    x = n(910492),
    L = n(416092),
    j = n(801796),
    M = n(344731),
    k = n(58841),
    U = n(406975),
    G = n(652215),
    V = n(985018),
    F = (function (e) {
        return (
            (e.NAVIGATION = "NAVIGATION"),
            (e.CHAT = "CHAT"),
            (e.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
            (e.MISCELLANEOUS = "MISCELLANEOUS"),
            (e.MESSAGE = "MESSAGE"),
            (e.DND = "DND"),
            e
        );
    })({});
function B(e) {
    switch (e) {
        case "NAVIGATION":
            return V.intl.string(V.t["yGE+jg"]);
        case "VOICE_AND_VIDEO":
            return V.intl.string(V.t.bI8F5u);
        case "CHAT":
            return V.intl.string(V.t.hDhbb3);
        case "MISCELLANEOUS":
            return V.intl.string(V.t.cBdwqs);
        case "MESSAGE":
            return V.intl.string(V.t["5fpmX9"]);
        case "DND":
            return V.intl.string(V.t["69j6+4"]);
    }
}
function H(e) {
    switch (e) {
        case "MESSAGE":
            return V.intl.string(V.t.iepGDn);
        case "DND":
            return V.intl.string(V.t.LBsB0a);
        default:
            return;
    }
}
function Y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = W[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let W = {
    [G.IWg.SERVER_NEXT]: S.yx,
    [G.IWg.SERVER_PREV]: S.yv,
    [G.IWg.CHANNEL_NEXT]: a.kF,
    [G.IWg.CHANNEL_PREV]: a.Oc,
    [G.IWg.NAVIGATE_BACK]: a.GY,
    [G.IWg.NAVIGATE_FORWARD]: a.M$,
    [G.IWg.UNREAD_NEXT]: j.mH,
    [G.IWg.UNREAD_PREV]: j.US,
    [G.IWg.MENTION_CHANNEL_NEXT]: j.BD,
    [G.IWg.MENTION_CHANNEL_PREV]: j.X8,
    [G.IWg.TOGGLE_PREVIOUS_GUILD]: a.Fv,
    [G.IWg.JUMP_TO_GUILD]: d.J,
    [G.IWg.SUBMIT]: I.X,
    [G.IWg.TEXTAREA_FOCUS]: T.c,
    [G.IWg.MARK_CHANNEL_READ]: f.D,
    [G.IWg.MARK_SERVER_READ]: p.P,
    [G.IWg.TOGGLE_CHANNEL_PINS]: R.O,
    [G.IWg.TOGGLE_FOR_LATER]: w.K,
    [G.IWg.TOGGLE_INBOX]: x.q,
    [G.IWg.MARK_TOP_INBOX_CHANNEL_READ]: x.O,
    [G.IWg.TOGGLE_USERS]: L.U,
    [G.IWg.TOGGLE_HELP]: P.x,
    [G.IWg.VIBE_WITH_WUMPUS]: k.y,
    [G.IWg.TOGGLE_MUTE]: C.VT,
    [G.IWg.TOGGLE_DEAFEN]: C.rR,
    [G.IWg.TOGGLE_CATEGORY_COLLAPSED]: N.y,
    [G.IWg.SEARCH_SOUNDBOARD]: A.A,
    [G.IWg.SCROLL_UP]: b.U5,
    [G.IWg.SCROLL_DOWN]: b.fz,
    [G.IWg.QUICKSWITCHER_SHOW]: g.R,
    [G.IWg.CREATE_DM_GROUP]: s.X,
    [G.IWg.SEARCH_EMOJIS]: y.L,
    [G.IWg.SEARCH_GIFS]: O.T,
    [G.IWg.SEARCH_STICKERS]: v.w,
    [G.IWg.TOGGLE_HOTKEYS]: D.z,
    [G.IWg.JUMP_TO_FIRST_UNREAD]: _.s,
    [G.IWg.CREATE_GUILD]: o.$,
    [G.IWg.UPLOAD_FILE]: M.T,
    [G.IWg.RETURN_TO_AUDIO_CHANNEL]: E.u,
    [G.IWg.CALL_ACCEPT]: i.Yo,
    [G.IWg.CALL_START]: i.OX,
    [G.IWg.FOCUS_SEARCH]: c.O,
    [G.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [G.IWg.ZOOM_IN]: U.Ur,
    [G.IWg.ZOOM_OUT]: U.hU,
    [G.IWg.ZOOM_RESET]: U.O$,
    [G.IWg.OPEN_APP_DIRECTORY]: h.N,
    [G.IWg.BROWSER_DEVTOOLS]: l.i,
    [G.IWg.OPEN_CONTEXT_MENU]: m.b,
};
function K() {
    let e = [
            {
                description: V.intl.string(V.t.bx4Uyz),
                binds: Y(G.IWg.SERVER_PREV, G.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t["+Wem6h"]),
                binds: Y(G.IWg.CHANNEL_PREV, G.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t["+2fcdz"]),
                binds: Y(G.IWg.NAVIGATE_BACK, G.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t.eVmj1H),
                binds: Y(G.IWg.UNREAD_PREV, G.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t.EcqS7Y),
                binds: Y(G.IWg.MENTION_CHANNEL_PREV, G.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t["4I3pwW"]),
                binds: Y(G.IWg.JUMP_TO_CURRENT_CALL),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t.Bqss72),
                binds: Y(G.IWg.TOGGLE_PREVIOUS_GUILD),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t.yYsRlD),
                binds: Y(G.IWg.QUICKSWITCHER_SHOW),
                group: "NAVIGATION",
            },
            {
                description: V.intl.string(V.t.O7ouXO),
                binds: Y(G.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.Lns0Fc),
                binds: ["mod+d"],
                group: "DND",
            },
            {
                description: V.intl.string(V.t.dmMqay),
                binds: ["up", "down"],
                group: "DND",
            },
            {
                description: V.intl.string(V.t["cs/HVH"]),
                binds: ["spacebar", "enter"],
                group: "DND",
            },
            {
                description: V.intl.string(V.t["1ioMJQ"]),
                binds: ["esc"],
                group: "DND",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.UaXAPx),
                binds: Y(G.IWg.MARK_SERVER_READ),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["5X9vFj"]),
                binds: Y(G.IWg.MARK_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.wxQFsl),
                binds: Y(G.IWg.CREATE_DM_GROUP),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["C+XV7f"]),
                binds: Y(G.IWg.TOGGLE_CHANNEL_PINS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["Q+YV/T"]),
                binds: Y(G.IWg.TOGGLE_INBOX),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["YEjV+W"]),
                binds: Y(G.IWg.MARK_TOP_INBOX_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.AcBI9S),
                binds: Y(G.IWg.TOGGLE_USERS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.JoxNnl),
                binds: Y(G.IWg.SEARCH_EMOJIS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["3PHxo8"]),
                binds: Y(G.IWg.SEARCH_GIFS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.YFl7eb),
                binds: Y(G.IWg.SEARCH_STICKERS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.L3RYYJ),
                binds: Y(G.IWg.SCROLL_UP, G.IWg.SCROLL_DOWN),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t["3HAurM"]),
                binds: Y(G.IWg.JUMP_TO_FIRST_UNREAD),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.rrYBEu),
                binds: Y(G.IWg.TEXTAREA_FOCUS),
                group: "CHAT",
            },
            {
                description: V.intl.string(V.t.sUJlPL),
                binds: Y(G.IWg.UPLOAD_FILE),
                group: "CHAT",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.tL6eVW),
                binds: Y(G.IWg.TOGGLE_MUTE),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: V.intl.string(V.t["QXe/7T"]),
                binds: Y(G.IWg.TOGGLE_DEAFEN),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: V.intl.string(V.t.d6UIii),
                binds: Y(G.IWg.CALL_ACCEPT),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: V.intl.string(V.t.IcEW06),
                binds: Y(G.IWg.MARK_CHANNEL_READ),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: V.intl.string(V.t.WN2dsS),
                binds: Y(G.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.rUK0kk),
                binds: Y(G.IWg.SEARCH_SOUNDBOARD),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: V.intl.string(V.t.vkGkSn),
                binds: Y(G.IWg.TOGGLE_HELP),
                group: "MISCELLANEOUS",
            },
            {
                description: V.intl.string(V.t.FJvZ87),
                binds: Y(G.IWg.FOCUS_SEARCH),
                group: "MISCELLANEOUS",
            },
            {
                description: V.intl.string(V.t["FiWl/T"]),
                binds: Y(G.IWg.OPEN_CONTEXT_MENU),
                group: "MISCELLANEOUS",
            },
            {
                description: V.intl.string(V.t.HnNtEI),
                binds: ["h+h+right+n+k"],
                group: "MISCELLANEOUS",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.fsBWmS),
                binds: ["e"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.xwMqD7),
                binds: ["backspace"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.CvQ18w),
                binds: ["p"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.lfIHs4),
                binds: ["plus"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t["5IEsGx"]),
                binds: ["r"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.zSyDdA),
                binds: ["f"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.yGLjXF),
                binds: ["s"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.JrGD7E),
                binds: ["mod+c"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.RpE9k7),
                binds: ["alt+enter"],
                group: "MESSAGE",
            },
            {
                description: V.intl.string(V.t.rrYBEu),
                binds: ["escape"],
                group: "MESSAGE",
                groupEnd: !0,
            },
            {
                description: V.intl.string(V.t.z9c6mt),
                binds: Y(G.IWg.VIBE_WITH_WUMPUS),
                group: "MISCELLANEOUS",
            },
        ],
        { enabled: t, inInbox: n } = r.A.getCurrentConfig({ location: "keybinds" }, { autoTrackExposure: !1 });
    return (
        t &&
            !n &&
            e.push({
                description: V.intl.string(V.t.IWNSoH),
                binds: Y(G.IWg.TOGGLE_FOR_LATER),
                group: "CHAT",
            }),
        e
    );
}
let z = W;
