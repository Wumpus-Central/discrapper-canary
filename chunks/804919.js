r.d(t, {
    LM: () => a,
    oD: () => c,
});
var n = r(379405),
    l = r(296009),
    i = r(388032);
let a = {
    VALORANT: "700136079562375258",
    ROBLOX: "363445589247131668",
    LEAGUE_OF_LEGENDS: "1402418696126992445",
    MINECRAFT: "1402418491272986635",
    COUNTERSTRIKE_2: "1158877933042143272",
    OVERWATCH_2: "356875221078245376",
    APEX_LEGENDS: "542075586886107149",
    FORTNITE: "1402418703554842694",
    GRAND_THEFT_AUTO_V: "1402418714716143646",
    DOTA_2: "356875988589740042",
    ROCKET_LEAGUE: "356877880938070016",
    BALDURS_GATE_3: "1137125502985961543",
    CYBERPUNK_2077: "787443973538971748",
    ZENLESS_ZONE_ZERO: "1257819671114289184",
    RED_DEAD_REDEMPTION_2: "1402418648332898466",
    ELDEN_RING: "1402418436809953330",
};
Object.values(a);
let c = () => [
    {
        id: "0",
        type: l.l.FAVORITE_GAMES,
        games: [
            {
                applicationId: a.VALORANT,
                comment: i.intl.string(i.t["7CCylJ"]),
            },
        ],
    },
    {
        id: "1",
        type: l.l.CURRENT_GAMES,
        games: [
            {
                applicationId: a.ROBLOX,
                tags: [n._.OPEN_TO_PLAY, n._.LIKE_IT],
            },
            {
                applicationId: a.LEAGUE_OF_LEGENDS,
                tags: [n._.LFG, n._.LIKE_IT],
            },
        ],
    },
    {
        id: "2",
        type: l.l.WANT_TO_PLAY_GAMES,
        games: [
            { applicationId: a.MINECRAFT },
            { applicationId: a.COUNTERSTRIKE_2 },
            { applicationId: a.OVERWATCH_2 },
            { applicationId: a.APEX_LEGENDS },
        ],
    },
    {
        id: "3",
        type: l.l.PLAYED_GAMES,
        games: [
            { applicationId: a.FORTNITE },
            { applicationId: a.GRAND_THEFT_AUTO_V },
            { applicationId: a.DOTA_2 },
            { applicationId: a.ROCKET_LEAGUE },
        ],
    },
];
