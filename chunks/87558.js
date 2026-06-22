a.d(r, { Ay: () => i, GT: () => s, Mz: () => u, fB: () => p, qH: () => o, rs: () => c }),
    a(323874),
    a(14289),
    a(35956),
    a(508300),
    a(393431),
    a(532706),
    a(42231),
    a(232424),
    a(949626),
    a(767709),
    a(65162);
var n,
    t = a(115943),
    l = a.n(t);
let i = async (e, r, a) => {
    var n;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((n = await r.arrayBuffer()), l().decode(n)).frames.reduce((e, r) => e + r.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + a,
        height: 880,
        width: 450,
        name: r.name,
    };
};
var o = (((n = {}).THUMBNAIL = "Thumbnail"), (n.STATIC = "Static"), (n.REDUCED_MOTION = "Reduced Motion"), n);
let s = (e, r) => ({ name: r.name, src: URL.createObjectURL(r), base64: e }),
    u = (e, r) => {
        if (null == e) return;
        let a = new FileReader();
        (a.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && r?.(e.target.result));
        }),
            a.readAsDataURL(e);
    },
    c = (e) =>
        "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
        e
            .map((e) =>
                JSON.stringify(
                    {
                        path: ((e) => {
                            if (null == e) return "";
                            let r = e.split("/").pop() ?? e;
                            return r.endsWith(".png.png") ? r.replace(/\.png\.png$/, ".png") : r;
                        })(e.name),
                        loop: e.loop,
                        start: e.start,
                        duration: e.duration,
                        loop_delay: e.loopDelay,
                        z_index: e.zIndex,
                        ...(null != e.randomizedSources
                            ? { randomized_paths: e.randomizedSources.map((e) => e.src) }
                            : {}),
                    },
                    null,
                    4,
                )
                    .split("\n")
                    .map((e) => " ".repeat(22) + e)
                    .join("\n"),
            )
            .join(",\n") +
        "\n]",
    p = (e) => {
        let r = ((e) => {
            let [r, a] = e.split(","),
                n = atob(a),
                t = r.split(";")[0],
                l = new Uint8Array(n.length);
            for (let e = 0; e < n.length; e++) l[e] = n.charCodeAt(e);
            return new Blob([l], { type: t });
        })(e);
        return URL.createObjectURL(r);
    };
