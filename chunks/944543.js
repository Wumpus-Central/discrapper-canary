n(757143), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    c = n(771340),
    d = n(600164),
    u = n(903223),
    h = n(388032),
    p = n(219249);
function m(e, t, n) {
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
let f = {
        position: 'bottom',
        autoInvert: !1
    },
    g = (e) => {
        let { region: t, className: n = p.regionSelectName } = e,
            l = t.name.replace(/ \(VIP\)$/, '');
        return (0, i.jsx)('div', {
            className: n,
            children: l
        });
    };
class C extends l.PureComponent {
    render() {
        let { region: e, selected: t } = this.props;
        return (0, i.jsxs)(d.Z, {
            align: d.Z.Align.CENTER,
            className: a()({ selected: t }),
            children: [
                (0, i.jsx)(g, {
                    region: e,
                    className: p.regionSelectName
                }),
                t ? (0, i.jsx)('i', { className: p.check }) : null
            ]
        });
    }
}
class x extends l.PureComponent {
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
            l = e
                .filter((e) => !e.deprecated && !e.hidden)
                .map((e) => ({
                    label: e.name,
                    value: e,
                    key: e.id
                }));
        return (0, i.jsx)(o.QuickSelect, {
            label: h.intl.string(h.t.w8gMqq),
            options: l,
            value: n,
            onChange: this.handleChangeVoiceRegion,
            renderOption: this.renderOption,
            popoutProps: f,
            popoutClassName: p.regionSelectPopout
        });
    }
    constructor(...e) {
        super(...e),
            m(this, 'renderOption', (e, t) =>
                (0, i.jsx)(
                    C,
                    {
                        region: e.value,
                        selected: t
                    },
                    e.value.id
                )
            ),
            m(this, 'getSelectedRegion', () => {
                var e;
                let { regions: t, call: n } = this.props;
                return n.regionUpdated && null != t && null != n.region
                    ? null !==
                          (e = t.find((e) => {
                              let { id: t } = e;
                              return t === n.region;
                          })) && void 0 !== e
                        ? e
                        : {
                              name: n.region,
                              id: n.region
                          }
                    : {
                          id: 'automatic',
                          name: h.intl.string(h.t.JEmsam),
                          vip: !1,
                          deprecated: !1,
                          hidden: !1
                      };
            }),
            m(this, 'handleChangeVoiceRegion', (e) => {
                let { value: t } = e,
                    { channelId: n } = this.props.call;
                c.Z.changeCallRegion(n, t.id);
            });
    }
}
t.Z = s.ZP.connectStores([u.Z], () => ({ regions: u.Z.getRegions(null) }))(x);
