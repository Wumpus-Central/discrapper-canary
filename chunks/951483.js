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
    O = n(721383),
    y = n(743810),
    _ = n(981631),
    j = n(388032);
function v() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = x[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let x = {
        [_.EkH.SERVER_NEXT]: h.nq,
        [_.EkH.SERVER_PREV]: h.X3,
        [_.EkH.CHANNEL_NEXT]: i.tQ,
        [_.EkH.CHANNEL_PREV]: i.x5,
        [_.EkH.NAVIGATE_BACK]: i.Nx,
        [_.EkH.NAVIGATE_FORWARD]: i.On,
        [_.EkH.UNREAD_NEXT]: y.pd,
        [_.EkH.UNREAD_PREV]: y.wk,
        [_.EkH.MENTION_CHANNEL_NEXT]: y.Nv,
        [_.EkH.MENTION_CHANNEL_PREV]: y.uX,
        [_.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [_.EkH.JUMP_TO_GUILD]: l.u,
        [_.EkH.SUBMIT]: f.z,
        [_.EkH.TEXTAREA_FOCUS]: g.U,
        [_.EkH.MARK_CHANNEL_READ]: o.f,
        [_.EkH.MARK_SERVER_READ]: a.l,
        [_.EkH.TOGGLE_MUTE]: m.iN,
        [_.EkH.TOGGLE_DEAFEN]: m.oV,
        [_.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [_.EkH.SCROLL_UP]: d.B2,
        [_.EkH.SCROLL_DOWN]: d.gN,
        [_.EkH.SEARCH_EMOJIS]: p.S,
        [_.EkH.TOGGLE_HOTKEYS]: O._,
        [_.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [_.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [_.EkH.CALL_ACCEPT]: r.IL,
        [_.EkH.CALL_START]: r.FI,
        [_.EkH.QUICKSWITCHER_SHOW]: c.$,
    },
    C = { [_.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: j.intl.string(j.t.bx4Uy8),
            binds: v(_.EkH.SERVER_PREV, _.EkH.SERVER_NEXT),
        },
        {
            description: j.intl.string(j.t["+Wem6u"]),
            binds: v(_.EkH.CHANNEL_PREV, _.EkH.CHANNEL_NEXT),
        },
        {
            description: j.intl.string(j.t["+2fcd3"]),
            binds: v(_.EkH.NAVIGATE_BACK, _.EkH.NAVIGATE_FORWARD),
        },
        {
            description: j.intl.string(j.t.eVmj1N),
            binds: v(_.EkH.UNREAD_PREV, _.EkH.UNREAD_NEXT),
        },
        {
            description: j.intl.string(j.t.EcqS7e),
            binds: v(_.EkH.MENTION_CHANNEL_PREV, _.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t["Bqss7+"]),
            binds: v(_.EkH.TOGGLE_PREVIOUS_GUILD),
        },
        {
            description: j.intl.string(j.t.UaXAPz),
            binds: v(_.EkH.MARK_SERVER_READ),
        },
        {
            description: j.intl.string(j.t["5X9vFh"]),
            binds: v(_.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.JoxNnp),
            binds: v(_.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.tL6eVV),
            binds: v(_.EkH.TOGGLE_MUTE),
        },
        {
            description: j.intl.string(j.t["QXe/7e"]),
            binds: v(_.EkH.TOGGLE_DEAFEN),
        },
        {
            description: j.intl.string(j.t.d6UIio),
            binds: v(_.EkH.CALL_ACCEPT),
        },
        {
            description: j.intl.string(j.t.IcEW09),
            binds: v(_.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.WN2dsb),
            binds: v(_.EkH.CALL_START),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.L3RYYG),
            binds: v(_.EkH.SCROLL_UP, _.EkH.SCROLL_DOWN),
        },
        {
            description: j.intl.string(j.t["3HAurK"]),
            binds: v(_.EkH.JUMP_TO_FIRST_UNREAD),
        },
        {
            description: j.intl.string(j.t.rrYBEh),
            binds: v(_.EkH.TEXTAREA_FOCUS),
        },
        {
            description: j.intl.string(j.t.yYsRlJ),
            binds: v(_.EkH.QUICKSWITCHER_SHOW),
        },
    ];
}
