n.d(t, { Z: () => f });
var r = n(951288);
n(647438);
var i = n(481060),
    a = n(113434),
    o = n(497505),
    s = n(644646),
    l = n(613087),
    c = n(472144),
    u = n(46140),
    d = n(245565);
let f = (e) => {
    let {
            contentLocation: t,
            quest: n,
            progressBarRef: f,
            isExpanded: _,
            percentComplete: p,
            activeScreen: h,
            popoutTargetElementRef: m,
            onGameSheetOpened: g,
            onGameSheetClosed: E,
        } = e,
        b = (0, a.eQ)(n),
        y = (0, a.vf)({
            quest: n,
            isExpanded: _,
            activeScreen: h,
            sourceQuestContent: o.jn.QUEST_BAR_V2,
            popoutTargetElementRef: m,
            onGameSheetOpened: g,
            onGameSheetClosed: E,
        });
    return (0, r.jsxs)("div", {
        className: d.questProgressWrapper,
        children: [
            (0, r.jsx)(l.l7, {
                inState: t,
                id: "progress-bar",
                ref: f,
                children: (e) =>
                    (0, r.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: p,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, r.jsx)(s.Z, {
                            className: d.questProgressRewardTile,
                            quest: n,
                            questContent: o.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: u.dr.QUESTS_BAR,
                            sourceQuestContent: o.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, r.jsxs)("div", {
                className: d.questProgressCopy,
                children: [
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: "progress-title",
                        children: (e) =>
                            (0, r.jsx)(i.Text, {
                                ref: e,
                                className: d.questProgressHint,
                                color: "header-primary",
                                variant: "text-sm/semibold",
                                children: b,
                            }),
                    }),
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: "progress-subtitle",
                        isTextTransition: !0,
                        children: (e) =>
                            (0, r.jsx)(i.Text, {
                                ref: e,
                                className: d.questProgressHint,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: y,
                            }),
                    }),
                ],
            }),
        ],
    });
};
