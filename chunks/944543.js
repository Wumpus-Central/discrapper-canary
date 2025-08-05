(n.d(t, { Z: () => b }), n(704826), n(35282), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(771340),
    u = n(600164),
    d = n(903223),
    f = n(388032),
    _ = n(190010);
function p(e, t, n) {
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
let h = {
        position: 'bottom',
        autoInvert: !1
    },
    m = (e) => {
        let { region: t, className: n = _.regionSelectName } = e,
            i = t.name.replace(/ \(VIP\)$/, '');
        return (0, r.jsx)('div', {
            className: n,
            children: i
        });
    };
class g extends i.PureComponent {
    render() {
        let { region: e, selected: t } = this.props;
        return (0, r.jsxs)(u.Z, {
            align: u.Z.Align.CENTER,
            className: o()({ selected: t }),
            children: [
                (0, r.jsx)(m, {
                    region: e,
                    className: _.regionSelectName
                }),
                t ? (0, r.jsx)('i', { className: _.check }) : null
            ]
        });
    }
}
class E extends i.PureComponent {
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
        return (0, r.jsx)(l.nsm, {
            className: _.root,
            label: f.intl.string(f.t.w8gMqq),
            options: i,
            value: n,
            onChange: this.handleChangeVoiceRegion,
            renderOption: this.renderOption,
            popoutProps: h,
            popoutClassName: _.regionSelectPopout
        });
    }
    constructor(...e) {
        (super(...e),
            p(this, 'renderOption', (e, t) =>
                (0, r.jsx)(
                    g,
                    {
                        region: e.value,
                        selected: t
                    },
                    e.value.id
                )
            ),
            p(this, 'getSelectedRegion', () => {
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
                          name: f.intl.string(f.t.JEmsam),
                          vip: !1,
                          deprecated: !1,
                          hidden: !1
                      };
            }),
            p(this, 'handleChangeVoiceRegion', (e) => {
                let { value: t } = e,
                    { channelId: n } = this.props.call;
                c.Z.changeCallRegion(n, t.id);
            }));
    }
}
let b = s.ZP.connectStores([d.Z], () => ({ regions: d.Z.getRegions(null) }))(E);
