var r = n(922248),
    i = n(630449),
    o = n(326447),
    a = n(680753),
    s = n(272469),
    l = n(978862),
    c = n(688238);
function u() {
    let e = (0, i.rm)(),
        t = (0, i.o5)(),
        n = t.getSession() || e.getSession();
    (n && (0, a.Vu)(n), d(), e.setSession(), t.setSession());
}
function d() {
    let e = (0, i.rm)(),
        t = (0, i.o5)(),
        n = (0, i.KU)(),
        r = t.getSession() || e.getSession();
    r && n && n.captureSession(r);
}
n.d(
    t,
    {},
    {
        Cp: function (e, t) {
            return (0, i.o5)().captureException(e, (0, c.li)(t));
        },
        Dp: function () {
            return !!(0, i.KU)();
        },
        J0: function (e) {
            let t = (0, i.KU)(),
                n = (0, i.rm)(),
                o = (0, i.o5)(),
                { release: s, environment: c = r.U } = (t && t.getOptions()) || {},
                { userAgent: d } = l.O.navigator || {},
                p = (0, a.fj)({
                    release: s,
                    environment: c,
                    user: o.getUser() || n.getUser(),
                    ...(d && { userAgent: d }),
                    ...e,
                }),
                h = n.getSession();
            return (
                h && "ok" === h.status && (0, a.qO)(h, { status: "exited" }), u(), n.setSession(p), o.setSession(p), p
            );
        },
        J5: function (e = !1) {
            e ? u() : d();
        },
        NA: function (e, t) {
            (0, i.rm)().setTag(e, t);
        },
        Ol: function () {
            let e = (0, i.KU)();
            return !!e && !1 !== e.getOptions().enabled && !!e.getTransport();
        },
        Q: function () {
            return (0, i.rm)().lastEventId();
        },
        SA: function (e) {
            (0, i.rm)().addEventProcessor(e);
        },
        VN: async function (e) {
            let t = (0, i.KU)();
            return t
                ? t.close(e)
                : (o.T && s.vF.warn("Cannot flush events and disable SDK. No client defined."), Promise.resolve(!1));
        },
        Wt: function (e) {
            (0, i.rm)().setTags(e);
        },
        bX: async function (e) {
            let t = (0, i.KU)();
            return t ? t.flush(e) : (o.T && s.vF.warn("Cannot flush events. No client defined."), Promise.resolve(!1));
        },
        cx: function (e) {
            (0, i.rm)().setExtras(e);
        },
        gV: function (e) {
            (0, i.rm)().setUser(e);
        },
        ky: u,
        l7: function (e, t) {
            (0, i.rm)().setExtra(e, t);
        },
        o: function (e, t) {
            (0, i.rm)().setContext(e, t);
        },
        r: function (e, t) {
            return (0, i.o5)().captureEvent(e, t);
        },
        wd: function (e, t) {
            let n = "string" == typeof t ? t : void 0,
                r = "string" != typeof t ? { captureContext: t } : void 0;
            return (0, i.o5)().captureMessage(e, n, r);
        },
    },
);
