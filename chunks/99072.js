n.d(t, {
    A: () => E,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(456060),
    s = n(793574),
    o = n(688810),
    c = n(572211),
    u = n(354287),
    d = n(112150),
    p = n(15285),
    m = n(72432),
    f = n(616356),
    g = n(760751),
    h = n(383501),
    _ = n(486020),
    b = n(723702),
    A = n(661191),
    y = n(820672),
    v = n(768349),
    x = n(426127),
    O = n(985018);

function E(e) {
    let { currentUserId: t, message: E, application: j, channel: C, analyticsLocations: I, onView: S } = e,
        { staticBannerSrc: T, videoBannerSrc: N, bannerAspectRatio: P } = (0, d.f)(j),
        w = _.Ay.getApplicationIconURL({
            id: j.id,
            icon: j.icon,
        }),
        R = (0, i.bG)([p.Ay, g.A], () =>
            p.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === j.id) return !0;
                let n = g.A.getGameByApplication(j);
                return null != n && t === n.id;
            }),
        ),
        D = (0, i.bG)([f.A], () => f.A.getCurrentUserActiveStream()),
        L = (0, i.bG)([h.A], () => h.A.getChannelId()),
        M = A.default.extractTimestamp(E.id) + y.M < Date.now(),
        k = (0, r.jsx)(r.Fragment, {
            children: (0, a.Wf)(E, C, t),
        }),
        { analyticsLocations: U } = (0, o.Ay)(I, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = O.intl.string(x.default["5+172e"]),
        B = !1;
    return (
        M
            ? ((G = O.intl.string(x.default.u4QmWl)), (B = !0))
            : null != D
              ? ((G = O.intl.string(x.default.P0wwmM)), (B = !0))
              : L !== C.id
                ? ((G = O.intl.string(x.default.qRXats)), (B = !0))
                : null == R && ((G = O.intl.string(x.default["43zohO"])), (B = !0)),
        (0, r.jsx)(c.h, {
            header: O.intl.string(x.default.nAyuPp),
            title: j.name,
            staticBannerSrc: T,
            videoBannerSrc: N,
            bannerAspectRatio: P,
            iconSrc: null != w ? w : void 0,
            info: k,
            actions:
                E.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: u.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != R &&
                                      ((0, b.isWindows)()
                                          ? (0, m.A)(R.pid)
                                          : (0, l.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("96811"),
                                                    n.e("48697"),
                                                ]).then(n.bind(n, 648230));
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
                                                        (i = i =
                                                            {
                                                                analyticsLocations: U,
                                                            }),
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
                linkType: v.J.REQUEST_TO_STREAM,
                guildId: C.guild_id,
                channelId: C.id,
                messageId: E.id,
                onView: S,
                isDeadEnd: M,
            },
        })
    );
}
