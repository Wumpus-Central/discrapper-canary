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
    p = n(113434),
    f = n(497505),
    v = n(215113),
    E = n(684245),
    g = n(388032),
    O = n(273339);
function h() {
    var e;
    let { quest: t, sourceQuestContent: n, isPortrait: l, onClose: h } = o.useContext(v.VideoQuestModalContext),
        b = (0, m.aM)(),
        S = (0, p.tP)(t),
        C = o.useRef(null),
        { isHoveringOrFocusing: y } = (0, c.Z)(C),
        _ = (0, E.e)({
            quest: t,
            onClose: h,
            sourceQuestContent: n,
            impressionId: b,
        }),
        x = null == (e = t.config.videoMetadata) ? void 0 : e.messages.videoEndCtaSubtitle,
        j = void 0 !== x && !(0, u.Ew)(x);
    return (0, r.jsx)(a.u, {
        text: g.intl.string(g.t.EuHF34),
        children: (0, r.jsx)(s.P3F, {
            onClick: () => _(f.jn.VIDEO_MODAL, d.jZ.OPEN_GAME_LINK),
            className: O.adInfoClickable,
            children: (0, r.jsxs)("div", {
                className: i()(O.contentHeaderGameInfo, O.contentHeaderGameInfoHoverable, {
                    [O.contentHeaderGameInfoHoverableExpired]: S,
                }),
                ref: C,
                children: [
                    (0, r.jsx)("div", {
                        className: O.contentFooterAdDetailedInfo,
                        children: (0, r.jsx)(s.Heading, {
                            variant: "heading-md/medium",
                            color: "header-primary",
                            className: i()(O.adDetailsTextSecondary, { [O.adDetailsTextSecondaryPortrait]: l }),
                            lineClamp: l ? void 0 : 1,
                            children: g.intl.format(g.t.EQa7os, { questName: t.config.messages.questName }),
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: i()(O.contentFooterAdDetailedInfo, { [O.contentFooterAdDetailedInfoPortrait]: l }),
                        children: [
                            (0, r.jsx)("div", {
                                className: i()(O.adDetailsTextPrimary, {
                                    [O.adDetailsTextPrimaryPortrait]: l,
                                    [O.addFourPxMarginRight]: l,
                                }),
                                children: (0, r.jsx)(s.owK, {
                                    size: "xs",
                                    color: y ? s.TVs.colors.ICON_PRIMARY.css : s.TVs.colors.ICON_TERTIARY.css,
                                }),
                            }),
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-sm/medium",
                                className: i()(O.adDetailsTextPrimary, {
                                    [O.adDetailsTextPrimaryPortrait]: l,
                                    [O.addFourPxMarginRight]: l,
                                }),
                                color: y ? "text-primary" : "text-secondary",
                                lineClamp: 1,
                                children: t.config.messages.gamePublisher,
                            }),
                            j
                                ? (0, r.jsxs)(r.Fragment, {
                                      children: [
                                          (0, r.jsx)("div", {
                                              "aria-hidden": "true",
                                              className: i()(O.dotSpacer, { [O.dotSpacerPortrait]: l }),
                                          }),
                                          (0, r.jsx)(s.Heading, {
                                              className: i()(O.adDetailsTextSecondary, {
                                                  [O.adDetailsTextSecondaryPortrait]: l,
                                              }),
                                              variant: "heading-sm/medium",
                                              lineClamp: l ? void 0 : 1,
                                              color: y ? "text-primary" : "text-secondary",
                                              children: x,
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
