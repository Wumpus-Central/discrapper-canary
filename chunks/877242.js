n.d(t, { Z: () => h });
var r = n(54381),
    o = n(473749),
    l = n(120356),
    i = n.n(l),
    a = n(681715),
    s = n(481060),
    c = n(104505),
    u = n(624138),
    d = n(617136),
    m = n(915750),
    f = n(49436),
    p = n(968843),
    v = n(215113),
    E = n(684245),
    g = n(388032),
    O = n(273339);
function h() {
    let { quest: e, sourceQuestContent: t, isPortrait: n, onClose: l } = o.useContext(v.VideoQuestModalContext),
        h = (0, m.aM)(),
        b = (0, p.tP)(e),
        C = o.useRef(null),
        { isHoveringOrFocusing: S } = (0, c.Z)(C),
        _ = (0, E.e)({
            quest: e,
            onClose: l,
            sourceQuestContent: t,
            impressionId: h,
        }),
        y = e.config.ctaConfig.subtitle,
        x = void 0 !== y && !(0, u.Ew)(y);
    return (0, r.jsx)(a.u, {
        text: g.intl.string(g.t.EuHF34),
        children: (0, r.jsx)(s.P3F, {
            onClick: () => _(f.jn.VIDEO_MODAL, d.jZ.OPEN_GAME_LINK),
            className: O.adInfoClickable,
            children: (0, r.jsxs)("div", {
                className: i()(O.contentHeaderGameInfo, O.contentHeaderGameInfoHoverable, {
                    [O.contentHeaderGameInfoHoverableExpired]: b,
                }),
                ref: C,
                children: [
                    (0, r.jsx)("div", {
                        className: O.contentFooterAdDetailedInfo,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-md/medium",
                            color: "header-primary",
                            className: i()(O.adDetailsTextSecondary, { [O.adDetailsTextSecondaryPortrait]: n }),
                            lineClamp: n ? void 0 : 1,
                            children: g.intl.format(g.t.EQa7os, { questName: e.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: i()(O.contentFooterAdDetailedInfo, { [O.contentFooterAdDetailedInfoPortrait]: n }),
                        children: [
                            (0, r.jsx)("div", {
                                className: i()(O.adDetailsTextPrimary, {
                                    [O.adDetailsTextPrimaryPortrait]: n,
                                    [O.addFourPxMarginRight]: n,
                                }),
                                children: (0, r.jsx)(s.owK, {
                                    size: "xs",
                                    color: S ? s.TVs.colors.ICON_STRONG.css : s.TVs.colors.ICON_MUTED.css,
                                }),
                            }),
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-sm/medium",
                                className: i()(O.adDetailsTextPrimary, {
                                    [O.adDetailsTextPrimaryPortrait]: n,
                                    [O.addFourPxMarginRight]: n,
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
                                              className: i()(O.dotSpacer, { [O.dotSpacerPortrait]: n }),
                                          }),
                                          (0, r.jsx)(s.Heading, {
                                              className: i()(O.adDetailsTextSecondary, {
                                                  [O.adDetailsTextSecondaryPortrait]: n,
                                              }),
                                              variant: "heading-sm/medium",
                                              lineClamp: n ? void 0 : 1,
                                              color: S ? "text-strong" : "text-subtle",
                                              children: y,
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
