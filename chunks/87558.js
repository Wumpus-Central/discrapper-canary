n.d(t, { Ay: () => a, GT: () => o, Mz: () => s, fB: () => c, qH: () => u, rs: () => d }),
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
var r,
    l = n(115943),
    i = n.n(l);
let a = async (e, t, n) => {
    var r;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((r = await t.arrayBuffer()), i().decode(r)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + n,
        height: 880,
        width: 450,
        name: t.name,
    };
};
var u = (((r = {}).THUMBNAIL = "Thumbnail"), (r.STATIC = "Static"), (r.REDUCED_MOTION = "Reduced Motion"), r);
let o = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    s = (e, t) => {
        if (null == e) return;
        let n = new FileReader();
        (n.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            n.readAsDataURL(e);
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
    c = (e) => {
        let t = ((e) => {
            let [t, n] = e.split(","),
                r = atob(n),
                l = t.split(";")[0],
                i = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) i[e] = r.charCodeAt(e);
            return new Blob([i], { type: l });
        })(e);
        return URL.createObjectURL(t);
    };
