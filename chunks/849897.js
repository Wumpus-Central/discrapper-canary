n.d(t, { Z: () => _ });
var r = n(54381),
    i = n(473749),
    a = n(588468),
    o = n(404577),
    s = n(483360),
    l = n(877565),
    c = n(590921),
    u = n(761652),
    d = n(388032);
function f(e) {
    return "".concat(u.ME).concat(e.name);
}
function p(e) {
    return "<@$".concat(e.id, ">");
}
let _ = {
    autocompleteInputElementType: "gameMentionInput",
    stores: [o.Z],
    matches: (e, t, n, r, i) => !0,
    queryResults: (e, t, n) => ({ results: { games: s.ZP.queryGames(n).slice(0, 10) } }),
    renderResults(e) {
        let {
                results: { games: t },
                selectedIndex: n,
                query: o,
                onHover: s,
                onClick: c,
            } = e,
            f = t.map((e, t) =>
                (0, r.jsx)(
                    a.ZP.Game,
                    {
                        onClick: c,
                        onHover: s,
                        selected: n === t,
                        index: t,
                        game: e,
                    },
                    e.id,
                ),
            ),
            p = d.t["/U2VW+"],
            _ = d.intl.string(d.t.URyqtP);
        return (0, r.jsxs)(
            i.Fragment,
            {
                children: [
                    (0, l.gm)({
                        titleWithQuery: p,
                        titleWithoutQuery: _,
                        query: o,
                        getQuery: (e) => "".concat(u.ME).concat(e),
                    }),
                    f,
                ],
            },
            "mentions",
        );
    },
    onSelect(e) {
        let {
                results: { games: t },
                index: n,
                options: r,
            } = e,
            i = t[n];
        return (
            r.replaceInlineInput("gameMentionInput", f(i), p(i)),
            {
                type: c.z2.GAME_MENTION,
                metadata: { applicationId: i.id },
            }
        );
    },
};
