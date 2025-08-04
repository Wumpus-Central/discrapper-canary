n.d(t, { Z: () => b });
var r = n(255367);
n(73800);
var i = n(442837),
    l = n(758371),
    a = n(758199),
    o = n(914498),
    s = n(880251),
    c = n(594190),
    u = n(562224),
    d = n(199902),
    p = n(19780),
    m = n(768581),
    f = n(709054),
    g = n(915553),
    _ = n(704483),
    h = n(388032);
function b(e) {
    let t,
        { currentUserId: n, message: b, application: E, channel: C, onView: v } = e,
        { staticBannerSrc: O, videoBannerSrc: x, bannerAspectRatio: y } = (0, s.E)(E),
        I = m.ZP.getApplicationIconURL({
            id: E.id,
            icon: E.icon
        }),
        j = (0, i.e7)([c.ZP], () =>
            null != b.application
                ? c.ZP.getRunningGames().find((e) => {
                      let { id: t } = e;
                      return null != b.application && t === b.application.id;
                  })
                : null
        ),
        S = (0, i.e7)([d.Z], () => d.Z.getCurrentUserActiveStream()),
        T = (0, i.e7)([p.Z], () => p.Z.getChannelId()),
        N = f.default.extractTimestamp(b.id) + g.e < Date.now(),
        P = (0, r.jsx)(r.Fragment, { children: (0, l._0)(b, E, C, n, !1) });
    return (
        N ? (t = h.intl.string(_.default.u4QmWl)) : null != S ? (t = h.intl.string(_.default.P0wwmJ)) : T !== C.id ? (t = h.intl.string(_.default.qRXatr)) : null == j && (t = h.intl.string(_.default['43zohI'])),
        (0, r.jsx)(a.W, {
            header: h.intl.string(_.default.DKHheX),
            title: E.name,
            staticBannerSrc: O,
            videoBannerSrc: x,
            bannerAspectRatio: y,
            iconSrc: null != I ? I : void 0,
            info: P,
            actions:
                b.author.id === n
                    ? []
                    : [
                          {
                              label: h.intl.string(_.default['5+172d']),
                              trackingArea: o.j_.STREAM,
                              disabledReason: t,
                              onClick: () => {
                                  null != j && (0, u.Z)(j.pid);
                              }
                          }
                      ],
            trackingConfig: {
                id: E.id,
                linkType: o.Un.REQUEST_TO_STREAM,
                onView: v
            }
        })
    );
}
