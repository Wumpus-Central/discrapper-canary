n.d(t, { A: () => C });
var r = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    a = n(435371),
    o = n(397927),
    u = n(713517),
    c = n(240248),
    d = n(341915),
    m = n(890687),
    E = n(590202),
    f = n(971649),
    p = n(717415),
    v = n(583235),
    h = n(985018),
    _ = n(438655);
function C() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: i } = s.useContext(p.VideoQuestModalContext),
        C = (0, f.go)(),
        g = (0, m.LS)(e),
        S = s.useRef(null),
        { isHoveringOrFocusing: A } = (0, u.A)(S),
        x = (0, v.H)({ quest: e, onClose: i, sourceQuestContent: t, impressionId: C }),
        T = e.config.ctaConfig.subtitle,
        b = void 0 !== T && !(0, c.uJ)(T);
    return (0, r.jsx)(a.m_, {
        text: h.intl.string(h.t.EuHF34),
        children: (0, r.jsx)(o.DUT, {
            onClick: () => x(d.uF.VIDEO_MODAL, E.Cy.OPEN_GAME_LINK),
            className: _._S,
            children: (0, r.jsxs)("div", {
                className: l()(_.hA, _.t8, { [_.Mc]: g }),
                ref: S,
                children: [
                    (0, r.jsx)("div", {
                        className: _.sB,
                        children: (0, r.jsx)(o.Heading, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            className: l()(_.xw, { [_._L]: n }),
                            lineClamp: n ? void 0 : 1,
                            children: h.intl.format(h.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: l()(_.sB, { [_.fi]: n }),
                        children: [
                            (0, r.jsx)("div", {
                                className: l()(_.PV, { [_.WV]: n, [_.mq]: n }),
                                children: (0, r.jsx)(o.yr3, {
                                    size: "xs",
                                    color: A ? o.LU0.colors.ICON_STRONG.css : o.LU0.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(o.Heading, {
                                variant: "heading-sm/medium",
                                className: l()(_.PV, { [_.WV]: n, [_.mq]: n }),
                                color: A ? "text-strong" : "text-subtle",
                                lineClamp: 1,
                                children: e.config.messages.gamePublisher,
                            }),
                            b
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: l()(_.SC, { [_.b2]: n }),
                                          }),
                                          (0, r.jsx)(o.Heading, {
                                              className: l()(_.xw, { [_._L]: n }),
                                              variant: "heading-sm/medium",
                                              lineClamp: n ? void 0 : 1,
                                              color: A ? "text-strong" : "text-subtle",
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
