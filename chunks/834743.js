n(47120);
var i = n(200651),
    r = n(192379),
    l = n(442837),
    a = n(324262),
    s = n(623624),
    o = n(650774),
    c = n(981631),
    d = n(921944),
    u = n(388032),
    h = n(241626);
class m extends r.PureComponent {
    render() {
        let { guild: e, memberCount: t, markAsDismissed: n } = this.props;
        return (0, i.jsx)(a.Z, {
            guild: e,
            onDismissed: () => n(d.L.UNKNOWN),
            onClick: this.handleButtonClick,
            message: null == t || t < 30 ? u.intl.string(u.t.hlitVV) : u.intl.string(u.t.XHtaDA),
            cta: u.intl.string(u.t['vqb+Hx']),
            trackingSource: c.PsQ.GUILD_SUBSCRIPTION_NOTICE,
            type: c.vID.GUILD_BOOSTING,
            image: h,
            imageMarginX: 26
        });
    }
    constructor(...e) {
        var t, n, i;
        super(...e),
            (t = this),
            (n = 'handleButtonClick'),
            (i = () => {
                let { guild: e } = this.props;
                (0, s.f)({
                    guildId: e.id,
                    location: {
                        section: c.jXE.CHANNEL_NOTICE,
                        object: c.qAy.SERVER_STATUS_CTA
                    }
                });
            }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = i);
    }
}
t.Z = l.ZP.connectStores([o.Z], (e) => {
    let { guild: t } = e;
    return { memberCount: o.Z.getMemberCount(t.id) };
})(m);
