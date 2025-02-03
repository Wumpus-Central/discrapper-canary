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
        b = (0, i.useRef)(o),
        [T] = (0, i.useState)(() => new r.ZP()),
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
        (b.current = (0, i.useMemo)(
            () =>
                C > 0
                    ? b.current
                    : (T.mergeProps({
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
                      T.computeVisibleSections(Math.max(0, R * d), O * d),
                      T.getState()),
            [C, T, t, n, l, u, c, R, O, d, p, h, m, g, E, v, A, y]
        )),
        {
            ...b.current,
            masonryComputer: T,
            forceUpdateOnChunkChange: D,
            forceUpdate: I
        }
    );
}
