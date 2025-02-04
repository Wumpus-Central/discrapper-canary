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
    p = n(673553),
    I = n(280492),
    m = n(746887),
    T = n(721383),
    C = n(743810),
    N = n(981631),
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
        [N.EkH.SERVER_NEXT]: E.nq,
        [N.EkH.SERVER_PREV]: E.X3,
        [N.EkH.CHANNEL_NEXT]: l.tQ,
        [N.EkH.CHANNEL_PREV]: l.x5,
        [N.EkH.NAVIGATE_BACK]: l.Nx,
        [N.EkH.NAVIGATE_FORWARD]: l.On,
        [N.EkH.UNREAD_NEXT]: C.pd,
        [N.EkH.UNREAD_PREV]: C.wk,
        [N.EkH.MENTION_CHANNEL_NEXT]: C.Nv,
        [N.EkH.MENTION_CHANNEL_PREV]: C.uX,
        [N.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [N.EkH.JUMP_TO_GUILD]: r.u,
        [N.EkH.SUBMIT]: h.z,
        [N.EkH.TEXTAREA_FOCUS]: p.U,
        [N.EkH.MARK_CHANNEL_READ]: s.f,
        [N.EkH.MARK_SERVER_READ]: o.l,
        [N.EkH.TOGGLE_MUTE]: I.iN,
        [N.EkH.TOGGLE_DEAFEN]: I.oV,
        [N.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
        [N.EkH.SCROLL_UP]: u.B2,
        [N.EkH.SCROLL_DOWN]: u.gN,
        [N.EkH.SEARCH_EMOJIS]: _.S,
        [N.EkH.TOGGLE_HOTKEYS]: T._,
        [N.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [N.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
        [N.EkH.CALL_ACCEPT]: i.IL,
        [N.EkH.CALL_START]: i.FI,
        [N.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    R = { [N.EkH.QUICKSWITCHER_SHOW]: c.$ };
function A() {
    return [
        {
            description: g.intl.string(g.t.bx4Uy8),
            binds: S(N.EkH.SERVER_PREV, N.EkH.SERVER_NEXT)
        },
        {
            description: g.intl.string(g.t['+Wem6u']),
            binds: S(N.EkH.CHANNEL_PREV, N.EkH.CHANNEL_NEXT)
        },
        {
            description: g.intl.string(g.t['+2fcd3']),
            binds: S(N.EkH.NAVIGATE_BACK, N.EkH.NAVIGATE_FORWARD)
        },
        {
            description: g.intl.string(g.t.eVmj1N),
            binds: S(N.EkH.UNREAD_PREV, N.EkH.UNREAD_NEXT)
        },
        {
            description: g.intl.string(g.t.EcqS7e),
            binds: S(N.EkH.MENTION_CHANNEL_PREV, N.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t['Bqss7+']),
            binds: S(N.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: g.intl.string(g.t.UaXAPz),
            binds: S(N.EkH.MARK_SERVER_READ)
        },
        {
            description: g.intl.string(g.t['5X9vFh']),
            binds: S(N.EkH.MARK_CHANNEL_READ)
        },
        {
            description: g.intl.string(g.t.JoxNnp),
            binds: S(N.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t.tL6eVV),
            binds: S(N.EkH.TOGGLE_MUTE)
        },
        {
            description: g.intl.string(g.t['QXe/7e']),
            binds: S(N.EkH.TOGGLE_DEAFEN)
        },
        {
            description: g.intl.string(g.t.d6UIio),
            binds: S(N.EkH.CALL_ACCEPT)
        },
        {
            description: g.intl.string(g.t.IcEW09),
            binds: S(N.EkH.MARK_CHANNEL_READ)
        },
        {
            description: g.intl.string(g.t.WN2dsb),
            binds: S(N.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: g.intl.string(g.t.L3RYYG),
            binds: S(N.EkH.SCROLL_UP, N.EkH.SCROLL_DOWN)
        },
        {
            description: g.intl.string(g.t['3HAurK']),
            binds: S(N.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: g.intl.string(g.t.rrYBEh),
            binds: S(N.EkH.TEXTAREA_FOCUS)
        },
        {
            description: g.intl.string(g.t.yYsRlJ),
            binds: S(N.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
