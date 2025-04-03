n.d(t, {
    Sr: () => v,
    Xq: () => N,
    Zg: () => S
}),
    n(411104);
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
    _ = n(908552),
    f = n(189509),
    h = n(673553),
    m = n(280492),
    b = n(746887),
    g = n(721383),
    E = n(743810),
    C = n(981631),
    O = n(388032);
function y() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.map((e) => {
        let t = v[e];
        if (null == t) throw Error('getBindsFor(...): No bind for '.concat(t));
        return t.binds[0];
    });
}
let v = {
        [C.EkH.SERVER_NEXT]: _.nq,
        [C.EkH.SERVER_PREV]: _.X3,
        [C.EkH.CHANNEL_NEXT]: i.tQ,
        [C.EkH.CHANNEL_PREV]: i.x5,
        [C.EkH.NAVIGATE_BACK]: i.Nx,
        [C.EkH.NAVIGATE_FORWARD]: i.On,
        [C.EkH.UNREAD_NEXT]: E.pd,
        [C.EkH.UNREAD_PREV]: E.wk,
        [C.EkH.MENTION_CHANNEL_NEXT]: E.Nv,
        [C.EkH.MENTION_CHANNEL_PREV]: E.uX,
        [C.EkH.TOGGLE_PREVIOUS_GUILD]: i.$c,
        [C.EkH.JUMP_TO_GUILD]: o.u,
        [C.EkH.SUBMIT]: f.z,
        [C.EkH.TEXTAREA_FOCUS]: h.U,
        [C.EkH.MARK_CHANNEL_READ]: l.f,
        [C.EkH.MARK_SERVER_READ]: s.l,
        [C.EkH.TOGGLE_MUTE]: m.iN,
        [C.EkH.TOGGLE_DEAFEN]: m.oV,
        [C.EkH.TOGGLE_CATEGORY_COLLAPSED]: b.u,
        [C.EkH.SCROLL_UP]: d.B2,
        [C.EkH.SCROLL_DOWN]: d.gN,
        [C.EkH.SEARCH_EMOJIS]: p.S,
        [C.EkH.TOGGLE_HOTKEYS]: g._,
        [C.EkH.JUMP_TO_FIRST_UNREAD]: a.O,
        [C.EkH.RETURN_TO_AUDIO_CHANNEL]: u.F,
        [C.EkH.CALL_ACCEPT]: r.IL,
        [C.EkH.CALL_START]: r.FI,
        [C.EkH.QUICKSWITCHER_SHOW]: c.$
    },
    N = { [C.EkH.QUICKSWITCHER_SHOW]: c.$ };
function S() {
    return [
        {
            description: O.NW.string(O.t.bx4Uy8),
            binds: y(C.EkH.SERVER_PREV, C.EkH.SERVER_NEXT)
        },
        {
            description: O.NW.string(O.t['+Wem6u']),
            binds: y(C.EkH.CHANNEL_PREV, C.EkH.CHANNEL_NEXT)
        },
        {
            description: O.NW.string(O.t['+2fcd3']),
            binds: y(C.EkH.NAVIGATE_BACK, C.EkH.NAVIGATE_FORWARD)
        },
        {
            description: O.NW.string(O.t.eVmj1N),
            binds: y(C.EkH.UNREAD_PREV, C.EkH.UNREAD_NEXT)
        },
        {
            description: O.NW.string(O.t.EcqS7e),
            binds: y(C.EkH.MENTION_CHANNEL_PREV, C.EkH.MENTION_CHANNEL_NEXT),
            groupEnd: !0
        },
        {
            description: O.NW.string(O.t['Bqss7+']),
            binds: y(C.EkH.TOGGLE_PREVIOUS_GUILD)
        },
        {
            description: O.NW.string(O.t.UaXAPz),
            binds: y(C.EkH.MARK_SERVER_READ)
        },
        {
            description: O.NW.string(O.t['5X9vFh']),
            binds: y(C.EkH.MARK_CHANNEL_READ)
        },
        {
            description: O.NW.string(O.t.JoxNnp),
            binds: y(C.EkH.SEARCH_EMOJIS),
            groupEnd: !0
        },
        {
            description: O.NW.string(O.t.tL6eVV),
            binds: y(C.EkH.TOGGLE_MUTE)
        },
        {
            description: O.NW.string(O.t['QXe/7e']),
            binds: y(C.EkH.TOGGLE_DEAFEN)
        },
        {
            description: O.NW.string(O.t.d6UIio),
            binds: y(C.EkH.CALL_ACCEPT)
        },
        {
            description: O.NW.string(O.t.IcEW09),
            binds: y(C.EkH.MARK_CHANNEL_READ)
        },
        {
            description: O.NW.string(O.t.WN2dsb),
            binds: y(C.EkH.CALL_START),
            groupEnd: !0
        },
        {
            description: O.NW.string(O.t.L3RYYG),
            binds: y(C.EkH.SCROLL_UP, C.EkH.SCROLL_DOWN)
        },
        {
            description: O.NW.string(O.t['3HAurK']),
            binds: y(C.EkH.JUMP_TO_FIRST_UNREAD)
        },
        {
            description: O.NW.string(O.t.rrYBEh),
            binds: y(C.EkH.TEXTAREA_FOCUS)
        },
        {
            description: O.NW.string(O.t.yYsRlJ),
            binds: y(C.EkH.QUICKSWITCHER_SHOW)
        }
    ];
}
