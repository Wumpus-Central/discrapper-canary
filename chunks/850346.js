(a.r(t), a.d(t, { playgroundConfig: () => ed, guildSpaceCollection: () => eo }));
var l = a(477900),
    s = a(582128),
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
                    [n, c] = s.useState(!1),
                    [u, p] = s.useState(a);
                u !== a && (p(a), c(!1));
                let h = s.useCallback(() => {
                    switch (a) {
                        case "success":
                            return (c(!0), Promise.resolve());
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, l.jsx)("div", {
                    className: i()(d.frame, d[t]),
                    children: n
                        ? (0, l.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(o.A, { onPublish: h }),
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
    p = a(593673),
    h = a(518782),
    m = a(529609);
let g = 0;
function _(e, t, a, l) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...s },
        requires_hydration: t === p.a.LEADERBOARD,
        locked: !1,
    };
}
var y = a(81253);
let f = [
        _("left-2", p.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        _("right-1", p.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        _("left-1", p.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        _("right-2", p.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
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
        stat: h.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
        entries: [
            {
                user_id: "1",
                value: 84e5,
                rank: 1,
                application_ids: ["1"],
                application_count: 1,
                time_played_seconds: 8400,
            },
            {
                user_id: "2",
                value: 62e5,
                rank: 2,
                application_ids: ["1", "2"],
                application_count: 2,
                time_played_seconds: 6200,
            },
            {
                user_id: "3",
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
                            s.useEffect(() => {
                                let e = g++;
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
                                            data: "success" === n ? { type: p.a.LEADERBOARD, ...v } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, l.jsx)("div", {
                        className: i()(y.frame, y[a]),
                        children: (0, l.jsx)(m.A, { canEdit: !0, guildId: r, widgets: f }),
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
    I = a(927813),
    D = a(427262),
    R = a(914609),
    T = a(539888),
    C = a(282435);
let G = [...C.sx.slice(0, 2), "1442738138211553383", ...C.sx.slice(2, 9)],
    j = [
        { days: 7, totalSeconds: 7 * I.A.Seconds.DAY - 60, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * I.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * I.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * I.A.Seconds.HOUR, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * I.A.Seconds.HOUR, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 9 * I.A.Seconds.HOUR + 2880, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 8 * I.A.Seconds.HOUR + 720, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 7 * I.A.Seconds.HOUR + 2280, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 6 * I.A.Seconds.HOUR + 720, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 5 * I.A.Seconds.HOUR + 1140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 4 * I.A.Seconds.HOUR + 3420, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 4 * I.A.Seconds.HOUR + 2760, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 3 * I.A.Seconds.HOUR + 2100, gameIndexes: [4] },
        { days: 1, totalSeconds: 2 * I.A.Seconds.HOUR + 3060, gameIndexes: [7] },
        { days: 1, totalSeconds: +I.A.Seconds.HOUR + 1320, gameIndexes: [2] },
        { days: 1, totalSeconds: 3480, gameIndexes: [5] },
        { days: 1, totalSeconds: 2820, gameIndexes: [8] },
        { days: 1, totalSeconds: 2160, gameIndexes: [0] },
        { days: 1, totalSeconds: 1440, gameIndexes: [6] },
        { days: 1, totalSeconds: 660, gameIndexes: [9] },
    ];
var L = a(546184);
let P = _("leaderboard", p.a.LEADERBOARD, 0, 0),
    M = {
        winningStat: h.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        winningStreak: 1,
        winningValue: 40 * I.A.Millis.HOUR + 33 * I.A.Millis.MINUTE,
    },
    N = { ...M, winningStreak: 3 },
    F = { currentLeaderStat: h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED };
function U(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: i()(L.Gt, a),
        children: [(0, l.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
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
                s.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = k.default.getUser(e);
                                return null == t ? [] : [{ id: e, name: D.Ay.getName(t) }];
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
            return (0, l.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let p = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = G,
                        stat: l = h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: s = j.length,
                        ended: n = !1,
                    } = e,
                    i = 0 === t.length ? [] : j.slice(0, s),
                    r = Math.floor(Date.now() / 1e3);
                return {
                    stat: l,
                    week_start_ts: r - (n ? 8 : 3) * I.A.Seconds.DAY,
                    next_stat: h.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    computed_at: new Date((r - I.A.Seconds.DAY) * 1e3).toISOString(),
                    entries: i.map((e, s) => ({
                        user_id: t[s % t.length],
                        value: (function (e, t) {
                            switch (t) {
                                case h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                    return e.days;
                                case h.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
                                    return e.gameIndexes.length;
                                default:
                                    return 1e3 * e.totalSeconds;
                            }
                        })(e, l),
                        rank: s + 1,
                        application_ids: e.gameIndexes.flatMap((e) => a[e % a.length] ?? []).slice(0, 2),
                        application_count: e.gameIndexes.length,
                        time_played_seconds: e.totalSeconds,
                    })),
                };
            })({ memberIds: u, stat: i, entryCount: "empty" === n ? 2 : 20, ended: "ended" === n }),
            m = "on-podium" === o ? 2 : 12,
            g = "absent" !== o && "outside-list" !== o && null != d,
            _ = { ...p, entries: g ? p.entries.map((e) => (e.rank === m ? { ...e, user_id: d } : e)) : p.entries };
        ("outside-list" === o &&
            null != d &&
            _.entries.push({
                user_id: d,
                value: p.entries[p.entries.length - 1].value,
                rank: 25,
                application_ids: p.entries[p.entries.length - 1].application_ids,
                application_count: p.entries[p.entries.length - 1].application_count,
                time_played_seconds: p.entries[p.entries.length - 1].time_played_seconds,
            }),
            (a =
                "loading" === n
                    ? { status: "loading" }
                    : "error" === n
                      ? { status: "error" }
                      : { status: "success", data: _ }));
        let y = (0, l.jsx)(T.P, { guildId: c, widget: P, guildSpaceMode: "view", hydration: a });
        return (0, l.jsxs)("div", {
            className: L.Zp,
            children: [
                (0, l.jsx)(U, { label: "Narrow column (380px)", className: L.sc, children: y }),
                (0, l.jsx)(U, { label: "Wide column (685px)", className: L.U, children: y }),
                null != d
                    ? (0, l.jsx)(U, {
                          label: "Badges",
                          children: (0, l.jsxs)(E.B, {
                              gap: 16,
                              children: [
                                  (0, l.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(r.E, { variant: "text-sm/normal", children: "Winner" }),
                                          (0, l.jsx)(R.J, { guildId: c, userId: d, winnerData: M, leaderData: null }),
                                      ],
                                  }),
                                  (0, l.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(r.E, {
                                              variant: "text-sm/normal",
                                              children: "Winner on a streak",
                                          }),
                                          (0, l.jsx)(R.J, { guildId: c, userId: d, winnerData: N, leaderData: null }),
                                      ],
                                  }),
                                  (0, l.jsxs)(E.B, {
                                      direction: "horizontal",
                                      align: "center",
                                      gap: 8,
                                      children: [
                                          (0, l.jsx)(r.E, { variant: "text-sm/normal", children: "Current leader" }),
                                          (0, l.jsx)(R.J, { guildId: c, userId: d, winnerData: null, leaderData: F }),
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
            defaultValue: h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: h.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: h.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: h.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
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
a(347661);
let B = C.sx.slice(0, 5),
    O = [8, 6, 5, 4, 3];
function W(e) {
    let { memberIds: t, gameIds: a = B, entryCount: l = O.length, totalUsers: s = 42, totalGames: n = 89 } = e,
        i = (0 === t.length ? [] : O.slice(0, l)).map((e, t) => ({ application_id: a[t % a.length], total_users: e }));
    return {
        games: i,
        user_ids: 0 === i.length ? [] : t.slice(0, 6),
        total_users: 0 === i.length ? 0 : s,
        total_games: 0 === i.length ? 0 : n,
    };
}
let q = _("popular-games", p.a.POPULAR_GAMES, 0, 0);
function Y(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, l.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
let V = {
    title: "Server Hub Popular Games",
    stories: [
        {
            name: "Popular Games",
            id: "guild-space-popular-games",
            component: function (e) {
                let t,
                    a,
                    { state: n } = e,
                    i = (0, x.bG)([w.Ay], () => w.Ay.getFlattenedGuildIds()[0]),
                    o =
                        ((t = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                        s.useMemo(
                            () =>
                                t
                                    .flatMap((e) => {
                                        let t = k.default.getUser(e);
                                        return null == t ? [] : [{ id: e, name: D.Ay.getName(t) }];
                                    })
                                    .sort((e, t) => e.name.localeCompare(t.name))
                                    .slice(0, 12)
                                    .map((e) => {
                                        let { id: t } = e;
                                        return t;
                                    }),
                            [t],
                        ));
                if (null == i || 0 === o.length)
                    return (0, l.jsx)(r.E, {
                        variant: "text-sm/normal",
                        color: "text-muted",
                        children: "Waiting for the client to load a guild and your friends list\u2026",
                    });
                a =
                    "few" === n
                        ? W({ memberIds: o, entryCount: 2, totalUsers: 6, totalGames: 2 })
                        : "empty" === n
                          ? W({ memberIds: o, entryCount: 2, totalUsers: 2 })
                          : W({ memberIds: o, entryCount: 5 });
                let d = (0, l.jsx)(T.P, {
                    guildId: i,
                    widget: q,
                    guildSpaceMode: "view",
                    hydration:
                        "loading" === n
                            ? { status: "loading" }
                            : "error" === n
                              ? { status: "error" }
                              : { status: "success", data: a },
                });
                return (0, l.jsxs)("div", {
                    className: L.Zp,
                    children: [
                        (0, l.jsx)(Y, { label: "Narrow column (380px)", className: L.sc, children: d }),
                        (0, l.jsx)(Y, { label: "Wide column (685px)", className: L.U, children: d }),
                    ],
                });
            },
            controls: {
                state: {
                    label: "State",
                    type: "select",
                    defaultValue: "populated",
                    options: [
                        { label: "Populated (5 games)", value: "populated" },
                        { label: "Few games (2)", value: "few" },
                        { label: "Not enough data (2 members)", value: "empty" },
                        { label: "Loading", value: "loading" },
                        { label: "Error", value: "error" },
                    ],
                },
            },
        },
    ],
};
var z = a(343508);
let Z = [32, 21, 15, 14, 9],
    $ = [3, 2, 0, 3, 1],
    X = _("popular-music", p.a.POPULAR_MUSIC, 0, 0),
    K = ["1330000000000000101", "1330000000000000102", "1330000000000000103"],
    Q = {
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
                facepile_user_ids: K,
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
                facepile_user_ids: K,
            },
            {
                track_external_id: "1BxfuPKGuaTgP7aM0Bbdwr",
                track_title: "Cruel Summer",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f003",
                plays: 14,
                unique_listeners: 5,
                facepile_user_ids: K,
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
                facepile_user_ids: K,
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
    J = {
        plays_total: 0,
        distinct_listeners: 0,
        distinct_songs: 0,
        distinct_artists: 0,
        listening_time_ms: 0,
        plays_trend_pct: null,
    },
    ee = {
        ranked_songs: Q.ranked_songs.map((e) => ({
            track_external_id: e.track_external_id,
            track_title: null,
            artist_external_id: null,
            artist_name: null,
            cover_art_hash: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        ranked_artists: Q.ranked_artists.map((e) => ({
            artist_external_id: e.artist_external_id,
            artist_name: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        top_listeners: [],
        ...J,
        computed_at: null,
    },
    et = { ranked_songs: [], ranked_artists: [], top_listeners: [], ...J, computed_at: null },
    ea = [
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
function el(e, t, a) {
    return {
        ...e,
        top_listeners: t.map((e, t) => {
            let l;
            return a
                ? ((l = Q.ranked_songs[t % Q.ranked_songs.length]),
                  {
                      user_id: e,
                      plays: Z[t] ?? 1,
                      latest_track_external_id: 3 === t ? null : l.track_external_id,
                      latest_track_title: 3 === t ? null : l.track_title,
                      latest_artist_name: 3 === t ? null : l.artist_name,
                      latest_cover_art_hash: 3 === t ? null : l.cover_art_hash,
                      artists: ea.slice(0, $[t] ?? 0),
                      artist_count: 0 === t ? 5 : null,
                  })
                : {
                      user_id: e,
                      plays: Z[t] ?? 1,
                      latest_track_external_id: null,
                      latest_track_title: null,
                      latest_artist_name: null,
                      latest_cover_art_hash: null,
                      artists: [],
                  };
        }),
    };
}
function es(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${z.Gt} ${a}`,
        children: [(0, l.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function en(e) {
    let { label: t, className: a, children: s } = e;
    return (0, l.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, l.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function ei(e) {
    let { mode: t, hydration: a, type: n, initialConfig: i, successData: r } = e,
        [o, d] = s.useState(i),
        c = (0, l.jsx)(T.P, {
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
    return (0, l.jsxs)("div", {
        className: L.Zp,
        children: [
            (0, l.jsx)(en, { label: "Narrow column (380px)", className: L.sc, children: c }),
            (0, l.jsx)(en, { label: "Wide column (685px)", className: L.U, children: c }),
        ],
    });
}
let er = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    eo = {
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
                            return (0, l.jsx)(ei, {
                                ...e,
                                type: p.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: er,
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
                                            return { status: "success", data: el(Q, t, !0) };
                                        case "minimal":
                                            return { status: "success", data: el(ee, t, !1) };
                                        case "empty":
                                            return { status: "success", data: et };
                                        case "loading":
                                            return { status: "loading" };
                                        case "error":
                                            return { status: "error" };
                                    }
                                })(
                                    n,
                                    ((t = (0, x.bG)([k.default], () => k.default.getCurrentUser()?.id)),
                                    (a = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                                    s.useMemo(() => {
                                        let e = a.filter((e) => null != k.default.getUser(e)).slice(0, 5);
                                        return ("listed" === r && null != t && e.splice(1, 1, t), e);
                                    }, [a, t, r])),
                                );
                            function c(e) {
                                return (0, l.jsx)(
                                    T.P,
                                    {
                                        guildId: o ?? "popular-music-story-guild",
                                        widget: { ...X, id: `${X.id}-${e}` },
                                        guildSpaceMode: i,
                                        hydration: d,
                                        onRemove: () => {},
                                    },
                                    e,
                                );
                            }
                            return (0, l.jsxs)("div", {
                                className: z.Zp,
                                children: [
                                    (0, l.jsx)(es, {
                                        label: "Wide column (685px)",
                                        className: z.U,
                                        children: c("wide"),
                                    }),
                                    (0, l.jsx)(es, {
                                        label: "Narrow column (380px)",
                                        className: z.sc,
                                        children: c("narrow"),
                                    }),
                                    (0, l.jsx)(es, {
                                        label: "Minimum width (320px)",
                                        className: z.Bp,
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
            V,
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish", "Leaderboard", "Popular Music", "Popular Games"],
    },
    ed = { playgroundBaseUrl: "guild-space", collections: [eo] };
