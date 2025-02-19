n.d(t, { Z: () => T });
var r = n(200651),
    i = n(192379),
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
    C = n(359110),
    v = n(592125),
    y = n(703558),
    x = n(430824),
    j = n(979651),
    O = n(664342),
    N = n(124368),
    E = n(981631),
    P = n(388032),
    I = n(35821);
function S(e) {
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
function Z(e, t) {
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
        A = (0, a.e7)([v.Z], () => v.Z.getChannel(t)),
        w = (0, a.e7)([x.Z], () => x.Z.getGuild(null == A ? void 0 : A.getGuildId())),
        R = (0, f.ZP)(A);
    !(function (e) {
        let t = (0, a.e7)([j.Z], () => null != e && !o().isEmpty(j.Z.getVoiceStatesForChannel(e.id)));
        i.useEffect(() => {
            t &&
                null != e &&
                (s.Z.dispatch({
                    type: 'SIDEBAR_CLOSE',
                    baseChannelId: e.parent_id
                }),
                (0, C.ad)(e, { source: N.on.VOICE_AUTO_OPEN }));
        }, [t, e]);
    })(A);
    let k = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (null == A || k.current) return;
            k.current = !0;
            let e = (0, p.K)(v.Z.getChannel(A.id), !0);
            (0, d.yw)(E.rMx.CHANNEL_OPENED, Z(S({}, e, (0, d.$H)(A.id)), { channel_view: T })), (0, h.a)(E.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: A.id });
        }, [A, T]),
        null == A || null == w)
    )
        return null;
    let M = (0, r.jsx)(O.Z, {
        channel: A,
        baseChannelId: l
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(u.Z, {
                channel: A,
                draftType: y.d.ChannelMessage
            }),
            (0, r.jsx)(b.ZP, {
                toolbar: M,
                'aria-label': P.NW.string(P.t.Pwe8tL),
                children: (0, _.ud)({
                    channel: A,
                    channelName: R,
                    guild: w,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e('40157').then(n.bind(n, 422200));
                            return (t) => (0, r.jsx)(e, Z(S({}, t), { channel: A }));
                        });
                    },
                    handleClick: function () {
                        null != A && (0, C.Kh)(A.id);
                    }
                })
            }),
            (0, r.jsx)('div', {
                className: I.chat,
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
