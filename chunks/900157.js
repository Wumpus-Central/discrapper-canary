n.d(t, { Z: () => T });
var r = n(255367),
    i = n(73800),
    l = n(392711),
    o = n.n(l),
    a = n(442837),
    s = n(570140),
    c = n(239091),
    u = n(561472),
    d = n(367907),
    p = n(731429),
    h = n(188471),
    f = n(933557),
    m = n(287746),
    g = n(541716),
    b = n(665149),
    _ = n(910611),
    y = n(359110),
    C = n(592125),
    x = n(703558),
    v = n(430824),
    j = n(979651),
    O = n(664342),
    E = n(124368),
    I = n(981631),
    P = n(388032),
    S = n(591837);
function Z(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function N(e, t) {
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
function T(e) {
    let { channelId: t, baseChannelId: l, channelViewSource: T = 'Split View' } = e,
        A = (0, a.e7)([C.Z], () => C.Z.getChannel(t)),
        w = (0, a.e7)([v.Z], () => v.Z.getGuild(null == A ? void 0 : A.getGuildId())),
        R = (0, f.ZP)(A);
    var k = A;
    let M = (0, a.e7)([j.Z], () => null != k && !o().isEmpty(j.Z.getVoiceStatesForChannel(k.id)));
    i.useEffect(() => {
        M &&
            null != k &&
            (s.Z.dispatch({
                type: 'SIDEBAR_CLOSE',
                baseChannelId: k.parent_id
            }),
            (0, y.ad)(k, { source: E.on.VOICE_AUTO_OPEN }));
    }, [M, k]);
    let L = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (null == A || L.current) return;
            L.current = !0;
            let e = (0, p.K)(C.Z.getChannel(A.id), !0);
            (0, d.yw)(I.rMx.CHANNEL_OPENED, N(Z({}, e, (0, d.$H)(A.id)), { channel_view: T })), (0, h.a)(I.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: A.id });
        }, [A, T]),
        null == A || null == w)
    )
        return null;
    let D = (0, r.jsx)(O.Z, {
        channel: A,
        baseChannelId: l
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                channel: A,
                draftType: x.d.ChannelMessage
            }),
            (0, r.jsx)(b.ZP, {
                toolbar: D,
                'aria-label': P.intl.string(P.t.Pwe8tL),
                children: (0, _.ud)({
                    channel: A,
                    channelName: R,
                    guild: w,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) => (0, r.jsx)(e, N(Z({}, t), { channel: A }));
                        });
                    },
                    handleClick: function () {
                        null != A && (0, y.Kh)(A.id);
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: S.chat,
                children: (0, r.jsx)(
                    m.Z,
                    {
                        channel: A,
                        guild: w,
                        chatInputType: g.Ie.SIDEBAR
                    },
                    t
                )
            })
        ]
    });
}
