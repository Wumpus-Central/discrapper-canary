n.d(t, { Ay: () => s, GT: () => l, Mz: () => o, fB: () => d, qH: () => _, rs: () => E }),
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
var i,
    r = n(115943),
    a = n.n(r);
let s = async (e, t, n) => {
    var i;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((i = await t.arrayBuffer()), a().decode(i)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + n,
        height: 880,
        width: 450,
        name: t.name,
    };
};
var _ = (((i = {}).THUMBNAIL = "Thumbnail"), (i.STATIC = "Static"), (i.REDUCED_MOTION = "Reduced Motion"), i);
let l = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    o = (e, t) => {
        if (null == e) return;
        let n = new FileReader();
        (n.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            n.readAsDataURL(e);
    },
    E = (e) =>
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
    d = (e) => {
        let t = ((e) => {
            let [t, n] = e.split(","),
                i = atob(n),
                r = t.split(";")[0],
                a = new Uint8Array(i.length);
            for (let e = 0; e < i.length; e++) a[e] = i.charCodeAt(e);
            return new Blob([a], { type: r });
        })(e);
        return URL.createObjectURL(t);
    };
