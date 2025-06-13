n.d(t, {
    Sr: () => j,
    Xq: () => S,
    Zg: () => x
}),
    n(415506);
var r = n(186070),
    i = n(185514),
    l = n(360038),
    o = n(175724),
    s = n(705371),
    a = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    p = n(908552),
    f = n(189509),
    g = n(673553),
    m = n(280492),
    b = n(746887),
    y = n(721383),
    O = n(743810),
    _ = n(981631),
    v = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = j[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let j = {
        [_.EkH.SERVER_NEXT]: p.nq,
        [_.EkH.SERVER_PREV]: p.X3,
        [_.EkH.CHANNEL_NEXT]: i.tQ,
        [_.EkH.CHANNEL_PREV]: i.x5,
        [_.EkH.NAVIGATE_BACK]: i.Nx,
        [_.EkH.NAVIGATE_FORWARD]: i.On,
        [_.EkH.UNREAD_NEXT]: O.pd,
        [_.EkH.UNREAD_PREV]: O.wk,
        [_.EkH.MENTION_CHANNEL_NEXT]: O.Nv,
        [_.EkH.MENTION_CHANNEL_PREV]: O.uX,
        [_.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [_.EkH.JUMP_TO_GUILD]: l.u,
        [_.EkH.SUBMIT]: f.z,
        [_.EkH.TEXTAREA_FOCUS]: g.U,
        [_.EkH.MARK_CHANNEL_READ]: o.f,
        [_.EkH.MARK_SERVER_READ]: s.l,
        [_.EkH.TOGGLE_MUTE]: m.iN,
        [_.EkH.TOGGLE_DEAFEN]: m.oV,
        [_.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [_.EkH.SCROLL_UP]: d.B2,
        [_.EkH.SCROLL_DOWN]: d.gN,
        [_.EkH.SEARCH_EMOJIS]: h.S,
        [_.EkH.TOGGLE_HOTKEYS]: y._,
        [_.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [_.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [_.EkH.CALL_ACCEPT]: r.IL,
        [_.EkH.CALL_START]: r.FI,
        [_.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    S = { [_.EkH.QUICKSWITCHER_SHOW]: c.$ };
function x() {
    return [
        {
            description: v.intl.string(v.t.bx4Uy8),
            binds: C(_.EkH.SERVER_PREV, _.EkH.SERVER_NEXT)
        },
        {
            description: v.intl.string(v.t['+Wem6u']),
            binds: C(_.EkH.CHANNEL_PREV, _.EkH.CHANNEL_NEXT)
        },
        {
            description: v.intl.string(v.t['+2fcd3']),
            binds: C(_.EkH.NAVIGATE_BACK, _.EkH.NAVIGATE_FORWARD)
        },
        {
            description: v.intl.string(v.t.eVmj1N),
            binds: C(_.EkH.UNREAD_PREV, _.EkH.UNREAD_NEXT)
        },
        {
            description: v.intl.string(v.t.EcqS7e),
            binds: C(_.EkH.MENTION_CHANNEL_PREV, _.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t['Bqss7+']),
            binds: C(_.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: v.intl.string(v.t.UaXAPz),
            binds: C(_.EkH.MARK_SERVER_READ)
        },
        {
            description: v.intl.string(v.t['5X9vFh']),
            binds: C(_.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.JoxNnp),
            binds: C(_.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.tL6eVV),
            binds: C(_.EkH.TOGGLE_MUTE)
        },
        {
            description: v.intl.string(v.t['QXe/7e']),
            binds: C(_.EkH.TOGGLE_DEAFEN)
        },
        {
            description: v.intl.string(v.t.d6UIio),
            binds: C(_.EkH.CALL_ACCEPT)
        },
        {
            description: v.intl.string(v.t.IcEW09),
            binds: C(_.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.WN2dsb),
            binds: C(_.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.L3RYYG),
            binds: C(_.EkH.SCROLL_UP, _.EkH.SCROLL_DOWN)
        },
        {
            description: v.intl.string(v.t['3HAurK']),
            binds: C(_.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: C(_.EkH.TEXTAREA_FOCUS)
        },
        {
            description: v.intl.string(v.t.yYsRlJ),
            binds: C(_.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
