n.d(t, {
    Sr: () => f,
    Xq: () => R,
    Zg: () => A
}),
    n(411104);
var i = n(186070),
    l = n(185514),
    r = n(360038),
    s = n(175724),
    o = n(705371),
    a = n(138976),
    c = n(167042),
    d = n(239748),
    u = n(337482),
    _ = n(679080),
    E = n(510761),
    h = n(189509),
    I = n(673553),
    p = n(280492),
    m = n(746887),
    T = n(721383),
    N = n(743810),
    C = n(981631),
    g = n(388032);
function S() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = f[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let f = {
        [C.EkH.SERVER_NEXT]: E.nq,
        [C.EkH.SERVER_PREV]: E.X3,
        [C.EkH.CHANNEL_NEXT]: l.tQ,
        [C.EkH.CHANNEL_PREV]: l.x5,
        [C.EkH.NAVIGATE_BACK]: l.Nx,
        [C.EkH.NAVIGATE_FORWARD]: l.On,
        [C.EkH.UNREAD_NEXT]: N.pd,
        [C.EkH.UNREAD_PREV]: N.wk,
        [C.EkH.MENTION_CHANNEL_NEXT]: N.Nv,
        [C.EkH.MENTION_CHANNEL_PREV]: N.uX,
        [C.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [C.EkH.JUMP_TO_GUILD]: r.u,
        [C.EkH.SUBMIT]: h.z,
        [C.EkH.TEXTAREA_FOCUS]: I.U,
        [C.EkH.MARK_CHANNEL_READ]: s.f,
        [C.EkH.MARK_SERVER_READ]: o.l,
        [C.EkH.TOGGLE_MUTE]: p.iN,
        [C.EkH.TOGGLE_DEAFEN]: p.oV,
        [C.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
        [C.EkH.SCROLL_UP]: u.B2,
        [C.EkH.SCROLL_DOWN]: u.gN,
        [C.EkH.SEARCH_EMOJIS]: _.S,
        [C.EkH.TOGGLE_HOTKEYS]: T._,
        [C.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [C.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
        [C.EkH.CALL_ACCEPT]: i.IL,
        [C.EkH.CALL_START]: i.FI,
        [C.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    R = { [C.EkH.QUICKSWITCHER_SHOW]: c.$ };
function A() {
    return [
        {
            description: g.intl.string(g.t.bx4Uy8),
            binds: S(C.EkH.SERVER_PREV, C.EkH.SERVER_NEXT)
        },
        {
            description: g.intl.string(g.t['+Wem6u']),
            binds: S(C.EkH.CHANNEL_PREV, C.EkH.CHANNEL_NEXT)
        },
        {
            description: g.intl.string(g.t['+2fcd3']),
            binds: S(C.EkH.NAVIGATE_BACK, C.EkH.NAVIGATE_FORWARD)
        },
        {
            description: g.intl.string(g.t.eVmj1N),
            binds: S(C.EkH.UNREAD_PREV, C.EkH.UNREAD_NEXT)
        },
        {
            description: g.intl.string(g.t.EcqS7e),
            binds: S(C.EkH.MENTION_CHANNEL_PREV, C.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t['Bqss7+']),
            binds: S(C.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: g.intl.string(g.t.UaXAPz),
            binds: S(C.EkH.MARK_SERVER_READ)
        },
        {
            description: g.intl.string(g.t['5X9vFh']),
            binds: S(C.EkH.MARK_CHANNEL_READ)
        },
        {
            description: g.intl.string(g.t.JoxNnp),
            binds: S(C.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t.tL6eVV),
            binds: S(C.EkH.TOGGLE_MUTE)
        },
        {
            description: g.intl.string(g.t['QXe/7e']),
            binds: S(C.EkH.TOGGLE_DEAFEN)
        },
        {
            description: g.intl.string(g.t.d6UIio),
            binds: S(C.EkH.CALL_ACCEPT)
        },
        {
            description: g.intl.string(g.t.IcEW09),
            binds: S(C.EkH.MARK_CHANNEL_READ)
        },
        {
            description: g.intl.string(g.t.WN2dsb),
            binds: S(C.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t.L3RYYG),
            binds: S(C.EkH.SCROLL_UP, C.EkH.SCROLL_DOWN)
        },
        {
            description: g.intl.string(g.t['3HAurK']),
            binds: S(C.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: g.intl.string(g.t.rrYBEh),
            binds: S(C.EkH.TEXTAREA_FOCUS)
        },
        {
            description: g.intl.string(g.t.yYsRlJ),
            binds: S(C.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
