var a = t(889544),
    s = t(872379);
let o = new Map();
self.addEventListener("message", (e) => {
    let { data: r } = e;
    switch (r.type) {
        case s.l.INITIALIZE:
            ((e) => {
                let {
                        canvas: r,
                        canvasId: t,
                        animationId: i,
                        assetUrl: l,
                        assetData: n,
                        isVisible: p,
                        shouldAnimate: c,
                    } = e,
                    d = new a.default({
                        canvas: r,
                        id: i,
                        assetUrl: l,
                        assetData: n,
                        isVisible: p,
                        shouldAnimate: c,
                        onInitialDraw: () => {
                            self.postMessage({ type: s.l.FIRST_DRAW, canvasId: t });
                        },
                        onError: () => {
                            self.postMessage({ type: s.l.ERROR, canvasId: t });
                        },
                    });
                o.set(t, d);
            })(r);
            break;
        case s.l.DROP:
            ((e) => {
                let { canvasId: r } = e;
                o.get(r)?.drop(), o.delete(r);
            })(r);
            break;
        case s.l.VISIBILITY_CHANGE:
            ((e) => {
                let { canvasId: r, isVisible: t } = e;
                o.get(r)?.setVisibility(t);
            })(r);
            break;
        case s.l.STATE_CHANGE:
            ((e) => {
                let { canvasId: r, shouldAnimate: t, nextFrame: a } = e;
                o.get(r)?.setState(t, a);
            })(r);
    }
});
