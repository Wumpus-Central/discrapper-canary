d.d(t, { n: () => c, t: () => a });
var i = d(287822),
    e = d(898369),
    c = (0, i.a)(
        (
            {
                variant: l,
                aspectRatio: t,
                orientation: d = "horizontal",
                frameState: c = "idle",
                className: a,
                children: s,
            },
            n,
        ) => {
            let Z = `IncodeCameraFrame${c.charAt(0).toUpperCase()}${c.slice(1)}`;
            return (0, i.v)("div", {
                ref: n,
                class: (0, e.n)(
                    "IncodeCameraFrame",
                    "fill" === l && "IncodeCameraFrameFill",
                    "locked" === l && "IncodeCameraFrameLocked",
                    "locked" === l && "horizontal" === d && "IncodeCameraFrameHorizontal",
                    "locked" === l && "vertical" === d && "IncodeCameraFrameVertical",
                    Z,
                    a,
                ),
                style: t ? { aspectRatio: t } : void 0,
                "aria-hidden": !0,
                children: s,
            });
        },
    ),
    a = ({ stream: l, children: t, videoRef: d, onPlaying: c, className: a, mirrored: s, ...n }) => {
        let Z = (0, i.l)(null);
        return (
            (0, i._)(() => {
                Z.current && l && ((Z.current.srcObject = l), Z.current.play().catch(() => {}));
            }, [l]),
            (0, i.v)("div", {
                class: (0, e.n)("IncodeCameraView", a),
                ...n,
                children: [
                    (0, i.v)("div", {
                        class: "IncodeCameraViewVideo",
                        children: (0, i.v)("video", {
                            ref: (l) => {
                                (Z.current = l), "function" == typeof d ? d(l) : d && (d.current = l);
                            },
                            autoplay: !0,
                            playsInline: !0,
                            muted: !0,
                            onPlaying: c,
                            "aria-hidden": "true",
                            class: (0, e.n)("IncodeCameraViewVideoElement", s && "IncodeCameraViewVideoMirrored"),
                        }),
                    }),
                    t,
                ],
            })
        );
    };
