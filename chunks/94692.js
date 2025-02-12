s.d(e, { Z: () => g }), s(653041), s(47120);
var l = s(200651),
    n = s(192379),
    a = s(442837),
    i = s(481060),
    r = s(325432),
    h = s(391690),
    o = s(424218),
    d = s(998502),
    u = s(388032),
    c = s(154229);
function p(t, e, s) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: s,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (t[e] = s),
        t
    );
}
let I = 'select';
class m extends n.PureComponent {
    fetchAllDirectoryMetadata() {
        let { installationPaths: t } = this.props,
            e = t.map((t) => {
                let { path: e } = t;
                return e;
            }),
            { newInstallationPath: s } = this.state;
        for (let t of (null != s && e.push(s), (e = e.filter((t) => !this.fetchedMetadataPaths.has(t))), (0, r.ec)(e), e)) this.fetchedMetadataPaths.add(t);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(t) {
        this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== t.requiredDiskKB || this.props.installationPathsMetadata !== t.installationPathsMetadata) && this.sendChange(this.props.value);
    }
    getOptions() {
        let { installationPaths: t } = this.props,
            { newInstallationPath: e } = this.state,
            s = t.map((t) => {
                let { path: e, label: s } = t;
                return {
                    value: e,
                    label: this.renderLabel(e, s)
                };
            });
        return (
            null != e &&
                s.push({
                    value: e,
                    label: this.renderLabel(e)
                }),
            s.push({
                value: I,
                label: u.intl.string(u.t['cL/rrq'])
            }),
            s
        );
    }
    hasEnoughDiskSpace(t) {
        let { requiredDiskKB: e, installationPathsMetadata: s } = this.props,
            l = null != s[t] ? s[t].availableKB : null;
        return null == e || null == l || e < l;
    }
    sendChange(t) {
        let { installationPathsMetadata: e, onChange: s } = this.props,
            l = null != e[t] && !1 === e[t].hasPermission;
        s(t, l || !this.hasEnoughDiskSpace(t));
    }
    renderError() {
        let { value: t, installationPathsMetadata: e } = this.props;
        return null != e[t] && !1 === e[t].hasPermission
            ? (0, l.jsx)('div', {
                  className: c.error,
                  children: u.intl.string(u.t.cEUT8P)
              })
            : this.hasEnoughDiskSpace(t)
              ? null
              : (0, l.jsx)('div', {
                    className: c.error,
                    children: u.intl.string(u.t.duXbEx)
                });
    }
    renderLabel(t, e) {
        let { installationPathsMetadata: s } = this.props,
            l = null != e ? e : t;
        return null != s[t] && null != s[t].availableKB
            ? u.intl.formatToPlainString(u.t['Y+M3rq'], {
                  path: l,
                  size: (0, o.BU)(s[t].availableKB, { useKibibytes: !0 })
              })
            : l;
    }
    render() {
        let { value: t, className: e, autoFocus: s } = this.props;
        return (0, l.jsxs)('div', {
            className: e,
            children: [
                (0, l.jsx)(i.vwX, {
                    tag: 'h5',
                    children: u.intl.string(u.t.WTJuNj)
                }),
                (0, l.jsx)(i.q4e, {
                    autoFocus: s,
                    options: this.getOptions(),
                    value: t,
                    onChange: this.handleChange
                }),
                this.renderError()
            ]
        });
    }
    constructor(...t) {
        super(...t),
            p(this, 'state', { newInstallationPath: null }),
            p(this, 'fetchedMetadataPaths', new Set()),
            p(this, 'handleChange', (t) => {
                t === I
                    ? d.ZP.showOpenDialog(['openDirectory']).then((t) => {
                          if (null != t && t.length > 0) {
                              let e = t[0];
                              this.setState({
                                  newInstallationPath:
                                      null !=
                                      this.props.installationPaths.find((t) => {
                                          let { path: s } = t;
                                          return s === e;
                                      })
                                          ? null
                                          : e
                              }),
                                  this.sendChange(e);
                          }
                      })
                    : this.sendChange(t);
            });
    }
}
let g = a.ZP.connectStores([h.Z], () => ({
    installationPaths: h.Z.installationPaths,
    installationPathsMetadata: h.Z.installationPathsMetadata
}))(m);
