r.d(t, { L: () => a });
var n = r(200651);
r(192379);
var o = r(409813),
    c = r(443650),
    l = r(464797),
    i = r(448362);
function u(e) {
    let { onClose: t } = e,
        { guildProductListing: r } = (0, l._)();
    return (0, n.jsx)(c.Z, {
        guildProductListing: r,
        className: i.header,
        onClose: t
    });
}
let a = (e, t, r) => (r === o.h8.CONFIRM ? null : (0, n.jsx)(u, { onClose: () => t(!1) }));
