n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var o = n(481060),
    s = n(113434),
    a = n(497505),
    i = n(644646),
    l = n(613087),
    c = n(472144),
    u = n(46140),
    d = n(667904);
let p = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, percentComplete: f, activeScreen: g } = e,
        x = (0, s.eQ)(n),
        h = (0, s.vf)(n, m, g);
    return (0, r.jsxs)('div', {
        className: d.questProgressWrapper,
        children: [
            (0, r.jsx)(l.l7, {
                inState: t,
                id: 'progress-bar',
                ref: p,
                children: (e) =>
                    (0, r.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: f,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, r.jsx)(i.Z, {
                            className: d.questProgressRewardTile,
                            quest: n,
                            questContent: a.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: u.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, r.jsxs)('div', {
                className: d.questProgressCopy,
                children: [
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, r.jsx)(o.Text, {
                                ref: e,
                                className: d.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: x
                            })
                    }),
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: (e) =>
                            (0, r.jsx)(o.Text, {
                                ref: e,
                                className: d.questProgressHint,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: h
                            })
                    })
                ]
            })
        ]
    });
};
