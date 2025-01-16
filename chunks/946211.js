t.d(n, {
    L: function () {
        return i;
    }
});
var r = t(200651);
t(192379);
var o = t(409813),
    u = t(443650),
    a = t(464797),
    c = t(427091);
function l(e) {
    let { onClose: n } = e,
        { guildProductListing: t } = (0, a._)();
    return (0, r.jsx)(u.Z, {
        guildProductListing: t,
        className: c.header,
        onClose: n
    });
}
let i = (e, n, t) => (t === o.h8.CONFIRM ? null : (0, r.jsx)(l, { onClose: () => n(!1) }));
