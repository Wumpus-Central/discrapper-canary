(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(925975),
    a = n(957730),
    o = n(981631),
    s = n(388032),
    c = n(224079);
function u(e, t, n) {
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
function d(e) {
    e.stopPropagation();
}
class p extends i.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: i, channel: l, onCancel: a, children: o } = this.props,
            u = (0, r.jsx)('div', {
                className: c.operations,
                children: s.intl.format(s.t.wDsPXl, {
                    onCancel: () => a(l.id),
                    onSave: this.onClickSave
                })
            });
        return (0, r.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: d,
            children: [
                o({
                    textValue: t,
                    richValue: n,
                    message: i,
                    channel: l,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => u
                }),
                u
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            u(this, 'node', i.createRef()),
            u(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            u(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: r, onCancel: i, saveMessage: o, validateEdit: s } = this.props;
                return 0 === e.length
                    ? (r(n, t),
                      i(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1
                      }))
                    : s({
                          value: e,
                          channel: n
                      }).then((t) => {
                          let { valid: r } = t;
                          if (!r)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              });
                          let s = (0, l.g)(e, {
                              channel: n,
                              isEdit: !0
                          });
                          (null == s ? void 0 : s.content) != null && (e = s.content);
                          let c = a.ZP.parse(this.props.channel, e);
                          return (
                              c.content !== this.props.message.content && o(this.props.channel.id, this.props.message.id, c),
                              i(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0
                              })
                          );
                      });
            }),
            u(this, 'onChange', (e, t, n) => {
                let { channel: r, onChange: i } = this.props;
                i(r.id, t, n);
            }),
            u(this, 'onKeyDown', (e) => {
                if (e.keyCode === o.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    (e.preventDefault(), e.stopPropagation(), n(t.id));
                }
            }));
    }
}
