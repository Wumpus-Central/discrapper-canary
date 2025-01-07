n.d(t, {
    Sr: function () {
        return I;
    },
    Xq: function () {
        return T;
    },
    Zg: function () {
        return S;
    }
}),
    n(411104);
var s = n(186070),
    i = n(185514),
    r = n(360038),
    o = n(175724),
    l = n(705371),
    a = n(138976),
    c = n(167042),
    u = n(239748),
    d = n(337482),
    h = n(679080),
    E = n(510761),
    p = n(189509),
    _ = n(673553),
    m = n(280492),
    C = n(746887),
    N = n(721383),
    g = n(743810),
    f = n(981631),
    R = n(388032);
function b() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = I[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let I = {
        [f.EkH.SERVER_NEXT]: E.nq,
        [f.EkH.SERVER_PREV]: E.X3,
        [f.EkH.CHANNEL_NEXT]: i.tQ,
        [f.EkH.CHANNEL_PREV]: i.x5,
        [f.EkH.NAVIGATE_BACK]: i.Nx,
        [f.EkH.NAVIGATE_FORWARD]: i.On,
        [f.EkH.UNREAD_NEXT]: g.pd,
        [f.EkH.UNREAD_PREV]: g.wk,
        [f.EkH.MENTION_CHANNEL_NEXT]: g.Nv,
        [f.EkH.MENTION_CHANNEL_PREV]: g.uX,
        [f.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [f.EkH.JUMP_TO_GUILD]: r.u,
        [f.EkH.SUBMIT]: p.z,
        [f.EkH.TEXTAREA_FOCUS]: _.U,
        [f.EkH.MARK_CHANNEL_READ]: o.f,
        [f.EkH.MARK_SERVER_READ]: l.l,
        [f.EkH.TOGGLE_MUTE]: m.iN,
        [f.EkH.TOGGLE_DEAFEN]: m.oV,
        [f.EkH.TOGGLE_CATEGORY_COLLAPSED]: C.u,
        [f.EkH.SCROLL_UP]: d.B2,
        [f.EkH.SCROLL_DOWN]: d.gN,
        [f.EkH.SEARCH_EMOJIS]: h.S,
        [f.EkH.TOGGLE_HOTKEYS]: N._,
        [f.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [f.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [f.EkH.CALL_ACCEPT]: s.IL,
        [f.EkH.CALL_START]: s.FI,
        [f.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    T = { [f.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: R.intl.string(R.t.bx4Uy8),
            binds: b(f.EkH.SERVER_PREV, f.EkH.SERVER_NEXT)
        },
        {
            description: R.intl.string(R.t['+Wem6u']),
            binds: b(f.EkH.CHANNEL_PREV, f.EkH.CHANNEL_NEXT)
        },
        {
            description: R.intl.string(R.t['+2fcd3']),
            binds: b(f.EkH.NAVIGATE_BACK, f.EkH.NAVIGATE_FORWARD)
        },
        {
            description: R.intl.string(R.t.eVmj1N),
            binds: b(f.EkH.UNREAD_PREV, f.EkH.UNREAD_NEXT)
        },
        {
            description: R.intl.string(R.t.EcqS7e),
            binds: b(f.EkH.MENTION_CHANNEL_PREV, f.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: R.intl.string(R.t['Bqss7+']),
            binds: b(f.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: R.intl.string(R.t.UaXAPz),
            binds: b(f.EkH.MARK_SERVER_READ)
        },
        {
            description: R.intl.string(R.t['5X9vFh']),
            binds: b(f.EkH.MARK_CHANNEL_READ)
        },
        {
            description: R.intl.string(R.t.JoxNnp),
            binds: b(f.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: R.intl.string(R.t.tL6eVV),
            binds: b(f.EkH.TOGGLE_MUTE)
        },
        {
            description: R.intl.string(R.t['QXe/7e']),
            binds: b(f.EkH.TOGGLE_DEAFEN)
        },
        {
            description: R.intl.string(R.t.d6UIio),
            binds: b(f.EkH.CALL_ACCEPT)
        },
        {
            description: R.intl.string(R.t.IcEW09),
            binds: b(f.EkH.MARK_CHANNEL_READ)
        },
        {
            description: R.intl.string(R.t.WN2dsb),
            binds: b(f.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: R.intl.string(R.t.L3RYYG),
            binds: b(f.EkH.SCROLL_UP, f.EkH.SCROLL_DOWN)
        },
        {
            description: R.intl.string(R.t['3HAurK']),
            binds: b(f.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: R.intl.string(R.t.rrYBEh),
            binds: b(f.EkH.TEXTAREA_FOCUS)
        },
        {
            description: R.intl.string(R.t.yYsRlJ),
            binds: b(f.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
