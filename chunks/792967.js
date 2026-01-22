n.d(t, {
    A: () => d,
}),
    n(114821),
    n(339614),
    n(321073);
var r = n(627968);
n(64700);
var l = n(735438),
    i = n.n(l),
    a = n(813516),
    s = n(5658),
    o = n(712209),
    c = n(985018),
    u = n(48355);

function d(e, t, n) {
    let { markChannelRead: l, markGuildRead: d, deleteChannel: f, toggle: p, getNumUnreadChannels: h } = t,
        b = null;
    return i().flatMap(e, (e) => {
        let t = e.sortOrder !== b;
        b = e.sortOrder;
        let i = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === o.xB.ReallyOldChannel
                    ? i.push(
                          (0, r.jsx)(
                              a.A,
                              {
                                  className: u.y,
                                  contentClassName: u.$,
                                  children: c.intl.string(c.t.roBMzj),
                              },
                              "old-divider",
                          ),
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === o.xB.NoNotifications &&
                      i.push(
                          (0, r.jsx)(
                              a.A,
                              {
                                  className: u.y,
                                  contentClassName: u.$,
                                  children: c.intl.string(c.t["2Ys7nu"]),
                              },
                              "disabled-divider",
                          ),
                      )),
            i.push(
                (0, r.jsx)(
                    s.A,
                    {
                        channel: e,
                        markChannelRead: l,
                        markGuildRead: d,
                        toggle: p,
                        deleteChannel: f,
                        onJump: n,
                        getNumUnreadChannels: h,
                    },
                    e.channelId,
                ),
            ),
            i
        );
    });
}
