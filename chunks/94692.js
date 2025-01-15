n(653041), n(47120);
var l = n(200651),
    s = n(192379),
    i = n(442837),
    a = n(481060),
    r = n(325432),
    o = n(391690),
    c = n(424218),
    h = n(998502),
    d = n(388032),
    u = n(591010);
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
let m = 'select';
class f extends s.PureComponent {
    fetchAllDirectoryMetadata() {
        let { installationPaths: e } = this.props,
            t = e.map((e) => {
                let { path: t } = e;
                return t;
            }),
            { newInstallationPath: n } = this.state;
        for (let e of (null != n && t.push(n), (t = t.filter((e) => !this.fetchedMetadataPaths.has(e))), (0, r.ec)(t), t)) this.fetchedMetadataPaths.add(e);
    }
    componentDidMount() {
        this.fetchAllDirectoryMetadata();
    }
    componentDidUpdate(e) {
        this.fetchAllDirectoryMetadata(), (this.props.requiredDiskKB !== e.requiredDiskKB || this.props.installationPathsMetadata !== e.installationPathsMetadata) && this.sendChange(this.props.value);
    }
    getOptions() {
        let { installationPaths: e } = this.props,
            { newInstallationPath: t } = this.state,
            n = e.map((e) => {
                let { path: t, label: n } = e;
                return {
                    value: t,
                    label: this.renderLabel(t, n)
                };
            });
        return (
            null != t &&
                n.push({
                    value: t,
                    label: this.renderLabel(t)
                }),
            n.push({
                value: m,
                label: d.intl.string(d.t['cL/rrq'])
            }),
            n
        );
    }
    hasEnoughDiskSpace(e) {
        let { requiredDiskKB: t, installationPathsMetadata: n } = this.props,
            l = null != n[e] ? n[e].availableKB : null;
        return null == t || null == l || t < l;
    }
    sendChange(e) {
        let { installationPathsMetadata: t, onChange: n } = this.props,
            l = null != t[e] && !1 === t[e].hasPermission;
        n(e, l || !this.hasEnoughDiskSpace(e));
    }
    renderError() {
        let { value: e, installationPathsMetadata: t } = this.props;
        return null != t[e] && !1 === t[e].hasPermission
            ? (0, l.jsx)('div', {
                  className: u.error,
                  children: d.intl.string(d.t.cEUT8P)
              })
            : this.hasEnoughDiskSpace(e)
              ? null
              : (0, l.jsx)('div', {
                    className: u.error,
                    children: d.intl.string(d.t.duXbEx)
                });
    }
    renderLabel(e, t) {
        let { installationPathsMetadata: n } = this.props,
            l = null != t ? t : e;
        return null != n[e] && null != n[e].availableKB
            ? d.intl.formatToPlainString(d.t['Y+M3rq'], {
                  path: l,
                  size: (0, c.BU)(n[e].availableKB, { useKibibytes: !0 })
              })
            : l;
    }
    render() {
        let { value: e, className: t, autoFocus: n } = this.props;
        return (0, l.jsxs)('div', {
            className: t,
            children: [
                (0, l.jsx)(a.FormTitle, {
                    tag: 'h5',
                    children: d.intl.string(d.t.WTJuNj)
                }),
                (0, l.jsx)(a.SingleSelect, {
                    autoFocus: n,
                    options: this.getOptions(),
                    value: e,
                    onChange: this.handleChange
                }),
                this.renderError()
            ]
        });
    }
    constructor(...e) {
        super(...e),
            p(this, 'state', { newInstallationPath: null }),
            p(this, 'fetchedMetadataPaths', new Set()),
            p(this, 'handleChange', (e) => {
                e === m
                    ? h.ZP.showOpenDialog(['openDirectory']).then((e) => {
                          if (null != e && e.length > 0) {
                              let t = e[0];
                              this.setState({
                                  newInstallationPath:
                                      null !=
                                      this.props.installationPaths.find((e) => {
                                          let { path: n } = e;
                                          return n === t;
                                      })
                                          ? null
                                          : t
                              }),
                                  this.sendChange(t);
                          }
                      })
                    : this.sendChange(e);
            });
    }
}
t.Z = i.ZP.connectStores([o.Z], () => ({
    installationPaths: o.Z.installationPaths,
    installationPathsMetadata: o.Z.installationPathsMetadata
}))(f);
