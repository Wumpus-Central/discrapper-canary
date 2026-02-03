n.d(t, {
    default: () => S,
    m: () => C,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(92674),
    l = n(397927),
    c = n(964486),
    u = n(235986),
    d = n(954571),
    f = n(859703),
    p = n(890687),
    _ = n(590202),
    h = n(652215),
    m = n(985018),
    g = n(627574),
    E = n(295171);

function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}

function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 2500,
    I = 467;

function S(e) {
    let { questId: t, survey: n, transitionState: a, onClose: o, onSubmit: f } = e,
        _ = (0, p.C5)(t),
        [y, O] = i.useState(0),
        [S, C] = (0, l.zhh)(() => ({
            from: {
                width: "0%",
            },
            config: {
                duration: A,
            },
        })),
        w = (e) => {
            f(),
                O(1),
                null != _ &&
                    d.default.track(
                        h.HAw.QUEST_SURVEY_SUBMITTED,
                        v(b({}, N(_, n)), {
                            choice: e.text,
                            choice_id: e.key,
                        }),
                    );
        },
        R = async (e) => {
            1 === e &&
                (await C({
                    width: "100%",
                }),
                o());
        };
    return (
        (0, c.Ay)(() => {
            null != _ && d.default.track(h.HAw.QUEST_SURVEY_DISPLAYED, N(_, n));
        }),
        null == _ && o(),
        (0, r.jsx)(l.EOs, {
            "data-migration-pending": !0,
            transitionState: a,
            size: l.rIJ.DYNAMIC,
            className: g.modalRoot,
            parentComponent: "QuestSurveyModal",
            children: (0, r.jsxs)(l.tN_, {
                activeSlide: y,
                width: I,
                onSlideReady: R,
                children: [
                    (0, r.jsxs)(l.q7S, {
                        id: 0,
                        children: [
                            (0, r.jsxs)(l.rQ0, {
                                "data-migration-pending": !0,
                                direction: u.A.Direction.VERTICAL,
                                separator: !1,
                                className: g.Hc,
                                children: [
                                    (0, r.jsx)(l.s_y, {
                                        "data-migration-pending": !0,
                                        className: g.PV,
                                        onClick: o,
                                    }),
                                    (0, r.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: g.LY,
                                    }),
                                    (0, r.jsx)(l.Heading, {
                                        variant: "heading-lg/semibold",
                                        children: n.title,
                                    }),
                                    (0, r.jsx)(l.Text, {
                                        variant: "text-md/normal",
                                        color: "text-muted",
                                        children: n.subtitle,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: g.jE,
                                children: n.choices.map((e) =>
                                    (0, r.jsx)(
                                        T,
                                        {
                                            choice: e,
                                            onClick: w,
                                        },
                                        e.key,
                                    ),
                                ),
                            }),
                        ],
                    }),
                    (0, r.jsxs)(l.q7S, {
                        id: 1,
                        children: [
                            (0, r.jsxs)(l.$mQ, {
                                "data-migration-pending": !0,
                                className: g.wD,
                                children: [
                                    (0, r.jsx)("img", {
                                        src: E,
                                        alt: "",
                                        className: g.LY,
                                    }),
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
                                    className: g.cG,
                                    children: [
                                        (0, r.jsx)(l.Button, {
                                            variant: "primary",
                                            text: m.intl.string(m.t.cpT0Cq),
                                            onClick: o,
                                        }),
                                        (0, r.jsx)(s.animated.div, {
                                            className: g.ce,
                                            style: S,
                                        }),
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

function T(e) {
    let { className: t, choice: n, onClick: i } = e;
    return (0, r.jsxs)(l.DUT, {
        className: o()(g.z5, t),
        onClick: () => i(n),
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/semibold",
                children: n.text,
            }),
            (0, r.jsx)(l._BQ, {}),
        ],
    });
}

function C(e) {
    let t = !1;
    (0, l.mMO)(
        async () => {
            let { default: i } = await Promise.resolve().then(n.bind(n, 964168));
            return (n) =>
                (0, r.jsx)(
                    i,
                    v(b({}, n, e), {
                        onSubmit: () => {
                            t = !0;
                        },
                    }),
                );
        },
        {
            onCloseCallback: () => {
                let n = f.A.getQuest(e.questId);
                null != n &&
                    d.default.track(
                        h.HAw.QUEST_SURVEY_DISMISSED,
                        v(b({}, N(n, e.survey)), {
                            submitted: t,
                        }),
                    );
            },
        },
    );
}

function N(e, t) {
    return {
        quest_id: e.id,
        quest_status: (0, _.NI)(e),
        survey_id: t.id,
        survey_title: t.title,
        survey_subtitle: t.subtitle,
        choices: t.choices.map((e) => e.text),
    };
}
