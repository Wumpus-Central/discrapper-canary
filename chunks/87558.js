n.d(r, { Ay: () => i, GT: () => s, Mz: () => u, fB: () => p, qH: () => o, rs: () => c }),
    n(323874),
    n(14289),
    n(35956),
    n(508300),
    n(393431),
    n(532706),
    n(42231),
    n(232424),
    n(949626),
    n(767709),
    n(65162);
var a,
    t = n(115943),
    l = n.n(t);
async function i(e, r, n) {
    var a;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((a = await r.arrayBuffer()), l().decode(a)).frames.reduce((e, r) => e + r.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + n,
        height: 880,
        width: 450,
        name: r.name,
    };
}
var o = (((a = {}).THUMBNAIL = "Thumbnail"), (a.STATIC = "Static"), (a.REDUCED_MOTION = "Reduced Motion"), a);
function s(e, r) {
    return { name: r.name, src: URL.createObjectURL(r), base64: e };
}
function u(e, r) {
    if (null == e) return;
    let n = new FileReader();
    (n.onload = (e) => {
        null == e.target || ("string" == typeof e.target.result && r?.(e.target.result));
    }),
        n.readAsDataURL(e);
}
let c = (e) =>
    "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
    e
        .map((e) =>
            JSON.stringify(
                {
                    path: (function (e) {
                        if (null == e) return "";
                        let r = e.split("/").pop() ?? e;
                        return r.endsWith(".png.png") ? r.replace(/\.png\.png$/, ".png") : r;
                    })(e.name),
                    loop: e.loop,
                    start: e.start,
                    duration: e.duration,
                    loop_delay: e.loopDelay,
                    z_index: e.zIndex,
                    ...(null != e.randomizedSources ? { randomized_paths: e.randomizedSources.map((e) => e.src) } : {}),
                },
                null,
                4,
            )
                .split("\n")
                .map((e) => " ".repeat(22) + e)
                .join("\n"),
        )
        .join(",\n") +
    "\n]";
function p(e) {
    let r = (function (e) {
        let [r, n] = e.split(","),
            a = atob(n),
            t = r.split(";")[0],
            l = new Uint8Array(a.length);
        for (let e = 0; e < a.length; e++) l[e] = a.charCodeAt(e);
        return new Blob([l], { type: t });
    })(e);
    return URL.createObjectURL(r);
}
