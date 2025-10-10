n.d(t, {
    Sr: () => x,
    Xq: () => C,
    Zg: () => E,
}),
    n(415506);
var r = n(186070),
    i = n(185514),
    l = n(360038),
    o = n(175724),
    a = n(705371),
    s = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    p = n(679080),
    h = n(510761),
    f = n(189509),
    g = n(886077),
    m = n(280492),
    b = n(746887),
    _ = n(721383),
    y = n(743810),
    O = n(981631),
    v = n(388032);
function j() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = x[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let x = {
        [O.EkH.SERVER_NEXT]: h.nq,
        [O.EkH.SERVER_PREV]: h.X3,
        [O.EkH.CHANNEL_NEXT]: i.tQ,
        [O.EkH.CHANNEL_PREV]: i.x5,
        [O.EkH.NAVIGATE_BACK]: i.Nx,
        [O.EkH.NAVIGATE_FORWARD]: i.On,
        [O.EkH.UNREAD_NEXT]: y.pd,
        [O.EkH.UNREAD_PREV]: y.wk,
        [O.EkH.MENTION_CHANNEL_NEXT]: y.Nv,
        [O.EkH.MENTION_CHANNEL_PREV]: y.uX,
        [O.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [O.EkH.JUMP_TO_GUILD]: l.u,
        [O.EkH.SUBMIT]: f.z,
        [O.EkH.TEXTAREA_FOCUS]: g.U,
        [O.EkH.MARK_CHANNEL_READ]: o.f,
        [O.EkH.MARK_SERVER_READ]: a.l,
        [O.EkH.TOGGLE_MUTE]: m.iN,
        [O.EkH.TOGGLE_DEAFEN]: m.oV,
        [O.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [O.EkH.SCROLL_UP]: d.B2,
        [O.EkH.SCROLL_DOWN]: d.gN,
        [O.EkH.SEARCH_EMOJIS]: p.S,
        [O.EkH.TOGGLE_HOTKEYS]: _._,
        [O.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [O.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [O.EkH.CALL_ACCEPT]: r.IL,
        [O.EkH.CALL_START]: r.FI,
        [O.EkH.QUICKSWITCHER_SHOW]: c.$,
    },
    C = { [O.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: v.intl.string(v.t.bx4Uy8),
            binds: j(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT),
        },
        {
            description: v.intl.string(v.t["+Wem6u"]),
            binds: j(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT),
        },
        {
            description: v.intl.string(v.t["+2fcd3"]),
            binds: j(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD),
        },
        {
            description: v.intl.string(v.t.eVmj1N),
            binds: j(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT),
        },
        {
            description: v.intl.string(v.t.EcqS7e),
            binds: j(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        {
            description: v.intl.string(v.t["Bqss7+"]),
            binds: j(O.EkH.TOGGLE_PREVIOUS_GUILD),
        },
        {
            description: v.intl.string(v.t.UaXAPz),
            binds: j(O.EkH.MARK_SERVER_READ),
        },
        {
            description: v.intl.string(v.t["5X9vFh"]),
            binds: j(O.EkH.MARK_CHANNEL_READ),
        },
        {
            description: v.intl.string(v.t.JoxNnp),
            binds: j(O.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
        },
        {
            description: v.intl.string(v.t.tL6eVV),
            binds: j(O.EkH.TOGGLE_MUTE),
        },
        {
            description: v.intl.string(v.t["QXe/7e"]),
            binds: j(O.EkH.TOGGLE_DEAFEN),
        },
        {
            description: v.intl.string(v.t.d6UIio),
            binds: j(O.EkH.CALL_ACCEPT),
        },
        {
            description: v.intl.string(v.t.IcEW09),
            binds: j(O.EkH.MARK_CHANNEL_READ),
        },
        {
            description: v.intl.string(v.t.WN2dsb),
            binds: j(O.EkH.CALL_START),
            groupEnd: !0,
        },
        {
            description: v.intl.string(v.t.L3RYYG),
            binds: j(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN),
        },
        {
            description: v.intl.string(v.t["3HAurK"]),
            binds: j(O.EkH.JUMP_TO_FIRST_UNREAD),
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: j(O.EkH.TEXTAREA_FOCUS),
        },
        {
            description: v.intl.string(v.t.yYsRlJ),
            binds: j(O.EkH.QUICKSWITCHER_SHOW),
        },
    ];
}
