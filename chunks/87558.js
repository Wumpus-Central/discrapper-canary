a.d(t, { Ay: () => i, GT: () => o, Mz: () => c, fB: () => u, qH: () => s, rs: () => d }),
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
var r,
    n = a(115943),
    l = a.n(n);
let i = async (e, t, a) => {
    var r;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((r = await t.arrayBuffer()), l().decode(r)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + a,
        height: 880,
        width: 450,
        name: t.name,
    };
};
var s = (((r = {}).THUMBNAIL = "Thumbnail"), (r.STATIC = "Static"), (r.REDUCED_MOTION = "Reduced Motion"), r);
let o = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    c = (e, t) => {
        if (null == e) return;
        let a = new FileReader();
        (a.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            a.readAsDataURL(e);
    },
    d = (e) =>
        "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
        e
            .map((e) =>
                JSON.stringify(
                    {
                        path: ((e) => {
                            if (null == e) return "";
                            let t = e.split("/").pop() ?? e;
                            return t.endsWith(".png.png") ? t.replace(/\.png\.png$/, ".png") : t;
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
    u = (e) => {
        let t = ((e) => {
            let [t, a] = e.split(","),
                r = atob(a),
                n = t.split(";")[0],
                l = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) l[e] = r.charCodeAt(e);
            return new Blob([l], { type: n });
        })(e);
        return URL.createObjectURL(t);
    };
