i.d(e, { default: () => o });
var n = i(284009),
    r = i.n(n),
    a = i(659694);
function s(t, e, i) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = i),
        t
    );
}
let h = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class o {
    setState(t, e) {
        null != e && (t || e === this.currentFrame || this.draw(e), (this.currentFrame = e)),
            t && !this.animate && this.resumeAnimation(),
            (this.animate = t),
            this.scheduleOrCancelTick();
    }
    setVisibility(t) {
        let e = this.visible;
        (this.visible = t), this.visible && !e && this.resumeAnimation(), this.scheduleOrCancelTick();
    }
    resumeAnimation() {
        this.currentFrameTime = performance.now();
    }
    clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw(t) {
        return (
            null != this.animation &&
            (this.clear(), this.animation.drawInto(this.canvasContext, t, this.canvas.width, this.canvas.height), !0)
        );
    }
    drop() {
        (this.animate = !1),
            this.scheduleOrCancelTick(),
            a.A.drop(this.key),
            (this.animation = null),
            (this.dropped = !0);
    }
    scheduleOrCancelTick() {
        this.dropped ||
            (this.hasInitialFrame
                ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null)
                : this.requestAnimationFrame(this.onInitialAnimationTick));
    }
    requestAnimationFrame(t) {
        null != t && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(t)),
            null != t &&
                null != this.requestAnimationFrameId &&
                (cancelAnimationFrame(this.requestAnimationFrameId),
                (this.requestAnimationFrameId = requestAnimationFrame(t))),
            null == t &&
                null != this.requestAnimationFrameId &&
                (cancelAnimationFrame(this.requestAnimationFrameId), (this.requestAnimationFrameId = null));
    }
    constructor({
        canvas: t,
        id: e,
        assetUrl: i,
        assetData: n,
        isVisible: o,
        shouldAnimate: l,
        onInitialDraw: c,
        onError: u,
    }) {
        s(this, "canvas", void 0),
            s(this, "canvasContext", void 0),
            s(this, "animation", null),
            s(this, "dropped", void 0),
            s(this, "currentFrame", void 0),
            s(this, "currentFrameTime", void 0),
            s(this, "frameDuration", void 0),
            s(this, "key", void 0),
            s(this, "animate", void 0),
            s(this, "visible", void 0),
            s(this, "requestAnimationFrameId", void 0),
            s(this, "hasInitialFrame", void 0),
            s(this, "onInitialDraw", void 0),
            s(this, "onError", void 0),
            s(this, "onInitialAnimationTick", (t) => {
                if (((this.requestAnimationFrameId = null), (performance.now() - t < 30 || h) && this.draw(0))) {
                    var e;
                    this.resumeAnimation(),
                        null == (e = this.onInitialDraw) || e.call(this),
                        (this.hasInitialFrame = !0);
                }
                this.scheduleOrCancelTick();
            }),
            s(this, "onAnimationTick", (t) => {
                this.requestAnimationFrameId = null;
                let e = performance.now(),
                    i = Math.floor(((h ? e : t) - this.currentFrameTime) / this.frameDuration);
                i > 0 &&
                    ((e - t < 12 || h) && (this.draw(this.currentFrame), (this.currentFrame += i)),
                    (this.currentFrameTime += i * this.frameDuration)),
                    this.scheduleOrCancelTick();
            });
        const m = t.getContext("2d");
        r()(null != m, "couldn't get canvas 2d context."),
            (this.canvas = t),
            (this.canvasContext = m),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1000),
            (this.animate = l),
            (this.visible = o),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = c),
            (this.onError = u),
            (this.key = "".concat(e, ":").concat(t.width, ":").concat(t.height)),
            a.A.create(this.key, t.width, t.height, i, n)
                .then((t) => {
                    null != t &&
                        (this.dropped
                            ? a.A.drop(this.key)
                            : ((this.animation = t),
                              (this.frameDuration = 1000 / t.frameRate),
                              this.scheduleOrCancelTick()));
                })
                .catch((t) => {
                    null == u || u();
                });
    }
}
