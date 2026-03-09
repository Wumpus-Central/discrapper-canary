n.d(t, { A: () => T });
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(456060),
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
    E = n(768349),
    I = n(426127),
    b = n(985018);
function T(e) {
    let { currentUserId: t, message: T, application: v, channel: S, analyticsLocations: y, onView: N } = e,
        { staticBannerSrc: j, videoBannerSrc: L, bannerAspectRatio: R } = (0, u.f)(v),
        P = A.Ay.getApplicationIconURL({ id: v.id, icon: v.icon }),
        M = (0, r.bG)([_.Ay, p.A], () =>
            _.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === v.id) return !0;
                let n = p.A.getGameByApplication(v);
                return null != n && t === n.id;
            }),
        ),
        w = (0, r.bG)([h.A], () => h.A.getCurrentUserActiveStream()),
        D = (0, r.bG)([g.A], () => g.A.getChannelId()),
        O = f.default.extractTimestamp(T.id) + C.M < Date.now(),
        k = (0, i.jsx)(i.Fragment, { children: (0, a.Wf)(T, S, t) }),
        { analyticsLocations: U } = (0, o.Ay)(y, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        G = b.intl.string(I.default["5+172e"]),
        B = !1;
    return (
        O
            ? ((G = b.intl.string(I.default.u4QmWl)), (B = !0))
            : null != w
              ? ((G = b.intl.string(I.default.P0wwmM)), (B = !0))
              : D !== S.id
                ? ((G = b.intl.string(I.default.qRXats)), (B = !0))
                : null == M && ((G = b.intl.string(I.default["43zohO"])), (B = !0)),
        (0, i.jsx)(d.h, {
            header: b.intl.string(I.default.nAyuPp),
            title: v.name,
            staticBannerSrc: j,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: P ?? void 0,
            info: k,
            actions:
                T.author.id === t
                    ? []
                    : [
                          {
                              label: G,
                              trackingArea: c.kY.STREAM,
                              disabled: B,
                              onClick: () => {
                                  null != M &&
                                      ((0, x.isWindows)()
                                          ? (0, m.A)(M.pid)
                                          : (0, l.mMO)(async () => {
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
                id: v.id,
                linkType: E.J.REQUEST_TO_STREAM,
                guildId: S.guild_id,
                channelId: S.id,
                messageId: T.id,
                onView: N,
                isDeadEnd: O,
            },
        })
    );
}
