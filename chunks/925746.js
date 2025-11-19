_.d(e, { L: () => E });
var a = _(617726),
    r = _(688838),
    n = _(151122),
    o = _(166394);
let E = (0, n._I)((t) => ({
        name: "ThirdPartyErrorsFilter",
        setup(t) {
            t.on("beforeEnvelope", (t) => {
                (0, a.gv)(t, (t, e) => {
                    if ("event" === e) {
                        let e = Array.isArray(t) ? t[1] : void 0;
                        e && ((0, o.CC)(e), (t[1] = e));
                    }
                });
            }),
                t.on("applyFrameMetadata", (e) => {
                    if (e.type) return;
                    let _ = t.getOptions().stackParser;
                    (0, o.GY)(_, e);
                });
        },
        processEvent(e) {
            let _ = (function (t) {
                let e = (0, r.Fr)(t);
                if (e)
                    return e
                        .filter((t) => !!t.filename)
                        .map((t) =>
                            t.module_metadata
                                ? Object.keys(t.module_metadata)
                                      .filter((t) => t.startsWith(i))
                                      .map((t) => t.slice(i.length))
                                : [],
                        );
            })(e);
            if (
                _ &&
                _[
                    "drop-error-if-contains-third-party-frames" === t.behaviour ||
                    "apply-tag-if-contains-third-party-frames" === t.behaviour
                        ? "some"
                        : "every"
                ]((e) => !e.some((e) => t.filterKeys.includes(e)))
            ) {
                if (
                    "drop-error-if-contains-third-party-frames" === t.behaviour ||
                    "drop-error-if-exclusively-contains-third-party-frames" === t.behaviour
                )
                    return null;
                e.tags = {
                    ...e.tags,
                    third_party_code: !0,
                };
            }
            return e;
        },
    })),
    i = "_sentryBundlerPluginAppKey:";
