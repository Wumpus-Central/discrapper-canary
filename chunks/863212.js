i.r(t), i.d(t, { playgroundConfig: () => L, guildSpaceCollection: () => P });
var n = i(477900),
    s = i(582128),
    a = i(503698),
    l = i.n(a),
    r = i(834730),
    o = i(872188),
    d = i(737837);
let c = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: i } = e,
                    [a, c] = s.useState(!1),
                    [u, h] = s.useState(i);
                u !== i && (h(i), c(!1));
                let p = s.useCallback(() => {
                    switch (i) {
                        case "success":
                            return c(!0), Promise.resolve();
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [i]);
                return (0, n.jsx)("div", {
                    className: l()(d.frame, d[t]),
                    children: a
                        ? (0, n.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, n.jsx)(o.A, { onPublish: p }),
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
var u = i(228366),
    h = i(593673),
    p = i(529609);
let g = 0;
function f(e, t, i, n) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: i, order: n },
        config: { type: t, ...s },
        requires_hydration: t === h.a.LEADERBOARD,
    };
}
var m = i(86294);
let v = [
        f("left-2", h.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        f("right-1", h.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        f("left-1", h.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        f("right-2", h.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    y = v
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    b = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
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
                        { width: i, hydration: a } = e,
                        r =
                            ((t = `guild-space-story-${a}`),
                            s.useEffect(() => {
                                let e = g++;
                                if (
                                    (u.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: y,
                                    }),
                                    "loading" !== a)
                                ) {
                                    if ("error" === a)
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
                                        widgets: y.map((e) => ({
                                            id: e,
                                            data: "success" === a ? { type: h.a.LEADERBOARD, ...b } : null,
                                        })),
                                    });
                                }
                            }, [t, a]),
                            t);
                    return (0, n.jsx)("div", {
                        className: l()(m.frame, m[i]),
                        children: (0, n.jsx)(p.A, { guildId: r, widgets: v }),
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
var I = i(317574),
    w = i(992915);
function C(e) {
    let { label: t, className: i, children: s } = e;
    return (0, n.jsxs)("div", {
        className: `${w.Gt} ${i}`,
        children: [(0, n.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function E(e) {
    let { mode: t, hydration: i, type: a, initialConfig: l, successData: r } = e,
        [o, d] = s.useState(l),
        c = (0, n.jsx)(I.P, {
            widget: { id: "1", type: a, config: o },
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
            })(i, r),
            onRemove: () => {},
            onCommitConfig: d,
        });
    return (0, n.jsxs)("div", {
        className: w.Zp,
        children: [
            (0, n.jsx)(C, { label: "Narrow column (380px)", className: w.sc, children: c }),
            (0, n.jsx)(C, { label: "Wide column (685px)", className: w.U, children: c }),
        ],
    });
}
let S = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    _ = { heading: "Top chatters this week" },
    x = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
            { id: "4", name: "a_very_long_username_that_truncates", score: 1204 },
        ],
    },
    P = {
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
                            return (0, n.jsx)(E, {
                                ...e,
                                type: h.a.IMAGE_TEXT,
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
                            return (0, n.jsx)(E, {
                                ...e,
                                type: h.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: _,
                                successData: x,
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
    L = { playgroundBaseUrl: "guild-space", collections: [P] };
