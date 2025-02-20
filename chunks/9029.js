n.d(t, { Z: () => c });
var r = n(481060),
    i = n(570140),
    l = n(317770),
    o = n(507294),
    a = n(458034);
class s extends l.Z {
    _initialize() {
        i.Z.subscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    _terminate() {
        i.Z.unsubscribe('GUILD_ROLE_CONNECTIONS_MODAL_SHOW', this.handleShow);
    }
    handleShow(e) {
        let { role: t, guildId: n } = e;
        if (!(0, r.nfh)('GUILD_ROLE_CONNECTIONS_MODAL_KEY')) {
            var i;
            null != t && (null === (i = t.tags) || void 0 === i ? void 0 : i.guild_connections) === null ? (0, o.g)(t, n) : (0, a.Am)(n);
        }
    }
}
let c = new s();
