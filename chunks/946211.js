t.d(n, { L: () => c });
var r = t(200651);
t(192379);
var o = t(409813),
    l = t(443650),
    s = t(464797),
    u = t(427091);
function a(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = (0, s._)();
    return (0, r.jsx)(l.Z, {
        guildProductListing: t,
        className: u.header,
        onClose: n
    });
}
let c = (e, n, t) => (t === o.h8.CONFIRM ? null : (0, r.jsx)(a, { onClose: () => n(!1) }));
