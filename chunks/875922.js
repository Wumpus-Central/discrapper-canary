n.d(t, { A: () => A });
var i = n(627968),
    r = n(64700),
    a = n(397927),
    l = n(308528),
    s = n(58149),
    o = n(231608),
    d = n(954571),
    c = n(652215),
    u = n(985018);
function A(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        { priorityMembers: n, partiedMembers: A } = e,
        h = r.useContext(d.AnalyticsContext),
        _ = n.map((e) => {
            let { user: t } = e;
            return t.id;
        }),
        m = 1 === A.length && 1 === n.length,
        p = n.length - A.length > 0;
    return (m || t) && !p && 0 !== _.length
        ? (0, i.jsx)(a.Drp, {
              id: "message",
              action: function () {
                  l.A.openPrivateChannel({ recipientIds: _ }).then((t) =>
                      s.Ay.trackWithMetadata(c.HAw.ACTIVITY_FEED_DM_VISITED, {
                          source: { ...h.location, object: c.ZSU.LIST_ITEM },
                          channel_id: t,
                          recipient_id: "string" == typeof _ ? _ : _[0],
                          af_recently_played: !1,
                          ...(0, o.o)(e),
                      }),
                  );
              },
              label: u.intl.string(u.t["g33r/P"]),
          })
        : null;
}
