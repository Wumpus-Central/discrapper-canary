n.d(t, {
    F: () => f,
    Z: () => m,
}),
    n(539854),
    n(388685);
var l,
    r,
    i = n(54381),
    a = n(473749),
    s = n(120356),
    o = n.n(s),
    u = n(481060),
    c = n(295907),
    d = n(388032),
    h = n(979322);
function p(e, t, n) {
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
let g = Object.freeze({
    SMALL: h.small,
    MEDIUM: h.medium,
    LARGE: h.large,
});
var f = (((r = {}).MEMBER = "MEMBER"), (r.ROLE = "ROLE"), (r.CHANNEL = "CHANNEL"), (r.USER = "USER"), r);
class v extends (l = a.Component) {
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
            var l, r;
            (this.previousHeight = t), null == (l = (r = this.props).onHeightChange) || l.call(r, n);
        }
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: l,
            query: r,
            tags: i,
            onSelectionChange: a,
            onSelect: s,
            onRemoveTag: o,
            preventEscapePropagation: u,
        } = this.props;
        if (0 !== l.length) {
            switch (e.key) {
                case c.vn.BACKSPACE:
                    (null == r || 0 === r.length) &&
                        null != i &&
                        i.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), null == o || o(i.length - 1));
                    break;
                case c.vn.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (n = 0))
                            : ((t += 1) >= l.length && (t = l.length - 1), n >= l[t] && (n = l[t] - 1));
                    break;
                case c.vn.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= l[t] && (n = l[t] - 1);
                    break;
                case c.vn.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = l[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case c.vn.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n += 1) >= l[t] && ((n = 0), (t += 1) >= l.length && ((t = l.length - 1), (n = l[t] - 1)));
                    break;
                case c.vn.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === n && (n = 0),
                        t >= l.length || n >= l[t])
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
            null != a && a(t, n);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: n,
                selectedRow: l,
                onSelect: r,
                onSelectionChange: i,
                query: a,
                tags: s,
                preventEscapePropagation: o,
            } = this.props,
            { current: u } = this.ref;
        if (null != u)
            switch (e.key) {
                case c.vn.BACKSPACE:
                    if ((null == a || 0 === a.length) && null != s && s.length > 0) {
                        var d, h;
                        e.preventDefault(),
                            e.stopPropagation(),
                            null == (d = (h = this.props).onRemoveTag) || d.call(h, s.length - 1);
                    }
                    break;
                case c.vn.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++l >= t[n] && (++n >= t.length && (n = 0), (l = 0)),
                        null == i || i(n, l);
                    break;
                case c.vn.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --l < 0 && (--n < 0 && (n = t.length - 1), (l = t[n] - 1)),
                        null == i || i(n, l);
                    break;
                case c.vn.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > l && (null == r || r(n, l, e));
                    break;
                case c.vn.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), null == r || r(null, null, e), u.blur();
            }
    }
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: n = d.intl.string(d.t.LzcpeZ),
                themeOverride: l,
                disabled: r,
                size: a,
                maxHeight: s,
                tags: c,
                onActivate: g,
                className: f,
                inputProps: v,
                focusAfterReady: m,
            } = this.props,
            D = !1,
            b = [];
        return (
            null != c &&
                c.length > 0 &&
                ("string" == typeof c[0]
                    ? c.forEach((e, t) =>
                          b.push(
                              (0, i.jsxs)(
                                  u.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: h.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(u.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: h.close,
                                              "aria-label": d.intl.string(d.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((D = !0),
                      c.forEach((e, t) =>
                          b.push(
                              (0, i.jsxs)(
                                  u.eee,
                                  {
                                      className: o()(h.tag, h.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(u.qEK, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: u.EFr.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)("span", {
                                                  className: h.tagRoleColor,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          (0, i.jsx)("span", {
                                              className: h.tagLabel,
                                              children: e.label,
                                          }),
                                          (0, i.jsx)(u.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: h.close,
                                              "aria-label": d.intl.string(d.t.N86XcP),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, i.jsx)(u.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(u.f6W, {
                    theme: l,
                    children: (l) =>
                        (0, i.jsx)("div", {
                            ref: this.containerRef,
                            className: o()(f, h.container, a, l, { [h.disabled]: r }),
                            children: (0, i.jsxs)(u.zJl, {
                                className: h.inner,
                                style: { maxHeight: s },
                                children: [
                                    b,
                                    (0, i.jsx)(
                                        "input",
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    l = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (l = l.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    l.forEach(function (t) {
                                                        p(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                className: o()(h.input, { [h.richTagInput]: D }),
                                                type: "text",
                                                ref: this.ref,
                                                spellCheck: "false",
                                                placeholder: n,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: r,
                                                "aria-disabled": r,
                                                autoFocus: !m && e,
                                                onMouseDown: g,
                                            },
                                            this.defaultInputProps,
                                            v,
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
            p(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
            }),
            p(this, "ref", a.createRef()),
            p(this, "containerRef", a.createRef()),
            p(this, "previousHeight", 0),
            p(this, "handleKeyDown", (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: l, useKeyboardNavigation: r } = this.props;
                null != n && n(e);
                let { current: i } = this.ref;
                if (null == i || null != t) {
                    e.key !== c.vn.TAB && (null == t || t(e));
                    return;
                }
                if (e.key === c.vn.ESCAPE && null != i.value && "" !== i.value && i.value.length > 0) {
                    (i.value = ""), null != l && l("");
                    return;
                }
                r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            p(this, "handleChange", (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            p(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            p(this, "handleRemoveTag", (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            p(this, "focus", () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
p(v, "Sizes", g),
    p(v, "defaultProps", {
        size: g.SMALL,
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
let m = v;
