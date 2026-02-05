n.d(t, { Ok: () => m, _B: () => _ });
var i = n(627968),
    r = n(311907),
    a = n(859703),
    l = n(929271),
    s = n(392344),
    o = n(522043),
    d = n(214832),
    c = n(76531),
    u = n(563905),
    A = n(478677),
    h = n(985018);
function _() {
    return [
        { value: "quest_bar", label: h.intl.string(h.t.rjVPdM) },
        { value: "share_embed", label: h.intl.string(h.t["D/gSWS"]) },
        { value: "home_card", label: h.intl.string(h.t["5wnpF3"]) },
        { value: "channel_call_header", label: h.intl.string(h.t.gWinpQ) },
        { value: "members_list", label: h.intl.string(h.t.wpYima) },
        { value: "activity_panel", label: h.intl.string(h.t.L2mlUb) },
    ];
}
let m = (e) => {
    let { questId: t, selectedSections: n } = e,
        h = (0, r.bG)([a.A], () => a.A.getQuest(t));
    if (null != (0, r.bG)([a.A], () => a.A.getFetchQuestPreviewError(t)) || null == h) return null;
    let _ = (e) => null == n || 0 === n.length || n.includes(e);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            _("quest_bar") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(o.A, { quest: h }), (0, i.jsx)(l.c, {})] }),
            _("home_card") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(u._, { quest: h }), (0, i.jsx)(l.c, {})] }),
            _("share_embed") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(c.A, { questId: h.id }), (0, i.jsx)(l.c, {})] }),
            _("channel_call_header") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(d.n, { quest: h }), (0, i.jsx)(l.c, {})] }),
            _("members_list") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(A.A, { quest: h }), (0, i.jsx)(l.c, {})] }),
            _("activity_panel") &&
                (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(s.A, { quest: h }), (0, i.jsx)(l.c, {})] }),
        ],
    });
};
