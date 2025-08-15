n.d(t, { Z: () => N });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(758371),
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
    O = n(658805),
    v = n(388032);
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
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let t,
        { currentUserId: I, message: S, application: N, channel: C, analyticsLocations: R, onView: P } = e,
        { staticBannerSrc: w, videoBannerSrc: D, bannerAspectRatio: L } = (0, d.E)(N),
        x = g.ZP.getApplicationIconURL({
            id: N.id,
            icon: N.icon,
        }),
        M = (0, i.e7)([f.ZP, h.Z], () =>
            null != S.application
                ? f.ZP.getVisibleRunningGames().find((e) => {
                      var t;
                      let { id: n, name: r } = e;
                      return (
                          null != S.application &&
                          (null != n ? n : null == (t = h.Z.getGameByName(r)) ? void 0 : t.id) === S.application.id
                      );
                  })
                : null,
        ),
        j = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()),
        k = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
        U = b.default.extractTimestamp(S.id) + y.e < Date.now(),
        G = (0, r.jsx)(r.Fragment, { children: (0, a._0)(S, N, C, I, !1) }),
        { newestAnalyticsLocation: B } = (0, l.ZP)(R, s.Z.REQUEST_TO_STREAM_INVITE_EMBED);
    return (
        U
            ? (t = v.intl.string(O.default.u4QmWl))
            : null != j
              ? (t = v.intl.string(O.default.P0wwmJ))
              : k !== C.id
                ? (t = v.intl.string(O.default.qRXatr))
                : null == M && (t = v.intl.string(O.default["43zohI"])),
        (0, r.jsx)(c.W, {
            header: v.intl.string(O.default.DKHheX),
            title: N.name,
            staticBannerSrc: w,
            videoBannerSrc: D,
            bannerAspectRatio: L,
            iconSrc: null != x ? x : void 0,
            info: G,
            actions:
                S.author.id === I
                    ? []
                    : [
                          {
                              label: v.intl.string(O.default["5+172d"]),
                              trackingArea: u.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != M &&
                                      ((0, E.isWindows)()
                                          ? (0, _.Z)(M.pid)
                                          : (0, o.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("46746"),
                                                    n.e("74304"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => (0, r.jsx)(e, A(T({}, t), { analyticsLocation: B }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: N.id,
                linkType: u.Un.REQUEST_TO_STREAM,
                onView: P,
            },
        })
    );
}
