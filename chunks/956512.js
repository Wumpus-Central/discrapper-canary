n.d(t, { Z: () => C });
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
function C(e) {
    let t,
        { currentUserId: I, message: S, application: C, channel: N, analyticsLocations: R, onView: P } = e,
        { staticBannerSrc: w, videoBannerSrc: D, bannerAspectRatio: x } = (0, d.E)(C),
        L = g.ZP.getApplicationIconURL({
            id: C.id,
            icon: C.icon,
        }),
        j = (0, i.e7)([f.ZP, h.Z], () =>
            null != S.application
                ? f.ZP.getVisibleRunningGames().find((e) => {
                      let { id: t } = e;
                      if (null == S.application) return !1;
                      if (t === S.application.id) return !0;
                      let n = h.Z.getGameByName(S.application.name);
                      return null != n && t === n.id;
                  })
                : null,
        ),
        M = (0, i.e7)([p.Z], () => p.Z.getCurrentUserActiveStream()),
        k = (0, i.e7)([m.Z], () => m.Z.getChannelId()),
        U = b.default.extractTimestamp(S.id) + y.e < Date.now(),
        G = (0, r.jsx)(r.Fragment, { children: (0, o._0)(S, N, I) }),
        { newestAnalyticsLocation: B } = (0, l.ZP)(R, s.Z.REQUEST_TO_STREAM_INVITE_EMBED);
    return (
        U
            ? (t = v.intl.string(O.default.u4QmWl))
            : null != M
              ? (t = v.intl.string(O.default.P0wwmJ))
              : k !== N.id
                ? (t = v.intl.string(O.default.qRXatr))
                : null == j && (t = v.intl.string(O.default["43zohI"])),
        (0, r.jsx)(c.W, {
            header: v.intl.string(O.default.nAyuPj),
            title: C.name,
            staticBannerSrc: w,
            videoBannerSrc: D,
            bannerAspectRatio: x,
            iconSrc: null != L ? L : void 0,
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
                                  null != j &&
                                      ((0, E.isWindows)()
                                          ? (0, _.Z)(j.pid)
                                          : (0, a.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("38697"),
                                                    n.e("46746"),
                                                    n.e("79839"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => (0, r.jsx)(e, A(T({}, t), { analyticsLocation: B }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: C.id,
                linkType: u.Un.REQUEST_TO_STREAM,
                onView: P,
            },
        })
    );
}
