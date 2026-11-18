var n = r(949192),
    i = r(752266);
function l(e) {
    if (null == e) throw Error("Stripe next action context has no client secret or instructions url");
    window.open(e);
}
async function a(e, t) {
    let { client_secret: r, instructions_url: n } = e;
    if (null == r) return void l(n);
    let a = await (0, i.h)(t),
        { error: o } = await a.handleNextAction({ clientSecret: r });
    if (null != o) throw Error(`Stripe next action failed: ${o.message}`);
}
r.d(
    t,
    {},
    {
        A: async function (e, t) {
            try {
                await a(e, t);
            } catch (t) {
                ((0, n.pM)(t, { tags: { source: "order_signing_reopen_next_action" } }),
                    null != e.client_secret && null != e.instructions_url && l(e.instructions_url));
            }
        },
        Z: a,
    },
);
