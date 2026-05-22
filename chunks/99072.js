n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var l = n(17928),
    r = n(192308),
    a = n(456060),
    s = n(793574),
    o = n(688810),
    d = n(572211),
    c = n(354287),
    u = n(112150),
    m = n(952818),
    p = n(72432),
    A = n(616356),
    g = n(760751),
    I = n(763827),
    h = n(486020),
    C = n(723702),
    S = n(935208),
    E = n(820672),
    f = n(768349),
    _ = n(783198),
    x = n(375708);
function T(e) {
    let { currentUserId: t, message: T, application: v, channel: N, analyticsLocations: y, onView: k } = e,
        { staticBannerSrc: b, videoBannerSrc: L, bannerAspectRatio: R } = (0, u.f)(v),
        P = h.Ay.getApplicationIconURL({ id: v.id, icon: v.icon }),
        D = (0, l.bG)([m.Ay, g.A], () =>
            m.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === v.id) return !0;
                let n = g.A.getGameByApplication(v);
                return null != n && t === n.id;
            }),
        ),
        O = (0, l.bG)([A.A], () => A.A.getCurrentUserActiveStream()),
        U = (0, l.bG)([I.A], () => I.A.getChannelId()),
        j = S.default.extractTimestamp(T.id) + E.M < Date.now(),
        G = (0, i.jsx)(i.Fragment, { children: (0, a.Wf)(T, N, t) }),
        { analyticsLocations: M } = (0, o.Ay)(y, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        B = x.intl.string(_.default["5+172e"]),
        w = !1;
    return (
        j
            ? ((B = x.intl.string(_.default.u4QmWl)), (w = !0))
            : null != O
              ? ((B = x.intl.string(_.default.P0wwmM)), (w = !0))
              : U !== N.id
                ? ((B = x.intl.string(_.default.qRXats)), (w = !0))
                : null == D && ((B = x.intl.string(_.default["43zohO"])), (w = !0)),
        (0, i.jsx)(d.h, {
            header: x.intl.string(_.default.nAyuPp),
            title: v.name,
            staticBannerSrc: b,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: P ?? void 0,
            info: G,
            actions:
                T.author.id === t
                    ? []
                    : [
                          {
                              label: B,
                              trackingArea: c.kY.STREAM,
                              disabled: w,
                              onClick: () => {
                                  null != D &&
                                      ((0, C.isWindows)()
                                          ? (0, p.A)(D.pid)
                                          : (0, r.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("26439"),
                                                    n.e("17918"),
                                                    n.e("76171"),
                                                    n.e("38601"),
                                                    n.e("36946"),
                                                    n.e("6809"),
                                                    n.e("44801"),
                                                    n.e("44727"),
                                                    n.e("25241"),
                                                    n.e("6565"),
                                                    n.e("14304"),
                                                    n.e("76229"),
                                                    n.e("91782"),
                                                    n.e("90088"),
                                                ]).then(n.bind(n, 477156));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: M });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: v.id,
                linkType: f.J.REQUEST_TO_STREAM,
                guildId: N.guild_id,
                channelId: N.id,
                messageId: T.id,
                onView: k,
                isDeadEnd: j,
            },
        })
    );
}
