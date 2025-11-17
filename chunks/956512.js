n.d(t, { Z: () => N });
var r = n(54381);
n(473749);
var i = n(442837),
    a = n(481060),
    o = n(758371),
    s = n(100527),
    l = n(906732),
    c = n(758199),
    u = n(914498),
    d = n(880251),
    f = n(594190),
    _ = n(562224),
    p = n(199902),
    h = n(77498),
    m = n(19780),
    g = n(768581),
    E = n(358085),
    b = n(709054),
    y = n(915553),
    O = n(967249),
    v = n(621844),
    I = n(388032);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { currentUserId: t, message: T, application: A, channel: N, analyticsLocations: R, onView: P } = e,
        { staticBannerSrc: D, videoBannerSrc: w, bannerAspectRatio: x } = (0, d.E)(A),
        L = g.ZP.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
        }),
        M = (0, i.e7)([f.ZP, h.Z], () =>
            f.ZP.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === A.id) return !0;
                let n = h.Z.getGameByApplication(A);
                return null != n && t === n.id;
            }),
        ),
        k = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()),
        j = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
        U = b.default.extractTimestamp(T.id) + y.O < Date.now(),
        G = (0, r.jsx)(r.Fragment, { children: (0, o._0)(T, N, t) }),
        { newestAnalyticsLocation: B } = (0, l.ZP)(R, s.Z.REQUEST_TO_STREAM_INVITE_EMBED),
        Z = I.intl.string(v.default["5+172e"]),
        F = !1;
    return (
        U
            ? ((Z = I.intl.string(v.default.u4QmWl)), (F = !0))
            : null != k
              ? ((Z = I.intl.string(v.default.P0wwmM)), (F = !0))
              : j !== N.id
                ? ((Z = I.intl.string(v.default.qRXats)), (F = !0))
                : null == M && ((Z = I.intl.string(v.default["43zohO"])), (F = !0)),
        (0, r.jsx)(c.W, {
            header: I.intl.string(v.default.nAyuPp),
            title: A.name,
            staticBannerSrc: D,
            videoBannerSrc: w,
            bannerAspectRatio: x,
            iconSrc: null != L ? L : void 0,
            info: G,
            actions:
                T.author.id === t
                    ? []
                    : [
                          {
                              label: Z,
                              trackingArea: u.j_.STREAM,
                              disabled: F,
                              onClick: () => {
                                  null != M &&
                                      ((0, E.isWindows)()
                                          ? (0, _.Z)(M.pid)
                                          : (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("38697"),
                                                    n.e("4093"),
                                                    n.e("47863"),
                                                    n.e("39173"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => (0, r.jsx)(e, C(S({}, t), { analyticsLocation: B }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: A.id,
                linkType: O.U.REQUEST_TO_STREAM,
                guildId: N.guild_id,
                channelId: N.id,
                messageId: T.id,
                onView: P,
                isDeadEnd: U,
            },
        })
    );
}
