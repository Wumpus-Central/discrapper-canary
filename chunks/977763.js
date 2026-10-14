(a.r(t), a.d(t, { playgroundConfig: () => es, guildSpaceCollection: () => ea }));
var s = a(477900),
    l = a(582128),
    n = a(503698),
    i = a.n(n),
    r = a(834730),
    o = a(872188),
    d = a(450284);
let c = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: a } = e,
                    [n, c] = l.useState(!1),
                    [u, h] = l.useState(a);
                u !== a && (h(a), c(!1));
                let p = l.useCallback(() => {
                    switch (a) {
                        case "success":
                            return (c(!0), Promise.resolve());
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, s.jsx)("div", {
                    className: i()(d.frame, d[t]),
                    children: n
                        ? (0, s.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, s.jsx)(o.A, { onPublish: p }),
                });
            },
            controls: {
                width: {
                    label: "Page width",
                    type: "select",
                    defaultValue: "wide",
                    options: [
                        { label: "Wide (1100px)", value: "wide" },
                        { label: "Narrow (320px, reflow floor)", value: "narrow" },
                    ],
                },
                outcome: {
                    label: "Publish outcome",
                    type: "select",
                    defaultValue: "success",
                    options: [
                        { label: "Succeeds (notice unmounts)", value: "success" },
                        { label: "Fails (inline error, role=alert)", value: "failure" },
                        { label: "Never settles (holds loading state)", value: "pending" },
                    ],
                },
            },
        },
    ],
};
var u = a(73153),
    h = a(593673),
    p = a(518782),
    m = a(529609);
