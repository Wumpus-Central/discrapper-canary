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
    f = n(510761),
    h = n(189509),
    g = n(886077),
    m = n(280492),
    b = n(746887),
    _ = n(721383),
    O = n(743810),
    y = n(981631),
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
        [y.EkH.SERVER_NEXT]: f.nq,
        [y.EkH.SERVER_PREV]: f.X3,
        [y.EkH.CHANNEL_NEXT]: i.tQ,
        [y.EkH.CHANNEL_PREV]: i.x5,
        [y.EkH.NAVIGATE_BACK]: i.Nx,
        [y.EkH.NAVIGATE_FORWARD]: i.On,
        [y.EkH.UNREAD_NEXT]: O.pd,
        [y.EkH.UNREAD_PREV]: O.wk,
        [y.EkH.MENTION_CHANNEL_NEXT]: O.Nv,
        [y.EkH.MENTION_CHANNEL_PREV]: O.uX,
        [y.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [y.EkH.JUMP_TO_GUILD]: l.u,
        [y.EkH.SUBMIT]: h.z,
        [y.EkH.TEXTAREA_FOCUS]: g.U,
        [y.EkH.MARK_CHANNEL_READ]: o.f,
        [y.EkH.MARK_SERVER_READ]: a.l,
        [y.EkH.TOGGLE_MUTE]: m.iN,
        [y.EkH.TOGGLE_DEAFEN]: m.oV,
        [y.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [y.EkH.SCROLL_UP]: d.B2,
        [y.EkH.SCROLL_DOWN]: d.gN,
        [y.EkH.SEARCH_EMOJIS]: p.S,
        [y.EkH.TOGGLE_HOTKEYS]: _._,
        [y.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [y.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [y.EkH.CALL_ACCEPT]: r.IL,
        [y.EkH.CALL_START]: r.FI,
        [y.EkH.QUICKSWITCHER_SHOW]: c.$,
    },
    C = { [y.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: j.intl.string(j.t.bx4Uyz),
            binds: v(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT),
        },
        {
            description: j.intl.string(j.t["+Wem6h"]),
            binds: v(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT),
        },
        {
            description: j.intl.string(j.t["+2fcdz"]),
            binds: v(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD),
        },
        {
            description: j.intl.string(j.t.eVmj1H),
            binds: v(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT),
        },
        {
            description: j.intl.string(j.t.EcqS7Y),
            binds: v(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.Bqss72),
            binds: v(y.EkH.TOGGLE_PREVIOUS_GUILD),
        },
        {
            description: j.intl.string(j.t.UaXAPx),
            binds: v(y.EkH.MARK_SERVER_READ),
        },
        {
            description: j.intl.string(j.t["5X9vFj"]),
            binds: v(y.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.JoxNnl),
            binds: v(y.EkH.SEARCH_EMOJIS),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.tL6eVW),
            binds: v(y.EkH.TOGGLE_MUTE),
        },
        {
            description: j.intl.string(j.t["QXe/7T"]),
            binds: v(y.EkH.TOGGLE_DEAFEN),
        },
        {
            description: j.intl.string(j.t.d6UIii),
            binds: v(y.EkH.CALL_ACCEPT),
        },
        {
            description: j.intl.string(j.t.IcEW06),
            binds: v(y.EkH.MARK_CHANNEL_READ),
        },
        {
            description: j.intl.string(j.t.WN2dsS),
            binds: v(y.EkH.CALL_START),
            groupEnd: !0,
        },
        {
            description: j.intl.string(j.t.L3RYYJ),
            binds: v(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN),
        },
        {
            description: j.intl.string(j.t["3HAurM"]),
            binds: v(y.EkH.JUMP_TO_FIRST_UNREAD),
        },
        {
            description: j.intl.string(j.t.rrYBEu),
            binds: v(y.EkH.TEXTAREA_FOCUS),
        },
        {
            description: j.intl.string(j.t.yYsRlD),
            binds: v(y.EkH.QUICKSWITCHER_SHOW),
        },
    ];
}
