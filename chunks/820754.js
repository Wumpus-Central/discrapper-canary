_.d(e, { o: () => n });
var a = _(622916),
    r = _(255768);
function n(t) {
    if ("boolean" == typeof t) return Number(t);
    let e = "string" == typeof t ? parseFloat(t) : t;
    if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) {
        r.X &&
            a.kg.warn(
                `[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(t)} of type ${JSON.stringify(typeof t)}.`,
            );
        return;
    }
    return e;
}
