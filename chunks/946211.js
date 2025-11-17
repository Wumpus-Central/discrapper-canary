n.d(t, { L: () => a });
var r = n(54381);
n(473749);
var o = n(409813),
    c = n(443650),
    l = n(464797),
    i = n(594816);
function u(e) {
    let { onClose: t } = e,
        { guildProductListing: n } = (0, l._)();
    return (0, r.jsx)(c.Z, {
        guildProductListing: n,
        className: i.header,
        onClose: t,
    });
}
let a = (e, t, n) => (n === o.h8.CONFIRM ? null : (0, r.jsx)(u, { onClose: () => t(!1) }));
