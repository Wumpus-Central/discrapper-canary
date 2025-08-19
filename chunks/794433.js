r.d(t, {
    F: () => x,
    Z: () => g,
}),
    r(539854),
    r(388685);
var a,
    i,
    s = r(951288),
    l = r(647438),
    n = r(120356),
    o = r.n(n),
    C = r(481060),
    d = r(565138),
    p = r(981631),
    c = r(388032),
    h = r(599684);
function u(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = r),
        e
    );
}
let f = Object.freeze({
    SMALL: h.small,
    MEDIUM: h.medium,
    LARGE: h.large,
});
var x =
    (((i = {}).MEMBER = "MEMBER"),
    (i.ROLE = "ROLE"),
    (i.CHANNEL = "CHANNEL"),
    (i.GUILD = "GUILD"),
    (i.USER = "USER"),
    i);
class _ extends (a = l.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: r } = this.props;
        t && !e.isReady && r && this.focus(),
            (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange();
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            r = t - this.previousHeight;
        if (0 !== r) {
            var a, i;
            (this.previousHeight = t), null == (a = (i = this.props).onHeightChange) || a.call(i, r);
        }
    }
    handleKeyDownGrid(e) {
        let {
            selectedRow: t,
            selectedColumn: r,
            sections: a,
            query: i,
            tags: s,
            onSelectionChange: l,
            onSelect: n,
            onRemoveTag: o,
            preventEscapePropagation: C,
        } = this.props;
        if (0 !== a.length) {
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    (null == i || 0 === i.length) &&
                        null != s &&
                        s.length > 0 &&
                        (e.preventDefault(), e.stopPropagation(), null == o || o(s.length - 1));
                    break;
                case p.yXg.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t
                            ? ((t = 0), (r = 0))
                            : ((t += 1) >= a.length && (t = a.length - 1), r >= a[t] && (r = a[t] - 1));
                    break;
                case p.yXg.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        (t -= 1) < 0 ? ((t = 0), (r = 0)) : r >= a[t] && (r = a[t] - 1);
                    break;
                case p.yXg.ARROW_LEFT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (r -= 1) < 0 && ((t -= 1) >= 0 ? (r = a[t] - 1) : t < 0 && ((t = 0), (r = 0)));
                    break;
                case p.yXg.ARROW_RIGHT:
                    e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        (r += 1) >= a[t] && ((r = 0), (t += 1) >= a.length && ((t = a.length - 1), (r = a[t] - 1)));
                    break;
                case p.yXg.ENTER:
                    if (
                        (e.preventDefault(),
                        e.stopPropagation(),
                        -1 === t && (t = 0),
                        -1 === r && (r = 0),
                        t >= a.length || r >= a[t])
                    )
                        return;
                    null != n && n(t, r, e);
                    return;
                case p.yXg.ESCAPE:
                    e.preventDefault(), C && e.stopPropagation(), null != n && n(null, null, e);
                    return;
                default:
                    return;
            }
            null != l && l(t, r);
        }
    }
    handleKeyDownList(e) {
        let {
                sections: t,
                selectedSection: r,
                selectedRow: a,
                onSelect: i,
                onSelectionChange: s,
                query: l,
                tags: n,
                preventEscapePropagation: o,
            } = this.props,
            { current: C } = this.ref;
        if (null != C)
            switch (e.keyCode) {
                case p.yXg.BACKSPACE:
                    if ((null == l || 0 === l.length) && null != n && n.length > 0) {
                        var d, c;
                        e.preventDefault(),
                            e.stopPropagation(),
                            null == (d = (c = this.props).onRemoveTag) || d.call(c, n.length - 1);
                    }
                    break;
                case p.yXg.ARROW_DOWN:
                    e.preventDefault(),
                        e.stopPropagation(),
                        t.length > r && ++a >= t[r] && (++r >= t.length && (r = 0), (a = 0)),
                        null == s || s(r, a);
                    break;
                case p.yXg.ARROW_UP:
                    e.preventDefault(),
                        e.stopPropagation(),
                        --a < 0 && (--r < 0 && (r = t.length - 1), (a = t[r] - 1)),
                        null == s || s(r, a);
                    break;
                case p.yXg.ENTER:
                    e.preventDefault(), e.stopPropagation(), t.length > r && t[r] > a && (null == i || i(r, a, e));
                    break;
                case p.yXg.ESCAPE:
                    e.preventDefault(), o && e.stopPropagation(), null == i || i(null, null, e), C.blur();
            }
    }
    render() {
        let {
                autoFocus: e,
                query: t,
                placeholder: r = c.intl.string(c.t.LzcpeX),
                themeOverride: a,
                disabled: i,
                size: l,
                maxHeight: n,
                tags: p,
                onActivate: f,
                className: x,
                inputProps: _,
                focusAfterReady: g,
            } = this.props,
            j = !1,
            L = [];
        return (
            null != p &&
                p.length > 0 &&
                ("string" == typeof p[0]
                    ? p.forEach((e, t) =>
                          L.push(
                              (0, s.jsxs)(
                                  C.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: h.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, s.jsx)(C.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: h.close,
                                              "aria-label": c.intl.string(c.t.N86XcH),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      )
                    : ((j = !0),
                      p.forEach((e, t) =>
                          L.push(
                              (0, s.jsxs)(
                                  C.eee,
                                  {
                                      className: o()(h.tag, h.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ("MEMBER" === e.type || "USER" === e.type) &&
                                              null != e.avatar &&
                                              (0, s.jsx)(C.qEK, {
                                                  src: e.avatar,
                                                  "aria-hidden": !0,
                                                  size: C.EFr.SIZE_16,
                                              }),
                                          "ROLE" === e.type &&
                                              null != e.color &&
                                              (0, s.jsx)("span", {
                                                  className: h.tagRoleColor,
                                                  style: { backgroundColor: e.color },
                                              }),
                                          "GUILD" === e.type &&
                                              null != e.guild &&
                                              (0, s.jsx)(d.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: d.Z.Sizes.SMOL,
                                              }),
                                          (0, s.jsx)("span", {
                                              className: h.tagLabel,
                                              children: e.label,
                                          }),
                                          (0, s.jsx)(C.Dio, {
                                              size: "md",
                                              color: "currentColor",
                                              className: h.close,
                                              "aria-label": c.intl.string(c.t.N86XcH),
                                          }),
                                      ],
                                  },
                                  t,
                              ),
                          ),
                      ))),
            (0, s.jsx)(C.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, s.jsx)(C.f6W, {
                    theme: a,
                    children: (a) =>
                        (0, s.jsx)("div", {
                            ref: this.containerRef,
                            className: o()(x, h.container, l, a, { [h.disabled]: i }),
                            children: (0, s.jsxs)(C.zJl, {
                                className: h.inner,
                                style: { maxHeight: n },
                                children: [
                                    L,
                                    (0, s.jsx)(
                                        "input",
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    a = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (a = a.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    a.forEach(function (t) {
                                                        u(e, t, r[t]);
                                                    });
                                            }
                                            return e;
                                        })(
                                            {
                                                className: o()(h.input, { [h.richTagInput]: j }),
                                                type: "text",
                                                ref: this.ref,
                                                spellCheck: "false",
                                                placeholder: r,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: i,
                                                "aria-disabled": i,
                                                autoFocus: !g && e,
                                                onMouseDown: f,
                                            },
                                            this.defaultInputProps,
                                            _,
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
            u(this, "defaultInputProps", {
                role: "combobox",
                "aria-haspopup": "listbox",
                "aria-autocomplete": "list",
            }),
            u(this, "ref", l.createRef()),
            u(this, "containerRef", l.createRef()),
            u(this, "previousHeight", 0),
            u(this, "handleKeyDown", (e) => {
                let { onActivate: t, onKeyDown: r, onQueryChange: a, useKeyboardNavigation: i } = this.props;
                null != r && r(e);
                let { current: s } = this.ref;
                if (null == s || null != t) {
                    e.keyCode !== p.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === p.yXg.ESCAPE && null != s.value && "" !== s.value && s.value.length > 0) {
                    (s.value = ""), null != a && a("");
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            u(this, "handleChange", (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            u(this, "handleFocus", (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            u(this, "handleRemoveTag", (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            u(this, "focus", () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            });
    }
}
u(_, "Sizes", f),
    u(_, "defaultProps", {
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
let g = _;
