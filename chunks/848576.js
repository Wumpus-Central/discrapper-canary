n.d(t, { f: () => A });
var r = n(274078),
    i = n(568538),
    a = n(106260),
    o = n(688560),
    _ = n(509440),
    s = n(481386),
    c = n(533353),
    E = n(545146),
    l = n(431660),
    u = n(98076),
    d = n(309063),
    p = n(463725),
    f = n(1693),
    I = n(840247),
    T = n(549040),
    R = n(889929);
let A = (0, o._I)((e = {}) => {
    let t = {
        console: !0,
        dom: !0,
        fetch: !0,
        history: !0,
        sentry: !0,
        xhr: !0,
        ...e,
    };
    return {
        name: "Breadcrumbs",
        setup(e) {
            var n, o, A, N, h, O, S;
            t.console &&
                (0, c.e)(
                    ((n = e),
                    function (e) {
                        if ((0, _.s3)() !== n) return;
                        let t = {
                            category: "console",
                            data: {
                                arguments: e.args,
                                logger: "console",
                            },
                            level: (0, p.V)(e.level),
                            message: (0, f.nK)(e.args, " "),
                        };
                        if ("assert" === e.level)
                            if (!1 !== e.args[0]) return;
                            else
                                (t.message = `Assertion failed: ${((0, f.nK))(e.args.slice(1), " ") || "console.assert"}`),
                                    (t.data.arguments = e.args.slice(1));
                        (0, s.n)(t, {
                            input: e.args,
                            level: e.level,
                        });
                    }),
                ),
                t.dom &&
                    (0, r.O)(
                        ((o = e),
                        (A = t.dom),
                        function (e) {
                            let t, n;
                            if ((0, _.s3)() !== o) return;
                            let r = "object" == typeof A ? A.serializeAttribute : void 0,
                                i =
                                    "object" == typeof A && "number" == typeof A.maxStringLength
                                        ? A.maxStringLength
                                        : void 0;
                            i &&
                                i > 1024 &&
                                (T.X &&
                                    u.kg.warn(
                                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${i} was configured. Sentry will use 1024 instead.`,
                                    ),
                                (i = 1024)),
                                "string" == typeof r && (r = [r]);
                            try {
                                var a;
                                let o = e.event,
                                    _ = (a = o) && a.target ? o.target : o;
                                (t = (0, d.Rt)(_, {
                                    keyAttrs: r,
                                    maxStringLength: i,
                                })),
                                    (n = (0, d.iY)(_));
                            } catch (e) {
                                t = "<unknown>";
                            }
                            if (0 === t.length) return;
                            let c = {
                                category: `ui.${e.name}`,
                                message: t,
                            };
                            n && (c.data = { "ui.component_name": n }),
                                (0, s.n)(c, {
                                    event: e.event,
                                    name: e.name,
                                    global: e.global,
                                });
                        }),
                    ),
                t.xhr &&
                    (0, i.UK)(
                        ((N = e),
                        function (e) {
                            if ((0, _.s3)() !== N) return;
                            let { startTimestamp: t, endTimestamp: n } = e,
                                r = e.xhr[i.xU];
                            if (!t || !n || !r) return;
                            let { method: a, url: o, status_code: c, body: E } = r,
                                l = {
                                    xhr: e.xhr,
                                    input: E,
                                    startTimestamp: t,
                                    endTimestamp: n,
                                };
                            (0, s.n)(
                                {
                                    category: "xhr",
                                    data: {
                                        method: a,
                                        url: o,
                                        status_code: c,
                                    },
                                    type: "http",
                                },
                                l,
                            );
                        }),
                    ),
                t.fetch &&
                    (0, E.Uf)(
                        ((h = e),
                        function (e) {
                            if ((0, _.s3)() !== h) return;
                            let { startTimestamp: t, endTimestamp: n } = e;
                            if (n && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                                if (e.error) {
                                    let r = e.fetchData,
                                        i = {
                                            data: e.error,
                                            input: e.args,
                                            startTimestamp: t,
                                            endTimestamp: n,
                                        };
                                    (0, s.n)(
                                        {
                                            category: "fetch",
                                            data: r,
                                            level: "error",
                                            type: "http",
                                        },
                                        i,
                                    );
                                } else {
                                    let r = e.response,
                                        i = {
                                            ...e.fetchData,
                                            status_code: r && r.status,
                                        },
                                        a = {
                                            input: e.args,
                                            response: r,
                                            startTimestamp: t,
                                            endTimestamp: n,
                                        };
                                    (0, s.n)(
                                        {
                                            category: "fetch",
                                            data: i,
                                            type: "http",
                                        },
                                        a,
                                    );
                                }
                        }),
                    ),
                t.history &&
                    (0, a.a)(
                        ((O = e),
                        function (e) {
                            if ((0, _.s3)() !== O) return;
                            let t = e.from,
                                n = e.to,
                                r = (0, I.en)(R.m9.location.href),
                                i = t ? (0, I.en)(t) : void 0,
                                a = (0, I.en)(n);
                            (i && i.path) || (i = r),
                                r.protocol === a.protocol && r.host === a.host && (n = a.relative),
                                r.protocol === i.protocol && r.host === i.host && (t = i.relative),
                                (0, s.n)({
                                    category: "navigation",
                                    data: {
                                        from: t,
                                        to: n,
                                    },
                                });
                        }),
                    ),
                t.sentry &&
                    e.on(
                        "beforeSendEvent",
                        ((S = e),
                        function (e) {
                            (0, _.s3)() === S &&
                                (0, s.n)(
                                    {
                                        category: `sentry.${"transaction" === e.type ? "transaction" : "event"}`,
                                        event_id: e.event_id,
                                        level: e.level,
                                        message: (0, l.jH)(e),
                                    },
                                    { event: e },
                                );
                        }),
                    );
        },
    };
});
