n.d(t, {
    Sr: () => x,
    Xq: () => E,
    Zg: () => S,
}),
    n(415506);
var r = n(186070),
    i = n(185514),
    l = n(360038),
    a = n(175724),
    o = n(705371),
    s = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    f = n(679080),
    h = n(510761),
    p = n(189509),
    g = n(886077),
    b = n(280492),
    m = n(746887),
    y = n(721383),
    O = n(743810),
    v = n(981631),
    j = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = x[e];
        if (null == t) throw Error("getBindsFor(...): No bind for ".concat(t));
        return t.binds[0];
    });
}
let x = {
        [v.EkH.SERVER_NEXT]: h.nq,
        [v.EkH.SERVER_PREV]: h.X3,
        [v.EkH.CHANNEL_NEXT]: i.tQ,
        [v.EkH.CHANNEL_PREV]: i.x5,
        [v.EkH.NAVIGATE_BACK]: i.Nx,
        [v.EkH.NAVIGATE_FORWARD]: i.On,
        [v.EkH.UNREAD_NEXT]: O.pd,
        [v.EkH.UNREAD_PREV]: O.wk,
        [v.EkH.MENTION_CHANNEL_NEXT]: O.Nv,
        [v.EkH.MENTION_CHANNEL_PREV]: O.uX,
        [v.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [v.EkH.JUMP_TO_GUILD]: l.u,
        [v.EkH.SUBMIT]: p.z,
        [v.EkH.TEXTAREA_FOCUS]: g.U,
        [v.EkH.MARK_CHANNEL_READ]: a.f,
        [v.EkH.MARK_SERVER_READ]: o.l,
        [v.EkH.TOGGLE_MUTE]: b.iN,
        [v.EkH.TOGGLE_DEAFEN]: b.oV,
        [v.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
        [v.EkH.SCROLL_UP]: d.B2,
        [v.EkH.SCROLL_DOWN]: d.gN,
        [v.EkH.SEARCH_EMOJIS]: f.S,
        [v.EkH.TOGGLE_HOTKEYS]: y._,
        [v.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [v.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [v.EkH.CALL_ACCEPT]: r.IL,
        [v.EkH.CALL_START]: r.FI,
        [v.EkH.QUICKSWITCHER_SHOW]: c.$,
    },
    E = { [v.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: j.intl.string(j.t.bx4Uyz),
            binds: C(v.EkH.SERVER_PREV, v.EkH.SERVER_NEXT),
        },
        {
            description: j.intl.string(j.t["+Wem6h"]),
            binds: C(v.EkH.CHANNEL_PREV, v.EkH.CHANNEL_NEXT),
        },
        {
            description: j.intl.string(j.t["+2fcdz"]),
            binds: C(v.EkH.NAVIGATE_BACK, v.EkH.NAVIGATE_FORWARD),
        },
        {
            description: j.intl.string(j.t.eVmj1H),
            binds: C(v.EkH.UNREAD_PREV, v.EkH.UNREAD_NEXT),
        },
        {
            description: j.intl.string(j.t.EcqS7Y),
            binds: C(v.EkH.MENTION_CHANNEL_PREV, v.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.Bqss72),
            binds: C(v.EkH.TOGGLE_PREVIOUS_GUILD),
        },
        {
            description: j.intl.string(j.t.UaXAPx),
            binds: C(v.EkH.MARK_SERVER_READ),
        },
        {
            description: j.intl.string(j.t["5X9vFj"]),
            binds: C(v.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.JoxNnl),
            binds: C(v.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.tL6eVW),
            binds: C(v.EkH.TOGGLE_MUTE),
        },
        {
            description: j.intl.string(j.t["QXe/7T"]),
            binds: C(v.EkH.TOGGLE_DEAFEN),
        },
        {
            description: j.intl.string(j.t.d6UIii),
            binds: C(v.EkH.CALL_ACCEPT),
        },
        {
            description: j.intl.string(j.t.IcEW06),
            binds: C(v.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.WN2dsS),
            binds: C(v.EkH.CALL_START),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.L3RYYJ),
            binds: C(v.EkH.SCROLL_UP, v.EkH.SCROLL_DOWN),
        },
        {
            description: j.intl.string(j.t["3HAurM"]),
            binds: C(v.EkH.JUMP_TO_FIRST_UNREAD),
        },
        {
            description: j.intl.string(j.t.rrYBEu),
            binds: C(v.EkH.TEXTAREA_FOCUS),
        },
        {
            description: j.intl.string(j.t.yYsRlD),
            binds: C(v.EkH.QUICKSWITCHER_SHOW),
        },
    ];
}
