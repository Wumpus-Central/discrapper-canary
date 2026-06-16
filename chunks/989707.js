i.d(r, { ConversionFailureReason: () => p, maybeConvertToWebP: () => b }),
    i(393431),
    i(532706),
    i(42231),
    i(232424),
    i(949626),
    i(767709),
    i(65162),
    i(323874),
    i(14289),
    i(35956);
var t,
    n = i(181370),
    a = i.n(n),
    o = i(626584),
    s = i(115943),
    c = i.n(s);
let l = i(513388);
class u {
    img;
    originalBuffer;
    constructor(e, r) {
        (this.img = e), (this.originalBuffer = r);
    }
    static create(e) {
        let r = null;
        try {
            let i = c().decode(e);
            r = new u(i, e);
        } catch (e) {}
        return r;
    }
    hasTransparency() {
        if (4 !== this.img.ctype && 6 !== this.img.ctype) return !1;
        let e = new Uint8Array(c().toRGBA8(this.img)[0]);
        for (let r = 3; r < e.length; r += 4) if (e[r] < 255) return !0;
        return !1;
    }
    isAnimated() {
        return null != this.img.tabs.acTL;
    }
    isPng8() {
        return 3 === this.img.ctype && this.img.depth <= 8;
    }
    async hasSrgbIccProfile() {
        let e = await l.load(this.originalBuffer, { async: !0, expanded: !0, includeUnknown: !0 });
        if (null == e.icc) return !0;
        let r = e.icc;
        for (let e of Object.keys(r))
            if ("ICC Description" === e && r[e]?.description != null && "" !== r[e].description) {
                if (r[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
}
let { detectFile: f } = i(42640);
class d {
    static create(e) {
        let r = null,
            i = f(new Uint8Array(e, 0, Math.min(64, e.byteLength)));
        return "image/png" === i?.mimeType && (r = u.create(e)), r;
    }
}
let h = new o.A("WebP");
var p =
    (((t = {}).ALREADY_WEBP = "already_webp"),
    (t.UNSUPPORTED_FORMAT = "unsupported_format"),
    (t.ANIMATED_IMAGE = "animated_image"),
    (t.HAS_TRANSPARENCY = "has_transparency"),
    (t.PNG8_FORMAT = "png8_format"),
    (t.INSUFFICIENT_SAVINGS = "insufficient_savings"),
    (t.CONVERSION_FAILED = "conversion_failed"),
    (t.CORRUPTED_FILE = "corrupted_file"),
    (t.PIXEL_HASH_MISMATCH = "pixel_hash_mismatch"),
    (t.ICC_NON_SRGB_PROFILE = "icc_non_srgb_profile"),
    (t.ICC_DETECTION_FAILED = "icc_detection_failed"),
    (t.UNKNOWN_ERROR = "unknown_error"),
    t);
async function m(e) {
    let r, i;
    if ("image/webp" === e.type) return h.verbose("[WebP] File already WebP format"), "already_webp";
    if (!["image/png"].includes(e.type)) return h.verbose(`[WebP] Unsupported format: ${e.type}`), "unsupported_format";
    try {
        r =
            "function" == typeof e.arrayBuffer
                ? await e.arrayBuffer()
                : await new Promise((r, i) => {
                      let t = new FileReader();
                      (t.onload = () => r(t.result)),
                          (t.onerror = () => i(Error("Failed to read file as ArrayBuffer"))),
                          t.readAsArrayBuffer(e);
                  });
    } catch (e) {
        return h.warn("[WebP] Failed to read file data:", e), "conversion_failed";
    }
    try {
        if (((i = d.create(r)), null == i)) throw Error("DiscordImage.create returned null");
        if (i.hasTransparency())
            return h.verbose("[webp] png uses actual transparency - skipping conversion"), "has_transparency";
        if (i.isAnimated()) return h.verbose("[webp] png is animated (apng) - skipping conversion"), "animated_image";
        if (i.isPng8())
            return h.verbose("[webp] png is PNG8 format (indexed color) - skipping conversion"), "png8_format";
    } catch (e) {
        return h.warn("[WebP] PNG analysis failed:", e), "corrupted_file";
    }
    try {
        if (!(await i.hasSrgbIccProfile())) return "icc_non_srgb_profile";
    } catch (e) {
        return h.warn("[WebP] ICC profile detection failed:", e), "icc_detection_failed";
    }
    return null;
}
function g(e) {
    let r = new Uint8Array(e.data.buffer);
    return a()(r).toString(16);
}
async function w(e) {
    let r = document.createElement("canvas"),
        i = r.getContext("2d");
    if (null == i) throw Error("could not get canvas context");
    let t = new Image(),
        n = URL.createObjectURL(e);
    try {
        await new Promise((e, r) => {
            (t.onload = () => e()), (t.onerror = () => r(Error("failed to load image"))), (t.src = n);
        }),
            (r.width = t.width),
            (r.height = t.height),
            i.drawImage(t, 0, 0);
    } finally {
        URL.revokeObjectURL(n);
    }
    let a = await new Promise((e) => {
        r.toBlob(e, "image/webp", 1);
    });
    if (null == a) throw Error("failed to convert to webp");
    let o = performance.now(),
        s = await i.getImageData(0, 0, r.width, r.height);
    i.clearRect(0, 0, r.width, r.height);
    let c = new Image(),
        l = URL.createObjectURL(a);
    try {
        await new Promise((e, r) => {
            (c.onload = () => e()), (c.onerror = () => r(Error("failed to load image"))), (c.src = l);
        }),
            i.drawImage(c, 0, 0);
    } finally {
        URL.revokeObjectURL(l);
    }
    let u = await i.getImageData(0, 0, r.width, r.height),
        f = g(s),
        d = g(u),
        p = f === d,
        m = performance.now() - o;
    return (h.verbose(
        `[WebP] Pixel hash results: fileName=${e.name} fileLength={${e.size}} width=${c.width} height=${c.height} pixelHash=${f} mezzanineFileLength={${a.size}} mezzaninePixelHash=${d} match=${p} elapsed_ms=${Math.round(m)}`,
    ),
    p)
        ? { success: !0, webpBlob: a, pixelHashTimeMs: m }
        : { success: !1, reason: "pixel_hash_mismatch", pixelHashTimeMs: m };
}
async function b(e) {
    let r;
    if (null == e) throw Error("file is null or undefined");
    h.verbose(`[WebP] Starting conversion for: ${e.name}`);
    let i = performance.now(),
        t = function (r) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.size;
            return {
                success: !1,
                originalFile: e,
                sizeBefore: e.size,
                sizeAfter: t,
                compressionRatio: e.size > 0 ? t / e.size : 1,
                reason: r,
                compressTimeMs: Math.round(performance.now() - i),
            };
        };
    try {
        let n = await m(e);
        if (null != n) return h.verbose(`[WebP] Conversion rejected: ${n}`), t(n);
        let a = await w(e);
        if (!a.success || null == a.webpBlob) return t(a.reason ?? "unknown_error");
        let o = a.webpBlob,
            s = e.size > 0 ? o.size / e.size : 1,
            c = 1 - s;
        if (c < 0)
            return (
                h.verbose(`[WebP] Insufficient savings: ${Math.round(100 * c)}% < 0% (${e.size} -> ${o.size} bytes)`),
                t("insufficient_savings", o.size)
            );
        return (
            (r = performance.now() - i),
            h.verbose(`[WebP] Conversion successful: ${e.name} to WebP in ${Math.round(r)}ms`),
            {
                success: !0,
                originalFile: e,
                convertedBlob: o,
                sizeBefore: e.size,
                sizeAfter: o.size,
                compressionRatio: s,
                hashTimeMs: a.pixelHashTimeMs,
                compressTimeMs: Math.round(r),
            }
        );
    } catch (r) {
        return h.error(`[WebP] Conversion failed for ${e.name}:`, r), t("conversion_failed");
    }
}
