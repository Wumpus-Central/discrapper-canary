c.d(e, { default: () => r });
var o = c(627968);
c(64700);
var a = c(192308),
    d = c(523527),
    n = c(182681),
    s = c(976860),
    i = c(954571),
    l = c(652215);
function r(t) {
    let { onClose: e, ...c } = t;
    return (0, o.jsx)(n.A, {
        onClose: e,
        handleLearnMore: function () {
            (0, d.A)(),
                (0, a.closeAllModals)(),
                i.default.track(l.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: l.JJy.STREAM_UPSELL_MODAL,
                    location_object: l.ZSU.NAVIGATION_LINK,
                }),
                (0, s.pX)(l.BVt.APPLICATION_STORE);
        },
        ...c,
    });
}
