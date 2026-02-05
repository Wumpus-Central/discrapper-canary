n.d(t, { A: () => x });
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(835245),
    o = n(582754),
    c = n(397927),
    d = n(736653),
    u = n(12901),
    _ = n(954571),
    m = n(341915),
    A = n(590202),
    g = n(545986),
    E = n(652215),
    h = n(985018),
    p = n(608821),
    C = n(641701);
function x(e) {
    let { inOldSettings: t = !1 } = e,
        n = (0, o.Mw)((0, d.Ay)()),
        r = s.useMemo(
            () => ({
                backgroundImage:
                    "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)",
            }),
            [],
        ),
        x = s.useCallback(() => {
            (0, u.default)(),
                (0, g.navigateToQuestHome)({ fromContent: m.uF.QUEST_HOME_MOVE_CALLOUT }),
                _.default.track(E.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: A.Cy.VIEW_QUESTS,
                    click_id: (0, l.A)(),
                    is_targeted: !1,
                    ...(0, A.fF)(m.uF.QUEST_HOME_MOVE_CALLOUT),
                });
        }, []);
    return (0, i.jsx)("div", {
        className: a()(p.kL, { [p.Zd]: t }),
        style: r,
        children: (0, i.jsxs)(c.BJc, {
            className: p.FS,
            justify: "space-between",
            children: [
                (0, i.jsxs)(c.BJc, {
                    gap: 4,
                    children: [
                        (0, i.jsxs)("div", {
                            className: p.N1,
                            children: [
                                (0, i.jsx)("img", { alt: "", src: C, className: p.Kk }),
                                (0, i.jsx)(c.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: h.intl.string(h.t.z8YP2A),
                                }),
                            ],
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: h.intl.string(h.t.HdKh65),
                        }),
                    ],
                }),
                (0, i.jsx)(c.Button, {
                    variant: n ? "primary" : "overlay-primary",
                    text: h.intl.string(h.t.GURBQl),
                    onClick: x,
                }),
            ],
        }),
    });
}
