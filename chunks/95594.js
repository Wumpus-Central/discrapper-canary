n.d(t, { Z: () => f }), n(47120);
var r = n(192379),
    i = n(663507),
    o = n(924428),
    a = n(151973);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function f(e) {
    let { sections: t, columns: n, getItemKey: s, getItemHeight: c, getSectionHeight: f, chunkSize: _ = 250, getScrollerState: p, maxBufferWidth: h, itemGutter: m, removeEdgeItemGutters: g, sectionGutter: E, padding: b, paddingVertical: y, paddingHorizontal: v, dir: O } = e,
        I = (0, o.Z)(),
        S = (0, r.useRef)(d),
        [T] = (0, r.useState)(() => new i.ZP()),
        N = p(),
        A = Math.min(null != h ? h : 1 / 0, N.offsetWidth),
        C = null != h ? Math.max(0, N.offsetWidth - h) : 0,
        {
            dirty: R,
            chunkStart: P,
            chunkEnd: w,
            forceUpdateOnChunkChange: D
        } = (0, a.Z)({
            chunkSize: _,
            getScrollerState: p,
            forceUpdate: I
        });
    return (
        (S.current = (0, r.useMemo)(
            () =>
                R > 0
                    ? S.current
                    : (T.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: s,
                          getItemHeight: c,
                          getSectionHeight: f,
                          bufferWidth: A,
                          itemGutter: m,
                          removeEdgeItemGutters: g,
                          sectionGutter: E,
                          padding: b,
                          paddingVertical: y,
                          paddingHorizontal: v,
                          marginLeft: C / 2,
                          dir: O
                      }),
                      T.computeVisibleSections(Math.max(0, P * _), w * _),
                      T.getState()),
            [R, T, t, n, s, c, f, P, w, _, m, g, E, b, y, v, A, O]
        )),
        u(l({}, S.current), {
            masonryComputer: T,
            forceUpdateOnChunkChange: D,
            forceUpdate: I
        })
    );
}
