n.d(t, { b: () => s });
var i = n(626584),
    r = n(723702),
    a = n(264572).Buffer;
function s(e) {
    let t = new i.A(`RPCServer:${e.name.toUpperCase()}GSI`),
        s = null,
        l = null,
        o = 0,
        d = null;
    function c() {
        return `/${e.name}-gsi-${e.channel}`;
    }
    async function u(i) {
        e.isEnabled() &&
            (null != d && (await d),
            (d = (async () => {
                if (!(0, r.isWindows)()) return;
                if (!i) {
                    s = null;
                    let n = await e.deleteConfig();
                    t.info(`GSI config removal ${n ? "succeeded" : "failed"}`);
                    return;
                }
                let { default: a } = await Promise.all([
                        n.e("644013"),
                        n.e("896691"),
                        n.e("971156"),
                        n.e("260009"),
                        n.e("779367"),
                        n.e("552653"),
                        n.e("85427"),
                        n.e("247917"),
                        n.e("915170"),
                        n.e("35328"),
                        n.e("400088"),
                        n.e("64769"),
                        n.e("371496"),
                        n.e("992956"),
                        n.e("880150"),
                        n.e("490743"),
                        n.e("571702"),
                        n.e("7452"),
                        n.e("529787"),
                        n.e("60002"),
                        n.e("189423"),
                        n.e("415695"),
                        n.e("647913"),
                        n.e("691398"),
                        n.e("266201"),
                        n.e("752704"),
                        n.e("56606"),
                        n.e("611585"),
                        n.e("227652"),
                        n.e("234017"),
                        n.e("629972"),
                        n.e("40791"),
                        n.e("358404"),
                        n.e("996907"),
                        n.e("831130"),
                        n.e("398929"),
                        n.e("377989"),
                        n.e("247932"),
                        n.e("587618"),
                        n.e("985788"),
                        n.e("645499"),
                        n.e("615643"),
                        n.e("454048"),
                        n.e("300699"),
                        n.e("349619"),
                        n.e("543039"),
                        n.e("599666"),
                        n.e("244560"),
                        n.e("398125"),
                        n.e("221825"),
                        n.e("253729"),
                        n.e("930758"),
                        n.e("827708"),
                        n.e("266900"),
                        n.e("901555"),
                        n.e("948804"),
                        n.e("593600"),
                        n.e("695445"),
                        n.e("707826"),
                        n.e("199999"),
                        n.e("890027"),
                        n.e("183776"),
                        n.e("611523"),
                        n.e("417286"),
                        n.e("776195"),
                        n.e("672727"),
                        n.e("809915"),
                        n.e("662174"),
                        n.e("87306"),
                        n.e("361626"),
                        n.e("747017"),
                        n.e("165595"),
                        n.e("445124"),
                        n.e("851130"),
                        n.e("445421"),
                        n.e("832823"),
                        n.e("761935"),
                        n.e("511527"),
                        n.e("763070"),
                        n.e("381933"),
                        n.e("502018"),
                        n.e("249366"),
                        n.e("728633"),
                        n.e("628439"),
                        n.e("631608"),
                        n.e("570506"),
                        n.e("225990"),
                        n.e("539620"),
                        n.e("133902"),
                        n.e("756148"),
                        n.e("485393"),
                        n.e("973794"),
                        n.e("123353"),
                        n.e("401590"),
                        n.e("498215"),
                        n.e("27773"),
                        n.e("252264"),
                        n.e("960478"),
                        n.e("593176"),
                        n.e("621624"),
                        n.e("836545"),
                        n.e("784041"),
                        n.e("858514"),
                        n.e("344265"),
                        n.e("401827"),
                        n.e("869546"),
                        n.e("238412"),
                        n.e("637721"),
                        n.e("231578"),
                        n.e("288705"),
                        n.e("106787"),
                    ]).then(n.bind(n, 33006)),
                    l = a.getPort();
                if (null == l) return void t.info("RPC server not ready yet; deferring GSI config install");
                s = (await e.readToken()) ?? window.crypto.randomUUID().replace(/-/g, "");
                let o = `http://127.0.0.1:${l}${c()}`;
                try {
                    let n = await e.writeConfig(o, s);
                    t.info(`GSI config install ${n ? "succeeded" : "skipped"}`);
                } catch (e) {
                    t.warn("GSI config install failed", e);
                }
            })()),
            await d);
    }
    function _(e, t) {
        (e.setHeader("Connection", "close"), e.writeHead(t), e.end());
    }
    return {
        getGsiPath: c,
        ensureGsiConfigInstalled: u,
        registerGsiHandler: function (e) {
            ((l = e), (o = 0));
        },
        unregisterGsiHandler: function () {
            l = null;
        },
        handleGsiRequest: function (e, n) {
            let i = l;
            if (null == i) return void _(n, 403);
            if (null == s) return void _(n, 503);
            let r = e.headers();
            if (!(r["user-agent"] ?? "").startsWith("Valve/Steam HTTP Client")) return void _(n, 403);
            let d = Number(r["content-length"] ?? NaN);
            if (!Number.isFinite(d) || d > 524288) return void _(n, 413);
            let c = "",
                u = 0,
                E = !1;
            (e.on("data", (e) => {
                if (E) return;
                let t = String(e);
                if ((u += a.byteLength(t)) > 524288) {
                    ((E = !0), _(n, 413));
                    return;
                }
                c += t;
            }),
                e.on("error", () => {}),
                e.on("end", () => {
                    let e;
                    if (!E) {
                        try {
                            e = JSON.parse(c);
                        } catch (e) {
                            _(n, 400);
                            return;
                        }
                        if ("string" != typeof e?.auth?.token || e.auth.token !== s) {
                            (++o >= 5 &&
                                (t.warn("Too many bad GSI requests; unregistering handler for this session"),
                                (l = null)),
                                _(n, 401));
                            return;
                        }
                        (n.writeHead(200), n.end());
                        try {
                            i(e);
                        } catch (e) {
                            t.warn("GSI payload handler threw", e);
                        }
                    }
                }));
        },
    };
}
