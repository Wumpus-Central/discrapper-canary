n.d(t, { Z: () => j }), n(653041), n(47120), n(474991), n(398202), n(301563), n(566702);
var r,
    i = n(200651),
    l = n(192379),
    s = n(120356),
    a = n.n(s),
    o = n(442837),
    c = n(481060),
    d = n(607070),
    u = n(251625),
    h = n(226951),
    g = n(981631),
    m = n(388032),
    p = n(92304);
function f(e, t, n) {
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
class x extends (r = l.Component) {
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
        return (0, i.jsxs)(c.VqE, {
            className: a()(p.container, 'bottom' === e ? p.positionBottom : p.positionTop),
            'aria-label': this.props['aria-label'],
            children: [
                (0, i.jsx)('div', { className: p.autocompleteShadow }),
                (0, i.jsx)('div', {
                    className: p.autocompleteArrowWrapper,
                    children: (0, i.jsx)('div', { className: p.autocompleteArrow })
                }),
                (0, i.jsxs)('header', {
                    className: p.header,
                    children: [
                        (0, i.jsx)('div', { className: p.autocompleteHeaderBackground }),
                        (0, i.jsx)('div', {
                            className: p.headerText,
                            children: this.props.label
                        }),
                        (0, i.jsx)('input', {
                            type: 'text',
                            className: p.input,
                            placeholder: this.props.placeholder,
                            ref: this.inputRef,
                            onChange: this.handleChange,
                            onKeyDown: this.handleKeyDown
                        })
                    ]
                }),
                (0, i.jsx)('section', {
                    className: p.sectionTag,
                    children: (0, i.jsx)(c.aVo, {
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
            f(this, 'inputRef', l.createRef()),
            f(this, 'state', {
                query: null,
                selectedSection: null,
                selectedRow: 0
            }),
            f(
                this,
                'memoizedGetRows',
                (0, u.oH)((e, t, n) => {
                    let r = RegExp('^'.concat(h.Z.escape(null != e ? e.trim() : '')), 'i'),
                        i = (e) => r.test(e);
                    return n.map((e, n) => t(i, n));
                })
            ),
            f(this, 'getRows', () => {
                let { onFilterResults: e, sections: t } = this.props,
                    { query: n } = this.state;
                return this.memoizedGetRows(n, e, t);
            }),
            f(this, 'handleChange', (e) => {
                var t, n;
                let r = e.target.value;
                null == (t = (n = this.props).onQueryChange) || t.call(n, r),
                    this.setState({
                        query: r,
                        selectedSection: null,
                        selectedRow: 0
                    });
            }),
            f(this, 'handleMouseEnter', (e, t) => {
                this.setState({
                    selectedSection: e,
                    selectedRow: t
                });
            }),
            f(this, 'handleClick', (e, t) => {
                let n = this.getRows();
                this.props.onSelect(n[e][t], e), this.props.onClose();
            }),
            f(this, 'handleKeyDown', (e) => {
                let { keyboardModeEnabled: t } = this.props,
                    { selectedRow: n } = this.state,
                    r = this.getRows(),
                    i = this.getSelectedSection(r);
                switch (e.keyCode) {
                    case g.yXg.TAB:
                        if (t) break;
                    case g.yXg.ARROW_DOWN:
                        e.preventDefault(),
                            this.props.sections.length > i && ++n >= r[i].length && (++i >= this.props.sections.length && (i = 0), (n = 0)),
                            this.setState({
                                selectedSection: i,
                                selectedRow: n
                            });
                        break;
                    case g.yXg.ARROW_UP:
                        e.preventDefault(),
                            --n < 0 && (--i < 0 && (i = this.props.sections.length - 1), (n = r[i].length - 1)),
                            this.setState({
                                selectedSection: i,
                                selectedRow: n
                            });
                        break;
                    case g.yXg.ENTER:
                        e.preventDefault(), this.props.sections.length > i && r[i].length > n && (this.props.onSelect(r[i][n], i), this.props.onClose());
                        break;
                    case g.yXg.ESCAPE:
                        e.preventDefault(), this.props.onSelect(null, null), this.props.onClose();
                }
            }),
            f(this, 'isEmpty', () => 0 === this.getRows().reduce((e, t) => e + t.length, 0)),
            f(this, 'getSectionHeight', (e) => {
                let t = this.props.sections[e];
                return this.isEmpty() || null == t ? 0 : 44;
            }),
            f(this, 'renderSection', (e) => {
                let { section: t } = e,
                    n = this.props.sections[t];
                return this.isEmpty() || null == n
                    ? null
                    : (0, i.jsx)(
                          'div',
                          {
                              className: p.section,
                              children: n
                          },
                          t
                      );
            }),
            f(this, 'renderRow', (e) => {
                var t;
                let { section: n, row: r } = e,
                    { selectedRow: l } = this.state;
                if (this.isEmpty())
                    return (0, i.jsxs)(
                        'div',
                        {
                            className: p.empty,
                            children: [
                                (0, i.jsx)('p', {
                                    className: p.noResultsHeader,
                                    children: m.NW.string(m.t['4o4z3d'])
                                }),
                                (0, i.jsx)('p', { children: m.NW.string(m.t.QwSXv7) })
                            ]
                        },
                        'empty'
                    );
                let s = this.getRows(),
                    o = this.getSelectedSection(s),
                    d = null == (t = s[n]) ? void 0 : t[r];
                return (0, i.jsx)(
                    c.P3F,
                    {
                        onClick: this.handleClick.bind(this, n, r),
                        onMouseEnter: this.handleMouseEnter.bind(this, n, r),
                        className: a()(p.row, { [p.selected]: o === n && l === r }),
                        children: (0, i.jsx)('div', {
                            className: p.rowInner,
                            children: this.props.onRenderResult(d, n)
                        })
                    },
                    ''.concat(n, '-').concat(r)
                );
            });
    }
}
f(x, 'defaultProps', { sections: [null] });
let j = o.ZP.connectStores([d.Z], () => ({ keyboardModeEnabled: d.Z.keyboardModeEnabled }))(x);
