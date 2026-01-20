n.d(t, { Z: () => u }), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(481060),
    l = n(911969),
    c = n(970184);
function u(e) {
    var t;
    let { type: n, default: a } = e,
        u = (0, c.CJ)();
    o()(null != u, "CheckboxActionComponent must be rendered inside a ComponentStateContext");
    let { state: d, executeStateUpdate: f } = u.useComponentState(
            e,
            null != a
                ? {
                      type: n,
                      value: a,
                  }
                : void 0,
        ),
        p = i.useMemo(() => (null == d ? void 0 : d.type) === n && d.value, [d, n]),
        _ = (e) => {
            f({
                type: n,
                value: e,
            });
        },
        h = null == (t = u.getParents(e)) ? void 0 : t[0],
        m = (null == h ? void 0 : h.type) === l.re.LABEL ? h : void 0;
    return (
        o()(null != m, "CheckboxActionComponent must be a child of a Label component"),
        (0, r.jsx)(s.Checkbox, {
            label: m.label,
            description: m.description,
            checked: p,
            onChange: _,
        })
    );
}
