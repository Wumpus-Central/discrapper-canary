l.r(t), l.d(t, { playgroundConfig: () => P, guildSpaceCollection: () => C });
var i = l(477900),
    s = l(582128),
    n = l(503698),
    a = l.n(n),
    r = l(834730),
    o = l(872188),
    c = l(450284);
let d = {
    title: "Server Hub Publishing",
    stories: [
        {
            name: "Draft notice (publish)",
            id: "guild-space-draft-notice",
            docs: "The admin-only bar shown while a hub is unpublished; members can't reach a draft hub at all. Publishing is what reveals the tab to the rest of the server, and it unmounts the notice \u2014 the success case swaps in a placeholder because the real page stops rendering it. Success also fires a screen-reader announcement, since a bar disappearing is otherwise silent. No control triggers a real request.",
            component: function (e) {
                let { width: t, outcome: l } = e,
                    [n, d] = s.useState(!1),
                    [u, h] = s.useState(l);
                u !== l && (h(l), d(!1));
                let p = s.useCallback(() => {
                    switch (l) {
                        case "success":
                            return d(!0), Promise.resolve();
                        case "failure":
                            return Promise.reject(Error("story"));
                        case "pending":
                            return new Promise(() => {});
                    }
                }, [l]);
                return (0, i.jsx)("div", {
                    className: a()(c.frame, c[t]),
                    children: n
                        ? (0, i.jsx)(r.E, {
                              variant: "text-sm/normal",
                              color: "text-muted",
                              children:
                                  "Published \u2014 the real notice unmounts here, and the tab appears for members.",
                          })
                        : (0, i.jsx)(o.A, { onPublish: p }),
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
var u = l(228366),
    h = l(593673),
    p = l(529609);
let g = 0;
function m(e, t, l, i) {
    let s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
    return {
        id: e,
        type: t,
        default_title: null,
        position: { column: l, order: i },
        config: { type: t, ...s },
        requires_hydration: t === h.a.LEADERBOARD,
    };
}
var b = l(81253);
let y = [
        m("left-2", h.a.LEADERBOARD, 0, 1, { heading: "Top chatters this week" }),
        m("right-1", h.a.LEADERBOARD, 1, 0, { heading: "Top boosters" }),
        m("left-1", h.a.IMAGE_TEXT, 0, 0, {
            title: "Welcome to the server",
            body: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
            imageUrl: "https://placehold.co/640x180",
            imageAlt: "Server banner placeholder",
        }),
        m("right-2", h.a.IMAGE_TEXT, 1, 1, { title: "Events", body: "Game night every Friday." }),
    ],
    f = y
        .filter((e) => {
            let { requires_hydration: t } = e;
            return t;
        })
        .map((e) => {
            let { id: t } = e;
            return t;
        }),
    v = {
        entries: [
            { id: "1", name: "wumpus", score: 4821 },
            { id: "2", name: "clyde", score: 3960 },
            { id: "3", name: "nelly", score: 2715 },
        ],
    },
    w = {
        title: "Server Hub Page",
        stories: [
            {
                name: "Server Hub grid (view mode)",
                id: "guild-space-grid",
                docs: "Read-only hub layout. Widgets are placed by position.column then position.order (the mock set is deliberately out of array order). Wide renders 2fr/1fr; narrow collapses to one column with the left column first. The hydration control drives the real GuildSpaceHydrationStore: ImageText never hydrates, the leaderboards do.",
                component: function (e) {
                    let t,
                        { width: l, hydration: n } = e,
                        r =
                            ((t = `guild-space-story-${n}`),
                            s.useEffect(() => {
                                let e = g++;
                                if (
                                    (u.h.dispatch({
                                        type: "GUILD_SPACE_HYDRATE_START",
                                        guildId: t,
                                        requestId: e,
                                        widgetIds: f,
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
                                        widgets: f.map((e) => ({
                                            id: e,
                                            data: "success" === n ? { type: h.a.LEADERBOARD, ...v } : null,
                                        })),
                                    });
                                }
                            }, [t, n]),
                            t);
                    return (0, i.jsx)("div", {
                        className: a()(b.frame, b[l]),
                        children: (0, i.jsx)(p.A, { guildId: r, widgets: y }),
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
var E = l(317574),
    A = l(546184);
function k(e) {
    let { label: t, className: l, children: s } = e;
    return (0, i.jsxs)("div", {
        className: `${A.Gt} ${l}`,
        children: [(0, i.jsx)(r.E, { variant: "text-xs/medium", color: "text-muted", children: t }), s],
    });
}
function x(e) {
    let { mode: t, hydration: l, type: n, initialConfig: a, successData: r } = e,
        [o, c] = s.useState(a),
        d = (0, i.jsx)(E.P, {
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
            })(l, r),
            onRemove: () => {},
            onCommitConfig: c,
        });
    return (0, i.jsxs)("div", {
        className: A.Zp,
        children: [
            (0, i.jsx)(k, { label: "Narrow column (380px)", className: A.sc, children: d }),
            (0, i.jsx)(k, { label: "Wide column (685px)", className: A.U, children: d }),
        ],
    });
}
let S = {
        text: "Drop in, say hi, and check the pinned posts for the rules and event schedule.",
        image_hash: "some_hash",
    },
    T = { heading: "Top chatters this week" },
    _ = {
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
            w,
            d,
            {
                title: "Server Hub Widget Framework",
                stories: [
                    {
                        name: "WidgetSlot + ImageText",
                        id: "guild-space-widget-slot-image-text",
                        docs: "ImageText reference widget (no hydration) across view/edit and each mock hydration state. In edit mode the pencil opens the framework-owned Edit modal; Save commits config through onCommitConfig, Cancel/close discards.",
                        component: function (e) {
                            return (0, i.jsx)(x, {
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
                            return (0, i.jsx)(x, {
                                ...e,
                                type: h.a.LEADERBOARD,
                                title: "Leaderboard",
                                initialConfig: T,
                                successData: _,
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
    P = { playgroundBaseUrl: "guild-space", collections: [C] };
