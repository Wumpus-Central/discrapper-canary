n.d(e, { A: () => A });
var a = n(627968),
    r = n(64700),
    i = n(311907),
    s = n(397927),
    l = n(181658),
    o = n(836602),
    c = n(780333),
    E = n(985018),
    u = n(222872);
function A(t) {
    let { error: e, setEmailToken: n, setError: A, onNext: _, onClose: C, transitionState: g } = t,
        [N, S] = r.useState(!1),
        [d, k] = r.useState(""),
        [m, h] = r.useState(!1),
        x = (0, i.bG)([o.A], () => o.A.getErrors()),
        p = r.useRef(null);
    r.useEffect(() => {
        p.current?.focus();
    }, []);
    let T = async (t) => {
            t.preventDefault(), A(null), S(!0);
            try {
                let { token: t } = await (0, c.$)(d);
                n(t), _();
            } catch (t) {
                A(new l.A(t).getAnyErrorMessage());
            } finally {
                S(!1);
            }
        },
        f = async () => {
            if (!m) {
                h(!0);
                try {
                    await (0, c.B)(!0),
                        (0, s.showToast)((0, s.createToast)(E.intl.string(E.t["84yeoz"]), s.ToastType.SUCCESS));
                } catch (e) {
                    let t = new l.A(e).getAnyErrorMessage();
                    null != t && (0, s.showToast)((0, s.createToast)(t, s.ToastType.FAILURE));
                } finally {
                    h(!1);
                }
            }
        };
    return (0, a.jsx)(s.kpP, {
        title: E.intl.string(E.t.jMGc4J),
        subtitle: E.intl.string(E.t.SZJowy),
        graphic: { type: "image", src: u },
        transitionState: g,
        onClose: C,
        actions: [{ variant: "primary", text: E.intl.string(E.t.PDTjLN), loading: N, onClick: T }],
        children: (0, a.jsxs)(s.BJc, {
            gap: 8,
            children: [
                (0, a.jsx)(s.ksK, {
                    label: E.intl.string(E.t["8mZX6M"]),
                    error: e ?? x?.email_token?.[0],
                    value: d,
                    onChange: k,
                    inputRef: p,
                }),
                (0, a.jsx)(s.QWc, { textVariant: "text-sm/normal", text: E.intl.string(E.t.K0NPQ6), onClick: f }),
            ],
        }),
    });
}
