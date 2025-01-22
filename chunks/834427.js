r.d(n, {
    S: function () {
        return d;
    }
});
var i,
    a = r(47120);
var o = r(200651),
    s = r(192379);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = 'file-input',
    c = (e) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: e ? 'not-allowed' : 'pointer',
        fontSize: 0
    });
class d extends (i = s.Component) {
    render() {
        let { disabled: e, tabIndex: n, className: r, name: i, 'aria-label': a, 'aria-hidden': s, id: l } = this.props;
        if (this.props.embedded)
            return (0, o.jsx)('div', {
                role: 'button',
                style: c(e),
                className: r || u,
                tabIndex: n,
                onKeyDown: e ? void 0 : this.handleNativeKeyDown,
                onClick: e ? void 0 : this.handleNativeClick,
                'aria-disabled': e,
                'aria-label': a,
                'aria-hidden': s || void 0
            });
        {
            let d = '';
            return (
                this.props.filters && (d = this.props.filters.map((e) => e.extensions.map((e) => '.'.concat(e)).join(',')).join(',')),
                (0, o.jsx)('input', {
                    id: l,
                    style: c(e),
                    className: r || u,
                    disabled: e,
                    type: 'file',
                    tabIndex: n,
                    onMouseDown: this.handleBrowserInputMouseDown,
                    onChange: this.props.onChange,
                    multiple: this.props.multiple,
                    accept: d,
                    name: i,
                    'aria-label': a,
                    'aria-hidden': s || void 0,
                    ref: (e) => (this._input = e)
                })
            );
        }
    }
    constructor(...e) {
        super(...e),
            l(this, '_input', null),
            l(this, 'activateUploadDialogue', () => {
                this.props.embedded ? this.handleNativeClick() : this._input && this._input.click();
            }),
            l(this, 'handleNativeClick', () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props);
            }),
            l(this, 'handleNativeKeyDown', (e) => {
                (' ' === e.key || 'Enter' === e.key) && this.handleNativeClick();
            }),
            l(this, 'handleBrowserInputMouseDown', (e) => {
                e.currentTarget.value = null;
            });
    }
}
l(d, 'defaultProps', {
    multiple: !1,
    disabled: !1,
    tabIndex: 0
});
