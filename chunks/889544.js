let n, r, a, s, h, o, l, c, m;
i.d(e, { default: () => C });
var u = i(284009),
    d = i.n(u);
i(321073);
class f {
    key;
    canvas;
    context;
    cells;
    native;
    renderedFrames;
    frameWidth;
    frameHeight;
    frameRate;
    frameCount;
    constructor(t, e, i, n) {
        const [r, a, s] = (function (t, e, i) {
            let n = Math.ceil(Math.sqrt(i));
            return [n, n * t, n * e];
        })(i, n, t.frames);
        if (
            ((this.key = e),
            (this.canvas = (function (t, e) {
                if ("function" == typeof OffscreenCanvas) return new OffscreenCanvas(t, e);
                let i = document.createElement("canvas");
                return (i.width = t), (i.height = e), i;
            })(a, s)),
            (this.context = this.canvas.getContext("2d")),
            (this.cells = r),
            (this.native = t),
            (this.renderedFrames = new Set()),
            (this.frameWidth = i),
            (this.frameHeight = n),
            (this.frameRate = t.fps),
            (this.frameCount = t.frames),
            null == this.context)
        )
            throw Error("couldn't create 2d canvas context.");
    }
    drawInto(t, e, i, n) {
        (e %= this.frameCount), this.requireFrame(e);
        let [r, a, s, h] = p(e, this.frameWidth, this.frameHeight, this.cells);
        t.drawImage(this.canvas, r, a, s, h, 0, 0, i, n);
    }
    drop() {
        this.native?.drop(), (this.native = null);
    }
    requireFrame(t) {
        null != this.native &&
            (this.renderedFrames.has(t) || (this.paint(t), this.renderedFrames.add(t)),
            this.renderedFrames.size === this.frameCount && this.drop());
    }
    paint(t) {
        if (null != this.native) {
            let e = new ImageData(
                    this.native.get_bgra(t, this.frameWidth, this.frameHeight),
                    this.frameWidth,
                    this.frameHeight,
                ),
                [i, n, r, a] = p(t, this.frameWidth, this.frameHeight, this.cells);
            this.context?.putImageData(e, i, n, 0, 0, r, a);
        }
    }
}
function p(t, e, i, n) {
    return [Math.floor(t / n) * e, (t % n) * i, e, i];
}
i(393431), i(532706), i(42231), i(232424), i(949626), i(767709), i(65162);
let v = (0, i(795521).u)(async () => {
    let t = await Promise.all([i.e("63197"), i.e("45082")]).then(i.bind(i, 145025)),
        e = await t.default();
    (a = e.cwrap("lottie_create", "number", ["string"])),
        (s = e._lottie_destroy),
        (h = e._lottie_draw_into_bgra),
        (o = e._lottie_draw_into_rgba),
        (l = e._lottie_frame_count),
        (c = e._lottie_frame_rate),
        (m = e._memory_create),
        (n = e),
        (r = m(409600));
});
function w(t, e) {
    return new Uint8ClampedArray(n.HEAPU8.buffer, r, t * e * 4);
}
class F {
    native;
    constructor(t) {
        if (((this.native = a(t)), 0 === this.native))
            throw Error("couldn't create wasm lottie. potentially bad json.");
    }
    get fps() {
        return c(this.native);
    }
    get frames() {
        return l(this.native);
    }
    get_bgra(t, e, i) {
        return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            h(this.native, r, t, e, i),
            w(e, i)
        );
    }
    get_rgba(t, e, i) {
        return (
            d()(e <= 320, "width exceeds static allocation."),
            d()(i <= 320, "height exceeds static allocation."),
            o(this.native, r, t, e, i),
            w(e, i)
        );
    }
    drop() {
        s(this.native);
    }
}
async function g(t, e, i, n, r) {
    let a = r;
    if (null == a) {
        let t = await fetch(n);
        if (!t.ok) throw Error(`Error fetching sticker at ${n}`);
        a = await t.text();
    }
    return null == a ? null : (await v(), new f(new F(a), t, e, i));
}
let A = new (class {
        entries;
        referenceCounts;
        constructor() {
            (this.entries = []), (this.referenceCounts = new Map());
        }
        create(t, e, i, n, r) {
            let a = !(arguments.length > 5) || void 0 === arguments[5] || arguments[5];
            return this.getCached(t).then((s) => {
                if ((this.referenceCounts.set(t, (this.referenceCounts.get(t) ?? 0) + 1), s)) return s;
                let h = { key: t, promise: g(t, e, i, n, r) };
                return (
                    a &&
                        (this.entries.push(h),
                        h.promise.then((e) => (null == e && this.removeEntry(t), e)).catch((e) => this.removeEntry(t)),
                        this.entries.length > 50 && this.removeEntryAt(0)),
                    h.promise
                );
            });
        }
        drop(t) {
            this.removeEntry(t);
        }
        getCached(t) {
            let e = this.entries.findIndex((e) => e.key === t);
            if (e >= 0) {
                let t = this.entries[e];
                return (
                    this.entries.splice(e, 1),
                    this.entries.push(t),
                    t.promise.then((t) => (null == t && this.removeEntryAt(e), t))
                );
            }
            return Promise.resolve(null);
        }
        removeEntry(t) {
            let e = this.entries.findIndex((e) => e.key === t);
            if (!(e >= 0)) return null;
            this.removeEntryAt(e);
        }
        removeEntryAt(t) {
            let e = this.entries[t],
                i = this.referenceCounts.get(e.key);
            return null != i && i > 1
                ? (this.referenceCounts.set(e.key, i - 1), null)
                : (this.entries.splice(t, 1), this.referenceCounts.delete(e.key), e.promise.then((t) => t?.drop()), e);
        }
    })(),
    k = "u" > typeof WorkerGlobalScope && self instanceof WorkerGlobalScope;
class C {
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
        isVisible: r,
        shouldAnimate: a,
        onInitialDraw: s,
        onError: h,
    }) {
        const o = t.getContext("2d");
        d()(null != o, "couldn't get canvas 2d context."),
            (this.canvas = t),
            (this.canvasContext = o),
            (this.animation = null),
            (this.dropped = !1),
            (this.currentFrame = 0),
            (this.currentFrameTime = 0),
            (this.frameDuration = 1e3),
            (this.animate = a),
            (this.visible = r),
            (this.requestAnimationFrameId = null),
            (this.hasInitialFrame = !1),
            (this.onInitialDraw = s),
            (this.onError = h),
            (this.key = `${e}:${t.width}:${t.height}`),
            A.create(this.key, t.width, t.height, i, n)
                .then((t) => {
                    null != t &&
                        (this.dropped
                            ? A.drop(this.key)
                            : ((this.animation = t),
                              (this.frameDuration = 1e3 / t.frameRate),
                              this.scheduleOrCancelTick()));
                })
                .catch((t) => {
                    h?.();
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
            (performance.now() - t < 30 || k) &&
                this.draw(0) &&
                (this.resumeAnimation(), this.onInitialDraw?.(), (this.hasInitialFrame = !0)),
            this.scheduleOrCancelTick();
    };
    onAnimationTick = (t) => {
        this.requestAnimationFrameId = null;
        let e = performance.now(),
            i = Math.floor(((k ? e : t) - this.currentFrameTime) / this.frameDuration);
        i > 0 &&
            ((e - t < 12 || k) && (this.draw(this.currentFrame), (this.currentFrame += i)),
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
            A.drop(this.key),
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
