n.d(t, { A: () => A });
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(834730),
    o = n(939249),
    d = n(365199),
    c = n(341915),
    u = n(890687),
    p = n(270045),
    h = n(963713),
    m = n(985018),
    _ = n(265393);
function A() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: l } = s.useContext(h.T),
        A = (0, u.S5)(e.config.expiresAt);
    return (0, i.jsxs)("div", {
        className: _.pS,
        children: [
            (0, i.jsx)(r.E, {
                variant: "text-xxs/medium",
                className: a()(_.Uu, _.TK),
                children: m.intl.format(m.t["pX+fmn"], { expirationDate: A }),
            }),
            (0, i.jsx)(p.C, {
                onOpen: t,
                onClose: n,
                onSelect: l,
                questContent: c.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: c.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, i.jsx)(o.D, {
                        ...e,
                        className: _.rb,
                        "aria-label": m.intl.string(m.t.DEoVWZ),
                        children: (0, i.jsx)(d.j, { size: "md", color: "currentColor", className: a()(_.Bx, _.U9) }),
                    }),
            }),
        ],
    });
}
