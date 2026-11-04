var a = r(445972),
    s = r(872379);
let o = new Map();
self.addEventListener("message", (e) => {
    let { data: t } = e;
    switch (t.type) {
        case s.l.INITIALIZE:
            ((e) => {
                let {
                        canvas: t,
                        canvasId: r,
                        animationId: i,
                        assetUrl: l,
                        assetData: c,
                        isVisible: n,
                        shouldAnimate: p,
                    } = e,
                    f = new a.default({
                        canvas: t,
                        id: i,
                        assetUrl: l,
                        assetData: c,
                        isVisible: n,
                        shouldAnimate: p,
                        onInitialDraw: () => {
                            self.postMessage({ type: s.l.FIRST_DRAW, canvasId: r });
                        },
                        onError: () => {
                            self.postMessage({ type: s.l.ERROR, canvasId: r });
                        },
                    });
                o.set(r, f);
            })(t);
            break;
        case s.l.DROP:
            ((e) => {
                let { canvasId: t } = e;
                (o.get(t)?.drop(), o.delete(t));
            })(t);
            break;
        case s.l.VISIBILITY_CHANGE:
            ((e) => {
                let { canvasId: t, isVisible: r } = e;
                o.get(t)?.setVisibility(r);
            })(t);
            break;
        case s.l.STATE_CHANGE:
            ((e) => {
                let { canvasId: t, shouldAnimate: r, nextFrame: a } = e;
                o.get(t)?.setState(r, a);
            })(t);
    }
});
