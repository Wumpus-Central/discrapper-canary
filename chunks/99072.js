n.d(t, { A: () => b });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(192308),
    s = n(456060),
    r = n(793574),
    o = n(688810),
    d = n(572211),
    c = n(354287),
    u = n(112150),
    m = n(15285),
    _ = n(72432),
    h = n(616356),
    p = n(760751),
    g = n(383501),
    A = n(486020),
    f = n(723702),
    x = n(661191),
    C = n(820672),
    E = n(768349),
    I = n(783198),
    v = n(985018);
function b(e) {
    let { currentUserId: t, message: b, application: T, channel: S, analyticsLocations: y, onView: N } = e,
        { staticBannerSrc: j, videoBannerSrc: L, bannerAspectRatio: R } = (0, u.f)(T),
        P = A.Ay.getApplicationIconURL({ id: T.id, icon: T.icon }),
        w = (0, l.bG)([m.Ay, p.A], () =>
            m.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === T.id) return !0;
                let n = p.A.getGameByApplication(T);
                return null != n && t === n.id;
            }),
        ),
        D = (0, l.bG)([h.A], () => h.A.getCurrentUserActiveStream()),
        k = (0, l.bG)([g.A], () => g.A.getChannelId()),
        O = x.default.extractTimestamp(b.id) + C.M < Date.now(),
        M = (0, i.jsx)(i.Fragment, { children: (0, s.Wf)(b, S, t) }),
        { analyticsLocations: U } = (0, o.Ay)(y, r.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = v.intl.string(I.default["5+172e"]),
        B = !1;
    return (
        O
            ? ((G = v.intl.string(I.default.u4QmWl)), (B = !0))
            : null != D
              ? ((G = v.intl.string(I.default.P0wwmM)), (B = !0))
              : k !== S.id
                ? ((G = v.intl.string(I.default.qRXats)), (B = !0))
                : null == w && ((G = v.intl.string(I.default["43zohO"])), (B = !0)),
        (0, i.jsx)(d.h, {
            header: v.intl.string(I.default.nAyuPp),
            title: T.name,
            staticBannerSrc: j,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: P ?? void 0,
            info: M,
            actions:
                b.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: c.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != w &&
                                      ((0, f.isWindows)()
                                          ? (0, _.A)(w.pid)
                                          : (0, a.openModalLazy)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("96811"),
                                                    n.e("31344"),
                                                ]).then(n.bind(n, 648230));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: U });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: T.id,
                linkType: E.J.REQUEST_TO_STREAM,
                guildId: S.guild_id,
                channelId: S.id,
                messageId: b.id,
                onView: N,
                isDeadEnd: O,
            },
        })
    );
}
