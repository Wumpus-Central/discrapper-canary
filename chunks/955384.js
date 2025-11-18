n.d(t, { Z: () => f }), n(388685);
var i = n(54381),
    r = n(473749),
    l = n(911969),
    a = n(925975),
    o = n(957730),
    s = n(981631),
    c = n(295907),
    u = n(388032),
    d = n(287921);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    e.stopPropagation();
}
class f extends r.PureComponent {
    render() {
        let { className: e, textValue: t, richValue: n, message: r, channel: l, onCancel: a, children: o } = this.props,
            s = (0, i.jsx)("div", {
                className: d.operations,
                children: u.intl.format(u.t.wDsPXs, {
                    onCancel: () => a(l.id),
                    onSave: this.onClickSave,
                }),
            });
        return (0, i.jsxs)("div", {
            className: e,
            ref: this.node,
            onContextMenu: h,
            children: [
                o({
                    textValue: t,
                    richValue: n,
                    message: r,
                    channel: l,
                    onChange: this.onChange,
                    onSubmit: this.onSubmit,
                    onKeyDown: this.onKeyDown,
                    renderLeftAccessories: () => s,
                }),
                s,
            ],
        });
    }
    constructor(...e) {
        super(...e),
            p(this, "node", r.createRef()),
            p(this, "onClickSave", () => {
                let { textValue: e } = this.props;
                this.onSubmit(e);
            }),
            p(this, "onSubmit", (e) => {
                let {
                    message: t,
                    channel: n,
                    onConfirmDelete: i,
                    onCancel: r,
                    saveMessage: c,
                    validateEdit: u,
                } = this.props;
                return 0 === e.length
                    ? (i(n, t),
                      r(n.id),
                      Promise.resolve({
                          shouldClear: !1,
                          shouldRefocus: !1,
                      }))
                    : u({
                          value: e,
                          channel: n,
                      }).then((i) => {
                          let { valid: u } = i;
                          if (!u)
                              return Promise.resolve({
                                  shouldClear: !1,
                                  shouldRefocus: !1,
                              });
                          let d = (0, a.g)(e, {
                              channel: n,
                              isEdit: !0,
                          });
                          if (
                              ((null == d ? void 0 : d.content) != null && (e = d.content),
                              t.hasFlag(s.iLy.IS_COMPONENTS_V2) && this.props.channel.type === s.d4z.GUILD_ANNOUNCEMENT)
                          ) {
                              let t = o.ZP.parse(this.props.channel, e),
                                  n = this.props.message.components.filter((e) => e.type === l.re.TEXT_DISPLAY);
                              if (1 === n.length) {
                                  let i = n[0];
                                  e !== i.content && c(this.props.channel.id, this.props.message.id, t);
                              }
                          } else {
                              let t = o.ZP.parse(this.props.channel, e);
                              t.content !== this.props.message.content &&
                                  c(this.props.channel.id, this.props.message.id, t);
                          }
                          return (
                              r(n.id),
                              Promise.resolve({
                                  shouldClear: !0,
                                  shouldRefocus: !0,
                              })
                          );
                      });
            }),
            p(this, "onChange", (e, t, n) => {
                let { channel: i, onChange: r } = this.props;
                r(i.id, t, n);
            }),
            p(this, "onKeyDown", (e) => {
                if (e.key === c.vn.ESCAPE && !e.shiftKey) {
                    let { channel: t, onCancel: n } = this.props;
                    e.preventDefault(), e.stopPropagation(), n(t.id);
                }
            });
    }
}
