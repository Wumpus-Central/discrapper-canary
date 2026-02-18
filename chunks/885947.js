n.d(t, { A: () => C });
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(435371),
    o = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    m = n(890687),
    p = n(590202),
    E = n(971649),
    f = n(717415),
    v = n(583235),
    h = n(985018),
    g = n(438655),
    S = n(681636);
function C() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: i } = l.useContext(f.VideoQuestModalContext),
        C = (0, E.go)(),
        A = (0, m.LS)(e),
        x = l.useRef(null),
        { isHoveringOrFocusing: _ } = (0, u.A)(x),
        b = (0, v.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: C }),
        T = e.config.ctaConfig.subtitle,
        y = void 0 !== T && !(0, c.uJ)(T);
    return (0, r.jsx)(a.m_, {
        text: h.intl.string(h.t.EuHF34),
        children: (0, r.jsx)(o.DUT, {
            onClick: () => b(d.uF.VIDEO_MODAL, p.Cy.OPEN_GAME_LINK),
            className: g._S,
            children: (0, r.jsxs)("div", {
                className: s()(S.hA, g.t8, { [g.Mc]: A }),
                ref: x,
                children: [
                    (0, r.jsx)("div", {
                        className: g.sB,
                        children: (0, r.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: s()(g.xw, { [g._L]: n }),
                            lineClamp: n ? void 0 : 1,
                            children: h.intl.format(h.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: s()(g.sB, { [g.fi]: n }),
                        children: [
                            (0, r.jsx)("div", {
                                className: s()(g.PV, { [g.WV]: n, [g.mq]: n }),
                                children: (0, r.jsx)(o.yr3, {
                                    size: "xs",
                                    color: _ ? o.LU0.colors.ICON_STRONG.css : o.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-sm/medium",
                                className: s()(g.PV, { [g.WV]: n, [g.mq]: n }),
                                color: _ ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            y
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: s()(g.SC, { [g.b2]: n }),
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: s()(g.xw, { [g._L]: n }),
                                              variant: "heading-sm/medium",
                                              lineClamp: n ? void 0 : 1,
                                              color: _ ? "text-strong" : "text-subtle",
                                              children: T,
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
