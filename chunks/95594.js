r.d(n, {
    Z: function () {
        return c;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(663507),
    s = r(924428),
    l = r(151973);
let u = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function c(e) {
    let { sections: n, columns: r, getItemKey: i, getItemHeight: c, getSectionHeight: d, chunkSize: f = 250, getScrollerState: p, maxBufferWidth: h, itemGutter: _, removeEdgeItemGutters: m, sectionGutter: g, padding: E, paddingVertical: v, paddingHorizontal: y, dir: b } = e,
        I = (0, s.Z)(),
        T = (0, a.useRef)(u),
        [S] = (0, a.useState)(() => new o.ZP()),
        A = p(),
        C = Math.min(null != h ? h : 1 / 0, A.offsetWidth),
        N = null != h ? Math.max(0, A.offsetWidth - h) : 0,
        {
            dirty: R,
            chunkStart: O,
            chunkEnd: D,
            forceUpdateOnChunkChange: L
        } = (0, l.Z)({
            chunkSize: f,
            getScrollerState: p,
            forceUpdate: I
        });
    return (
        (T.current = (0, a.useMemo)(
            () =>
                R > 0
                    ? T.current
                    : (S.mergeProps({
                          sections: n,
                          columns: r,
                          getItemKey: i,
                          getItemHeight: c,
                          getSectionHeight: d,
                          bufferWidth: C,
                          itemGutter: _,
                          removeEdgeItemGutters: m,
                          sectionGutter: g,
                          padding: E,
                          paddingVertical: v,
                          paddingHorizontal: y,
                          marginLeft: N / 2,
                          dir: b
                      }),
                      S.computeVisibleSections(Math.max(0, O * f), D * f),
                      S.getState()),
            [R, S, n, r, i, c, d, O, D, f, _, m, g, E, v, y, C, b]
        )),
        {
            ...T.current,
            masonryComputer: S,
            forceUpdateOnChunkChange: L,
            forceUpdate: I
        }
    );
}
