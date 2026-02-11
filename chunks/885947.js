"use strict";
n.d(t, { A: () => I });
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
    A = n(438655);
function I() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: a } = i.useContext(p.VideoQuestModalContext),
        I = (0, h.go)(),
        T = (0, _.LS)(e),
        y = i.useRef(null),
        { isHoveringOrFocusing: S } = (0, u.A)(y),
        v = (0, g.H)({ quest: e, onClose: a, sourceQuestContent: t, impressionId: I }),
        C = e.config.ctaConfig.subtitle,
        b = void 0 !== C && !(0, c.uJ)(C);
    return (0, r.jsx)(o.m_, {
        text: E.intl.string(E.t.EuHF34),
        children: (0, r.jsx)(l.DUT, {
            onClick: () => v(d.uF.VIDEO_MODAL, f.Cy.OPEN_GAME_LINK),
            className: A._S,
            children: (0, r.jsxs)("div", {
                className: s()(A.hA, A.t8, { [A.Mc]: T }),
                ref: y,
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
                                    color: S ? l.LU0.colors.ICON_STRONG.css : l.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(l.Heading, {
                                variant: "heading-sm/medium",
                                className: s()(A.PV, { [A.WV]: n, [A.mq]: n }),
                                color: S ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            b
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
                                              color: S ? "text-strong" : "text-subtle",
                                              children: C,
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
