s.d(t, { Ok: () => x, _B: () => h });
var n = s(627968),
    l = s(311907),
    a = s(859703),
    r = s(929271),
    i = s(392344),
    o = s(522043),
    c = s(214832),
    u = s(76531),
    d = s(563905),
    _ = s(478677),
    m = s(985018);
function h() {
    return [
        { value: "quest_bar", label: m.intl.string(m.t.rjVPdM) },
        { value: "share_embed", label: m.intl.string(m.t["D/gSWS"]) },
        { value: "home_card", label: m.intl.string(m.t["5wnpF3"]) },
        { value: "channel_call_header", label: m.intl.string(m.t.gWinpQ) },
        { value: "members_list", label: m.intl.string(m.t.wpYima) },
        { value: "activity_panel", label: m.intl.string(m.t.L2mlUb) },
    ];
}
let x = (e) => {
    let { questId: t, selectedSections: s } = e,
        m = (0, l.bG)([a.A], () => a.A.getQuest(t));
    if (null != (0, l.bG)([a.A], () => a.A.getFetchQuestPreviewError(t)) || null == m) return null;
    let h = (e) => null == s || 0 === s.length || s.includes(e);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            h("quest_bar") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(o.A, { quest: m }), (0, n.jsx)(r.c, {})] }),
            h("home_card") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(d._, { quest: m }), (0, n.jsx)(r.c, {})] }),
            h("share_embed") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(u.A, { questId: m.id }), (0, n.jsx)(r.c, {})] }),
            h("channel_call_header") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(c.n, { quest: m }), (0, n.jsx)(r.c, {})] }),
            h("members_list") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(_.A, { quest: m }), (0, n.jsx)(r.c, {})] }),
            h("activity_panel") &&
                (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(i.A, { quest: m }), (0, n.jsx)(r.c, {})] }),
        ],
    });
};
