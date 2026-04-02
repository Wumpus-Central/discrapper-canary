n.d(t, { A: () => p });
var i = n(627968),
    s = n(64700),
    l = n(835245),
    a = n(582754),
    r = n(397927),
    o = n(736653),
    d = n(779733),
    c = n(954571),
    u = n(341915),
    m = n(590202),
    g = n(545986),
    _ = n(652215),
    x = n(985018),
    A = n(857391),
    h = n(641701);
function p() {
    let e = (0, a.Mw)((0, o.Ay)()),
        t = s.useMemo(
            () => ({
                backgroundImage:
                    "url(https://cdn.discordapp.com/assets/discovery/quests-wumpus-hikes-mountain-transparent-background.png)",
            }),
            [],
        ),
        n = s.useCallback(() => {
            (0, d.default)(),
                (0, g.navigateToQuestHome)({ fromContent: u.uF.QUEST_HOME_MOVE_CALLOUT }),
                c.default.track(_.HAw.QUEST_CONTENT_CLICKED, {
                    cta_name: m.Cy.VIEW_QUESTS,
                    click_id: (0, l.A)(),
                    is_targeted: !1,
                    ...(0, m.fF)(u.uF.QUEST_HOME_MOVE_CALLOUT),
                });
        }, []);
    return (0, i.jsx)("div", {
        className: A.kL,
        style: t,
        children: (0, i.jsxs)(r.BJc, {
            className: A.FS,
            justify: "space-between",
            children: [
                (0, i.jsxs)(r.BJc, {
                    gap: 4,
                    children: [
                        (0, i.jsxs)("div", {
                            className: A.N1,
                            children: [
                                (0, i.jsx)("img", { alt: "", src: h, className: A.Kk }),
                                (0, i.jsx)(r.Heading, {
                                    variant: "heading-lg/bold",
                                    color: "always-white",
                                    children: x.intl.string(x.t.z8YP2A),
                                }),
                            ],
                        }),
                        (0, i.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-subtle",
                            children: x.intl.string(x.t.HdKh65),
                        }),
                    ],
                }),
                (0, i.jsx)(r.Button, {
                    variant: e ? "primary" : "overlay-primary",
                    text: x.intl.string(x.t.GURBQl),
                    onClick: n,
                }),
            ],
        }),
    });
}
