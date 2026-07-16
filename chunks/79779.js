n.d(e, { default: () => f });
var i = n(627968),
    a = n(64700),
    s = n(562708),
    r = n(772707),
    l = n(123292),
    o = n(691540),
    u = n(857250),
    c = n(97483),
    p = n(331322),
    y = n(292666),
    g = n(181658),
    d = n(375708),
    h = n(661965);
function f(t) {
    let {
            transitionState: e,
            onFormSubmit: n,
            onResend: f,
            onSuccess: k,
            onClose: C,
            headerText: m,
            confirmButtonText: x,
            confirmButtonVariant: S = "primary",
            impression: b,
        } = t,
        [w, A] = a.useState(!1),
        [E, j] = a.useState(""),
        [v, M] = a.useState(!1),
        [P, R] = a.useState(null),
        T = a.useRef(null);
    async function D(t) {
        t.preventDefault(), R(null), A(!0);
        try {
            let t = await n(E);
            null != k && k(t), C();
        } catch (t) {
            R(new g.A(t).getAnyErrorMessage());
        } finally {
            A(!1);
        }
    }
    async function I() {
        if (!v) {
            M(!0);
            try {
                await f(), (0, o.P0)((0, u.o)(d.intl.string(d.t["84yeoz"]), c.Ck.SUCCESS));
            } catch (e) {
                let t = new g.A(e).getAnyErrorMessage();
                null != t && (0, o.P0)((0, u.o)(t, c.Ck.FAILURE));
            } finally {
                M(!1);
            }
        }
    }
    let L = w || v;
    return (0, i.jsx)("form", {
        onSubmit: D,
        children: (0, i.jsx)(r.k, {
            transitionState: e,
            trackingProps: { impression: b, impressionType: s.ImpressionTypes.MODAL },
            graphic: { src: h, type: "image" },
            title: m,
            subtitle: d.intl.string(d.t.SZJowy),
            actions: [
                { text: d.intl.string(d.t["ETE/oC"]), onClick: C, variant: "secondary", disabled: L },
                { text: x, variant: S, loading: L, type: "submit" },
            ],
            onClose: C,
            children: (0, i.jsxs)(p.B, {
                gap: 8,
                children: [
                    (0, i.jsx)(y.k, {
                        label: d.intl.string(d.t["8mZX6M"]),
                        error: P,
                        value: E,
                        onChange: j,
                        inputRef: T,
                    }),
                    (0, i.jsx)(l.Q, { textVariant: "text-sm/normal", text: d.intl.string(d.t.K0NPQ6), onClick: I }),
                ],
            }),
        }),
    });
}
