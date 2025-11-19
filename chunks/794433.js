n.d(t, {
    F: () => h,
    Z: () => g,
}),
    n(539854),
    n(388685);
var r,
    i = n(54381),
    a = n(473749),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(295907),
    u = n(388032),
    d = n(278463);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = Object.freeze({
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large,
});
var h = (function (e) {
    return (e.MEMBER = "MEMBER"), (e.ROLE = "ROLE"), (e.CHANNEL = "CHANNEL"), (e.USER = "USER"), e;
})({});
class m extends (r = a.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        t && !e.isReady && n && this.focus(),
            (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange();
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            n = t - this.previousHeight;
        if (0 !== n) {
            var r, i;
            (this.previousHeight = t), null == (r = (i = this.props).onHeightChange) || r.call(i, n);
        }
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: r,
            query: i,
            tags: a,
            onSelectionChange: o,
            onSelect: s,
            onRemoveTag: l,
            preventEscapePropagation: u,
        } = this.props;
        if (0 !== r.length) {
            switch (e.key) {
                case c.vn.BACKSPACE:
                    (null == i || 0 === i.length) &&
                        null != a &&
                        a.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                    break;
                case c.vn.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (n = 0))
                            : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1));
                    break;
                case c.vn.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1),
                        t < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1);
                    break;
                case c.vn.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n -= 1),
                        n < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case c.vn.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n += 1),
                        n >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1)));
                    break;
                case c.vn.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === n && (n = 0),
                        t >= r.length || n >= r[t])
                    )
                        return;
                    null != s && s(t, n, e);
                    return;
                case c.vn.ESCAPE:
                    e.preventDefault(), u && e.stopPropagation(), null != s && s(null, null, e);
                    return;
                default:
                    return;
            }
            null != o && o(t, n);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: n,
                selectedRow: r,
                onSelect: i,
                onSelectionChange: a,
                query: o,
                tags: s,
                preventEscapePropagation: l,
            } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.key) {
                case c.vn.BACKSPACE:
                    if ((null == o || 0 === o.length) && null != s && s.length > 0) {
                        var d, f;
                        e.preventDefault(),
                            e.stopPropagation(),
                            null == (d = (f = this.props).onRemoveTag) || d.call(f, s.length - 1);
                    }
                    break;
                case c.vn.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)),
                        null == a || a(n, r);
                    break;
                case c.vn.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)),
                        null == a || a(n, r);
                    break;
                case c.vn.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e));
                    break;
                case c.vn.ESCAPE:
                    e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), u.blur();
            }
    }
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: n = u.intl.string(u.t.LzcpeZ),
                themeOverride: r,
                disabled: a,
                size: o,
                maxHeight: c,
                tags: f,
                onActivate: p,
                className: h,
                inputProps: m,
                focusAfterReady: g,
            } = this.props,
            E = !1,
            b = [];
        return (
            null != f &&
                f.length > 0 &&
                ("string" == typeof f[0]
                    ? f.forEach((e, t) =>
                          b.push(
                              (0, i.jsxs)(
                                  l.Anchor,
                                  {
                                      focusProps: { offset: 4 },
                                      className: d.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(l.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.close,
                                              "aria-label": u.intl.string(u.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((E = !0),
                      f.forEach((e, t) =>
                          b.push(
                              (0, i.jsxs)(
                                  l.Anchor,
                                  {
                                      className: s()(d.tag, d.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(l.qEK, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: l.EFr.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)("span", {
                                                  className: d.tagRoleColor,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, i.jsx)("span", {
                                              className: d.tagLabel,
                                              children: e.label,
                                          }),
                                          (0, i.jsx)(l.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: d.close,
                                              "aria-label": u.intl.string(u.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, i.jsx)(l.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(l.f6W, {
                    theme: r,
                    children: (r) =>
                        (0, i.jsx)("div", {
                            ref: this.containerRef,
                            className: s()(h, d.container, o, r, { [d.disabled]: a }),
                            children: (0, i.jsxs)(l.zJl, {
                                className: d.inner,
                                style: { maxHeight: c },
                                children: [
                                    b,
                                    (0, i.jsx)(
                                        "input",
                                        _(
                                            {
                                                className: s()(d.input, { [d.richTagInput]: E }),
                                                type: "text",
                                                ref: this.ref,
                                                spellCheck: "false",
                                                placeholder: n,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: a,
                                                "aria-disabled": a,
                                                autoFocus: !g && e,
                                                onMouseDown: p,
                                            },
                                            this.defaultInputProps,
                                            m,
                                        ),
                                    ),
                                ],
                            }),
                        }),
                }),
            })
        );
    }
    constructor(...e) {
        super(...e),
            f(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
            }),
            f(this, "ref", a.createRef()),
            f(this, "containerRef", a.createRef()),
            f(this, "previousHeight", 0),
            f(this, "handleKeyDown", (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.key !== c.vn.TAB && (null == t || t(e));
                    return;
                }
                if (e.key === c.vn.ESCAPE && null != a.value && "" !== a.value && a.value.length > 0) {
                    (a.value = ""), null != r && r("");
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            f(this, "handleChange", (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            f(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            f(this, "handleRemoveTag", (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            f(this, "focus", () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
f(m, "Sizes", p),
    f(m, "defaultProps", {
        size: p.SMALL,
        query: "",
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0,
    });
let g = m;
