t.d(e, { b: () => E });
var r = t(477900),
    n = t(582128),
    s = t(284009),
    l = t.n(s),
    i = t(13202),
    c = t(935462),
    o = t(834730),
    d = t(297264),
    m = t(821609),
    x = t(811893),
    u = t(228366),
    N = t(370480),
    h = t(738104),
    p = t(235986),
    j = t(626584),
    g = t(936525),
    C = t(375708),
    b = t(952052);
let v = new j.A("TwoWayLink");
function E(a) {
    let {
            platformType: e,
            isWaitingForConnection: t,
            onWaitingForConnection: s,
            expectedCallbackState: j,
            onAuthToken: E,
            onError: k,
            onClose: A,
            img: f,
            title: w,
            body: D,
            redirectDestination: L,
        } = a,
        R = n.useCallback(async () => {
            let a;
            try {
                if (((a = await (0, h.d)(e, { twoWayLinkType: i.I.DESKTOP })), null == a))
                    throw Error("missing authorizeURL");
            } catch (a) {
                v.error("Error opening provider authorize page", a), k();
                return;
            }
            let { state: t } = (0, N.vA)(a);
            l()(null != t, "Authorize URL state query parameter must be present"), s?.(t);
        }, [e, k, s]),
        _ = n.useCallback(
            (a) => {
                let { callbackCode: t, callbackState: r } = a;
                r !== j
                    ? v.warn(`${e} link: received mismatching callback state!`)
                    : E({ callbackCode: t, callbackState: r });
            },
            [e, j, E],
        );
    return (
        n.useEffect(
            () => (
                u.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", _),
                () => {
                    u.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", _);
                }
            ),
            [_],
        ),
        (0, r.jsxs)(g.A, {
            children: [
                (0, r.jsxs)(c.rQ, {
                    "data-migration-pending": !0,
                    direction: p.A.Direction.VERTICAL,
                    className: b.wx,
                    separator: !1,
                    children: [
                        (0, r.jsx)(o.E, {
                            className: b.u1,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: C.intl.format(C.t.fHz6eR, { number: 1, total: 2 }),
                        }),
                        (0, r.jsxs)("div", { className: b.bm, children: [f, " "] }),
                        (0, r.jsx)(d.D, { className: b.DD, variant: "heading-xl/extrabold", children: w }),
                        null != A && (0, r.jsx)(c.s_, { "data-migration-pending": !0, className: b.b, onClick: A }),
                    ],
                }),
                (0, r.jsxs)(c.$m, {
                    "data-migration-pending": !0,
                    className: b.rf,
                    scrollbarGutter: !1,
                    children: [
                        (0, r.jsx)(o.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: D }),
                        !t &&
                            null != L &&
                            (0, r.jsx)(o.E, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: C.intl.format(C.t.XhlYYn, { redirectUrl: L }),
                            }),
                    ],
                }),
                (0, r.jsx)(c.jl, {
                    "data-migration-pending": !0,
                    className: b.qr,
                    children: (0, r.jsx)(m.$, {
                        variant: t ? "secondary" : "primary",
                        text: C.intl.format(t ? C.t["8Laby+"] : C.t["6623tt"], {
                            popoutWindowIcon: {},
                            popoutWindowIconHook: () =>
                                (0, r.jsx)(x.t, { color: "currentColor", className: b.LE, size: "xs" }),
                        }),
                        onClick: R,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
