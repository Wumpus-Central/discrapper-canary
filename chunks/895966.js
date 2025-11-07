n.d(t, { Z: () => h });
var r = n(951288),
    o = n(647438),
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
    v = n(536687),
    E = n(431130),
    g = n(388032),
    O = n(430799);
function h() {
    var e;
    let { quest: t, sourceQuestContent: n, isPortrait: l, onClose: h } = o.useContext(v.VideoQuestModalContext),
        b = (0, m.aM)(),
        S = (0, p.tP)(t),
        y = o.useRef(null),
        { isHoveringOrFocusing: C } = (0, c.Z)(y),
        _ = (0, E.p)({
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
                ref: y,
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
                                    color: C ? s.TVs.colors.ICON_PRIMARY.css : s.TVs.colors.ICON_TERTIARY.css,
                                }),
                            }),
                            (0, r.jsx)(s.Heading, {
                                variant: "heading-sm/medium",
                                className: i()(O.adDetailsTextPrimary, {
                                    [O.adDetailsTextPrimaryPortrait]: l,
                                    [O.addFourPxMarginRight]: l,
                                }),
                                color: C ? "text-primary" : "text-secondary",
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
                                              color: C ? "text-primary" : "text-secondary",
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
