n.d(t, {
    A: () => u,
});
var r = n(627968),
    l = n(64700),
    o = n(397927),
    i = n(216456),
    s = n(341915),
    a = n(651892),
    c = n(717415);

function u(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = l.useContext(c.VideoQuestModalContext);
    return (0, r.jsx)(o.Button, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(s.uF.VIDEO_MODAL_PRIMARY_CTA, i.Cy.OPEN_GAME_LINK),
        text: (0, a.wr)(n),
    });
}
