l.d(t, { U: () => O }), l(321073);
var a = l(627968),
    n = l(64700),
    i = l(503698),
    r = l.n(i),
    s = l(835245),
    o = l(187322),
    u = l(140735),
    d = l(504345),
    _ = l(834730),
    c = l(826745),
    A = l(985018),
    T = l(792034),
    h = l(482188),
    g = l(429128);
let E = (0, s.A)(),
    p = (0, s.A)(),
    m = (0, s.A)();
class O extends n.Component {
    static contextType = d.cK;
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
        let { maxLength: e, minLength: t, error: l } = this.props,
            a = [],
            n = this.context?.errorId;
        return (
            null != n && a.push(n),
            null != l ? a.push(E) : (null != e && a.push(m), null != t && a.push(p)),
            a.length > 0 ? a.join(" ") : void 0
        );
    };
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return 10;
        let l = `${e}`.length;
        return t && (l += `${e} / `.length), 7.23 * l + 10;
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
            return (0, a.jsxs)("div", {
                className: r()(T.Ru, { [T.hz]: this.hasError() }),
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
            : (0, a.jsx)("div", { className: r()(T.Ru, { [T.hz]: e < 0 }), "aria-hidden": "true", children: e });
    }
    hasError() {
        return (
            null != this.props.error ||
            null != this.context.error ||
            (!1 !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || !1))
        );
    }
    getErrorMessage() {
        let { error: e, maxLength: t, minLength: l } = this.props,
            a = this.getIsOverflowing() ? A.intl.formatToPlainString(A.t.ICT5S6, { maxLength: t }) : null,
            n = this.getIsUnderflowing() ? A.intl.formatToPlainString(A.t["62rk1K"], { minLength: l }) : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : (a ?? n);
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, a.jsx)(_.E, {
                  id: E,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: T.gJ,
                  children: e,
              });
    }
    render() {
        let {
                disabled: e,
                value: t,
                placeholder: l,
                autoFocus: n,
                minLength: i,
                maxLength: s,
                allowOverflow: d,
                spellCheck: _,
                resizeable: E,
                className: O,
                id: S,
                rows: N,
                flex: I,
                autosize: f,
                required: b,
                onInvalid: D,
                inputRef: v,
            } = this.props,
            R = f ? c.y : "textarea",
            C = this.hasError(),
            x = this.props["aria-labelledby"] ?? this.context?.titleId,
            U = this.getAriaDescribedBy();
        return (0, a.jsxs)("div", {
            className: r()(h.I6, { [T.Uu]: I }),
            children: [
                (0, a.jsxs)("div", {
                    className: r()(T.b4, { [T.Uu]: I }),
                    children: [
                        (0, a.jsx)(o.vN, {
                            children: (0, a.jsx)(R, {
                                type: "text",
                                className: r()(h.hF, T.Tg, g.qD, O, { [h.z3]: C, [h.r9]: e, [T.Xl]: E }),
                                "aria-labelledby": x,
                                "aria-describedby": U,
                                "aria-invalid": C,
                                style: { paddingRight: this.getPaddingRight() },
                                id: S,
                                disabled: e,
                                placeholder: l,
                                value: t,
                                autoFocus: n,
                                minLength: i,
                                maxLength: d ? void 0 : s,
                                spellCheck: _,
                                required: b,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: D,
                                rows: N,
                                ref: v,
                            }),
                        }),
                        null != i &&
                            (0, a.jsx)(u.A, { id: p, children: A.intl.format(A.t["bmQU//"], { minLength: i }) }),
                        null != s &&
                            (0, a.jsx)(u.A, { id: m, children: A.intl.format(A.t["+DFxLc"], { maxLength: s }) }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    onChange = (e) => {
        let { onChange: t, name: l } = this.props;
        t?.(e.currentTarget.value, l), this.setState({ dirty: !0 });
    };
    onFocus = (e) => {
        let { onFocus: t, name: l } = this.props;
        t?.(e, l);
    };
    onBlur = (e) => {
        let { onBlur: t, name: l } = this.props;
        t?.(e, l);
    };
    onKeyDown = (e) => {
        let { onKeyDown: t } = this.props;
        t?.(e);
    };
}
