"use strict";
r.d(t, { Ay: () => s, GT: () => o, Mz: () => c, fB: () => u, qH: () => l, rs: () => d }),
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
    r(65162);
var n,
    i = r(115943),
    a = r.n(i);
let s = async (e, t, r) => {
    var n;
    return {
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: Math.round(((n = await t.arrayBuffer()), a().decode(n)).frames.reduce((e, t) => e + t.delay, 0)),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + r,
        height: 880,
        width: 450,
        name: t.name,
    };
};
var l = (((n = {}).THUMBNAIL = "Thumbnail"), (n.STATIC = "Static"), (n.REDUCED_MOTION = "Reduced Motion"), n);
let o = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    c = (e, t) => {
        if (null == e) return;
        let r = new FileReader();
        (r.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            r.readAsDataURL(e);
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
            let [t, r] = e.split(","),
                n = atob(r),
                i = t.split(";")[0],
                a = new Uint8Array(n.length);
            for (let e = 0; e < n.length; e++) a[e] = n.charCodeAt(e);
            return new Blob([a], { type: i });
        })(e);
        return URL.createObjectURL(t);
    };
