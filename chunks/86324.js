t(896048);
var n = t(787570),
    a = t(872379);
let i = new Map();
self.addEventListener("message", (e) => {
    let { data: r } = e;
    switch (r.type) {
        case a.l.INITIALIZE:
            ((e) => {
                let {
                        canvas: r,
                        canvasId: t,
                        animationId: o,
                        assetUrl: s,
                        assetData: l,
                        isVisible: f,
                        shouldAnimate: u,
                    } = e,
                    c = new n.default({
                        canvas: r,
                        id: o,
                        assetUrl: s,
                        assetData: l,
                        isVisible: f,
                        shouldAnimate: u,
                        onInitialDraw: () => {
                            self.postMessage({
                                type: a.l.FIRST_DRAW,
                                canvasId: t,
                            });
                        },
                        onError: () => {
                            self.postMessage({
                                type: a.l.ERROR,
                                canvasId: t,
                            });
                        },
                    });
                i.set(t, c);
            })(r);
            break;
        case a.l.DROP:
            ((e) => {
                var r;
                let { canvasId: t } = e;
                null == (r = i.get(t)) || r.drop(), i.delete(t);
            })(r);
            break;
        case a.l.VISIBILITY_CHANGE:
            ((e) => {
                var r;
                let { canvasId: t, isVisible: n } = e;
                null == (r = i.get(t)) || r.setVisibility(n);
            })(r);
            break;
        case a.l.STATE_CHANGE:
            ((e) => {
                var r;
                let { canvasId: t, shouldAnimate: n, nextFrame: a } = e;
                null == (r = i.get(t)) || r.setState(n, a);
            })(r);
    }
});
