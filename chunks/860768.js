n.d(t, { A: () => _ });
var i = n(627968),
    r = n(64700),
    a = n(192308),
    l = n(843472),
    s = n(309010),
    o = n(926466),
    d = n(652215),
    u = n(49999),
    c = n(985018),
    A = n(988726);
class h extends r.PureComponent {
    handleInvite = () => {
        let { guild: e } = this.props;
        (0, a.openModalLazy)(async () => {
            let { default: t } = await Promise.all([n.e("28136"), n.e("43600"), n.e("42738")]).then(n.bind(n, 234355));
            return (n) => (0, i.jsx)(t, { ...n, guild: e, source: d.PE1.INVITE_NOTICE });
        });
    };
    handleClose = () => {
        let e = s.A.getChannelId(),
            t = c.intl.formatToPlainString(c.t.DEn7nu, { invitePeople: c.intl.string(c.t.Sd8Ixw) });
        this.props.markAsDismissed(u.i.UNKNOWN), null != e && l.A.sendBotMessage(e, t);
    };
    render() {
        let e = `${c.intl.string(c.t.VWqWZQ)}
${c.intl.string(c.t["0Lgb/K"])}`;
        return (0, i.jsx)(o.A, {
            guild: this.props.guild,
            onDismissed: this.handleClose,
            onClick: this.handleInvite,
            message: e,
            cta: c.intl.string(c.t.Sd8Ixw),
            trackingSource: d.kZU.INVITE_NOTICE,
            type: d.n5X.INVITE,
            image: A,
            imageMarginX: 46,
        });
    }
}
let _ = h;
