n.d(t, { c: () => m }), n(388685), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    o = n(481060),
    a = n(686546),
    s = n(430824),
    c = n(914010),
    u = n(797670),
    d = n(779334),
    f = n(388032),
    h = n(906530);
function p(e) {
    let { children: t } = e;
    return (0, r.jsx)(a.ZP, {
        className: h.facepileItemContainer,
        mask: a.ZP.Masks.SQUIRCLE,
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
                            (0, r.jsx)(o.Text, {
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
                (0, r.jsx)(o.Text, {
                    variant: "text-xs/medium",
                    color: "text-subtle",
                    children: f.intl.format(d.default.bAzBIf, { numServers: n }),
                }),
        ],
    });
}
function m(e) {
    let { guildIds: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        a = (0, l.Wu)([s.Z], () => t.map((e) => s.Z.getGuild(e)), [t]),
        m = (0, i.useMemo)(() => a.filter((e) => null != e), [a]),
        {
            visibleGuilds: b,
            numTruncated: _,
            visibleGuildsTooltip: y,
            numTruncatedTooltipGuilds: O,
        } = (0, i.useMemo)(() => {
            let e = [...m];
            if (null != n) {
                let t = m.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(m[t]));
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
        }, [m, n]);
    return (0, r.jsx)(o.jSM, {
        "aria-label": f.intl.string(d.default.TG0QsS),
        text: (0, r.jsx)(g, {
            guilds: y,
            numTruncated: O,
        }),
        position: "top",
        children: (0, r.jsxs)("div", {
            className: h.facepile,
            children: [
                b.map((e) =>
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
                _ > 0 &&
                    (0, r.jsx)(p, {
                        children: (0, r.jsxs)(o.Text, {
                            className: h.textItem,
                            color: "text-subtle",
                            variant: "text-xxs/semibold",
                            children: ["+", _],
                        }),
                    }),
            ],
        }),
    });
}
