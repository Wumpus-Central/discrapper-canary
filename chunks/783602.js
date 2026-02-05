n.d(t, { A: () => x });
var a = n(627968),
    s = n(64700),
    i = n(503698),
    l = n.n(i),
    r = n(397927),
    o = n(341915),
    d = n(890687),
    c = n(270045),
    u = n(963713),
    m = n(985018),
    h = n(729836);
function x() {
    let { quest: e, onCtxMenuOpen: t, onCtxMenuClose: n, onCtxMenuSelect: i } = s.useContext(u.T),
        x = (0, d.S5)(e.config.expiresAt);
    return (0, a.jsxs)("div", {
        className: h.pS,
        children: [
            (0, a.jsx)(r.Text, {
                variant: "text-xxs/medium",
                className: l()(h.Uu, h.TK),
                children: m.intl.format(m.t["pX+fmn"], { expirationDate: x }),
            }),
            (0, a.jsx)(c.C, {
                onOpen: t,
                onClose: n,
                onSelect: i,
                questContent: o.uF.QUEST_BAR_V2,
                quest: e,
                shouldShowDisclosure: !1,
                showShareLink: !0,
                sourceQuestContent: o.uF.QUEST_BAR_V2,
                children: (e) =>
                    (0, a.jsx)(r.DUT, {
                        ...e,
                        className: h.rb,
                        "aria-label": m.intl.string(m.t.DEoVWZ),
                        children: (0, a.jsx)(r.jNK, { size: "md", color: "currentColor", className: l()(h.Bx, h.U9) }),
                    }),
            }),
        ],
    });
}
