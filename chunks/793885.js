t.d(l, { m: () => d });
var n = t(627968),
    s = t(371794),
    a = t(871123),
    i = t(881421);
function d(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        d = null != t ? (0, s.YE)(l, t, 1024, a.pV) : null;
    return (0, n.jsx)("div", {
        className: i._,
        children: null != d ? (0, n.jsx)("div", { className: i.i, style: { backgroundImage: `url(${d})` } }) : null,
    });
}
