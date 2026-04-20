"use strict";
n.d(t, { A: () => f });
var r = n(627968),
    i = n(58149),
    s = n(990474),
    a = n(954571),
    o = n(183555),
    l = n(244295),
    u = n(900179),
    c = n(652215),
    d = n(985018),
    _ = n(192795);
function f(e) {
    let { applicationId: t, commandIds: n, guildId: f, channel: p, onClick: h } = e,
        { trackUserProfileAction: m } = (0, o.NJ)(),
        { commands: E } = (0, l.A)(p, t, n);
    if (null == E || 0 === E.length) return null;
    let g = (e) => {
        h?.(),
            m({ action: "PRESS_APP_COMMAND" }),
            a.default.track(c.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: f,
                ...(0, i.Ou)(p.id),
            });
    };
    return (0, r.jsx)(u.A, {
        heading: d.intl.string(d.t["0hKkS+"]),
        children: (0, r.jsx)("ul", {
            className: _.p,
            children: E.map((e) =>
                (0, r.jsx)(
                    "li",
                    {
                        children: (0, r.jsx)(s.Oh, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: g,
                            guildId: f,
                            channelId: p.id,
                            applicationId: e.applicationId,
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
}
