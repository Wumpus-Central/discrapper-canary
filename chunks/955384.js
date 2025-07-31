(n.d(t, { Z: () => h }), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(911969),
    a = n(925975),
    o = n(957730),
    s = n(981631),
    c = n(388032),
    u = n(224079);
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
function p(e) {
    e.stopPropagation();
}
class h extends i.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: i, channel: l, onCancel: a, children: o } = this.props,
            s = (0, r.jsx)('div', {
                className: u.operations,
                children: c.intl.format(c.t.wDsPXl, {
                    onCancel: () => a(l.id),
                    onSave: this.onClickSave
                })
            });
        return (0, r.jsxs)('div', {
            className: e,
            ref: this.node,
            onContextMenu: p,
            children: [
                o({
                    textValue: t,
                    richValue: n,
                    message: i,
                    channel: l,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => s
                }),
                s
            ]
        });
    }
    constructor(...e) {
        (super(...e),
            d(this, 'node', i.createRef()),
            d(this, 'onClickSave', () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            d(this, 'onSubmit', (e) => {
                let { message: t, channel: n, onConfirmDelete: r, onCancel: i, saveMessage: c, validateEdit: u } = this.props;
                return 0 === e.length
                    ? (r(n, t),
                      i(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1
                      }))
                    : u({
                          value: e,
                          channel: n
                      }).then((r) => {
                          let { valid: u } = r;
                          if (!u)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1
                              });
                          let d = (0, a.g)(e, {
                              channel: n,
                              isEdit: !0
                          });
                          if (((null == d ? void 0 : d.content) != null && (e = d.content), t.hasFlag(s.iLy.IS_COMPONENTS_V2) && this.props.channel.type === s.d4z.GUILD_ANNOUNCEMENT)) {
                              let t = o.ZP.parse(this.props.channel, e),
                                  n = this.props.message.components.filter((e) => e.type === l.re.TEXT_DISPLAY);
                              if (1 === n.length) {
                                  let r = n[0];
                                  e !== r.content && c(this.props.channel.id, this.props.message.id, t);
                              }
                          } else {
                              let t = o.ZP.parse(this.props.channel, e);
                              t.content !== this.props.message.content && c(this.props.channel.id, this.props.message.id, t);
                          }
                          return (
                              i(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0
                              })
                          );
                      });
            }),
            d(this, 'onChange', (e, t, n) => {
                let { channel: r, onChange: i } = this.props;
                i(r.id, t, n);
            }),
            d(this, 'onKeyDown', (e) => {
                if (e.keyCode === s.yXg.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    (e.preventDefault(), e.stopPropagation(), n(t.id));
                }
            }));
    }
}
