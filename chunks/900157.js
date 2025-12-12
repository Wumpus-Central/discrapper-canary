n.d(t, { Z: () => N });
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(442837),
    o = n(570140),
    c = n(239091),
    d = n(561472),
    u = n(367907),
    p = n(731429),
    h = n(188471),
    f = n(933557),
    g = n(287746),
    m = n(541716),
    b = n(665149),
    y = n(910611),
    O = n(359110),
    x = n(592125),
    j = n(703558),
    v = n(430824),
    C = n(979651),
    I = n(664342),
    _ = n(124368),
    S = n(981631),
    E = n(388032),
    Z = n(19055);
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
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
    let { channelId: t, baseChannelId: l, channelViewSource: N = "Split View" } = e,
        R = (0, s.e7)([x.Z], () => x.Z.getChannel(t)),
        w = (0, s.e7)([v.Z], () => v.Z.getGuild(null == R ? void 0 : R.getGuildId())),
        A = (0, f.ZP)(R);
    var D = R;
    let L = (0, s.e7)([C.Z], () => null != D && !a().isEmpty(C.Z.getVoiceStatesForChannel(D.id)));
    i.useEffect(() => {
        L &&
            null != D &&
            (o.Z.dispatch({
                type: "SIDEBAR_CLOSE",
                baseChannelId: D.parent_id,
            }),
            (0, O.ad)(D, { source: _.on.VOICE_AUTO_OPEN }));
    }, [L, D]);
    let M = i.useRef(!1);
    if (
        (i.useEffect(() => {
            if (null == R || M.current) return;
            M.current = !0;
            let e = (0, p.K)(x.Z.getChannel(R.id), !0);
            (0, u.yw)(S.rMx.CHANNEL_OPENED, T(P({}, e, (0, u.$H)(R.id)), { channel_view: N })),
                (0, h.a)(S.rMx.CHANNEL_OPENED_CLICKSTREAM, { channelId: R.id });
        }, [R, N]),
        null == R || null == w)
    )
        return null;
    let k = (0, r.jsx)(I.Z, {
        channel: R,
        baseChannelId: l,
    });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(d.Z, {
                channel: R,
                draftType: j.d.ChannelMessage,
            }),
            (0, r.jsx)(b.ZP, {
                toolbar: k,
                "aria-label": E.intl.string(E.t.Pwe8tN),
                children: (0, y.ud)({
                    channel: R,
                    channelName: A,
                    guild: w,
                    inSidebar: !0,
                    handleContextMenu: function (e) {
                        (0, c.jW)(e, async () => {
                            let { default: e } = await n.e("40157").then(n.bind(n, 422200));
                            return (t) => (0, r.jsx)(e, T(P({}, t), { channel: R }));
                        });
                    },
                    handleClick: function () {
                        null != R && (0, O.Kh)(R.id);
                    },
                }),
            }),
            (0, r.jsx)("div", {
                className: Z.chat,
                children: (0, r.jsx)(
                    g.Z,
                    {
                        channel: R,
                        guild: w,
                        chatInputType: m.Ie.SIDEBAR,
                    },
                    t,
                ),
            }),
        ],
    });
}
