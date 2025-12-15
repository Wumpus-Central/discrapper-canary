n.d(e, { default: () => o }), n(388685);
var i = n(54381),
    a = n(473749),
    s = n(775086),
    l = n(481060),
    r = n(365007),
    u = n(388032);
function o(t) {
    let { transitionState: e, onClose: n, credential: o } = t,
        [c, d] = a.useState(!1),
        [g, f] = a.useState(""),
        [h, p] = a.useState(void 0),
        E = a.useRef(null);
    async function v() {
        d(!0);
        try {
            await (0, r.WQ)(o.id, g), n();
        } catch (t) {
            p(t.message);
        } finally {
            d(!1);
        }
    }
    return (
        a.useEffect(() => {
            if (e === l.Dvm.ENTERED) {
                var t;
                null == (t = E.current) || t.focus();
            }
        }, [e]),
        (0, i.jsx)(s.Modal, {
            transitionState: e,
            title: u.intl.string(u.t.YjuMsf),
            onClose: n,
            input: (0, i.jsx)(l.oil, {
                label: u.intl.string(u.t["7yEgJY"]),
                inputRef: E,
                "aria-label": u.intl.string(u.t["7yEgJY"]),
                placeholder: o.name,
                value: g,
                minLength: 1,
                maxLength: 32,
                onChange: f,
                autoFocus: !0,
                required: !0,
                error: h,
            }),
            actions: [
                {
                    variant: "secondary",
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: n,
                },
                {
                    variant: "primary",
                    text: u.intl.string(u.t.i4jeWR),
                    disabled: 0 === g.length || g.length > 32,
                    loading: c,
                    onClick: v,
                },
            ],
        })
    );
}
