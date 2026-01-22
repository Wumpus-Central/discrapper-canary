n.d(t, {
    A: () => g,
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    a = n(652793),
    s = n(855725),
    o = n(976860),
    c = n(309010),
    u = n(64071),
    d = n(652215),
    f = n(985018);

function p(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = [
        {
            key: "JOIN_SERVERS",
            renderIcon: (e) =>
                (0, r.jsx)(i.QGJ, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            getName: () => f.intl.string(f.t.K50GHd),
            handler: (e, t) => (0, o.uh)(e.id, t.id),
        },
        {
            key: "ADD_SERVERS",
            renderIcon: (e) =>
                (0, r.jsx)(i.j96, {
                    size: "md",
                    color: "currentColor",
                    className: e,
                }),
            getName: () => f.intl.string(f.t.emRpdS),
            handler: (e, t) =>
                (0, i.mMO)(async () => {
                    let { default: l } = await n.e("6759").then(n.bind(n, 953722));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            h(p({}, n), {
                                directoryGuildName: e.name,
                                directoryGuildId: e.id,
                                directoryChannelId: t.id,
                            }),
                        );
                }),
        },
        {
            key: "INVITE_MEMBERS",
            renderIcon: (e) =>
                (0, r.jsx)(i.DpX, {
                    className: e,
                }),
            getName: () => f.intl.string(f.t.MJQOuJ),
            handler: (e, t) =>
                (0, i.mMO)(async () => {
                    let { default: l } = await Promise.all([n.e("43600"), n.e("65202")]).then(n.bind(n, 234355));
                    return (n) =>
                        (0, r.jsx)(
                            l,
                            h(p({}, n), {
                                guild: e,
                                channel: t,
                                source: d.PE1.HUB_SIDEBAR,
                            }),
                        );
                }),
        },
    ],
    g = (e) => {
        let { guild: t, channel: n } = e,
            i = (0, l.bG)([c.A], () => null != n && c.A.getChannelId() === n.id),
            o = (0, u.x)(n);
        return (0, r.jsx)(r.Fragment, {
            children: b.map((e) => {
                let { key: l, getName: c, handler: u, renderIcon: d } = e,
                    f = "".concat(l, "-").concat(t.id);
                return (0, r.jsx)(
                    a.G,
                    {
                        id: f,
                        renderIcon: d,
                        text: c(),
                        selected: i && "JOIN_SERVERS" === l,
                        onClick: null != n ? () => u(t, n) : void 0,
                        trailing: "JOIN_SERVERS" === l && o > 0 ? (0, s.w)(o) : null,
                    },
                    f,
                );
            }),
        });
    };
