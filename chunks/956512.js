n.d(t, { Z: () => y });
var r = n(951288);
n(647438);
var i = n(442837),
    l = n(481060),
    a = n(758371),
    o = n(100527),
    s = n(906732),
    c = n(758199),
    u = n(914498),
    d = n(880251),
    p = n(594190),
    m = n(562224),
    f = n(199902),
    g = n(77498),
    _ = n(19780),
    h = n(768581),
    b = n(358085),
    E = n(709054),
    C = n(915553),
    v = n(658805),
    O = n(388032);
function y(e) {
    let t,
        { currentUserId: y, message: x, application: j, channel: I, analyticsLocations: S, onView: T } = e,
        { staticBannerSrc: P, videoBannerSrc: N, bannerAspectRatio: A } = (0, d.E)(j),
        w = h.ZP.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
        }),
        Z = (0, i.e7)([p.ZP, g.Z], () =>
            null != x.application
                ? p.ZP.getVisibleRunningGames().find((e) => {
                      var t;
                      let { id: n, name: r } = e;
                      return (
                          null != x.application &&
                          (null != n ? n : null == (t = g.Z.getGameByName(r)) ? void 0 : t.id) === x.application.id
                      );
                  })
                : null,
        ),
        R = (0, i.e7)([f.Z], () => f.Z.getCurrentUserActiveStream()),
        D = (0, i.e7)([_.Z], () => _.Z.getChannelId()),
        L = E.default.extractTimestamp(x.id) + C.e < Date.now(),
        M = (0, r.jsx)(r.Fragment, { children: (0, a._0)(x, j, I, y, !1) }),
        { newestAnalyticsLocation: k } = (0, s.ZP)(S, o.Z.REQUEST_TO_STREAM_INVITE_EMBED);
    return (
        L
            ? (t = O.intl.string(v.default.u4QmWl))
            : null != R
              ? (t = O.intl.string(v.default.P0wwmJ))
              : D !== I.id
                ? (t = O.intl.string(v.default.qRXatr))
                : null == Z && (t = O.intl.string(v.default["43zohI"])),
        (0, r.jsx)(c.W, {
            header: O.intl.string(v.default.DKHheX),
            title: j.name,
            staticBannerSrc: P,
            videoBannerSrc: N,
            bannerAspectRatio: A,
            iconSrc: null != w ? w : void 0,
            info: M,
            actions:
                x.author.id === y
                    ? []
                    : [
                          {
                              label: O.intl.string(v.default["5+172d"]),
                              trackingArea: u.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != Z &&
                                      ((0, b.isWindows)()
                                          ? (0, m.Z)(Z.pid)
                                          : (0, l.ZDy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("38697"),
                                                    n.e("46746"),
                                                    n.e("34983"),
                                                ]).then(n.bind(n, 60594));
                                                return (t) => {
                                                    var n, i;
                                                    return (0, r.jsx)(
                                                        e,
                                                        ((n = (function (e) {
                                                            for (var t = 1; t < arguments.length; t++) {
                                                                var n = null != arguments[t] ? arguments[t] : {},
                                                                    r = Object.keys(n);
                                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                                    (r = r.concat(
                                                                        Object.getOwnPropertySymbols(n).filter(
                                                                            function (e) {
                                                                                return Object.getOwnPropertyDescriptor(
                                                                                    n,
                                                                                    e,
                                                                                ).enumerable;
                                                                            },
                                                                        ),
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
                                                        })({}, t)),
                                                        (i = i = { analyticsLocation: k }),
                                                        Object.getOwnPropertyDescriptors
                                                            ? Object.defineProperties(
                                                                  n,
                                                                  Object.getOwnPropertyDescriptors(i),
                                                              )
                                                            : (function (e, t) {
                                                                  var n = Object.keys(e);
                                                                  if (Object.getOwnPropertySymbols) {
                                                                      var r = Object.getOwnPropertySymbols(e);
                                                                      n.push.apply(n, r);
                                                                  }
                                                                  return n;
                                                              })(Object(i)).forEach(function (e) {
                                                                  Object.defineProperty(
                                                                      n,
                                                                      e,
                                                                      Object.getOwnPropertyDescriptor(i, e),
                                                                  );
                                                              }),
                                                        n),
                                                    );
                                                };
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: j.id,
                linkType: u.Un.REQUEST_TO_STREAM,
                onView: T,
            },
        })
    );
}
