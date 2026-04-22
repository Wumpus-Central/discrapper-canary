n.d(t, { A: () => A });
var i = n(627968),
    l = n(58149),
    s = n(990474),
    a = n(954571),
    r = n(183555),
    o = n(244295),
    d = n(900179),
    c = n(652215),
    u = n(985018),
    h = n(192795);
function A(e) {
    let { applicationId: t, commandIds: n, guildId: A, channel: _, onClick: m } = e,
        { trackUserProfileAction: g } = (0, r.NJ)(),
        { commands: p } = (0, o.A)(_, t, n);
    if (null == p || 0 === p.length) return null;
    let f = (e) => {
        m?.(),
            g({ action: "PRESS_APP_COMMAND" }),
            a.default.track(c.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: A,
                ...(0, l.Ou)(_.id),
            });
    };
    return (0, i.jsx)(d.A, {
        heading: u.intl.string(u.t["0hKkS+"]),
        children: (0, i.jsx)("ul", {
            className: h.p,
            children: p.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(s.Oh, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: f,
                            guildId: A,
                            channelId: _.id,
                            applicationId: e.applicationId,
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
}
