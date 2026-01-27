n.d(t, {
    Ay: () => Z,
    Bx: () => K,
    Gm: () => F,
    Q_: () => B,
    zF: () => Y,
    zR: () => z,
}),
    n(65821),
    n(321073);
var r,
    i = n(966597),
    l = n(774603),
    s = n(430086),
    a = n(394318),
    o = n(303757),
    c = n(830004),
    d = n(434728),
    u = n(308494),
    _ = n(64460),
    p = n(92960),
    m = n(739008),
    g = n(314519),
    A = n(198168),
    f = n(799592),
    h = n(675704),
    b = n(806964),
    E = n(552049),
    x = n(877991),
    O = n(332779),
    C = n(187521),
    I = n(568765),
    T = n(904828),
    S = n(251494),
    j = n(82038),
    v = n(14214),
    N = n(151199),
    y = n(144353),
    P = n(535527),
    R = n(46647),
    D = n(512513),
    w = n(910492),
    L = n(416092),
    M = n(801796),
    U = n(344731),
    G = n(58841),
    k = n(406975),
    V = n(652215),
    H = n(985018),
    B =
        (((r = {}).NAVIGATION = "NAVIGATION"),
        (r.CHAT = "CHAT"),
        (r.VOICE_AND_VIDEO = "VOICE_AND_VIDEO"),
        (r.MISCELLANEOUS = "MISCELLANEOUS"),
        (r.MESSAGE = "MESSAGE"),
        (r.DND = "DND"),
        r);

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
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let z = {
    [V.IWg.SERVER_NEXT]: T.yx,
    [V.IWg.SERVER_PREV]: T.yv,
    [V.IWg.CHANNEL_NEXT]: s.kF,
    [V.IWg.CHANNEL_PREV]: s.Oc,
    [V.IWg.NAVIGATE_BACK]: s.GY,
    [V.IWg.NAVIGATE_FORWARD]: s.M$,
    [V.IWg.UNREAD_NEXT]: M.mH,
    [V.IWg.UNREAD_PREV]: M.US,
    [V.IWg.MENTION_CHANNEL_NEXT]: M.BD,
    [V.IWg.MENTION_CHANNEL_PREV]: M.X8,
    [V.IWg.TOGGLE_PREVIOUS_GUILD]: s.Fv,
    [V.IWg.JUMP_TO_GUILD]: _.J,
    [V.IWg.SUBMIT]: S.X,
    [V.IWg.TEXTAREA_FOCUS]: j.c,
    [V.IWg.MARK_CHANNEL_READ]: p.D,
    [V.IWg.MARK_SERVER_READ]: m.P,
    [V.IWg.TOGGLE_CHANNEL_PINS]: y.O,
    [V.IWg.TOGGLE_FOR_LATER]: P.K,
    [V.IWg.TOGGLE_INBOX]: w.q,
    [V.IWg.MARK_TOP_INBOX_CHANNEL_READ]: w.O,
    [V.IWg.TOGGLE_USERS]: L.U,
    [V.IWg.TOGGLE_HELP]: R.x,
    [V.IWg.VIBE_WITH_WUMPUS]: G.y,
    [V.IWg.TOGGLE_MUTE]: v.VT,
    [V.IWg.TOGGLE_DEAFEN]: v.rR,
    [V.IWg.TOGGLE_CATEGORY_COLLAPSED]: N.y,
    [V.IWg.SEARCH_SOUNDBOARD]: C.A,
    [V.IWg.SCROLL_UP]: E.U5,
    [V.IWg.SCROLL_DOWN]: E.fz,
    [V.IWg.QUICKSWITCHER_SHOW]: h.R,
    [V.IWg.CREATE_DM_GROUP]: a.X,
    [V.IWg.SEARCH_EMOJIS]: x.L,
    [V.IWg.SEARCH_GIFS]: O.T,
    [V.IWg.SEARCH_STICKERS]: I.w,
    [V.IWg.TOGGLE_HOTKEYS]: D.z,
    [V.IWg.JUMP_TO_FIRST_UNREAD]: g.s,
    [V.IWg.CREATE_GUILD]: o.$,
    [V.IWg.UPLOAD_FILE]: U.T,
    [V.IWg.RETURN_TO_AUDIO_CHANNEL]: b.u,
    [V.IWg.CALL_ACCEPT]: l.Yo,
    [V.IWg.CALL_START]: l.OX,
    [V.IWg.FOCUS_SEARCH]: d.O,
    [V.IWg.JUMP_TO_CURRENT_CALL]: u.s,
    [V.IWg.ZOOM_IN]: k.Ur,
    [V.IWg.ZOOM_OUT]: k.hU,
    [V.IWg.ZOOM_RESET]: k.O$,
    [V.IWg.OPEN_APP_DIRECTORY]: A.N,
    [V.IWg.BROWSER_DEVTOOLS]: c.i,
    [V.IWg.OPEN_CONTEXT_MENU]: f.b,
};

