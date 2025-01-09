var o = n(200651);
n(192379);
var r = n(481060),
    s = n(113434),
    a = n(497505),
    i = n(644646),
    l = n(613087),
    c = n(472144),
    d = n(46140),
    u = n(952529);
t.Z = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, taskDetails: x, activeScreen: g } = e,
        { percentComplete: f } = x,
        h = (0, s.eQ)(n),
        C = (0, s.vf)(n, m, g);
    return (0, o.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, o.jsx)(l.l7, {
                inState: t,
                id: 'progress-bar',
                ref: p,
                children: (e) =>
                    (0, o.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: f,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, o.jsx)(i.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: a.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, o.jsxs)('div', {
                className: u.questProgressCopy,
                children: [
                    (0, o.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, o.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: h
                            })
                    }),
                    (0, o.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: (e) =>
                            (0, o.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: C
                            })
                    })
                ]
            })
        ]
    });
};
