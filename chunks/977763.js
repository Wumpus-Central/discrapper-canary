(a.r(t), a.d(t, { playgroundConfig: () => W, guildSpaceCollection: () => B }));
var s = a(477900),
    l = a(582128),
    n = a(503698),
    r = a.n(n),
    o = a(834730),
    i = a(872188),
    d = a(450284);
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
                    [c, p] = l.useState(a);
                c !== a && (p(a), u(!1));
                let m = l.useCallback(() => {
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
                    className: r()(d.frame, d[t]),
                    children: n
                        ? (0, s.jsx)(o.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, s.jsx)(i.A, { onPublish: m }),
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
var c = a(228366),
    p = a(593673),
    m = a(518782),
    h = a(529609);
let g = 0;
function _(e, t, a, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: s },
        config: { type: t, ...l },
        requires_hydration: t === p.a.LEADERBOARD,
        locked: !1,
    };
}
var A = a(81253);
let b = [
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
    v = b
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    y = {
        stat: m.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
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
    S = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: n } = e,
                        o =
                            ((t = `guild-space-story-${n}`),
                            l.useEffect(() => {
                                let e = g++;
                                if (
                                    (c.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: v,
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
                                        widgets: v.map((e) => ({
                                            id: e,
                                            data: "success" === n ? { type: p.a.LEADERBOARD, ...y } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, s.jsx)("div", {
                        className: r()(A.frame, A[a]),
                        children: (0, s.jsx)(h.A, { canEdit: !0, guildId: o, widgets: b }),
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
var f = a(17928),
    E = a(994500),
    x = a(711014),
    w = a(287809),
    R = a(427262),
    D = a(539888),
    I = a(927813);
let G = a(282435).sx.slice(0, 10),
    T = [
        { days: 7, totalSeconds: 38 * I.A.Seconds.HOUR + 900, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * I.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * I.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * I.A.Seconds.HOUR + 600, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * I.A.Seconds.HOUR + 2100, gameIndexes: [0, 1, 2, 3, 4] },
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
var N = a(546184);
let k = _("leaderboard", p.a.LEADERBOARD, 0, 0);
function L(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${N.Gt} ${a}`,
        children: [(0, s.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
let O = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    component: function (e) {
        let t,
            a,
            { state: n, stat: r, currentUserPlacement: i } = e,
            d = (0, f.bG)([w.default], () => w.default.getCurrentUser()?.id),
            u = (0, f.bG)([x.Ay], () => x.Ay.getFlattenedGuildIds()[0]),
            c =
                ((t = (0, f.yK)([E.A], () => E.A.getFriendIDs())),
                l.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = w.default.getUser(e);
                                return null == t ? [] : [{ id: e, name: R.Ay.getName(t) }];
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
            return (0, s.jsx)(o.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let p = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = G,
                        stat: s = m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: l = T.length,
                        ended: n = !1,
                    } = e,
                    r = 0 === t.length ? [] : T.slice(0, l),
                    o = Math.floor(Date.now() / 1e3);
                return {
                    stat: s,
                    week_start_ts: o - (n ? 8 : 3) * I.A.Seconds.DAY,
                    next_stat: m.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    previous_winner: t[0],
                    streak_count: 3,
                    computed_at: new Date((o - I.A.Seconds.DAY) * 1e3).toISOString(),
                    entries: r.map((e, l) => {
                        let n;
                        return {
                            user_id: (n = t[l % t.length]),
                            name: n,
                            value: (function (e, t) {
                                switch (t) {
                                    case m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                        return e.days;
                                    case m.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
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
            h = "on-podium" === i ? 2 : 12,
            g = "absent" !== i && "outside-list" !== i && null != d,
            _ = { ...p, entries: g ? p.entries.map((e) => (e.rank === h ? { ...e, user_id: d } : e)) : p.entries };
        ("outside-list" === i &&
            null != d &&
            _.entries.push({
                user_id: d,
                name: "you",
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
        let A = (0, s.jsx)(D.P, { guildId: u, widget: k, guildSpaceMode: "view", hydration: a });
        return (0, s.jsxs)("div", {
            className: N.Zp,
            children: [
                (0, s.jsx)(L, { label: "Narrow column (380px)", className: N.sc, children: A }),
                (0, s.jsx)(L, { label: "Wide column (685px)", className: N.U, children: A }),
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
            defaultValue: m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: m.RE.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: m.RE.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: m.RE.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
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
var P = a(343508);
let U = _("popular-music", p.a.POPULAR_MUSIC, 0, 0),
    H = {
        ranked_songs: [
            {
                track_external_id: "2plbrEY59IikOBgBGLjaoe",
                track_title: "Creature In The Black Night",
                artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6",
                artist_name: "Dayseeker",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f001",
                plays: 21,
                unique_listeners: 8,
            },
            {
                track_external_id: "4eCwFoinvpIQi1kBEoAzQO",
                track_title: "New Genesis",
                artist_external_id: "6mEQK9m2krja6X1cfsAjfl",
                artist_name: "Ado",
                cover_art_hash: "ab67616d0000b273d2e5f0b0e0b0a0c0d0e0f002",
                plays: 17,
                unique_listeners: 6,
            },
        ],
        ranked_artists: [
            { artist_external_id: "1vCWHaC5f2uS3yhpwWbIA6", artist_name: "Dayseeker", plays: 38, unique_listeners: 11 },
        ],
        top_listeners: [{ user_id: "1330000000000000101", plays: 84 }],
        computed_at: null,
    };
function M(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${P.Gt} ${a}`,
        children: [(0, s.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function j(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${N.Gt} ${a}`,
        children: [(0, s.jsx)(o.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function C(e) {
    let { mode: t, hydration: a, type: n, initialConfig: r, successData: o } = e,
        [i, d] = l.useState(r),
        u = (0, s.jsx)(D.P, {
            guildId: "widget-slot-story-guild",
            widget: { id: "1", type: n, config: i },
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
            })(a, o),
            onRemove: () => {},
            onCommitConfig: d,
        });
    return (0, s.jsxs)("div", {
        className: N.Zp,
        children: [
            (0, s.jsx)(j, { label: "Narrow column (380px)", className: N.sc, children: u }),
            (0, s.jsx)(j, { label: "Wide column (685px)", className: N.U, children: u }),
        ],
    });
}
let Y = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    B = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            S,
            u,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, s.jsx)(C, {
                                ...e,
                                type: p.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: Y,
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
            { title: "Server Hub Gaming Leaderboard", stories: [O] },
            {
                title: "Server Hub Popular Music",
                stories: [
                    {
                        name: "Popular Music",
                        id: "guild-space-popular-music",
                        docs: "Shows the Popular Music widget shell at wide, narrow, and minimum widths across populated, loading, and error states.",
                        component: function (e) {
                            let { state: t, mode: a } = e,
                                l = (function (e) {
                                    switch (e) {
                                        case "populated":
                                            return { status: "success", data: H };
                                        case "loading":
                                            return { status: "loading" };
                                        case "error":
                                            return { status: "error" };
                                    }
                                })(t);
                            function n(e) {
                                return (0, s.jsx)(
                                    D.P,
                                    {
                                        guildId: "popular-music-story-guild",
                                        widget: { ...U, id: `${U.id}-${e}` },
                                        guildSpaceMode: a,
                                        hydration: l,
                                        onRemove: () => {},
                                    },
                                    e,
                                );
                            }
                            return (0, s.jsxs)("div", {
                                className: P.Zp,
                                children: [
                                    (0, s.jsx)(M, {
                                        label: "Wide column (685px)",
                                        className: P.U,
                                        children: n("wide"),
                                    }),
                                    (0, s.jsx)(M, {
                                        label: "Narrow column (380px)",
                                        className: P.sc,
                                        children: n("narrow"),
                                    }),
                                    (0, s.jsx)(M, {
                                        label: "Minimum width (320px)",
                                        className: P.Bp,
                                        children: n("minimum"),
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
                        },
                    },
                ],
            },
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish", "Leaderboard", "Popular Music"],
    },
    W = { playgroundBaseUrl: "guild-space", collections: [B] };
