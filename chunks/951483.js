n.d(t, {
    Sr: () => S,
    Xq: () => N,
    Zg: () => v
}),
    n(415506);
var r = n(186070),
    i = n(185514),
    o = n(360038),
    l = n(175724),
    s = n(705371),
    a = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    p = n(679080),
    h = n(908552),
    _ = n(189509),
    f = n(673553),
    m = n(280492),
    b = n(746887),
    g = n(721383),
    E = n(743810),
    O = n(981631),
    y = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = S[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let S = {
        [O.EkH.SERVER_NEXT]: h.nq,
        [O.EkH.SERVER_PREV]: h.X3,
        [O.EkH.CHANNEL_NEXT]: i.tQ,
        [O.EkH.CHANNEL_PREV]: i.x5,
        [O.EkH.NAVIGATE_BACK]: i.Nx,
        [O.EkH.NAVIGATE_FORWARD]: i.On,
        [O.EkH.UNREAD_NEXT]: E.pd,
        [O.EkH.UNREAD_PREV]: E.wk,
        [O.EkH.MENTION_CHANNEL_NEXT]: E.Nv,
        [O.EkH.MENTION_CHANNEL_PREV]: E.uX,
        [O.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [O.EkH.JUMP_TO_GUILD]: o.u,
        [O.EkH.SUBMIT]: _.z,
        [O.EkH.TEXTAREA_FOCUS]: f.U,
        [O.EkH.MARK_CHANNEL_READ]: l.f,
        [O.EkH.MARK_SERVER_READ]: s.l,
        [O.EkH.TOGGLE_MUTE]: m.iN,
        [O.EkH.TOGGLE_DEAFEN]: m.oV,
        [O.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [O.EkH.SCROLL_UP]: d.B2,
        [O.EkH.SCROLL_DOWN]: d.gN,
        [O.EkH.SEARCH_EMOJIS]: p.S,
        [O.EkH.TOGGLE_HOTKEYS]: g._,
        [O.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [O.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [O.EkH.CALL_ACCEPT]: r.IL,
        [O.EkH.CALL_START]: r.FI,
        [O.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    N = { [O.EkH.QUICKSWITCHER_SHOW]: c.$ };
function v() {
    return [
        {
            description: y.NW.string(y.t.bx4Uy8),
            binds: C(O.EkH.SERVER_PREV, O.EkH.SERVER_NEXT)
        },
        {
            description: y.NW.string(y.t['+Wem6u']),
            binds: C(O.EkH.CHANNEL_PREV, O.EkH.CHANNEL_NEXT)
        },
        {
            description: y.NW.string(y.t['+2fcd3']),
            binds: C(O.EkH.NAVIGATE_BACK, O.EkH.NAVIGATE_FORWARD)
        },
        {
            description: y.NW.string(y.t.eVmj1N),
            binds: C(O.EkH.UNREAD_PREV, O.EkH.UNREAD_NEXT)
        },
        {
            description: y.NW.string(y.t.EcqS7e),
            binds: C(O.EkH.MENTION_CHANNEL_PREV, O.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: y.NW.string(y.t['Bqss7+']),
            binds: C(O.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: y.NW.string(y.t.UaXAPz),
            binds: C(O.EkH.MARK_SERVER_READ)
        },
        {
            description: y.NW.string(y.t['5X9vFh']),
            binds: C(O.EkH.MARK_CHANNEL_READ)
        },
        {
            description: y.NW.string(y.t.JoxNnp),
            binds: C(O.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: y.NW.string(y.t.tL6eVV),
            binds: C(O.EkH.TOGGLE_MUTE)
        },
        {
            description: y.NW.string(y.t['QXe/7e']),
            binds: C(O.EkH.TOGGLE_DEAFEN)
        },
        {
            description: y.NW.string(y.t.d6UIio),
            binds: C(O.EkH.CALL_ACCEPT)
        },
        {
            description: y.NW.string(y.t.IcEW09),
            binds: C(O.EkH.MARK_CHANNEL_READ)
        },
        {
            description: y.NW.string(y.t.WN2dsb),
            binds: C(O.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: y.NW.string(y.t.L3RYYG),
            binds: C(O.EkH.SCROLL_UP, O.EkH.SCROLL_DOWN)
        },
        {
            description: y.NW.string(y.t['3HAurK']),
            binds: C(O.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: y.NW.string(y.t.rrYBEh),
            binds: C(O.EkH.TEXTAREA_FOCUS)
        },
        {
            description: y.NW.string(y.t.yYsRlJ),
            binds: C(O.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
