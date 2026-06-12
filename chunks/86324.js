var s = t(889544),
    a = t(872379);
let o = new Map();
self.addEventListener("message", (e) => {
    let { data: r } = e;
    switch (r.type) {
        case a.l.INITIALIZE:
            ((e) => {
                let {
                        canvas: r,
                        canvasId: t,
                        animationId: i,
                        assetUrl: l,
                        assetData: n,
                        isVisible: d,
                        shouldAnimate: p,
                    } = e,
                    f = new s.default({
                        canvas: r,
                        id: i,
                        assetUrl: l,
                        assetData: n,
                        isVisible: d,
                        shouldAnimate: p,
                        onInitialDraw: () => {
                            self.postMessage({ type: a.l.FIRST_DRAW, canvasId: t });
                        },
                        onError: () => {
                            self.postMessage({ type: a.l.ERROR, canvasId: t });
                        },
                    });
                o.set(t, f);
            })(r);
            break;
        case a.l.DROP:
            ((e) => {
                let { canvasId: r } = e;
                o.get(r)?.drop(), o.delete(r);
            })(r);
            break;
        case a.l.VISIBILITY_CHANGE:
            ((e) => {
                let { canvasId: r, isVisible: t } = e;
                o.get(r)?.setVisibility(t);
            })(r);
            break;
        case a.l.STATE_CHANGE:
            ((e) => {
                let { canvasId: r, shouldAnimate: t, nextFrame: s } = e;
                o.get(r)?.setState(t, s);
            })(r);
    }
});
