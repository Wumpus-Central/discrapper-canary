e.d(a, { A: () => i });
var s = e(627968);
e(64700);
var l = e(821609),
    n = e(666171);
function i(t) {
    let { guildId: a, productId: e, attachmentId: i, ...c } = t,
        { isLoading: o, downloadAttachment: r } = (0, n.A)(a, e);
    return (0, s.jsx)(l.$, {
        ...c,
        loading: o,
        onClick: function () {
            r(i);
        },
    });
}
