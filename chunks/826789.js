c.d(e, { default: () => r });
var a = c(627968);
c(64700);
var d = c(192308),
    n = c(523527),
    o = c(182681),
    l = c(976860),
    s = c(954571),
    i = c(652215);
function r(t) {
    let { onClose: e, ...c } = t;
    return (0, a.jsx)(o.default, {
        onClose: e,
        handleLearnMore: function () {
            (0, n.A)(),
                (0, d.closeAllModals)(),
                s.default.track(i.HAw.PREMIUM_PROMOTION_OPENED, {
                    location_section: i.JJy.STREAM_UPSELL_MODAL,
                    location_object: i.ZSU.NAVIGATION_LINK,
                }),
                (0, l.pX)(i.BVt.APPLICATION_STORE);
        },
        ...c,
    });
}
