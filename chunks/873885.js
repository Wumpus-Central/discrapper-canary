t.d(e, { b: () => E });
var n = t(627968),
    r = t(64700),
    i = t(284009),
    s = t.n(i),
    l = t(13202),
    c = t(935462),
    d = t(834730),
    o = t(534514),
    m = t(821609),
    x = t(811893),
    u = t(228366),
    N = t(370480),
    h = t(738104),
    p = t(235986),
    j = t(626584),
    g = t(936525),
    C = t(375708),
    b = t(729727);
let v = new j.A("TwoWayLink");
function E(a) {
    let {
            platformType: e,
            isWaitingForConnection: t,
            onWaitingForConnection: i,
            expectedCallbackState: j,
            onAuthToken: E,
            onError: k,
            onClose: A,
            img: f,
            title: w,
            body: D,
            redirectDestination: L,
        } = a,
        R = r.useCallback(async () => {
            let a;
            try {
                if (((a = await (0, h.d)(e, { twoWayLinkType: l.I.DESKTOP })), null == a))
                    throw Error("missing authorizeURL");
            } catch (a) {
                v.error("Error opening provider authorize page", a), k();
                return;
            }
            let { state: t } = (0, N.vA)(a);
            s()(null != t, "Authorize URL state query parameter must be present"), i?.(t);
        }, [e, k, i]),
        _ = r.useCallback(
            (a) => {
                let { callbackCode: t, callbackState: n } = a;
                n !== j
                    ? v.warn(`${e} link: received mismatching callback state!`)
                    : E({ callbackCode: t, callbackState: n });
            },
            [e, j, E],
        );
    return (
        r.useEffect(
            () => (
                u.h.subscribe("USER_CONNECTIONS_LINK_CALLBACK", _),
                () => {
                    u.h.unsubscribe("USER_CONNECTIONS_LINK_CALLBACK", _);
                }
            ),
            [_],
        ),
        (0, n.jsxs)(g.A, {
            children: [
                (0, n.jsxs)(c.rQ, {
                    "data-migration-pending": !0,
                    direction: p.A.Direction.VERTICAL,
                    className: b.wx,
                    separator: !1,
                    children: [
                        (0, n.jsx)(d.E, {
                            className: b.u1,
                            variant: "text-xs/bold",
                            color: "text-default",
                            children: C.intl.format(C.t.fHz6eR, { number: 1, total: 2 }),
                        }),
                        (0, n.jsxs)("div", { className: b.bm, children: [f, " "] }),
                        (0, n.jsx)(o.D, { className: b.DD, variant: "heading-xl/extrabold", children: w }),
                        null != A && (0, n.jsx)(c.s_, { "data-migration-pending": !0, className: b.b, onClick: A }),
                    ],
                }),
                (0, n.jsxs)(c.$m, {
                    "data-migration-pending": !0,
                    className: b.rf,
                    paddingFix: !1,
                    children: [
                        (0, n.jsx)(d.E, { tag: "p", variant: "text-md/normal", color: "text-default", children: D }),
                        !t &&
                            null != L &&
                            (0, n.jsx)(d.E, {
                                tag: "p",
                                variant: "text-sm/normal",
                                color: "text-default",
                                children: C.intl.format(C.t.XhlYYn, { redirectUrl: L }),
                            }),
                    ],
                }),
                (0, n.jsx)(c.jl, {
                    "data-migration-pending": !0,
                    className: b.qr,
                    children: (0, n.jsx)(m.$, {
                        variant: t ? "secondary" : "primary",
                        text: C.intl.format(t ? C.t["8Laby+"] : C.t["6623tt"], {
                            popoutWindowIcon: {},
                            popoutWindowIconHook: () =>
                                (0, n.jsx)(x.t, { color: "currentColor", className: b.LE, size: "xs" }),
                        }),
                        onClick: R,
                        fullWidth: !0,
                    }),
                }),
            ],
        })
    );
}
