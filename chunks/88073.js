(a.r(t), a.d(t, { playgroundConfig: () => j, guildSpaceCollection: () => M }));
var s = a(477900),
    l = a(582128),
    n = a(503698),
    o = a.n(n),
    r = a(834730),
    i = a(872188),
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
                    [u, m] = l.useState(a);
                u !== a && (m(a), c(!1));
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
                    className: o()(d.frame, d[t]),
                    children: n
                        ? (0, s.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, s.jsx)(i.A, { onPublish: p }),
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
var u = a(228366),
    m = a(593673),
    p = a(518782),
    g = a(529609);
let h = 0;
function A(e, t, a, s) {
    let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: s },
        config: { type: t, ...l },
        requires_hydration: t === m.a.LEADERBOARD,
        locked: !1,
    };
}
var _ = a(81253);
let S = [
        A("left-2", m.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        A("right-1", m.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        A("left-1", m.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        A("right-2", m.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    b = S.filter((e) => {
        let { requires_hydration: t } = e;
        return t;
    }).map((e) => {
        let { id: t } = e;
        return t;
    }),
    y = {
        stat: p.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
        week_start_ts: 1756512e3,
        next_stat: p.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
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
                        r =
                            ((t = `guild-space-story-${n}`),
                            l.useEffect(() => {
                                let e = h++;
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
                                            data: "success" === n ? { type: m.a.LEADERBOARD, ...y } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, s.jsx)("div", {
                        className: o()(_.frame, _[a]),
                        children: (0, s.jsx)(g.A, { canEdit: !0, guildId: r, widgets: S }),
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
    R = a(287809),
    D = a(427262),
    I = a(539888),
    w = a(927813);
let T = a(282435).sx.slice(0, 10),
    G = [
        { days: 7, totalSeconds: 38 * w.A.Seconds.HOUR + 900, gameIndexes: [0, 1, 2, 3, 4, 5, 6, 7] },
        { days: 7, totalSeconds: 32 * w.A.Seconds.HOUR + 2400, gameIndexes: [1, 2, 3, 4, 5, 6, 8] },
        { days: 5, totalSeconds: 26 * w.A.Seconds.HOUR + 3e3, gameIndexes: [0, 2, 4, 6, 8, 9] },
        { days: 4, totalSeconds: 21 * w.A.Seconds.HOUR + 600, gameIndexes: [1, 3, 5, 7, 9] },
        { days: 3, totalSeconds: 14 * w.A.Seconds.HOUR + 2100, gameIndexes: [0, 1, 2, 3, 4] },
        { days: 2, totalSeconds: 9 * w.A.Seconds.HOUR + 2880, gameIndexes: [2, 4, 6, 8] },
        { days: 2, totalSeconds: 8 * w.A.Seconds.HOUR + 720, gameIndexes: [0, 3, 5, 9] },
        { days: 1, totalSeconds: 7 * w.A.Seconds.HOUR + 2280, gameIndexes: [1, 4, 7] },
        { days: 1, totalSeconds: 6 * w.A.Seconds.HOUR + 720, gameIndexes: [0, 2, 8] },
        { days: 1, totalSeconds: 5 * w.A.Seconds.HOUR + 1140, gameIndexes: [3, 6] },
        { days: 1, totalSeconds: 4 * w.A.Seconds.HOUR + 3420, gameIndexes: [1, 9] },
        { days: 1, totalSeconds: 4 * w.A.Seconds.HOUR + 2760, gameIndexes: [0, 5] },
        { days: 1, totalSeconds: 3 * w.A.Seconds.HOUR + 2100, gameIndexes: [4] },
        { days: 1, totalSeconds: 2 * w.A.Seconds.HOUR + 3060, gameIndexes: [7] },
        { days: 1, totalSeconds: +w.A.Seconds.HOUR + 1320, gameIndexes: [2] },
        { days: 1, totalSeconds: 3480, gameIndexes: [5] },
        { days: 1, totalSeconds: 2820, gameIndexes: [8] },
        { days: 1, totalSeconds: 2160, gameIndexes: [0] },
        { days: 1, totalSeconds: 1440, gameIndexes: [6] },
        { days: 1, totalSeconds: 660, gameIndexes: [9] },
    ];
var L = a(546184);
let O = A("leaderboard", m.a.LEADERBOARD, 0, 0);
function U(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, s.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
let N = {
    name: "Gaming Leaderboard",
    id: "guild-space-gaming-leaderboard",
    component: function (e) {
        let t,
            a,
            { state: n, stat: o, currentUserPlacement: i } = e,
            d = (0, f.bG)([R.default], () => R.default.getCurrentUser()?.id),
            c = (0, f.bG)([x.Ay], () => x.Ay.getFlattenedGuildIds()[0]),
            u =
                ((t = (0, f.yK)([E.A], () => E.A.getFriendIDs())),
                l.useMemo(
                    () =>
                        t
                            .flatMap((e) => {
                                let t = R.default.getUser(e);
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
            return (0, s.jsx)(r.E, {
                variant: "text-sm/normal",
                color: "text-muted",
                children: "Waiting for the client to load a guild and your friends list\u2026",
            });
        let m = (function (e) {
                let {
                        memberIds: t,
                        gameIds: a = T,
                        stat: s = p.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
                        entryCount: l = G.length,
                        ended: n = !1,
                    } = e,
                    o = 0 === t.length ? [] : G.slice(0, l),
                    r = Math.floor(Date.now() / 1e3);
                return {
                    stat: s,
                    week_start_ts: r - (n ? 8 : 3) * w.A.Seconds.DAY,
                    next_stat: p.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED,
                    previous_winner: t[0],
                    streak_count: 3,
                    computed_at: new Date((r - w.A.Seconds.DAY) * 1e3).toISOString(),
                    entries: o.map((e, l) => {
                        let n;
                        return {
                            user_id: (n = t[l % t.length]),
                            name: n,
                            value: (function (e, t) {
                                switch (t) {
                                    case p.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED:
                                        return e.days;
                                    case p.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED:
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
            })({ memberIds: u, stat: o, entryCount: "empty" === n ? 2 : 20, ended: "ended" === n }),
            g = "on-podium" === i ? 2 : 12,
            h = "absent" !== i && "outside-list" !== i && null != d,
            A = { ...m, entries: h ? m.entries.map((e) => (e.rank === g ? { ...e, user_id: d } : e)) : m.entries };
        ("outside-list" === i &&
            null != d &&
            A.entries.push({
                user_id: d,
                name: "you",
                value: m.entries[m.entries.length - 1].value,
                rank: 25,
                application_ids: m.entries[m.entries.length - 1].application_ids,
                application_count: m.entries[m.entries.length - 1].application_count,
                time_played_seconds: m.entries[m.entries.length - 1].time_played_seconds,
            }),
            (a =
                "loading" === n
                    ? { status: "loading" }
                    : "error" === n
                      ? { status: "error" }
                      : { status: "success", data: A }));
        let _ = (0, s.jsx)(I.P, { guildId: c, widget: O, guildSpaceMode: "view", hydration: a });
        return (0, s.jsxs)("div", {
            className: L.Zp,
            children: [
                (0, s.jsx)(U, { label: "Narrow column (380px)", className: L.sc, children: _ }),
                (0, s.jsx)(U, { label: "Wide column (685px)", className: L.U, children: _ }),
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
            defaultValue: p.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED,
            options: [
                { label: "Most Game Days", value: p.R.GAMING_LEADERBOARD_STAT_DAYS_PLAYED },
                { label: "Most Game Time", value: p.R.GAMING_LEADERBOARD_STAT_HOURS_PLAYED },
                { label: "Most Unique Games", value: p.R.GAMING_LEADERBOARD_STAT_UNIQUE_GAMES_PLAYED },
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
function H(e) {
    let { label: t, className: a, children: l } = e;
    return (0, s.jsxs)("div", {
        className: `${L.Gt} ${a}`,
        children: [(0, s.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), l],
    });
}
function P(e) {
    let { mode: t, hydration: a, type: n, initialConfig: o, successData: r } = e,
        [i, d] = l.useState(o),
        c = (0, s.jsx)(I.P, {
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
            })(a, r),
            onRemove: () => {},
            onCommitConfig: d,
        });
    return (0, s.jsxs)("div", {
        className: L.Zp,
        children: [
            (0, s.jsx)(H, { label: "Narrow column (380px)", className: L.sc, children: c }),
            (0, s.jsx)(H, { label: "Wide column (685px)", className: L.U, children: c }),
        ],
    });
}
let k = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    M = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            v,
            c,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, s.jsx)(P, {
                                ...e,
                                type: m.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: k,
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
            { title: "Server Hub Gaming Leaderboard", stories: [N] },
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish", "Leaderboard"],
    },
    j = { playgroundBaseUrl: "guild-space", collections: [M] };
