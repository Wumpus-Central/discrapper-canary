n.d(t, { default: () => o }), n(388685);
var a = n(54381),
    s = n(473749),
    l = n(481060),
    i = n(365007),
    r = n(388032),
    c = n(676641);
function o(e) {
    let { transitionState: t, onClose: n, credential: o } = e,
        [d, u] = s.useState(!1),
        [f, h] = s.useState(""),
        [b, m] = s.useState(void 0),
        x = s.useRef(null);
    async function p(e) {
        e.preventDefault(), u(!0);
        try {
            await (0, i.WQ)(o.id, f), n();
        } catch (e) {
            m(e.message);
        } finally {
            u(!1);
        }
    }
    return (
        s.useEffect(() => {
            if (t === l.Dvm.ENTERED) {
                var e;
                null == (e = x.current) || e.focus();
            }
        }, [t]),
        (0, a.jsxs)(l.Y0X, {
            transitionState: t,
            parentComponent: "EditCredentialModal",
            children: [
                (0, a.jsxs)(l.xBx, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, a.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-lg/bold",
                            className: c.subtitle,
                            children: r.intl.string(r.t.YjuMsf),
                        }),
                        (0, a.jsx)(l.olH, {
                            onClick: n,
                            className: c.modalCloseButton,
                        }),
                    ],
                }),
                (0, a.jsxs)("form", {
                    onSubmit: p,
                    children: [
                        (0, a.jsx)(l.hzk, {
                            className: c.content,
                            children: (0, a.jsx)(l.oil, {
                                label: r.intl.string(r.t["7yEgJY"]),
                                inputRef: x,
                                "aria-label": r.intl.string(r.t["7yEgJY"]),
                                placeholder: o.name,
                                value: f,
                                minLength: 1,
                                maxLength: 32,
                                onChange: h,
                                autoFocus: !0,
                                required: !0,
                                error: b,
                            }),
                        }),
                        (0, a.jsxs)(l.mzw, {
                            children: [
                                (0, a.jsx)(l.Button, {
                                    variant: "primary",
                                    text: r.intl.string(r.t.i4jeWR),
                                    type: "submit",
                                    loading: d,
                                    disabled: 0 === f.length || f.length > 32,
                                }),
                                (0, a.jsx)("div", {
                                    "data-button-hoisted-classname-wrapper": !0,
                                    className: c.cancel,
                                    children: (0, a.jsx)(l.Button, {
                                        variant: "secondary",
                                        text: r.intl.string(r.t["ETE/oC"]),
                                        onClick: n,
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        })
    );
}
