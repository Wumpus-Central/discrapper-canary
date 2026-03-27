"use strict";
n.d(t, { A: () => d });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(397927),
    l = n(235986),
    u = n(898324);
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
        let { values: t, onFieldChange: n, onFieldFocus: i, onFieldBlur: s, layout: l, ...u } = this.props,
            { getClassNameForLayout: c, renderInput: d, title: _, name: f, id: p, placeholder: h, ...m } = e,
            E = {
                ...m,
                placeholder: h?.(),
                error: this.getError(f),
                value: t[f],
                name: f,
                "aria-labelledby": p,
                onChange: n,
                onFocus: i,
                onBlur: s,
            };
        return (0, r.jsx)(
            "div",
            { className: a()(c?.(l)), children: (0, r.jsx)(o.D0$, { id: p, label: _(), children: d(E, u, l) }) },
            f,
        );
    };
    renderFormRow = (e) => {
        let t = e.fields.map(this.renderFormSection);
        return (0, r.jsx)(
            l.A,
            { className: a()(u.nM, e.className), children: t },
            e.fields.map((e) => e.name).join(""),
        );
    };
    render() {
        let { form: e, className: t } = this.props,
            n = e.map(this.renderFormRow);
        return (0, r.jsx)("div", { className: t, children: n });
    }
}
let d = c;
