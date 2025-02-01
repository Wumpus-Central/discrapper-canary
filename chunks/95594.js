n.d(t, { Z: () => l }), n(47120);
var i = n(192379),
    r = n(663507),
    a = n(924428),
    s = n(151973);
let o = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function l(e) {
    let { sections: t, columns: n, getItemKey: l, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: f, maxBufferWidth: _, itemGutter: p, removeEdgeItemGutters: h, sectionGutter: m, padding: g, paddingVertical: E, paddingHorizontal: v, dir: y } = e,
        I = (0, a.Z)(),
        T = (0, i.useRef)(o),
        [b] = (0, i.useState)(() => new r.ZP()),
        S = f(),
        A = Math.min(null != _ ? _ : 1 / 0, S.offsetWidth),
        N = null != _ ? Math.max(0, S.offsetWidth - _) : 0,
        {
            dirty: C,
            chunkStart: R,
            chunkEnd: O,
            forceUpdateOnChunkChange: D
        } = (0, s.Z)({
            chunkSize: d,
            getScrollerState: f,
            forceUpdate: I
        });
    return (
        (T.current = (0, i.useMemo)(
            () =>
                C > 0
                    ? T.current
                    : (b.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: A,
                          itemGutter: p,
                          removeEdgeItemGutters: h,
                          sectionGutter: m,
                          padding: g,
                          paddingVertical: E,
                          paddingHorizontal: v,
                          marginLeft: N / 2,
                          dir: y
                      }),
                      b.computeVisibleSections(Math.max(0, R * d), O * d),
                      b.getState()),
            [C, b, t, n, l, u, c, R, O, d, p, h, m, g, E, v, A, y]
        )),
        {
            ...T.current,
            masonryComputer: b,
            forceUpdateOnChunkChange: D,
            forceUpdate: I
        }
    );
}
