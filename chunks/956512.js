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
    p = n(562224),
    _ = n(199902),
    m = n(77498),
    h = n(19780),
    g = n(768581),
    E = n(358085),
    b = n(709054),
    y = n(915553),
    O = n(967249),
    v = n(178473),
    S = n(388032);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
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
    let { currentUserId: t, message: I, application: A, channel: N, analyticsLocations: P, onView: R } = e,
        { staticBannerSrc: w, videoBannerSrc: D, bannerAspectRatio: x } = (0, d.E)(A),
        L = g.ZP.getApplicationIconURL({
            id: A.id,
            icon: A.icon,
        }),
        j = (0, i.e7)([f.ZP, m.Z], () =>
            f.ZP.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === A.id) return !0;
                let n = m.Z.getGameByApplication(A);
                return null != n && t === n.id;
            }),
        ),
        M = (0, i.e7)([_.Z], () => _.Z.getCurrentUserActiveStream()),
        k = (0, i.e7)([h.Z], () => h.Z.getChannelId()),
        U = b.default.extractTimestamp(I.id) + y.O < Date.now(),
        G = (0, r.jsx)(r.Fragment, { children: (0, o._0)(I, N, t) }),
        { newestAnalyticsLocation: Z } = (0, l.ZP)(P, s.Z.REQUEST_TO_STREAM_INVITE_EMBED),
        B = S.intl.string(v.default["5+172e"]),
        F = !1;
    return (
        U
            ? ((B = S.intl.string(v.default.u4QmWl)), (F = !0))
            : null != M
              ? ((B = S.intl.string(v.default.P0wwmM)), (F = !0))
              : k !== N.id
                ? ((B = S.intl.string(v.default.qRXats)), (F = !0))
                : null == j && ((B = S.intl.string(v.default["43zohO"])), (F = !0)),
        (0, r.jsx)(c.W, {
            header: S.intl.string(v.default.nAyuPp),
            title: A.name,
            staticBannerSrc: w,
            videoBannerSrc: D,
            bannerAspectRatio: x,
            iconSrc: null != L ? L : void 0,
            info: G,
            actions:
                I.author.id === t
                    ? []
                    : [
                          {
                              label: B,
                              trackingArea: u.j_.STREAM,
                              disabled: F,
                              onClick: () => {
                                  null != j &&
                                      ((0, E.isWindows)()
                                          ? (0, p.Z)(j.pid)
                                          : (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("38697"),
                                                    n.e("4093"),
                                                    n.e("47863"),
                                                    n.e("59416"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => (0, r.jsx)(e, C(T({}, t), { analyticsLocation: Z }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: A.id,
                linkType: O.U.REQUEST_TO_STREAM,
                guildId: N.guild_id,
                channelId: N.id,
                messageId: I.id,
                onView: R,
                isDeadEnd: U,
            },
        })
    );
}
