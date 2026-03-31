n.d(t, { A: () => u }), n(321073);
var i = n(627968);
n(64700);
var l = n(735438),
    s = n.n(l),
    a = n(813516),
    r = n(5658),
    o = n(712209),
    c = n(985018),
    d = n(991360);
function u(e, t, n) {
    let { markChannelRead: l, markGuildRead: u, deleteChannel: h, toggle: A, getNumUnreadChannels: _ } = t,
        m = null;
    return s().flatMap(e, (e) => {
        let t = e.sortOrder !== m;
        m = e.sortOrder;
        let s = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === o.xB.ReallyOldChannel
                    ? s.push(
                          (0, i.jsx)(
                              a.A,
                              { className: d.y, contentClassName: d.$, children: c.intl.string(c.t.roBMzj) },
                              "old-divider",
                          ),
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === o.xB.NoNotifications &&
                      s.push(
                          (0, i.jsx)(
                              a.A,
                              { className: d.y, contentClassName: d.$, children: c.intl.string(c.t["2Ys7nu"]) },
                              "disabled-divider",
                          ),
                      )),
            s.push(
                (0, i.jsx)(
                    r.A,
                    {
                        channel: e,
                        markChannelRead: l,
                        markGuildRead: u,
                        toggle: A,
                        deleteChannel: h,
                        onJump: n,
                        getNumUnreadChannels: _,
                    },
                    e.channelId,
                ),
            ),
            s
        );
    });
}
