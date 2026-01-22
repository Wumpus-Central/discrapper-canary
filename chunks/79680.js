r.d(t, {
    A: () => c,
});
var s = r(562465),
    l = r(73153),
    n = r(142120),
    i = r(345942),
    a = r(71393),
    d = r(652215);
let c = {
    acceptGuildTemplate: (e, t, r) => (
        l.h.dispatch({
            type: "GUILD_TEMPLATE_ACCEPT",
            code: e,
        }),
        new Promise((c, u) => {
            s.Bo.post({
                url: d.Rsh.UNRESOLVED_GUILD_TEMPLATE(e),
                body: {
                    name: t,
                    icon: r,
                },
                oldFormErrors: !0,
                rejectWithError: !1,
            }).then(
                (t) => {
                    let r = t.body;
                    l.h.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_SUCCESS",
                        code: e,
                        guild: r,
                    }),
                        n.A.isConnected()
                            ? a.A.addConditionalChangeListener(() => {
                                  if (null != a.A.getGuild(r.id)) return (0, i.u)(r.id), c(r), !1;
                              })
                            : ((0, i.u)(r.id), c(r));
                },
                (t) => {
                    l.h.dispatch({
                        type: "GUILD_TEMPLATE_ACCEPT_FAILURE",
                        code: e,
                    }),
                        u(t.body);
                },
            );
        })
    ),
};
