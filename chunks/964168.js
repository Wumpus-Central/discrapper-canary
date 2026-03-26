"use strict";
n.d(t, { default: () => T, m: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(4208),
    l = n(397927),
    u = n(964486),
    c = n(235986),
    d = n(954571),
    _ = n(859703),
    f = n(890687),
    p = n(590202),
    h = n(652215),
    m = n(985018),
    E = n(457791),
    g = n(295171);
let A = 2500,
    I = 467;
function T(e) {
    let { questId: t, survey: n, transitionState: s, onClose: a, onSubmit: _ } = e,
        p = (0, f.C5)(t),
        [T, y] = i.useState(0),
        [N, C] = (0, l.zhh)(() => ({ from: { width: "0%" }, config: { duration: A } })),
        R = (e) => {
            _(),
                y(1),
                null != p &&
                    d.default.track(h.HAw.QUEST_SURVEY_SUBMITTED, { ...v(p, n), choice: e.text, choice_id: e.key });
        },
        O = async (e) => {
            1 === e && (await C({ width: "100%" }), a());
        };
    return (
        (0, u.Ay)(() => {
            null != p && d.default.track(h.HAw.QUEST_SURVEY_DISPLAYED, v(p, n));
        }),
        null == p && a(),
        (0, r.jsx)(l.EOs, {
            "data-migration-pending": !0,
            transitionState: s,
            size: l.rIJ.DYNAMIC,
            className: E.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, r.jsxs)(l.tN_, {
                activeSlide: T,
                width: I,
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
                                    (0, r.jsx)(l.s_y, { "data-migration-pending": !0, className: E.PV, onClick: a }),
                                    (0, r.jsx)("img", { src: g, alt: "", className: E.LY }),
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
                                    (0, r.jsx)("img", { src: g, alt: "", className: E.LY }),
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: m.intl.string(m.t.KTjjrG),
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: m.intl.string(m.t.AvbrEM),
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
                                            text: m.intl.string(m.t.cpT0Cq),
                                            onClick: a,
                                        }),
                                        (0, r.jsx)(o.animated.div, { className: E.ce, style: N }),
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
        className: a()(E.z5, t),
        onClick: () => i(n),
        children: [(0, r.jsx)(l.Text, { variant: "text-sm/semibold", children: n.text }), (0, r.jsx)(l._BQ, {})],
    });
}
function y(e) {
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
                null != n && d.default.track(h.HAw.QUEST_SURVEY_DISMISSED, { ...v(n, e.survey), submitted: t });
            },
        },
    );
}
function v(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, p.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
