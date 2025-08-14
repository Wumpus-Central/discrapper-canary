n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(758371),
    a = n(758199),
    s = n(914498),
    l = n(880251),
    c = n(594190),
    u = n(562224),
    d = n(199902),
    f = n(77498),
    _ = n(19780),
    p = n(768581),
    h = n(709054),
    m = n(915553),
    g = n(658805),
    E = n(388032);
function b(e) {
    let t,
        { currentUserId: n, message: b, application: y, channel: O, onView: v } = e,
        { staticBannerSrc: I, videoBannerSrc: T, bannerAspectRatio: S } = (0, l.E)(y),
        A = p.ZP.getApplicationIconURL({
            id: y.id,
            icon: y.icon,
        }),
        N = (0, i.e7)([c.ZP, f.Z], () =>
            null != b.application
                ? c.ZP.getVisibleRunningGames().find((e) => {
                      var t;
                      let { id: n, name: r } = e;
                      return (
                          null != b.application &&
                          (null != n ? n : null == (t = f.Z.getGameByName(r)) ? void 0 : t.id) === b.application.id
                      );
                  })
                : null,
        ),
        C = (0, i.e7)([d.Z], () => d.Z.getCurrentUserActiveStream()),
        R = (0, i.e7)([_.Z], () => _.Z.getChannelId()),
        P = h.default.extractTimestamp(b.id) + m.e < Date.now(),
        w = (0, r.jsx)(r.Fragment, { children: (0, o._0)(b, y, O, n, !1) });
    return (
        P
            ? (t = E.intl.string(g.default.u4QmWl))
            : null != C
              ? (t = E.intl.string(g.default.P0wwmJ))
              : R !== O.id
                ? (t = E.intl.string(g.default.qRXatr))
                : null == N && (t = E.intl.string(g.default["43zohI"])),
        (0, r.jsx)(a.W, {
            header: E.intl.string(g.default.DKHheX),
            title: y.name,
            staticBannerSrc: I,
            videoBannerSrc: T,
            bannerAspectRatio: S,
            iconSrc: null != A ? A : void 0,
            info: w,
            actions:
                b.author.id === n
                    ? []
                    : [
                          {
                              label: E.intl.string(g.default["5+172d"]),
                              trackingArea: s.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != N && (0, u.Z)(N.pid);
                              },
                          },
                      ],
            trackingConfig: {
                id: y.id,
                linkType: s.Un.REQUEST_TO_STREAM,
                onView: v,
            },
        })
    );
}
