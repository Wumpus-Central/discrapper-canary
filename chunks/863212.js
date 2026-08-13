a.r(t), a.d(t, { playgroundConfig: () => R, guildSpaceCollection: () => C });
var l = a(477900),
    r = a(582128),
    s = a(503698),
    o = a.n(s),
    i = a(834730),
    n = a(872188),
    d = a(737837);
let c = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: a } = e,
                    [s, c] = r.useState(!1),
                    [u, h] = r.useState(a);
                u !== a && (h(a), c(!1));
                let p = r.useCallback(() => {
                    switch (a) {
                        case "success":
                            return c(!0), Promise.resolve();
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [a]);
                return (0, l.jsx)("div", {
                    className: o()(d.frame, d[t]),
                    children: s
                        ? (0, l.jsx)(i.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, l.jsx)(n.A, { onPublish: p }),
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
    h = a(593673),
    p = a(529609);
let m = 0;
function g(e, t, a, l) {
    let r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: a, order: l },
        config: { type: t, ...r },
        requires_hydration: t === h.a.LEADERBOARD,
    };
}
var b = a(86294);
let v = [
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
    f = v
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    w = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
        ],
    },
    y = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: a, hydration: s } = e,
                        i =
                            ((t = `guild-space-story-${s}`),
                            r.useEffect(() => {
                                let e = m++;
                                if (
                                    (u.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: f,
                                    }),
                                    "loading" !== s)
                                ) {
                                    if ("error" === s)
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
                                        widgets: f.map((e) => ({
                                            id: e,
                                            data: "success" === s ? { type: h.a.LEADERBOARD, ...w } : null,
                                        })),
                                    });
                                }
                            }, [t, s]),
                            t);
                    return (0, l.jsx)("div", {
                        className: o()(b.frame, b[a]),
                        children: (0, l.jsx)(p.A, { guildId: i, widgets: v }),
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
var E = a(317574),
    x = a(992915);
function S(e) {
    let { label: t, className: a, children: r } = e;
    return (0, l.jsxs)("div", {
        className: `${x.Gt} ${a}`,
        children: [(0, l.jsx)(i.E, { variant: "text-xs/medium", color: "text-muted", children: t }), r],
    });
}
function A(e) {
    let { mode: t, hydration: a, type: s, initialConfig: o, successData: i } = e,
        [n, d] = r.useState(o),
        c = (0, l.jsx)(E.P, {
            widget: { id: "1", type: s, config: n },
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
            onCommitConfig: d,
        });
    return (0, l.jsxs)("div", {
        className: x.Zp,
        children: [
            (0, l.jsx)(S, { label: "Narrow column (380px)", className: x.sc, children: c }),
            (0, l.jsx)(S, { label: "Wide column (685px)", className: x.U, children: c }),
        ],
    });
}
let _ = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    T = { heading: "Top chatters this week" },
    D = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    C = {
        id: "guild-space",
        name: "Server Hub",
        groups: [
            y,
            c,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, l.jsx)(A, {
                                ...e,
                                type: h.a.IMAGE_TEXT,
                                title: "Image + Text",
                                initialConfig: _,
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
                            return (0, l.jsx)(A, {
                                ...e,
                                type: h.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: T,
                                successData: D,
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
        tags: ["Server Hub", "Widgets", "GuildSpace", "Publish"],
    },
    R = { playgroundBaseUrl: "guild-space", collections: [C] };
