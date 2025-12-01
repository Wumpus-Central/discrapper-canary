n.d(t, { Z: () => p });
var r = n(54381);
n(473749);
var s = n(481060),
    o = n(49436),
    a = n(373370),
    i = n(644646),
    l = n(613087),
    c = n(472144),
    d = n(324805),
    u = n(245565);
let p = (e) => {
    let {
            contentLocation: t,
            quest: n,
            progressBarRef: p,
            isExpanded: m,
            percentComplete: g,
            activeScreen: f,
            popoutTargetElementRef: h,
            onGameSheetOpened: x,
            onGameSheetClosed: _,
        } = e,
        b = (0, a.eQ)(n),
        j = (0, a.vf)({
            quest: n,
            isExpanded: m,
            activeScreen: f,
            sourceQuestContent: o.jn.QUEST_BAR_V2,
            popoutTargetElementRef: h,
            onGameSheetOpened: x,
            onGameSheetClosed: _,
        });
    return (0, r.jsxs)("div", {
        className: u.questProgressWrapper,
        children: [
            (0, r.jsx)(l.l7, {
                inState: t,
                id: "progress-bar",
                ref: p,
                children: (e) =>
                    (0, r.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: g,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, r.jsx)(i.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: o.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR,
                            sourceQuestContent: o.jn.QUEST_BAR_V2,
                        }),
                    }),
            }),
            (0, r.jsxs)("div", {
                className: u.questProgressCopy,
                children: [
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: "progress-title",
                        children: (e) =>
                            (0, r.jsx)(s.Text, {
                                ref: e,
                                className: u.questProgressHint,
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
                            (0, r.jsx)(s.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: "text-muted",
                                variant: "text-xs/normal",
                                children: j,
                            }),
                    }),
                ],
            }),
        ],
    });
};
