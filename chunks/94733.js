e.d(a, { A: () => l });
var n = e(627968);
e(64700);
var i = e(732955),
    s = e(666171);
function l(t) {
    let { guildId: a, productId: e, attachmentId: l, ...o } = t,
        { isLoading: d, downloadAttachment: r } = (0, s.A)(a, e);
    return (0, n.jsx)(i.$nd, {
        ...o,
        loading: d,
        onClick: function () {
            r(l);
        },
    });
}
