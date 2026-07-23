l.d(e, { default: () => I });
var r = l(627968),
    i = l(64700),
    s = l(772707),
    a = l(441574),
    n = l(428103),
    d = l(26137),
    c = l(473935),
    o = l(331322),
    h = l(834730),
    u = l(939249),
    m = l(320448),
    p = l(975571),
    x = l(31720),
    v = l(36149),
    E = l(562465),
    g = l(652215);
async function A() {
    return (await E.Bo.get({ url: g.Rsh.AGE_VERIFICATION_METHODS_V2, rejectWithError: !0 })).body.methods.map((t) => ({
        method: t.method,
        vendor: t.vendor,
        title: t.title,
        description: t.description,
        providedBy: t.provided_by ?? null,
    }));
}
var f = l(516761),
    j = l(375708),
    _ = l(658103);
let b = { [a.mG.GOOGLE_WALLET]: n.l, [a.mG.FACIAL_AGE_ESTIMATION]: d.r, [a.mG.ID_SELFIE_MATCH]: c.L },
    I = function (t) {
        let { transitionState: e, entryPoint: l, onClose: a, dismissable: n } = t,
            { loading: d, methods: c } = (function () {
                let [t, e] = i.useState([]),
                    [l, r] = i.useState(!0);
                return (
                    i.useEffect(() => {
                        let t = !1;
                        return (
                            (async function () {
                                let l = [];
                                try {
                                    l = await A();
                                } catch {}
                                t || (e(l), r(!1));
                            })(),
                            () => {
                                t = !0;
                            }
                        );
                    }, []),
                    { loading: l, methods: t }
                );
            })(),
            E = c.length > 0,
            [I, T] = i.useState(null);
        return (0, r.jsxs)(s.k, {
            transitionState: e,
            onClose: a,
            gradientColor: "blue",
            dismissable: n,
            graphic: {
                type: "image",
                src: "https://cdn.discordapp.com/assets/content/f76008165147c5af20b933379e590f857bab9a8c0d80e1222e16dcd34b4b75c2.svg",
                aspectRatio: "21/9",
            },
            title: (0, v.ST)(l),
            subtitle: (0, v.mK)(l, () => {
                x.A.openUrl(p.A.getArticleURL(g.MVz.TIGGER_PAWTECT_LEARN_MORE));
            }),
            children: [
                null != I &&
                    (0, r.jsx)(o.B, {
                        direction: "vertical",
                        gap: 16,
                        align: "start",
                        children: (0, r.jsx)(h.E, {
                            variant: "text-md/normal",
                            color: "text-default",
                            children: j.intl.string(f.default.b7VAIk),
                        }),
                    }),
                null == I &&
                    !d &&
                    !E &&
                    (0, r.jsx)(h.E, {
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: j.intl.string(f.default.cR6336),
                    }),
                null == I &&
                    E &&
                    (0, r.jsx)(o.B, {
                        direction: "vertical",
                        gap: 8,
                        children: c.map((t) => {
                            let e = b[t.method];
                            return (0, r.jsxs)(
                                u.D,
                                {
                                    className: _.kZ,
                                    onClick: () => T(t),
                                    children: [
                                        null != e &&
                                            (0, r.jsx)("div", {
                                                className: _.zc,
                                                children: (0, r.jsx)(e, { size: "md", color: "var(--text-strong)" }),
                                            }),
                                        (0, r.jsxs)("div", {
                                            className: _.Qq,
                                            children: [
                                                (0, r.jsx)(h.E, {
                                                    variant: "text-md/normal",
                                                    color: "text-strong",
                                                    children: t.title,
                                                }),
                                                (0, r.jsx)(h.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: t.description,
                                                }),
                                                null != t.providedBy &&
                                                    (0, r.jsx)("div", {
                                                        className: _.Vp,
                                                        children: (0, r.jsx)(h.E, {
                                                            variant: "text-sm/normal",
                                                            color: "text-subtle",
                                                            children: t.providedBy,
                                                        }),
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsx)(m._, { className: _.ai }),
                                    ],
                                },
                                `${t.method}-${t.vendor}`,
                            );
                        }),
                    }),
            ],
        });
    };
