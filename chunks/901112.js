var r = n(708146),
    i = n(752266);
class a extends Error {
    name = "NextActionInstructionsMissing";
    constructor() {
        super("Stripe next action context has no client secret or instructions url");
    }
}
class l extends Error {
    name = "StripeNextActionFailed";
    constructor(e) {
        super(`Stripe next action failed: ${e}`);
    }
}
function o(e) {
    if (null == e) throw new a();
    window.open(e);
}
async function u(e, t) {
    let { client_secret: n, instructions_url: r } = e;
    if (null == n) return void o(r);
    let a = await (0, i.h)(t),
        { error: u } = await a.handleNextAction({ clientSecret: n });
    if (null != u) throw new l(u.message);
}
n.d(
    t,
    {},
    {
        A: async function (e, t) {
            try {
                await u(e, t);
            } catch (t) {
                (r.r.report({ site: "order_signing_reopen_next_action" }, t),
                    null != e.client_secret && null != e.instructions_url && o(e.instructions_url));
            }
        },
        Z: u,
    },
);
