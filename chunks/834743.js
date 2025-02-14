n.d(t, { Z: () => p }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(324262),
    s = n(623624),
    o = n(650774),
    d = n(981631),
    c = n(921944),
    u = n(388032),
    h = n(241626);
class m extends l.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, i.jsx)(a.Z, {
            guild: e,
            onDismissed: () => n(c.L.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? u.intl.string(u.t.hlitVV) : u.intl.string(u.t.XHtaDA),
            cta: u.intl.string(u.t['vqb+Hx']),
            trackingSource: d.PsQ.GUILD_SUBSCRIPTION_NOTICE,
            type: d.vID.GUILD_BOOSTING,
            image: h,
            imageMarginX: 26
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleButtonClick'),
            (n = () => {
                let { guild: e } = this.props;
                (0, s.f)({
                    guildId: e.id,
                    location: {
                        section: d.jXE.CHANNEL_NOTICE,
                        object: d.qAy.SERVER_STATUS_CTA
                    }
                });
            }),
            t in this
                ? Object.defineProperty(this, t, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[t] = n);
    }
}
let p = r.ZP.connectStores([o.Z], (e) => {
    let { guild: t } = e;
    return { memberCount: o.Z.getMemberCount(t.id) };
})(m);
