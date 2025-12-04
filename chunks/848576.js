r.d(t, { f: () => N });
var n = r(274078),
    a = r(568538),
    i = r(106260),
    o = r(688560),
    _ = r(509440),
    s = r(481386),
    c = r(533353),
    E = r(545146),
    l = r(431660),
    u = r(98076),
    d = r(309063),
    I = r(463725),
    p = r(1693),
    R = r(840247),
    T = r(549040),
    A = r(889929);
let N = (0, o._I)((e = {}) => {
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
            var r, o, N, f, O, h, D;
            t.console &&
                (0, c.e)(
                    ((r = e),
                    function (e) {
                        if ((0, _.s3)() !== r) return;
                        let t = {
                            category: "console",
                            data: {
                                arguments: e.args,
                                logger: "console",
                            },
                            level: (0, I.V)(e.level),
                            message: (0, p.nK)(e.args, " "),
                        };
                        if ("assert" === e.level)
                            if (!1 !== e.args[0]) return;
                            else
                                (t.message = `Assertion failed: ${((0, p.nK))(e.args.slice(1), " ") || "console.assert"}`),
                                    (t.data.arguments = e.args.slice(1));
                        (0, s.n)(t, {
                            input: e.args,
                            level: e.level,
                        });
                    }),
                ),
                t.dom &&
                    (0, n.O)(
                        ((o = e),
                        (N = t.dom),
                        function (e) {
                            let t, r;
                            if ((0, _.s3)() !== o) return;
                            let n = "object" == typeof N ? N.serializeAttribute : void 0,
                                a =
                                    "object" == typeof N && "number" == typeof N.maxStringLength
                                        ? N.maxStringLength
                                        : void 0;
                            a &&
                                a > 1024 &&
                                (T.X &&
                                    u.kg.warn(
                                        `\`dom.maxStringLength\` cannot exceed 1024, but a value of ${a} was configured. Sentry will use 1024 instead.`,
                                    ),
                                (a = 1024)),
                                "string" == typeof n && (n = [n]);
                            try {
                                var i;
                                let o = e.event,
                                    _ = (i = o) && i.target ? o.target : o;
                                (t = (0, d.Rt)(_, {
                                    keyAttrs: n,
                                    maxStringLength: a,
                                })),
                                    (r = (0, d.iY)(_));
                            } catch (e) {
                                t = "<unknown>";
                            }
                            if (0 === t.length) return;
                            let c = {
                                category: `ui.${e.name}`,
                                message: t,
                            };
                            r && (c.data = { "ui.component_name": r }),
                                (0, s.n)(c, {
                                    event: e.event,
                                    name: e.name,
                                    global: e.global,
                                });
                        }),
                    ),
                t.xhr &&
                    (0, a.UK)(
                        ((f = e),
                        function (e) {
                            if ((0, _.s3)() !== f) return;
                            let { startTimestamp: t, endTimestamp: r } = e,
                                n = e.xhr[a.xU];
                            if (!t || !r || !n) return;
                            let { method: i, url: o, status_code: c, body: E } = n,
                                l = {
                                    xhr: e.xhr,
                                    input: E,
                                    startTimestamp: t,
                                    endTimestamp: r,
                                };
                            (0, s.n)(
                                {
                                    category: "xhr",
                                    data: {
                                        method: i,
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
                        ((O = e),
                        function (e) {
                            if ((0, _.s3)() !== O) return;
                            let { startTimestamp: t, endTimestamp: r } = e;
                            if (r && (!e.fetchData.url.match(/sentry_key/) || "POST" !== e.fetchData.method))
                                if (e.error) {
                                    let n = e.fetchData,
                                        a = {
                                            data: e.error,
                                            input: e.args,
                                            startTimestamp: t,
                                            endTimestamp: r,
                                        };
                                    (0, s.n)(
                                        {
                                            category: "fetch",
                                            data: n,
                                            level: "error",
                                            type: "http",
                                        },
                                        a,
                                    );
                                } else {
                                    let n = e.response,
                                        a = {
                                            ...e.fetchData,
                                            status_code: n && n.status,
                                        },
                                        i = {
                                            input: e.args,
                                            response: n,
                                            startTimestamp: t,
                                            endTimestamp: r,
                                        };
                                    (0, s.n)(
                                        {
                                            category: "fetch",
                                            data: a,
                                            type: "http",
                                        },
                                        i,
                                    );
                                }
                        }),
                    ),
                t.history &&
                    (0, i.a)(
                        ((h = e),
                        function (e) {
                            if ((0, _.s3)() !== h) return;
                            let t = e.from,
                                r = e.to,
                                n = (0, R.en)(A.m9.location.href),
                                a = t ? (0, R.en)(t) : void 0,
                                i = (0, R.en)(r);
                            (a && a.path) || (a = n),
                                n.protocol === i.protocol && n.host === i.host && (r = i.relative),
                                n.protocol === a.protocol && n.host === a.host && (t = a.relative),
                                (0, s.n)({
                                    category: "navigation",
                                    data: {
                                        from: t,
                                        to: r,
                                    },
                                });
                        }),
                    ),
                t.sentry &&
                    e.on(
                        "beforeSendEvent",
                        ((D = e),
                        function (e) {
                            (0, _.s3)() === D &&
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
