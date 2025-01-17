s.d(t, {
    Sr: function () {
        return I;
    },
    Xq: function () {
        return S;
    },
    Zg: function () {
        return T;
    }
}),
    s(411104);
var n = s(186070),
    i = s(185514),
    r = s(360038),
    o = s(175724),
    l = s(705371),
    a = s(138976),
    c = s(167042),
    d = s(239748),
    u = s(337482),
    h = s(679080),
    E = s(510761),
    p = s(189509),
    m = s(673553),
    _ = s(280492),
    g = s(746887),
    C = s(721383),
    N = s(743810),
    f = s(981631),
    b = s(388032);
function R() {
    for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
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
        [f.EkH.UNREAD_NEXT]: N.pd,
        [f.EkH.UNREAD_PREV]: N.wk,
        [f.EkH.MENTION_CHANNEL_NEXT]: N.Nv,
        [f.EkH.MENTION_CHANNEL_PREV]: N.uX,
        [f.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [f.EkH.JUMP_TO_GUILD]: r.u,
        [f.EkH.SUBMIT]: p.z,
        [f.EkH.TEXTAREA_FOCUS]: m.U,
        [f.EkH.MARK_CHANNEL_READ]: o.f,
        [f.EkH.MARK_SERVER_READ]: l.l,
        [f.EkH.TOGGLE_MUTE]: _.iN,
        [f.EkH.TOGGLE_DEAFEN]: _.oV,
        [f.EkH.TOGGLE_CATEGORY_COLLAPSED]: g.u,
        [f.EkH.SCROLL_UP]: u.B2,
        [f.EkH.SCROLL_DOWN]: u.gN,
        [f.EkH.SEARCH_EMOJIS]: h.S,
        [f.EkH.TOGGLE_HOTKEYS]: C._,
        [f.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [f.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
        [f.EkH.CALL_ACCEPT]: n.IL,
        [f.EkH.CALL_START]: n.FI,
        [f.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    S = { [f.EkH.QUICKSWITCHER_SHOW]: c.$ };
function T() {
    return [
        {
            description: b.intl.string(b.t.bx4Uy8),
            binds: R(f.EkH.SERVER_PREV, f.EkH.SERVER_NEXT)
        },
        {
            description: b.intl.string(b.t['+Wem6u']),
            binds: R(f.EkH.CHANNEL_PREV, f.EkH.CHANNEL_NEXT)
        },
        {
            description: b.intl.string(b.t['+2fcd3']),
            binds: R(f.EkH.NAVIGATE_BACK, f.EkH.NAVIGATE_FORWARD)
        },
        {
            description: b.intl.string(b.t.eVmj1N),
            binds: R(f.EkH.UNREAD_PREV, f.EkH.UNREAD_NEXT)
        },
        {
            description: b.intl.string(b.t.EcqS7e),
            binds: R(f.EkH.MENTION_CHANNEL_PREV, f.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t['Bqss7+']),
            binds: R(f.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: b.intl.string(b.t.UaXAPz),
            binds: R(f.EkH.MARK_SERVER_READ)
        },
        {
            description: b.intl.string(b.t['5X9vFh']),
            binds: R(f.EkH.MARK_CHANNEL_READ)
        },
        {
            description: b.intl.string(b.t.JoxNnp),
            binds: R(f.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t.tL6eVV),
            binds: R(f.EkH.TOGGLE_MUTE)
        },
        {
            description: b.intl.string(b.t['QXe/7e']),
            binds: R(f.EkH.TOGGLE_DEAFEN)
        },
        {
            description: b.intl.string(b.t.d6UIio),
            binds: R(f.EkH.CALL_ACCEPT)
        },
        {
            description: b.intl.string(b.t.IcEW09),
            binds: R(f.EkH.MARK_CHANNEL_READ)
        },
        {
            description: b.intl.string(b.t.WN2dsb),
            binds: R(f.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: b.intl.string(b.t.L3RYYG),
            binds: R(f.EkH.SCROLL_UP, f.EkH.SCROLL_DOWN)
        },
        {
            description: b.intl.string(b.t['3HAurK']),
            binds: R(f.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: b.intl.string(b.t.rrYBEh),
            binds: R(f.EkH.TEXTAREA_FOCUS)
        },
        {
            description: b.intl.string(b.t.yYsRlJ),
            binds: R(f.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
