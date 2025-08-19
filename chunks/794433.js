n.d(t, {
    F: () => m,
    Z: () => v,
}),
    n(539854),
    n(388685);
var i,
    r,
    s = n(951288),
    l = n(647438),
    o = n(120356),
    a = n.n(o),
    c = n(481060),
    u = n(565138),
    d = n(981631),
    h = n(388032),
    p = n(599684);
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
let f = Object.freeze({
    SMALL: p.small,
    MEDIUM: p.medium,
    LARGE: p.large,
});
var m =
    (((r = {}).MEMBER = "MEMBER"),
    (r.ROLE = "ROLE"),
    (r.CHANNEL = "CHANNEL"),
    (r.GUILD = "GUILD"),
    (r.USER = "USER"),
    r);
class b extends (i = l.Component) {
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
            var i, r;
            (this.previousHeight = t), null == (i = (r = this.props).onHeightChange) || i.call(r, n);
        }
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: n,
            sections: i,
            query: r,
            tags: s,
            onSelectionChange: l,
            onSelect: o,
            onRemoveTag: a,
            preventEscapePropagation: c,
        } = this.props;
        if (0 !== i.length) {
            switch (e.keyCode) {
                case d.yXg.BACKSPACE:
                    (null == r || 0 === r.length) &&
                        null != s &&
                        s.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), null == a || a(s.length - 1));
                    break;
                case d.yXg.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (n = 0))
                            : ((t += 1) >= i.length && (t = i.length - 1), n >= i[t] && (n = i[t] - 1));
                    break;
                case d.yXg.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (n = 0)) : n >= i[t] && (n = i[t] - 1);
                    break;
                case d.yXg.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n -= 1) < 0 && ((t -= 1) >= 0 ? (n = i[t] - 1) : t < 0 && ((t = 0), (n = 0)));
                    break;
                case d.yXg.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (n += 1) >= i[t] && ((n = 0), (t += 1) >= i.length && ((t = i.length - 1), (n = i[t] - 1)));
                    break;
                case d.yXg.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === n && (n = 0),
                        t >= i.length || n >= i[t])
                    )
                        return;
                    null != o && o(t, n, e);
                    return;
                case d.yXg.ESCAPE:
                    e.preventDefault(), c && e.stopPropagation(), null != o && o(null, null, e);
                    return;
                default:
                    return;
            }
            null != l && l(t, n);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: n,
                selectedRow: i,
                onSelect: r,
                onSelectionChange: s,
                query: l,
                tags: o,
                preventEscapePropagation: a,
            } = this.props,
            { current: c } = this.ref;
        if (null != c)
            switch (e.keyCode) {
                case d.yXg.BACKSPACE:
                    if ((null == l || 0 === l.length) && null != o && o.length > 0) {
                        var u, h;
                        e.preventDefault(),
                            e.stopPropagation(),
                            null == (u = (h = this.props).onRemoveTag) || u.call(h, o.length - 1);
                    }
                    break;
                case d.yXg.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > n && ++i >= t[n] && (++n >= t.length && (n = 0), (i = 0)),
                        null == s || s(n, i);
                    break;
                case d.yXg.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --i < 0 && (--n < 0 && (n = t.length - 1), (i = t[n] - 1)),
                        null == s || s(n, i);
                    break;
                case d.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > i && (null == r || r(n, i, e));
                    break;
                case d.yXg.ESCAPE:
                    e.preventDefault(), a && e.stopPropagation(), null == r || r(null, null, e), c.blur();
            }
    }
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: n = h.intl.string(h.t.LzcpeX),
                themeOverride: i,
                disabled: r,
                size: l,
                maxHeight: o,
                tags: d,
                onActivate: f,
                className: m,
                inputProps: b,
                focusAfterReady: v,
            } = this.props,
            C = !1,
            _ = [];
        return (
            null != d &&
                d.length > 0 &&
                ("string" == typeof d[0]
                    ? d.forEach((e, t) =>
                          _.push(
                              (0, s.jsxs)(
                                  c.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: p.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, s.jsx)(c.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: p.close,
                                              "aria-label": h.intl.string(h.t.N86XcH),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((C = !0),
                      d.forEach((e, t) =>
                          _.push(
                              (0, s.jsxs)(
                                  c.eee,
                                  {
                                      className: a()(p.tag, p.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, s.jsx)(c.qEK, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: c.EFr.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, s.jsx)("span", {
                                                  className: p.tagRoleColor,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          "GUILD" === e.type &&
                                              null != e.guild &&
                                              (0, s.jsx)(u.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: u.Z.Sizes.SMOL,
                                              }),
                                          (0, s.jsx)("span", {
                                              className: p.tagLabel,
                                              children: e.label,
                                          }),
                                          (0, s.jsx)(c.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: p.close,
                                              "aria-label": h.intl.string(h.t.N86XcH),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, s.jsx)(c.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)(c.f6W, {
                    theme: i,
                    children: (i) =>
                        (0, s.jsx)("div", {
                            ref: this.containerRef,
                            className: a()(m, p.container, l, i, { [p.disabled]: r }),
                            children: (0, s.jsxs)(c.zJl, {
                                className: p.inner,
                                style: { maxHeight: o },
                                children: [
                                    _,
                                    (0, s.jsx)(
                                        "input",
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var n = null != arguments[t] ? arguments[t] : {},
                                                    i = Object.keys(n);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (i = i.concat(
                                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                        }),
                                                    )),
                                                    i.forEach(function (t) {
                                                        g(e, t, n[t]);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                className: a()(p.input, { [p.richTagInput]: C }),
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
                                                autoFocus: !v && e,
                                                onMouseDown: f,
                                            },
                                            this.defaultInputProps,
                                            b,
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
            g(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
            }),
            g(this, "ref", l.createRef()),
            g(this, "containerRef", l.createRef()),
            g(this, "previousHeight", 0),
            g(this, "handleKeyDown", (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: i, useKeyboardNavigation: r } = this.props;
                null != n && n(e);
                let { current: s } = this.ref;
                if (null == s || null != t) {
                    e.keyCode !== d.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === d.yXg.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                    (s.value = ""), null != i && i("");
                    return;
                }
                r && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            g(this, "handleChange", (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            g(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            g(this, "handleRemoveTag", (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            g(this, "focus", () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
g(b, "Sizes", f),
    g(b, "defaultProps", {
        size: f.SMALL,
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
let v = b;
