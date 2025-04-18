n.d(t, { Z: () => d }), n(49124);
var a = n(200651),
    r = n(793030),
    l = n(442837),
    i = n(411149),
    s = n(680783),
    o = n(944486),
    c = n(641050);
function d() {
    let e = (0, l.e7)([o.Z], () => o.Z.getChannelId()),
        t = (0, s.Z)(e),
        n = (0, l.e7)([i.Z], () => i.Z.getWallpaperById(null == t ? void 0 : t.wallpaperId));
    return (0, a.jsxs)('div', {
        className: c.container,
        children: [
            (0, a.jsx)(r.X6, {
                className: c.header,
                variant: 'heading-lg/semibold',
                children: 'DM Wallpapers'
            }),
            (0, a.jsx)(r.X6, {
                className: c.subheader,
                variant: 'heading-md/semibold',
                children: 'ChatWallpaperMetadataRecord'
            }),
            (0, a.jsx)('pre', {
                className: c.code,
                children: null != n ? JSON.stringify(n, null, 2) : 'None'
            })
        ]
    });
}
