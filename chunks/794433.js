(n.d(t, {
    F: () => m,
    Z: () => E
}),
    n(539854),
    n(388685));
var r,
    i = n(255367),
    a = n(73800),
    o = n(120356),
    s = n.n(o),
    l = n(481060),
    c = n(565138),
    u = n(981631),
    d = n(388032),
    f = n(910788);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            }));
    }
    return e;
}
let h = Object.freeze({
    SMALL: f.small,
    MEDIUM: f.medium,
    LARGE: f.large
});
var m = (function (e) {
    return ((e.MEMBER = 'MEMBER'), (e.ROLE = 'ROLE'), (e.CHANNEL = 'CHANNEL'), (e.GUILD = 'GUILD'), (e.USER = 'USER'), e);
})({});
class g extends (r = a.Component) {
    componentDidMount() {
        let e = this.containerRef.current;
        null != e && (this.previousHeight = e.offsetHeight);
    }
    componentDidUpdate(e) {
        let { focusAfterReady: t, isReady: n } = this.props;
        (t && !e.isReady && n && this.focus(), (e.tags !== this.props.tags || e.query !== this.props.query) && this.handleHeightChange());
    }
    handleHeightChange() {
        let e = this.containerRef.current;
        if (null == e) return;
        let t = e.offsetHeight,
            n = t - this.previousHeight;
        if (0 !== n) {
            var r, i;
            ((this.previousHeight = t), null == (r = (i = this.props).onHeightChange) || r.call(i, n));
        }
    }
    handleKeyDownGrid(e) {
        let { selectedRow: t, selectedColumn: n, sections: r, query: i, tags: a, onSelectionChange: o, onSelect: s, onRemoveTag: l, preventEscapePropagation: c } = this.props;
        if (0 !== r.length) {
            switch (e.keyCode) {
                case u.yXg.BACKSPACE:
                    (null == i || 0 === i.length) && null != a && a.length > 0 && (e.preventDefault(), e.stopPropagation(), null == l || l(a.length - 1));
                    break;
                case u.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), -1 === t ? ((t = 0), (n = 0)) : ((t += 1) >= r.length && (t = r.length - 1), n >= r[t] && (n = r[t] - 1)));
                    break;
                case u.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), (t -= 1), t < 0 ? ((t = 0), (n = 0)) : n >= r[t] && (n = r[t] - 1));
                    break;
                case u.yXg.ARROW_LEFT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n -= 1), n < 0 && ((t -= 1) >= 0 ? (n = r[t] - 1) : t < 0 && ((t = 0), (n = 0))));
                    break;
                case u.yXg.ARROW_RIGHT:
                    (e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), (n += 1), n >= r[t] && ((n = 0), (t += 1) >= r.length && ((t = r.length - 1), (n = r[t] - 1))));
                    break;
                case u.yXg.ENTER:
                    if ((e.preventDefault(), e.stopPropagation(), -1 === t && (t = 0), -1 === n && (n = 0), t >= r.length || n >= r[t])) return;
                    null != s && s(t, n, e);
                    return;
                case u.yXg.ESCAPE:
                    (e.preventDefault(), c && e.stopPropagation(), null != s && s(null, null, e));
                    return;
                default:
                    return;
            }
            null != o && o(t, n);
        }
    }
    handleKeyDownList(e) {
        let { sections: t, selectedSection: n, selectedRow: r, onSelect: i, onSelectionChange: a, query: o, tags: s, preventEscapePropagation: l } = this.props,
            { current: c } = this.ref;
        if (null != c)
            switch (e.keyCode) {
                case u.yXg.BACKSPACE:
                    if ((null == o || 0 === o.length) && null != s && s.length > 0) {
                        var d, f;
                        (e.preventDefault(), e.stopPropagation(), null == (d = (f = this.props).onRemoveTag) || d.call(f, s.length - 1));
                    }
                    break;
                case u.yXg.ARROW_DOWN:
                    (e.preventDefault(), e.stopPropagation(), t.length > n && ++r >= t[n] && (++n >= t.length && (n = 0), (r = 0)), null == a || a(n, r));
                    break;
                case u.yXg.ARROW_UP:
                    (e.preventDefault(), e.stopPropagation(), --r < 0 && (--n < 0 && (n = t.length - 1), (r = t[n] - 1)), null == a || a(n, r));
                    break;
                case u.yXg.ENTER:
                    (e.preventDefault(), e.stopPropagation(), t.length > n && t[n] > r && (null == i || i(n, r, e)));
                    break;
                case u.yXg.ESCAPE:
                    (e.preventDefault(), l && e.stopPropagation(), null == i || i(null, null, e), c.blur());
            }
    }
    render() {
        let { autoFocus: e, query: t, placeholder: n = d.intl.string(d.t.LzcpeX), themeOverride: r, disabled: a, size: o, maxHeight: u, tags: _, onActivate: h, className: m, inputProps: g, focusAfterReady: E } = this.props,
            b = !1,
            y = [];
        return (
            null != _ &&
                _.length > 0 &&
                ('string' == typeof _[0]
                    ? _.forEach((e, t) =>
                          y.push(
                              (0, i.jsxs)(
                                  l.eee,
                                  {
                                      focusProps: { offset: 4 },
                                      className: f.tag,
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          e,
                                          (0, i.jsx)(l.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: f.close,
                                              'aria-label': d.intl.string(d.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      )
                    : ((b = !0),
                      _.forEach((e, t) =>
                          y.push(
                              (0, i.jsxs)(
                                  l.eee,
                                  {
                                      className: s()(f.tag, f.richTag),
                                      onClick: this.handleRemoveTag.bind(this, t),
                                      children: [
                                          ('MEMBER' === e.type || 'USER' === e.type) &&
                                              null != e.avatar &&
                                              (0, i.jsx)(l.qEK, {
                                                  src: e.avatar,
                                                  'aria-hidden': !0,
                                                  size: l.EFr.SIZE_16
                                              }),
                                          'ROLE' === e.type &&
                                              null != e.color &&
                                              (0, i.jsx)('span', {
                                                  className: f.tagRoleColor,
                                                  style: { backgroundColor: e.color }
                                              }),
                                          'GUILD' === e.type &&
                                              null != e.guild &&
                                              (0, i.jsx)(c.Z, {
                                                  guild: e.guild,
                                                  active: !0,
                                                  size: c.Z.Sizes.SMOL
                                              }),
                                          (0, i.jsx)('span', {
                                              className: f.tagLabel,
                                              children: e.label
                                          }),
                                          (0, i.jsx)(l.Dio, {
                                              size: 'md',
                                              color: 'currentColor',
                                              className: f.close,
                                              'aria-label': d.intl.string(d.t.N86XcH)
                                          })
                                      ]
                                  },
                                  t
                              )
                          )
                      ))),
            (0, i.jsx)(l.tEY, {
                focusTarget: this.ref,
                ringTarget: this.containerRef,
                children: (0, i.jsx)(l.f6W, {
                    theme: r,
                    children: (r) =>
                        (0, i.jsx)('div', {
                            ref: this.containerRef,
                            className: s()(m, f.container, o, r, { [f.disabled]: a }),
                            children: (0, i.jsxs)(l.zJl, {
                                className: f.inner,
                                style: { maxHeight: u },
                                children: [
                                    y,
                                    (0, i.jsx)(
                                        'input',
                                        p(
                                            {
                                                className: s()(f.input, { [f.richTagInput]: b }),
                                                type: 'text',
                                                ref: this.ref,
                                                spellCheck: 'false',
                                                placeholder: n,
                                                value: t,
                                                onChange: this.handleChange,
                                                onKeyDown: this.handleKeyDown,
                                                onFocus: this.handleFocus,
                                                disabled: a,
                                                'aria-disabled': a,
                                                autoFocus: !E && e,
                                                onMouseDown: h
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
            _(this, 'defaultInputProps', {
                role: 'combobox',
                'aria-haspopup': 'listbox',
                'aria-autocomplete': 'list'
            }),
            _(this, 'ref', a.createRef()),
            _(this, 'containerRef', a.createRef()),
            _(this, 'previousHeight', 0),
            _(this, 'handleKeyDown', (e) => {
                let { onActivate: t, onKeyDown: n, onQueryChange: r, useKeyboardNavigation: i } = this.props;
                null != n && n(e);
                let { current: a } = this.ref;
                if (null == a || null != t) {
                    e.keyCode !== u.yXg.TAB && null != t && t(e);
                    return;
                }
                if (e.keyCode === u.yXg.ESCAPE && null != a.value && '' !== a.value && a.value.length > 0) {
                    ((a.value = ''), null != r && r(''));
                    return;
                }
                i && (this.props.gridResults ? this.handleKeyDownGrid(e) : this.handleKeyDownList(e));
            }),
            _(this, 'handleChange', (e) => {
                let { onQueryChange: t } = this.props;
                null != t && t(e.currentTarget.value);
            }),
            _(this, 'handleFocus', (e) => {
                let { onFocus: t } = this.props;
                null != t && t(e);
            }),
            _(this, 'handleRemoveTag', (e) => {
                let { onRemoveTag: t } = this.props;
                null == t || t(e);
            }),
            _(this, 'focus', () => {
                let { current: e } = this.ref;
                null != e && e.focus();
            }));
    }
}
(_(g, 'Sizes', h),
    _(g, 'defaultProps', {
        size: h.SMALL,
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
let E = g;
