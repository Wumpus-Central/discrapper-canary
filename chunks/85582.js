(r.r(n),
    r.d(n, {
        ImageConversionFailureReason: () => c,
        convertFileToJpeg: () => v,
        maybeConvertHeicToJpeg: () => d,
        maybeConvertJxrToJpeg: () => f,
        renameToJpegExtension: () => s.DP,
    }));
var i,
    o = r(77729),
    t = r(626584),
    a = r(731068),
    s = r(452661);
let l = new t.A("ImageConversion");
var c =
    (((i = {}).NATIVE_MODULE_UNAVAILABLE = "native_module_unavailable"),
    (i.PLATFORM_UNSUPPORTED = "platform_unsupported"),
    (i.SIZE_LIMIT_EXCEEDED = "size_limit_exceeded"),
    (i.CONVERSION_FAILED = "conversion_failed"),
    (i.UNKNOWN_ERROR = "unknown_error"),
    i);
let u = {
        label: "heic",
        matches: s.E5,
        canConvert: (e) => e.canConvertHeic(),
        quality: 80,
        maxFileSizeBytes: 0x1400000,
    },
    m = { label: "jxr", matches: s.Tn, canConvert: (e) => e.canConvertJxr(), quality: 85, maxFileSizeBytes: 0x3200000 };
async function p(e, n) {
    let { label: r, matches: i, canConvert: t, quality: s, maxFileSizeBytes: c } = n;
    if (!i(e)) return null;
    let u = performance.now();
    function m() {
        return Math.round(performance.now() - u);
    }
    function p(n) {
        return { success: !1, sizeBefore: e.size, sizeAfter: e.size, reason: n, compressTimeMs: m() };
    }
    let d = o.A?.sysimg;
    if (null == d) return (l.verbose("sysimg not available (not Electron)"), p("native_module_unavailable"));
    try {
        if (!(await t(d))) return (l.verbose(`platform does not support ${r} conversion`), p("platform_unsupported"));
        if (e.size > c) return (l.verbose(`file too large: ${e.size} > ${c}`), p("size_limit_exceeded"));
        let n = await e.arrayBuffer(),
            i = JSON.stringify({ format: "jpeg", quality: s }),
            o = await d.convertBytes(n, i),
            u = new Blob([o], { type: "image/jpeg" }),
            f = m();
        l.log(`converted ${e.name}: ${e.size} -> ${u.size} bytes in ${f}ms`);
        let v = null;
        try {
            v = (await d.getBackendName?.()) ?? null;
        } catch {
            v = null;
        }
        return {
            success: !0,
            convertedBlob: u,
            sizeBefore: e.size,
            sizeAfter: u.size,
            compressTimeMs: f,
            imageCompressionQuality: s / 100,
            imageEncoderType: (function (e) {
                switch (e) {
                    case "WIC":
                        return a.ad.WIC;
                    case "ImageIO":
                        return a.ad.IMAGEIO;
                    case "stub":
                        return a.ad.SYSIMG_STUB;
                    default:
                        return a.ad.SYSIMG_UNKNOWN;
                }
            })(v),
        };
    } catch (n) {
        return (l.warn(`${r} conversion failed for ${e.name}:`, n), p("conversion_failed"));
    }
}
function d(e) {
    return p(e, u);
}
function f(e) {
    return p(e, m);
}
async function v(e, n) {
    let r = await ("heic" === n ? d(e) : f(e));
    return null == r
        ? null
        : r.success && null != r.convertedBlob
          ? (l.log(`${n} conversion worked for ${e.name}: ${r.sizeBefore} -> ${r.sizeAfter} bytes`),
            {
                convertedFile: new File([r.convertedBlob], (0, s.DP)(e.name), {
                    type: "image/jpeg",
                    lastModified: e.lastModified,
                }),
                analytics: {
                    convertedMimeType: "image/jpeg",
                    compressTimeMs: r.compressTimeMs,
                    imageCompressionQuality: r.imageCompressionQuality,
                    imageEncoderType: r.imageEncoderType,
                },
            })
          : {
                convertedFile: null,
                analytics: {
                    convertedMimeType: null,
                    conversionFailureReason: r.reason ?? "unknown_error",
                    compressTimeMs: r.compressTimeMs,
                },
            };
}
