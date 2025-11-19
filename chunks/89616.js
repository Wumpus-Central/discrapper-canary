n.d(e, { default: () => o }), n(388685);
var a = n(54381),
    s = n(473749),
    l = n(481060),
    i = n(365007),
    r = n(388032),
    c = n(463373);
function o(t) {
    let { transitionState: e, onClose: n, credential: o } = t,
        [d, u] = s.useState(!1),
        [h, m] = s.useState(""),
        [x, p] = s.useState(void 0),
        f = s.useRef(null);
    async function g(t) {
        t.preventDefault(), u(!0);
        try {
            await (0, i.WQ)(o.id, h), n();
        } catch (t) {
            p(t.message);
        } finally {
            u(!1);
        }
    }
    return (
        s.useEffect(() => {
            if (e === l.Dvm.ENTERED) {
                var t;
                null == (t = f.current) || t.focus();
            }
        }, [e]),
        (0, a.jsxs)(l.Y0X, {
            transitionState: e,
            parentComponent: "EditCredentialModal",
            children: [
                (0, a.jsxs)(l.xBx, {
                    separator: !1,
                    className: c.header,
                    children: [
                        (0, a.jsx)(l.Text, {
                            color: "header-secondary",
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
                    onSubmit: g,
                    children: [
                        (0, a.jsx)(l.hzk, {
                            className: c.content,
                            children: (0, a.jsx)(l.oil, {
                                label: r.intl.string(r.t["7yEgJY"]),
                                inputRef: f,
                                "aria-label": r.intl.string(r.t["7yEgJY"]),
                                placeholder: o.name,
                                value: h,
                                minLength: 1,
                                maxLength: 32,
                                onChange: m,
                                autoFocus: !0,
                                required: !0,
                                error: x,
                            }),
                        }),
                        (0, a.jsxs)(l.mzw, {
                            children: [
                                (0, a.jsx)(l.Button, {
                                    variant: "primary",
                                    text: r.intl.string(r.t.i4jeWR),
                                    type: "submit",
                                    loading: d,
                                    disabled: 0 === h.length || h.length > 32,
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
