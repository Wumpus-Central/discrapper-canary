n.d(t, {
    Z: function () {
        return A;
    }
});
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n.n(r),
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
    C = n(665149),
    x = n(910611),
    v = n(359110),
    _ = n(592125),
    I = n(703558),
    E = n(430824),
    b = n(979651),
    Z = n(664342),
    N = n(124368),
    S = n(981631),
    T = n(388032),
    j = n(31224);
function A(e) {
    let { channelId: t, baseChannelId: r, channelViewSource: A = 'Split View' } = e,
        y = (0, s.e7)([_.Z], () => _.Z.getChannel(t)),
        P = (0, s.e7)([E.Z], () => E.Z.getGuild(null == y ? void 0 : y.getGuildId())),
        M = (0, m.ZP)(y);
    (function (e) {
        let t = (0, s.e7)([b.Z], () => null != e && !a().isEmpty(b.Z.getVoiceStatesForChannel(e.id)));
        l.useEffect(() => {
            t &&
                null != e &&
                (o.Z.dispatch({
                    type: 'SIDEBAR_CLOSE',
                    baseChannelId: e.parent_id
                }),
                (0, v.ad)(e, { source: N.on.VOICE_AUTO_OPEN }));
        }, [t, e]);
    })(y);
    let R = l.useRef(!1);
    if (
        (l.useEffect(() => {
            if (null == y || R.current) return;
            R.current = !0;
            let e = (0, h.K)(_.Z.getChannel(y.id), !0);
            (0, u.yw)(S.rMx.CHANNEL_OPENED, {
                ...e,
                ...(0, u.$H)(y.id),
                channel_view: A
            }),
                (0, p.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: y.id });
        }, [y, A]),
        null == y || null == P)
    )
        return null;
    let L = (0, i.jsx)(Z.Z, {
        channel: y,
        baseChannelId: r
    });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(d.Z, {
                channel: y,
                draftType: I.d.ChannelMessage
            }),
            (0, i.jsx)(C.ZP, {
                toolbar: L,
                'aria-label': T.intl.string(T.t.Pwe8tL),
                children: (0, x.ud)({
                    channel: y,
                    channelName: M,
                    guild: P,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    channel: y
                                });
                        });
                    },
                    handleClick: function () {
                        if (null != y) (0, v.Kh)(y.id);
                    }
                })
            }),
            (0, i.jsx)('div', {
                className: j.chat,
                children: (0, i.jsx)(
                    f.Z,
                    {
                        channel: y,
                        guild: P,
                        chatInputType: g.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
