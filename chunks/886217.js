n.d(t, {
    Ok: () => A,
    _B: () => h,
});
var r = n(627968),
    i = n(311907),
    l = n(859703),
    a = n(929271),
    s = n(392344),
    o = n(522043),
    c = n(214832),
    u = n(76531),
    d = n(563905),
    p = n(478677),
    f = n(985018);

function h() {
    return [
        {
            value: "quest_bar",
            label: f.intl.string(f.t.rjVPdM),
        },
        {
            value: "share_embed",
            label: f.intl.string(f.t["D/gSWS"]),
        },
        {
            value: "home_card",
            label: f.intl.string(f.t["5wnpF3"]),
        },
        {
            value: "channel_call_header",
            label: f.intl.string(f.t.gWinpQ),
        },
        {
            value: "members_list",
            label: f.intl.string(f.t.wpYima),
        },
        {
            value: "activity_panel",
            label: f.intl.string(f.t.L2mlUb),
        },
    ];
}
let A = (e) => {
    let { questId: t, selectedSections: n } = e,
        f = (0, i.bG)([l.A], () => l.A.getQuest(t));
    if (null != (0, i.bG)([l.A], () => l.A.getFetchQuestPreviewError(t)) || null == f) return null;
    let h = (e) => null == n || 0 === n.length || n.includes(e);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            h("quest_bar") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(o.A, {
                            quest: f,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
            h("home_card") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(d._, {
                            quest: f,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
            h("share_embed") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(u.A, {
                            questId: f.id,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
            h("channel_call_header") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(c.n, {
                            quest: f,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
            h("members_list") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(p.A, {
                            quest: f,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
            h("activity_panel") &&
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)(s.A, {
                            quest: f,
                        }),
                        (0, r.jsx)(a.c, {}),
                    ],
                }),
        ],
    });
};
