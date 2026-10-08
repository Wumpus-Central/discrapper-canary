n.d(e, { default: () => d });
var i = n(477900),
    a = n(582128),
    s = n(562708),
    r = n(376357),
    l = n(772707),
    o = n(331322),
    u = n(95477),
    c = n(123292),
    p = n(181658),
    y = n(660183),
    g = n(661965);
function d(t) {
    let {
            transitionState: e,
            onFormSubmit: n,
            onResend: d,
            onSuccess: h,
            onClose: x,
            headerText: f,
            confirmButtonText: k,
            confirmButtonVariant: C = "primary",
            impression: m,
        } = t,
        [S, b] = a.useState(!1),
        [w, A] = a.useState(""),
        [E, j] = a.useState(!1),
        [v, M] = a.useState(null),
        P = a.useRef(null);
    async function R(t) {
        (t.preventDefault(), M(null), b(!0));
        try {
            let t = await n(w);
            (null != h && h(t), x());
        } catch (t) {
            M(new p.A(t).getAnyErrorMessage());
        } finally {
            b(!1);
        }
    }
    async function T() {
        if (!E) {
            j(!0);
            try {
                (await d(), (0, r.P0)((0, r.ox)(y.intl.string(y.t["84yeoz"]), r.Ck.SUCCESS)));
            } catch (e) {
                let t = new p.A(e).getAnyErrorMessage();
                null != t && (0, r.P0)((0, r.ox)(t, r.Ck.FAILURE));
            } finally {
                j(!1);
            }
        }
    }
    let D = S || E;
    return (0, i.jsx)("form", {
        onSubmit: R,
        children: (0, i.jsx)(l.k, {
            transitionState: e,
            trackingProps: { impression: m, impressionType: s.ImpressionTypes.MODAL },
            graphic: { src: g, type: "image" },
            title: f,
            subtitle: y.intl.string(y.t.SZJowy),
            actions: [
                { text: y.intl.string(y.t["ETE/oC"]), onClick: x, variant: "secondary", disabled: D },
                { text: k, variant: C, loading: D, type: "submit" },
            ],
            onClose: x,
            children: (0, i.jsxs)(o.B, {
                gap: 8,
                children: [
                    (0, i.jsx)(u.k, {
                        label: y.intl.string(y.t["8mZX6M"]),
                        error: v,
                        value: w,
                        onChange: A,
                        inputRef: P,
                    }),
                    (0, i.jsx)(c.Q, { textVariant: "text-sm/normal", text: y.intl.string(y.t.K0NPQ6), onClick: T }),
                ],
            }),
        }),
    });
}
