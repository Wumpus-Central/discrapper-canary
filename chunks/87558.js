(t(323874), t(14289), t(35956), t(508300), t(393431), t(532706), t(42231), t(232424), t(949626), t(767709), t(65162));
var l,
    o = t(115943),
    n = t.n(o),
    a = (((l = {}).THUMBNAIL = "Thumbnail"), (l.STATIC = "Static"), (l.REDUCED_MOTION = "Reduced Motion"), l);
function s(e) {
    if (null == e) return "";
    let r = e.split("/").pop() ?? e;
    return r.endsWith(".png.png") ? r.replace(/\.png\.png$/, ".png") : r;
}
t.d(
    r,
    {},
    {
        Ay: async function (e, r, t) {
            var l;
            return {
                src: e,
                base64: e,
                loop: !1,
                loopDelay: 0,
                duration: Math.round(
                    ((l = await r.arrayBuffer()), n().decode(l)).frames.reduce((e, r) => e + r.delay, 0),
                ),
                start: 0,
                position: { x: 0, y: 0 },
                zIndex: 100 + t,
                height: 880,
                width: 450,
                name: r.name,
            };
        },
        GT: function (e, r) {
            return { name: r.name, src: URL.createObjectURL(r), base64: e };
        },
        Mz: function (e, r) {
            if (null == e) return;
            let t = new FileReader();
            ((t.onload = (e) => {
                null == e.target || ("string" == typeof e.target.result && r?.(e.target.result));
            }),
                t.readAsDataURL(e));
        },
        XG: s,
        fB: function (e) {
            let r = (function (e) {
                let [r, t] = e.split(","),
                    l = atob(t),
                    o = r.split(";")[0],
                    n = new Uint8Array(l.length);
                for (let e = 0; e < l.length; e++) n[e] = l.charCodeAt(e);
                return new Blob([n], { type: o });
            })(e);
            return URL.createObjectURL(r);
        },
        qH: a,
        rs: function (e) {
            return (
                "PASTE THIS INTO THE DROP JSON:\n\n[\n" +
                e
                    .map((e) => {
                        let r = s(e.name),
                            t = e.randomizedSources?.map((e) => s(e.filename ?? e.src));
                        return JSON.stringify(
                            {
                                path: r,
                                loop: e.loop,
                                start: e.start,
                                duration: e.duration,
                                loop_delay: e.loopDelay,
                                z_index: e.zIndex,
                                ...(null != t && t.length > 0
                                    ? { randomized_paths: t.includes(r) ? t : [r, ...t] }
                                    : {}),
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
        },
    },
);
