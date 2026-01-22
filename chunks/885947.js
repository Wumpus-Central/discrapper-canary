n.d(t, {
    A: () => b,
});
var r = n(627968),
    l = n(64700),
    o = n(503698),
    i = n.n(o),
    s = n(435371),
    a = n(397927),
    c = n(713517),
    u = n(240248),
    d = n(216456),
    f = n(906822),
    m = n(341915),
    p = n(890687),
    v = n(717415),
    E = n(583235),
    g = n(985018),
    h = n(438655);

function b() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: o } = l.useContext(v.VideoQuestModalContext),
        b = (0, f.go)(),
        y = (0, p.LS)(e),
        O = l.useRef(null),
        { isHoveringOrFocusing: S } = (0, c.A)(O),
        _ = (0, E.H)({
            quest: e,
            onClose: o,
            sourceQuestContent: t,
            impressionId: b,
        }),
        C = e.config.ctaConfig.subtitle,
        x = void 0 !== C && !(0, u.uJ)(C);
    return (0, r.jsx)(s.m_, {
        text: g.intl.string(g.t.EuHF34),
        children: (0, r.jsx)(a.DUT, {
            onClick: () => _(m.uF.VIDEO_MODAL, d.Cy.OPEN_GAME_LINK),
            className: h._S,
            children: (0, r.jsxs)("div", {
                className: i()(h.hA, h.t8, {
                    [h.Mc]: y,
                }),
                ref: O,
                children: [
                    (0, r.jsx)("div", {
                        className: h.sB,
                        children: (0, r.jsx)(a.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: i()(h.xw, {
                                [h._L]: n,
                            }),
                            lineClamp: n ? void 0 : 1,
                            children: g.intl.format(g.t.EQa7os, {
                                questName: e.config.messages.questName,
                            }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: i()(h.sB, {
                            [h.fi]: n,
                        }),
                        children: [
                            (0, r.jsx)("div", {
                                className: i()(h.PV, {
                                    [h.WV]: n,
                                    [h.mq]: n,
                                }),
                                children: (0, r.jsx)(a.yr3, {
                                    size: "xs",
                                    color: S ? a.LU0.colors.ICON_STRONG.css : a.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(a.Heading, {
                                variant: "heading-sm/medium",
                                className: i()(h.PV, {
                                    [h.WV]: n,
                                    [h.mq]: n,
                                }),
                                color: S ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            x
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: i()(h.SC, {
                                                  [h.b2]: n,
                                              }),
                                          }),
                                          (0, r.jsx)(a.Heading, {
                                              className: i()(h.xw, {
                                                  [h._L]: n,
                                              }),
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
