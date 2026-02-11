"use strict";
n.d(t, { default: () => y, m: () => v });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(563495),
    l = n(397927),
    u = n(964486),
    c = n(235986),
    d = n(954571),
    _ = n(859703),
    f = n(890687),
    h = n(590202),
    p = n(652215),
    g = n(985018),
    E = n(566380),
    A = n(295171);
let I = 2500,
    T = 467;
function y(e) {
    let { questId: t, survey: n, transitionState: a, onClose: s, onSubmit: _ } = e,
        h = (0, f.C5)(t),
        [y, v] = i.useState(0),
        [b, N] = (0, l.zhh)(() => ({ from: { width: "0%" }, config: { duration: I } })),
        R = (e) => {
            _(),
                v(1),
                null != h &&
                    d.default.track(p.HAw.QUEST_SURVEY_SUBMITTED, { ...C(h, n), choice: e.text, choice_id: e.key });
        },
        O = async (e) => {
            1 === e && (await N({ width: "100%" }), s());
        };
    return (
        (0, u.Ay)(() => {
            null != h && d.default.track(p.HAw.QUEST_SURVEY_DISPLAYED, C(h, n));
        }),
        null == h && s(),
        (0, r.jsx)(l.EOs, {
            "data-migration-pending": !0,
            transitionState: a,
            size: l.rIJ.DYNAMIC,
            className: E.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, r.jsxs)(l.tN_, {
                activeSlide: y,
                width: T,
                onSlideReady: O,
                children: [
                    (0, r.jsxs)(l.q7S, {
                        id: 0,
                        children: [
                            (0, r.jsxs)(l.rQ0, {
                                "data-migration-pending": !0,
                                direction: c.A.Direction.VERTICAL,
                                separator: !1,
                                className: E.Hc,
                                children: [
                                    (0, r.jsx)(l.s_y, { "data-migration-pending": !0, className: E.PV, onClick: s }),
                                    (0, r.jsx)("img", { src: A, alt: "", className: E.LY }),
                                    (0, r.jsx)(l.Heading, { variant: "heading-lg/semibold", children: n.title }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: E.jE,
                                children: n.choices.map((e) => (0, r.jsx)(S, { choice: e, onClick: R }, e.key)),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.q7S, {
                        id: 1,
                        children: [
                            (0, r.jsxs)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: E.wD,
                                children: [
                                    (0, r.jsx)("img", { src: A, alt: "", className: E.LY }),
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: g.intl.string(g.t.KTjjrG),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: g.intl.string(g.t.AvbrEM),
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.jlY, {
                                "data-migration-pending": !0,
                                children: (0, r.jsxs)("div", {
                                    className: E.cG,
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: g.intl.string(g.t.cpT0Cq),
                                            onClick: s,
                                        }),
                                        (0, r.jsx)(o.animated.div, { className: E.ce, style: b }),
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
function S(e) {
    let { className: t, choice: n, onClick: i } = e;
    return (0, r.jsxs)(l.DUT, {
        className: s()(E.z5, t),
        onClick: () => i(n),
        children: [(0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: n.text }), (0, r.jsx)(l._BQ, {})],
    });
}
function v(e) {
    let t = !1;
    (0, l.mMO)(
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
                let n = _.A.getQuest(e.questId);
                null != n && d.default.track(p.HAw.QUEST_SURVEY_DISMISSED, { ...C(n, e.survey), submitted: t });
            },
        },
    );
}
function C(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, h.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
