n.d(t, { A: () => v });
var i = n(627968);
n(64700);
var a = n(311907),
    r = n(397927),
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
    E = n(426127),
    b = n(985018);
function v(e) {
    let { currentUserId: t, message: v, application: T, channel: S, analyticsLocations: y, onView: N } = e,
        { staticBannerSrc: j, videoBannerSrc: L, bannerAspectRatio: R } = (0, u.f)(T),
        P = A.Ay.getApplicationIconURL({ id: T.id, icon: T.icon }),
        w = (0, a.bG)([_.Ay, p.A], () =>
            _.Ay.getVisibleRunningGames().find((e) => {
                let { id: t } = e;
                if (t === T.id) return !0;
                let n = p.A.getGameByApplication(T);
                return null != n && t === n.id;
            }),
        ),
        D = (0, a.bG)([h.A], () => h.A.getCurrentUserActiveStream()),
        M = (0, a.bG)([g.A], () => g.A.getChannelId()),
        k = f.default.extractTimestamp(v.id) + C.M < Date.now(),
        O = (0, i.jsx)(i.Fragment, { children: (0, l.Wf)(v, S, t) }),
        { analyticsLocations: U } = (0, o.Ay)(y, s.A.REQUEST_TO_STREAM_INVITE_EMBED),
        B = b.intl.string(E.default["5+172e"]),
        G = !1;
    return (
        k
            ? ((B = b.intl.string(E.default.u4QmWl)), (G = !0))
            : null != D
              ? ((B = b.intl.string(E.default.P0wwmM)), (G = !0))
              : M !== S.id
                ? ((B = b.intl.string(E.default.qRXats)), (G = !0))
                : null == w && ((B = b.intl.string(E.default["43zohO"])), (G = !0)),
        (0, i.jsx)(d.h, {
            header: b.intl.string(E.default.nAyuPp),
            title: T.name,
            staticBannerSrc: j,
            videoBannerSrc: L,
            bannerAspectRatio: R,
            iconSrc: P ?? void 0,
            info: O,
            actions:
                v.author.id === t
                    ? []
                    : [
                          {
                              label: B,
                              trackingArea: c.kY.STREAM,
                              disabled: G,
                              onClick: () => {
                                  null != w &&
                                      ((0, x.isWindows)()
                                          ? (0, m.A)(w.pid)
                                          : (0, r.mMO)(async () => {
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
                guildId: S.guild_id,
                channelId: S.id,
                messageId: v.id,
                onView: N,
                isDeadEnd: k,
            },
        })
    );
}
