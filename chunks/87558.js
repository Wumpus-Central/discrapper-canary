l.d(t, { Ay: () => n, GT: () => c, Mz: () => o, fB: () => d, qH: () => i, rs: () => u }),
    l(323874),
    l(14289),
    l(35956),
    l(508300),
    l(393431),
    l(532706),
    l(42231),
    l(232424),
    l(949626),
    l(767709),
    l(65162);
var r,
    a = l(115943),
    s = l.n(a);
let n = async (e, t, l) => {
    var r;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((r = await t.arrayBuffer()), s().decode(r)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + l,
        height: 880,
        width: 450,
        name: t.name,
    };
};
var i = (((r = {}).THUMBNAIL = "Thumbnail"), (r.STATIC = "Static"), (r.REDUCED_MOTION = "Reduced Motion"), r);
let c = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    o = (e, t) => {
        if (null == e) return;
        let l = new FileReader();
        (l.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            l.readAsDataURL(e);
    },
    u = (e) =>
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
            let [t, l] = e.split(","),
                r = atob(l),
                a = t.split(";")[0],
                s = new Uint8Array(r.length);
            for (let e = 0; e < r.length; e++) s[e] = r.charCodeAt(e);
            return new Blob([s], { type: a });
        })(e);
        return URL.createObjectURL(t);
    };
