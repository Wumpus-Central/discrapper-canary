n.d(t, {
    U: () => v,
}),
    n(321073);
var r,
    i = n(627968),
    a = n(64700),
    s = n(503698),
    o = n.n(s),
    l = n(835245),
    c = n(158954),
    u = n(504345),
    d = n(571356),
    f = n(826745),
    p = n(985018),
    _ = n(648359),
    h = n(713545),
    m = n(829681);

function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let E = (0, l.A)(),
    b = (0, l.A)(),
    y = (0, l.A)(),
    O = 10,
    A = 7.23;
class v extends (r = a.Component) {
    getPaddingRight() {
        let { maxLength: e, showCharacterCountFullPadding: t } = this.props;
        if (null == e) return O;
        let n = "".concat(e).length;
        return t && (n += "".concat(e, " / ").length), A * n + O;
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
            var e;
            let { value: t, maxLength: n } = this.props;
            return (0, i.jsxs)("div", {
                className: o()(_.Ru, {
                    [_.hz]: this.hasError(),
                }),
                "aria-hidden": "true",
                children: [null != (e = null == t ? void 0 : t.length) ? e : 0, " ", null != n && "/ ".concat(n)],
            });
        }
        return null;
    }
    renderMaxLength() {
        if (this.props.showCharacterCount || !1 === this.props.showRemainingCharacterCount) return null;
        let e = this.getCharsLeftLength();
        return null == e
            ? null
            : (0, i.jsx)("div", {
                  className: o()(_.Ru, {
                      [_.hz]: e < 0,
                  }),
                  "aria-hidden": "true",
                  children: e,
              });
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
            r = this.getIsOverflowing()
                ? p.intl.formatToPlainString(p.t.ICT5S6, {
                      maxLength: t,
                  })
                : null,
            i = this.getIsUnderflowing()
                ? p.intl.formatToPlainString(p.t["62rk1K"], {
                      minLength: n,
                  })
                : null;
        return (null != e && "" === e) || null === e
            ? null
            : void 0 !== e
              ? e
              : !1 === this.state.dirty
                ? null
                : null != r
                  ? r
                  : i;
    }
    renderErrorMessage() {
        let e = this.getErrorMessage();
        return null == e
            ? null
            : (0, i.jsx)(d.E, {
                  id: E,
                  variant: "text-xs/normal",
                  color: "text-feedback-critical",
                  className: _.gJ,
                  children: e,
              });
    }
    render() {
        var e, t;
        let {
                disabled: n,
                value: r,
                placeholder: a,
                autoFocus: s,
                minLength: l,
                maxLength: u,
                allowOverflow: d,
                spellCheck: g,
                resizeable: E,
                className: O,
                id: A,
                rows: v,
                flex: S,
                autosize: I,
                required: T,
                onInvalid: C,
                inputRef: N,
            } = this.props,
            R = I ? f.y : "textarea",
            w = this.hasError(),
            P = null != (e = this.props["aria-labelledby"]) ? e : null == (t = this.context) ? void 0 : t.titleId,
            D = this.getAriaDescribedBy();
        return (0, i.jsxs)("div", {
            className: o()(h.I6, {
                [_.Uu]: S,
            }),
            children: [
                (0, i.jsxs)("div", {
                    className: o()(_.b4, {
                        [_.Uu]: S,
                    }),
                    children: [
                        (0, i.jsx)(c.vN3, {
                            children: (0, i.jsx)(R, {
                                type: "text",
                                className: o()(h.hF, _.Tg, m.qD, O, {
                                    [h.z3]: w,
                                    [h.r9]: n,
                                    [_.Xl]: E,
                                }),
                                "aria-labelledby": P,
                                "aria-describedby": D,
                                "aria-invalid": w,
                                style: {
                                    paddingRight: this.getPaddingRight(),
                                },
                                id: A,
                                disabled: n,
                                placeholder: a,
                                value: r,
                                autoFocus: s,
                                minLength: l,
                                maxLength: d ? void 0 : u,
                                spellCheck: g,
                                required: T,
                                onChange: this.onChange,
                                onBlur: this.onBlur,
                                onFocus: this.onFocus,
                                onKeyDown: this.onKeyDown,
                                onInvalid: C,
                                rows: v,
                                ref: N,
                            }),
                        }),
                        null != l &&
                            (0, i.jsx)(c.AC4, {
                                id: b,
                                children: p.intl.format(p.t["bmQU//"], {
                                    minLength: l,
                                }),
                            }),
                        null != u &&
                            (0, i.jsx)(c.AC4, {
                                id: y,
                                children: p.intl.format(p.t["+DFxLc"], {
                                    maxLength: u,
                                }),
                            }),
                        this.renderCharacterCount(),
                        this.renderMaxLength(),
                    ],
                }),
                this.renderErrorMessage(),
            ],
        });
    }
    constructor(e) {
        var t;
        super(e),
            g(this, "getAriaDescribedBy", () => {
                var e;
                let { maxLength: t, minLength: n, error: r } = this.props,
                    i = [],
                    a = null == (e = this.context) ? void 0 : e.errorId;
                return (
                    null != a && i.push(a),
                    null != r ? i.push(E) : (null != t && i.push(y), null != n && i.push(b)),
                    i.length > 0 ? i.join(" ") : void 0
                );
            }),
            g(this, "onChange", (e) => {
                let { onChange: t, name: n } = this.props;
                null == t || t(e.currentTarget.value, n),
                    this.setState({
                        dirty: !0,
                    });
            }),
            g(this, "onFocus", (e) => {
                let { onFocus: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            g(this, "onBlur", (e) => {
                let { onBlur: t, name: n } = this.props;
                null == t || t(e, n);
            }),
            g(this, "onKeyDown", (e) => {
                let { onKeyDown: t } = this.props;
                null == t || t(e);
            }),
            (this.state = {
                dirty: null != (t = e.defaultDirty) && t,
            });
    }
}
g(v, "contextType", u.cK),
    g(v, "defaultProps", {
        name: "",
        disabled: !1,
        placeholder: "",
        autoFocus: !1,
        resizeable: !1,
        flex: !1,
        autosize: !1,
        rows: 3,
        allowOverflow: !1,
    });
