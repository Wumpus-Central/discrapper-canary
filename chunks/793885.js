t.d(l, { m: () => r });
var n = t(627968),
    s = t(371794),
    a = t(871123),
    i = t(500102);
function r(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        r = null != t ? (0, s.YE)(l, t, 1024, a.pV) : null;
    return (0, n.jsx)("div", {
        className: i._,
        children: null != r ? (0, n.jsx)("div", { className: i.i, style: { backgroundImage: `url(${r})` } }) : null,
    });
}
