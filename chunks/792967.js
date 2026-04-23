n.d(t, { A: () => u }), n(321073);
var s = n(627968);
n(64700);
var a = n(735438),
    l = n.n(a),
    i = n(813516),
    r = n(5658),
    o = n(712209),
    d = n(985018),
    c = n(301328);
function u(e, t, n) {
    let { markChannelRead: a, markGuildRead: u, deleteChannel: h, toggle: _, getNumUnreadChannels: A } = t,
        m = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== m;
        m = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === o.xB.ReallyOldChannel
                    ? l.push(
                          (0, s.jsx)(
                              i.A,
                              { className: c.y, contentClassName: c.$, children: d.intl.string(d.t.roBMzj) },
                              "old-divider",
                          ),
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === o.xB.NoNotifications &&
                      l.push(
                          (0, s.jsx)(
                              i.A,
                              { className: c.y, contentClassName: c.$, children: d.intl.string(d.t["2Ys7nu"]) },
                              "disabled-divider",
                          ),
                      )),
            l.push(
                (0, s.jsx)(
                    r.A,
                    {
                        channel: e,
                        markChannelRead: a,
                        markGuildRead: u,
                        toggle: _,
                        deleteChannel: h,
                        onJump: n,
                        getNumUnreadChannels: A,
                    },
                    e.channelId,
                ),
            ),
            l
        );
    });
}
