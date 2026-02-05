i.d(e, { default: () => h });
var n = i(284009),
    r = i.n(n),
    a = i(659694);
let s = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class h {
    canvas;
    canvasContext;
    animation = null;
    dropped;
    currentFrame;
    currentFrameTime;
    frameDuration;
    key;
    animate;
    visible;
    requestAnimationFrameId;
    hasInitialFrame;
    onInitialDraw;
    onError;
    constructor({
        canvas: t,
        id: e,
        assetUrl: i,
        assetData: n,
        isVisible: s,
        shouldAnimate: h,
        onInitialDraw: o,
        onError: l,
    }) {
        const c = t.getContext("2d");
        r()(null != c, "couldn't get canvas 2d context."),
            (this.canvas = t),
            (this.canvasContext = c),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1e3),
            (this.animate = h),
            (this.visible = s),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = o),
            (this.onError = l),
            (this.key = `${e}:${t.width}:${t.height}`),
            a.A.create(this.key, t.width, t.height, i, n)
                .then((t) => {
                    null != t &&
                        (this.dropped
                            ? a.A.drop(this.key)
                            : ((this.animation = t),
                              (this.frameDuration = 1e3 / t.frameRate),
                              this.scheduleOrCancelTick()));
                })
                .catch((t) => {
                    l?.();
                });
    }
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
    onInitialAnimationTick = (t) => {
        (this.requestAnimationFrameId = null),
            (performance.now() - t < 30 || s) &&
                this.draw(0) &&
                (this.resumeAnimation(), this.onInitialDraw?.(), (this.hasInitialFrame = !0)),
            this.scheduleOrCancelTick();
    };
    onAnimationTick = (t) => {
        this.requestAnimationFrameId = null;
        let e = performance.now(),
            i = Math.floor(((s ? e : t) - this.currentFrameTime) / this.frameDuration);
        i > 0 &&
            ((e - t < 12 || s) && (this.draw(this.currentFrame), (this.currentFrame += i)),
            (this.currentFrameTime += i * this.frameDuration)),
            this.scheduleOrCancelTick();
    };
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
}
