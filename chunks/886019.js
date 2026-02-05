"use strict";
n.d(t, { Au: () => h, hy: () => f, vt: () => p });
var r = n(492917),
    i = n(358957),
    a = n(708455),
    s = n(652215),
    o = n(985018),
    l = n(628580),
    u = n(610263);
let c = () => ({
        [a.Kk.BRB]: { title: o.intl.string(o.t.fFTJTI), icon: u },
        [a.Kk.CHILLING]: { title: o.intl.string(o.t.vybY9c), icon: r.uPL },
        [a.Kk.GAMING]: { title: o.intl.string(o.t.wvWdTV), icon: r.Zbm },
        [a.Kk.WATCHING]: { title: o.intl.string(o.t.s8xFaG), icon: l },
        [a.Kk.FOCUSING]: { title: o.intl.string(o.t.D5eCTx), icon: r.IDW },
    }),
    d = () => ({
        [a.Kk.BRB]: { title: o.intl.string(o.t.fFTJTI), emoji: { id: void 0, name: "\uD83E\uDDFB" } },
        [a.Kk.CHILLING]: { title: o.intl.string(o.t.vybY9c), emoji: { id: void 0, name: "\uD83C\uDF68" } },
        [a.Kk.GAMING]: { title: o.intl.string(o.t.wvWdTV), emoji: { id: void 0, name: "⚔️" } },
        [a.Kk.WATCHING]: { title: o.intl.string(o.t.s8xFaG), emoji: { id: void 0, name: "\uD83C\uDF7F" } },
        [a.Kk.FOCUSING]: { title: o.intl.string(o.t.D5eCTx), emoji: { id: void 0, name: "\uD83E\uDDE0" } },
    }),
    _ = () => ({
        ...d(),
        [a.Kk.CHILLING]: { title: o.intl.string(o.t.IeolFa), emoji: { id: void 0, name: "\uD83D\uDCAD" } },
    }),
    f = (e) => {
        switch (e) {
            case "illocons":
                return c();
            case "twemoji":
            default:
                return d();
            case "twemojimild":
                return _();
        }
    },
    p = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        if (t?.type !== s.$pd.HANG_STATUS || t?.state == null) return null;
        let r = (0, i.e)(e, t.state),
            o = r[0];
        if (o === a.Kk.CUSTOM) return null;
        let l = f(r.length > 1 ? r[1] : n);
        return o in l ? l[o] : null;
    },
    h = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "twemoji";
        return t?.type !== s.$pd.HANG_STATUS || t?.state == null
            ? null
            : (0, i.e)(e, t.state)[0] === a.Kk.CUSTOM
              ? t?.details
              : p(e, t, n)?.title;
    };
