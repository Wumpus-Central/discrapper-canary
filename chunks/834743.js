n.d(t, { Z: () => f }), n(47120);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    a = n(324262),
    o = n(623624),
    s = n(650774),
    c = n(981631),
    u = n(921944),
    d = n(388032),
    p = n(241626);
class h extends i.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, r.jsx)(a.Z, {
            guild: e,
            onDismissed: () => n(u.L.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? d.NW.string(d.t.hlitVV) : d.NW.string(d.t.XHtaDA),
            cta: d.NW.string(d.t['vqb+Hx']),
            trackingSource: c.PsQ.GUILD_SUBSCRIPTION_NOTICE,
            type: c.vID.GUILD_BOOSTING,
            image: p,
            imageMarginX: 26
        });
    }
    constructor(...e) {
        var t, n;
        super(...e),
            (t = 'handleButtonClick'),
            (n = () => {
                let { guild: e } = this.props;
                (0, o.f)({
                    guildId: e.id,
                    location: {
                        section: c.jXE.CHANNEL_NOTICE,
                        object: c.qAy.SERVER_STATUS_CTA
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
let f = l.ZP.connectStores([s.Z], (e) => {
    let { guild: t } = e;
    return { memberCount: s.Z.getMemberCount(t.id) };
})(h);
