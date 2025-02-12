n.d(t, {
    Sr: () => A,
    Xq: () => g,
    Zg: () => O
}),
    n(411104);
var i = n(186070),
    l = n(185514),
    r = n(360038),
    s = n(175724),
    a = n(705371),
    o = n(138976),
    c = n(167042),
    d = n(239748),
    u = n(337482),
    E = n(679080),
    _ = n(510761),
    h = n(189509),
    I = n(673553),
    C = n(280492),
    T = n(746887),
    N = n(721383),
    m = n(743810),
    p = n(981631),
    S = n(388032);
function R() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = A[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let A = {
        [p.EkH.SERVER_NEXT]: _.nq,
        [p.EkH.SERVER_PREV]: _.X3,
        [p.EkH.CHANNEL_NEXT]: l.tQ,
        [p.EkH.CHANNEL_PREV]: l.x5,
        [p.EkH.NAVIGATE_BACK]: l.Nx,
        [p.EkH.NAVIGATE_FORWARD]: l.On,
        [p.EkH.UNREAD_NEXT]: m.pd,
        [p.EkH.UNREAD_PREV]: m.wk,
        [p.EkH.MENTION_CHANNEL_NEXT]: m.Nv,
        [p.EkH.MENTION_CHANNEL_PREV]: m.uX,
        [p.EkH.TOGGLE_PREVIOUS_GUILD]: l.$c,
        [p.EkH.JUMP_TO_GUILD]: r.u,
        [p.EkH.SUBMIT]: h.z,
        [p.EkH.TEXTAREA_FOCUS]: I.U,
        [p.EkH.MARK_CHANNEL_READ]: s.f,
        [p.EkH.MARK_SERVER_READ]: a.l,
        [p.EkH.TOGGLE_MUTE]: C.iN,
        [p.EkH.TOGGLE_DEAFEN]: C.oV,
        [p.EkH.TOGGLE_CATEGORY_COLLAPSED]: T.u,
        [p.EkH.SCROLL_UP]: u.B2,
        [p.EkH.SCROLL_DOWN]: u.gN,
        [p.EkH.SEARCH_EMOJIS]: E.S,
        [p.EkH.TOGGLE_HOTKEYS]: N._,
        [p.EkH.JUMP_TO_FIRST_UNREAD]: o.O,
        [p.EkH.RETURN_TO_AUDIO_CHANNEL]: d.F,
        [p.EkH.CALL_ACCEPT]: i.IL,
        [p.EkH.CALL_START]: i.FI,
        [p.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    g = { [p.EkH.QUICKSWITCHER_SHOW]: c.$ };
function O() {
    return [
        {
            description: S.intl.string(S.t.bx4Uy8),
            binds: R(p.EkH.SERVER_PREV, p.EkH.SERVER_NEXT)
        },
        {
            description: S.intl.string(S.t['+Wem6u']),
            binds: R(p.EkH.CHANNEL_PREV, p.EkH.CHANNEL_NEXT)
        },
        {
            description: S.intl.string(S.t['+2fcd3']),
            binds: R(p.EkH.NAVIGATE_BACK, p.EkH.NAVIGATE_FORWARD)
        },
        {
            description: S.intl.string(S.t.eVmj1N),
            binds: R(p.EkH.UNREAD_PREV, p.EkH.UNREAD_NEXT)
        },
        {
            description: S.intl.string(S.t.EcqS7e),
            binds: R(p.EkH.MENTION_CHANNEL_PREV, p.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: S.intl.string(S.t['Bqss7+']),
            binds: R(p.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: S.intl.string(S.t.UaXAPz),
            binds: R(p.EkH.MARK_SERVER_READ)
        },
        {
            description: S.intl.string(S.t['5X9vFh']),
            binds: R(p.EkH.MARK_CHANNEL_READ)
        },
        {
            description: S.intl.string(S.t.JoxNnp),
            binds: R(p.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: S.intl.string(S.t.tL6eVV),
            binds: R(p.EkH.TOGGLE_MUTE)
        },
        {
            description: S.intl.string(S.t['QXe/7e']),
            binds: R(p.EkH.TOGGLE_DEAFEN)
        },
        {
            description: S.intl.string(S.t.d6UIio),
            binds: R(p.EkH.CALL_ACCEPT)
        },
        {
            description: S.intl.string(S.t.IcEW09),
            binds: R(p.EkH.MARK_CHANNEL_READ)
        },
        {
            description: S.intl.string(S.t.WN2dsb),
            binds: R(p.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: S.intl.string(S.t.L3RYYG),
            binds: R(p.EkH.SCROLL_UP, p.EkH.SCROLL_DOWN)
        },
        {
            description: S.intl.string(S.t['3HAurK']),
            binds: R(p.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: S.intl.string(S.t.rrYBEh),
            binds: R(p.EkH.TEXTAREA_FOCUS)
        },
        {
            description: S.intl.string(S.t.yYsRlJ),
            binds: R(p.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
