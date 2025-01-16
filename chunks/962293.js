r.d(n, {
    B: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(481060),
    s = r(57292);
function o(e) {
    let { onClick: n } = e;
    return (0, i.jsx)(a.Clickable, {
        className: s.closeButton,
        onClick: n,
        children: (0, i.jsx)(a.CircleXIcon, {
            size: 'md',
            color: 'currentColor',
            className: s.closeIcon
        })
    });
}
