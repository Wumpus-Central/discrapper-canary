n.d(t, { A: () => o });
var i = n(439372),
    r = n(828596);
let a = (0, n(945810).mj)({
    name: "2026-10-collectibles-storefront-pricing-integration",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = n(652215);
class l extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen.bind(this) };
    async handlePostConnectionOpen() {
        a.getConfig({ location: "collectibles_pricing_manager" }).enabled &&
            (await (0, r.l9)({ applicationId: s.FYj }));
    }
}
let o = new l();
