n.d(t, {
    Sr: () => b,
    Xq: () => T,
    Zg: () => S
}),
    n(411104);
var r = n(186070),
    i = n(185514),
    l = n(360038),
    o = n(175724),
    s = n(705371),
    a = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    _ = n(679080),
    E = n(510761),
    p = n(189509),
    h = n(673553),
    f = n(280492),
    m = n(746887),
    O = n(721383),
    N = n(743810),
    g = n(981631),
    I = n(388032);
function C() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = b[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let b = {
        [g.EkH.SERVER_NEXT]: E.nq,
        [g.EkH.SERVER_PREV]: E.X3,
        [g.EkH.CHANNEL_NEXT]: i.tQ,
        [g.EkH.CHANNEL_PREV]: i.x5,
        [g.EkH.NAVIGATE_BACK]: i.Nx,
        [g.EkH.NAVIGATE_FORWARD]: i.On,
        [g.EkH.UNREAD_NEXT]: N.pd,
        [g.EkH.UNREAD_PREV]: N.wk,
        [g.EkH.MENTION_CHANNEL_NEXT]: N.Nv,
        [g.EkH.MENTION_CHANNEL_PREV]: N.uX,
        [g.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [g.EkH.JUMP_TO_GUILD]: l.u,
        [g.EkH.SUBMIT]: p.z,
        [g.EkH.TEXTAREA_FOCUS]: h.U,
        [g.EkH.MARK_CHANNEL_READ]: o.f,
        [g.EkH.MARK_SERVER_READ]: s.l,
        [g.EkH.TOGGLE_MUTE]: f.iN,
        [g.EkH.TOGGLE_DEAFEN]: f.oV,
        [g.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
        [g.EkH.SCROLL_UP]: d.B2,
        [g.EkH.SCROLL_DOWN]: d.gN,
        [g.EkH.SEARCH_EMOJIS]: _.S,
        [g.EkH.TOGGLE_HOTKEYS]: O._,
        [g.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [g.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [g.EkH.CALL_ACCEPT]: r.IL,
        [g.EkH.CALL_START]: r.FI,
        [g.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    T = { [g.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: I.NW.string(I.t.bx4Uy8),
            binds: C(g.EkH.SERVER_PREV, g.EkH.SERVER_NEXT)
        },
        {
            description: I.NW.string(I.t['+Wem6u']),
            binds: C(g.EkH.CHANNEL_PREV, g.EkH.CHANNEL_NEXT)
        },
        {
            description: I.NW.string(I.t['+2fcd3']),
            binds: C(g.EkH.NAVIGATE_BACK, g.EkH.NAVIGATE_FORWARD)
        },
        {
            description: I.NW.string(I.t.eVmj1N),
            binds: C(g.EkH.UNREAD_PREV, g.EkH.UNREAD_NEXT)
        },
        {
            description: I.NW.string(I.t.EcqS7e),
            binds: C(g.EkH.MENTION_CHANNEL_PREV, g.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: I.NW.string(I.t['Bqss7+']),
            binds: C(g.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: I.NW.string(I.t.UaXAPz),
            binds: C(g.EkH.MARK_SERVER_READ)
        },
        {
            description: I.NW.string(I.t['5X9vFh']),
            binds: C(g.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.NW.string(I.t.JoxNnp),
            binds: C(g.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: I.NW.string(I.t.tL6eVV),
            binds: C(g.EkH.TOGGLE_MUTE)
        },
        {
            description: I.NW.string(I.t['QXe/7e']),
            binds: C(g.EkH.TOGGLE_DEAFEN)
        },
        {
            description: I.NW.string(I.t.d6UIio),
            binds: C(g.EkH.CALL_ACCEPT)
        },
        {
            description: I.NW.string(I.t.IcEW09),
            binds: C(g.EkH.MARK_CHANNEL_READ)
        },
        {
            description: I.NW.string(I.t.WN2dsb),
            binds: C(g.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: I.NW.string(I.t.L3RYYG),
            binds: C(g.EkH.SCROLL_UP, g.EkH.SCROLL_DOWN)
        },
        {
            description: I.NW.string(I.t['3HAurK']),
            binds: C(g.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: I.NW.string(I.t.rrYBEh),
            binds: C(g.EkH.TEXTAREA_FOCUS)
        },
        {
            description: I.NW.string(I.t.yYsRlJ),
            binds: C(g.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
