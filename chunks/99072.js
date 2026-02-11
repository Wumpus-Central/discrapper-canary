n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    r = n(456060),
    s = n(793574),
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
    E = n(820672),
    C = n(768349),
    I = n(55705),
    T = n(985018);
function v(e) {
    let { currentUserId: t, message: v, application: N, channel: S, analyticsLocations: b, onView: j } = e,
        { staticBannerSrc: y, videoBannerSrc: R, bannerAspectRatio: L } = (0, u.f)(N),
        M = A.Ay.getApplicationIconURL({ id: N.id, icon: N.icon }),
        O = (0, l.bG)([m.Ay, p.A], () =>
            m.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === N.id) return !0;
                let n = p.A.getGameByApplication(N);
                return null != n && t === n.id;
            }),
        ),
        D = (0, l.bG)([h.A], () => h.A.getCurrentUserActiveStream()),
        P = (0, l.bG)([g.A], () => g.A.getChannelId()),
        k = x.default.extractTimestamp(v.id) + E.M < Date.now(),
        U = (0, i.jsx)(i.Fragment, { children: (0, r.Wf)(v, S, t) }),
        { analyticsLocations: w } = (0, o.Ay)(b, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = T.intl.string(I.default["5+172e"]),
        B = !1;
    return (
        k
            ? ((G = T.intl.string(I.default.u4QmWl)), (B = !0))
            : null != D
              ? ((G = T.intl.string(I.default.P0wwmM)), (B = !0))
              : P !== S.id
                ? ((G = T.intl.string(I.default.qRXats)), (B = !0))
                : null == O && ((G = T.intl.string(I.default["43zohO"])), (B = !0)),
        (0, i.jsx)(d.h, {
            header: T.intl.string(I.default.nAyuPp),
            title: N.name,
            staticBannerSrc: y,
            videoBannerSrc: R,
            bannerAspectRatio: L,
            iconSrc: M ?? void 0,
            info: U,
            actions:
                v.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: c.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != O &&
                                      ((0, f.isWindows)()
                                          ? (0, _.A)(O.pid)
                                          : (0, a.mMO)(async () => {
                                                let { default: e } = await Promise.all([
                                                    n.e("96811"),
                                                    n.e("48697"),
                                                ]).then(n.bind(n, 648230));
                                                return (t) => (0, i.jsx)(e, { ...t, analyticsLocations: w });
                                            }));
                              },
                          },
                      ],
            trackingConfig: {
                id: N.id,
                linkType: C.J.REQUEST_TO_STREAM,
                guildId: S.guild_id,
                channelId: S.id,
                messageId: v.id,
                onView: j,
                isDeadEnd: k,
            },
        })
    );
}
