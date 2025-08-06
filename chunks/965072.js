n.d(e, { default: () => p }), n(388685);
var s = n(255367),
    a = n(73800),
    i = n(990547),
    r = n(667202),
    l = n(481060),
    o = n(479531),
    c = n(388032),
    u = n(800010);
function p(t) {
    let {
            transitionState: e,
            onFormSubmit: n,
            onResend: p,
            onSuccess: y,
            onClose: d,
            headerText: h,
            confirmButtonText: g,
            confirmButtonVariant: T = "primary",
            impression: f,
        } = t,
        [m, x] = a.useState(!1),
        [S, w] = a.useState(""),
        [k, C] = a.useState(!1),
        [b, j] = a.useState(null),
        v = a.useRef(null),
        E = async (t) => {
            t.preventDefault(), j(null), x(!0);
            try {
                let t = await n(S);
                null != y && y(t), d();
            } catch (t) {
                j(new o.Z(t).getAnyErrorMessage());
            } finally {
                x(!1);
            }
        },
        A = async () => {
            if (!k) {
                C(!0);
                try {
                    await p(), (0, l.showToast)((0, l.createToast)(c.intl.string(c.t["84yeo6"]), l.ToastType.SUCCESS));
                } catch (e) {
                    let t = new o.Z(e).getAnyErrorMessage();
                    null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE));
                } finally {
                    C(!1);
                }
            }
        },
        R = m || k;
    return (0, s.jsx)("form", {
        onSubmit: E,
        children: (0, s.jsx)(r.I, {
            transitionState: e,
            trackingProps: {
                impression: f,
                impressionType: i.ImpressionTypes.MODAL,
            },
            graphic: {
                src: u,
                type: "image",
            },
            title: h,
            subtitle: c.intl.string(c.t.SZJow8),
            actions: [
                {
                    text: c.intl.string(c.t["ETE/oK"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: R,
                },
                {
                    text: g,
                    variant: T,
                    loading: R,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, s.jsxs)(l.Kqy, {
                gap: 8,
                children: [
                    (0, s.jsx)(l.xJW, {
                        title: c.intl.string(c.t["8mZX6O"]),
                        error: b,
                        children: (0, s.jsx)(l.oil, {
                            value: S,
                            onChange: w,
                            inputRef: v,
                        }),
                    }),
                    (0, s.jsx)(l.Text, {
                        variant: "text-sm/normal",
                        children: c.intl.format(c.t.P0sak5, { onResend: A }),
                    }),
                ],
            }),
        }),
    });
}
