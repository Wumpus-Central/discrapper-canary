n.d(t, { Z: () => y });
var i = n(200651),
    l = n(192379),
    a = n(392711),
    r = n.n(a),
    s = n(442837),
    o = n(570140),
    c = n(239091),
    d = n(561472),
    u = n(367907),
    h = n(731429),
    p = n(188471),
    m = n(933557),
    f = n(287746),
    g = n(541716),
    _ = n(665149),
    C = n(910611),
    x = n(359110),
    v = n(592125),
    E = n(703558),
    I = n(430824),
    b = n(979651),
    Z = n(664342),
    N = n(124368),
    T = n(981631),
    S = n(388032),
    j = n(475684);
function y(e) {
    let { channelId: t, baseChannelId: a, channelViewSource: y = 'Split View' } = e,
        A = (0, s.e7)([v.Z], () => v.Z.getChannel(t)),
        P = (0, s.e7)([I.Z], () => I.Z.getGuild(null == A ? void 0 : A.getGuildId())),
        R = (0, m.ZP)(A);
    !(function (e) {
        let t = (0, s.e7)([b.Z], () => null != e && !r().isEmpty(b.Z.getVoiceStatesForChannel(e.id)));
        l.useEffect(() => {
            t &&
                null != e &&
                (o.Z.dispatch({
                    type: 'SIDEBAR_CLOSE',
                    baseChannelId: e.parent_id
                }),
                (0, x.ad)(e, { source: N.on.VOICE_AUTO_OPEN }));
        }, [t, e]);
    })(A);
    let M = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == A || M.current) return;
            M.current = !0;
            let e = (0, h.K)(v.Z.getChannel(A.id), !0);
            (0, u.yw)(T.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, u.$H)(A.id),
                channel_view: y
            }),
                (0, p.a)(T.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: A.id });
        }, [A, y]),
        null == A || null == P)
    )
        return null;
    let L = (0, i.jsx)(Z.Z, {
        channel: A,
        baseChannelId: a
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                channel: A,
                draftType: E.d.ChannelMessage
            }),
            (0, i.jsx)(_.ZP, {
                toolbar: L,
                'aria-label': S.intl.string(S.t.Pwe8tL),
                children: (0, C.ud)({
                    channel: A,
                    channelName: R,
                    guild: P,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('78650').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: A
                                });
                        });
                    },
                    handleClick: function () {
                        null != A && (0, x.Kh)(A.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: j.chat,
                children: (0, i.jsx)(
                    f.Z,
                    {
                        channel: A,
                        guild: P,
                        chatInputType: g.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
