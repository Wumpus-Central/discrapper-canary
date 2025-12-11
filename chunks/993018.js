n.d(e, { default: () => c }), n(413496), n(433524), n(35282), n(388685);
var i = n(54381),
    s = n(473749),
    r = n(990547),
    l = n(793030),
    a = n(481060),
    o = n(479531),
    u = n(388032);
let p = RegExp(
    "(^[-!#$%&'*+/=?^_`{}|~0-9A-Z]+(\\.[-!#$%&'*+/=?^_`{}|~0-9A-Z]+)*|^\"([\\001-\\010\\013\\014\\016-\\037!#-\\[\\]-\\177]|\\\\[\\001-011\\013\\014\\016-\\177])*\")@(?:[A-Z0-9](?:[A-Z0-9-]{0,2000}[A-Z0-9])?\\.)+[A-Z]{2,63}\\.?$",
    "i",
);
function c(t) {
    let {
            transitionState: e,
            onFormSubmit: n,
            onSuccess: c,
            onClose: d,
            headerText: h,
            confirmButtonText: m,
            confirmButtonVariant: f = "primary",
            helperText: y,
        } = t,
        [A, g] = s.useState(!1),
        [v, x] = s.useState(""),
        [C, E] = s.useState(null),
        Z = s.useRef(null),
        b = async (t) => {
            if ((t.preventDefault(), E(null), g(!0), !1 === p.test(v))) {
                E(u.intl.string(u.t.hML7Gw)), g(!1);
                return;
            }
            try {
                let t = null != n ? await n(v) : void 0;
                null != c &&
                    (null != t
                        ? c({
                              response: t,
                              email: v,
                          })
                        : c(v)),
                    d();
            } catch (t) {
                E(new o.Z(t).getAnyErrorMessage());
            } finally {
                g(!1);
            }
        };
    return (0, i.jsx)("form", {
        onSubmit: b,
        children: (0, i.jsx)(l.Modal, {
            transitionState: e,
            trackingProps: {
                impression: { impressionName: r.ImpressionNames.URF_ENTER_EMAIL },
                impressionType: r.ImpressionTypes.MODAL,
            },
            title: h,
            actions: [
                {
                    text: u.intl.string(u.t["ETE/oC"]),
                    onClick: d,
                    variant: "secondary",
                    disabled: A,
                },
                {
                    text: m,
                    variant: f,
                    loading: A,
                    type: "submit",
                },
            ],
            onClose: d,
            children: (0, i.jsx)(a.oil, {
                label: u.intl.string(u.t.hvOfmC),
                error: C,
                value: v,
                onChange: x,
                helperText: y,
                inputRef: Z,
            }),
        }),
    });
}
