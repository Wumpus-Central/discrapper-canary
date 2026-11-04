var i = r(77729),
    s = r(626584),
    t = r(731068),
    a = r(452661);
let o = new s.A("ImageConversion"),
    l = {
        label: "heic",
        matches: a.E5,
        canConvert: (e) => e.canConvertHeic(),
        quality: 80,
        maxFileSizeBytes: 0x1400000,
    },
    c = { label: "jxr", matches: a.Tn, canConvert: (e) => e.canConvertJxr(), quality: 85, maxFileSizeBytes: 0x3200000 };
async function u(e, n) {
    let { label: r, matches: s, canConvert: a, quality: l, maxFileSizeBytes: c } = n;
    if (!s(e)) return null;
    let u = performance.now();
    function m() {
        return Math.round(performance.now() - u);
    }
    function p(n) {
        return { success: !1, sizeBefore: e.size, sizeAfter: e.size, reason: n, compressTimeMs: m() };
    }
    let d = i.A?.sysimg;
    if (null == d) return (o.verbose("sysimg not available (not Electron)"), p("native_module_unavailable"));
    try {
        if (!(await a(d))) return (o.verbose(`platform does not support ${r} conversion`), p("platform_unsupported"));
        if (e.size > c) return (o.verbose(`file too large: ${e.size} > ${c}`), p("size_limit_exceeded"));
        let n = await e.arrayBuffer(),
            i = JSON.stringify({ format: "jpeg", quality: l }),
            s = await d.convertBytes(n, i),
            u = new Blob([s], { type: "image/jpeg" }),
            f = m();
        o.log(`converted ${e.name}: ${e.size} -> ${u.size} bytes in ${f}ms`);
        let y = null;
        try {
            y = (await d.getBackendName?.()) ?? null;
        } catch {
            y = null;
        }
        return {
            success: !0,
            convertedBlob: u,
            sizeBefore: e.size,
            sizeAfter: u.size,
            compressTimeMs: f,
            imageCompressionQuality: l / 100,
            imageEncoderType: (function (e) {
                switch (e) {
                    case "WIC":
                        return t.ad.WIC;
                    case "ImageIO":
                        return t.ad.IMAGEIO;
                    case "stub":
                        return t.ad.SYSIMG_STUB;
                    default:
                        return t.ad.SYSIMG_UNKNOWN;
                }
            })(y),
        };
    } catch (n) {
        return (o.warn(`${r} conversion failed for ${e.name}:`, n), p("conversion_failed"));
    }
}
r.d(
    n,
    {},
    {
        convertFileToJpeg: async function (e, n) {
            let r = await ("heic" === n ? u(e, l) : u(e, c));
            return null == r
                ? null
                : r.success && null != r.convertedBlob
                  ? (o.log(`${n} conversion worked for ${e.name}: ${r.sizeBefore} -> ${r.sizeAfter} bytes`),
                    {
                        convertedFile: new File([r.convertedBlob], (0, a.DP)(e.name), {
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
        },
    },
);
