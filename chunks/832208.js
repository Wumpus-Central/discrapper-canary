n.d(t, { A: () => d });
var l = n(627968),
    i = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(452027),
    o = n(235986),
    u = n(536439);
class c extends i.PureComponent {
    state = { changedSinceError: new Set() };
    componentDidUpdate(e) {
        if (this.props.formError !== e.formError) this.setState({ changedSinceError: new Set() });
        else if (null != this.props.formError) {
            let { changedSinceError: t } = this.state;
            this.getChangedValues(e).forEach((e) => t.add(e)), this.setState({ changedSinceError: t });
        }
    }
    getChangedValues(e) {
        let { values: t } = this.props,
            { values: n } = e;
        return Object.keys(t).filter((e) => t[e] !== n[e]);
    }
    getError(e) {
        let { errors: t, formError: n } = this.props;
        return null != t[e] ? t[e] : null == n || this.state.changedSinceError.has(e) ? null : n.getFieldMessage(e);
    }
    renderFormSection = (e) => {
        let { values: t, onFieldChange: n, onFieldFocus: i, onFieldBlur: a, layout: o, ...u } = this.props,
            { getClassNameForLayout: c, renderInput: d, title: p, name: m, id: h, placeholder: A, ..._ } = e,
            C = {
                ..._,
                placeholder: A?.(),
                error: this.getError(m),
                value: t[m],
                name: m,
                "aria-labelledby": h,
                onChange: n,
                onFocus: i,
                onBlur: a,
            };
        return (0, l.jsx)(
            "div",
            { className: r()(c?.(o)), children: (0, l.jsx)(s.D, { id: h, label: p(), children: d(C, u, o) }) },
            m,
        );
    };
    renderFormRow = (e) => {
        let t = e.fields.map(this.renderFormSection);
        return (0, l.jsx)(
            o.A,
            { className: r()(u.nM, e.className), children: t },
            e.fields.map((e) => e.name).join(""),
        );
    };
    render() {
        let { form: e, className: t } = this.props,
            n = e.map(this.renderFormRow);
        return (0, l.jsx)("div", { className: t, children: n });
    }
}
let d = c;
