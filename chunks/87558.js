t.d(r, { Ay: () => i, GT: () => s, Mz: () => u, XG: () => c, fB: () => f, qH: () => o, rs: () => p }),
    t(323874),
    t(14289),
    t(35956),
    t(508300),
    t(393431),
    t(532706),
    t(42231),
    t(232424),
    t(949626),
    t(767709),
    t(65162);
var n,
    a = t(115943),
    l = t.n(a);
async function i(e, r, t) {
    var n;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((n = await r.arrayBuffer()), l().decode(n)).frames.reduce((e, r) => e + r.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + t,
        height: 880,
        width: 450,
        name: r.name,
    };
}
var o = (((n = {}).THUMBNAIL = "Thumbnail"), (n.STATIC = "Static"), (n.REDUCED_MOTION = "Reduced Motion"), n);
function s(e, r) {
    return { name: r.name, src: URL.createObjectURL(r), base64: e };
}
function u(e, r) {
    if (null == e) return;
    let t = new FileReader();
    (t.onload = (e) => {
        null == e.target || ("string" == typeof e.target.result && r?.(e.target.result));
    }),
        t.readAsDataURL(e);
}
function c(e) {
    if (null == e) return "";
    let r = e.split("/").pop() ?? e;
    return r.endsWith(".png.png") ? r.replace(/\.png\.png$/, ".png") : r;
}
function p(e) {
    return (
        "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
        e
            .map((e) => {
                let r = c(e.name),
                    t = e.randomizedSources?.map((e) => c(e.filename ?? e.src));
                return JSON.stringify(
                    {
                        path: r,
                        loop: e.loop,
                        start: e.start,
                        duration: e.duration,
                        loop_delay: e.loopDelay,
                        z_index: e.zIndex,
                        ...(null != t && t.length > 0 ? { randomized_paths: t.includes(r) ? t : [r, ...t] } : {}),
                    },
                    null,
                    4,
                )
                    .split("\n")
                    .map((e) => " ".repeat(22) + e)
                    .join("\n");
            })
            .join(",\n") +
        "\n]"
    );
}
function f(e) {
    let r = (function (e) {
        let [r, t] = e.split(","),
            n = atob(t),
            a = r.split(";")[0],
            l = new Uint8Array(n.length);
        for (let e = 0; e < n.length; e++) l[e] = n.charCodeAt(e);
        return new Blob([l], { type: a });
    })(e);
    return URL.createObjectURL(r);
}
