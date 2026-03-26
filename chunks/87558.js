"use strict";
n.d(t, { Ay: () => l, GT: () => c, Mz: () => d, fB: () => h, qH: () => u, rs: () => f }),
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
var r = n(115943),
    i = n.n(r);
let s = 22,
    a = (e) => i().decode(e),
    o = (e) => Math.round(e.frames.reduce((e, t) => e + t.delay, 0)),
    l = async (e, t, n) => ({
        src: e,
        base64: e,
        loop: !1,
        loopDelay: 0,
        duration: o(a(await t.arrayBuffer())),
        start: 0,
        position: { x: 0, y: 0 },
        zIndex: 100 + n,
        height: 880,
        width: 450,
        name: t.name,
    });
var u = (function (e) {
    return (e.THUMBNAIL = "Thumbnail"), (e.STATIC = "Static"), (e.REDUCED_MOTION = "Reduced Motion"), e;
})({});
let c = (e, t) => ({ name: t.name, src: URL.createObjectURL(t), base64: e }),
    d = (e, t) => {
        if (null == e) return;
        let n = new FileReader();
        (n.onload = (e) => {
            null == e.target || ("string" == typeof e.target.result && t?.(e.target.result));
        }),
            n.readAsDataURL(e);
    },
    _ = (e) => {
        if (null == e) return "";
        let t = e.split("/").pop() ?? e;
        return t.endsWith(".png.png") ? t.replace(/\.png\.png$/, ".png") : t;
    },
    f = (e) =>
        "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
        e
            .map((e) =>
                JSON.stringify(
                    {
                        path: _(e.name),
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
                    .map((e) => " ".repeat(s) + e)
                    .join("\n"),
            )
            .join(",\n") +
        "\n]",
    p = (e) => {
        let [t, n] = e.split(","),
            r = atob(n),
            i = t.split(";")[0],
            s = new Uint8Array(r.length);
        for (let e = 0; e < r.length; e++) s[e] = r.charCodeAt(e);
        return new Blob([s], { type: i });
    },
    h = (e) => {
        let t = p(e);
        return URL.createObjectURL(t);
    };
