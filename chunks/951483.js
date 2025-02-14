n.d(t, {
    Sr: () => R,
    Xq: () => f,
    Zg: () => A
}),
    n(411104);
var i = n(186070),
    r = n(185514),
    l = n(360038),
    s = n(175724),
    a = n(705371),
    o = n(138976),
    c = n(167042),
    d = n(239748),
    u = n(337482),
    _ = n(679080),
    E = n(510761),
    h = n(189509),
    I = n(673553),
    p = n(280492),
    m = n(746887),
    C = n(721383),
    T = n(743810),
    N = n(981631),
    g = n(388032);
function S() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = R[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let R = {
        [N.EkH.SERVER_NEXT]: E.nq,
        [N.EkH.SERVER_PREV]: E.X3,
        [N.EkH.CHANNEL_NEXT]: r.tQ,
        [N.EkH.CHANNEL_PREV]: r.x5,
        [N.EkH.NAVIGATE_BACK]: r.Nx,
        [N.EkH.NAVIGATE_FORWARD]: r.On,
        [N.EkH.UNREAD_NEXT]: T.pd,
        [N.EkH.UNREAD_PREV]: T.wk,
        [N.EkH.MENTION_CHANNEL_NEXT]: T.Nv,
        [N.EkH.MENTION_CHANNEL_PREV]: T.uX,
        [N.EkH.TOGGLE_PREVIOUS_GUILD]: r.$c,
        [N.EkH.JUMP_TO_GUILD]: l.u,
        [N.EkH.SUBMIT]: h.z,
        [N.EkH.TEXTAREA_FOCUS]: I.U,
        [N.EkH.MARK_CHANNEL_READ]: s.f,
        [N.EkH.MARK_SERVER_READ]: a.l,
        [N.EkH.TOGGLE_MUTE]: p.iN,
        [N.EkH.TOGGLE_DEAFEN]: p.oV,
        [N.EkH.TOGGLE_CATEGORY_COLLAPSED]: m.u,
        [N.EkH.SCROLL_UP]: u.B2,
        [N.EkH.SCROLL_DOWN]: u.gN,
        [N.EkH.SEARCH_EMOJIS]: _.S,
        [N.EkH.TOGGLE_HOTKEYS]: C._,
        [N.EkH.JUMP_TO_FIRST_UNREAD]: o.O,
        [N.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
        [N.EkH.CALL_ACCEPT]: i.IL,
        [N.EkH.CALL_START]: i.FI,
        [N.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    f = { [N.EkH.QUICKSWITCHER_SHOW]: c.$ };
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
