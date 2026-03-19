n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var r = n(311907),
    a = n(397927),
    l = n(456060),
    s = n(793574),
    o = n(688810),
    d = n(572211),
    c = n(354287),
    u = n(112150),
    _ = n(15285),
    m = n(72432),
    h = n(616356),
    p = n(760751),
    g = n(383501),
    A = n(486020),
    x = n(723702),
    f = n(661191),
    C = n(820672),
    I = n(768349),
    E = n(55705),
    v = n(985018);
function b(e) {
    let { currentUserId: t, message: b, application: T, channel: y, analyticsLocations: S, onView: N } = e,
        { staticBannerSrc: j, videoBannerSrc: L, bannerAspectRatio: R } = (0, u.f)(T),
        P = A.Ay.getApplicationIconURL({ id: T.id, icon: T.icon }),
        M = (0, r.bG)([_.Ay, p.A], () =>
            _.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === T.id) return !0;
                let n = p.A.getGameByApplication(T);
                return null != n && t === n.id;
            }),
        ),
        w = (0, r.bG)([h.A], () => h.A.getCurrentUserActiveStream()),
        D = (0, r.bG)([g.A], () => g.A.getChannelId()),
        k = f.default.extractTimestamp(b.id) + C.M < Date.now(),
        O = (0, i.jsx)(i.Fragment, { children: (0, l.Wf)(b, y, t) }),
        { analyticsLocations: U } = (0, o.Ay)(S, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        B = v.intl.string(E.default["5+172e"]),
        G = !1;
    return (
        k
            ? ((B = v.intl.string(E.default.u4QmWl)), (G = !0))
            : null != w
              ? ((B = v.intl.string(E.default.P0wwmM)), (G = !0))
              : D !== y.id
                ? ((B = v.intl.string(E.default.qRXats)), (G = !0))
                : null == M && ((B = v.intl.string(E.default["43zohO"])), (G = !0)),
        (0, i.jsx)(d.h, {
            header: v.intl.string(E.default.nAyuPp),
            title: T.name,
            staticBannerSrc: j,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: P ?? void 0,
            info: O,
            actions:
                b.author.id === t
                    ? []
                    : [
                          {
                              label: B,
                              trackingArea: c.kY.STREAM,
                              disabled: G,
                              onClick: () => {
                                  null != M &&
                                      ((0, x.isWindows)()
                                          ? (0, m.A)(M.pid)
                                          : (0, a.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("96811"),
                                                    n.e("48697"),
                                                ]).then(n.bind(n, 648230));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: T.id,
                linkType: I.J.REQUEST_TO_STREAM,
                guildId: y.guild_id,
                channelId: y.id,
                messageId: b.id,
                onView: N,
                isDeadEnd: k,
            },
        })
    );
}
