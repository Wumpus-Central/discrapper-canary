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
    p = n(800530),
    _ = n(388032),
    m = n(750412);
let h = 36;
function g() {
    let e = (0, d.P)(),
        t = (0, o.e7)([c.default], () => c.default.getCurrentUser()),
        [n, g] = i.useState(h),
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
                            return null != (t = null == e ? void 0 : e.getBoundingClientRect().height) ? t : h;
                        }),
                    ),
                    h,
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
                title: _.t.uaKrRi,
                description: _.intl.format(_.t.pEdBD4, {
                    termsOfService: p.sQ.TOS_LINK,
                    communityGuidelines: p.sQ.COMMUNITY_GUIDELINES,
                }),
                status: _.t["/Idfao"],
                Icon: l.owK,
                color: s.Z.colors.STATUS_POSITIVE,
            },
            [u.Sn.LIMITED]: {
                title: _.t.epkcmS,
                description: _.intl.string(_.t["774juc"]),
                status: _.t.umleq4,
                Icon: l.Mgn,
                color: s.Z.colors.STATUS_WARNING,
            },
            [u.Sn.VERY_LIMITED]: {
                title: _.t.crzE2X,
                description: _.intl.string(_.t["T/Ufh9"]),
                status: _.t.WBtMHf,
                Icon: l.Mgn,
                color: s.Z.unsafe_rawColors.ORANGE_345,
            },
            [u.Sn.AT_RISK]: {
                title: _.t.XRNVzO,
                description: _.intl.string(_.t["hbH+9S"]),
                status: _.t["7f+4Lg"],
                Icon: l.Mgn,
                color: s.Z.colors.ICON_FEEDBACK_CRITICAL,
            },
            [u.Sn.SUSPENDED]: {
                title: _.t.MExFkz,
                description: _.intl.string(_.t["2liUvt"]),
                status: _.t["0OONGB"],
                Icon: l.k$p,
                color: s.Z.colors.ICON_MUTED,
            },
        },
        { title: O, description: v, color: S, Icon: I } = y[e.state],
        T = Object.keys(y).length;
    return (0, r.jsxs)(l.Zbd, {
        className: m.container,
        outline: !1,
        children: [
            (0, r.jsx)("div", {
                className: m.profile,
                children: (0, r.jsx)(f.Z, {
                    user: t,
                    size: l.EFr.SIZE_80,
                }),
            }),
            (0, r.jsxs)("div", {
                className: m.status,
                children: [
                    (0, r.jsxs)("div", {
                        className: m.title,
                        children: [
                            (0, r.jsx)(l.Heading, {
                                color: "text-strong",
                                variant: "heading-lg/normal",
                                children: _.intl.format(O, {
                                    hook: (e) =>
                                        (0, r.jsx)(l.Text, {
                                            style: { color: S.css },
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
                        className: m.health,
                        style: { height: n },
                        children: [
                            (0, r.jsx)("div", { className: m.line }),
                            Object.entries(y).map((t, n) => {
                                let [i, a] = t,
                                    o = parseInt(i) === e.state;
                                return (0, r.jsxs)(
                                    "div",
                                    {
                                        className: m.statusOption,
                                        ref: (e) => {
                                            E.current[parseInt(i)] = e;
                                        },
                                        children: [
                                            o
                                                ? (0, r.jsx)(I, {
                                                      className: m.marker,
                                                      color: a.color,
                                                  })
                                                : (0, r.jsx)("div", {
                                                      className: m.marker,
                                                      style: {
                                                          marginLeft: 0 === n ? -6 : 0,
                                                          marginRight: n === T - 1 ? -6 : 0,
                                                      },
                                                      children: (0, r.jsx)("div", { className: m.empty }),
                                                  }),
                                            _.intl.format(a.status, {
                                                hook: (e) =>
                                                    (0, r.jsx)(l.Text, {
                                                        color: "text-default",
                                                        variant: "text-sm/normal",
                                                        className: m.statusLabel,
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
