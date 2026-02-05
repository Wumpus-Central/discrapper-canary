"use strict";
n.d(t, { A: () => h });
var r = n(627968),
    i = n(64700),
    a = n(155718),
    s = n(58149),
    o = n(842209),
    l = n(990474),
    u = n(954571),
    c = n(183555),
    d = n(900179),
    _ = n(652215),
    f = n(985018),
    p = n(624082);
function h(e) {
    let { applicationId: t, commandIds: n, guildId: h, channel: m, onClick: g } = e,
        { trackUserProfileAction: E } = (0, c.NJ)(),
        A = i.useMemo(() => ({ channel: m, type: "channel" }), [m]),
        { commands: I } = o.DP(A, t, n),
        T = i.useMemo(
            () =>
                I?.filter((e) => {
                    let { nsfw: t, options: n } = e;
                    return (
                        !0 !== t &&
                        n?.find((e) => {
                            let { type: t } = e;
                            return t === a.n4.SUB_COMMAND || t === a.n4.SUB_COMMAND_GROUP;
                        }) == null
                    );
                }),
            [I],
        );
    if (null == T || 0 === T.length) return null;
    let y = (e) => {
        g?.(),
            E({ action: "PRESS_APP_COMMAND" }),
            u.default.track(_.HAw.POPULAR_APPLICATION_COMMAND_CLICKED, {
                application_id: t,
                command_id: e,
                guild_id: h,
                ...(0, s.Ou)(m.id),
            });
    };
    return (0, r.jsx)(d.A, {
        heading: f.intl.string(f.t["0hKkS+"]),
        children: (0, r.jsx)("ul", {
            className: p.p,
            children: T.map((e) =>
                (0, r.jsx)(
                    "li",
                    {
                        children: (0, r.jsx)(l.Oh, {
                            commandId: e.id,
                            commandName: e.displayName,
                            commandDescription: e.displayDescription,
                            onClick: y,
                            guildId: h,
                            channelId: m.id,
                            applicationId: e.applicationId,
                        }),
                    },
                    e.id,
                ),
            ),
        }),
    });
}
