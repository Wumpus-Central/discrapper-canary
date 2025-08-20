n.d(t, { m: () => f });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(755721),
    o = n(481060),
    s = n(17894),
    l = n(430824),
    c = n(313550),
    u = n(388032),
    d = n(406671);
let f = (e) => {
    let { onClose: t, listing: n, guildId: f } = e,
        _ = (0, i.e7)([l.Z], () => l.Z.getGuild(f), [f]),
        p = (0, c.Z)({
            listing: n,
            guildId: f,
        });
    return (0, r.jsxs)("div", {
        className: d.confirmationContainer,
        children: [
            (0, r.jsx)(o.X6q, {
                className: d.confirmationHeader,
                variant: "heading-lg/extrabold",
                children: u.intl.format(u.t.I5dYFh, {
                    serverName: null == _ ? void 0 : _.name,
                    tierName: n.name,
                }),
            }),
            !p.isEmpty() &&
                (0, r.jsx)(o.Text, {
                    className: d.confirmationSubtitle,
                    variant: "text-sm/normal",
                    color: "header-secondary",
                    children: u.intl.format(u.t.TnhFHh, { benefits: p.asString() }),
                }),
            (0, r.jsx)(a.zx, {
                className: d.openDiscordButton,
                onClick: () => (0, s.Z)("role_sub_mweb_success_modal"),
                children: u.intl.string(u.t.WWvswM),
            }),
            (0, r.jsx)(a.zx, {
                className: d.doneButton,
                look: a.zx.Looks.BLANK,
                onClick: () => t(!0),
                children: u.intl.string(u.t.y84Dho),
            }),
        ],
    });
};
