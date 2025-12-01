r.d(t, { L: () => _ });
var n = r(617726),
    a = r(688838),
    i = r(151122),
    o = r(166394);
let _ = (0, i._I)((e) => ({
        name: "ThirdPartyErrorsFilter",
        setup(e) {
            e.on("beforeEnvelope", (e) => {
                (0, n.gv)(e, (e, t) => {
                    if ("event" === t) {
                        let t = Array.isArray(e) ? e[1] : void 0;
                        t && ((0, o.CC)(t), (e[1] = t));
                    }
                });
            }),
                e.on("applyFrameMetadata", (t) => {
                    if (t.type) return;
                    let r = e.getOptions().stackParser;
                    (0, o.GY)(r, t);
                });
        },
        processEvent(t) {
            let r = (function (e) {
                let t = (0, a.Fr)(e);
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
                r &&
                r[
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
