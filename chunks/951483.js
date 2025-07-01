(n.d(t, {
    Sr: () => j,
    Xq: () => S,
    Zg: () => E
}),
    n(415506));
var r = n(186070),
    i = n(185514),
    l = n(360038),
    o = n(175724),
    a = n(705371),
    s = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    p = n(908552),
    f = n(189509),
    g = n(673553),
    m = n(280492),
    b = n(746887),
    _ = n(721383),
    O = n(743810),
    y = n(981631),
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
        [y.EkH.SERVER_NEXT]: p.nq,
        [y.EkH.SERVER_PREV]: p.X3,
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
        [y.EkH.SUBMIT]: f.z,
        [y.EkH.TEXTAREA_FOCUS]: g.U,
        [y.EkH.MARK_CHANNEL_READ]: o.f,
        [y.EkH.MARK_SERVER_READ]: a.l,
        [y.EkH.TOGGLE_MUTE]: m.iN,
        [y.EkH.TOGGLE_DEAFEN]: m.oV,
        [y.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [y.EkH.SCROLL_UP]: d.B2,
        [y.EkH.SCROLL_DOWN]: d.gN,
        [y.EkH.SEARCH_EMOJIS]: h.S,
        [y.EkH.TOGGLE_HOTKEYS]: _._,
        [y.EkH.JUMP_TO_FIRST_UNREAD]: s.O,
        [y.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [y.EkH.CALL_ACCEPT]: r.IL,
        [y.EkH.CALL_START]: r.FI,
        [y.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    S = { [y.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: v.intl.string(v.t.bx4Uy8),
            binds: C(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT)
        },
        {
            description: v.intl.string(v.t['+Wem6u']),
            binds: C(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT)
        },
        {
            description: v.intl.string(v.t['+2fcd3']),
            binds: C(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD)
        },
        {
            description: v.intl.string(v.t.eVmj1N),
            binds: C(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT)
        },
        {
            description: v.intl.string(v.t.EcqS7e),
            binds: C(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t['Bqss7+']),
            binds: C(y.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: v.intl.string(v.t.UaXAPz),
            binds: C(y.EkH.MARK_SERVER_READ)
        },
        {
            description: v.intl.string(v.t['5X9vFh']),
            binds: C(y.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.JoxNnp),
            binds: C(y.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.tL6eVV),
            binds: C(y.EkH.TOGGLE_MUTE)
        },
        {
            description: v.intl.string(v.t['QXe/7e']),
            binds: C(y.EkH.TOGGLE_DEAFEN)
        },
        {
            description: v.intl.string(v.t.d6UIio),
            binds: C(y.EkH.CALL_ACCEPT)
        },
        {
            description: v.intl.string(v.t.IcEW09),
            binds: C(y.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.WN2dsb),
            binds: C(y.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.L3RYYG),
            binds: C(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN)
        },
        {
            description: v.intl.string(v.t['3HAurK']),
            binds: C(y.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: C(y.EkH.TEXTAREA_FOCUS)
        },
        {
            description: v.intl.string(v.t.yYsRlJ),
            binds: C(y.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
