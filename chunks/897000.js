n.d(t, { Z: () => i });
var r = n(122722);
let i = {
    "tiff:Orientation": (e) =>
        "1" === e
            ? "Horizontal (normal)"
            : "2" === e
              ? "Mirror horizontal"
              : "3" === e
                ? "Rotate 180"
                : "4" === e
                  ? "Mirror vertical"
                  : "5" === e
                    ? "Mirror horizontal and rotate 270 CW"
                    : "6" === e
                      ? "Rotate 90 CW"
                      : "7" === e
                        ? "Mirror horizontal and rotate 90 CW"
                        : "8" === e
                          ? "Rotate 270 CW"
                          : e,
    "tiff:ResolutionUnit": (e) => r.Z.ResolutionUnit(parseInt(e, 10)),
    "tiff:XResolution": (e) => o(r.Z.XResolution, e),
    "tiff:YResolution": (e) => o(r.Z.YResolution, e),
    "exif:ApertureValue": (e) => o(r.Z.ApertureValue, e),
    "exif:GPSLatitude": l,
    "exif:GPSLongitude": l,
    "exif:FNumber": (e) => o(r.Z.FNumber, e),
    "exif:FocalLength": (e) => o(r.Z.FocalLength, e),
    "exif:FocalPlaneResolutionUnit": (e) => r.Z.FocalPlaneResolutionUnit(parseInt(e, 10)),
    "exif:ColorSpace": (e) => r.Z.ColorSpace(a(e)),
    "exif:ComponentsConfiguration"(e, t) {
        if (/^\d, \d, \d, \d$/.test(t)) {
            let e = t.split(", ").map((e) => e.charCodeAt(0));
            return r.Z.ComponentsConfiguration(e);
        }
        return t;
    },
    "exif:Contrast": (e) => r.Z.Contrast(parseInt(e, 10)),
    "exif:CustomRendered": (e) => r.Z.CustomRendered(parseInt(e, 10)),
    "exif:ExposureMode": (e) => r.Z.ExposureMode(parseInt(e, 10)),
    "exif:ExposureProgram": (e) => r.Z.ExposureProgram(parseInt(e, 10)),
    "exif:ExposureTime": (e) => (s(e) ? r.Z.ExposureTime(e.split("/").map((e) => parseInt(e, 10))) : e),
    "exif:MeteringMode": (e) => r.Z.MeteringMode(parseInt(e, 10)),
    "exif:Saturation": (e) => r.Z.Saturation(parseInt(e, 10)),
    "exif:SceneCaptureType": (e) => r.Z.SceneCaptureType(parseInt(e, 10)),
    "exif:Sharpness": (e) => r.Z.Sharpness(parseInt(e, 10)),
    "exif:ShutterSpeedValue": (e) => o(r.Z.ShutterSpeedValue, e),
    "exif:WhiteBalance": (e) => r.Z.WhiteBalance(parseInt(e, 10)),
};
function o(e, t) {
    return s(t) ? e(t.split("/")) : t;
}
function a(e) {
    return "0x" === e.substring(0, 2) ? parseInt(e.substring(2), 16) : parseInt(e, 10);
}
function s(e) {
    return /^-?\d+\/-?\d+$/.test(e);
}
function l(e) {
    let [t, n] = e.split(",");
    if (void 0 !== t && void 0 !== n) {
        let e = parseFloat(t),
            r = parseFloat(n),
            i = n.charAt(n.length - 1);
        if (!Number.isNaN(e) && !Number.isNaN(r)) return "" + (e + r / 60) + i;
    }
    return e;
}
