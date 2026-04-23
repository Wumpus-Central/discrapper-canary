var r = i(787570),
    n = i(872379);
let a = new Map();
self.addEventListener("message", (e) => {
    let { data: t } = e;
    switch (t.type) {
        case n.l.INITIALIZE:
            ((e) => {
                let {
                        canvas: t,
                        canvasId: i,
                        animationId: s,
                        assetUrl: o,
                        assetData: h,
                        isVisible: l,
                        shouldAnimate: c,
                    } = e,
                    u = new r.default({
                        canvas: t,
                        id: s,
                        assetUrl: o,
                        assetData: h,
                        isVisible: l,
                        shouldAnimate: c,
                        onInitialDraw: () => {
                            self.postMessage({ type: n.l.FIRST_DRAW, canvasId: i });
                        },
                        onError: () => {
                            self.postMessage({ type: n.l.ERROR, canvasId: i });
                        },
                    });
                a.set(i, u);
            })(t);
            break;
        case n.l.DROP:
            ((e) => {
                let { canvasId: t } = e;
                a.get(t)?.drop(), a.delete(t);
            })(t);
            break;
        case n.l.VISIBILITY_CHANGE:
            ((e) => {
                let { canvasId: t, isVisible: i } = e;
                a.get(t)?.setVisibility(i);
            })(t);
            break;
        case n.l.STATE_CHANGE:
            ((e) => {
                let { canvasId: t, shouldAnimate: i, nextFrame: r } = e;
                a.get(t)?.setState(i, r);
            })(t);
    }
});
