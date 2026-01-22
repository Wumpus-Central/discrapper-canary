r.d(t, {
    default: () => u,
});
var n = r(627968);
r(64700);
var l = r(311907),
    o = r(397927),
    i = r(442433),
    c = r(686956),
    s = r(383394),
    a = r(711014),
    d = r(567035),
    b = r(652215),
    p = r(985018);

function u(e) {
    let { folderId: t, folderName: u, folderColor: f, unread: y, onSelect: O } = e,
        j = (0, l.bG)([a.Ay], () => a.Ay.getGuildFolderById(t), [t]),
        g = (0, l.bG)([s.A], () => s.A.getExpandedFolders().size > 0);
    return (0, n.jsxs)(o.W1t, {
        navId: "guild-context",
        "aria-label": p.intl.string(p.t.HpQykc),
        onClose: i.Z_,
        onSelect: O,
        children: [
            (0, n.jsx)(o.rXV, {
                children: (0, n.jsx)(o.Drp, {
                    id: "mark-folder-read",
                    label: p.intl.string(p.t.thzRJA),
                    action: function () {
                        if (null == j) return;
                        let { guildIds: e } = j;
                        (0, d.A)(e, b.JJy.GUILD_LIST);
                    },
                    disabled: !y,
                }),
            }),
            (0, n.jsxs)(o.rXV, {
                children: [
                    (0, n.jsx)(o.Drp, {
                        id: "folder-settings",
                        label: p.intl.string(p.t.Dx7im5),
                        action: () =>
                            (0, o.mMO)(async () => {
                                let { default: e } = await r.e("99116").then(r.bind(r, 672551));
                                return (r) => {
                                    var l, o;
                                    return (0, n.jsx)(
                                        e,
                                        ((l = (function (e) {
                                            for (var t = 1; t < arguments.length; t++) {
                                                var r = null != arguments[t] ? arguments[t] : {},
                                                    n = Object.keys(r);
                                                "function" == typeof Object.getOwnPropertySymbols &&
                                                    (n = n.concat(
                                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                                        }),
                                                    )),
                                                    n.forEach(function (t) {
                                                        var n;
                                                        (n = r[t]),
                                                            t in e
                                                                ? Object.defineProperty(e, t, {
                                                                      value: n,
                                                                      enumerable: !0,
                                                                      configurable: !0,
                                                                      writable: !0,
                                                                  })
                                                                : (e[t] = n);
                                                    });
                                            }
                                            return e;
                                        })({}, r)),
                                        (o = o =
                                            {
                                                folderId: t,
                                                folderName: u,
                                                folderColor: f,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                                            : (function (e, t) {
                                                  var r = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var n = Object.getOwnPropertySymbols(e);
                                                      r.push.apply(r, n);
                                                  }
                                                  return r;
                                              })(Object(o)).forEach(function (e) {
                                                  Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                                              }),
                                        l),
                                    );
                                };
                            }),
                    }),
                    g &&
                        (0, n.jsx)(o.Drp, {
                            id: "folder-collapse",
                            label: p.intl.string(p.t.rCPsbo),
                            action: () => c.A.collapseAllFolders(),
                        }),
                ],
            }),
        ],
    });
}
