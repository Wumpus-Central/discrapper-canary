a.r(t), a.d(t, { playgroundConfig: () => T, guildSpaceCollection: () => _ });
var l = a(477900),
    o = a(582128),
    r = a(503698),
    i = a.n(r),
    s = a(228366),
    n = a(593673),
    d = a(529609),
    c = a(86294);
let u = 0;
function h(e, t, a, l) {
    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        position: { column: a, order: l },
        config: { type: t, ...o },
        requires_hydration: t === n.a.LEADERBOARD,
    };
}
let p = [
        h("left-2", n.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        h("right-1", n.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        h("left-1", n.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        h("right-2", n.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    g = p
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    m = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
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
                        { width: a, hydration: r } = e,
                        h =
                            ((t = `guild-space-story-${r}`),
                            o.useEffect(() => {
                                let e = u++;
                                if (
                                    (s.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: g,
                                    }),
                                    "loading" !== r)
                                ) {
                                    if ("error" === r)
                                        return void s.h.dispatch({
                                            type: "GUILD_SPACE_HYDRATE_FAILURE",
                                            guildId: t,
                                            requestId: e,
                                            retryable: !1,
                                        });
                                    s.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_SUCCESS",
                                        guildId: t,
                                        requestId: e,
                                        widgets: g.map((e) => ({
                                            id: e,
                                            data: "success" === r ? { type: n.a.LEADERBOARD, ...m } : null,
                                        })),
                                    });
                                }
                            }, [t, r]),
                            t);
                    return (0, l.jsx)("div", {
                        className: i()(c.frame, c[a]),
                        children: (0, l.jsx)(d.A, { guildId: h, widgets: p }),
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
var y = a(834730),
    b = a(770224),
    f = a(992915);
function w(e) {
    let { label: t, className: a, children: o } = e;
    return (0, l.jsxs)("div", {
        className: `${f.Gt} ${a}`,
        children: [(0, l.jsx)(y.E, { variant: "text-xs/medium", color: "text-muted", children: t }), o],
    });
}
function E(e) {
    let { mode: t, hydration: a, type: r, title: i, initialConfig: s, successData: n } = e,
        [d, c] = o.useState(s),
        u = (0, l.jsx)(b.P, {
            type: r,
            config: d,
            guildSpaceMode: t,
            title: i,
            hydration: (function (e, t) {
                switch (e) {
                    case "none":
                        return;
                    case "success":
                        return { status: "success", data: t };
                    default:
                        return { status: e };
                }
            })(a, n),
            onRemove: () => {},
            onCommitConfig: c,
        });
    return (0, l.jsxs)("div", {
        className: f.Zp,
        children: [
            (0, l.jsx)(w, { label: "Narrow column (380px)", className: f.sc, children: u }),
            (0, l.jsx)(w, { label: "Wide column (685px)", className: f.U, children: u }),
        ],
    });
}
let S = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    x = { heading: "Top chatters this week" },
    A = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    _ = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            v,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(E, {
                                ...e,
                                type: n.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: S,
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
                    {
                        name: "WidgetSlot + Leaderboard",
                        id: "guild-space-widget-slot-leaderboard",
                        docs: "Leaderboard reference widget (hydrated) rendering content from the mock data prop on success, and the widget-owned loading/error states otherwise. The pencil opens the framework-owned Edit modal for its config.",
                        component: function (e) {
                            return (0, l.jsx)(E, {
                                ...e,
                                type: n.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: x,
                                successData: A,
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
                                defaultValue: "success",
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
        ],
        tags: ["Server Hub", "Widgets", "GuildSpace"],
    },
    T = { playgroundBaseUrl: "guild-space", collections: [_] };
