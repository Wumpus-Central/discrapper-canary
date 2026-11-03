n.d(t, { A: () => o });
var i = n(439372),
    r = n(828596),
    a = n(313217),
    s = n(652215);
class l extends i.A {
    actions = { POST_CONNECTION_OPEN: this.handlePostConnectionOpen.bind(this) };
    async handlePostConnectionOpen() {
        (0, a.F)("collectibles_pricing_manager") && (await (0, r.l9)({ applicationId: s.FYj }));
    }
}
let o = new l();
