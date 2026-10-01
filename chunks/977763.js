(a.r(t), a.d(t, { playgroundConfig: () => $, guildSpaceCollection: () => K }));
var s = a(477900),
    l = a(582128),
    n = a(503698),
    r = a.n(n),
    i = a(834730),
    d = a(872188),
    o = a(450284);
let u = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: a } = e,
                    [n, u] = l.useState(!1),
                    [c, _] = l.useState(a);
                c !== a && (_(a), u(!1));
                let p = l.useCallback(() => {
                    switch (a) {
                        case "success":
                            return (u(!0), Promise.resolve());
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, s.jsx)("div", {
                    className: r()(o.frame, o[t]),
                    children: n
                        ? (0, s.jsx)(i.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, s.jsx)(d.A, { onPublish: p }),
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
var c = a(73153),
    _ = a(593673),
    p = a(518782),
    m = a(529609);
let h = 0;
function g(e, t, a, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: s },
        config: { type: t, ...l },
        requires_hydration: t === _.a.LEADERBOARD,
        locked: !1,
    };
}
var b = a(81253);
let f = [
        g("left-2", _.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        g("right-1", _.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        g("left-1", _.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        g("right-2", _.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    y = f
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    A = {
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
    v = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: n } = e,
                        i =
                            ((t = `guild-space-story-${n}`),
                            l.useEffect(() => {
                                let e = h++;
                                if (
                                    (c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: y,
                                    }),
                                    "loading" !== n)
                                ) {
                                    if ("error" === n)
                                        return void c.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: y.map((e) => ({
                                            id: e,
                                            data: "success" === n ? { type: _.a.LEADERBOARD, ...A } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, s.jsx)("div", {
                        className: r()(b.frame, b[a]),
                        children: (0, s.jsx)(m.A, { canEdit: !0, guildId: i, widgets: f }),
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
    S = a(994500),
    E = a(711014),
    w = a(287809),
    I = a(427262),
    D = a(539888),
    R = a(927813);
let k = a(282435).sx.slice(0, 10),
    T = [
        { days: 7, totalSeconds: 7 * R.A.Seconds.DAY - 60, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * R.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * R.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * R.A.Seconds.HOUR, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * R.A.Seconds.HOUR, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 9 * R.A.Seconds.HOUR + 2880, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 8 * R.A.Seconds.HOUR + 720, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 7 * R.A.Seconds.HOUR + 2280, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 6 * R.A.Seconds.HOUR + 720, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 5 * R.A.Seconds.HOUR + 1140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 4 * R.A.Seconds.HOUR + 3420, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 4 * R.A.Seconds.HOUR + 2760, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 3 * R.A.Seconds.HOUR + 2100, gameIndexes: [4] },
        { days: 1, totalSeconds: 2 * R.A.Seconds.HOUR + 3060, gameIndexes: [7] },
        { days: 1, totalSeconds: +R.A.Seconds.HOUR + 1320, gameIndexes: [2] },
        { days: 1, totalSeconds: 3480, gameIndexes: [5] },
        { days: 1, totalSeconds: 2820, gameIndexes: [8] },
        { days: 1, totalSeconds: 2160, gameIndexes: [0] },
        { days: 1, totalSeconds: 1440, gameIndexes: [6] },
        { days: 1, totalSeconds: 660, gameIndexes: [9] },
    ];
var G = a(546184);
let L = g("leaderboard", _.a.LEADERBOARD, 0, 0);
function N(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${G.Gt} ${a}`,
        children: [(0, s.jsx)(i.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
let P = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    component: function (e) {
        let t,
            a,
            { state: n, stat: r, currentUserPlacement: d } = e,
            o = (0, x.bG)([w.default], () => w.default.getCurrentUser()?.id),
            u = (0, x.bG)([E.Ay], () => E.Ay.getFlattenedGuildIds()[0]),
            c =
                ((t = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                l.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = w.default.getUser(e);
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
        if (null == u || 0 === c.length)
            return (0, s.jsx)(i.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let _ = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = k,
                        stat: s = p.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: l = T.length,
                        ended: n = !1,
                    } = e,
                    r = 0 === t.length ? [] : T.slice(0, l),
                    i = Math.floor(Date.now() / 1e3);
                return {
                    stat: s,
                    week_start_ts: i - (n ? 8 : 3) * R.A.Seconds.DAY,
                    next_stat: p.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    previous_winner: t[0],
                    streak_count: 3,
                    computed_at: new Date((i - R.A.Seconds.DAY) * 1e3).toISOString(),
                    entries: r.map((e, l) => {
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
            })({ memberIds: c, stat: r, entryCount: "empty" === n ? 2 : 20, ended: "ended" === n }),
            m = "on-podium" === d ? 2 : 12,
            h = "absent" !== d && "outside-list" !== d && null != o,
            g = { ..._, entries: h ? _.entries.map((e) => (e.rank === m ? { ...e, user_id: o } : e)) : _.entries };
        ("outside-list" === d &&
            null != o &&
            g.entries.push({
                user_id: o,
                name: "you",
                value: _.entries[_.entries.length - 1].value,
                rank: 25,
                application_ids: _.entries[_.entries.length - 1].application_ids,
                application_count: _.entries[_.entries.length - 1].application_count,
                time_played_seconds: _.entries[_.entries.length - 1].time_played_seconds,
            }),
            (a =
                "loading" === n
                    ? { status: "loading" }
                    : "error" === n
                      ? { status: "error" }
                      : { status: "success", data: g }));
        let b = (0, s.jsx)(D.P, { guildId: u, widget: L, guildSpaceMode: "view", hydration: a });
        return (0, s.jsxs)("div", {
            className: G.Zp,
            children: [
                (0, s.jsx)(N, { label: "Narrow column (380px)", className: G.sc, children: b }),
                (0, s.jsx)(N, { label: "Wide column (685px)", className: G.U, children: b }),
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
var C = a(343508);
let U = [32, 21, 15, 14, 9],
    j = [3, 2, 0, 3, 1],
    M = g("popular-music", _.a.POPULAR_MUSIC, 0, 0),
    H = ["1330000000000000101", "1330000000000000102", "1330000000000000103"],
    O = {
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
                facepile_user_ids: H,
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
                facepile_user_ids: H,
            },
            {
                track_external_id: "1BxfuPKGuaTgP7aM0Bbdwr",
                track_title: "Cruel Summer",
                artist_external_id: "06HL4z0CvFAxyc27GXpf02",
                artist_name: "Taylor Swift",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f003",
                plays: 14,
                unique_listeners: 5,
                facepile_user_ids: H,
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
                facepile_user_ids: H,
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
        summary: {
            listening_time_ms: 7704e4,
            distinct_songs: 482,
            distinct_artists: 6,
            listener_count: 14,
            plays_change_percent: 2,
        },
        computed_at: null,
    },
    B = {
        ranked_songs: O.ranked_songs.map((e) => ({
            track_external_id: e.track_external_id,
            track_title: null,
            artist_external_id: null,
            artist_name: null,
            cover_art_hash: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        ranked_artists: O.ranked_artists.map((e) => ({
            artist_external_id: e.artist_external_id,
            artist_name: null,
            plays: e.plays,
            unique_listeners: e.unique_listeners,
        })),
        top_listeners: [],
        computed_at: null,
    },
    Y = { ranked_songs: [], ranked_artists: [], top_listeners: [], computed_at: null },
    W = [
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
function q(e, t, a) {
    return {
        ...e,
        top_listeners: t.map((e, t) => {
            let s;
            return a
                ? ((s = O.ranked_songs[t % O.ranked_songs.length]),
                  {
                      user_id: e,
                      plays: U[t] ?? 1,
                      last_track:
                          3 === t
                              ? null
                              : {
                                    track_external_id: s.track_external_id,
                                    track_title: s.track_title,
                                    artist_name: s.artist_name,
                                },
                      recent_artists: W.slice(0, j[t] ?? 0),
                      artist_count: 0 === t ? 5 : null,
                  })
                : { user_id: e, plays: U[t] ?? 1 };
        }),
    };
}
function F(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${C.Gt} ${a}`,
        children: [(0, s.jsx)(i.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function V(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${G.Gt} ${a}`,
        children: [(0, s.jsx)(i.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function X(e) {
    let { mode: t, hydration: a, type: n, initialConfig: r, successData: i } = e,
        [d, o] = l.useState(r),
        u = (0, s.jsx)(D.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: n, config: d },
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
            })(a, i),
            onRemove: () => {},
            onCommitConfig: o,
        });
    return (0, s.jsxs)("div", {
        className: G.Zp,
        children: [
            (0, s.jsx)(V, { label: "Narrow column (380px)", className: G.sc, children: u }),
            (0, s.jsx)(V, { label: "Wide column (685px)", className: G.U, children: u }),
        ],
    });
}
let Z = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    K = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            v,
            u,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, s.jsx)(X, {
                                ...e,
                                type: _.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: Z,
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
            { title: "Server Hub Gaming Leaderboard", stories: [P] },
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
                                { state: n, mode: r, viewerPlacement: i } = e,
                                d = (0, x.bG)([E.Ay], () => E.Ay.getFlattenedGuildIds()[0]),
                                o = (function (e, t) {
                                    switch (e) {
                                        case "populated":
                                            return { status: "success", data: q(O, t, !0) };
                                        case "minimal":
                                            return { status: "success", data: q(B, t, !1) };
                                        case "empty":
                                            return { status: "success", data: Y };
                                        case "loading":
                                            return { status: "loading" };
                                        case "error":
                                            return { status: "error" };
                                    }
                                })(
                                    n,
                                    ((t = (0, x.bG)([w.default], () => w.default.getCurrentUser()?.id)),
                                    (a = (0, x.yK)([S.A], () => S.A.getFriendIDs())),
                                    l.useMemo(() => {
                                        let e = a.filter((e) => null != w.default.getUser(e)).slice(0, 5);
                                        return ("listed" === i && null != t && e.splice(1, 1, t), e);
                                    }, [a, t, i])),
                                );
                            function u(e) {
                                return (0, s.jsx)(
                                    D.P,
                                    {
                                        guildId: d ?? "popular-music-story-guild",
                                        widget: { ...M, id: `${M.id}-${e}` },
                                        guildSpaceMode: r,
                                        hydration: o,
                                        onRemove: () => {},
                                    },
                                    e,
                                );
                            }
                            return (0, s.jsxs)("div", {
                                className: C.Zp,
                                children: [
                                    (0, s.jsx)(F, {
                                        label: "Wide column (685px)",
                                        className: C.U,
                                        children: u("wide"),
                                    }),
                                    (0, s.jsx)(F, {
                                        label: "Narrow column (380px)",
                                        className: C.sc,
                                        children: u("narrow"),
                                    }),
                                    (0, s.jsx)(F, {
                                        label: "Minimum width (320px)",
                                        className: C.Bp,
                                        children: u("minimum"),
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
    $ = { playgroundBaseUrl: "guild-space", collections: [K] };
