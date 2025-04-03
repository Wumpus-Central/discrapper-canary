n.d(t, { Z: () => C }), n(757143), n(301563), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(771340),
    u = n(600164),
    d = n(903223),
    p = n(388032),
    h = n(190010);
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
let m = {
        position: 'bottom',
        autoInvert: !1
    },
    g = (e) => {
        let { region: t, className: n = h.regionSelectName } = e,
            i = t.name.replace(/ \(VIP\)$/, '');
        return (0, r.jsx)('div', {
            className: n,
            children: i
        });
    };
class b extends i.PureComponent {
    render() {
        let { region: e, selected: t } = this.props;
        return (0, r.jsxs)(u.Z, {
            align: u.Z.Align.CENTER,
            className: o()({ selected: t }),
            children: [
                (0, r.jsx)(g, {
                    region: e,
                    className: h.regionSelectName
                }),
                t ? (0, r.jsx)('i', { className: h.check }) : null
            ]
        });
    }
}
class _ extends i.PureComponent {
    componentDidMount() {
        null == this.props.regions && c.Z.fetchRegions(null);
    }
    render() {
        let { regions: e } = this.props;
        if (null == e) return null;
        let t = this.getSelectedRegion(),
            n = {
                label: t.name,
                value: t
            },
            i = e
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e,
                    key: e.id
                }));
        return (0, r.jsx)(s.nsm, {
            className: h.root,
            label: p.NW.string(p.t.w8gMqq),
            options: i,
            value: n,
            onChange: this.handleChangeVoiceRegion,
            renderOption: this.renderOption,
            popoutProps: m,
            popoutClassName: h.regionSelectPopout
        });
    }
    constructor(...e) {
        super(...e),
            f(this, 'renderOption', (e, t) =>
                (0, r.jsx)(
                    b,
                    {
                        region: e.value,
                        selected: t
                    },
                    e.value.id
                )
            ),
            f(this, 'getSelectedRegion', () => {
                var e;
                let { regions: t, call: n } = this.props;
                return n.regionUpdated && null != t && null != n.region
                    ? null !=
                      (e = t.find((e) => {
                          let { id: t } = e;
                          return t === n.region;
                      }))
                        ? e
                        : {
                              name: n.region,
                              id: n.region
                          }
                    : {
                          id: 'automatic',
                          name: p.NW.string(p.t.JEmsam),
                          vip: !1,
                          deprecated: !1,
                          hidden: !1
                      };
            }),
            f(this, 'handleChangeVoiceRegion', (e) => {
                let { value: t } = e,
                    { channelId: n } = this.props.call;
                c.Z.changeCallRegion(n, t.id);
            });
    }
}
let C = a.ZP.connectStores([d.Z], () => ({ regions: d.Z.getRegions(null) }))(_);
