t.d(l, {
    m: () => d,
});
var n = t(627968),
    a = t(371794),
    s = t(871123),
    i = t(881421);

function d(e) {
    let { applicationId: l, backgroundImageAssetId: t } = e,
        d = null != t ? (0, a.YE)(l, t, 1024, s.pV) : null;
    return (0, n.jsx)("div", {
        className: i._,
        children:
            null != d
                ? (0, n.jsx)("div", {
                      className: i.i,
                      style: {
                          backgroundImage: "url(".concat(d, ")"),
                      },
                  })
                : null,
    });
}
