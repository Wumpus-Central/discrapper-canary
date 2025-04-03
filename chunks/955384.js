n.d(t, { Z: () => p }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(925975),
    o = n(957730),
    a = n(981631),
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
        let { className: e, textValue: t, richValue: n, message: i, channel: l, onCancel: o, children: a, isRefreshEnabled: u } = this.props,
            p = (0, r.jsx)('div', {
                className: c.operations,
                children: s.NW.format(s.t.wDsPXl, {
                    onCancel: () => o(l.id),
                    onSave: this.onClickSave
                })
            });
        return (0, r.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: d,
            children: [
                a({
                    textValue: t,
                    richValue: n,
                    message: i,
                    channel: l,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => p
                }),
                u ? null : p
            ]
        });
    }
    constructor(...e) {
        super(...e),
            u(this, 'node', i.createRef()),
            u(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            u(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: r, onCancel: i, saveMessage: a, validateEdit: s } = this.props;
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
                          let c = o.ZP.parse(this.props.channel, e);
                          return (
                              c.content !== this.props.message.content && a(this.props.channel.id, this.props.message.id, c),
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
                if (e.keyCode === a.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
            });
    }
}
