n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var o = n(481060),
    s = n(113434),
    a = n(497505),
    i = n(644646),
    l = n(613087),
    c = n(472144),
    d = n(46140),
    u = n(39260);
let p = (e) => {
    let { contentLocation: t, quest: n, progressBarRef: p, isExpanded: m, taskDetails: x, activeScreen: h } = e,
        { percentComplete: g } = x,
        f = (0, s.eQ)(n),
        _ = (0, s.vf)(n, m, h);
    return (0, r.jsxs)('div', {
        className: u.questProgressWrapper,
        children: [
            (0, r.jsx)(l.l7, {
                inState: t,
                id: 'progress-bar',
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
                            questContent: a.jn.QUEST_BAR_V2,
                            autoplay: !1,
                            location: d.dr.QUESTS_BAR
                        })
                    })
            }),
            (0, r.jsxs)('div', {
                className: u.questProgressCopy,
                children: [
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-title',
                        children: (e) =>
                            (0, r.jsx)(o.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'header-primary',
                                variant: 'text-sm/semibold',
                                children: f
                            })
                    }),
                    (0, r.jsx)(l.l7, {
                        inState: t,
                        id: 'progress-subtitle',
                        isTextTransition: !0,
                        children: (e) =>
                            (0, r.jsx)(o.Text, {
                                ref: e,
                                className: u.questProgressHint,
                                color: 'text-muted',
                                variant: 'text-xs/normal',
                                children: _
                            })
                    })
                ]
            })
        ]
    });
};
