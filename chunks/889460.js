n.d(t, { A: () => N }), n(321073), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(308528),
    l = n(846293),
    c = n(843472),
    u = n(855687),
    d = n(734057),
    f = n(808728),
    p = n(71393),
    _ = n(576705),
    h = n(994500),
    m = n(711014),
    g = n(287809),
    E = n(652215),
    b = n(985018);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let S = "max_uses",
    I = "User Invite Context Menu",
    T = "context_menu";
function C(e, t) {
    o.A.ensurePrivateChannel(e).then((e) => {
        null != d.A.getChannel(e) && c.A.sendInvite(e, t, T, { source: E.PE1.GUILD_CONTEXT_MENU });
    });
}
function N(e) {
    let { user: t, guildId: n, onAction: o } = e,
        c = (0, a.bG)([g.default], () => g.default.getCurrentUser(), []),
        d = (0, a.yK)([m.Ay, p.A, _.A], () => {
            let e = m.Ay.getFlattenedGuildIds(),
                t = [];
            return (
                e.forEach((e) => {
                    let r = p.A.getGuild(e);
                    null != r && (0, u.K)(_.A, r) && r.id !== n && t.push(r);
                }),
                t
            );
        }, [n]),
        [y, A] = i.useState({});
    function T(e, t) {
        let n = f.Ay.getDefaultChannel(e.id, !0, E.xBc.CREATE_INSTANT_INVITE);
        if (null != n) {
            if ((A(v(O({}, y), { [e.id]: !0 })), !_.A.can(E.xBc.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode))
                return void C(t, e.vanityURLCode);
            l.Ay.createInvite(
                n.id,
                {
                    [S]: 1,
                    unique: !0,
                },
                I,
            ).then((e) => C(t, e.code));
        }
    }
    return (null == c ? void 0 : c.id) === t.id || t.bot || 0 === d.length || h.A.isBlockedOrIgnored(t.id)
        ? null
        : (0, r.jsx)(s.Drp, {
              id: "invite-to-server",
              label: b.intl.string(b.t.Sd8Ixw),
              children: d.map((e) =>
                  y[e.id]
                      ? (0, r.jsx)(
                            s.Drp,
                            {
                                id: e.id,
                                disabled: !0,
                                label: b.intl.string(b.t.PuLLzP),
                            },
                            e.id,
                        )
                      : (0, r.jsx)(
                            s.Drp,
                            {
                                id: e.id,
                                label: e.name,
                                action: () => {
                                    null == o || o(), T(e, t.id);
                                },
                            },
                            e.id,
                        ),
              ),
          });
}
