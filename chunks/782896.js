n.d(t, { c: () => b }), n(388685), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(686546),
    s = n(430824),
    c = n(914010),
    u = n(797670),
    d = n(418924),
    f = n(388032),
    h = n(956778);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.ZP, {
        className: h.facepileItemContainer,
        mask: o.ZP.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t,
    });
}
function g(e) {
    let { guilds: t, numTruncated: n } = e;
    return (0, r.jsxs)("div", {
        className: h.guildIconList,
        children: [
            t.map((e) =>
                (0, r.jsxs)(
                    "div",
                    {
                        className: h.guildIconItem,
                        children: [
                            (0, r.jsx)("div", {
                                children: (0, r.jsx)(u.V, {
                                    guild: e,
                                    size: 20,
                                }),
                            }),
                            (0, r.jsx)(a.Text, {
                                className: h.guildIconItemText,
                                variant: "text-xs/medium",
                                children: e.name,
                            }),
                        ],
                    },
                    e.id,
                ),
            ),
            n > 0 &&
                (0, r.jsx)(a.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: f.intl.format(d.default.bAzBIf, { numServers: n }),
                }),
        ],
    });
}
function b(e) {
    let { guildIds: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        o = (0, l.Wu)([s.Z], () => t.map((e) => s.Z.getGuild(e)), [t]),
        b = (0, i.useMemo)(() => o.filter((e) => null != e), [o]),
        {
            visibleGuilds: m,
            numTruncated: y,
            visibleGuildsTooltip: O,
            numTruncatedTooltipGuilds: v,
        } = (0, i.useMemo)(() => {
            let e = [...b];
            if (null != n) {
                let t = b.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(b[t]));
            }
            return 4 === e.length
                ? {
                      visibleGuilds: e,
                      numTruncated: 0,
                      visibleGuildsTooltip: e,
                      numTruncatedTooltipGuilds: 0,
                  }
                : {
                      visibleGuilds: e.slice(0, 3),
                      numTruncated: e.length - 3,
                      visibleGuildsTooltip: e.slice(0, 15),
                      numTruncatedTooltipGuilds: e.length - 15,
                  };
        }, [b, n]);
    return (0, r.jsx)(a.jSM, {
        "aria-label": f.intl.string(d.default.TG0QsS),
        text: (0, r.jsx)(g, {
            guilds: O,
            numTruncated: v,
        }),
        position: "top",
        children: (0, r.jsxs)("div", {
            className: h.facepile,
            children: [
                m.map((e) =>
                    (0, r.jsx)(
                        p,
                        {
                            children: (0, r.jsx)(u.V, {
                                guild: e,
                                size: 20,
                            }),
                        },
                        e.id,
                    ),
                ),
                y > 0 &&
                    (0, r.jsx)(p, {
                        children: (0, r.jsxs)(a.Text, {
                            className: h.textItem,
                            color: "text-subtle",
                            variant: "text-xxs/semibold",
                            children: ["+", y],
                        }),
                    }),
            ],
        }),
    });
}
