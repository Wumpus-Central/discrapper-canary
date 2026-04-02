s.d(e, { default: () => p });
var a = s(627968),
    n = s(64700),
    i = s(110259),
    r = s(158954),
    l = s(397927),
    o = s(181658),
    c = s(985018),
    u = s(37229);
function p(t) {
    let {
            transitionState: e,
            onFormSubmit: s,
            onResend: p,
            onSuccess: y,
            onClose: g,
            headerText: d,
            confirmButtonText: h,
            confirmButtonVariant: x = "primary",
            impression: T,
        } = t,
        [m, S] = n.useState(!1),
        [f, w] = n.useState(""),
        [C, k] = n.useState(!1),
        [b, E] = n.useState(null),
        v = n.useRef(null),
        A = async (t) => {
            t.preventDefault(), E(null), S(!0);
            try {
                let t = await s(f);
                null != y && y(t), g();
            } catch (t) {
                E(new o.A(t).getAnyErrorMessage());
            } finally {
                S(!1);
            }
        },
        j = async () => {
            if (!C) {
                k(!0);
                try {
                    await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeoz"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new o.A(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    k(!1);
                }
            }
        },
        M = m || C;
    return (0, a.jsx)("form", {
        onSubmit: A,
        children: (0, a.jsx)(r.ExpressiveModal, {
            transitionState: e,
            trackingProps: { impression: T, impressionType: i.ImpressionTypes.MODAL },
            graphic: { src: u, type: "image" },
            title: d,
            subtitle: c.intl.string(c.t.SZJowy),
            actions: [
                { text: c.intl.string(c.t["ETE/oC"]), onClick: g, variant: "secondary", disabled: M },
                { text: h, variant: x, loading: M, type: "submit" },
            ],
            onClose: g,
            children: (0, a.jsxs)(l.BJc, {
                gap: 8,
                children: [
                    (0, a.jsx)(l.ksK, {
                        label: c.intl.string(c.t["8mZX6M"]),
                        error: b,
                        value: f,
                        onChange: w,
                        inputRef: v,
                    }),
                    (0, a.jsx)(r.QWc, { textVariant: "text-sm/normal", text: c.intl.string(c.t.K0NPQ6), onClick: j }),
                ],
            }),
        }),
    });
}