let _ = 0;
function g(e, t, a, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: s },
        config: { type: t, ...l },
        requires_hydration: t === h.a.LEADERBOARD,
        locked: !1,
    };
}
var y = a(81253);
let f = [
        g("left-2", h.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        g("right-1", h.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        g("left-1", h.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        g("right-2", h.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    b = f
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    v = {
        stat: p.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
        previous_winner: "2",
        streak_count: 3,
        entries: [
            {
                user_id: "1",
                name: "wumpus",
                value: 84e5,
                rank: 1,
                application_ids: ["1"],
                application_count: 1,
                time_played_seconds: 8400,
            },
            {
                user_id: "2",
                name: "clyde",
                value: 62e5,
                rank: 2,
                application_ids: ["1", "2"],
                application_count: 2,
                time_played_seconds: 6200,
            },
            {
                user_id: "3",
                name: "nelly",
                value: 41e5,
                rank: 3,
                application_ids: ["2"],
                application_count: 1,
                time_played_seconds: 4100,
            },
        ],
    },
    A = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: n } = e,
                        r =
                            ((t = `guild-space-story-${n}`),
                            l.useEffect(() => {
                                let e = _++;
                                if (
                                    (u.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: b,
                                    }),
                                    "loading" !== n)
                                ) {
                                    if ("error" === n)
                                        return void u.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    u.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: b.map((e) => ({
                                            id: e,
                                            data: "success" === n ? { type: h.a.LEADERBOARD, ...v } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, s.jsx)("div", {
                        className: i()(y.frame, y[a]),
                        children: (0, s.jsx)(m.A, { canEdit: !0, guildId: r, widgets: f }),
                    });
                },
                controls: {
                    width: {
                        label: "Page width",
                        type: "select",
                        defaultValue: "wide",
                        options: [
                            { label: "Wide (1100px, two columns)", value: "wide" },
                            { label: "Narrow (600px, collapsed)", value: "narrow" },
                        ],
                    },
                    hydration: {
                        label: "Hydration",
                        type: "select",
                        defaultValue: "success",
                        options: [
                            { label: "Success", value: "success" },
                            { label: "Loading", value: "loading" },
                            {
                                label: "Transient failure (holds loading; re-select to spend attempts)",
                                value: "retrying",
                            },
                            { label: "Error (non-retryable)", value: "error" },
                        ],
                    },
                },
            },
        ],
    };
a(321073);
var x = a(17928),
    E = a(331322),
    S = a(994500),
    w = a(711014),
    k = a(287809),
    D = a(927813),
    I = a(427262),
    R = a(795593),
    T = a(539888),
    C = a(282435);
let L = [...C.sx.slice(0, 2), "1442738138211553383", ...C.sx.slice(2, 9)],
    G = [
        { days: 7, totalSeconds: 7 * D.A.Seconds.DAY - 60, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * D.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * D.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * D.A.Seconds.HOUR, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * D.A.Seconds.HOUR, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 9 * D.A.Seconds.HOUR + 2880, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 8 * D.A.Seconds.HOUR + 720, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 7 * D.A.Seconds.HOUR + 2280, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 6 * D.A.Seconds.HOUR + 720, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 5 * D.A.Seconds.HOUR + 1140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 4 * D.A.Seconds.HOUR + 3420, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 4 * D.A.Seconds.HOUR + 2760, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 3 * D.A.Seconds.HOUR + 2100, gameIndexes: [4] },
        { days: 1, totalSeconds: 2 * D.A.Seconds.HOUR + 3060, gameIndexes: [7] },
        { days: 1, totalSeconds: +D.A.Seconds.HOUR + 1320, gameIndexes: [2] },
        { days: 1, totalSeconds: 3480, gameIndexes: [5] },
        { days: 1, totalSeconds: 2820, gameIndexes: [8] },
        { days: 1, totalSeconds: 2160, gameIndexes: [0] },
        { days: 1, totalSeconds: 1440, gameIndexes: [6] },
        { days: 1, totalSeconds: 660, gameIndexes: [9] },
    ];
var M = a(546184);
let j = g("leaderboard", h.a.LEADERBOARD, 0, 0),
    P = {
        winningStat: p.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        winningStreak: 1,
        winningValue: 40 * D.A.Millis.HOUR + 33 * D.A.Millis.MINUTE,
    },
    N = { ...P, winningStreak: 3 },
    F = { currentLeaderStat: p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED };
function B(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: i()(M.Gt, a),
        children: [(0, s.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
let H = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    component: function (e) {
        let t,
            a,
            { state: n, stat: i, currentUserPlacement: o } = e,
            d = (0, x.bG)([k.default], () => k.default.getCurrentUser()?.id),
            c = (0, x.bG)([w.Ay], () => w.Ay.getFlattenedGuildIds()[0]),
            u =
                ((t = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                l.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = k.default.getUser(e);
                                return null == t ? [] : [{ id: e, name: I.Ay.getName(t) }];
                            })
                            .sort((e, t) => e.name.localeCompare(t.name))
                            .slice(0, 30)
                            .map((e) => {
                                let { id: t } = e;
                                return t;
                            }),
                    [t],
                ));
        if (null == c || 0 === u.length)
            return (0, s.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let h = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = L,
                        stat: s = p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: l = G.length,
                        ended: n = !1,
                    } = e,
                    i = 0 === t.length ? [] : G.slice(0, l),
                    r = Math.floor(Date.now() / 1e3);
                return {
                    stat: s,
                    week_start_ts: r - (n ? 8 : 3) * D.A.Seconds.DAY,
                    next_stat: p.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    previous_winner: t[0],
                    streak_count: 3,
                    computed_at: new Date((r - D.A.Seconds.DAY) * 1e3).toISOString(),
                    entries: i.map((e, l) => {
                        let n;
                        return {
                            user_id: (n = t[l % t.length]),
                            name: n,
                            value: (function (e, t) {
                                switch (t) {
                                    case p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                        return e.days;
                                    case p.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                        return e.gameIndexes.length;
                                    default:
                                        return 1e3 * e.totalSeconds;
                                }
                            })(e, s),
                            rank: l + 1,
                            application_ids: e.gameIndexes.flatMap((e) => a[e % a.length] ?? []).slice(0, 2),
                            application_count: e.gameIndexes.length,
                            time_played_seconds: e.totalSeconds,
                        };
                    }),
                };
            })({ memberIds: u, stat: i, entryCount: "empty" === n ? 2 : 20, ended: "ended" === n }),
            m = "on-podium" === o ? 2 : 12,
            _ = "absent" !== o && "outside-list" !== o && null != d,
            g = { ...h, entries: _ ? h.entries.map((e) => (e.rank === m ? { ...e, user_id: d } : e)) : h.entries };
        ("outside-list" === o &&
            null != d &&
            g.entries.push({
                user_id: d,
                name: "you",
                value: h.entries[h.entries.length - 1].value,
                rank: 25,
                application_ids: h.entries[h.entries.length - 1].application_ids,
                application_count: h.entries[h.entries.length - 1].application_count,
                time_played_seconds: h.entries[h.entries.length - 1].time_played_seconds,
            }),
            (a =
                "loading" === n
                    ? { status: "loading" }
                    : "error" === n
                      ? { status: "error" }
                      : { status: "success", data: g }));
        let y = (0, s.jsx)(T.P, { guildId: c, widget: j, guildSpaceMode: "view", hydration: a });
        return (0, s.jsxs)("div", {
            className: M.Zp,
            children: [
                (0, s.jsx)(B, { label: "Narrow column (380px)", className: M.sc, children: y }),
                (0, s.jsx)(B, { label: "Wide column (685px)", className: M.U, children: y }),
                null != d
                    ? (0, s.jsx)(B, {
                          label: "Badges",
                          children: (0, s.jsxs)(E.B, {
                              gap: 16,
                              children: [
                                  (0, s.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, s.jsx)(r.E, { variant: "text-sm/normal", children: "Winner" }),
                                          (0, s.jsx)(R.J, { guildId: c, userId: d, winnerData: P, leaderData: null }),
                                      ],
                                  }),
                                  (0, s.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, s.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              children: "Winner on a streak",
                                          }),
                                          (0, s.jsx)(R.J, { guildId: c, userId: d, winnerData: N, leaderData: null }),
                                      ],
                                  }),
                                  (0, s.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, s.jsx)(r.E, { variant: "text-sm/normal", children: "Current leader" }),
                                          (0, s.jsx)(R.J, { guildId: c, userId: d, winnerData: null, leaderData: F }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null,
            ],
        });
    },
    controls: {
        state: {
            label: "State",
            type: "select",
            defaultValue: "active",
            options: [
                { label: "Week in progress", value: "active" },
                { label: "Week ended", value: "ended" },
                { label: "Not enough data (2 members)", value: "empty" },
                { label: "Loading", value: "loading" },
                { label: "Error", value: "error" },
            ],
        },
        stat: {
            label: "Stat",
            type: "select",
            defaultValue: p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: p.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: p.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
            ],
        },
        currentUserPlacement: {
            label: "Your placement",
            type: "select",
            defaultValue: "off-podium",
            options: [
                { label: "Outside the top three (rank 12)", value: "off-podium" },
                { label: "Inside the top three (rank 2)", value: "on-podium" },
                { label: "Outside the list (rank 25)", value: "outside-list" },
                { label: "Not in the standings", value: "absent" },
            ],
        },
    },
};
var U = a(343508);
let O = [32, 21, 15, 14, 9],
    W = [3, 2, 0, 3, 1],
    q = g("popular-music", h.a.POPULAR_MUSIC, 0, 0),
    Y = ["1330000000000000101", "1330000000000000102", "1330000000000000103"],
    V = {
        ranked_songs: [
            {
                track_external_id: "2plbrEY59IikOBgBGLjaoe",
                track_title: "Creature In The Black Night",
                artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
                artist_name: "Dayseeker",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f001",
                plays: 21,
                unique_listeners: 8,
                plays_change_percent: 2,
                facepile_user_ids: Y,
            },
            {
                track_external_id: "4eCwFoinvpIQi1kBEoAzQO",
                track_title: "New Genesis",
                artist_external_id: "6mEQK9m2krja6X1cfsAjfl",
                artist_name: "Ado",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f002",
                plays: 17,
                unique_listeners: 6,
                plays_change_percent: -4,
                facepile_user_ids: Y,
            },
            {
                track_external_id: "1BxfuPKGuaTgP7aM0Bbdwr",
                track_title: "Cruel Summer",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f003",
                plays: 14,
                unique_listeners: 5,
                facepile_user_ids: Y,
            },
            {
                track_external_id: "0V3wPSX9ygBnCm8psDIegu",
                track_title: "Anti-Hero",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f004",
                plays: 11,
                unique_listeners: 5,
                facepile_user_ids: null,
            },
            {
                track_external_id: "3n3Ppam7vgaVa1iaRUc9Lp",
                track_title: "Mr. Brightside",
                artist_external_id: "0C0XlULifJtAgn6ZNCW2eu",
                artist_name: "The Killers",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f005",
                plays: 9,
                unique_listeners: 4,
                facepile_user_ids: Y,
            },
            {
                track_external_id: "2takcwOaAZWiXQijPHIx7B",
                track_title: null,
                artist_external_id: null,
                artist_name: null,
                cover_art_hash: null,
                plays: 6,
                unique_listeners: 2,
                facepile_user_ids: null,
            },
        ],
        ranked_artists: [
            {
                artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
                artist_name: "Dayseeker",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f001",
                plays: 38,
                unique_listeners: 11,
            },
            {
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f002",
                plays: 25,
                unique_listeners: 9,
            },
            {
                artist_external_id: "6mEQK9m2krja6X1cfsAjfl",
                artist_name: "Ado",
                artist_image_hash: null,
                plays: 17,
                unique_listeners: 6,
            },
            {
                artist_external_id: "0C0XlULifJtAgn6ZNCW2eu",
                artist_name: "The Killers",
                artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f004",
                plays: 9,
                unique_listeners: 4,
            },
            {
                artist_external_id: "4gzpq5DPGxSnKTe4SA8HAU",
                artist_name: null,
                artist_image_hash: null,
                plays: 5,
                unique_listeners: 2,
            },
        ],
        top_listeners: [],
        plays_total: 1204,
        distinct_listeners: 14,
        distinct_songs: 482,
        distinct_artists: 6,
        listening_time_ms: 7704e4,
        plays_trend_pct: 0.02,
        computed_at: null,
    },
    z = {
        plays_total: 0,
        distinct_listeners: 0,
        distinct_songs: 0,
        distinct_artists: 0,
        listening_time_ms: 0,
        plays_trend_pct: null,
    },
    X = {
        ranked_songs: V.ranked_songs.map((e) => ({
            track_external_id: e.track_external_id,
            track_title: null,
            artist_external_id: null,
            artist_name: null,
            cover_art_hash: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        ranked_artists: V.ranked_artists.map((e) => ({
            artist_external_id: e.artist_external_id,
            artist_name: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        top_listeners: [],
        ...z,
        computed_at: null,
    },
    Z = { ranked_songs: [], ranked_artists: [], top_listeners: [], ...z, computed_at: null },
    $ = [
        {
            artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
            artist_name: "Dayseeker",
            artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f001",
        },
        {
            artist_external_id: "06HL4z0CvFAxyc27GXpf02",
            artist_name: "Taylor Swift",
            artist_image_hash: "ab6761610000e5ebd2e5f0b0e0b0a0c0d0e0f002",
        },
        { artist_external_id: "6mEQK9m2krja6X1cfsAjfl", artist_name: "Ado", artist_image_hash: null },
    ];
function K(e, t, a) {
    return {
        ...e,
        top_listeners: t.map((e, t) => {
            let s;
            return a
                ? ((s = V.ranked_songs[t % V.ranked_songs.length]),
                  {
                      user_id: e,
                      plays: O[t] ?? 1,
                      latest_track_external_id: 3 === t ? null : s.track_external_id,
                      latest_track_title: 3 === t ? null : s.track_title,
                      latest_artist_name: 3 === t ? null : s.artist_name,
                      latest_cover_art_hash: 3 === t ? null : s.cover_art_hash,
                      artists: $.slice(0, W[t] ?? 0),
                      artist_count: 0 === t ? 5 : null,
                  })
                : {
                      user_id: e,
                      plays: O[t] ?? 1,
                      latest_track_external_id: null,
                      latest_track_title: null,
                      latest_artist_name: null,
                      latest_cover_art_hash: null,
                      artists: [],
                  };
        }),
    };
}
function Q(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${U.Gt} ${a}`,
        children: [(0, s.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function J(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${M.Gt} ${a}`,
        children: [(0, s.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function ee(e) {
    let { mode: t, hydration: a, type: n, initialConfig: i, successData: r } = e,
        [o, d] = l.useState(i),
        c = (0, s.jsx)(T.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: n, config: o },
            guildSpaceMode: t,
            hydration: (function (e, t) {
                switch (e) {
                    case "none":
                        return;
                    case "success":
                        return { status: "success", data: t };
                    default:
                        return { status: e };
                }
            })(a, r),
            onRemove: () => {},
            onCommitConfig: d,
        });
    return (0, s.jsxs)("div", {
        className: M.Zp,
        children: [
            (0, s.jsx)(J, { label: "Narrow column (380px)", className: M.sc, children: c }),
            (0, s.jsx)(J, { label: "Wide column (685px)", className: M.U, children: c }),
        ],
    });
}
let et = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    ea = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            A,
            c,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, s.jsx)(ee, {
                                ...e,
                                type: h.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: et,
                                successData: void 0,
                            });
                        },
                        controls: {
                            mode: {
                                label: "Mode",
                                type: "select",
                                defaultValue: "view",
                                options: [
                                    { label: "View", value: "view" },
                                    { label: "Edit", value: "edit" },
                                ],
                            },
                            hydration: {
                                label: "Hydration",
                                type: "select",
                                defaultValue: "none",
                                options: [
                                    { label: "None (no hydration)", value: "none" },
                                    { label: "Idle", value: "idle" },
                                    { label: "Loading", value: "loading" },
                                    { label: "Success", value: "success" },
                                    { label: "Error", value: "error" },
                                ],
                            },
                        },
                    },
                ],
            },
            { title: "Server Hub Gaming Leaderboard", stories: [H] },
            {
                title: "Server Hub Popular Music",
                stories: [
                    {
                        name: "Popular Music",
                        id: "guild-space-popular-music",
                        docs: "Shows the Popular Music widget at wide, narrow, and minimum widths across populated, minimal, empty, loading, and error states.",
                        component: function (e) {
                            let t,
                                a,
                                { state: n, mode: i, viewerPlacement: r } = e,
                                o = (0, x.bG)([w.Ay], () => w.Ay.getFlattenedGuildIds()[0]),
                                d = (function (e, t) {
                                    switch (e) {
                                        case "populated":
                                            return { status: "success", data: K(V, t, !0) };
                                        case "minimal":
                                            return { status: "success", data: K(X, t, !1) };
                                        case "empty":
                                            return { status: "success", data: Z };
                                        case "loading":
                                            return { status: "loading" };
                                        case "error":
                                            return { status: "error" };
                                    }
                                })(
                                    n,
                                    ((t = (0, x.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                                    (a = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                                    l.useMemo(() => {
                                        let e = a.filter((e) => null != k.default.getUser(e)).slice(0, 5);
                                        return ("listed" === r && null != t && e.splice(1, 1, t), e);
                                    }, [a, t, r])),
                                );
                            function c(e) {
                                return (0, s.jsx)(
                                    T.P,
                                    {
                                        guildId: o ?? "popular-music-story-guild",
                                        widget: { ...q, id: `${q.id}-${e}` },
                                        guildSpaceMode: i,
                                        hydration: d,
                                        onRemove: () => {},
                                    },
                                    e,
                                );
                            }
                            return (0, s.jsxs)("div", {
                                className: U.Zp,
                                children: [
                                    (0, s.jsx)(Q, {
                                        label: "Wide column (685px)",
                                        className: U.U,
                                        children: c("wide"),
                                    }),
                                    (0, s.jsx)(Q, {
                                        label: "Narrow column (380px)",
                                        className: U.sc,
                                        children: c("narrow"),
                                    }),
                                    (0, s.jsx)(Q, {
                                        label: "Minimum width (320px)",
                                        className: U.Bp,
                                        children: c("minimum"),
                                    }),
                                ],
                            });
                        },
                        controls: {
                            state: {
                                label: "State",
                                type: "select",
                                defaultValue: "populated",
                                options: [
                                    { label: "Populated", value: "populated" },
                                    { label: "Minimal", value: "minimal" },
                                    { label: "Empty", value: "empty" },
                                    { label: "Loading", value: "loading" },
                                    { label: "Error", value: "error" },
                                ],
                            },
                            mode: {
                                label: "Mode",
                                type: "select",
                                defaultValue: "view",
                                options: [
                                    { label: "View", value: "view" },
                                    { label: "Edit", value: "edit" },
                                ],
                            },
                            viewerPlacement: {
                                label: "Your placement",
                                type: "select",
                                defaultValue: "unlisted",
                                options: [
                                    { label: "Outside the top listeners", value: "unlisted" },
                                    { label: "In the top listeners (rank 2)", value: "listed" },
                                ],
                            },
                        },
                    },
                ],
            },
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish", "Leaderboard", "Popular Music"],
    },
    es = { playgroundBaseUrl: "guild-space", collections: [ea] };
