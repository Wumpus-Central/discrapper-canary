l.d(t, { U: () => N }), l(321073);
var n = l(627968),
    i = l(64700),
    r = l(503698),
    a = l.n(r),
    s = l(835245),
    u = l(187322),
    o = l(140735),
    d = l(504345),
    c = l(834730),
    A = l(826745),
    _ = l(985018),
    T = l(792034),
    h = l(482188),
    g = l(429128);
let E = (0, s.A)(),
    O = (0, s.A)(),
    m = (0, s.A)();
class N extends i.Component {
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
            n = [],
            i = this.context?.errorId;
        return (
            null != i && n.push(i),
            null != l ? n.push(E) : (null != e && n.push(m), null != t && n.push(O)),
            n.length > 0 ? n.join(" ") : void 0
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
            return (0, n.jsxs)("div", {
                className: a()(T.Ru, { [T.hz]: this.hasError() }),
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
            : (0, n.jsx)("div", { className: a()(T.Ru, { [T.hz]: e < 0 }), "aria-hidden": "true", children: e });
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
            n = this.getIsOverflowing() ? _.intl.formatToPlainString(_.t.ICT5S6, { maxLength: t }) : null,
            i = this.getIsUnderflowing() ? _.intl.formatToPlainString(_.t["62rk1K"], { minLength: l }) : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : (n ?? i);
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, n.jsx)(c.E, {
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
                autoFocus: i,
                minLength: r,
                maxLength: s,
                allowOverflow: d,
                spellCheck: c,
                resizeable: E,
                className: N,
                id: S,
                rows: p,
                flex: I,
                autosize: b,
                required: D,
                onInvalid: f,
                inputRef: R,
            } = this.props,
            v = b ? A.y : "textarea",
            C = this.hasError(),
            x = this.props["aria-labelledby"] ?? this.context?.titleId,
            M = this.getAriaDescribedBy();
        return (0, n.jsxs)("div", {
            className: a()(h.I6, { [T.Uu]: I }),
            children: [
                (0, n.jsxs)("div", {
                    className: a()(T.b4, { [T.Uu]: I }),
                    children: [
                        (0, n.jsx)(u.vN, {
                            children: (0, n.jsx)(v, {
                                type: "text",
                                className: a()(h.hF, T.Tg, g.qD, N, { [h.z3]: C, [h.r9]: e, [T.Xl]: E }),
                                "aria-labelledby": x,
                                "aria-describedby": M,
                                "aria-invalid": C,
                                style: { paddingRight: this.getPaddingRight() },
                                id: S,
                                disabled: e,
                                placeholder: l,
                                value: t,
                                autoFocus: i,
                                minLength: r,
                                maxLength: d ? void 0 : s,
                                spellCheck: c,
                                required: D,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: f,
                                rows: p,
                                ref: R,
                            }),
                        }),
                        null != r &&
                            (0, n.jsx)(o.A, { id: O, children: _.intl.format(_.t["bmQU//"], { minLength: r }) }),
                        null != s &&
                            (0, n.jsx)(o.A, { id: m, children: _.intl.format(_.t["+DFxLc"], { maxLength: s }) }),
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
