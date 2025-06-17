i.d(t, { default: () => h });
var r = i(512722),
    n = i.n(r),
    a = i(839766);
function s(e, t, i) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = i),
        e
    );
}
let o = 'undefined' != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class h {
    setState(e, t) {
        null != t && (e || t === this.currentFrame || this.draw(t), (this.currentFrame = t)), e && !this.animate && this.resumeAnimation(), (this.animate = e), this.scheduleOrCancelTick();
    }
    setVisibility(e) {
        let t = this.visible;
        (this.visible = e), this.visible && !t && this.resumeAnimation(), this.scheduleOrCancelTick();
    }
    resumeAnimation() {
        this.currentFrameTime = performance.now();
    }
    clear() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    draw(e) {
        return null != this.animation && (this.clear(), this.animation.drawInto(this.canvasContext, e, this.canvas.width, this.canvas.height), !0);
    }
    drop() {
        (this.animate = !1), this.scheduleOrCancelTick(), a.Z.drop(this.key), (this.animation = null), (this.dropped = !0);
    }
    scheduleOrCancelTick() {
        this.dropped || (this.hasInitialFrame ? this.requestAnimationFrame(this.animate && this.visible ? this.onAnimationTick : null) : this.requestAnimationFrame(this.onInitialAnimationTick));
    }
    requestAnimationFrame(e) {
        null != e && null == this.requestAnimationFrameId && (this.requestAnimationFrameId = requestAnimationFrame(e)), null != e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), (this.requestAnimationFrameId = requestAnimationFrame(e))), null == e && null != this.requestAnimationFrameId && (cancelAnimationFrame(this.requestAnimationFrameId), (this.requestAnimationFrameId = null));
    }
    constructor({ canvas: e, id: t, assetUrl: i, assetData: r, isVisible: h, shouldAnimate: l, onInitialDraw: u, onError: c }) {
        s(this, 'canvas', void 0),
            s(this, 'canvasContext', void 0),
            s(this, 'animation', null),
            s(this, 'dropped', void 0),
            s(this, 'currentFrame', void 0),
            s(this, 'currentFrameTime', void 0),
            s(this, 'frameDuration', void 0),
            s(this, 'key', void 0),
            s(this, 'animate', void 0),
            s(this, 'visible', void 0),
            s(this, 'requestAnimationFrameId', void 0),
            s(this, 'hasInitialFrame', void 0),
            s(this, 'onInitialDraw', void 0),
            s(this, 'onError', void 0),
            s(this, 'onInitialAnimationTick', (e) => {
                if (((this.requestAnimationFrameId = null), (performance.now() - e < 30 || o) && this.draw(0))) {
                    var t;
                    this.resumeAnimation(), null == (t = this.onInitialDraw) || t.call(this), (this.hasInitialFrame = !0);
                }
                this.scheduleOrCancelTick();
            }),
            s(this, 'onAnimationTick', (e) => {
                this.requestAnimationFrameId = null;
                let t = performance.now(),
                    i = Math.floor(((o ? t : e) - this.currentFrameTime) / this.frameDuration);
                i > 0 && ((t - e < 12 || o) && (this.draw(this.currentFrame), (this.currentFrame += i)), (this.currentFrameTime += i * this.frameDuration)), this.scheduleOrCancelTick();
            });
        let d = e.getContext('2d');
        n()(null != d, "couldn't get canvas 2d context."),
            (this.canvas = e),
            (this.canvasContext = d),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1000),
            (this.animate = l),
            (this.visible = h),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = u),
            (this.onError = c),
            (this.key = ''.concat(t, ':').concat(e.width, ':').concat(e.height)),
            a.Z.create(this.key, e.width, e.height, i, r)
                .then((e) => {
                    null != e && (this.dropped ? a.Z.drop(this.key) : ((this.animation = e), (this.frameDuration = 1000 / e.frameRate), this.scheduleOrCancelTick()));
                })
                .catch((e) => {
                    null == c || c();
                });
    }
}
