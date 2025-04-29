n.d(t, {
    Sr: () => j,
    Xq: () => S,
    Zg: () => E
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
    _ = n(743810),
    v = n(981631),
    O = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = j[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let j = {
        [v.EkH.SERVER_NEXT]: p.nq,
        [v.EkH.SERVER_PREV]: p.X3,
        [v.EkH.CHANNEL_NEXT]: i.tQ,
        [v.EkH.CHANNEL_PREV]: i.x5,
        [v.EkH.NAVIGATE_BACK]: i.Nx,
        [v.EkH.NAVIGATE_FORWARD]: i.On,
        [v.EkH.UNREAD_NEXT]: _.pd,
        [v.EkH.UNREAD_PREV]: _.wk,
        [v.EkH.MENTION_CHANNEL_NEXT]: _.Nv,
        [v.EkH.MENTION_CHANNEL_PREV]: _.uX,
        [v.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [v.EkH.JUMP_TO_GUILD]: l.u,
        [v.EkH.SUBMIT]: f.z,
        [v.EkH.TEXTAREA_FOCUS]: g.U,
        [v.EkH.MARK_CHANNEL_READ]: o.f,
        [v.EkH.MARK_SERVER_READ]: s.l,
        [v.EkH.TOGGLE_MUTE]: m.iN,
        [v.EkH.TOGGLE_DEAFEN]: m.oV,
        [v.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [v.EkH.SCROLL_UP]: d.B2,
        [v.EkH.SCROLL_DOWN]: d.gN,
        [v.EkH.SEARCH_EMOJIS]: h.S,
        [v.EkH.TOGGLE_HOTKEYS]: y._,
        [v.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [v.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [v.EkH.CALL_ACCEPT]: r.IL,
        [v.EkH.CALL_START]: r.FI,
        [v.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    S = { [v.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: O.intl.string(O.t.bx4Uy8),
            binds: C(v.EkH.SERVER_PREV, v.EkH.SERVER_NEXT)
        },
        {
            description: O.intl.string(O.t['+Wem6u']),
            binds: C(v.EkH.CHANNEL_PREV, v.EkH.CHANNEL_NEXT)
        },
        {
            description: O.intl.string(O.t['+2fcd3']),
            binds: C(v.EkH.NAVIGATE_BACK, v.EkH.NAVIGATE_FORWARD)
        },
        {
            description: O.intl.string(O.t.eVmj1N),
            binds: C(v.EkH.UNREAD_PREV, v.EkH.UNREAD_NEXT)
        },
        {
            description: O.intl.string(O.t.EcqS7e),
            binds: C(v.EkH.MENTION_CHANNEL_PREV, v.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: O.intl.string(O.t['Bqss7+']),
            binds: C(v.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: O.intl.string(O.t.UaXAPz),
            binds: C(v.EkH.MARK_SERVER_READ)
        },
        {
            description: O.intl.string(O.t['5X9vFh']),
            binds: C(v.EkH.MARK_CHANNEL_READ)
        },
        {
            description: O.intl.string(O.t.JoxNnp),
            binds: C(v.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: O.intl.string(O.t.tL6eVV),
            binds: C(v.EkH.TOGGLE_MUTE)
        },
        {
            description: O.intl.string(O.t['QXe/7e']),
            binds: C(v.EkH.TOGGLE_DEAFEN)
        },
        {
            description: O.intl.string(O.t.d6UIio),
            binds: C(v.EkH.CALL_ACCEPT)
        },
        {
            description: O.intl.string(O.t.IcEW09),
            binds: C(v.EkH.MARK_CHANNEL_READ)
        },
        {
            description: O.intl.string(O.t.WN2dsb),
            binds: C(v.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: O.intl.string(O.t.L3RYYG),
            binds: C(v.EkH.SCROLL_UP, v.EkH.SCROLL_DOWN)
        },
        {
            description: O.intl.string(O.t['3HAurK']),
            binds: C(v.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: O.intl.string(O.t.rrYBEh),
            binds: C(v.EkH.TEXTAREA_FOCUS)
        },
        {
            description: O.intl.string(O.t.yYsRlJ),
            binds: C(v.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