function K() {
    let e = [
            {
                description: H.intl.string(H.t.bx4Uyz),
                binds: W(V.IWg.SERVER_PREV, V.IWg.SERVER_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t["+Wem6h"]),
                binds: W(V.IWg.CHANNEL_PREV, V.IWg.CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t["+2fcdz"]),
                binds: W(V.IWg.NAVIGATE_BACK, V.IWg.NAVIGATE_FORWARD),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.eVmj1H),
                binds: W(V.IWg.UNREAD_PREV, V.IWg.UNREAD_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.EcqS7Y),
                binds: W(V.IWg.MENTION_CHANNEL_PREV, V.IWg.MENTION_CHANNEL_NEXT),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t["4I3pwW"]),
                binds: W(V.IWg.JUMP_TO_CURRENT_CALL),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.Bqss72),
                binds: W(V.IWg.TOGGLE_PREVIOUS_GUILD),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.yYsRlD),
                binds: W(V.IWg.QUICKSWITCHER_SHOW),
                group: "NAVIGATION",
            },
            {
                description: H.intl.string(H.t.O7ouXO),
                binds: W(V.IWg.CREATE_GUILD),
                group: "NAVIGATION",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.Lns0Fc),
                binds: ["mod+d"],
                group: "DND",
            },
            {
                description: H.intl.string(H.t.dmMqay),
                binds: ["up", "down"],
                group: "DND",
            },
            {
                description: H.intl.string(H.t["cs/HVH"]),
                binds: ["spacebar", "enter"],
                group: "DND",
            },
            {
                description: H.intl.string(H.t["1ioMJQ"]),
                binds: ["esc"],
                group: "DND",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.UaXAPx),
                binds: W(V.IWg.MARK_SERVER_READ),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["5X9vFj"]),
                binds: W(V.IWg.MARK_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.wxQFsl),
                binds: W(V.IWg.CREATE_DM_GROUP),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["C+XV7f"]),
                binds: W(V.IWg.TOGGLE_CHANNEL_PINS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["Q+YV/T"]),
                binds: W(V.IWg.TOGGLE_INBOX),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["YEjV+W"]),
                binds: W(V.IWg.MARK_TOP_INBOX_CHANNEL_READ),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.AcBI9S),
                binds: W(V.IWg.TOGGLE_USERS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.JoxNnl),
                binds: W(V.IWg.SEARCH_EMOJIS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["3PHxo8"]),
                binds: W(V.IWg.SEARCH_GIFS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.YFl7eb),
                binds: W(V.IWg.SEARCH_STICKERS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.L3RYYJ),
                binds: W(V.IWg.SCROLL_UP, V.IWg.SCROLL_DOWN),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t["3HAurM"]),
                binds: W(V.IWg.JUMP_TO_FIRST_UNREAD),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.rrYBEu),
                binds: W(V.IWg.TEXTAREA_FOCUS),
                group: "CHAT",
            },
            {
                description: H.intl.string(H.t.sUJlPL),
                binds: W(V.IWg.UPLOAD_FILE),
                group: "CHAT",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.tL6eVW),
                binds: W(V.IWg.TOGGLE_MUTE),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: H.intl.string(H.t["QXe/7T"]),
                binds: W(V.IWg.TOGGLE_DEAFEN),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: H.intl.string(H.t.d6UIii),
                binds: W(V.IWg.CALL_ACCEPT),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: H.intl.string(H.t.IcEW06),
                binds: W(V.IWg.MARK_CHANNEL_READ),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: H.intl.string(H.t.WN2dsS),
                binds: W(V.IWg.CALL_START),
                group: "VOICE_AND_VIDEO",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.rUK0kk),
                binds: W(V.IWg.SEARCH_SOUNDBOARD),
                group: "VOICE_AND_VIDEO",
            },
            {
                description: H.intl.string(H.t.vkGkSn),
                binds: W(V.IWg.TOGGLE_HELP),
                group: "MISCELLANEOUS",
            },
            {
                description: H.intl.string(H.t.FJvZ87),
                binds: W(V.IWg.FOCUS_SEARCH),
                group: "MISCELLANEOUS",
            },
            {
                description: H.intl.string(H.t["FiWl/T"]),
                binds: W(V.IWg.OPEN_CONTEXT_MENU),
                group: "MISCELLANEOUS",
            },
            {
                description: H.intl.string(H.t.HnNtEI),
                binds: ["h+h+right+n+k"],
                group: "MISCELLANEOUS",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.fsBWmS),
                binds: ["e"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.xwMqD7),
                binds: ["backspace"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.CvQ18w),
                binds: ["p"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.lfIHs4),
                binds: ["plus"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t["5IEsGx"]),
                binds: ["r"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.zSyDdA),
                binds: ["f"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.yGLjXF),
                binds: ["s"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.JrGD7E),
                binds: ["mod+c"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.RpE9k7),
                binds: ["alt+enter"],
                group: "MESSAGE",
            },
            {
                description: H.intl.string(H.t.rrYBEu),
                binds: ["escape"],
                group: "MESSAGE",
                groupEnd: !0,
            },
            {
                description: H.intl.string(H.t.z9c6mt),
                binds: W(V.IWg.VIBE_WITH_WUMPUS),
                group: "MISCELLANEOUS",
            },
        ],
        { enabled: t, inInbox: n } = i.A.getCurrentConfig(
            {
                location: "keybinds",
            },
            {
                autoTrackExposure: !1,
            },
        );
    return (
        t &&
            !n &&
            e.push({
                description: H.intl.string(H.t.IWNSoH),
                binds: W(V.IWg.TOGGLE_FOR_LATER),
                group: "CHAT",
            }),
        e
    );
}
let Z = 21552 == n.j ? z : null;
