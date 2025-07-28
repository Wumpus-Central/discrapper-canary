(n.d(t, {
    Sr: () => j,
    Xq: () => E,
    Zg: () => S
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
    C = n(388032);
function v() {
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
    E = { [y.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: C.intl.string(C.t.bx4Uy8),
            binds: v(y.EkH.SERVER_PREV, y.EkH.SERVER_NEXT)
        },
        {
            description: C.intl.string(C.t['+Wem6u']),
            binds: v(y.EkH.CHANNEL_PREV, y.EkH.CHANNEL_NEXT)
        },
        {
            description: C.intl.string(C.t['+2fcd3']),
            binds: v(y.EkH.NAVIGATE_BACK, y.EkH.NAVIGATE_FORWARD)
        },
        {
            description: C.intl.string(C.t.eVmj1N),
            binds: v(y.EkH.UNREAD_PREV, y.EkH.UNREAD_NEXT)
        },
        {
            description: C.intl.string(C.t.EcqS7e),
            binds: v(y.EkH.MENTION_CHANNEL_PREV, y.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: C.intl.string(C.t['Bqss7+']),
            binds: v(y.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: C.intl.string(C.t.UaXAPz),
            binds: v(y.EkH.MARK_SERVER_READ)
        },
        {
            description: C.intl.string(C.t['5X9vFh']),
            binds: v(y.EkH.MARK_CHANNEL_READ)
        },
        {
            description: C.intl.string(C.t.JoxNnp),
            binds: v(y.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: C.intl.string(C.t.tL6eVV),
            binds: v(y.EkH.TOGGLE_MUTE)
        },
        {
            description: C.intl.string(C.t['QXe/7e']),
            binds: v(y.EkH.TOGGLE_DEAFEN)
        },
        {
            description: C.intl.string(C.t.d6UIio),
            binds: v(y.EkH.CALL_ACCEPT)
        },
        {
            description: C.intl.string(C.t.IcEW09),
            binds: v(y.EkH.MARK_CHANNEL_READ)
        },
        {
            description: C.intl.string(C.t.WN2dsb),
            binds: v(y.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: C.intl.string(C.t.L3RYYG),
            binds: v(y.EkH.SCROLL_UP, y.EkH.SCROLL_DOWN)
        },
        {
            description: C.intl.string(C.t['3HAurK']),
            binds: v(y.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: C.intl.string(C.t.rrYBEh),
            binds: v(y.EkH.TEXTAREA_FOCUS)
        },
        {
            description: C.intl.string(C.t.yYsRlJ),
            binds: v(y.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
