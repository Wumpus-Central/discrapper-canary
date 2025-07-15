(r.d(t, {
    F: () => x,
    Z: () => m
}),
    r(539854),
    r(388685));
var a,
    s,
    i = r(255367),
    n = r(73800),
    l = r(120356),
    o = r.n(l),
    d = r(481060),
    C = r(565138),
    c = r(981631),
    u = r(388032),
    p = r(910788);
function h(e, t, r) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = r),
        e
    );
}
let f = Object.freeze({
    SMALL: p.small,
    MEDIUM: p.medium,
    LARGE: p.large
});
var x = (((s = {}).MEMBER = 'MEMBER'), (s.ROLE = 'ROLE'), (s.CHANNEL = 'CHANNEL'), (s.GUILD = 'GUILD'), (s.USER = 'USER'), s);
class g extends (a = n.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: r } = this.props;
        (t && !e.isReady && r && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange());
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            r = t - this.previousHeight;
        if (0 !== r) {
            var a, s;
            ((this.previousHeight = t), null == (a = (s = this.props).onHeightChange) || a.call(s, r));
        }
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: r, sections: a, query: s, tags: i, onSelectionChange: n, onSelect: l, onRemoveTag: o, preventEscapePropagation: d } = this.props;
        if (0 !== a.length) {
            switch (e.keyCode) {
                case c.yXg.BACKSPACE:
                    (null == s || 0 === s.length) && null != i && i.length > 0 && (e.preventDefault(), e.stopPropagation(), null == o || o(i.length - 1));
                    break;
                case c.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (r = 0)) : ((t += 1) >= a.length && (t = a.length - 1), r >= a[t] && (r = a[t] - 1)));
                    break;
                case c.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), (t -= 1) < 0 ? ((t = 0), (r = 0)) : r >= a[t] && (r = a[t] - 1));
                    break;
                case c.yXg.ARROW_LEFT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (r -= 1) < 0 && ((t -= 1) >= 0 ? (r = a[t] - 1) : t < 0 && ((t = 0), (r = 0))));
                    break;
                case c.yXg.ARROW_RIGHT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (r += 1) >= a[t] && ((r = 0), (t += 1) >= a.length && ((t = a.length - 1), (r = a[t] - 1))));
                    break;
                case c.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === r && (r = 0), t >= a.length || r >= a[t])) return;
                    null != l && l(t, r, e);
                    return;
                case c.yXg.ESCAPE:
                    (e.preventDefault(), d && e.stopPropagation(), null != l && l(null, null, e));
                    return;
                default:
                    return;
            }
            null != n && n(t, r);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: r, selectedRow: a, onSelect: s, onSelectionChange: i, query: n, tags: l, preventEscapePropagation: o } = this.props,
            { current: d } = this.ref;
        if (null != d)
            switch (e.keyCode) {
                case c.yXg.BACKSPACE:
                    if ((null == n || 0 === n.length) && null != l && l.length > 0) {
                        var C, u;
                        (e.preventDefault(), e.stopPropagation(), null == (C = (u = this.props).onRemoveTag) || C.call(u, l.length - 1));
                    }
                    break;
                case c.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), t.length > r && ++a >= t[r] && (++r >= t.length && (r = 0), (a = 0)), null == i || i(r, a));
                    break;
                case c.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), --a < 0 && (--r < 0 && (r = t.length - 1), (a = t[r] - 1)), null == i || i(r, a));
                    break;
                case c.yXg.ENTER:
                    (e.preventDefault(), e.stopPropagation(), t.length > r && t[r] > a && (null == s || s(r, a, e)));
                    break;
                case c.yXg.ESCAPE:
                    (e.preventDefault(), o && e.stopPropagation(), null == s || s(null, null, e), d.blur());
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: r = u.intl.string(u.t.LzcpeX), themeOverride: a, disabled: s, size: n, maxHeight: l, tags: c, onActivate: f, className: x, inputProps: g, focusAfterReady: m } = this.props,
            _ = !1,
            j = [];
        return (
            null != c &&
                c.length > 0 &&
                ('string' == typeof c[0]
                    ? c.forEach((e, t) =>
                          j.push(
                              (0, i.jsxs)(
                                  d.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: p.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(d.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.close,
                                              'aria-label': u.intl.string(u.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((_ = !0),
                      c.forEach((e, t) =>
                          j.push(
                              (0, i.jsxs)(
                                  d.eee,
                                  {
                                      className: o()(p.tag, p.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(d.qEK, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: d.EFr.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)('span', {
                                                  className: p.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, i.jsx)(C.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: C.Z.Sizes.SMOL
                                              }),
                                          (0, i.jsx)('span', {
                                              className: p.tagLabel,
                                              children: e.label
                                          }),
                                          (0, i.jsx)(d.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: p.close,
                                              'aria-label': u.intl.string(u.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, i.jsx)(d.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(d.f6W, {
                    theme: a,
                    children: (a) =>
                        (0, i.jsx)('div', {
                            ref: this.containerRef,
                            className: o()(x, p.container, n, a, { [p.disabled]: s }),
                            children: (0, i.jsxs)(d.zJl, {
                                className: p.inner,
                                style: { maxHeight: l },
                                children: [
                                    j,
                                    (0, i.jsx)(
                                        'input',
                                        (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    a = Object.keys(r);
                                                ('function' == typeof Object.getOwnPropertySymbols &&
                                                    (a = a.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        })
                                                    )),
                                                    a.forEach(function (t) {
                                                        h(e, t, r[t]);
                                                    }));
                                            }
                                            return e;
                                        })(
                                            {
                                                className: o()(p.input, { [p.richTagInput]: _ }),
                                                type: 'text',
                                                ref: this.ref,
                                                spellCheck: 'false',
                                                placeholder: r,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: s,
                                                'aria-disabled': s,
                                                autoFocus: !m && e,
                                                onMouseDown: f
                                            },
                                            this.defaultInputProps,
                                            g
                                        )
                                    )
                                ]
                            })
                        })
                })
            })
        );
    }
    constructor(...e) {
        (super(...e),
            h(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            h(this, 'ref', n.createRef()),
            h(this, 'containerRef', n.createRef()),
            h(this, 'previousHeight', 0),
            h(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: r, onQueryChange: a, useKeyboardNavigation: s } = this.props;
                null != r && r(e);
                let { current: i } = this.ref;
                if (null == i || null != t) {
                    e.keyCode !== c.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === c.yXg.ESCAPE && null != i.value && '' !== i.value && i.value.length > 0) {
                    ((i.value = ''), null != a && a(''));
                    return;
                }
                s && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            h(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            h(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            h(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            h(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            }));
    }
}
(h(g, 'Sizes', f),
    h(g, 'defaultProps', {
        size: f.SMALL,
        query: '',
        sections: [],
        selectedSection: 0,
        selectedRow: -1,
        selectedColumn: -1,
        gridResults: !1,
        disabled: !1,
        autoFocus: !1,
        preventEscapePropagation: !0,
        useKeyboardNavigation: !0
    }));
let m = g;
