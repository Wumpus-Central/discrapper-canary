"use strict";
n.d(t, { A: () => u }), n(321073);
var i = n(627968);
n(64700);
var s = n(735438),
    l = n.n(s),
    r = n(813516),
    a = n(5658),
    o = n(712209),
    c = n(985018),
    d = n(297513);
function u(e, t, n) {
    let { markChannelRead: s, markGuildRead: u, deleteChannel: h, toggle: A, getNumUnreadChannels: m } = t,
        p = null;
    return l().flatMap(e, (e) => {
        let t = e.sortOrder !== p;
        p = e.sortOrder;
        let l = [];
        return (
            t &&
                (e.hasLoadedAnything && e.sortOrder === o.xB.ReallyOldChannel
                    ? l.push(
                          (0, i.jsx)(
                              r.A,
                              { className: d.y, contentClassName: d.$, children: c.intl.string(c.t.roBMzj) },
                              "old-divider",
                          ),
                      )
                    : e.hasLoadedAnything &&
                      e.sortOrder === o.xB.NoNotifications &&
                      l.push(
                          (0, i.jsx)(
                              r.A,
                              { className: d.y, contentClassName: d.$, children: c.intl.string(c.t["2Ys7nu"]) },
                              "disabled-divider",
                          ),
                      )),
            l.push(
                (0, i.jsx)(
                    a.A,
                    {
                        channel: e,
                        markChannelRead: s,
                        markGuildRead: u,
                        toggle: A,
                        deleteChannel: h,
                        onJump: n,
                        getNumUnreadChannels: m,
                    },
                    e.channelId,
                ),
            ),
            l
        );
    });
}
