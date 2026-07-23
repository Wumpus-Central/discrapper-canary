r.d(e, { default: () => I });
var l = r(627968),
    s = r(64700),
    a = r(772707),
    i = r(441574),
    n = r(428103),
    c = r(26137),
    d = r(473935),
    o = r(331322),
    u = r(834730),
    h = r(939249),
    m = r(320448),
    p = r(975571),
    x = r(31720),
    v = r(36149),
    E = r(562465),
    g = r(652215);
async function f() {
    return (await E.Bo.get({ url: g.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((t) => ({
        method: t.method,
        vendor: t.vendor,
        title: t.title,
        description: t.description,
        providedBy: t.provided_by ?? null,
    }));
}
var A = r(516761),
    j = r(375708),
    _ = r(658103);
let b = { [i.mG.GOOGLE_WALLET]: n.l, [i.mG.FACIAL_AGE_ESTIMATION]: c.r, [i.mG.ID_SELFIE_MATCH]: d.L },
    I = function (t) {
        let { transitionState: e, entryPoint: r, onClose: i, dismissable: n } = t,
            { loading: c, methods: d } = (function () {
                let [t, e] = s.useState([]),
                    [r, l] = s.useState(!0),
                    [a, i] = s.useState(!1),
                    n = s.useRef(!0),
                    c = s.useCallback(async () => {
                        l(!0), i(!1);
                        try {
                            let t = await f();
                            n.current && e(t);
                        } catch {
                            n.current && i(!0);
                        } finally {
                            n.current && l(!1);
                        }
                    }, []);
                return (
                    s.useEffect(
                        () => (
                            (n.current = !0),
                            c(),
                            () => {
                                n.current = !1;
                            }
                        ),
                        [c],
                    ),
                    { loading: r, error: a, methods: t, refetch: c }
                );
            })(),
            E = d.length > 0,
            [I, T] = s.useState(null);
        return (0, l.jsxs)(a.k, {
            transitionState: e,
            onClose: i,
            gradientColor: "blue",
            dismissable: n,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, v.ST)(r),
            subtitle: (0, v.mK)(r, () => {
                x.A.openUrl(p.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                null != I &&
                    (0, l.jsx)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "start",
                        children: (0, l.jsx)(u.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: j.intl.string(A.default.b7VAIk),
                        }),
                    }),
                null == I &&
                    !c &&
                    !E &&
                    (0, l.jsx)(u.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: j.intl.string(A.default.cR6336),
                    }),
                null == I &&
                    E &&
                    (0, l.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: d.map((t) => {
                            let e = b[t.method];
                            return (0, l.jsxs)(
                                h.D,
                                {
                                    className: _.kZ,
                                    onClick: () => T(t),
                                    children: [
                                        null != e &&
                                            (0, l.jsx)("div", {
                                                className: _.zc,
                                                children: (0, l.jsx)(e, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, l.jsxs)("div", {
                                            className: _.Qq,
                                            children: [
                                                (0, l.jsx)(u.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: t.title,
                                                }),
                                                (0, l.jsx)(u.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.description,
                                                }),
                                                null != t.providedBy &&
                                                    (0, l.jsx)("div", {
                                                        className: _.Vp,
                                                        children: (0, l.jsx)(u.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: t.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, l.jsx)(m._, { className: _.ai }),
                                    ],
                                },
                                `${t.method}-${t.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
