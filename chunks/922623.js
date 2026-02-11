"use strict";
n.d(t, { A: () => c });
var r = n(627968),
    i = n(64700),
    a = n(397927),
    s = n(341915),
    o = n(590202),
    l = n(651892),
    u = n(717415);
function c(e) {
    let { handlePrimaryCtaClick: t } = e,
        { quest: n } = i.useContext(u.VideoQuestModalContext);
    return (0, r.jsx)(a.Button, {
        fullWidth: !0,
        variant: "primary",
        onClick: () => t(s.uF.VIDEO_MODAL_PRIMARY_CTA, o.Cy.OPEN_GAME_LINK),
        text: (0, l.wr)(n),
    });
}
