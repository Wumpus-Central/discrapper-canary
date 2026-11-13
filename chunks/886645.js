i.d(t, { playgroundConfig: () => k });
var n = i(477900),
    a = i(582128),
    o = i(906018),
    s = i(691885),
    r = i(821609),
    l = i(834730),
    d = i(692768),
    c = i(948468),
    u = i(832521);
function m(e) {
    return o.bI.create({
        status: o.Ph.IN_PROGRESS,
        pageId: 10,
        revision: 1,
        progress: { pageIndex: 0, estimatedPageCount: 1 },
        content: { oneofKind: "questions", questions: { questions: [o.yy.create({ id: 11, required: !0, ...e })] } },
    });
}
function h(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    return o.fu.create({ id: e, text: t, ...i });
}
function p(e, t) {
    return o.Ig.create({ text: e, imageUrl: t?.url ?? "", imageAltText: t?.alt ?? "" });
}
function x(e) {
    return o.Ig.create({ text: `$${e}`, price: { value: e } });
}
let g = [
    {
        id: "single-choice",
        name: "Single choice",
        page: m({
            text: "Which game do you play most on Discord?",
            kind: {
                oneofKind: "singleChoice",
                singleChoice: {
                    choices: [h(14, "Minecraft"), h(12, "Fortnite"), h(15, "Valorant"), h(13, "League of Legends")],
                },
            },
        }),
    },
    {
        id: "dropdown",
        name: "Dropdown",
        page: m({
            text: "Where do you live?",
            kind: {
                oneofKind: "dropdown",
                dropdown: {
                    choices: [
                        h(21, "Brazil"),
                        h(22, "Canada"),
                        h(23, "Germany"),
                        h(24, "India"),
                        h(25, "Japan"),
                        h(26, "United States"),
                    ],
                },
            },
        }),
    },
    {
        id: "multi-choice",
        name: "Multiple choice (1 to 3, with an exclusive choice)",
        page: m({
            text: "Which of these have you used in the last month?",
            kind: {
                oneofKind: "multiChoice",
                multiChoice: {
                    choices: [
                        h(33, "Voice channels"),
                        h(31, "Stage channels"),
                        h(34, "Screen share"),
                        h(32, "Activities"),
                        h(36, "None of these", { exclusive: !0 }),
                    ],
                    minSelected: { value: 1 },
                    maxSelected: { value: 3 },
                },
            },
        }),
    },
    {
        id: "choice-other",
        name: "Multiple choice with \u201COther\u201D text",
        page: m({
            text: "How did you hear about Discord?",
            kind: {
                oneofKind: "multiChoice",
                multiChoice: {
                    choices: [
                        h(41, "A friend"),
                        h(44, "Other", { allowText: !0, textMaxLength: { value: 80 } }),
                        h(42, "A game"),
                        h(43, "Social media"),
                    ],
                },
            },
        }),
    },
    {
        id: "rank",
        name: "Rank (top 3 of 5)",
        page: m({
            text: "Rank the three things you\u2019d most like us to improve.",
            kind: {
                oneofKind: "rank",
                rank: {
                    choices: [
                        { id: 53, text: "Voice quality" },
                        { id: 51, text: "Notifications" },
                        { id: 55, text: "Search" },
                        { id: 52, text: "Server discovery" },
                        { id: 54, text: "Mobile app speed" },
                    ],
                    rankTop: { value: 3 },
                },
            },
        }),
    },
    {
        id: "matrix",
        name: "Matrix",
        page: m({
            text: "How satisfied are you with each of these?",
            kind: {
                oneofKind: "matrix",
                matrix: {
                    rows: [
                        { id: 61, text: "Text chat" },
                        { id: 62, text: "Voice chat" },
                        { id: 63, text: "Video calls" },
                        { id: 64, text: "Screen share" },
                    ],
                    scale: [
                        { id: 81, text: "Very dissatisfied" },
                        { id: 82, text: "Dissatisfied" },
                        { id: 83, text: "Neutral" },
                        { id: 84, text: "Satisfied" },
                        { id: 85, text: "Very satisfied" },
                    ],
                },
            },
        }),
    },
    {
        id: "scale",
        name: "Scale (1 to 5)",
        page: m({
            text: "How easy was it to find what you were looking for?",
            kind: {
                oneofKind: "scale",
                scale: { minValue: 1, maxValue: 5, minLabel: "Very hard", maxLabel: "Very easy", nps: !1 },
            },
        }),
    },
    {
        id: "nps",
        name: "NPS (0 to 10)",
        page: m({
            text: "How likely are you to recommend Discord to a friend?",
            kind: {
                oneofKind: "scale",
                scale: {
                    minValue: 0,
                    maxValue: 10,
                    minLabel: "Not at all likely",
                    maxLabel: "Extremely likely",
                    nps: !0,
                },
            },
        }),
    },
    {
        id: "text-single",
        name: "Text, single line",
        page: m({
            text: "What do your friends call your squad?",
            kind: { oneofKind: "freeText", freeText: { multiline: !1, maxLength: { value: 300 } } },
        }),
    },
    {
        id: "text-multi",
        name: "Text, multi-line",
        page: m({
            text: "Anything else you\u2019d like to tell us?",
            kind: { oneofKind: "freeText", freeText: { multiline: !0, maxLength: { value: 300 } } },
        }),
    },
    {
        id: "info",
        name: "Info text",
        page: m({
            text: "Thanks for helping make Discord better. The next questions are about voice chat.",
            required: !1,
            kind: { oneofKind: "info", info: {} },
        }),
    },
    {
        id: "conjoint",
        name: "Conjoint",
        page: o.bI.create({
            status: o.Ph.IN_PROGRESS,
            pageId: 10,
            revision: 1,
            progress: { pageIndex: 0, estimatedPageCount: 1 },
            content: {
                oneofKind: "conjoint",
                conjoint: o.Oc.create({
                    text: "Which of these plans would you pick?",
                    features: [
                        { id: 200, label: "Plan", priceCurrency: "" },
                        { id: 210, label: "Perk", priceCurrency: "" },
                        { id: 220, label: "Monthly price", priceCurrency: "USD" },
                    ],
                    includeNoneOption: !0,
                    tasks: [
                        {
                            concepts: [
                                {
                                    label: "Plan 1",
                                    levels: [
                                        p("Basic"),
                                        p("Animated avatar", {
                                            url: "https://cdn.discordapp.com/embed/avatars/0.png",
                                            alt: "A blue Discord avatar",
                                        }),
                                        x(2.99),
                                    ],
                                },
                                {
                                    label: "Plan 2",
                                    levels: [
                                        p("Full"),
                                        p("Custom profile theme", {
                                            url: "https://cdn.discordapp.com/embed/avatars/1.png",
                                            alt: "A grey Discord avatar",
                                        }),
                                        x(9.99),
                                    ],
                                },
                                { label: "Plan 3", levels: [p("Basic"), p("Bigger uploads"), x(4.99)] },
                            ],
                        },
                    ],
                }),
            },
        }),
    },
    {
        id: "maxdiff",
        name: "MaxDiff",
        page: o.bI.create({
            status: o.Ph.IN_PROGRESS,
            pageId: 10,
            revision: 1,
            progress: { pageIndex: 0, estimatedPageCount: 1 },
            content: {
                oneofKind: "maxdiff",
                maxdiff: {
                    text: "Which of these matter most and least to you?",
                    mostLabel: "Most important",
                    leastLabel: "Least important",
                    sets: [
                        {
                            items: [
                                { id: 401, text: "Faster app start" },
                                { id: 402, text: "Better noise suppression" },
                                { id: 403, text: "More emoji slots" },
                                { id: 404, text: "Message scheduling" },
                            ],
                        },
                    ],
                    anchorQuestionText: "How many of these would you actually use?",
                },
            },
        }),
    },
];
var f = i(52479);
let v = "none";
function y(e) {
    return JSON.stringify(e, null, 2);
}
function b(e) {
    let { questionId: t, rowId: i, choiceId: n, code: a } = e,
        s = [0 !== t ? `question ${t}` : "page", 0 !== i ? `row ${i}` : null, 0 !== n ? `choice ${n}` : null]
            .filter((e) => null != e)
            .join(", ");
    return `${o.u2[a]} on ${s}`;
}
function S(e) {
    let { fixture: t } = e,
        [i, m] = a.useState(t.page),
        [h, p] = a.useState(() => (0, d.oC)(t.page)),
        [x, g] = a.useState([]),
        [S, k] = a.useState(v),
        [j, N] = a.useState(null),
        [w, I] = a.useState(0),
        C = (function (e) {
            function t(t, i) {
                return o.Xd.create({ pageId: e.pageId, code: t, message: i });
            }
            return [
                {
                    id: "stale",
                    name: "STALE: the page is out of date",
                    error: t(o.u2.STALE, "This page is out of date."),
                },
                {
                    id: "too-long",
                    name: "TOO_LONG: the response is over its size limit",
                    error: t(o.u2.TOO_LONG, "Your answers are too long."),
                },
                {
                    id: "invalid",
                    name: "INVALID: anything else",
                    error: t(o.u2.INVALID, "Something went wrong with your answers. Please try again."),
                },
            ];
        })(t.page);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: f.MT,
                children: (0, n.jsx)(
                    u.N,
                    {
                        page: i,
                        request: h,
                        onRequestChange: p,
                        errors: x,
                        onSubmit: function () {
                            let e = (0, c.o)(i, h);
                            if ((g(e), e.length > 0)) return void N(null);
                            let t = C.find((e) => {
                                let { id: t } = e;
                                return t === S;
                            });
                            if (null == t) return void N({ kind: "accepted", sent: h });
                            let n = (function (e, t, i) {
                                let { error: n } = i,
                                    a = n.code === o.u2.STALE;
                                return o.bI.create({
                                    ...e,
                                    revision: a ? e.revision + 1 : e.revision,
                                    submittedAnswers: a ? [] : t.answers,
                                    errors: [n],
                                });
                            })(i, h, t);
                            (N({ kind: "rejected", sent: h, response: n }), m(n), p((0, d.oC)(n)), g(n.errors));
                        },
                    },
                    `${i.revision}-${w}`,
                ),
            }),
            (0, n.jsxs)("div", {
                className: f.fi,
                children: [
                    (0, n.jsx)(s.l, {
                        label: "Simulate server error",
                        description:
                            "Submit runs the client checks first. If they pass, the server answers with this instead of accepting.",
                        selectionMode: "single",
                        options: [
                            { id: v, label: "None: the server accepts", value: v },
                            ...C.map((e) => {
                                let { id: t, name: i } = e;
                                return { id: t, label: i, value: t };
                            }),
                        ],
                        value: S,
                        onSelectionChange: (e) => k(e ?? v),
                    }),
                    (0, n.jsx)("div", {
                        className: f.KE,
                        children: (0, n.jsx)(r.$, {
                            size: "sm",
                            variant: "secondary",
                            text: "Reset page",
                            onClick: function () {
                                (m(t.page), p((0, d.oC)(t.page)), g([]), N(null), I((e) => e + 1));
                            },
                        }),
                    }),
                    x.length > 0 &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        j?.kind === "rejected"
                                            ? "Errors from the server"
                                            : "Errors from the client checks",
                                }),
                                (0, n.jsx)(l.E, {
                                    variant: "mono-md/normal",
                                    color: "text-feedback-warning",
                                    className: f.AV,
                                    children: x.map(b).join("\n"),
                                }),
                            ],
                        }),
                    null != j &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children:
                                        "accepted" === j.kind ? "Sent SubmitRequest (accepted)" : "Sent SubmitRequest",
                                }),
                                (0, n.jsx)("pre", {
                                    className: f.aY,
                                    "aria-label": "Sent SubmitRequest",
                                    children: y(o.S3.toJson(j.sent, { useProtoFieldName: !0 })),
                                }),
                            ],
                        }),
                    j?.kind === "rejected" &&
                        (0, n.jsxs)(n.Fragment, {
                            children: [
                                (0, n.jsx)(l.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    children: "Server response: RenderedPage errors",
                                }),
                                (0, n.jsx)("pre", {
                                    className: f.aY,
                                    "aria-label": "Server response",
                                    children: y(o.bI.toJson(j.response, { useProtoFieldName: !0 }).errors ?? []),
                                }),
                            ],
                        }),
                    (0, n.jsxs)("details", {
                        children: [
                            (0, n.jsx)("summary", {
                                children: (0, n.jsx)(l.E, {
                                    variant: "body-sm/semibold",
                                    color: "text-strong",
                                    tag: "span",
                                    children: "Rendered page (proto JSON)",
                                }),
                            }),
                            (0, n.jsx)("pre", {
                                className: f.aY,
                                children: y(o.bI.toJson(i, { useProtoFieldName: !0 })),
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
let k = {
    collections: [
        {
            id: "native-surveys",
            name: "Native Surveys",
            groups: [
                {
                    title: "Native surveys",
                    stories: [
                        {
                            name: "Survey page",
                            id: "survey-page",
                            component: function () {
                                let [e, t] = a.useState(g["0"].id),
                                    i =
                                        g.find((t) => {
                                            let { id: i } = t;
                                            return i === e;
                                        }) ?? g["0"];
                                return (0, n.jsxs)("div", {
                                    className: f.zr,
                                    children: [
                                        (0, n.jsx)("div", {
                                            className: f.Nz,
                                            children: (0, n.jsx)(s.l, {
                                                label: "Question type",
                                                selectionMode: "single",
                                                options: g.map((e) => {
                                                    let { id: t, name: i } = e;
                                                    return { id: t, label: i, value: t };
                                                }),
                                                value: e,
                                                onSelectionChange: (e) => t(e ?? g["0"].id),
                                            }),
                                        }),
                                        (0, n.jsx)("div", {
                                            className: f.Zp,
                                            children: (0, n.jsx)(S, { fixture: i }, i.id),
                                        }),
                                    ],
                                });
                            },
                        },
                    ],
                },
            ],
        },
    ],
};
