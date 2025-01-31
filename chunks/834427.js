n.d(t, { S: () => u }), n(47120);
var i,
    r = n(200651),
    a = n(192379);
function s(e, t, n) {
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
let o = 'file-input',
    l = (e) => ({
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0,
        cursor: e ? 'not-allowed' : 'pointer',
        fontSize: 0
    });
class u extends (i = a.Component) {
    render() {
        let { disabled: e, tabIndex: t, className: n, name: i, 'aria-label': a, 'aria-hidden': s, id: u } = this.props;
        if (this.props.embedded)
            return (0, r.jsx)('div', {
                role: 'button',
                style: l(e),
                className: n || o,
                tabIndex: t,
                onKeyDown: e ? void 0 : this.handleNativeKeyDown,
                onClick: e ? void 0 : this.handleNativeClick,
                'aria-disabled': e,
                'aria-label': a,
                'aria-hidden': s || void 0
            });
        {
            let c = '';
            return (
                this.props.filters && (c = this.props.filters.map((e) => e.extensions.map((e) => '.'.concat(e)).join(',')).join(',')),
                (0, r.jsx)('input', {
                    id: u,
                    style: l(e),
                    className: n || o,
                    disabled: e,
                    type: 'file',
                    tabIndex: t,
                    onMouseDown: this.handleBrowserInputMouseDown,
                    onChange: this.props.onChange,
                    multiple: this.props.multiple,
                    accept: c,
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
            s(this, '_input', null),
            s(this, 'activateUploadDialogue', () => {
                this.props.embedded ? this.handleNativeClick() : this._input && this._input.click();
            }),
            s(this, 'handleNativeClick', () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props);
            }),
            s(this, 'handleNativeKeyDown', (e) => {
                (' ' === e.key || 'Enter' === e.key) && this.handleNativeClick();
            }),
            s(this, 'handleBrowserInputMouseDown', (e) => {
                e.currentTarget.value = null;
            });
    }
}
s(u, 'defaultProps', {
    multiple: !1,
    disabled: !1,
    tabIndex: 0
});
