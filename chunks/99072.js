n.d(t, { A: () => N });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(456060),
    o = n(793574),
    l = n(688810),
    c = n(572211),
    u = n(354287),
    d = n(112150),
    f = n(15285),
    p = n(72432),
    _ = n(616356),
    h = n(760751),
    m = n(383501),
    g = n(486020),
    E = n(723702),
    b = n(661191),
    y = n(820672),
    O = n(768349),
    A = n(426127),
    v = n(985018);
function S(e, t, n) {
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
function I(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e) {
    let { currentUserId: t, message: S, application: T, channel: N, analyticsLocations: R, onView: w } = e,
        { staticBannerSrc: P, videoBannerSrc: D, bannerAspectRatio: x } = (0, d.f)(T),
        L = g.Ay.getApplicationIconURL({
            id: T.id,
            icon: T.icon,
        }),
        j = (0, i.bG)([f.Ay, h.A], () =>
            f.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === T.id) return !0;
                let n = h.A.getGameByApplication(T);
                return null != n && t === n.id;
            }),
        ),
        M = (0, i.bG)([_.A], () => _.A.getCurrentUserActiveStream()),
        k = (0, i.bG)([m.A], () => m.A.getChannelId()),
        U = b.default.extractTimestamp(S.id) + y.M < Date.now(),
        G = (0, r.jsx)(r.Fragment, { children: (0, s.Wf)(S, N, t) }),
        { analyticsLocations: V } = (0, l.Ay)(R, o.A.REQUEST_TO_STREAM_INVITE_EMBED),
        F = v.intl.string(A.default["5+172e"]),
        B = !1;
    return (
        U
            ? ((F = v.intl.string(A.default.u4QmWl)), (B = !0))
            : null != M
              ? ((F = v.intl.string(A.default.P0wwmM)), (B = !0))
              : k !== N.id
                ? ((F = v.intl.string(A.default.qRXats)), (B = !0))
                : null == j && ((F = v.intl.string(A.default["43zohO"])), (B = !0)),
        (0, r.jsx)(c.h, {
            header: v.intl.string(A.default.nAyuPp),
            title: T.name,
            staticBannerSrc: P,
            videoBannerSrc: D,
            bannerAspectRatio: x,
            iconSrc: null != L ? L : void 0,
            info: G,
            actions:
                S.author.id === t
                    ? []
                    : [
                          {
                              label: F,
                              trackingArea: u.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != j &&
                                      ((0, E.isWindows)()
                                          ? (0, p.A)(j.pid)
                                          : (0, a.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("96811"),
                                                    n.e("14476"),
                                                ]).then(n.bind(n, 648230));
                                                return (t) => (0, r.jsx)(e, C(I({}, t), { analyticsLocations: V }));
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: T.id,
                linkType: O.J.REQUEST_TO_STREAM,
                guildId: N.guild_id,
                channelId: N.id,
                messageId: S.id,
                onView: w,
                isDeadEnd: U,
            },
        })
    );
}
