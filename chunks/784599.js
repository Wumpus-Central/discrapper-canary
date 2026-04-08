"use strict";
n.d(t, { U: () => T }), n(321073);
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(835245),
    l = n(158954),
    u = n(504345),
    c = n(571356),
    d = n(826745),
    _ = n(985018),
    f = n(355538),
    p = n(199228),
    h = n(360792);
let m = (0, o.A)(),
    E = (0, o.A)(),
    g = (0, o.A)(),
    A = 10,
    I = 7.23;
class T extends i.Component {
    static contextType = u.cK;
    static defaultProps = {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1,
    };
    constructor(e) {
        super(e), (this.state = { dirty: e.defaultDirty ?? !1 });
    }
    getAriaDescribedBy = () => {
        let { maxLength: e, minLength: t, error: n } = this.props,
            r = [],
            i = this.context?.errorId;
        return (
            null != i && r.push(i),
            null != n ? r.push(m) : (null != e && r.push(g), null != t && r.push(E)),
            r.length > 0 ? r.join(" ") : void 0
        );
    };
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return A;
        let n = `${e}`.length;
        return t && (n += `${e} / `.length), I * n + A;
    }
    getCharsLeftLength() {
        let { maxLength: e, value: t } = this.props;
        return null == e ? null : e - (null != t ? t.length : 0);
    }
    getIsOverflowing() {
        let e = this.getCharsLeftLength();
        return null != e && e < 0;
    }
    getIsUnderflowing() {
        let { minLength: e, value: t } = this.props;
        return null != e && (null != t ? t.length : 0) < e;
    }
    renderCharacterCount() {
        if (this.props.showCharacterCount) {
            let { value: e, maxLength: t } = this.props;
            return (0, r.jsxs)("div", {
                className: a()(f.Ru, { [f.hz]: this.hasError() }),
                "aria-hidden": "true",
                children: [e?.length ?? 0, " ", null != t && `/ ${t}`],
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, r.jsx)("div", { className: a()(f.Ru, { [f.hz]: e < 0 }), "aria-hidden": "true", children: e });
    }
    hasError() {
        return (
            null != this.props.error ||
            null != this.context.error ||
            (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1))
        );
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: n } = this.props,
            r = this.getIsOverflowing() ? _.intl.formatToPlainString(_.t.ICT5S6, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? _.intl.formatToPlainString(_.t["62rk1K"], { minLength: n }) : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : (r ?? i);
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, r.jsx)(c.E, {
                  id: m,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: f.gJ,
                  children: e,
              });
    }
    render() {
        let {
                disabled: e,
                value: t,
                placeholder: n,
                autoFocus: i,
                minLength: s,
                maxLength: o,
                allowOverflow: u,
                spellCheck: c,
                resizeable: m,
                className: A,
                id: I,
                rows: T,
                flex: S,
                autosize: y,
                required: v,
                onInvalid: N,
                inputRef: C,
            } = this.props,
            R = y ? d.y : "textarea",
            O = this.hasError(),
            b = this.props["aria-labelledby"] ?? this.context?.titleId,
            D = this.getAriaDescribedBy();
        return (0, r.jsxs)("div", {
            className: a()(p.I6, { [f.Uu]: S }),
            children: [
                (0, r.jsxs)("div", {
                    className: a()(f.b4, { [f.Uu]: S }),
                    children: [
                        (0, r.jsx)(l.vN3, {
                            children: (0, r.jsx)(R, {
                                type: "text",
                                className: a()(p.hF, f.Tg, h.qD, A, { [p.z3]: O, [p.r9]: e, [f.Xl]: m }),
                                "aria-labelledby": b,
                                "aria-describedby": D,
                                "aria-invalid": O,
                                style: { paddingRight: this.getPaddingRight() },
                                id: I,
                                disabled: e,
                                placeholder: n,
                                value: t,
                                autoFocus: i,
                                minLength: s,
                                maxLength: u ? void 0 : o,
                                spellCheck: c,
                                required: v,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: N,
                                rows: T,
                                ref: C,
                            }),
                        }),
                        null != s &&
                            (0, r.jsx)(l.AC4, { id: E, children: _.intl.format(_.t["bmQU//"], { minLength: s }) }),
                        null != o &&
                            (0, r.jsx)(l.AC4, { id: g, children: _.intl.format(_.t["+DFxLc"], { maxLength: o }) }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    onChange = (e) => {
        let { onChange: t, name: n } = this.props;
        t?.(e.currentTarget.value, n), this.setState({ dirty: !0 });
    };
    onFocus = (e) => {
        let { onFocus: t, name: n } = this.props;
        t?.(e, n);
    };
    onBlur = (e) => {
        let { onBlur: t, name: n } = this.props;
        t?.(e, n);
    };
    onKeyDown = (e) => {
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
}
