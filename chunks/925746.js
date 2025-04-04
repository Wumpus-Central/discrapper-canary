a.d(e, { L: () => i });
var r = a(617726),
    n = a(688838),
    _ = a(151122),
    o = a(166394);
let i = (0, _._I)((t) => ({
        name: 'ThirdPartyErrorsFilter',
        setup(t) {
            t.on('beforeEnvelope', (t) => {
                (0, r.gv)(t, (t, e) => {
                    if ('event' === e) {
                        let e = Array.isArray(t) ? t[1] : void 0;
                        e && ((0, o.CC)(e), (t[1] = e));
                    }
                });
            }),
                t.on('applyFrameMetadata', (e) => {
                    if (e.type) return;
                    let a = t.getOptions().stackParser;
                    (0, o.GY)(a, e);
                });
        },
        processEvent(e) {
            let a = (function (t) {
                let e = (0, n.Fr)(t);
                if (e)
                    return e
                        .filter((t) => !!t.filename)
                        .map((t) =>
                            t.module_metadata
                                ? Object.keys(t.module_metadata)
                                      .filter((t) => t.startsWith(c))
                                      .map((t) => t.slice(c.length))
                                : []
                        );
            })(e);
            if (a && a['drop-error-if-contains-third-party-frames' === t.behaviour || 'apply-tag-if-contains-third-party-frames' === t.behaviour ? 'some' : 'every']((e) => !e.some((e) => t.filterKeys.includes(e)))) {
                if ('drop-error-if-contains-third-party-frames' === t.behaviour || 'drop-error-if-exclusively-contains-third-party-frames' === t.behaviour) return null;
                e.tags = {
                    ...e.tags,
                    third_party_code: !0
                };
            }
            return e;
        }
    })),
    c = '_sentryBundlerPluginAppKey:';
