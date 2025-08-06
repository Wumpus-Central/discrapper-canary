n.d(t, { Z: () => E });
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
    f = n(19780),
    _ = n(768581),
    p = n(709054),
    h = n(915553),
    m = n(704483),
    g = n(388032);
function E(e) {
    let t,
        { currentUserId: n, message: E, application: b, channel: y, onView: O } = e,
        { staticBannerSrc: v, videoBannerSrc: I, bannerAspectRatio: T } = (0, l.E)(b),
        S = _.ZP.getApplicationIconURL({
            id: b.id,
            icon: b.icon
        }),
        A = (0, i.e7)([c.ZP], () =>
            null != E.application
                ? c.ZP.getRunningGames().find((e) => {
                      let { id: t } = e;
                      return null != E.application && t === E.application.id;
                  })
                : null
        ),
        N = (0, i.e7)([d.Z], () => d.Z.getCurrentUserActiveStream()),
        C = (0, i.e7)([f.Z], () => f.Z.getChannelId()),
        R = p.default.extractTimestamp(E.id) + h.e < Date.now(),
        P = (0, r.jsx)(r.Fragment, { children: (0, o._0)(E, b, y, n, !1) });
    return (
        R ? (t = g.intl.string(m.default.u4QmWl)) : null != N ? (t = g.intl.string(m.default.P0wwmJ)) : C !== y.id ? (t = g.intl.string(m.default.qRXatr)) : null == A && (t = g.intl.string(m.default['43zohI'])),
        (0, r.jsx)(a.W, {
            header: g.intl.string(m.default.DKHheX),
            title: b.name,
            staticBannerSrc: v,
            videoBannerSrc: I,
            bannerAspectRatio: T,
            iconSrc: null != S ? S : void 0,
            info: P,
            actions:
                E.author.id === n
                    ? []
                    : [
                          {
                              label: g.intl.string(m.default['5+172d']),
                              trackingArea: s.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != A && (0, u.Z)(A.pid);
                              }
                          }
                      ],
            trackingConfig: {
                id: b.id,
                linkType: s.Un.REQUEST_TO_STREAM,
                onView: O
            }
        })
    );
}
