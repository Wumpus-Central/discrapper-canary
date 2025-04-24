n.d(t, {
    Sr: () => S,
    Xq: () => j,
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
    O = n(981631),
    v = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = S[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let S = {
        [O.EkH.SERVER_NEXT]: p.nq,
        [O.EkH.SERVER_PREV]: p.X3,
        [O.EkH.CHANNEL_NEXT]: i.tQ,
        [O.EkH.CHANNEL_PREV]: i.x5,
        [O.EkH.NAVIGATE_BACK]: i.Nx,
        [O.EkH.NAVIGATE_FORWARD]: i.On,
        [O.EkH.UNREAD_NEXT]: _.pd,
        [O.EkH.UNREAD_PREV]: _.wk,
        [O.EkH.MENTION_CHANNEL_NEXT]: _.Nv,
        [O.EkH.MENTION_CHANNEL_PREV]: _.uX,
        [O.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [O.EkH.JUMP_TO_GUILD]: l.u,
        [O.EkH.SUBMIT]: f.z,
        [O.EkH.TEXTAREA_FOCUS]: g.U,
        [O.EkH.MARK_CHANNEL_READ]: o.f,
        [O.EkH.MARK_SERVER_READ]: s.l,
        [O.EkH.TOGGLE_MUTE]: m.iN,
        [O.EkH.TOGGLE_DEAFEN]: m.oV,
        [O.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [O.EkH.SCROLL_UP]: d.B2,
        [O.EkH.SCROLL_DOWN]: d.gN,
        [O.EkH.SEARCH_EMOJIS]: h.S,
        [O.EkH.TOGGLE_HOTKEYS]: y._,
        [O.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [O.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [O.EkH.CALL_ACCEPT]: r.IL,
        [O.EkH.CALL_START]: r.FI,
        [O.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    j = { [O.EkH.QUICKSWITCHER_SHOW]: c.$ };
function E() {
    return [
        {
            description: v.intl.string(v.t.bx4Uy8),
            binds: C(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT)
        },
        {
            description: v.intl.string(v.t['+Wem6u']),
            binds: C(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT)
        },
        {
            description: v.intl.string(v.t['+2fcd3']),
            binds: C(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD)
        },
        {
            description: v.intl.string(v.t.eVmj1N),
            binds: C(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT)
        },
        {
            description: v.intl.string(v.t.EcqS7e),
            binds: C(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t['Bqss7+']),
            binds: C(O.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: v.intl.string(v.t.UaXAPz),
            binds: C(O.EkH.MARK_SERVER_READ)
        },
        {
            description: v.intl.string(v.t['5X9vFh']),
            binds: C(O.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.JoxNnp),
            binds: C(O.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.tL6eVV),
            binds: C(O.EkH.TOGGLE_MUTE)
        },
        {
            description: v.intl.string(v.t['QXe/7e']),
            binds: C(O.EkH.TOGGLE_DEAFEN)
        },
        {
            description: v.intl.string(v.t.d6UIio),
            binds: C(O.EkH.CALL_ACCEPT)
        },
        {
            description: v.intl.string(v.t.IcEW09),
            binds: C(O.EkH.MARK_CHANNEL_READ)
        },
        {
            description: v.intl.string(v.t.WN2dsb),
            binds: C(O.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: v.intl.string(v.t.L3RYYG),
            binds: C(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN)
        },
        {
            description: v.intl.string(v.t['3HAurK']),
            binds: C(O.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: v.intl.string(v.t.rrYBEh),
            binds: C(O.EkH.TEXTAREA_FOCUS)
        },
        {
            description: v.intl.string(v.t.yYsRlJ),
            binds: C(O.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
