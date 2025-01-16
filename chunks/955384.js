n.d(t, {
    Z: function () {
        return h;
    }
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(925975),
    a = n(957730),
    s = n(981631),
    o = n(388032),
    c = n(946712);
function d(e, t, n) {
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
function u(e) {
    e.stopPropagation();
}
class h extends l.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: l, channel: r, onCancel: a, children: s, isRefreshEnabled: d } = this.props,
            h = (0, i.jsx)('div', {
                className: c.operations,
                children: o.intl.format(o.t.wDsPXl, {
                    onCancel: () => a(r.id),
                    onSave: this.onClickSave
                })
            });
        return (0, i.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: u,
            children: [
                s({
                    textValue: t,
                    richValue: n,
                    message: l,
                    channel: r,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => h
                }),
                d ? null : h
            ]
        });
    }
    constructor(...e) {
        super(...e),
            d(this, 'node', l.createRef()),
            d(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            d(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: i, onCancel: l, saveMessage: s, validateEdit: o } = this.props;
                return 0 === e.length
                    ? (i(n, t),
                      l(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1
                      }))
                    : o({
                          value: e,
                          channel: n
                      }).then((t) => {
                          let { valid: i } = t;
                          if (!i)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              });
                          let o = (0, r.g)(e, {
                              channel: n,
                              isEdit: !0
                          });
                          (null == o ? void 0 : o.content) != null && (e = o.content);
                          let c = a.ZP.parse(this.props.channel, e);
                          return (
                              c.content !== this.props.message.content && s(this.props.channel.id, this.props.message.id, c),
                              l(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0
                              })
                          );
                      });
            }),
            d(this, 'onChange', (e, t, n) => {
                let { channel: i, onChange: l } = this.props;
                l(i.id, t, n);
            }),
            d(this, 'onKeyDown', (e) => {
                if (e.keyCode === s.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
            });
    }
}
