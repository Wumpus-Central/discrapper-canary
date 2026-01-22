n.d(e, {
    A: () => A,
}),
    n(896048);
var a = n(627968),
    r = n(64700),
    i = n(311907),
    l = n(397927),
    s = n(181658),
    o = n(780333),
    c = n(752319),
    u = n(985018),
    E = n(222872);

function A(t) {
    var e;
    let { error: n, setEmailToken: A, setError: _, onNext: C, onClose: d, transitionState: g } = t,
        [N, S] = r.useState(!1),
        [k, m] = r.useState(""),
        [h, x] = r.useState(!1),
        p = (0, i.bG)([c.A], () => c.A.getErrors()),
        v = r.useRef(null);
    r.useEffect(() => {
        var t;
        null == (t = v.current) || t.focus();
    }, []);
    let T = async (t) => {
            t.preventDefault(), _(null), S(!0);
            try {
                let { token: t } = await (0, o.$)(k);
                A(t), C();
            } catch (t) {
                _(new s.A(t).getAnyErrorMessage());
            } finally {
                S(!1);
            }
        },
        f = async () => {
            if (!h) {
                x(!0);
                try {
                    await (0, o.B)(!0),
                        (0, l.showToast)((0, l.createToast)(u.intl.string(u.t["84yeoz"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new s.A(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    x(!1);
                }
            }
        };
    return (0, a.jsx)(l.kpP, {
        title: u.intl.string(u.t.jMGc4J),
        subtitle: u.intl.string(u.t.SZJowy),
        graphic: {
            type: "image",
            src: E,
        },
        transitionState: g,
        onClose: d,
        actions: [
            {
                variant: "primary",
                text: u.intl.string(u.t.PDTjLN),
                loading: N,
                onClick: T,
            },
        ],
        children: (0, a.jsxs)(l.BJc, {
            gap: 8,
            children: [
                (0, a.jsx)(l.ksK, {
                    label: u.intl.string(u.t["8mZX6M"]),
                    error: null != n ? n : null == p || null == (e = p.email_token) ? void 0 : e[0],
                    value: k,
                    onChange: m,
                    inputRef: v,
                }),
                (0, a.jsx)(l.QWc, {
                    textVariant: "text-sm/normal",
                    text: u.intl.string(u.t.K0NPQ6),
                    onClick: f,
                }),
            ],
        }),
    });
}
