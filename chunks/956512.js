n.d(t, { Z: () => N });
var r = n(951288);
n(647438);
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
    v = n(658805),
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
    let t,
        { currentUserId: T, message: A, application: N, channel: R, analyticsLocations: P, onView: w } = e,
        { staticBannerSrc: D, videoBannerSrc: x, bannerAspectRatio: L } = (0, d.E)(N),
        j = g.ZP.getApplicationIconURL({
            id: N.id,
            icon: N.icon,
        }),
        M = (0, i.e7)([f.ZP, h.Z], () =>
            f.ZP.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === N.id) return !0;
                let n = h.Z.getGameByApplication(N);
                return null != n && t === n.id;
            }),
        ),
        k = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()),
        U = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
        G = b.default.extractTimestamp(A.id) + y.O < Date.now(),
        B = (0, r.jsx)(r.Fragment, { children: (0, o._0)(A, R, T) }),
        { newestAnalyticsLocation: Z } = (0, l.ZP)(P, s.Z.REQUEST_TO_STREAM_INVITE_EMBED);
    return (
        G
            ? (t = I.intl.string(v.default.u4QmWl))
            : null != k
              ? (t = I.intl.string(v.default.P0wwmJ))
              : U !== R.id
                ? (t = I.intl.string(v.default.qRXatr))
                : null == M && (t = I.intl.string(v.default["43zohI"])),
        (0, r.jsx)(c.W, {
            header: I.intl.string(v.default.nAyuPj),
            title: N.name,
            staticBannerSrc: D,
            videoBannerSrc: x,
            bannerAspectRatio: L,
            iconSrc: null != j ? j : void 0,
            info: B,
            actions:
                A.author.id === T
                    ? []
                    : [
                          {
                              label: I.intl.string(v.default["5+172d"]),
                              trackingArea: u.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != M &&
                                      ((0, E.isWindows)()
                                          ? (0, _.Z)(M.pid)
                                          : (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("38697"),
                                                    n.e("46746"),
                                                    n.e("39173"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => (0, r.jsx)(e, C(S({}, t), { analyticsLocation: Z }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: N.id,
                linkType: O.U.REQUEST_TO_STREAM,
                guildId: R.guild_id,
                channelId: R.id,
                messageId: A.id,
                onView: w,
            },
        })
    );
}
