n.d(t, { L: () => _ });
var r = n(690889),
    i = n(521257),
    a = n(688560),
    o = n(824643);
let _ = (0, a._I)((e) => ({
        name: "ThirdPartyErrorsFilter",
        setup(e) {
            e.on("beforeEnvelope", (e) => {
                (0, r.gv)(e, (e, t) => {
                    if ("event" === t) {
                        let t = Array.isArray(e) ? e[1] : void 0;
                        t && ((0, o.CC)(t), (e[1] = t));
                    }
                });
            }),
                e.on("applyFrameMetadata", (t) => {
                    if (t.type) return;
                    let n = e.getOptions().stackParser;
                    (0, o.GY)(n, t);
                });
        },
        processEvent(t) {
            let n = (function (e) {
                let t = (0, i.Fr)(e);
                if (t)
                    return t
                        .filter((e) => !!e.filename)
                        .map((e) =>
                            e.module_metadata
                                ? Object.keys(e.module_metadata)
                                      .filter((e) => e.startsWith(s))
                                      .map((e) => e.slice(s.length))
                                : [],
                        );
            })(t);
            if (
                n &&
                n[
                    "drop-error-if-contains-third-party-frames" === e.behaviour ||
                    "apply-tag-if-contains-third-party-frames" === e.behaviour
                        ? "some"
                        : "every"
                ]((t) => !t.some((t) => e.filterKeys.includes(t)))
            ) {
                if (
                    "drop-error-if-contains-third-party-frames" === e.behaviour ||
                    "drop-error-if-exclusively-contains-third-party-frames" === e.behaviour
                )
                    return null;
                t.tags = {
                    ...t.tags,
                    third_party_code: !0,
                };
            }
            return t;
        },
    })),
    s = "_sentryBundlerPluginAppKey:";
