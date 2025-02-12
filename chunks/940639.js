n.d(t, { Z: () => v }), n(653041), n(47120), n(724458);
var i,
    l = n(200651),
    s = n(192379),
    a = n(120356),
    r = n.n(a),
    o = n(442837),
    d = n(481060),
    c = n(607070),
    u = n(251625),
    h = n(226951),
    m = n(981631),
    g = n(388032),
    p = n(769504);
function x(e, t, n) {
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
class f extends (i = s.Component) {
    getSelectedSection(e) {
        let { selectedSection: t } = this.state;
        if (null != t) return t;
        for (let t = 0; t < e.length; t++) if (e[t].length > 0) return t;
        return 0;
    }
    componentDidMount() {
        this.focus();
    }
    render() {
        let { position: e } = this.props,
            t = this.getRows(),
            n = [];
        if (this.isEmpty()) n.push(1);
        else for (let e of t) n.push(e.length);
        return (0, l.jsxs)(d.VqE, {
            className: r()(p.container, 'bottom' === e ? p.positionBottom : p.positionTop),
            'aria-label': this.props['aria-label'],
            children: [
                (0, l.jsx)('div', { className: p.autocompleteShadow }),
                (0, l.jsx)('div', {
                    className: p.autocompleteArrowWrapper,
                    children: (0, l.jsx)('div', { className: p.autocompleteArrow })
                }),
                (0, l.jsxs)('header', {
                    className: p.header,
                    children: [
                        (0, l.jsx)('div', { className: p.autocompleteHeaderBackground }),
                        (0, l.jsx)('div', {
                            className: p.headerText,
                            children: this.props.label
                        }),
                        (0, l.jsx)('input', {
                            type: 'text',
                            className: p.input,
                            placeholder: this.props.placeholder,
                            ref: this.inputRef,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown
                        })
                    ]
                }),
                (0, l.jsx)('section', {
                    className: p.sectionTag,
                    children: (0, l.jsx)(d.aVo, {
                        className: p.autocompleteScroller,
                        fade: !0,
                        sections: n,
                        sectionHeight: this.getSectionHeight,
                        rowHeight: 40,
                        renderRow: this.renderRow,
                        renderSection: this.renderSection
                    })
                })
            ]
        });
    }
    focus() {
        null != this.inputRef.current && this.inputRef.current.focus();
    }
    constructor(...e) {
        super(...e),
            x(this, 'inputRef', s.createRef()),
            x(this, 'state', {
                query: null,
                selectedSection: null,
                selectedRow: 0
            }),
            x(
                this,
                'memoizedGetRows',
                (0, u.oH)((e, t, n) => {
                    let i = RegExp('^'.concat(h.Z.escape(null != e ? e.trim() : '')), 'i'),
                        l = (e) => i.test(e);
                    return n.map((e, n) => t(l, n));
                })
            ),
            x(this, 'getRows', () => {
                let { onFilterResults: e, sections: t } = this.props,
                    { query: n } = this.state;
                return this.memoizedGetRows(n, e, t);
            }),
            x(this, 'handleChange', (e) => {
                var t, n;
                let i = e.target.value;
                null === (t = (n = this.props).onQueryChange) || void 0 === t || t.call(n, i),
                    this.setState({
                        query: i,
                        selectedSection: null,
                        selectedRow: 0
                    });
            }),
            x(this, 'handleMouseEnter', (e, t) => {
                this.setState({
                    selectedSection: e,
                    selectedRow: t
                });
            }),
            x(this, 'handleClick', (e, t) => {
                let n = this.getRows();
                this.props.onSelect(n[e][t], e), this.props.onClose();
            }),
            x(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t } = this.props,
                    { selectedRow: n } = this.state,
                    i = this.getRows(),
                    l = this.getSelectedSection(i);
                switch (e.keyCode) {
                    case m.yXg.TAB:
                        if (t) break;
                    case m.yXg.ARROW_DOWN:
                        e.preventDefault(),
                            this.props.sections.length > l && ++n >= i[l].length && (++l >= this.props.sections.length && (l = 0), (n = 0)),
                            this.setState({
                                selectedSection: l,
                                selectedRow: n
                            });
                        break;
                    case m.yXg.ARROW_UP:
                        e.preventDefault(),
                            --n < 0 && (--l < 0 && (l = this.props.sections.length - 1), (n = i[l].length - 1)),
                            this.setState({
                                selectedSection: l,
                                selectedRow: n
                            });
                        break;
                    case m.yXg.ENTER:
                        e.preventDefault(), this.props.sections.length > l && i[l].length > n && (this.props.onSelect(i[l][n], l), this.props.onClose());
                        break;
                    case m.yXg.ESCAPE:
                        e.preventDefault(), this.props.onSelect(null, null), this.props.onClose();
                }
            }),
            x(this, 'isEmpty', () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)),
            x(this, 'getSectionHeight', (e) => {
                let t = this.props.sections[e];
                return this.isEmpty() || null == t ? 0 : 44;
            }),
            x(this, 'renderSection', (e) => {
                let { section: t } = e,
                    n = this.props.sections[t];
                return this.isEmpty() || null == n
                    ? null
                    : (0, l.jsx)(
                          'div',
                          {
                              className: p.section,
                              children: n
                          },
                          t
                      );
            }),
            x(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: i } = e,
                    { selectedRow: s } = this.state;
                if (this.isEmpty())
                    return (0, l.jsxs)(
                        'div',
                        {
                            className: p.empty,
                            children: [
                                (0, l.jsx)('p', {
                                    className: p.noResultsHeader,
                                    children: g.intl.string(g.t['4o4z3d'])
                                }),
                                (0, l.jsx)('p', { children: g.intl.string(g.t.QwSXv7) })
                            ]
                        },
                        'empty'
                    );
                let a = this.getRows(),
                    o = this.getSelectedSection(a),
                    c = null === (t = a[n]) || void 0 === t ? void 0 : t[i];
                return (0, l.jsx)(
                    d.P3F,
                    {
                        onClick: this.handleClick.bind(this, n, i),
                        onMouseEnter: this.handleMouseEnter.bind(this, n, i),
                        className: r()(p.row, { [p.selected]: o === n && s === i }),
                        children: (0, l.jsx)('div', {
                            className: p.rowInner,
                            children: this.props.onRenderResult(c, n)
                        })
                    },
                    ''.concat(n, '-').concat(i)
                );
            });
    }
}
x(f, 'defaultProps', { sections: [null] });
let v = o.ZP.connectStores([c.Z], () => ({ keyboardModeEnabled: c.Z.keyboardModeEnabled }))(f);
