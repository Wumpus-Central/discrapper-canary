n.d(t, { Z: () => p });
var s = n(200651);
n(192379);
var r = n(481060),
    a = n(113434),
    o = n(497505),
    i = n(644646),
    l = n(613087),
    c = n(472144),
    d = n(46140),
    u = n(39260);
let p = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, taskDetails: x, activeScreen: h } = e,
        { percentComplete: g } = x,
        f = (0, a.eQ)(n),
        v = (0, a.vf)(n, m, h);
    return (0, s.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, s.jsx)(l.l7, {
                inState: t,
                id: 'progress-bar',
                ref: p,
                children: (e) =>
                    (0, s.jsx)(c.Z, {
                        ref: e,
                        quest: n,
                        percentComplete: g,
                        size: 42,
                        strokeWidth: 3,
                        children: (0, s.jsx)(i.Z, {
                            className: u.questProgressRewardTile,
                            quest: n,
                            questContent: o.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, s.jsxs)('div', {
                className: u.questProgressCopy,
                children: [
                    (0, s.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, s.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: f
                            })
                    }),
                    (0, s.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: (e) =>
                            (0, s.jsx)(r.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: v
                            })
                    })
                ]
            })
        ]
    });
};
