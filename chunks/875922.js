n.d(t, { A: () => m });
var i = n(627968),
    s = n(64700),
    l = n(477782),
    a = n(308528),
    r = n(58149),
    o = n(231608),
    c = n(954571),
    d = n(652215),
    u = n(985018);
function m(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: m } = e,
        A = s.useContext(c.AnalyticsContext),
        h = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        x = 1 === m.length && 1 === n.length,
        p = n.length - m.length > 0;
    return (x || t) && !p && 0 !== h.length
        ? (0, i.jsx)(l.Dr, {
              id: "message",
              action: function () {
                  a.A.openPrivateChannel({ recipientIds: h }).then((t) =>
                      r.Ay.trackWithMetadata(d.HAw.ACTIVITY_FEED_DM_VISITED, {
                          source: { ...A.location, object: d.ZSU.LIST_ITEM },
                          channel_id: t,
                          recipient_id: "string" == typeof h ? h : h[0],
                          af_recently_played: !1,
                          ...(0, o.o)(e),
                      }),
                  );
              },
              label: u.intl.string(u.t["g33r/P"]),
          })
        : null;
}
