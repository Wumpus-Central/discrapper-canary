"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(435371),
    l = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    _ = n(890687),
    f = n(590202),
    h = n(971649),
    p = n(717415),
    g = n(583235),
    E = n(985018),
    A = n(438655),
    I = n(681636);
function T() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: a } = i.useContext(p.VideoQuestModalContext),
        T = (0, h.go)(),
        y = (0, _.LS)(e),
        S = i.useRef(null),
        { isHoveringOrFocusing: v } = (0, u.A)(S),
        C = (0, g.H)({ quest: e, onClose: a, sourceQuestContent: t, impressionId: T }),
        b = e.config.ctaConfig.subtitle,
        N = void 0 !== b && !(0, c.uJ)(b);
    return (0, r.jsx)(o.m_, {
        text: E.intl.string(E.t.EuHF34),
        children: (0, r.jsx)(l.DUT, {
            onClick: () => C(d.uF.VIDEO_MODAL, f.Cy.OPEN_GAME_LINK),
            className: A._S,
            children: (0, r.jsxs)("div", {
                className: s()(I.hA, A.t8, { [A.Mc]: y }),
                ref: S,
                children: [
                    (0, r.jsx)("div", {
                        className: A.sB,
                        children: (0, r.jsx)(l.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: s()(A.xw, { [A._L]: n }),
                            lineClamp: n ? void 0 : 1,
                            children: E.intl.format(E.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: s()(A.sB, { [A.fi]: n }),
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(A.PV, { [A.WV]: n, [A.mq]: n }),
                                children: (0, r.jsx)(l.yr3, {
                                    size: "xs",
                                    color: v ? l.LU0.colors.ICON_STRONG.css : l.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-sm/medium",
                                className: s()(A.PV, { [A.WV]: n, [A.mq]: n }),
                                color: v ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            N
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: s()(A.SC, { [A.b2]: n }),
                                          }),
                                          (0, r.jsx)(l.Heading, {
                                              className: s()(A.xw, { [A._L]: n }),
                                              variant: "heading-sm/medium",
                                              lineClamp: n ? void 0 : 1,
                                              color: v ? "text-strong" : "text-subtle",
                                              children: b,
                                          }),
                                      ],
                                  })
                                : null,
                        ],
                    }),
                ],
            }),
        }),
    });
}
