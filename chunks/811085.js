n.d(t, { Z: () => g }), n(388685), n(953529);
var r = n(54381),
    i = n(473749),
    a = n(392711),
    o = n(442837),
    s = n(692547),
    l = n(481060),
    c = n(594174),
    u = n(531441),
    d = n(451284),
    f = n(959562),
    _ = n(800530),
    p = n(388032),
    h = n(498714);
let m = 36;
function g() {
    let e = (0, d.P)(),
        t = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        [n, g] = i.useState(m),
        E = i.useRef({
            [u.Sn.ALL_GOOD]: null,
            [u.Sn.LIMITED]: null,
            [u.Sn.VERY_LIMITED]: null,
            [u.Sn.AT_RISK]: null,
            [u.Sn.SUSPENDED]: null,
        }),
        b = i.useCallback(() => {
            g(
                Math.max(
                    Math.max(
                        ...Object.values(E.current).map((e) => {
                            var t;
                            return null != (t = null == e ? void 0 : e.getBoundingClientRect().height) ? t : m;
                        }),
                    ),
                    m,
                ),
            );
        }, []);
    i.useEffect(() => {
        b();
        let e = (0, a.debounce)(b, 100);
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e);
    }, [b]);
    let y = {
            [u.Sn.ALL_GOOD]: {
                title: p.t.uaKrRi,
                description: p.intl.format(p.t.pEdBD4, {
                    termsOfService: _.sQ.TOS_LINK,
                    communityGuidelines: _.sQ.COMMUNITY_GUIDELINES,
                }),
                status: p.t["/Idfao"],
                Icon: l.owK,
                color: s.Z.colors.STATUS_POSITIVE,
            },
            [u.Sn.LIMITED]: {
                title: p.t.epkcmS,
                description: p.intl.string(p.t["774juc"]),
                status: p.t.umleq4,
                Icon: l.Mgn,
                color: s.Z.colors.STATUS_WARNING,
            },
            [u.Sn.VERY_LIMITED]: {
                title: p.t.crzE2X,
                description: p.intl.string(p.t["T/Ufh9"]),
                status: p.t.WBtMHf,
                Icon: l.Mgn,
                color: s.Z.unsafe_rawColors.ORANGE_345,
            },
            [u.Sn.AT_RISK]: {
                title: p.t.XRNVzO,
                description: p.intl.string(p.t["hbH+9S"]),
                status: p.t["7f+4Lg"],
                Icon: l.Mgn,
                color: s.Z.colors.STATUS_DANGER,
            },
            [u.Sn.SUSPENDED]: {
                title: p.t.MExFkz,
                description: p.intl.string(p.t["2liUvt"]),
                status: p.t["0OONGB"],
                Icon: l.k$p,
                color: s.Z.colors.ICON_MUTED,
            },
        },
        { title: O, description: v, color: I, Icon: T } = y[e.state],
        S = Object.keys(y).length;
    return (0, r.jsxs)(l.Zbd, {
        className: h.container,
        outline: !1,
        children: [
            (0, r.jsx)("div", {
                className: h.profile,
                children: (0, r.jsx)(f.Z, {
                    user: t,
                    size: l.EFr.SIZE_80,
                }),
            }),
            (0, r.jsxs)("div", {
                className: h.status,
                children: [
                    (0, r.jsxs)("div", {
                        className: h.title,
                        children: [
                            (0, r.jsx)(l.Heading, {
                                color: "header-primary",
                                variant: "heading-lg/normal",
                                children: p.intl.format(O, {
                                    hook: (e) =>
                                        (0, r.jsx)(l.Text, {
                                            style: { color: I.css },
                                            variant: "heading-lg/bold",
                                            tag: "span",
                                            children: e,
                                        }),
                                }),
                            }),
                            (0, r.jsx)(l.Text, {
                                color: "text-default",
                                variant: "text-sm/normal",
                                children: v,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: h.health,
                        style: { height: n },
                        children: [
                            (0, r.jsx)("div", { className: h.line }),
                            Object.entries(y).map((t, n) => {
                                let [i, a] = t,
                                    o = parseInt(i) === e.state;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: h.statusOption,
                                        ref: (e) => {
                                            E.current[parseInt(i)] = e;
                                        },
                                        children: [
                                            o
                                                ? (0, r.jsx)(T, {
                                                      className: h.marker,
                                                      color: a.color,
                                                  })
                                                : (0, r.jsx)("div", {
                                                      className: h.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === S - 1 ? -6 : 0,
                                                      },
                                                      children: (0, r.jsx)("div", { className: h.empty }),
                                                  }),
                                            p.intl.format(a.status, {
                                                hook: (e) =>
                                                    (0, r.jsx)(l.Text, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: h.statusLabel,
                                                        children: e,
                                                    }),
                                            }),
                                        ],
                                    },
                                    n,
                                );
                            }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
