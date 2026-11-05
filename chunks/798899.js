n.d(t, { default: () => x, m: () => N });
var i = n(477900),
    a = n(582128),
    s = n(503698),
    r = n.n(s),
    o = n(120692),
    l = n(935462),
    u = n(717421),
    c = n(430690),
    d = n(534514),
    m = n(834730),
    p = n(821609),
    f = n(939249),
    C = n(320448),
    E = n(192308),
    y = n(964486),
    g = n(235986),
    h = n(129230),
    A = n(859703),
    I = n(61387),
    S = n(590202),
    _ = n(652215),
    v = n(792996),
    T = n(299592);
let b = "/assets/1929535a8397f7f0.png";
function x(e) {
    let { questId: t, survey: n, transitionState: s, onClose: r, onSubmit: f } = e,
        C = (0, I.C5)(t),
        [E, A] = a.useState(0),
        [S, x] = (0, u.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } }));
    function N(e) {
        (f(),
            A(1),
            null != C &&
                h.default.track(_.HAw.QUEST_SURVEY_SUBMITTED, { ...q(C, n), choice: e.text, choice_id: e.key }));
    }
    return (
        (0, y.Ay)(() => {
            null != C && h.default.track(_.HAw.QUEST_SURVEY_DISPLAYED, q(C, n));
        }),
        null == C && r(),
        (0, i.jsx)(l.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: l.rI.DYNAMIC,
            className: T.CR,
            parentComponent: "QuestSurveyModal",
            children: (0, i.jsxs)(c.t, {
                activeSlide: E,
                width: 467,
                onSlideReady: async function (e) {
                    1 === e && (await x({ width: "100%" }), r());
                },
                children: [
                    (0, i.jsxs)(c.q, {
                        id: 0,
                        children: [
                            (0, i.jsxs)(l.rQ, {
                                "data-migration-pending": !0,
                                direction: g.A.Direction.VERTICAL,
                                separator: !1,
                                className: T.Hc,
                                children: [
                                    (0, i.jsx)(l.s_, { "data-migration-pending": !0, className: T.PV, onClick: r }),
                                    (0, i.jsx)("img", { src: b, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, i.jsx)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.$m, {
                                "data-migration-pending": !0,
                                scrollbarGutter: !1,
                                className: T.jE,
                                children: n.choices.map((e) => (0, i.jsx)(w, { choice: e, onClick: N }, e.key)),
                            }),
                        ],
                    }),
                    (0, i.jsxs)(c.q, {
                        id: 1,
                        children: [
                            (0, i.jsxs)(l.$m, {
                                "data-migration-pending": !0,
                                className: T.wD,
                                children: [
                                    (0, i.jsx)("img", { src: b, alt: "", className: T.LY }),
                                    (0, i.jsx)(d.D, {
                                        variant: "heading-lg/semibold",
                                        children: v.intl.string(v.t.KTjjrG),
                                    }),
                                    (0, i.jsx)(m.E, {
                                        variant: "body-md/normal",
                                        color: "text-muted",
                                        children: v.intl.string(v.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, i.jsx)(l.jl, {
                                "data-migration-pending": !0,
                                children: (0, i.jsxs)("div", {
                                    className: T.cG,
                                    children: [
                                        (0, i.jsx)(p.$, {
                                            variant: "primary",
                                            text: v.intl.string(v.t.cpT0Cq),
                                            onClick: r,
                                        }),
                                        (0, i.jsx)(o.animated.div, { className: T.ce, style: S }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                ],
            }),
        })
    );
}
function w(e) {
    let { className: t, choice: n, onClick: a } = e;
    return (0, i.jsxs)(f.D, {
        className: r()(T.z5, t),
        onClick: () => a(n),
        children: [
            (0, i.jsx)(m.E, { variant: "body-sm/semibold", children: n.text }),
            (0, i.jsx)(C.ChevronSmallRightIcon, {}),
        ],
    });
}
function N(e) {
    let t = !1;
    (0, E.mM)(
        async () => {
            let { default: a } = await Promise.resolve().then(n.bind(n, 798899));
            return (n) =>
                (0, i.jsx)(a, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    },
                });
        },
        {
            onCloseCallback: () => {
                let n = A.A.getQuest(e.questId);
                null != n && h.default.track(_.HAw.QUEST_SURVEY_DISMISSED, { ...q(n, e.survey), submitted: t });
            },
        },
    );
}
function q(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, S.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
