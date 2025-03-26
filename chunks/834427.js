n.d(t, { S: () => c }), n(47120);
var r,
    i = n(200651),
    o = n(192379);
function a(e, t, n) {
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
let s = 'file-input',
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
class c extends (r = o.Component) {
    render() {
        let { disabled: e, tabIndex: t, className: n, name: r, 'aria-label': o, 'aria-hidden': a, id: c } = this.props,
            u = '';
        return (
            this.props.filters && (u = this.props.filters.map((e) => e.extensions.map((e) => '.'.concat(e)).join(',')).join(',')),
            (0, i.jsx)('input', {
                id: c,
                style: l(e),
                className: n || s,
                disabled: e,
                type: 'file',
                tabIndex: t,
                onMouseDown: this.handleBrowserInputMouseDown,
                onChange: this.props.onChange,
                multiple: this.props.multiple,
                accept: u,
                name: r,
                'aria-label': o,
                'aria-hidden': a || void 0,
                ref: (e) => {
                    this._input = e;
                }
            })
        );
    }
    constructor(...e) {
        super(...e),
            a(this, '_input', null),
            a(this, 'activateUploadDialogue', () => {
                this._input && this._input.click();
            }),
            a(this, 'handleNativeClick', () => {
                this.props.handleNativeClick && this.props.handleNativeClick(this.props);
            }),
            a(this, 'handleNativeKeyDown', (e) => {
                (' ' === e.key || 'Enter' === e.key) && this.handleNativeClick();
            }),
            a(this, 'handleBrowserInputMouseDown', (e) => {
                e.currentTarget.value = null;
            });
    }
}
a(c, 'defaultProps', {
    multiple: !1,
    disabled: !1,
    tabIndex: 0
});
