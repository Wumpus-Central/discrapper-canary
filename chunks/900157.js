n.d(t, { Z: () => N });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(570140),
    c = n(239091),
    d = n(561472),
    u = n(367907),
    h = n(731429),
    p = n(188471),
    f = n(933557),
    g = n(287746),
    m = n(541716),
    b = n(665149),
    _ = n(910611),
    y = n(359110),
    j = n(592125),
    O = n(703558),
    x = n(430824),
    v = n(979651),
    C = n(664342),
    E = n(124368),
    Z = n(981631),
    I = n(388032),
    S = n(591837);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { channelId: t, baseChannelId: l, channelViewSource: N = 'Split View' } = e,
        w = (0, s.e7)([j.Z], () => j.Z.getChannel(t)),
        R = (0, s.e7)([x.Z], () => x.Z.getGuild(null == w ? void 0 : w.getGuildId())),
        A = (0, f.ZP)(w);
    var D = w;
    let L = (0, s.e7)([v.Z], () => null != D && !a().isEmpty(v.Z.getVoiceStatesForChannel(D.id)));
    i.useEffect(() => {
        L &&
            null != D &&
            (o.Z.dispatch({
                type: 'SIDEBAR_CLOSE',
                baseChannelId: D.parent_id
            }),
            (0, y.ad)(D, { source: E.on.VOICE_AUTO_OPEN }));
    }, [L, D]);
    let M = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (null == w || M.current) return;
            M.current = !0;
            let e = (0, h.K)(j.Z.getChannel(w.id), !0);
            ((0, u.yw)(Z.rMx.CHANNEL_OPENED, T(P({}, e, (0, u.$H)(w.id)), { channel_view: N })), (0, p.a)(Z.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: w.id }));
        }, [w, N]),
        null == w || null == R)
    )
        return null;
    let k = (0, r.jsx)(C.Z, {
        channel: w,
        baseChannelId: l
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Z, {
                channel: w,
                draftType: O.d.ChannelMessage
            }),
            (0, r.jsx)(b.ZP, {
                toolbar: k,
                'aria-label': I.intl.string(I.t.Pwe8tL),
                children: (0, _.ud)({
                    channel: w,
                    channelName: A,
                    guild: R,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) => (0, r.jsx)(e, T(P({}, t), { channel: w }));
                        });
                    },
                    handleClick: function () {
                        null != w && (0, y.Kh)(w.id);
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: S.chat,
                children: (0, r.jsx)(
                    g.Z,
                    {
                        channel: w,
                        guild: R,
                        chatInputType: m.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
