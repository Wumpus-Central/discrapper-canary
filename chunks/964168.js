"use strict";
n.d(t, { default: () => v, m: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(517738),
    l = n(717421),
    u = n(935462),
    d = n(430690),
    c = n(534514),
    _ = n(834730),
    f = n(821609),
    E = n(939249),
    h = n(320448),
    p = n(192308),
    m = n(964486),
    g = n(235986),
    A = n(954571),
    I = n(859703),
    T = n(890687),
    S = n(590202),
    y = n(652215),
    N = n(985018),
    O = n(399407),
    R = n(295171);
function v(e) {
    let { questId: t, survey: n, transitionState: s, onClose: a, onSubmit: E } = e,
        h = (0, T.C5)(t),
        [p, I] = i.useState(0),
        [S, v] = (0, l.z)(() => ({ from: { width: "0%" }, config: { duration: 2500 } })),
        b = (e) => {
            E(),
                I(1),
                null != h &&
                    A.default.track(y.HAw.QUEST_SURVEY_SUBMITTED, { ...D(h, n), choice: e.text, choice_id: e.key });
        },
        L = async (e) => {
            1 === e && (await v({ width: "100%" }), a());
        };
    return (
        (0, m.Ay)(() => {
            null != h && A.default.track(y.HAw.QUEST_SURVEY_DISPLAYED, D(h, n));
        }),
        null == h && a(),
        (0, r.jsx)(u.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            size: u.rI.DYNAMIC,
            className: O.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, r.jsxs)(d.t, {
                activeSlide: p,
                width: 467,
                onSlideReady: L,
                children: [
                    (0, r.jsxs)(d.q, {
                        id: 0,
                        children: [
                            (0, r.jsxs)(u.rQ, {
                                "data-migration-pending": !0,
                                direction: g.A.Direction.VERTICAL,
                                separator: !1,
                                className: O.Hc,
                                children: [
                                    (0, r.jsx)(u.s_, { "data-migration-pending": !0, className: O.PV, onClick: a }),
                                    (0, r.jsx)("img", { src: R, alt: "", className: O.LY }),
                                    (0, r.jsx)(c.D, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.$m, {
                                "data-migration-pending": !0,
                                className: O.jE,
                                children: n.choices.map((e) => (0, r.jsx)(C, { choice: e, onClick: b }, e.key)),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(d.q, {
                        id: 1,
                        children: [
                            (0, r.jsxs)(u.$m, {
                                "data-migration-pending": !0,
                                className: O.wD,
                                children: [
                                    (0, r.jsx)("img", { src: R, alt: "", className: O.LY }),
                                    (0, r.jsx)(c.D, {
                                        variant: "heading-lg/semibold",
                                        children: N.intl.string(N.t.KTjjrG),
                                    }),
                                    (0, r.jsx)(_.E, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: N.intl.string(N.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(u.jl, {
                                "data-migration-pending": !0,
                                children: (0, r.jsxs)("div", {
                                    className: O.cG,
                                    children: [
                                        (0, r.jsx)(f.$, {
                                            variant: "primary",
                                            text: N.intl.string(N.t.cpT0Cq),
                                            onClick: a,
                                        }),
                                        (0, r.jsx)(o.animated.div, { className: O.ce, style: S }),
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
function C(e) {
    let { className: t, choice: n, onClick: i } = e;
    return (0, r.jsxs)(E.D, {
        className: a()(O.z5, t),
        onClick: () => i(n),
        children: [(0, r.jsx)(_.E, { variant: "text-sm/semibold", children: n.text }), (0, r.jsx)(h._, {})],
    });
}
function b(e) {
    let t = !1;
    (0, p.openModalLazy)(
        async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 964168));
            return (n) =>
                (0, r.jsx)(i, {
                    ...n,
                    ...e,
                    onSubmit: () => {
                        t = !0;
                    },
                });
        },
        {
            onCloseCallback: () => {
                let n = I.A.getQuest(e.questId);
                null != n && A.default.track(y.HAw.QUEST_SURVEY_DISMISSED, { ...D(n, e.survey), submitted: t });
            },
        },
    );
}
function D(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, S.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
