n.d(t, { Z: () => m }), n(47120);
var r = n(147913),
    i = n(430824),
    o = n(496675),
    a = n(914010),
    s = n(713081),
    l = n(50101),
    c = n(639777);
function u(e, t, n) {
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
let d = 86400000,
    f = 3600000,
    _ = {},
    p = {};
class h extends r.Z {
    handleSelectedGuildChange() {
        let e = a.Z.getGuildId();
        if (null == e) return;
        let t = i.Z.getGuild(e),
            n = (0, l.gV)(t, 'GuildPowerupsManager');
        if (null == t || !n || !(0, c.D)(o.Z, t)) return;
        let r = _[e];
        (null == r || r + d < Date.now()) && ((_[e] = Date.now()), (0, s.Sn)(e));
        let u = p[e];
        (null == u || u + f < Date.now()) && ((p[e] = Date.now()), (0, s.Fm)(e));
    }
    handleReset() {
        (_ = {}), (p = {});
    }
    constructor(...e) {
        super(...e), u(this, 'stores', new Map().set(a.Z, this.handleSelectedGuildChange)), u(this, 'actions', { LOGOUT: this.handleReset });
    }
}
let m = new h();
