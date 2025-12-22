n.d(t, { c: () => h }), n(388685), n(290780);
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    o = n(686546),
    s = n(430824),
    c = n(914010),
    u = n(797670),
    d = n(956778);
function f(e) {
    let { children: t } = e;
    return (0, r.jsx)(o.ZP, {
        className: d.facepileItemContainer,
        mask: o.ZP.Masks.SQUIRCLE,
        width: 25,
        height: 25,
        children: t,
    });
}
function h(e) {
    let { guildIds: t } = e,
        n = (0, l.e7)([c.Z], () => c.Z.getGuildId()),
        o = (0, l.Wu)([s.Z], () => t.map((e) => s.Z.getGuild(e)), [t]),
        h = (0, i.useMemo)(() => o.filter((e) => null != e), [o]),
        { visibleGuilds: p, numTruncated: g } = (0, i.useMemo)(() => {
            let e = [...h];
            if (null != n) {
                let t = h.findIndex((e) => e.id === n);
                -1 !== t && (e.splice(t, 1), e.unshift(h[t]));
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
                  };
        }, [h, n]);
    return (0, r.jsxs)("div", {
        className: d.facepile,
        children: [
            p.map((e) =>
                (0, r.jsx)(
                    f,
                    {
                        children: (0, r.jsx)(u.V, {
                            guild: e,
                            size: 20,
                        }),
                    },
                    e.id,
                ),
            ),
            g > 0 &&
                (0, r.jsx)(f, {
                    children: (0, r.jsxs)(a.Text, {
                        className: d.textItem,
                        color: "text-subtle",
                        variant: "text-xxs/semibold",
                        children: ["+", g],
                    }),
                }),
        ],
    });
}
