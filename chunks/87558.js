(r.d(t, { Ay: () => a, GT: () => f, Mz: () => u, XG: () => s, fB: () => p, qH: () => i, rs: () => c }),
    r(323874),
    r(14289),
    r(35956),
    r(508300),
    r(393431),
    r(532706),
    r(42231),
    r(232424),
    r(949626),
    r(767709),
    r(65162));
var n,
    o = r(115943),
    l = r.n(o);
async function a(e, t, r) {
    var n;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((n = await t.arrayBuffer()), l().decode(n)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + r,
        height: 880,
        width: 450,
        name: t.name,
    };
}
var i = (((n = {}).THUMBNAIL = "Thumbnail"), (n.STATIC = "Static"), (n.REDUCED_MOTION = "Reduced Motion"), n);
function f(e, t) {
    return { name: t.name, src: URL.createObjectURL(t), base64: e };
}
function u(e, t) {
    if (null == e) return;
    let r = new FileReader();
    ((r.onload = (e) => {
        null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
    }),
        r.readAsDataURL(e));
}
function s(e) {
    if (null == e) return "";
    let t = e.split("/").pop() ?? e;
    return t.endsWith(".png.png") ? t.replace(/\.png\.png$/, ".png") : t;
}
function c(e) {
    return (
        "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
        e
            .map((e) => {
                let t = s(e.name),
                    r = e.randomizedSources?.map((e) => s(e.filename ?? e.src));
                return JSON.stringify(
                    {
                        path: t,
                        loop: e.loop,
                        start: e.start,
                        duration: e.duration,
                        loop_delay: e.loopDelay,
                        z_index: e.zIndex,
                        ...(null != r && r.length > 0 ? { randomized_paths: r.includes(t) ? r : [t, ...r] } : {}),
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
function p(e) {
    let t = (function (e) {
        let [t, r] = e.split(","),
            n = atob(r),
            o = t.split(";")[0],
            l = new Uint8Array(n.length);
        for (let e = 0; e < n.length; e++) l[e] = n.charCodeAt(e);
        return new Blob([l], { type: o });
    })(e);
    return URL.createObjectURL(t);
}
